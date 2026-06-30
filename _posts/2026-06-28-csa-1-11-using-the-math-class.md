---
title: "AP CSA 1.11：使用 Math 类"
layout: post
categories: media
render_with_liquid: false
---

In the previous lesson, we learned how to call static class methods. In this lesson, we focus on one important built-in class: `Math`.

上一课我们学习了如何调用 static 类方法。这一课，我们重点学习一个 AP CSA 常用的内置类：`Math`。

> **The `Math` class provides static methods for common calculations and random values.**
> **`Math` 类提供用于常见计算和随机数的 static 方法。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.11 使用 Math 类<br>Using the Math Class

## Math 类基础<br>Math Class Basics

* `Math` 在 `java.lang` 中，默认可用<br>`Math` is in `java.lang` and available by default
* `Math` 方法都是 static 方法<br>`Math` methods are static
* 调用格式：`Math.methodName(arguments)`<br>Call syntax: `Math.methodName(arguments)`

## 常用方法<br>Common Math Methods

* `Math.abs(x)`：绝对值 / 距离 0 的距离<br>Absolute value / distance from 0
* `Math.sqrt(x)`：正平方根<br>Positive square root
* `Math.pow(base, exp)`：幂运算<br>Power calculation
* `Math.random()`：随机 `double`<br>Random double

## 返回值类型<br>Return Types

* `Math.abs(int)` 返回 `int`<br>Returns int
* `Math.abs(double)` 返回 `double`<br>Returns double
* `Math.sqrt(double)` 返回 `double`<br>Returns double
* `Math.pow(double, double)` 返回 `double`<br>Returns double
* `Math.random()` 返回 `double`<br>Returns double

## random 范围<br>Random Range

* `Math.random()`：`0.0 <= value < 1.0`<br>Includes 0.0, excludes 1.0
* `(int)(Math.random() * 10)`：`0` 到 `9`<br>0 through 9
* `(int)(Math.random() * 10) + 1`：`1` 到 `10`<br>1 through 10
* 通用公式：`(int)(Math.random() * range) + min`<br>General formula

## AP 考点<br>AP Exam Focus

* 查 AP CSA Java Quick Reference<br>Use the AP CSA Java Quick Reference
* 判断方法参数数量是否正确<br>Check number of arguments
* 判断返回值类型<br>Check return type
* 随机整数范围要防止 off-by-one 错误<br>Avoid off-by-one range errors
* 类型转换的括号位置很重要<br>Parentheses matter when casting

## 常见错误<br>Common Mistakes

* `Math.sqrt()` 参数数量错误<br>Wrong number of arguments
* 忘记 `Math.`<br>Forgetting `Math.`
* 把 `double` 返回值存入 `int`<br>Assigning double return value to int
* 写成 `(int)Math.random() * 10`<br>Casting too early
* 随机数范围少 1 或多 1<br>Off-by-one random range error

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

The `Math` class contains static methods for common mathematical operations.

`Math` 类包含一些常见数学运算的 static 方法。

Because these methods are static, we call them with the class name:

因为这些方法是 static 方法，所以调用时使用类名：

```java
Math.methodName(arguments);
```

Examples:

```java
System.out.println(Math.abs(-5));
System.out.println(Math.sqrt(9));
System.out.println(Math.pow(2, 3));
```

Output:

```text
5
3.0
8.0
```

For AP CSA, you do not need to memorize every Java `Math` method. Focus on the methods listed in the AP CSA Java Quick Reference.

对于 AP CSA，你不需要记住 Java 里所有的 `Math` 方法。重点掌握 AP CSA Java Quick Reference 上列出的方法。

# 2. AP CSA Math Methods<br>AP CSA 中的 Math 方法

| Method                              | Meaning              | Return Type | Example                  |
| ----------------------------------- | -------------------- | ----------- | ------------------------ |
| `Math.abs(int x)`                   | absolute value       | `int`       | `Math.abs(-4)` → `4`     |
| `Math.abs(double x)`                | absolute value       | `double`    | `Math.abs(-4.5)` → `4.5` |
| `Math.sqrt(double x)`               | positive square root | `double`    | `Math.sqrt(9)` → `3.0`   |
| `Math.pow(double base, double exp)` | power                | `double`    | `Math.pow(2, 3)` → `8.0` |
| `Math.random()`                     | random double        | `double`    | `0.0 <= value < 1.0`     |

Two return-type details matter a lot:

两个返回类型细节很重要：

```java
double a = Math.sqrt(9);
double b = Math.pow(2, 3);
```

`Math.sqrt` and `Math.pow` return `double`, even if the result looks like a whole number.

`Math.sqrt` 和 `Math.pow` 返回 `double`，即使结果看起来是整数。

# 3. `Math.abs` and Distance<br>`Math.abs` 与距离

`Math.abs(x)` returns the absolute value of `x`.

`Math.abs(x)` 返回 `x` 的绝对值。

```java
System.out.println(Math.abs(6));
System.out.println(Math.abs(-6));
System.out.println(Math.abs(-3.5));
```

Output:

```text
6
6
3.5
```

On a number line, the distance between two numbers `a` and `b` is:

在数轴上，两个数 `a` 和 `b` 之间的距离是：

```java
Math.abs(a - b)
```

Example:

```java
double a = -3;
double b = 1;

System.out.println(Math.abs(a - b));
```

Output:

```text
4.0
```

Do not use this:

```java
Math.abs(a) - Math.abs(b)
```

That does not correctly compute the distance between `a` and `b`.

这不能正确计算 `a` 和 `b` 之间的距离。

# 4. `Math.sqrt` and `Math.pow`<br>平方根与幂运算

`Math.sqrt(x)` takes one argument and returns the positive square root.

`Math.sqrt(x)` 接收一个实参，返回正平方根。

```java
System.out.println(Math.sqrt(9));
System.out.println(Math.sqrt(16));
```

Output:

```text
3.0
4.0
```

`Math.pow(base, exponent)` takes two arguments and returns:

`Math.pow(base, exponent)` 接收两个实参，返回：

```text
base raised to the exponent
```

也就是：

```text
base 的 exponent 次方
```

Example:

```java
System.out.println(Math.pow(2, 3));
System.out.println(Math.pow(10, 2));
```

Output:

```text
8.0
100.0
```

Both `sqrt` and `pow` return `double`.

`sqrt` 和 `pow` 都返回 `double`。

# 5. Syntax: Argument Count Matters<br>语法：实参数量要匹配

AP questions often test whether a method call is syntactically correct.

AP 题经常考一个方法调用在语法上是否正确。

`Math.sqrt` needs exactly one argument.

`Math.sqrt` 必须有且只有一个实参。

Correct:

```java
Math.sqrt(2)
Math.sqrt(2 + 3)
Math.sqrt(Math.sqrt(16))
```

Wrong:

```java
Math.sqrt()
Math.sqrt(2, 4)
Math.sqrt 2
```

`Math.pow` needs exactly two arguments.

`Math.pow` 必须有两个实参。

Correct:

```java
Math.pow(3, 2)
```

Wrong:

```java
Math.pow(3)
```

# 6. `Math.random()` Range<br>`Math.random()` 的范围

`Math.random()` returns a `double` in this range:

`Math.random()` 返回一个 `double`，范围是：

```text
0.0 <= value < 1.0
```

That means:

这意味着：

* it can return `0.0`

* it never returns `1.0`

* 可能返回 `0.0`

* 不会返回 `1.0`

Example:

```java
System.out.println(Math.random());
System.out.println(Math.random());
```

Possible output:

```text
0.374921
0.812305
```

The exact numbers change each time the program runs.

每次运行，具体数字通常都会变化。

# 7. Random Integers<br>随机整数

To generate random integers, we usually multiply, cast to `int`, and then shift the range.

生成随机整数时，通常先乘以范围大小，再转换成 `int`，最后平移范围。

## From `0` to `9`<br>从 `0` 到 `9`

```java
int n = (int)(Math.random() * 10);
```

Possible values:

```text
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
```

## From `1` to `10`<br>从 `1` 到 `10`

```java
int n = (int)(Math.random() * 10) + 1;
```

Possible values:

```text
1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

## General formula<br>通用公式

To generate an integer from `min` to `max`, inclusive:

要生成从 `min` 到 `max`，包含两端的整数：

```java
int n = (int)(Math.random() * (max - min + 1)) + min;
```

The range size is:

范围大小是：

```text
max - min + 1
```

Example: random integer from `25` to `60`, inclusive:

例如：生成 `25` 到 `60`，包含两端的随机整数：

```java
int rn = (int)(Math.random() * 36) + 25;
```

Why `36`?

为什么是 `36`？

```text
60 - 25 + 1 = 36
```

# 8. Parentheses Matter When Casting<br>类型转换时括号很重要

This is correct:

正确写法：

```java
int n = (int)(Math.random() * 10);
```

This is wrong:

错误写法：

```java
int n = (int)Math.random() * 10;
```

Why?

为什么？

`(int)Math.random()` becomes `0`, because `Math.random()` is always less than `1.0`.

`(int)Math.random()` 会变成 `0`，因为 `Math.random()` 永远小于 `1.0`。

So:

```text
(int)Math.random() * 10
= 0 * 10
= 0
```

If you write:

```java
int n = (int)Math.random() * 10 + 1;
```

the result is always:

```text
1
```

because `(int)Math.random()` is always `0`.

因为 `(int)Math.random()` 总是 `0`。

# 9. Probability with `Math.random()`<br>用 `Math.random()` 判断概率

Since `Math.random()` is between `0.0` and `1.0`, comparisons can represent probabilities.

因为 `Math.random()` 在 `0.0` 到 `1.0` 之间，所以比较表达式可以表示概率。

```java
Math.random() < 0.4
```

This is true about 40% of the time.

这个表达式大约 40% 的时候为 `true`。

```java
Math.random() > 0.25
```

This is true about 75% of the time.

这个表达式大约 75% 的时候为 `true`。

Do not use equality for probability questions:

概率题里不要用等号判断：

```java
Math.random() == 0.4
```

This is not a good way to represent 40%.

这不是表示 40% 概率的正确方式。

# 10. Common Beginner Mistakes<br>常见初学者错误

| Mistake                     | Wrong Code                         | Why Wrong                        | Correct Code                   | 中文解释                 |
| --------------------------- | ---------------------------------- | -------------------------------- | ------------------------------ | -------------------- |
| Forgetting `Math.`          | `sqrt(9)`                          | `sqrt` belongs to `Math`         | `Math.sqrt(9)`                 | 调用 Math 方法要写 `Math.` |
| Wrong number of arguments   | `Math.sqrt(2, 4)`                  | `sqrt` takes one argument        | `Math.sqrt(2 + 4)`             | `sqrt` 只能接收一个实参      |
| Assigning `double` to `int` | `int x = Math.sqrt(9);`            | `sqrt` returns `double`          | `double x = Math.sqrt(9);`     | 返回值类型不匹配             |
| Casting too early           | `(int)Math.random() * 10`          | Always becomes `0`               | `(int)(Math.random() * 10)`    | 先乘，再转 `int`          |
| Off-by-one range            | `(int)(Math.random() * 5)` for 1–5 | gives 0–4                        | `(int)(Math.random() * 5) + 1` | 随机范围少平移一步            |
| Wrong distance formula      | `Math.abs(a) - Math.abs(b)`        | not distance between two numbers | `Math.abs(a - b)`              | 两点距离是差的绝对值           |

# 11. Debugging Example<br>调试例子

Buggy code:

```java
int n = (int)Math.random() * 10 + 1;
System.out.println(n);
```

Problem:

This code always prints `1`.

问题：

这段代码总是打印 `1`。

Why?

为什么？

```text
(int)Math.random() = 0
0 * 10 + 1 = 1
```

Fixed code:

```java
int n = (int)(Math.random() * 10) + 1;
System.out.println(n);
```

Now `n` can be any integer from `1` to `10`.

现在 `n` 可以是 `1` 到 `10` 之间的任意整数。

| Bug                           | Type               | Fix                             |
| ----------------------------- | ------------------ | ------------------------------- |
| `(int)Math.random() * 10 + 1` | logic error        | `(int)(Math.random() * 10) + 1` |
| `int x = Math.pow(2, 3);`     | compile-time error | `double x = Math.pow(2, 3);`    |
| `Math.sqrt()`                 | compile-time error | pass exactly one argument       |

# 12. Mini Practice<br>小练习

## Practice 1: Choose the Output Type<br>练习 1：判断输出类型

What is printed?

```java
System.out.println(Math.sqrt(9));
System.out.println(Math.pow(2, 3));
```

Answer:

```text
3.0
8.0
```

Explanation: both methods return `double`.

解释：这两个方法都返回 `double`。

## Practice 2: Choose the Correct Expression<br>练习 2：选择正确表达式

Which expression computes the distance between `a` and `b`?

A. `Math.abs(a - b)`
B. `Math.abs(a) - Math.abs(b)`
C. `Math.abs(a + b)`

Answer:

```text
A. Math.abs(a - b)
```

Explanation: distance on a number line is the absolute value of the difference.

解释：数轴上两点之间的距离是“差的绝对值”。

## Practice 3: Random Range<br>练习 3：随机数范围

Which expression gives a random integer from `1` to `5`, inclusive?

A. `(int)(Math.random() * 5)`
B. `(int)(Math.random() * 6)`
C. `(int)(Math.random() * 5) + 1`

Answer:

```text
C. (int)(Math.random() * 5) + 1
```

Explanation: `(int)(Math.random() * 5)` gives `0` to `4`; adding `1` shifts it to `1` to `5`.

解释：`(int)(Math.random() * 5)` 得到 `0` 到 `4`；加 `1` 后变成 `1` 到 `5`。

## Practice 4: Fix the Code<br>练习 4：修复代码

The goal is to generate a random integer from `25` to `60`, inclusive.

Buggy code:

```java
int rn = (int)(Math.random() * 60) + 25;
```

Fixed code:

```java
int rn = (int)(Math.random() * 36) + 25;
```

Explanation:

```text
60 - 25 + 1 = 36
```

解释：范围大小是 `36`，不是 `60`。

# Quick Checklist<br>快速检查清单

Before answering a `Math` class question, check:

做 `Math` 类题目前，检查：

* Is the method called with `Math.`?
* Does the method use the correct number of arguments?
* Does `Math.sqrt` have exactly one argument?
* Does `Math.pow` have exactly two arguments?
* What type does the method return?
* Are you storing a `double` return value in a `double` variable?
* Is `Math.random()` treated as `0.0 <= value < 1.0`?
* For random integers, did you multiply before casting to `int`?
* Are the casting parentheses correct?
* For an inclusive range, did you use `max - min + 1`?
* Are you accidentally off by one?
* For distance, did you use `Math.abs(a - b)`?

