---
title: "Tools"
---
---
---
## [找老师 🙋‍♂️](_posts/2023-06-01-FAQ.md)
---
## [交作业 📝](https://shishiapcs.github.io/CS-Homework-Collection/)
---

## Essentials 必备知识
---

* ### [OpenAI Whisper 语音转文字](https://shishiapcs.github.io/cs-audio-to-text) ```本地转，速度取决于电脑性能```
* ### [flixier](https://editor.flixier.com/tools/all-tools) ```在线转换，仍然免费，无需账号```
    - #### [教程](_posts/2023-03-20-free-online-transcribe.md)  
* ### [在线录音机](https://vocalremover.org/zh/voice-recorder)
* ### [背单词](https://superct.streamlit.app/) ```By Tom class 2026 ```
* ### [GPA查询网址](https://www.thinkwave.com)
* ### [新通托福在线练习](https://smarter.igo1996.com/tf-part-index)
* ### [谷歌浏览器下载](https://www.google.cn/chrome/) ```苹果电脑```
* ### [谷歌浏览器下载](https://static.shinyway.com/base/common/software/202307261754352696.exe) ```Windows电脑```
* ### [谷歌账号注册](https://shishiapcs.github.io/CS-google-account/)
* ### [GitHub 账号视频教程](https://www.bilibili.com/video/BV19c411p7En/?vd_source=84a986f8292e7cdf31541219b6c7844c)
* ### [GitHub 仓库创建视频教程](https://www.bilibili.com/video/BV1624y1F7qi/?vd_source=84a986f8292e7cdf31541219b6c7844c)
* ### [shishiapcs.github.io 留言板视频教程](https://www.bilibili.com/video/BV1XM41157xV/?vd_source=84a986f8292e7cdf31541219b6c7844c) 
* ### [美国 AppleID 注册](https://zhuanlan.zhihu.com/p/367821925?utm_id=0)
* ### [Thinkwave 交作业视频教程](https://www.bilibili.com/video/BV1xP411e74p/)
* ### [微软outlook邮箱注册地址](https://www.microsoft.com/en-us/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook)
* ### [微软outlook邮箱注册视频教程](https://www.bilibili.com/video/BV1bu411P79D/?share_source=copy_web&vd_source=a7ed18508531908cbb2dc681efccf167)
* ### [Sharing folder 文件共享](_posts/2023-03-20-Connecting-to-CS_Sharing.md) 
---

## 英语基础

* [新编英语阅读手册](http://xiaolai.co/books/f79b2a287ab8547ec641a4960ea1ff62/index.html) ```买一本实体书，随时翻阅```
* [中国程序员容易发音错误的单词](https://cpwp.netlify.app/)
* [时态讲解PPT](https://www.icloud.com.cn/keynote/0p1VUCEKbTys8MuAIOAAUi5Zg#时态) ```谷歌浏览器无法打开```
* [英语学习底层逻辑](http://xiaolai.co/books/c558c667ad9f05ddce38f06df2d15aa3/index)
* [如何写好英文书面比较句](http://xiaolai.co/books/8724bd963e758a48a168d955e711485b/comparison-in-english.html)
* [Youglish](https://youglish.com/)

---
## Ai
---

### [1小时快速入门对话机器人](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/)

### 常用 chatbot 对话机器人

* [Chatgpt](https://chat.openai.com) ```综合最强大```
* [Poe](https://poe.com/) ```集成平台```
* [Microsoft new bing](https://www.bing.com/new) ```作图，图片识别，语音输出```
* [Google bard](https://bard.google.com/)  ``` 需要美国IP，图片识别，语音输出```
* [Claude](https://slack.com/get-started#/create) 


<details> 
<summary>Claude 注册</summary>

```
Claude 是slack中的一个应用，要想使用Claude，要先注册slack平台工作区。具体方法如下 ：

1、在 https://slack.com/get-started#/create 建立工作空间，输入邮箱，写入验证码即可；

2、给工作区取名字、邀请用户可以跳过或者按照实际情况操作；

3、在工作区添加应用，点击 Claude 即可；或者是在已经登陆的工作区新开浏览器窗口 进入 https://www.anthropic.com/claude-in-slack 添加即可。

```
</details>

#### 对话机器人 Prompts 

{% raw %}

<details> 
<summary>查单词并生成markdown表格</summary>

````markdown
I want you to act like an English teacher. You’ll need to explain some words or phrases for me in the format I provide later. All the words or phrases you need to explain are in “”. I’ll also give you a context, so you can have a better understanding, the contnext would be in {}. Now, you need to make a markdown table for me, out put as a code block, so i can copy. The table has 4 columns, the first column is the words or phrases needed to be explained, the second column is the English meaning for the words or phrases in the context I provide, the third column is the equivelent chinese expression, the forth column is one real life example sentence that has the same meaning as in the context I provide. 

Here are the phrases for you “生词放这里”,{语境放这里。句子，讲座都行} 
````

</details>

<details> 
<summary>托福口语稿修改</summary>

````markdown
You are an expert in TOEFL Speaking evaluation. Your task is to refine and improve a student's spoken response to achieve the highest possible score based on the TOEFL Speaking rubrics for Language Use and Topic Development.

### **Evaluation Criteria:**
1. **Language Use:** Ensure grammatical accuracy, a wide range of vocabulary, and natural fluency. Improve sentence structures while maintaining an informal and conversational tone.
2. **Topic Development:** Ensure the response is coherent, well-developed, and effectively conveys key ideas. Add logical connections, elaboration, and relevant details when necessary.

### **Instructions:**
- **Modify the response** to eliminate grammar mistakes and enhance fluency.
- **Improve vocabulary and sentence variety** while ensuring natural spoken English.
- **Enhance logical flow and coherence** in topic development.
- **Preserve the original content and intent**, keeping it natural and conversational.
- **Use TOEFL scoring criteria** to ensure it can receive a perfect score.
- **Do not add information** that wasn't in the original response.

### **Formatting:**
Provide the output in the following structured format:

**Revised Response:**  
[Provide the improved response here]

**Key Improvements:**  
- **Grammar & Vocabulary:** [Briefly explain major grammar and vocabulary improvements]  
- **Fluency & Naturalness:** [Explain how the response flows better]  
- **Coherence & Organization:** [Describe improvements in logical flow and idea development]  
- **Topic Development:** [Mention how the response is now more developed and detailed]

---

### **Given Information:**
**Task Type:** [填写 Task 1 or Task 2/3/4]  
**Question:** "[填写题目问题]"  
**Original Response:** "[填写你的回答]"  
**Reading Transcript (if applicable):** "[填写阅读材料]"  
**Listening Transcript (if applicable):** "[填写听力文本]"

Now, improve the response based on these criteria.
````
</details>

{% endraw %}

### 语音转文字

* #### [otter.ai](https://otter.ai/) 每月300分钟免费额度
* #### [OpenAi Whisper](https://platform.openai.com/playground) ~~```异常强大，可以中英混合输入，需要openai账号```~~ 

### 文字转语音 

* #### Edge browser 
* #### [elevenlabs](https://beta.elevenlabs.io/speech-synthesis)
    - ##### [教程](https://www.bilibili.com/video/BV1fv4y1E7gV/?vd_source=84a986f8292e7cdf31541219b6c7844c)

### Ai 绘画

* [免费 DALL·E 3](https://www.bing.com/create)
* [leonardo.ai](https://leonardo.ai/)
* [midjourney](https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F) 
* [playgroundai](https://playgroundai.com)

### Ai 自动生成PPT

* [Mindshow](https://www.mindshow.fun/#/login?inviteCode=6515025)
* [gamma.app](https://gamma.app/generate)

### Ai 写作修改

* [quillbot](https://quillbot.com/)


---

## Online Tools
---
---

### 思维导图

* [markmap.js](https://markmap.js.org/repl)
 
### 打字练习

* [shishi.edclub.com](https://shishi.edclub.com)
* [10fastfingers](https://10fastfingers.com/typing-test/english)
* [monkeytype](https://monkeytype.com/)
       
### pdf 工具（合并 & 转 word …… etc） 

* [smallpdf](https://smallpdf.com/)

### Markdown

* [Markdown to HTML](https://markdowntohtml.com/)
* [Markdown转PDF](https://md2pdf.netlify.app/)
* [Markdown to table](https://tableconvert.com/markdown-to-excel)
* [CSV to Markdown](https://www.convertcsv.com/csv-to-markdown.htm)
* [Markdown table generartor ](https://www.tablesgenerator.com/markdown_tables)
* [中文语法说明](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/markdown-basics)

### 格式转换

* #### [m4a to mp4 ](https://www.freeconvert.com/m4a-to-mp4)

### 海报

* #### [canva](https://www.canva.com/)

### B站视频字幕提取

* [greasyfork](https://www.bilibili.com/video/BV1L3411J7Yc/?vd_source=84a986f8292e7cdf31541219b6c7844c)

### 随机密码生成

* [random.org](https://www.random.org/passwords/)

### 个人网站搭建

* #### [Github pages 教程](https://www.youtube.com/watch?v=o5g-lUuFgpg)
    - ##### [Edward](https://californiumwu.github.io/)
    - ##### [https://honosv.fun/](https://honosv.fun/)
    - ##### [https://f-loat.github.io/caption2text/](https://f-loat.github.io/caption2text/)
    - ##### [https://apcslowell.github.io/](https://apcslowell.github.io/)
    - ##### [https://bakerfranke.github.io/codePrint/](https://bakerfranke.github.io/codePrint/)
    - ##### [https://alex.github.io/nyt-2020-election-scraper/battleground-state-changes.html](https://alex.github.io/nyt-2020-election-scraper/battleground-state-changes.html)
    - ##### [https://shen-huang.github.io/WoP-Notes-Win/#/](https://shen-huang.github.io/WoP-Notes-Win/#/)
    - ##### [https://longbaonguyen.github.io/courses/platformer/platformer.html](https://longbaonguyen.github.io/courses/platformer/platformer.html)
    - ##### [https://computer-programming-a.github.io/](https://computer-programming-a.github.io/)


### Music 

* [去除音乐人声](https://vocalremover.org/)

### 在线视频抓取

* [Youtube 视频下载 save.tube](https://save.tube/)
    - 直接把当前视频网页的 youtube.com/xxxxx 网址加个 zz ，改成 youtubezz.com/xxx 
* [B站 视频下载](https://snapany.com/zh/bilibili)
* [Youtube 字幕下载](https://downsub.com/)

### 二维码生成

* [QR code 生成器](https://me-qr.com/zh)

### 图片工具

* [在线图片编辑](https://www.befunky.com/create/photo-editor/)```免费，不用注册```
* [360°全景图浏览器](https://renderstuff.com/tools/360-panorama-web-viewer/)
* [EXIF 信息查看](https://www.pic2map.com/)
* [Add EXIF-GPS information to images](https://tool.geoimgr.com/)
* [图片颜色信息提取](https://imagecolorpicker.com/)
* [图片压缩](https://compressjpeg.com/)
* [圆形头像](https://profilepicturemaker.com/#quotemaker)
* [PNG图片生成](https://www.adobe.com/express/feature/image/remove-background/png/transparent)
* [PNG图片下载](https://www.cleanpng.com/)
