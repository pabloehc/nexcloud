<?php

declare(strict_types=1);
/**
 * @copyright Copyright (c) 2019 Robin Appelman <robin@icewind.nl>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

namespace OCA\DocumentServer\Document;

use OC\Files\Filesystem;
use OCA\DocumentServer\LocalAppData;
use OCP\Files\File;
use OCA\DocumentServer\DocumentConverter;
use OCP\Files\Folder;
use OCP\Files\IAppData;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use OCP\IConfig;
use OCP\IUser;
use OCP\IUserManager;
use OCP\IUserSession;

class DocumentStore {
	private $appData;
	private $documentConverter;
	private $config;
	private $rootFolder;
	private $userManager;
	private $localAppData;
	private $userSession;

	public function __construct(
		IAppData $appData,
		DocumentConverter $documentConverter,
		IConfig $config,
		IRootFolder $rootFolder,
		IUserManager $userManager,
		LocalAppData $localAppData,
		IUserSession $userSession
	) {
		$this->appData = $appData;
		$this->documentConverter = $documentConverter;
		$this->config = $config;
		$this->rootFolder = $rootFolder;
		$this->userManager = $userManager;
		$this->localAppData = $localAppData;
		$this->userSession = $userSession;
	}

	private function getDocumentFolder(int $documentId): ISimpleFolder {
		try {
			return $this->appData->getFolder("doc_$documentId");
		} catch (NotFoundException $e) {
			return $this->appData->newFolder("doc_$documentId");
		}
	}

	public function getDocumentForEditor(int $documentId, File $sourceFile, string $sourceFormat, string $password = null): ISimpleFile {
		$docFolder = $this->getDocumentFolder($documentId);
		try {
			return $docFolder->getFile('Editor.bin');
		} catch (NotFoundException $e) {
			if ($sourceFile->getOwner() !== null) {
				$ownerId = $sourceFile->getOwner()->getUID();
			} else {
				// if the file does not have an owner set (groupfolders/external storage)
				// we get the userid from the path instead, since the only thing we need to make sure
				// is that we have a userid that has access
				$path = $sourceFile->getPath();
				[, $ownerId] = explode('/', $path);
			}

			$source = $sourceFile->fopen('r');

			if (!$source) {
				throw new NotFoundException();
			}

			$this->localAppData->getReadWriteLocalPath($docFolder, function (string $localPath) use ($source, $sourceFormat, $password) {
				$this->documentConverter->getEditorBinary($source, $sourceFormat, $localPath, $password);
			});

			// maybe save in a new db table
			$docFolder->newFile('fileid')->putContent((string)$sourceFile->getId());
			$docFolder->newFile('owner')->putContent((string)$ownerId);

			return $docFolder->getFile('Editor.bin');
		}
	}

	public function getEmbeddedFiles(int $documentId): array {
		$docFolder = $this->localAppData->upgradeFolder($this->getDocumentFolder($documentId));
		$files = [];
		try {
			/** @var Folder $mediaFolder */
			$mediaFolder = $docFolder->get('media');
			foreach ($mediaFolder->getDirectoryListing() as $mediaFile) {
				$files[] = 'media/' . $mediaFile->getName();
			}
		} catch (NotFoundException $e) {
		}

		return $files;
	}

	public function openDocumentFile(int $documentId, string $path): File {
		$docFolder = $this->localAppData->upgradeFolder($this->getDocumentFolder($documentId));
		return $docFolder->get($path);
	}

	public function saveDocumentFile(int $documentId, string $path, $data) {
		$docFolder = $this->localAppData->upgradeFolder($this->getDocumentFolder($documentId));
		$docFolder->newFile($path)->putContent($data);
	}

	public function saveChanges(int $documentId, array $changes) {
		$docFolder = $this->getDocumentFolder($documentId);

		$owner = $docFolder->getFile('owner')->getContent();
		$sourceFileId = (int)$docFolder->getFile('fileid')->getContent();
		$sourceFiles = $this->rootFolder->getUserFolder($owner)->getById($sourceFileId);
		if (count($sourceFiles)) {
			/** @var File $sourceFile */
			$sourceFile = current($sourceFiles);
		} else {
			// fallback to slow search if the original opener no longer has access to the file
			$sourceFile = $this->searchForFileById($sourceFileId);
			if (!$sourceFile) {
				// file no longer exists, return without saving or throwing an error since we no longer care about the changes
				return;
			}
		}

		$targetExtension = $sourceFile->getExtension();

		$this->localAppData->getReadWriteLocalPath($docFolder, function (string $localPath) use ($owner, $changes, $targetExtension, $sourceFile) {
			$target = $localPath . '/saved.' . $targetExtension;
			$this->documentConverter->saveChanges($localPath, $changes, $target, $targetExtension);

			$savedContent = fopen($target, 'r');

			if (!Filesystem::$loaded) {
				// the filesystem needs to be initialized for a user in order for hooks to trigger
				// just the `getUserFolder` is not enough for this
				[, $user] = explode('/', $sourceFile->getPath());
				$userDir = '/' . $user . '/files';
				Filesystem::init($user, $userDir);
			}

			// set owner in user session for file hooks
			$ownerObject = $this->userManager->get($owner);
			$oldUser = $this->userSession->getUser();
			$this->userSession->setUser($ownerObject);

			$sourceFile->putContent(stream_get_contents($savedContent));

			$this->userSession->setUser($oldUser);
		});
	}

	/**
	 * Find a file by fileid when we don't know the owner id
	 */
	private function searchForFileById(int $fileId): ?File {
		$file = null;

		$this->userManager->callForSeenUsers(function (IUser $user) use ($fileId, &$file) {
			$sourceFiles = $this->rootFolder->getUserFolder($user->getUID())->getById($fileId);
			if (count($sourceFiles)) {
				/** @var File $sourceFile */
				$file = current($sourceFiles);
				// stop iterating trough users
				return false;
			} else {
				return true;
			}
		});

		return $file;
	}

	/**
	 * @return int[]
	 */
	public function getOpenDocuments(): array {
		try {
			$content = $this->appData->getDirectoryListing();
		} catch (NotFoundException $e) {
			return [];
		}
		$content = array_filter($content, function (ISimpleFolder $folder) {
			return substr($folder->getName(), 0, 4) === 'doc_';
		});

		return array_map(function (ISimpleFolder $folder) {
			return (int)substr($folder->getName(), 4);
		}, $content);
	}

	public function closeDocument(int $documentId) {
		$this->getDocumentFolder($documentId)->delete();
	}

	public function convertForDownload(int $documentId, $stream, array $cmd): string {
		$title = $cmd["title"];
		$docFolder = $this->getDocumentFolder($documentId);

		$title = str_replace('/', '-', $title);
		$title = str_replace('\\', '-', $title);
		$sourceFile = $docFolder->newFile('save-download.bin');
		$sourceFile->putContent($stream);
		try {
			$docFolder->getFile($title)->delete();
		} catch (\Exception $e) {
		}

		$this->localAppData->getReadWriteLocalPath($docFolder, function (string $localPath) use ($title, $cmd, $sourceFile) {
			$command = new ConvertCommand($localPath . '/save-download.bin', $localPath . '/' . $title);
			$command->setTargetFormat($cmd["outputformat"]);
			$command->setNoBase64($cmd["nobase64"]);

			$this->documentConverter->runCommand($command);

			$sourceFile->delete();
		});

		return $title;
	}

	public function convert(int $documentId, string $targetFormat): string {
		$docFolder = $this->getDocumentFolder($documentId);

		$this->localAppData->getReadWriteLocalPath($docFolder, function (string $localPath) use ($targetFormat) {
			$command = new ConvertCommand($localPath . '/Editor.bin', $localPath . '/convert.' . $targetFormat);
			$command->setTargetFormat(DocumentFormat::getFormatFromExtension($targetFormat));

			$this->documentConverter->runCommand($command);
		});

		return '/convert.' . $targetFormat;
	}

	public function stashDocumentUrl(int $documentId, string $url) {
		$docFolder = $this->getDocumentFolder($documentId);
		$docFolder->newFile('url')->putContent($url);
	}

	public function getStashedDocumentUrl(int $documentId): ?string {
		$docFolder = $this->getDocumentFolder($documentId);
		try {
			$file = $docFolder->getFile('url');
			$url = $file->getContent();
			$file->delete();
			return $url;
		} catch (NotFoundException $e) {
			return null;
		}
	}
}
