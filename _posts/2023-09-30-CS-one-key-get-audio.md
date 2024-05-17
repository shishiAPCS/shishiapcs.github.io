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

