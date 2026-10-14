---
layout: post
title: "Pixel Roster Picker & Pixel Name Wheel｜像素风课堂随机点名工具"
date: 2026-10-12
categories: CS
tags: CS Tools Classroom JavaScript GitHub-Pages Random-Name-Picker
---

## 两种版本在线使用 

**同一份班级名单，两种点名玩法。** 想要终端扫描的紧张感，就用经典版；想让课堂像 GBA 小游戏一样热闹，就切换到转盘版。

### 🎯 转盘版 · Pixel Name Wheel（推荐体验）

**[▶ 打开像素点名转盘 / Launch Pixel Name Wheel](https://shishiapcs.github.io/pixel-name-wheel/)**

- 复古街机转盘、机械钻头撞击、齿轮音效与 8-bit 提示音；
- 默认简体中文，可随时切换 English；
- 适合课堂投影、随机问答和口语练习。

### 🖥️ 经典版 · Pixel Roster Picker

**[▶ 打开纵向名单扫描器 / Launch Pixel Roster Picker](https://shishiapcs.github.io/pixel-roster-picker/)**

- 学生姓名纵向滚动，减速后锁定抽中者；
- 复古终端与 RPG 菜单风格，节奏更沉稳；
- 与转盘版共用班级、出勤和点名记录。

> **切换风格，不用重新建班级。** 在同一个浏览器用户配置中，通过上面的两个链接切换即可。详细的数据共用条件见下文。

---

## 更新记录

### 2026-10-14 · 两种版本正式并存

- 推出独立的 **Pixel Name Wheel** 转盘版，保留原有 **Pixel Roster Picker** 扫描器版；
- 新版采用 GBA 风格的像素街机界面，加入钻头撞击、旋转音效及抽中提示；
- 转盘版新增简体中文 / English 界面切换，默认中文；
- 两个版本沿用相同的班级数据结构和浏览器存储键，无须重复录入名单。

### 2026-05-17 · 经典扫描器首次发布

- 发布 **Pixel Roster Picker v1.0.0**；
- 实现纵向扫描点名、班级管理、出勤标记、不重复抽选与历史记录；
- 使用 HTML、CSS 和 JavaScript，部署于 GitHub Pages。

---

## 为什么做两个点名器？

课堂随机点名不只是“从名单里随机找一个人”。动画出现的几秒钟，也可以为下一次回答制造一点期待。

最早我做的是 **Pixel Roster Picker**：名字像终端中的名单一样快速滚动，再逐渐减速、锁定一个学生。这种方式简单直观，很适合日常问答。

后来又做了 **Pixel Name Wheel**。它受到 Game Boy Advance 时代微型游戏的启发：黑金色圆盘飞速旋转，右侧机械钻头对准目标，伴随咔嗒作响的齿轮声，最后“啪”地命中一位同学。

两种动画带来的课堂气氛不同，但使用的是**同一套点名规则和班级管理功能**。老师可以根据当天的活动与课堂节奏，随时选择喜欢的风格。

## 两种风格，怎么选？

| | 经典扫描器 · Roster Picker | 像素转盘 · Name Wheel |
|---|---|---|
| 动画 | 名单纵向滚动、减速锁定 | 转盘旋转、钻头命中姓名 |
| 视觉风格 | 复古终端 / RPG 菜单 | GBA 像素街机 |
| 音效体验 | 经典版原有体验 | 齿轮声、钻头撞击与 8-bit 音效 |
| 界面语言 | 英文 | 简体中文（默认）/ English |
| 班级管理 | 支持 | 支持 |
| 不重复点名 | 支持 | 支持 |
| 出勤与历史 | 支持 | 支持 |
| 浏览器本地数据 | 与转盘版共用 | 与扫描器版共用 |

**日常快速点名**可以用经典扫描器；**想让学生多一点期待感**，就打开转盘版。两者并不是“新版本替代旧版本”，而是并行提供的两种界面。

---

## 主要功能

### 公平随机，不重复抽选

- 从当前班级中**出勤且本轮尚未被抽中**的学生里随机选择；
- 已标记缺勤的学生不进入抽选池；
- 抽中后记入历史记录，本轮不再重复抽中；
- 全部抽完后可以重置，开始下一轮；
- 如果点错了，可以撤销最近一次点名。

### 教师控制面板（Teacher Panel）

- 新建、切换、重命名和删除班级；
- 直接粘贴学生名单，支持每行一个姓名或逗号分隔；
- 导入 `.txt` / `.json` 名单文件；
- 标记出勤 / 缺勤，也可以一键恢复全员出勤；
- 查看点名历史，撤销上次抽选或重置本轮结果。

### 适合哪些课堂场景？

口语课随机回答、IELTS / TOEFL 问答练习、AP Computer Science 课堂提问、小组展示顺序，以及任何需要公平轮流参与的教学活动。

---

## 如何使用

1. 打开上方任意一个版本，进入 **教师后台 / Teacher Panel**；
2. 新建班级，粘贴或导入学生名单并保存；
3. 上课前标记缺勤学生；
4. 返回主界面，点击开始点名，等待动画自动选出一位学生；
5. 想改变课堂气氛时，打开另一个版本的链接继续使用。

转盘版的语言按钮位于音效按钮左侧；音效也可以单独开启或关闭。

## 两个版本为什么能共用数据？

两个工具都托管在 `shishiapcs.github.io` 域名下，并使用同一个 `localStorage` 存储键 `pixelPickerData`。因此，在**同一浏览器、同一用户配置**中打开这两个页面时，能读到同一份班级数据，包括名单、缺勤标记、已抽选状态和历史记录。

请注意：

- **这是同浏览器的数据共用，不是云端同步。** 换电脑、换浏览器或使用无痕窗口，不会自动带来原有名单；
- 如果两个版本同时开着，切换前最好刷新准备使用的页面，以载入最新数据；
- 清理网站数据可能删除已保存的班级资料。在重要课堂使用前，建议自行留存一份学生名单；
- 语言和音效等界面偏好由相应版本单独管理，不影响共同的班级记录。

---

## 隐私与技术实现

班级名称、学生名单、出勤状态和点名历史保存在使用者浏览器的本地存储中，**不需要注册账号，也没有专门用于上传名单的后端服务**。如果在公用电脑上使用，请留意浏览器里保存的姓名信息。

两个工具均为静态网页应用：

```text
HTML + CSS + Vanilla JavaScript
GitHub Pages
Browser localStorage
No account / No dedicated backend
```

新转盘版额外使用浏览器 Web Audio API 生成游戏音效，不需要安装软件或另外下载音效包。

### 源代码 / Source Code

- [Pixel Name Wheel · 转盘版仓库](https://github.com/shishiAPCS/pixel-name-wheel)
- [Pixel Roster Picker · 经典版仓库](https://github.com/shishiAPCS/pixel-roster-picker)

---

## English · Free Random Student Picker for Classrooms

**Pixel Roster Picker** and **Pixel Name Wheel** are two free, browser-based classroom name pickers with different retro-game animations.

- **[Pixel Name Wheel](https://shishiapcs.github.io/pixel-name-wheel/):** A GBA-inspired spinning name wheel with a mechanical pointer, arcade sound effects, and a Chinese/English interface.
- **[Pixel Roster Picker](https://shishiapcs.github.io/pixel-roster-picker/):** A terminal-style vertical roster scanner that slows down and locks onto one student.

Both tools support multiple classes, attendance tracking, no-repeat random selection, picking history, undo, and round reset. Teachers can paste student lists or import `.txt` / `.json` files. No installation or sign-in is required.

**Shared classroom data:** Both applications use the same browser `localStorage` key under the same GitHub Pages origin. Your classes and picking records are shared when you switch between the two versions **in the same browser profile**. This is not cross-device cloud syncing; refresh the newly opened app if another tab has recently changed the data.

Choose the scanner for a calm, focused classroom moment—or the wheel for a playful arcade-style reveal. **Same roster, two ways to pick!**
