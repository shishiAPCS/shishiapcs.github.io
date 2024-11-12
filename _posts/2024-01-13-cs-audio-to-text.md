---
title:  "OpenAI Whisper 语音转文字"
mathjax: true
layout: post
categories: media
---
---
## [点此打开工具](https://whisper.ggerganov.com/)
---

#### 1. 加载模型
- 打开工具后，首先需加载一个转录模型。网速好，选 `tiny.en` 下载即可。
- 网速慢，则需要手动下载。
- 点击下载 [ggml-model-whisper-tiny.en.bin 17-Oct-2022 15:59 74M](https://ggml.ggerganov.com/ggml-model-whisper-tiny.en.bin)
- 然后 在 Whisper models: 处选 `Choose File` 选中刚下载的 tiny.en.bin 模型。
- 模型文件不要删除，下次还需要。

```
js: Running...
js: 
loadRemote: storage quota: 2580729931 bytes
loadRemote: storage usage: 0 bytes
loadRemote: created IndexedDB whisper.ggerganov.com version 1
loadRemote: "https://whisper.ggerganov.com/ggml-model-whisper-tiny.en.bin" is not in the IndexedDB
fetchRemote: downloading with fetch()...
fetchRemote: fetching 0% ...
fetchRemote: fetching 10% ...
fetchRemote: fetching 20% ...
fetchRemote: fetching 30% ...
fetchRemote: fetching 40% ...
fetchRemote: fetching 50% ...
fetchRemote: fetching 60% ...
fetchRemote: fetching 70% ...
fetchRemote: fetching 80% ...
fetchRemote: fetching 90% ...
fetchRemote: fetching 100% ...
loadRemote: "https://whisper.ggerganov.com/ggml-model-whisper-tiny.en.bin" stored in the IndexedDB
storeFS: stored model: whisper.bin size: 77704715

```

#### 2. 选择输入方式
- 选择音频输入方式。有两种选项：
  - **文件**：上传一个音频文件进行转录。
  - **麦克风**：实时录制音频进行转录。

#### 3. 上传或录制音频
- **上传文件**：点击“Choose File”按钮，选择你要转录的音频文件。
- **使用麦克风**：点击“Start”开始录音，点击“Stop”结束录音。录音时会有一个进度条显示。

```
js: loading audio: TPO60_L1.mp3, size: 4570948 bytes
js: please wait ...
js: audio loaded, size: 4569600
```

#### 4. 设置语言和线程
- 选择音频中的语言。这个下拉菜单中列出了所有支持的语言。
- 使用滑块选择处理音频的线程数。这可以加快转录过程，但也会增加浏览器的负载。（默认即可）

#### 5. 开始转录
- 点击“Transcribe”按钮开始音频转录。转录速度取决于电脑性能。


#### 6. 查看结果
- 转录的文本将显示在页面底部的文本区域中。
  
```
js: processing - this might take a while ...

system_info: n_threads = 8 / 16 | AVX = 0 | AVX2 = 0 | AVX512 = 0 | FMA = 0 | NEON = 0 | ARM_FMA = 0 | F16C = 0 | FP16_VA = 0 | WASM_SIMD = 1 | BLAS = 0 | SSE3 = 0 | VSX = 0 | COREML = 0 | 
operator(): processing 4569600 samples, 285.6 sec, 8 threads, 1 processors, lang = en, task = transcribe ...

[00:00:00.000 --> 00:00:04.080]   Listen to part of a lecture in an art history class.
[00:00:04.080 --> 00:00:10.320]   As you know, artists today can choose from an enormous selection of media, including water
[00:00:10.320 --> 00:00:15.560]   collars, acrylic paints, not to mention special paints formulated for almost any surface
[00:00:15.560 --> 00:00:17.840]   you might want to paint on.
[00:00:17.840 --> 00:00:23.040]   But even so, oil paints are still the medium of choice among most professional artists
[00:00:23.040 --> 00:00:24.840]   and hobbyists.
[00:00:24.840 --> 00:00:26.040]   So why is that?
[00:00:26.040 --> 00:00:31.460]   Well, for one thing oil paints extremely versatile, suitable for many different painting
[00:00:31.460 --> 00:00:36.240]   styles, different subjects, and different sizes of work.
[00:00:36.240 --> 00:00:40.160]   Another advantage is that they're easy to use, even for beginners.
[00:00:40.160 --> 00:00:41.880]   They can be manipulated.
[00:00:41.880 --> 00:00:46.680]   You can apply oil paint to a canvas and then because they don't dry right away, they can
[00:00:46.680 --> 00:00:49.440]   be scraped off and painted over.
[00:00:49.440 --> 00:00:53.960]   So you don't have to waste expensive material every time you make a change.
[00:00:53.960 --> 00:00:57.960]   Unlike acrylic paint, which really can't be moved once it's applied.
[00:00:57.960 --> 00:01:00.440]   Acrylic paints dry very quickly.
[00:01:00.440 --> 00:01:04.760]   So in general, when using them, it's more difficult to make changes.
[00:01:04.760 --> 00:01:08.760]   And with water collars, you can't really paint over a mistake because it really diminishes
[00:01:08.760 --> 00:01:11.520]   the freshness of the colors.
[00:01:11.520 --> 00:01:14.880]   So oil paint is the medium of choice for many painters.
[00:01:14.880 --> 00:01:20.600]   Nowadays anyway, in terms of art history, oil paints are actually pretty young.
[00:01:20.600 --> 00:01:27.200]   In Europe, before the invention, rather the development of oil paint, painters mostly
[00:01:27.200 --> 00:01:29.800]   used tempera.
[00:01:29.800 --> 00:01:32.760]   Tempara was made with egg yolk, believe it or not.
[00:01:32.760 --> 00:01:34.720]   The yolk acted as a binder.
[00:01:34.720 --> 00:01:39.680]   A binder enables the color pigment to stick to your canvas.
[00:01:39.680 --> 00:01:45.040]   And no, tempera wasn't always yellow, if that's what you're thinking.
[00:01:45.040 --> 00:01:49.600]   Artists made their own paint by mixing egg yolk with a color pigment, like powdered iron
[00:01:49.600 --> 00:01:50.600]   or copper.
[00:01:50.600 --> 00:01:55.600]   But it dried very fast, which left little room for error or change.
[00:01:55.600 --> 00:01:59.080]   He really had to get it right the first time.
[00:01:59.080 --> 00:02:07.880]   Then in the early 15th century, a Flemish painter named Jan of Anike started experimenting.
[00:02:07.880 --> 00:02:12.720]   After the tempera in one of Anike's paintings cracked while drawing in the sun, he decided
[00:02:12.720 --> 00:02:17.840]   to try to make a paint that would avoid this fate, so he tried an oil mixture.
[00:02:17.840 --> 00:02:22.520]   Actually, other painters before him had dried using oils as a binder.
[00:02:22.520 --> 00:02:27.320]   So while Anike's credited with inventing oil paint, it's not entirely true.
[00:02:27.320 --> 00:02:32.460]   In Greece and Italy, olive oil had been used to prepare pigment mixtures, but the paint took
[00:02:32.460 --> 00:02:37.280]   a really long time to dry, just the opposite of tempera.
[00:02:37.280 --> 00:02:40.280]   But Van Aik had a secret recipe for his oil paint.
[00:02:40.280 --> 00:02:43.040]   He used linseed oil.
[00:02:43.040 --> 00:02:47.560]   Not only did this paint dry without cracking, Van Aik also discovered that it could be
[00:02:47.560 --> 00:02:49.960]   applied in very thin layers.
[00:02:49.960 --> 00:02:54.720]   This technique gave the colors a depth that was previously unknown.
[00:02:54.720 --> 00:03:00.360]   And just as important, the linseed oil actually increased the brilliance of the color.
[00:03:00.360 --> 00:03:05.760]   So as a result, pigment oil mixtures became very popular among artists.
[00:03:05.760 --> 00:03:12.040]   Some tried to improve the paint by developing their own recipes, like by using walnut oil,
[00:03:12.040 --> 00:03:15.520]   for instance, or by cooking their oil mixtures.
[00:03:15.520 --> 00:03:19.560]   But a great manie began using some sort of oil as their binder.
[00:03:19.560 --> 00:03:25.640]   Now, with all this experimentation with mixtures, well, it took a long time for artists
[00:03:25.640 --> 00:03:30.320]   to get comfortable with using these new oil paints to get a true feeling for how to apply
[00:03:30.320 --> 00:03:32.960]   them to the best effect.
[00:03:32.960 --> 00:03:38.240]   The early painters in oil, like Van Aik, laid the paint down in thin layers with brush
[00:03:38.240 --> 00:03:42.480]   strokes that were so delicate that they're practically invisible.
[00:03:42.480 --> 00:03:47.240]   It really wasn't until the end of the 16th century and in the 17th century that the full
[00:03:47.240 --> 00:03:50.400]   potential of oil paint was realized.
[00:03:50.400 --> 00:03:55.520]   For example, that's when artists finally began to combine delicately painted areas with thick
[00:03:55.520 --> 00:04:00.560]   brush strokes so you could actually see the marks of the brush.
[00:04:00.560 --> 00:04:04.800]   Combining the rough and smooth gives oil paintings great textural depth.
[00:04:04.800 --> 00:04:08.960]   Of course, the public who were used to smooth surfaces actually complained that these paintings
[00:04:08.960 --> 00:04:11.320]   looked unfinished.
[00:04:11.320 --> 00:04:14.880]   But some of that attitude carried over into later centuries.
[00:04:14.880 --> 00:04:20.040]   Like, well, you're probably familiar with the work of the painter Vincent Van Gogh.
[00:04:20.040 --> 00:04:23.880]   Van Gogh's famous nowadays for his thick swirling brush strokes.
[00:04:23.880 --> 00:04:29.320]   But amazingly enough, his work was not appreciated back in the 19th century, and he sold
[00:04:29.320 --> 00:04:32.400]   just one painting during his lifetime.
[00:04:32.400 --> 00:04:36.680]   Of course, the French impressionists who were his contemporaries attained more popular
[00:04:36.680 --> 00:04:43.680]   claim, but they used a different technique.
[00:04:43.680 --> 00:04:45.340]   on the landscape.

whisper_print_timings:     load time =   132.65 ms
whisper_print_timings:     fallbacks =   0 p /   0 h
whisper_print_timings:      mel time =  6181.44 ms
whisper_print_timings:   sample time =  1694.63 ms /  1087 runs (    1.56 ms per run)
whisper_print_timings:   encode time = 35067.87 ms /    12 runs ( 2922.32 ms per run)
whisper_print_timings:   decode time = 13353.55 ms /  1085 runs (   12.31 ms per run)
whisper_print_timings:    total time = 56729.38 ms
```
