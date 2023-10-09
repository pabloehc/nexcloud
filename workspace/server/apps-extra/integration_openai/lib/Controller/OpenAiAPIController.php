<?php
/**
 * Nextcloud - OpenAI
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Julien Veyssier <julien-nc@posteo.net>
 * @copyright Julien Veyssier 2022
 */

namespace OCA\OpenAi\Controller;

use OCA\OpenAi\AppInfo\Application;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\MultipleObjectsReturnedException;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\DB\Exception;
use OCP\IRequest;

use OCA\OpenAi\Service\OpenAiAPIService;

class OpenAiAPIController extends Controller {

	public function __construct(
		string                   $appName,
		IRequest                 $request,
		private OpenAiAPIService $openAiAPIService,
		private IInitialState    $initialStateService,
		private ?string          $userId
	) {
		parent::__construct($appName, $request);
	}

	/**
	 * @NoAdminRequired
	 *
	 * @return DataResponse
	 */
	public function getModels(): DataResponse {
		$response = $this->openAiAPIService->getModels($this->userId);
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		$response['default_completion_model_id'] = $this->openAiAPIService->getUserDefaultCompletionModelId($this->userId);
		return new DataResponse($response);
	}

	/**
	 * @NoAdminRequired
	 *
	 * @param int $type
	 * @return DataResponse
	 * @throws Exception
	 */
	public function getPromptHistory(int $type): DataResponse {
		$response = $this->openAiAPIService->getPromptHistory($this->userId, $type);
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse($response);
	}

	/**
	 * @NoAdminRequired
	 *
	 * @param string $prompt
	 * @param int $n
	 * @param string|null $model
	 * @param int $maxTokens
	 * @return DataResponse
	 * @throws Exception
	 */
	public function createCompletion(string $prompt, int $n = 1, ?string $model = null, int $maxTokens = 1000): DataResponse {
		if ($model === null) {
			$model = $this->openAiAPIService->getUserDefaultCompletionModelId($this->userId);
		}
		if (str_starts_with($model, 'gpt-')) {
			$response = $this->openAiAPIService->createChatCompletion($this->userId, $prompt, $n, $model, $maxTokens);
		} else {
			$response = $this->openAiAPIService->createCompletion($this->userId, $prompt, $n, $model, $maxTokens);
		}
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse($response);
	}

	/**
	 * @NoAdminRequired
	 *
	 * @param string $audioBase64
	 * @param bool $translate
	 * @return DataResponse
	 */
	public function transcribe(string $audioBase64, bool $translate = true): DataResponse {
		$response = $this->openAiAPIService->transcribeBase64Mp3($this->userId, $audioBase64, $translate);
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse($response);
	}

	/**
	 * @NoAdminRequired
	 *
	 * @param string $prompt
	 * @param int $n
	 * @param string $size
	 * @return DataResponse
	 * @throws Exception
	 */
	public function createImage(string $prompt, int $n = 1, string $size = Application::DEFAULT_IMAGE_SIZE): DataResponse {
		$response = $this->openAiAPIService->createImage($this->userId, $prompt, $n, $size);
		if (isset($response['error'])) {
			return new DataResponse($response, Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse($response);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string $hash
	 * @param int $urlId
	 * @return DataDisplayResponse
	 * @throws DoesNotExistException
	 * @throws MultipleObjectsReturnedException
	 * @throws Exception
	 */
	public function getImageGenerationContent(string $hash, int $urlId): DataDisplayResponse {
		$image = $this->openAiAPIService->getGenerationImage($hash, $urlId);
		if ($image !== null && isset($image['body'], $image['headers'])) {
			$response = new DataDisplayResponse(
				$image['body'],
				Http::STATUS_OK,
				['Content-Type' => $image['headers']['Content-Type'][0] ?? 'image/jpeg']
			);
			$response->cacheFor(60 * 60 * 24, false, true);
			return $response;
		}
		return new DataDisplayResponse('', Http::STATUS_NOT_FOUND);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string $hash
	 * @return TemplateResponse
	 * @throws Exception
	 * @throws MultipleObjectsReturnedException
	 */
	public function getImageGenerationPage(string $hash): TemplateResponse {
		$generationData = $this->openAiAPIService->getGenerationInfo($hash);
		$this->initialStateService->provideInitialState('generation', $generationData);
		return new TemplateResponse(Application::APP_ID, 'imageGenerationPage');
	}
}
