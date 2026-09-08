---
title: "AP CSA 1.11：Math.random() 的括号与类型转换"
layout: post
categories: media
render_with_liquid: false
---

在使用 `Math.random()` 生成随机整数时，很多错误并不是因为不懂随机数，而是因为**括号放错了位置**。

尤其要注意 `(int)` 类型转换：

```java
(int)(Math.random() * 100)
```

和

```java
(int)Math.random() * 100
```

看起来只差一对括号，但结果完全不同。

> **核心原则：先扩大随机数的范围，再转换成 `int`。**
>
> 不要太早把 `Math.random()` 转换成 `int`。

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# Math.random() 的括号与类型转换

## Math.random()

* 返回 `double`
* 范围：`0.0 <= value < 1.0`
* 可能是 `0.0`
* 永远不会是 `1.0`

## 生成随机整数的三个步骤

* ① Multiply：扩大范围
* ② Cast：转换成 `int`
* ③ Shift：平移范围

## 正确结构

* `(int)(Math.random() * range) + min`
* 先乘
* 再 cast
* 最后加起点

## 最常见错误

* `(int)Math.random() * 100`
* 太早进行类型转换
* `(int)Math.random()` 永远是 `0`

## 范围大小

* `max - min + 1`
* 不是 `max`
* 不是 `max - min`

## 检查括号

* `(int)` 到底在 cast 哪一部分？
* `*` 在 cast 之前还是之后？
* `+ min` 是扩大范围还是平移范围？

</script>
</div>
</div>

# 1. 先记住 `Math.random()` 的范围

`Math.random()` 返回一个 `double`：

```text
0.0 <= Math.random() < 1.0
```

例如，它可能产生：

```text
0.0
0.2375
0.6183
0.9994
```

但是不会产生：

```text
1.0
```

因此：

```java
(int)Math.random()
```

无论 `Math.random()` 得到什么值，结果都会是：

```text
0
```

因为把一个正的 `double` 转换成 `int` 时，小数部分会直接被去掉。

例如：

```text
(int)0.23  → 0
(int)0.81  → 0
(int)0.999 → 0
```

这就是理解下面所有括号问题的关键。

# 2. 正确写法：先乘，再转换成 int

假设我们要生成：

```text
1 到 100
```

包括 `1` 和 `100`。

正确写法：

```java
int num = (int)(Math.random() * 100) + 1;
```

可以把它拆成三个步骤。

## Step 1：扩大范围

```java
Math.random() * 100
```

范围从：

```text
0.0 <= value < 1.0
```

变成：

```text
0.0 <= value < 100.0
```

例如：

```text
57.83
```

## Step 2：转换成 int

```java
(int)(57.83)
```

得到：

```text
57
```

所以：

```java
(int)(Math.random() * 100)
```

可以产生：

```text
0, 1, 2, ..., 99
```

## Step 3：整体加 1

```java
(int)(Math.random() * 100) + 1
```

于是：

```text
0–99
```

整体向右移动一格：

```text
1–100
```

所以可以记成：

```text
Math.random()
      ↓
   × range
      ↓
   cast to int
      ↓
    + min
```

# 3. 最常见的错误：太早进行类型转换

错误：

```java
int num = (int)Math.random() * 100 + 1;
```

很多同学会觉得：

> “这里也有 `(int)`，也有 `* 100`，也有 `+ 1`，应该差不多吧？”

实际上完全不同。

Java 先计算：

```java
(int)Math.random()
```

而我们已经知道：

```text
(int)Math.random() = 0
```

所以整个表达式实际上变成：

```text
0 * 100 + 1
```

结果永远是：

```text
1
```

因此：

```java
(int)Math.random() * 100 + 1
```

❌ **永远只能得到 `1`。**

而：

```java
(int)(Math.random() * 100) + 1
```

✅ 可以得到 `1–100`。

关键差别就在这里：

```java
(int)Math.random()
```

表示：

> 先把 `Math.random()` 转成 `int`

而：

```java
(int)(Math.random() * 100)
```

表示：

> 先计算 `Math.random() * 100`，再把整个结果转成 `int`

# 4. 多加一对括号，会不会改变结果？

比较下面两段代码：

```java
int num = (int)(Math.random() * 100) + 1;
```

和：

```java
int num = (int)((Math.random() * 100) + 1);
```

在这个例子中：

> **两种写法结果相同，都会产生 `1–100`。**

第一种：

```java
(int)(Math.random() * 100) + 1
```

过程：

```text
57.83
↓ cast
57
↓ + 1
58
```

第二种：

```java
(int)((Math.random() * 100) + 1)
```

过程：

```text
57.83
↓ + 1
58.83
↓ cast
58
```

结果都是：

```text
58
```

所以这两种写法在这里都正确。

但是在 AP CSA 中，更推荐：

```java
(int)(Math.random() * 100) + 1
```

因为它更清楚地表现了生成随机整数的三个步骤：

```text
扩大范围 → 转成 int → 平移范围
```

# 5. 错误：把 `+ 1` 放到了 range 里面

目标还是：

```text
1–100
```

有同学可能写：

```java
int num = (int)(Math.random() * (100 + 1));
```

看起来好像：

> “100 还要加 1，所以写成 `100 + 1`。”

但是：

```java
100 + 1
```

会先变成：

```text
101
```

因此代码实际上是：

```java
(int)(Math.random() * 101)
```

它产生：

```text
0–100
```

而不是：

```text
1–100
```

所以：

```java
(int)(Math.random() * (100 + 1))
```

❌ `0–100`

而：

```java
(int)(Math.random() * 100) + 1
```

✅ `1–100`

这里要区分两个完全不同的作用：

```text
* 100
```

决定的是：

> **有多少个可能的整数**

而：

```text
+ 1
```

决定的是：

> **从哪里开始**

# 6. 更重要的例子：生成 5–10

假设题目要求：

> Generate a random integer from `5` to `10`, inclusive.

可能的整数是：

```text
5, 6, 7, 8, 9, 10
```

一共有：

```text
6
```

个整数。

因此正确写法是：

```java
int num = (int)(Math.random() * 6) + 5;
```

拆开：

```text
Math.random() * 6
→ 0.0–5.999...

(int)
→ 0–5

+ 5
→ 5–10
```

# 7. 错误：把最大值直接放在乘号后面

有同学可能写：

```java
int num = (int)(Math.random() * 10) + 5;
```

这不是 `5–10`。

因为：

```java
(int)(Math.random() * 10)
```

产生：

```text
0–9
```

再加 `5`：

```text
5–14
```

所以：

```java
(int)(Math.random() * 10) + 5
```

❌ 范围是：

```text
5–14
```

这里最重要的一点是：

> **乘号后面的数字不是最大值。**

它表示：

> **possible values 的数量，也就是 range size。**

# 8. 错误：忘记 inclusive 的 `+ 1`

生成：

```text
5–10
```

有同学知道要用最大值减最小值，于是写：

```java
int num = (int)(Math.random() * (10 - 5)) + 5;
```

先计算：

```text
10 - 5 = 5
```

所以：

```java
(int)(Math.random() * 5)
```

只能产生：

```text
0–4
```

加 `5`：

```text
5–9
```

结果漏掉了：

```text
10
```

原因是 `5–10` 一共有：

```text
5, 6, 7, 8, 9, 10
```

六个数，而不是五个数。

正确范围大小：

```text
10 - 5 + 1 = 6
```

因此：

```java
int num = (int)(Math.random() * (10 - 5 + 1)) + 5;
```

也就是：

```java
int num = (int)(Math.random() * 6) + 5;
```

# 9. 通用公式

如果题目要求生成：

```text
min 到 max
```

并且 **min 和 max 都包含在内**，使用：

```java
(int)(Math.random() * (max - min + 1)) + min
```

也可以理解成：

```text
range size = max - min + 1
```

然后：

```java
(int)(Math.random() * rangeSize) + min
```

例如生成：

```text
25–60
```

范围大小：

```text
60 - 25 + 1
= 36
```

所以：

```java
int num = (int)(Math.random() * 36) + 25;
```

# 10. 把几种写法放在一起比较

目标：

```text
1–100
```

| Code | Result | Correct? | 原因 |
|---|---|---|---|
| `(int)(Math.random() * 100) + 1` | `1–100` | ✅ | 先乘，再 cast，最后平移 |
| `(int)((Math.random() * 100) + 1)` | `1–100` | ✅ | 先平移 double，再 cast，在这里结果相同 |
| `(int)Math.random() * 100 + 1` | 永远 `1` | ❌ | 太早 cast，`(int)Math.random()` 永远是 `0` |
| `((int)Math.random()) * 100 + 1` | 永远 `1` | ❌ | 括号明确要求先把 `Math.random()` cast 成 `0` |
| `(int)(Math.random() * (100 + 1))` | `0–100` | ❌ | 改变的是 range size，没有把范围平移到 `1–100` |

# 11. 看括号时问自己三个问题

看到这样的代码：

```java
(int)(Math.random() * 100) + 1
```

不要只看括号多不多。

问自己：

### Question 1

`(int)` 到底在转换什么？

这里：

```java
(int)(Math.random() * 100)
```

转换的是：

```java
Math.random() * 100
```

整个结果。

### Question 2

乘法发生在 cast 之前还是之后？

正确情况：

```text
Math.random()
↓
× 100
↓
cast
```

错误情况：

```text
Math.random()
↓
cast
↓
× 100
```

### Question 3

`+ min` 的作用是什么？

它不是扩大随机范围。

它的作用是：

> **把整个随机整数范围向右平移。**

例如：

```text
0–5
+5
↓
5–10
```

# 12. Mini Practice<br>小练习

## Practice 1

下面代码会产生什么？

```java
int n = (int)Math.random() * 20 + 5;
```

A. `5–20`  
B. `5–24`  
C. 永远是 `5`  
D. `0–20`

### Answer

```text
C. 永远是 5
```

因为：

```text
(int)Math.random()
= 0
```

所以：

```text
0 * 20 + 5
= 5
```

---

## Practice 2

哪一个可以生成 `1–6`？

A.

```java
(int)Math.random() * 6 + 1
```

B.

```java
(int)(Math.random() * 6) + 1
```

C.

```java
(int)(Math.random() * 7)
```

### Answer

```text
B
```

因为：

```text
Math.random() * 6
→ 0.0–5.999...

(int)
→ 0–5

+1
→ 1–6
```

---

## Practice 3

下面代码的范围是什么？

```java
int n = (int)(Math.random() * 10) + 5;
```

### Answer

```text
5–14
```

因为：

```text
0–9
+5
→ 5–14
```

---

## Practice 4

生成 `20–30`，包含 `20` 和 `30`。

正确代码是什么？

范围大小：

```text
30 - 20 + 1
= 11
```

所以：

```java
int n = (int)(Math.random() * 11) + 20;
```

# Quick Checklist<br>快速检查清单

写 `Math.random()` 随机整数代码时，检查：

* `Math.random()` 的范围是不是 `0.0 <= value < 1.0`？
* 有没有**先乘，再 cast**？
* `(int)` 后面的括号到底包含了什么？
* 有没有错误地写成 `(int)Math.random()`？
* `*` 后面的数字是不是 **range size**？
* 如果两端都包含，是否使用了 `max - min + 1`？
* `+ min` 是不是放在正确的位置？
* 最小值真的能出现吗？
* 最大值真的能出现吗？

最后记住这个结构：

```java
(int)(Math.random() * rangeSize) + min
```

以及一句话：

> **先扩大范围，再转换成 `int`，最后移动起点。**

```text
Multiply → Cast → Shift
```