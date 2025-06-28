---
title:  "Introduction to JavaScript"
mathjax: true
layout: post
categories: media
---


{% include svg-animation-stroke.svg %}

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

### Beginner 网页元素

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

```javascript
// A mysterious code snippet
// 神秘代码
const powerOn = true;
while(powerOn) {
    console.log("  ")
}

```

---
### Intermediate 函数
---


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
### Advanced 动态效果
---



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
// Create the Triforce element
// 创建一个旋转的《塞尔达传说》三角力量符号
var triforce = document.createElement('div');
triforce.id = 'triforce';
document.body.appendChild(triforce);

// Set the Triforce styles
triforce.style.position = 'absolute';
triforce.style.width = '0';
triforce.style.height = '0';
triforce.style.top = '50%';
triforce.style.left = '50%';
triforce.style.transform = 'translate(-50%, -50%)';
triforce.style.perspective = '500px';
triforce.style.transformStyle = 'preserve-3d';
triforce.style.animation = 'rotate 5s infinite linear';

// Function to create a triangle
function createTriangle(color) {
    var triangle = document.createElement('div');
    triangle.style.position = 'absolute';
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderLeft = '16.66vw solid transparent';
    triangle.style.borderRight = '16.66vw solid transparent';
    triangle.style.borderBottom = `28.87vw solid ${color}`;
    return triangle;
}

// Create and position the three triangles of the Triforce
var topTriangle = createTriangle('rgba(255, 215, 0, 0.8)');
topTriangle.style.transform = 'translate(-16.66vw, -28.87vw)';
triforce.appendChild(topTriangle);

var leftTriangle = createTriangle('rgba(255, 215, 0, 0.8)');
leftTriangle.style.transform = 'translate(-33.32vw, 0)';
triforce.appendChild(leftTriangle);

var rightTriangle = createTriangle('rgba(255, 215, 0, 0.8)');
rightTriangle.style.transform = 'translate(0, 0)';
triforce.appendChild(rightTriangle);

// Add keyframes for rotation
var css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
    @keyframes rotate { 
        from { transform: rotateY(0deg); } 
        to { transform: rotateY(360deg); } 
    }

    body {
        margin: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
    }

    #triforce {
        transform-style: preserve-3d;
        animation: rotate 5s infinite linear;
    }
`;
document.head.appendChild(css);
```

---
### Advanced 井字棋（Tic-Tac-Toe）游戏 🎮
---

```javascript
(() => {
  /* --------- clean-up if re-injected --------- */
  document.getElementById('ttt-wrapper')?.remove();

  /* --------- configurable size / win length --------- */
  const SIZE       = 5;   // 5 × 5 grid
  const WIN_LENGTH = 4;   // need 4 in a row to win
  const HUMAN      = 'O';
  const AI         = 'X';

  /* --------- generate all win patterns of length 4 --------- */
  const winPatterns = (() => {
    const lines = [];
    const idx = (r,c) => r * SIZE + c;

    // horizontals & verticals
    for (let r = 0; r < SIZE; r++)
      for (let c = 0; c <= SIZE - WIN_LENGTH; c++)
        lines.push([...Array(WIN_LENGTH)].map((_,i)=>idx(r,c+i)));          // hor
    for (let c = 0; c < SIZE; c++)
      for (let r = 0; r <= SIZE - WIN_LENGTH; r++)
        lines.push([...Array(WIN_LENGTH)].map((_,i)=>idx(r+i,c)));          // vert

    // main diagonals
    for (let r = 0; r <= SIZE - WIN_LENGTH; r++)
      for (let c = 0; c <= SIZE - WIN_LENGTH; c++)
        lines.push([...Array(WIN_LENGTH)].map((_,i)=>idx(r+i,c+i)));        // ↘
    for (let r = WIN_LENGTH - 1; r < SIZE; r++)
      for (let c = 0; c <= SIZE - WIN_LENGTH; c++)
        lines.push([...Array(WIN_LENGTH)].map((_,i)=>idx(r-i,c+i)));        // ↗

    return lines;
  })();

  /* --------- create overlay markup --------- */
  const wrap = document.createElement('div');
  wrap.id = 'ttt-wrapper';
  wrap.innerHTML = `
    <div class="board" id="ttt-board"></div>
    <div class="message" id="ttt-msg"></div>
  `;
  document.body.appendChild(wrap);

  /* --------- styles --------- */
  const css = document.createElement('style');
  css.textContent = `
    #ttt-wrapper{
      position:fixed;inset:0;z-index:99999;
      display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;
      font-family:Arial,sans-serif;background:rgba(195,207,226,.85);backdrop-filter:blur(4px);}
    #ttt-board{display:grid;grid-template-columns:repeat(${SIZE},80px);
      grid-template-rows:repeat(${SIZE},80px);gap:4px;}
    .cell{width:80px;height:80px;display:flex;justify-content:center;align-items:center;
      font-size:1.8em;background:#fff;border:2px solid #4A4A4A;border-radius:6px;cursor:pointer;
      transition:transform .2s,background-color .2s;}
    .cell:hover{background:#dceefc;transform:scale(1.03);}
    .cell.disabled{pointer-events:none;opacity:.7;}
    .cell.X{color:#e74c3c;}  /* computer */
    .cell.O{color:#3498db;}  /* you      */
    #ttt-msg{font-size:1.4em;font-weight:bold;color:#333;text-align:center;}
  `;
  document.head.appendChild(css);

  /* --------- state --------- */
  const board   = Array(SIZE*SIZE).fill(null);
  const boardEl = document.getElementById('ttt-board');
  const msgEl   = document.getElementById('ttt-msg');

  /* --------- build cells --------- */
  board.forEach((_, i) => {
    const div = document.createElement('div');
    div.className = 'cell';
    div.addEventListener('click', () => humanMove(i));
    boardEl.appendChild(div);
  });

  /* --------- helpers --------- */
  const lineStatus = (pattern, pl) =>
    pattern.map(i=>board[i]).filter(v=>v===pl).length;

  const emptyInLine = pattern => pattern.find(i => !board[i]);

  function winner() {
    for (const line of winPatterns)
      if (line.every(i => board[i] === HUMAN)) return HUMAN;
      else if (line.every(i => board[i] === AI)) return AI;
    return board.every(Boolean) ? 'tie' : null;
  }

  function finished() { return winner() !== null; }

  function render() {
    board.forEach((v,i) => {
      const cell = boardEl.children[i];
      cell.textContent = v||'';
      cell.classList.toggle('disabled', !!v);
      cell.classList.remove('X','O'); if (v) cell.classList.add(v);
    });
  }

  /* --------- AI move (heuristic) --------- */
  function aiMove() {
    // 1. winning move?
    for (const line of winPatterns)
      if (lineStatus(line, AI) === WIN_LENGTH - 1 && emptyInLine(line) !== undefined)
        return emptyInLine(line);

    // 2. block human win?
    for (const line of winPatterns)
      if (lineStatus(line, HUMAN) === WIN_LENGTH - 1 && emptyInLine(line) !== undefined)
        return emptyInLine(line);

    // 3. centre?
    const centre = Math.floor(board.length / 2);
    if (!board[centre]) return centre;

    // 4. random
    const empties = board.map((v,i)=>v?null:i).filter(i=>i!==null);
    return empties[Math.floor(Math.random()*empties.length)];
  }

  /* --------- flow --------- */
  function humanMove(i){
    if (board[i] || finished()) return;
    board[i] = HUMAN; render();
    if (announce()) return;

    board[aiMove()] = AI; render();
    announce();
  }

  function announce(){
    const res = winner();
    if (!res) return false;
    msgEl.textContent =
      res === 'tie' ? "It's a draw!"
                    : (res === HUMAN ? 'You win!' : 'Computer wins!');
    return true;
  }

  /* player starts – no opening AI move */
})();


```

#### 关闭游戏 Close it by running:

```javascript
document.getElementById('ttt-wrapper')?.remove();
```


---
### Big Bang Simulation Demo  大爆炸模拟演示 🌌
---

#### Instructions  使用说明
1. Save the above code to a file named index.html.  
   将上述代码保存为名为 index.html 的文件。  
2. Open it in a modern web browser (e.g., Chrome, Firefox, Edge).  
   在现代网页浏览器中打开该文件（例如 Chrome、Firefox、Edge）。  
3. Click "Start" to trigger the Big Bang expansion.  
   点击“Start”按钮触发大爆炸膨胀。  
4. Click "Reset" to bring particles back to a singularity and stop expansion.  
   点击“Reset”按钮让粒子回到奇点并停止膨胀。

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Big Bang Simulation</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #000;
      font-family: sans-serif;
    }
    #gui {
      position: absolute;
      z-index: 999;
      margin: 10px;
    }
    button {
      display: inline-block;
      margin-right: 10px;
      padding: 8px 16px;
      background: #222;
      color: #fff;
      border: 1px solid #444;
      cursor: pointer;
    }
    button:hover {
      background: #444;
    }
  </style>
</head>
<body>
<div id="gui">
  <button id="startBtn">Start</button>
  <button id="resetBtn">Reset</button>
</div>

<!-- Three.js (from a CDN) -->
<script src="https://cdn.jsdelivr.net/npm/three@0.147.0/build/three.min.js"></script>

<script>
  let scene, camera, renderer;
  let particles, particlePositions, particleVelocities;
  let clock;
  let isExpanding = false;

  // Number of particles in the simulation
  const NUM_PARTICLES = 2000;

  // Create the three.js scene
  init();
  animate();

  // Attach event listeners for buttons
  document.getElementById("startBtn").addEventListener("click", startExpansion);
  document.getElementById("resetBtn").addEventListener("click", resetSimulation);

  function init() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
      60,               // FOV
      window.innerWidth / window.innerHeight,  // Aspect
      0.1,              // Near
      1000              // Far
    );
    camera.position.set(0, 0, 60);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Handle window resize
    window.addEventListener("resize", onWindowResize, false);

    // Create a particle system to represent cosmic matter
    createParticles();

    // Optional: Add a soft ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Optional: Add a point light to add some interesting lighting
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Clock for timing
    clock = new THREE.Clock();

    // Start with a reset state (all particles at singularity)
    resetSimulation();
  }

  function createParticles() {
    // Geometry
    const geometry = new THREE.BufferGeometry();

    // Position array (x, y, z per particle)
    particlePositions = new Float32Array(NUM_PARTICLES * 3);
    // Color array (r, g, b per particle)
    const colors = new Float32Array(NUM_PARTICLES * 3);

    // We'll store velocities in a separate array
    particleVelocities = new Float32Array(NUM_PARTICLES * 3);

    for (let i = 0; i < NUM_PARTICLES; i++) {
      // Initially set positions to (0,0,0); actual arrangement
      // will be handled in resetSimulation()
      const i3 = i * 3;
      particlePositions[i3 + 0] = 0;
      particlePositions[i3 + 1] = 0;
      particlePositions[i3 + 2] = 0;

      // Random colors for visual variety
      colors[i3 + 0] = Math.random() * 1.0; // R
      colors[i3 + 1] = Math.random() * 1.0; // G
      colors[i3 + 2] = Math.random() * 1.0; // B

      // Velocities array will be set during reset or start
      particleVelocities[i3 + 0] = 0;
      particleVelocities[i3 + 1] = 0;
      particleVelocities[i3 + 2] = 0;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    // Material
    const material = new THREE.PointsMaterial({
      size: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false
    });

    // Create the Points object and add to scene
    particles = new THREE.Points(geometry, material);
    scene.add(particles);
  }

  function startExpansion() {
    isExpanding = true;
  }

  function resetSimulation() {
    isExpanding = false;

    // Move all particles to the center
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const i3 = i * 3;

      // Reset positions to (0,0,0)
      particlePositions[i3 + 0] = 0;
      particlePositions[i3 + 1] = 0;
      particlePositions[i3 + 2] = 0;

      // Give each particle a random velocity direction and speed,
      // but set it to 0 for now. We'll re-randomize on Start for the "Bang".
      particleVelocities[i3 + 0] = 0;
      particleVelocities[i3 + 1] = 0;
      particleVelocities[i3 + 2] = 0;
    }
    particles.geometry.attributes.position.needsUpdate = true;
  }

  function randomizeVelocities() {
    // Give each particle a random velocity for the expansion
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const i3 = i * 3;
      // Random direction in 3D
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const speed = Math.random() * 0.5 + 0.5; // minimum speed + range

      particleVelocities[i3 + 0] = speed * Math.sin(phi) * Math.cos(theta);
      particleVelocities[i3 + 1] = speed * Math.sin(phi) * Math.sin(theta);
      particleVelocities[i3 + 2] = speed * Math.cos(phi);
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    // If we just started expansion, randomize velocities only once
    if (isExpanding) {
      // If the velocities are still zeroed, let's randomize them
      if (particleVelocities[0] === 0 && particleVelocities[1] === 0 && particleVelocities[2] === 0) {
        randomizeVelocities();
      }

      // Update particle positions based on velocity
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const i3 = i * 3;
        particlePositions[i3 + 0] += particleVelocities[i3 + 0] * delta * 15;
        particlePositions[i3 + 1] += particleVelocities[i3 + 1] * delta * 15;
        particlePositions[i3 + 2] += particleVelocities[i3 + 2] * delta * 15;
      }
      particles.geometry.attributes.position.needsUpdate = true;
    }

    // Simple camera rotation for a more dynamic view
    const time = Date.now() * 0.0001;
    camera.position.x = 60 * Math.sin(time);
    camera.position.z = 60 * Math.cos(time);
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
</script>
</body>
</html>
```

---
### DocShare PDF Download Script  DocShare PDF 下载脚本 📄
---

#### Instructions  使用说明  
1. Open the DocShare document page in Chrome, Edge, or Firefox.  
   在 Chrome、Edge 或 Firefox 浏览器中打开 DocShare 文档页面。  

2. Open DevTools (right-click → Inspect, or press `F12`).  
   打开开发者工具（右键点击页面 → 检查，或按下 `F12`）。  

3. Go to the **Console** tab, paste the full code below, and press `Enter`.  
   切换到 **Console（控制台）** 选项卡，粘贴下面的完整代码并按下 `Enter` 键。  

4. The PDF file will download automatically with the correct name.  
   PDF 文件将会自动下载，并使用正确的文件名保存。  

---

#### What this code does  代码作用说明  

- Automatically extracts the document ID from the URL.  
  自动从网址中提取文档的唯一 ID。  

- Reconstructs the hidden `/pdf_url/<id>` link used by the DocShare viewer.  
  重新构造 DocShare 阅读器内部使用的隐藏下载链接 `/pdf_url/<id>`。  

- Sends a proper request with your browser’s session cookies and referer header.  
  使用当前浏览器的 Cookie 和来源头部发送合法请求以获得文件权限。  

- Downloads the PDF directly using JavaScript without needing to click anything.  
  使用 JavaScript 直接下载 PDF 文件，无需点击或打开新标签页。  

---

#### Example Output Filename 示例输出文件名  
`DocShare_5883ac07b6d87f1d9d8b4833.pdf`  

---

```javascript
(async () => {
  try {
    const match = location.href.match(/([a-f0-9]{24})/);
    if (!match) throw new Error("Document ID not found in URL");
    const id = match[1];
    const url = `/pdf_url/${id}`;
    const res = await fetch(url, {
      credentials: "include",
      headers: { referer: location.href }
    });
    if (!res.ok) throw new Error(res.statusText);
    const blob = await res.blob();
    const a = Object.assign(document.createElement("a"), {
      href: URL.createObjectURL(blob),
      download: `DocShare_${id}.pdf`
    });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
    console.log("✅ PDF saved");
  } catch (e) {
    alert("❌ " + e.message);
  }
})();

```

