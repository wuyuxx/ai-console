const messages = {
	zh: {
		usage: '用法：`ai <问题>` 或 `ai config`',
		configDescription: '配置AI',
		questionPrompt: '向AI提问',
		error: '错误：',
		configSuccess: '配置保存成功！',
		configError: '配置错误：请运行 `ai config` 来配置您的AI。',
		chooseProvider: '选择AI服务提供方',
		inputBaseUrl: '输入基础URL (例如 https://api.openai.com) >>',
		inputApiKey: '输入API密钥 >>',
		inputModel: '输入模型名称 >>',
		pleaseInputBaseUrl: '请输入基础URL！',
		pleaseInputApiKey: '请输入API密钥！',
		pleaseInputModel: '请输入模型名称！'
	},
	en: {
		usage: 'Usage: `ai <question>` OR `ai config`',
		configDescription: 'Configure AI settings',
		questionPrompt: 'Question to ask the AI',
		error: 'Error:',
		configSuccess: 'Configuration saved successfully!',
		configError: 'Config Error. Please run `ai config` to configure your AI.',
		chooseProvider: 'Choose AI Provider',
		inputBaseUrl: 'Input baseUrl (e.g. https://api.openai.com) >>',
		inputApiKey: 'Input API Key >>',
		inputModel: 'Input Model >>',
		pleaseInputBaseUrl: 'Please input baseUrl!',
		pleaseInputApiKey: 'Please input API Key!',
		pleaseInputModel: 'Please input Model!'
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
