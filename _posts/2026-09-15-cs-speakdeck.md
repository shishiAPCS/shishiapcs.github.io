---
title: SpeakDeck 英语口语转写与练习音频生成工具
mathjax: true
layout: post
categories: media
---

### 当前版本：[打开 SpeakDeck](https://shishiapcs.github.io/speakdeck/)

旧版：[V2](https://shishiapcs.github.io/whisper-transcriber/) · [V1](https://shishiapcs.github.io/transcriber/)

---

## 更新记录

### 2026-09-15

- Whisper `tiny.en` 支持首次自动下载、浏览器缓存和实时下载进度；
- 默认简体中文，新增中英文一键切换并自动记住语言设置；
- 保留手动模型下载与导入作为备用方案。

### 2026-07-03

- 优化响应式布局，适配不同屏幕尺寸。

### 2026-07-02

- 新增 **TTS Audio**：使用 Kokoro 在浏览器中生成英语练习音频，支持美式 / 英式男女声、波形预览和 WAV 下载；
- TTS 模型支持自动下载与浏览器缓存。

### 2026-06-23

- 项目由 **Whisper Transcriber** 更名为 **SpeakDeck**；
- 重做为复古 cassette / pixel 风格的音频与转写工作台。

### 2026-06-22

- Transcript Playback 新增键盘快捷键和逐句跳转。

### 2026-06-20

- 新增 **Copy AI polish prompt** 和常用 AI 工具快捷入口。

### 2026-06-13

- 新增同步转写回放、句子高亮、点击跳转、文本搜索和 Whisper 模型缓存。

### 2026-06-08

- Whisper Transcriber 独立成项目，重新设计界面和模型加载流程。

### 2025-08-14

- 早期版本上线，实现 Whisper.cpp 浏览器本地英文语音转写。

---

## SpeakDeck 是什么

SpeakDeck 是一个为英语口语练习设计的浏览器工具箱，目前包含两个互补的工作流：

| 工具 | 用途 |
|---|---|
| **语音转写 / Transcribe** | 上传自己的录音，用 Whisper 本地转写并逐句复听 |
| **语音合成 / TTS** | 输入英文稿件，用 Kokoro 生成练习音频并跟读模仿 |

它们组合起来，可以形成一个简单的口语练习闭环：

```text
写稿
↓
听标准读法
↓
跟读 / 录音
↓
Whisper 转写
↓
对照检查
↓
AI 润色
↓
再次练习
```

---

## 主要功能

- **浏览器本地英文转写**：使用 Whisper.cpp WebAssembly；
- **自动模型准备**：首次自动下载 `tiny.en`，之后通常直接从浏览器缓存恢复；
- **Transcript Playback**：同步文本高亮、点击句子跳转、搜索和键盘控制；
- **TTS 练习音频**：使用 Kokoro 生成美式 / 英式语音，可预听并下载 WAV；
- **中英文界面**：默认简体中文，可一键切换 English；
- **AI 口语润色**：一键复制整理后的转写稿和修改提示词，再交给 AI 工具继续处理。

---

## 如何使用

### 语音转写

1. 打开 SpeakDeck，等待 Whisper 模型自动准备完成；
2. 选择学生录音；
3. 点击 **开始转写**；
4. 在「转写回放」中逐句听取、搜索和检查；
5. 需要进一步修改时，点击 **复制 AI 润色提示**。

如果自动下载模型失败，可以展开「模型设置」，手动下载并导入 `tiny.en`、`base.en` 或 `small.en`。

### 语音合成

1. 切换到 **语音合成**；
2. 输入或粘贴英文练习稿；
3. 选择美式 / 英式男女声；
4. 点击 **生成语音**；
5. 在线预听，或下载 WAV 用于跟读和 shadowing。

---

## 隐私

Whisper 转写和 TTS 推理主要在用户自己的浏览器中完成。

SpeakDeck 不会把学生录音上传到自己的服务器。

**复制 AI 润色提示**只会把文本复制到剪贴板；AI 快捷入口也只负责打开对应网站，不会自动提交任何内容。

如果用户自行将文本发送给 ChatGPT、DeepSeek、Kimi 等第三方服务，则适用相应平台自己的隐私政策。

---

## 浏览器建议

推荐使用最新版 **Chrome** 或 **Microsoft Edge**。

部分 Safari / iOS Safari 对某些 `.m4a` 音频编码的兼容性可能较差。如果音频无法解析，可以先转换为 MP3 或 WAV。

```bash
ffmpeg -i input.m4a -ac 1 -ar 16000 output.wav
```

---

## 技术实现

```text
GitHub Pages
HTML + CSS + Vanilla JavaScript
Whisper.cpp + WebAssembly
Kokoro TTS + ONNX / WASM
IndexedDB model cache
```

项目保持静态网页、本地优先的设计，不需要账号或独立后端服务器。
