---
title: "AP CSA 1.11：Math.random() 的括号与类型转换"
layout: post
categories: media
render_with_liquid: false
---

在使用 `Math.random()` 生成随机整数时，很多错误并不是因为不懂随机数，而是因为**括号放错了位置**。

---

先看一个正确例子：

```java
int num = (int)(Math.random() * 100) + 1;
```

这段代码会生成：

```text
1 到 100
```

包括 `1` 和 `100`。

# 1. 为什么需要括号？

`Math.random()` 会生成一个 `double`：

```text
0.0 <= Math.random() < 1.0
```

例如：

```text
0.25
0.73
0.999
```

如果直接写：

```java
(int)Math.random()
```

结果永远是：

```text
0
```

因为转换成 `int` 时，小数部分会被直接去掉：

```text
(int)0.25  → 0
(int)0.73  → 0
(int)0.999 → 0
```

所以我们不能太早进行类型转换。

正确写法是：

```java
(int)(Math.random() * 100)
```

这里的括号告诉 Java：

> **先计算 `Math.random() * 100`，再转换成 `int`。**

例如：

```text
Math.random() → 0.5783

0.5783 * 100 → 57.83

(int)57.83 → 57
```

然后再：

```text
57 + 1 → 58
```

所以：

```java
(int)(Math.random() * 100) + 1
```

可以生成：

```text
1 到 100
```

# 2. 最常见的错误

## 错误 1：太早转换成 int

```java
int num = (int)Math.random() * 100 + 1;
```

错误原因：

```java
(int)Math.random()
```

永远是：

```text
0
```

所以整段代码其实变成：

```text
0 * 100 + 1
```

结果永远是：

```text
1
```

### 对比

错误：

```java
(int)Math.random() * 100
```

正确：

```java
(int)(Math.random() * 100)
```

关键区别：

> **先乘，再 cast。**

---

# 3. 下面两种写法有什么区别？

```java
int num = (int)(Math.random() * 100) + 1;
```

和：

```java
int num = (int)((Math.random() * 100) + 1);
```

在这个例子中，**结果相同**。

它们都会生成：

```text
1 到 100
```

例如 `Math.random() * 100` 得到：

```text
57.83
```

第一种：

```text
(int)57.83 + 1
→ 57 + 1
→ 58
```

第二种：

```text
(int)(57.83 + 1)
→ (int)58.83
→ 58
```

虽然这里结果一样，但更推荐：

```java
(int)(Math.random() * 100) + 1
```

因为结构更清楚：

```text
先生成 0–99
再加 1
得到 1–100
```

---

# 4. 错误 2：把 `+1` 放错位置

错误：

```java
int num = (int)(Math.random() * (100 + 1));
```

这实际上等于：

```java
(int)(Math.random() * 101)
```

它会生成：

```text
0 到 100
```

而不是：

```text
1 到 100
```

注意：

```text
* 100
```

决定的是**一共有多少种可能的整数**。

而：

```text
+ 1
```

是把整个范围向上移动。

所以：

```text
0–99
```

加 `1` 后才变成：

```text
1–100
```

---

# 5. 如果不是从 1 开始呢？

例如：

> 生成 `5` 到 `10` 的随机整数，包括 `5` 和 `10`。

可能的数字有：

```text
5, 6, 7, 8, 9, 10
```

一共有：

```text
6
```

个。

所以：

```java
int num = (int)(Math.random() * 6) + 5;
```

过程是：

```text
Math.random() * 6
→ 0.0 到 5.999...

(int)
→ 0 到 5

+ 5
→ 5 到 10
```

---

# 6. 再看一个常见错误

如果写成：

```java
int num = (int)(Math.random() * 10) + 5;
```

这并不是 `5–10`。

因为：

```text
(int)(Math.random() * 10)
```

会生成：

```text
0–9
```

再加 `5`：

```text
5–14
```

所以：

> `*` 后面的数字不是最大值。

它表示的是：

> **一共有多少个可能的整数。**

---

# 7. 通用公式

如果要生成：

```text
min 到 max
```

并且两端都包括，可以使用：

```java
(int)(Math.random() * (max - min + 1)) + min
```

例如：

```text
20 到 30
```

一共有：

```text
30 - 20 + 1 = 11
```

个整数。

所以：

```java
int num = (int)(Math.random() * 11) + 20;
```

# 最后记住

看到 `Math.random()` 时，可以按照这个顺序想：

```text
Math.random()
↓
乘以范围大小
↓
转换成 int
↓
加最小值
```

也就是：

```java
(int)(Math.random() * range) + min
```

最容易犯的错误就是：

```java
(int)Math.random()
```

因为这样**太早转换成了 `int`**。

记住一句话：

> **先乘，再 cast。**
