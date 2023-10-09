<?php
namespace OCA\OpenAi\Settings;

use OCP\AppFramework\Http\TemplateResponse;
use OCP\AppFramework\Services\IInitialState;
use OCP\IConfig;
use OCP\Settings\ISettings;
use OCA\OpenAi\AppInfo\Application;

class Admin implements ISettings {

	public function __construct(
		private IConfig $config,
		private IInitialState $initialStateService
	) {
	}

	/**
	 * @return TemplateResponse
	 */
	public function getForm(): TemplateResponse {
		$apiKey = $this->config->getAppValue(Application::APP_ID, 'api_key');
		$defaultAdminCompletionModelId = $this->config->getAppValue(Application::APP_ID, 'default_completion_model_id', Application::DEFAULT_COMPLETION_MODEL_ID) ?: Application::DEFAULT_COMPLETION_MODEL_ID;
		$serviceUrl = $this->config->getAppValue(Application::APP_ID, 'url');

		$whisperPickerEnabled = $this->config->getAppValue(Application::APP_ID, 'whisper_picker_enabled', '1') === '1';
		$imagePickerEnabled = $this->config->getAppValue(Application::APP_ID, 'image_picker_enabled', '1') === '1';
		$textPickerEnabled = $this->config->getAppValue(Application::APP_ID, 'text_completion_picker_enabled', '1') === '1';
		$translationProviderEnabled = $this->config->getAppValue(Application::APP_ID, 'translation_provider_enabled', '1') === '1';
		$sttProviderEnabled = $this->config->getAppValue(Application::APP_ID, 'stt_provider_enabled', '1') === '1';

		$adminConfig = [
			'url' => $serviceUrl,
			'api_key' => $apiKey,
			'default_completion_model_id' => $defaultAdminCompletionModelId,
			'whisper_picker_enabled' => $whisperPickerEnabled,
			'image_picker_enabled' => $imagePickerEnabled,
			'text_completion_picker_enabled' => $textPickerEnabled,
			'translation_provider_enabled' => $translationProviderEnabled,
			'stt_provider_enabled' => $sttProviderEnabled,
		];
		$this->initialStateService->provideInitialState('admin-config', $adminConfig);

		return new TemplateResponse(Application::APP_ID, 'adminSettings');
	}

	public function getSection(): string {
		return 'connected-accounts';
	}

	public function getPriority(): int {
		return 10;
	}
}
