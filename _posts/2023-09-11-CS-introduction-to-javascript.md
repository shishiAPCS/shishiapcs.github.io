---
title:  "Introduction to JavaScript"
mathjax: true
layout: post
categories: media
---

---
# 编程语言与厨房工具的类比<br>The analogy of programming languages to kitchen tools

- **Python** 会像是一个搅拌机：多功能，易于使用，非常适合许多快速的任务，但对于专门的工作可能不是最高效的。
  - **Python** would be like a blender: versatile, easy to use, and great for many quick tasks but not always the most efficient for specialized jobs.

- **JavaScript** 可以比作是微波炉：极度容易获取，适用于 reheating 或简单烹饪，但不适合烹饪高级美食。
  - **JavaScript** could be likened to a microwave: extremely accessible, quick for reheating or simple cooking, but not suitable for gourmet meals.

- **Java** 可能是烤箱：强大且可靠，非常适合大规模，企业级的烹饪，但预热需要时间。
  - **Java** might be the oven: robust and reliable for large-scale, enterprise-level cooking, but it takes a while to preheat.

- **C++** 就像是厨师的刀：非常强大和精确，但如果不小心很容易割伤自己。
  - **C++** would be the chef’s knife: incredibly powerful and precise but also very easy to cut yourself with if you're not careful.

- **Ruby** 就像是食品加工机：容易上手，并使复杂的任务变得更简单，但对于非常大型的任务性能可能不够。
  - **Ruby** is like a food processor: easy to get started with and makes complex tasks simpler, but not as performant for very large jobs.

- **SQL** 就像是一个量杯：专门用于一件事——测量和处理数据——但对于这个任务是不可或缺的。
  - **SQL** would be a measuring cup: specialized for one thing—measuring and handling data—but indispensable for that task.

- **R** 就像是一套用于烘焙的专门量匙：完美用于统计分析和数据可视化，但不是一个通用工具。
  - **R** is like a set of specialized measuring spoons for baking: perfect for statistical analysis and data visualization but not a general-purpose tool.

---

# 控制台 Console

### 打开 Chrome 的开发者工具（Developer Console）的方法如下：

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

---
# Try some JavaScript code 
---
---

### Beginner 初级

---

```javascript
// Displays Hello, World! in the console
// 在控制台显示 Hello, World!
console.log("Hello, World!");
```

```javascript
// Displays the current browser information in an alert box
// 检测当前浏览器信息
alert("You are using " + navigator.userAgent);
```


```javascript
// Changes background to red 
// 背景变为红色
document.body.style.backgroundColor = "red";
```

```javascript
// Adds a red border to every element on the page
// 为页面上的每个元素添加红色边框
document.querySelectorAll('*').forEach(el => el.style.border = '2px solid red');
```

```javascript
// Increases the font size of all text on the page
// 增大页面上所有文本的字体大小
document.querySelectorAll('*').forEach(el => el.style.fontSize = '20px');
```

```javascript
// Rotates every paragraph on the page
// 旋转页面上的每个段落
document.querySelectorAll('p').forEach(p => p.style.transform = 'rotate(180deg)');
```

```javascript
// Hides all images on the current webpage
// 隐藏当前网页上的所有图片
document.querySelectorAll('img').forEach(img => img.style.display = 'none');
```


---
### Intermediate 中级
---

```javascript
// Replaces the entire webpage content with a heading
// 将整个网页内容替换为一个标题
document.body.innerHTML = "<h1>Hello, my name is: Mr.Mou </h1>"; 
```

```javascript
// A simple elementary math question program
// 一个简单的小学数学题程序
const answer = prompt("What is 10 + 10?");
if(answer == "20") {
  alert("Correct!");
} else {
  alert("Wrong!");
}

```

```javascript
// A simple elementary geography question program
// 一个简单的小学地理题程序
function checkAnswer() {
    var response = document.getElementById("answer").value;
    if(response.toLowerCase() === "paris") {
        alert("Correct! The capital of France is Paris.");
    } else {
        alert("Incorrect, try again!");
    }
}

document.body.innerHTML = '<p>What is the capital of France?</p><input id="answer" type="text"><button onclick="checkAnswer()">Submit</button>';

```

```javascript
// Text to speech functionality
// 文字转语音

function speak(text) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}

document.body.innerHTML = '<button onclick="speak(\'Hello! Welcome to our JavaScript class!\')">Click Me to Speak</script>';

```

---
### Advanced 高级
---

```javascript
// 3D Rotating Cube
// 3D 旋转立方体
//Create a simple 3D rotating cube using CSS3 and JavaScript, which introduces basic concepts of 3D graphics programming.
var cube = document.createElement('div');
cube.style.width = '100px';
cube.style.height = '100px';
document.body.appendChild(cube);

cube.style.position = 'relative';
cube.style.perspective = '500px';

var faces = ['front', 'back', 'left', 'right', 'top', 'bottom'];
faces.forEach((face) => {
    var faceDiv = document.createElement('div');
    faceDiv.style.position = 'absolute';
    faceDiv.style.width = '100px';
    faceDiv.style.height = '100px';
    faceDiv.style.border = '1px solid black';
    faceDiv.style.background = 'rgba(255, 165, 0, 0.6)';
    faceDiv.style.boxSizing = 'border-box';
    cube.appendChild(faceDiv);
});

cube.innerHTML = cube.innerHTML + cube.innerHTML; // Duplicate faces for 3D effect
cube.style.transformStyle = 'preserve-3d';
cube.style.animation = 'rotate 5s infinite linear';

var css = document.createElement('style');
css.innerHTML = '@keyframes rotate { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }';
document.head.appendChild(css);
```

```javascript
// Creates a firework effect on click
// 点击时出现烟花效果
function createFirework(x, y) {
    const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px'; // Corrected this line
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(particle);

        const angle = Math.random() * 2 * Math.PI;
        const speed = Math.random() * 20 + 10;  // Random speed
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;

        setTimeout(function () {
            particle.style.transition = 'transform 2s, opacity 2s';
            particle.style.transform = `translate(${dx}px, ${dy}px)`;
            particle.style.opacity = '0';
            setTimeout(() => particle.remove(), 2000);
        }, 10);
    }
}

document.addEventListener('click', function (event) {
    createFirework(event.clientX, event.clientY);
});

```

```javascript
// Creates a snowflake effect on the screen
// 模拟屏幕下雪
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄️';
    snowflake.style.position = 'absolute';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.top = '-30px';  // Start above the screen
    snowflake.style.fontSize = Math.random() * (24 - 16) + 16 + 'px';  // Random size for variety
    document.body.appendChild(snowflake);

    // Falling effect
    let fallSpeed = Math.random() * (3 - 1) + 1;  // Random falling speed
    function fall() {
        let currentTop = parseFloat(snowflake.style.top);
        currentTop += fallSpeed;
        snowflake.style.top = currentTop + 'px';

        // Remove the snowflake once it goes off screen to avoid memory overload
        if (currentTop > window.innerHeight) {
            snowflake.remove();
        } else {
            requestAnimationFrame(fall);
        }
    }
    fall();
}

// Create new snowflakes at a regular interval
setInterval(createSnowflake, 300);

```

```javascript
// Creates a falling zombie text effect on the screen
// 模拟僵尸出现在屏幕
var zombieArray = ['🧟', '🧠', '💀', '🩸', '🌕', '🕸️', '👻', '🎃', 'Help!', 'Run!', 'Brains!'];
var drops = [];

function createDrop() {
    var drop = document.createElement('div');
    drop.innerHTML = zombieArray[Math.floor(Math.random() * zombieArray.length)];
    drop.style.position = 'absolute';
    drop.style.left = Math.random() * window.innerWidth + 'px';
    // Set font size to a random value between 40px and 80px
    drop.style.fontSize = Math.random() * (80 - 40) + 40 + 'px';
    drop.style.color = 'red'; // Optional: red text for a more eerie effect
    document.body.appendChild(drop);
    drops.push(drop);
    moveDrop(drop);
}

function moveDrop(drop) {
    var yPos = 0;
    function fall() {
        yPos += 4;
        drop.style.top = yPos + 'px';
        if (yPos < window.innerHeight) {
        requestAnimationFrame(fall);
        } else {
            drop.remove();
        }
    }
    fall();
}

setInterval(createDrop, 300);
```

```javascript
// A mysterious code snippet
// 神秘代码
const powerOn = true;
while(powerOn) {
    console.log("  ")
}

```
