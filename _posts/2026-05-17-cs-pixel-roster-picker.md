---
layout: post
title: "Pixel Roster Picker v1.0.0 Release Notes"
date: 2026-05-17
categories: CS
tags: CS Tools Classroom JavaScript GitHub-Pages
---

# Pixel Roster Picker v1.0.0 发行说明

**Live Demo / 在线使用：**  
[https://shishiapcs.github.io/pixel-roster-picker/](https://shishiapcs.github.io/pixel-roster-picker/)

---

## 简介

**Pixel Roster Picker** 是一个为课堂设计的像素风随机点名工具。

它不是普通的抽奖轮盘，而是一个更适合课堂投影使用的 **Roster Scanner**。当老师点击开始后，学生姓名会像游戏里的扫描列表一样滚动，最后锁定一位学生。这个过程既公平、清楚，也能制造一点点课堂悬念，让学生更愿意保持专注和准备状态。

这个工具适合用于：

- 课堂随机点名
- 口语练习抽人
- 小组展示抽人
- 课堂问答
- AP Computer Science / ESL / IELTS / TOEFL 等课程中的互动环节

---

## 版本信息

| 项目 | 内容 |
|---|---|
| Version | v1.0.0 |
| Release Type | First public release |
| App Type | Static Web App |
| Tech Stack | HTML, CSS, JavaScript |
| Hosting | GitHub Pages |
| Data Storage | Browser localStorage |
| Backend | Not required |
| Login | Not required |
| Database | Not required |

---

## 核心特点

### 1. 像素风课堂界面

Pixel Roster Picker 使用复古像素风设计，整体风格接近：

- 旧式掌机游戏界面
- RPG 菜单框
- 复古终端界面
- 像素街机风课堂工具

它的视觉重点不是花哨，而是 **清楚、稳定、适合投影、学生一眼看得懂**。

---

### 2. Roster Scanner 扫描动画

传统随机点名工具常用转盘，但转盘在课堂上有时显得像抽奖游戏。

Pixel Roster Picker 使用的是 **vertical roster scanner**，也就是垂直滚动的名单扫描器。

点击开始后：

1. 学生姓名开始滚动
2. 中间高亮区域像“锁定区”
3. 动画逐渐减速
4. 最终锁定一位学生
5. 页面显示醒目的 reveal message

这种方式更像课堂任务分配，而不是娱乐抽奖。

---

### 3. 公平的点名逻辑

工具会自动排除：

- 已经被抽中过的学生
- 被标记为 absent 的学生

每一轮中，只有当前仍然 eligible 的学生会进入随机选择池。

当所有可用学生都已经被抽过后，系统会提示老师重置 picked students，开始新一轮。

---

### 4. Teacher Panel 教师控制面板

教师控制面板默认不会抢学生视线，但老师可以随时打开管理班级。

目前支持：

- 创建新班级
- 切换班级
- 重命名班级
- 删除班级
- 粘贴学生名单
- 支持一行一个名字
- 支持逗号分隔名单
- 标记学生 absent / present
- 清除所有缺勤状态
- 查看 picked history
- Undo last pick
- Reset picked students

---

### 5. 本地保存数据

Pixel Roster Picker 使用浏览器的 **localStorage** 保存数据。

这意味着：

- 不需要登录
- 不需要服务器
- 不需要数据库
- 学生名单不会上传到云端
- 数据保存在当前浏览器中

注意：如果换电脑、换浏览器，或者清理浏览器数据，原来的班级数据可能不会自动同步。

---

### 6. 适合 GitHub Pages 部署

这个项目是纯静态网页应用，只需要：

- `index.html`
- `style.css`
- `app.js`

不需要 React、Vue、Node.js、数据库或后端服务器。

因此它非常适合部署在 GitHub Pages 上。

---

## 使用方法

### 在线使用

打开：

[https://shishiapcs.github.io/pixel-roster-picker/](https://shishiapcs.github.io/pixel-roster-picker/)

然后进入 Teacher Panel，添加自己的班级和学生名单即可。

### 本地使用

如果下载到本地，只需要打开：

```text
index.html
````

即可运行。

---

## 隐私说明

Pixel Roster Picker 不会把学生名单上传到服务器。

所有班级数据、学生名单、缺勤状态和点名记录都保存在老师当前使用的浏览器中。

如果你在公共电脑上使用，建议课后清理浏览器数据，或者不要保存真实学生姓名。

---

## Pixel Roster Picker v1.0.0 Release Notes  

**Pixel Roster Picker** is a pixel-style random student picker designed for classroom engagement.

It is not a traditional lottery wheel. Instead, it uses a vertical **Roster Scanner** animation to create a fair, visible, and slightly suspenseful classroom moment. The goal is simple: help students feel that they might be chosen, so they stay engaged and prepared.

---

## Key Features

### 1. Pixel-style classroom interface

The app uses a retro pixel-art style inspired by old-school handheld games, RPG menu boxes, and terminal-like classroom tools.

The design focuses on:

* High readability
* Large projected names
* Clear classroom layout
* Simple teacher controls
* A fun but not distracting visual style

---

### 2. Roster Scanner animation

Instead of a spinning wheel, Pixel Roster Picker uses a vertical scrolling roster scanner.

When the teacher starts the scanner:

1. Student names scroll through the center area
2. The scanner gradually slows down
3. One student is locked into the highlighted center row
4. A reveal message appears
5. The selected name is displayed clearly

This makes the selection feel visible and fair without turning the classroom moment into a lottery game.

---

### 3. Fair picking logic

The picker excludes:

* Absent students
* Students who have already been picked in the current round

Once all available students have been picked, the app asks the teacher to reset the picked list before starting a new round.

---

### 4. Teacher Panel

The Teacher Panel helps teachers manage the class without distracting students.

It supports:

* Creating classes
* Switching between classes
* Renaming classes
* Deleting classes
* Pasting student rosters
* One-name-per-line input
* Comma-separated input
* Marking students absent or present
* Clearing all absences
* Viewing picked history
* Undoing the last pick
* Resetting picked students

---

### 5. Local browser storage

Pixel Roster Picker stores data using browser **localStorage**.

That means:

* No backend required
* No login required
* No database required
* No cloud upload required
* Class data stays in the current browser

Please note that data is not automatically synced across devices or browsers.

---

### 6. GitHub Pages ready

This is a fully static web app built with:

* HTML
* CSS
* JavaScript

No frameworks, build tools, or servers are required.

It can be hosted directly on GitHub Pages.

---

## How to Use

Open the live app:

[https://shishiapcs.github.io/pixel-roster-picker/](https://shishiapcs.github.io/pixel-roster-picker/)

Then open the Teacher Panel, create your class, paste your student roster, and start scanning.

---

## Privacy Note

Pixel Roster Picker does not upload student data to any server.

Class names, student names, attendance status, and picked history are stored only in the teacher’s current browser.

If you use the app on a shared or public computer, consider clearing the browser data after class.

---

## Final Note

This is the first public release of Pixel Roster Picker.

The goal of v1.0.0 is to provide a simple, reliable, teacher-friendly classroom tool that is easy to open, easy to project, and easy to use without technical setup.

