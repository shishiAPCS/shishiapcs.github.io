---
title: "AP CSA 1.6：复合赋值运算符"
layout: post
categories: media
render_with_liquid: false
---

In the previous lessons, we used assignment statements like `x = x + 1`. In this lesson, we learn shorter ways to update a variable’s value.

前几课我们写过像 `x = x + 1` 这样的赋值语句。这一课，我们学习更简洁的变量更新写法。

> **Compound assignment operators update a variable by doing math and assignment in one step.**
> **复合赋值运算符把“数学运算”和“重新赋值”合成一步完成。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.6 复合赋值运算符<br>Compound Assignment Operators

## 核心作用<br>Main Purpose

* 简化变量更新<br>Shorten variable updates
* 先运算，再赋值<br>Do math, then assign
* `x += 5` 等价于 `x = x + 5`<br>Same as `x = x + 5`

## 五个复合赋值运算符<br>Five Compound Operators

* `+=`：加后赋值<br>Add and assign
* `-=`：减后赋值<br>Subtract and assign
* `*=`：乘后赋值<br>Multiply and assign
* `/=`：除后赋值<br>Divide and assign
* `%=`：取余后赋值<br>Remainder and assign

## 自增与自减<br>Increment and Decrement

* `x++`：让 `x` 增加 1<br>Add 1 to `x`
* `x--`：让 `x` 减少 1<br>Subtract 1 from `x`
* 常用于循环<br>Common in loops

## AP 考试范围<br>AP Exam Focus

* 会考 `x++`、`x--` 的简单更新<br>Simple updates are tested
* 不考 `++x` 前缀形式<br>Prefix form is not tested
* 不考复杂的 `x++` 表达式求值<br>Complex postfix evaluation is not tested

## 代码追踪<br>Code Tracing

* 一行一行模拟代码执行<br>Trace line by line
* 每次变量变化都更新表格<br>Update variables after each change
* 注意整数除法<br>Watch integer division

## 常见错误<br>Common Mistakes

* 把 `+=` 写成 `=+`<br>Writing `=+` instead of `+=`
* 忘记变量值会被改掉<br>Forgetting the variable is updated
* 没有按顺序追踪代码<br>Not tracing in order

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A compound assignment operator is a shortcut for updating a variable.

复合赋值运算符是“更新变量”的简写。

```java
x += 5;
```

means:

```java
x = x + 5;
```

The variable on the left is used in the calculation, and then the new result is stored back into the same variable.

左边的变量先参与计算，然后新的结果再存回这个变量。

# 2. Compound Assignment Operators<br>复合赋值运算符

| Operator | Meaning              | Same As     | Example Result |
| -------- | -------------------- | ----------- | -------------- |
| `+=`     | add and assign       | `x = x + n` | `x += 3`       |
| `-=`     | subtract and assign  | `x = x - n` | `x -= 3`       |
| `*=`     | multiply and assign  | `x = x * n` | `x *= 3`       |
| `/=`     | divide and assign    | `x = x / n` | `x /= 3`       |
| `%=`     | remainder and assign | `x = x % n` | `x %= 3`       |

Example:

```java
int score = 10;

score += 5;
System.out.println(score);

score *= 2;
System.out.println(score);
```

Output:

```text
15
30
```

`score += 5` changes `score` from `10` to `15`.
`score *= 2` changes `score` from `15` to `30`.

`score += 5` 把 `score` 从 `10` 改成 `15`。
`score *= 2` 把 `score` 从 `15` 改成 `30`。

# 3. Increment and Decrement<br>自增与自减

When you only want to add or subtract `1`, Java has even shorter operators.

如果你只想加 `1` 或减 `1`，Java 有更短的写法。

| Code  | Same As     | 中文理解     |
| ----- | ----------- | -------- |
| `x++` | `x = x + 1` | `x` 增加 1 |
| `x--` | `x = x - 1` | `x` 减少 1 |

Example:

```java
int count = 0;

count++;
count++;
count--;

System.out.println(count);
```

Output:

```text
1
```

Step by step:

| Line             | `count` |
| ---------------- | ------- |
| `int count = 0;` | `0`     |
| `count++;`       | `1`     |
| `count++;`       | `2`     |
| `count--;`       | `1`     |

# 4. AP Exam Focus: Postfix Only<br>AP 考点：只需掌握简单后缀形式

You may see `x++` and `x--` on the AP exam.

AP 考试中可能会看到 `x++` 和 `x--`。

You do **not** need to worry about tricky prefix expressions like this:

```java
++x
```

You also do **not** need to evaluate tricky expressions like this:

```java
System.out.println(x++);
```

For AP CSA, focus on the simple meaning:

在 AP CSA 中，重点掌握简单含义：

```java
x++;
```

means:

```java
x = x + 1;
```

# 5. Code Tracing<br>代码追踪

Code tracing means simulating the program line by line, like you are the computer.

代码追踪就是像电脑一样，一行一行模拟代码执行。

Example:

```java
int x = 0;
int y = 1;
int z = 2;

x--;
y++;
z += y;
```

Trace table:

| Line      | `x` | `y` | `z` |
| --------- | --: | --: | --: |
| Start     |   0 |   1 |   2 |
| `x--;`    |  -1 |   1 |   2 |
| `y++;`    |  -1 |   2 |   2 |
| `z += y;` |  -1 |   2 |   4 |

Final values:

```text
x = -1, y = 2, z = 4
```

The key is to update the table immediately after each line.

关键是：每执行一行，就马上更新变量表。

# 6. Integer Division Reminder<br>整数除法提醒

Compound operators still follow normal Java rules.

复合赋值运算符仍然遵守 Java 的普通规则。

```java
int y = 5;
y /= 2;

System.out.println(y);
```

Output:

```text
2
```

Because `y` is an `int`, `5 / 2` gives `2`, not `2.5`.

因为 `y` 是 `int`，所以 `5 / 2` 的结果是 `2`，不是 `2.5`。

# 7. Common Beginner Mistakes<br>常见初学者错误

| Mistake                               | Wrong Code                                     | Why Wrong                        | Fixed Code             | 中文解释          |
| ------------------------------------- | ---------------------------------------------- | -------------------------------- | ---------------------- | ------------- |
| Using `=+` instead of `+=`            | `x =+ 5;`                                      | This assigns positive `5` to `x` | `x += 5;`              | `=+` 不是“加后赋值” |
| Forgetting the variable changes       | `x += 3;` then still thinking `x` is old value | `x` has been updated             | Trace the new value    | 执行后变量值已经改变    |
| Treating `x++` as adding 2            | `x++;`                                         | It only adds 1                   | `x += 2;`              | `++` 只加 1     |
| Expecting decimal from `int` division | `int x = 5; x /= 2;`                           | `int / int` keeps integer result | Use `double` if needed | 整数除法会舍掉小数部分   |

# 8. Debugging Example<br>调试例子

Buggy code:

```java
int score = 10;
score =+ 5;

System.out.println(score);
```

Output:

```text
5
```

Problem: `=+` is not the same as `+=`.

问题：`=+` 和 `+=` 不是一回事。

Fixed code:

```java
int score = 10;
score += 5;

System.out.println(score);
```

Output:

```text
15
```

| Bug           | Type          | Fix                    |
| ------------- | ------------- | ---------------------- |
| `score =+ 5;` | Logic error   | Use `score += 5;`      |
| `score += ;`  | Syntax error  | Put a value after `+=` |
| `score /= 0;` | Runtime error | Do not divide by zero  |

A logic error may still run, but the answer is wrong. A syntax error prevents the program from compiling. A runtime error happens while the program is running.

逻辑错误可能能运行，但结果错。语法错误会导致程序无法编译。运行时错误是在程序运行过程中出错。

# 9. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is printed?

```java
int x = 4;
x += 3;
x *= 2;

System.out.println(x);
```

Answer:

```text
14
```

Explanation: `4 + 3 = 7`, then `7 * 2 = 14`.

解释：先 `4 + 3 = 7`，再 `7 * 2 = 14`。

## Practice 2: Predict the Result<br>练习 2：预测结果

What are the final values of `x`, `y`, and `z`?

```java
int x = 3;
int y = 5;
int z = 2;

x = z * 2;
y = y / 2;
z++;
```

Answer:

```text
x = 4, y = 2, z = 3
```

Explanation: `z * 2` is `4`; `5 / 2` is `2` because this is integer division; `z++` changes `z` from `2` to `3`.

解释：`z * 2` 是 `4`；`5 / 2` 是 `2`，因为这是整数除法；`z++` 把 `z` 从 `2` 改成 `3`。

## Practice 3: Fix the Code<br>练习 3：修复代码

The goal is to add `5` to `score`. Fix the code.

```java
int score = 10;
score =+ 5;
System.out.println(score);
```

Fixed code:

```java
int score = 10;
score += 5;
System.out.println(score);
```

Output:

```text
15
```

Explanation: use `+=` when you want to add to the current value and store the result back.

解释：如果要在原来的值上加，并把结果存回变量，要用 `+=`。

# Quick Checklist<br>快速检查清单

Before answering a compound assignment question, check:

做复合赋值题前，检查：

* What is the variable’s current value?
* Is the operator `+=`, `-=`, `*=`, `/=`, or `%=?
* Does the statement update the variable on the left?
* Is it `+=`, not `=+`?
* Does `x++` mean add exactly `1`?
* Does `x--` mean subtract exactly `1`?
* Are you tracing the code line by line?
* If division is used, is it integer division?
* Did you update the trace table after every line?
