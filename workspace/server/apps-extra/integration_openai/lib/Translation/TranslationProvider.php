<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2023 Julien Veyssier <julien-nc@posteo.net>
 *
 * @author Julien Veyssier <julien-nc@posteo.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


namespace OCA\OpenAi\Translation;

use Exception;
use OCA\OpenAi\AppInfo\Application;
use OCA\OpenAi\Service\OpenAiAPIService;
use OCP\ICacheFactory;
use OCP\L10N\IFactory;
use OCP\Translation\IDetectLanguageProvider;
use OCP\Translation\ITranslationProvider;
use OCP\Translation\LanguageTuple;
use Psr\Log\LoggerInterface;
use RuntimeException;

class TranslationProvider implements ITranslationProvider, IDetectLanguageProvider {

	public function __construct(
		private ICacheFactory $cacheFactory,
		private IFactory $l10nFactory,
		private OpenAiAPIService $openAiAPIService,
		private LoggerInterface $logger,
		private ?string $userId
	) {
	}

	public function getName(): string {
		return 'OpenAI\'s ChatGpt 3.5';
	}

	public function getAvailableLanguages(): array {
		$cache = $this->cacheFactory->createDistributed('integration_openai');
		if ($cached = $cache->get('languages')) {
			return array_map(function ($entry) {
				return $entry instanceof LanguageTuple ? $entry : LanguageTuple::fromArray($entry);
			}, $cached);
		}

		$coreL = $this->l10nFactory->getLanguages();
		$languages = array_merge($coreL['commonLanguages'], $coreL['otherLanguages']);

		$availableLanguages = [];
		foreach ($languages as $sourceLanguage) {
			foreach ($languages as $targetLanguage) {
				if ($targetLanguage['code'] === $sourceLanguage['code']) {
					continue;
				}

				$availableLanguages[] = new LanguageTuple(
					$sourceLanguage['code'], $sourceLanguage['name'],
					$targetLanguage['code'], $targetLanguage['name']
				);
			}
		}

		$cache->set('languages', $availableLanguages, 3600);
		return $availableLanguages;
	}

	public function detectLanguage(string $text): ?string {
		$prompt = 'What language is this (answer with the language name only, in English): ' . $text;
		$completion = $this->openAiAPIService->createChatCompletion($this->userId, $prompt, 1, 'gpt-3.5-turbo', 100, false);
		if (isset($completion['choices']) && is_array($completion['choices']) && count($completion['choices']) > 0) {
			$choice = $completion['choices'][0];
			if (isset($choice['message'], $choice['message']['content'])) {
				return $choice['message']['content'];
			}
		}
		return null;
	}

	private function getCoreLanguagesByCode(): array {
		$coreL = $this->l10nFactory->getLanguages();
		$coreLanguages = array_reduce(array_merge($coreL['commonLanguages'], $coreL['otherLanguages']), function ($carry, $val) {
			$carry[$val['code']] = $val['name'];
			return $carry;
		});
		return $coreLanguages;
	}

	public function translate(?string $fromLanguage, string $toLanguage, string $text): string {
		$cacheKey = ($fromLanguage ?? '') . '/' . $toLanguage . '/' . md5($text);

		$cache = $this->cacheFactory->createDistributed('integration_openai');
		if ($cached = $cache->get($cacheKey)) {
			return $cached;
		}

		try {
			$coreLanguages = $this->getCoreLanguagesByCode();

			$toLanguage = $coreLanguages[$toLanguage];
			if ($fromLanguage !== null) {
				$this->logger->debug('OpenAI translation FROM['.$fromLanguage.'] TO['.$toLanguage.']', ['app' => Application::APP_ID]);
				$fromLanguage = $coreLanguages[$fromLanguage] ?? $fromLanguage;
				$prompt = 'Translate from ' . $fromLanguage . ' to ' . $toLanguage . ': ' . $text;
			} else {
				$this->logger->debug('OpenAI translation TO['.$toLanguage.']', ['app' => Application::APP_ID]);
				$prompt = 'Translate to ' . $toLanguage . ': ' . $text;
			}
			$completion = $this->openAiAPIService->createChatCompletion($this->userId, $prompt, 1, 'gpt-3.5-turbo', 4000, false);
			if (isset($completion['choices']) && is_array($completion['choices']) && count($completion['choices']) > 0) {
				$choice = $completion['choices'][0];
				if (isset($choice['message'], $choice['message']['content'])) {
					$translation = $choice['message']['content'];
					$cache->set($cacheKey, $translation, 3600);
					return $translation;
				}
			}
			if (isset($choice['body']['error']['message'])) {
				throw new Exception($choice['body']['error']['message']);
			}
		} catch (Exception $e) {
			throw new RuntimeException("Failed translate from {$fromLanguage} to {$toLanguage}", 0, $e);
		}
		throw new RuntimeException("Failed translate from {$fromLanguage} to {$toLanguage}");
	}
}
