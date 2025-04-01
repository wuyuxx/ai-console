# AI 控制台

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/wuyuxx/ai-console)

控制台和终端命令AI助手 | 为开发者设计的命令行工具。获取终端命令帮助、调试建议和技术支持。
当然：支持与技术无关的日常问答

## 功能

- 终端命令专家：专为命令行操作优化的AI助手
- 自动平台检测：无缝支持Windows、Linux和macOS系统
- 支持主流AI服务提供商(OpenAI, OpenRouter, DeepSeek, 本地Ollama)
- 可自定义API端点
- 实时流式响应
- 多语言支持(英文, 中文)

## 安装

```bash
# 全局安装
npm install -g ai-console
```

## 使用

### 配置

使用前需要配置AI提供商信息：

```bash
ai config
```

这将提示您：
1. 选择AI提供商(OpenRouter, OpenAI, DeepSeek, 本地Ollama或自定义)
2. 输入API密钥(如需要)
3. 指定使用的模型名称

### 提问

配置完成后，可以直接提问：

```bash
ai 如何查找过去24小时内修改的所有文件？
```

AI将在终端中以流式文本响应。

## 支持的AI提供商

- **OpenRouter** (`https://openrouter.ai/api`)
- **OpenAI** (`https://api.openai.com`)
- **DeepSeek** (`https://api.deepseek.com`)
- **本地Ollama** (`http://localhost:11434`)
- **自定义OpenAI兼容API** (任何兼容端点)

## 示例

```bash
# 配置工具
ai config

# 获取终端命令帮助
ai 如何查找过去24小时内修改的所有文件？

# 调试命令问题
ai 为什么我的git push命令失败了？

# 学习新命令
ai 如何在Linux中批量重命名文件？
```

## 许可证

MIT © [Wuyu](https://github.com/wuyuxx)

[查看英文版README](README.md)