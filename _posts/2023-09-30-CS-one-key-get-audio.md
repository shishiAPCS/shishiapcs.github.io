---
title:  "一键获取当前网页所有.wav音频"
mathjax: true
layout: post
categories: media
---

## 打开 Chrome 的开发者工具（Developer Console）的方法如下：

1. **使用鼠标**：
   - 在网页上右键点击，选择“检查”（Inspect）。

2. **使用键盘快捷键**：
   - Windows/Linux：`Ctrl` + `Shift` + `I`
   - Mac：`Cmd` + `Option` + `I`

3. **通过菜单**：
   - 在 Chrome 浏览器的右上角点击三个垂直的点（菜单按钮）。
   - 选择“更多工具”（More tools）。
   - 点击“开发者工具”（Developer tools）。

在开发者工具窗口中，点击“Console”选项卡即可进入 Console 界面。

{% include codeHeader.html %}
```javascript
// Select all <audio> elements with a "src" attribute that ends with ".wav"
// This is done using the CSS selector 'audio[src$=".wav"]'
const audioElements = [...document.querySelectorAll('audio[src$=".wav"]')];

// Loop through each of these audio elements
audioElements.forEach(audio => {
    // Get the "src" attribute of the current <audio> tag, which is the URL of the .wav file
    const src = audio.src;

    // Log (print) the URL to the console
    console.log(src);

    // Create a new <a> (link) element
    const a = document.createElement('a');

    // Set the href (URL) of the link to the .wav file's URL
    a.href = src;

    // Extract the name of the .wav file from its URL (everything after the last '/')
    // and set it as the default name when downloading the file
    a.download = src.split('/').pop();

    // Set the visible text of the link to "Download" followed by the file's name
    a.innerText = 'Download ' + a.download;

    // Append the link to the page, making it clickable by the user
    document.body.appendChild(a);
});

```

## 用 Tampermonkey 自动下载

1. Install Tampermonkey from the Chrome Web Store.
2. Click Tampermonkey → Create a new script…

{% include codeHeader.html %}
```javascript
// ==UserScript==
// @name         Mr.Mou 一键下载本页 .wav（自动命名 学生名_Task1-Task4）
// @namespace    https://mrmou.example/
// @version      1.0.0
// @description  抓取本页 ≤4 个 .wav 按页面顺序下载，并用学生名+Task序号命名
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_download
// @connect      *
// @run-at       document-idle
// ==/UserScript==

(function () {
  const norm = (t) => (t || '').replace(/\s+/g, ' ').trim();

  function getStudentName() {
    // 优先：.user-info-item 结构
    for (const item of document.querySelectorAll('.user-info-item')) {
      const label = norm(item.querySelector('.label')?.textContent);
      const value = norm(item.querySelector('.value')?.textContent);
      if (/^name[:：]?$/i.test(label) || /^(学生)?姓名[:：]?$/i.test(label)) {
        if (value) return value;
      }
    }
    // 兜底：页面任意 .label + .value
    for (const labelEl of document.querySelectorAll('.label')) {
      const label = norm(labelEl.textContent);
      if (/^name[:：]?$/i.test(label) || /^(学生)?姓名[:：]?$/i.test(label)) {
        const value = norm(labelEl.parentElement?.querySelector('.value')?.textContent);
        if (value) return value;
      }
    }
    return '';
  }

  function sanitizeName(n) {
    return (n || '')
      .normalize('NFKC')
      .replace(/[\\/:*?"<>|]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s/g, '_')
      .slice(0, 64);
  }

  function collectWavUrls() {
    const urls = [];
    const seen = new Set();

    // 单个选择器，保证是“文档顺序”
    const nodes = document.querySelectorAll('audio[src], audio source[src], a[href]');
    nodes.forEach((el) => {
      let u = '';
      if (el.matches('audio[src]')) u = el.getAttribute('src') || '';
      else if (el.matches('audio source[src]')) u = el.getAttribute('src') || '';
      else if (el.matches('a[href]')) u = el.getAttribute('href') || '';

      try {
        if (!u) return;
        const href = new URL(u, location.href).href;
        if (!/\.wav(?:[?#]|$)/i.test(href)) return; // 只要 .wav
        if (href.startsWith('blob:')) return;       // blob: 不可跨页下载
        if (seen.has(href)) return;
        seen.add(href);
        urls.push(href);
      } catch {}
    });

    return urls.slice(0, 4);
  }

  async function downloadAll() {
    const studentName = sanitizeName(getStudentName());
    const urls = collectWavUrls();

    if (!urls.length) {
      alert('未发现可下载的 .wav（或音频为 blob: 流）。');
      return;
    }

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const name = `${studentName ? studentName + '_' : ''}Task${i + 1}.wav`;

      await new Promise((resolve, reject) => {
        GM_download({
          url,
          name,
          onload: resolve,
          ontimeout: () => reject('下载超时：' + url),
          onerror: (e) => reject('下载失败：' + url + '，' + (e && e.error || ''))
        });
      });
    }

    alert(`已开始下载：${studentName ? studentName + '：' : ''}${urls.length} 个 .wav`);
  }

  // 菜单：点击 Tampermonkey 图标 → 选择此命令
  GM_registerMenuCommand('下载本页 .wav（自动命名 学生名_Task1-Task4）', downloadAll);
})();
```
