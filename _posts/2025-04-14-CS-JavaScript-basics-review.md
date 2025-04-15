---
title:  "JavaScript Basics"
mathjax: true
layout: post
categories: media
---

## 🎯 JavaScript Midterm Survival Checklist + Examples


---

### ✅ **JavaScript Midterm Review Checklist with Examples & Chinese Comments**

#### 🔤 **Basic Syntax and Structure**
- `script.js`  
  `// JavaScript 文件的扩展名是 .js`
- `let x = 10;`  
  `// 每条语句后加分号是一个好习惯`
- `let Name = "John"; let name = "Jane";`  
  `// 大小写敏感，Name 和 name 是两个不同的变量`
- `// This is a comment`  
  `// 双斜线表示注释，注释不会被执行`

#### 📦 **Variables and Data Types**
- `let age = 16;`  
  `// 用 let 定义变量`
- `let userAge = 25;`  
  `// 驼峰式命名法是良好的命名风格`
- `let isTeen = age < 20;`  
  `// 这是一个布尔值，结果是 true 或 false`
- `let greeting = "Hello, world!";`  
  `// 字符串要用引号括起来`

#### 🔧 **Operators**
- `let x = 5;`  
  `// 赋值操作符，用于给变量赋值`
- `if (x === 5) { console.log("Yes!"); }`  
  `// 比较操作符 === 表示值和类型都相等`
- `if (isMorning && isWeekday) { console.log("Wake up!"); }`  
  `// 逻辑操作符 && 表示两个条件都要为真`
- `let total = price + tax;`  
  `// 算术操作符 + 表示加法`
- `count++;`  
  `// 自增操作符，相当于 count = count + 1`

#### 🌀 **Control Structures**
- 
```js
if (score >= 60) {
  console.log("Pass");
}
```
`// 如果条件为真，就执行里面的代码`

- 
```js
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```
`// if 条件为假时，else 部分会被执行`

- `isRaining === true`  
  `// 条件表达式返回布尔值`

- `for (let i = 0; i < 5; i++) { console.log(i); }`  
  `// 循环从 0 开始计数是编程中的常见习惯`

#### 🔁 **Loops and Iteration**
- 
```js
for (let i = 0; i < 10; i++) {
  console.log("Repeat", i);
}
```
`// 用 for 循环重复执行代码`

- 
```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
`// while 循环只在条件为真时继续执行`

- `while (true) { console.log("Stuck!"); }`  
  `// 无限循环，程序会一直执行，可能会卡死`

#### 🧩 **Functions**
- 
```js
function sayHello() {
  console.log("Hello!");
}
```
`// 定义一个函数，可以多次调用`

- `sayHello();`  
  `// 调用函数，执行其中的代码`

- `calculateTax(price)`  
  `// 函数可以重复使用，提高代码效率`

#### 🎲 **Random and Input Functions**
- `let num = Randomizer.nextInt(1, 10);`  
  `// 生成 1 到 10 之间的随机整数`

- `let isHeads = Randomizer.nextBoolean();`  
  `// 生成一个随机布尔值 true 或 false`

- `let name = readLine("Enter your name: ");`  
  `// 从用户那里读取文本输入`

- `let age = readInt("Enter your age: ");`  
  `// 从用户那里读取一个整数`

- `console.log("Your name is " + name);`  
  `// 打印信息到屏幕上`

#### 🎨 **Graphics and Coordinates**
- `(0, 0)`  
  `// 屏幕左上角的坐标是 (0, 0)`

#### 🧠 **Application & Logic Understanding**
- 
```js
if (temperature > 30) {
  console.log("Hot day");
} else {
  console.log("Cool day");
}
```
`// 根据条件选择不同的执行路径`

- 
```js
let x = 2;
x++;
console.log(x); // 3
```
`// 阅读代码，理解变量变化`

- `let leftOver = 20 % 3; // 2`  
  `// 使用 % 计算余数`

- 
```js
function calculateArea(width, height) {
  return width * height;
}
```
`// 好的函数名称让代码更容易理解和维护`

---

