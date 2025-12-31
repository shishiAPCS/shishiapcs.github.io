---
title: "离线救急 用 Chrome Console 跑 CodeHS 代码"
mathjax: true
layout: post
categories: media
render_with_liquid: false
---

<h3>为什么要学这一招？（没网/平台卡顿也能写代码）</h3>

<p>同学们：当你们的 CodeHS 网络不稳定时，可以用 <b>Chrome DevTools Console</b> 临时测试 while 循环、if、变量更新等逻辑。</p>

<p><b>关键点：</b>CodeHS 里的 <code>readLine / readInt / readFloat / println</code> 这些是平台提供的函数，浏览器默认没有，所以我们需要在 Console 顶部先贴一段“辅助函数（helper functions）”。</p>

<hr/>

<h3>Step 1：打开 Console（每次离线测试都要会）</h3>

<ul>
  <li>Chrome 按 <b>F12</b> 或 <b>Option + Command + I</b></li>
  <li>点击顶部的 <b>Console</b> 选项卡</li>
</ul>

<hr/>

<h3>Step 2：先复制粘贴“辅助函数”到 Console 顶部（必做）</h3>

<p>把下面整段代码 <b>一次性复制</b>，粘贴到 Console，回车执行。之后你就可以像在 CodeHS 一样写 <code>readLine/readInt/readFloat/println</code> 了。</p>

{% highlight javascript %}
/* ================================
CodeHS -> Chrome Console 辅助函数
使用方法：先粘贴本段，再写/粘贴你的代码
================================ */

// 1) 输入：字符串
function readLine(msg){
return prompt(msg);
}

// 2) 输入：整数（自动转 Number，再做取整）
function readInt(msg){
return Math.trunc(Number(prompt(msg)));
}

// 3) 输入：小数
function readFloat(msg){
return Number(prompt(msg));
}

// 4) 输出：对应 CodeHS 的 println
function println(msg){
console.log(msg);
}

// 5) 打印空行：println("") 在 Console 一样有效
//    示例：println("");
{% endhighlight %}

<p><b>注意：</b><code>prompt()</code> 在浏览器里弹出输入框；你输入的内容会返回给程序使用。</p>

<hr/>

<h3>Step 3：Console 测试代码的“黄金规则”（避免踩坑）</h3>

<h4>规则 A：Console 不会自动运行 start()（你要自己调用）</h4>

<p>在 CodeHS 里平台会自动调用 <code>start()</code>，但在 Console 里不会。你有两种做法：</p>

<ul>
  <li><b>做法 1（推荐）：</b>保留 <code>start()</code>，但最后手动调用一次 <code>start();</code></li>
  <li><b>做法 2：</b>把代码直接写在最外面，不用 <code>start()</code></li>
</ul>

<p><b>示例（推荐写法）：</b></p>

{% highlight javascript %}
function start(){
println("Hello from start()");
}

start(); // Console 里必须手动调用
{% endhighlight %}

<hr/>

<h4>规则 B：prompt 输入的是“字符串”，readInt/readFloat 才会转成数字</h4>

<ul>
  <li>如果你用 <code>readLine</code>，得到的是字符串（例如 "5"）</li>
  <li>如果你要做加法/比较大小，应该用 <code>readInt</code> 或 <code>readFloat</code></li>
</ul>

<p><b>常见错误：</b>字符串拼接导致结果不对，例如 "2" + "3" 变成 "23"。</p>

<hr/>

<h4>规则 C：无限循环会“卡死页面”，别慌，刷新就好</h4>

<p>如果 while 条件永远为真，Console 可能卡住：</p>
<ul>
  <li>先等几秒</li>
  <li>不行就 <b>刷新页面</b>（最简单有效）</li>
  <li>下次记得：while 条件里的变量必须在循环内改变</li>
</ul>

<hr/>

<h4>规则 D：重复运行代码时，可能出现“变量已声明”报错</h4>

<p>Console 会记住你之前声明过的 <code>let</code> 变量。你再次粘贴同一段代码，可能报错：</p>

<p><code>Identifier 'x' has already been declared</code></p>

<p><b>解决办法（按推荐顺序）：</b></p>
<ul>
  <li><b>推荐：</b>直接刷新页面（最干净）</li>
  <li>或把变量名改一下（不推荐，容易乱）</li>
  <li>或把 <code>let</code> 改成 <code>var</code>（不推荐，容易引入新坑）</li>
</ul>

<hr/>

<h3>Console 实用技巧（让你写代码更舒服）</h3>

<h4>技巧 1：清屏（保持窗口干净）</h4>

{% highlight javascript %}
console.clear();
{% endhighlight %}

<p>你可以在开始测试前先清屏，输出更清楚。</p>

<hr/>

<h4>技巧 2：调试 while 循环（观察变量有没有变化）</h4>

<p>当你怀疑循环不会停或 total 变成 NaN，就把变量打印出来：</p>

{% highlight javascript %}
console.log("num =", num, "total =", total);
{% endhighlight %}

<p>调试核心问题就两个：</p>
<ul>
  <li>条件变量有没有变？（比如 num 有没有更新）</li>
  <li>变量是否初始化？（total 是否从 0 开始）</li>
</ul>

<hr/>

<h4>技巧 3：快速测试一小段逻辑（不用整份代码）</h4>

<p>Console 允许你一段一段试。比如先试输入和比较：</p>

{% highlight javascript %}
let x = readInt("输入一个数字：");
println("你输入的是 " + x);
println(x > 10);
{% endhighlight %}

<hr/>

<h3>示例 1：C1 Sum Until 0（Console 可运行版）</h3>

<p>规则：不停输入数字，输入 0 停止，输出总和。</p>

{% highlight javascript %}
function start(){
let total = 0;
let num = readInt("What is the number?");

```
while(num != 0){
    total = total + num;
    num = readInt("What is the number?");
}

println("total is " + total);
```

}

start();
{% endhighlight %}

<hr/>

<h3>示例 2：C2 Password Checker（Console 可运行版）</h3>

<p>规则：密码是 coffee，输错就一直重输，直到正确。</p>

{% highlight javascript %}
function start(){
let CORRECT_PASSWORD = "coffee";
let inputPassword = readLine("What is the password?");

```
while(inputPassword != CORRECT_PASSWORD){
    inputPassword = readLine("Wrong password. Try again:");
}

println("Access granted");
```

}

start();
{% endhighlight %}

<hr/>

<h3>最后提醒（考试/作业都通用）</h3>

<ul>
  <li><b>while 循环三件套：</b>初始化 → 条件 → 循环内更新</li>
  <li><b>Console 离线测试流程：</b>先贴辅助函数 → 再贴代码 → 最后 <code>start();</code></li>
  <li><b>卡死/变量重复声明：</b>刷新页面是最快解法</li>
</ul>

<p>把这篇收藏好：网不稳的时候，你依然能把逻辑写出来、跑出来、改出来。</p>

