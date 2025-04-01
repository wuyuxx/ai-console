const messages = {
	zh: {
		configSuccess: '配置保存成功！',
		configError: '配置错误：请运行 `ai config` 来配置您的AI。',
		usage: '用法：`ai <问题>` 或 `ai config`',
		error: '错误：',
		inputBaseUrl: '输入基础URL (例如 https://api.openai.com) >>',
		inputApiKey: '输入API密钥 >>',
		inputModel: '输入模型名称 >>',
		pleaseInputBaseUrl: '请输入基础URL！',
		pleaseInputApiKey: '请输入API密钥！',
		pleaseInputModel: '请输入模型名称！',
		chooseProvider: '选择AI提供商'
	},
	en: {
		configSuccess: 'Configuration saved successfully!',
		configError: 'Config Error. Please run `ai config` to configure your AI.',
		usage: 'Usage: `ai <question>` OR `ai config`',
		error: 'Error:',
		inputBaseUrl: 'Input baseUrl (e.g. https://api.openai.com) >>',
		inputApiKey: 'Input API Key >>',
		inputModel: 'Input Model >>',
		pleaseInputBaseUrl: 'Please input baseUrl!',
		pleaseInputApiKey: 'Please input API Key!',
		pleaseInputModel: 'Please input Model!',
		chooseProvider: 'Choose AI Provider'
	}
};

const getDefaultLanguage = () => {
	const locale = process.env.LANG || 'en';
	return locale.startsWith('zh') ? 'zh' : 'en';
};

const i18n = {
	language: getDefaultLanguage(),
	t(key) {
		return messages[this.language][key] || key;
	},
	setLanguage(lang) {
		if (messages[lang]) {
			this.language = lang;
		}
	}
};

export default i18n;
