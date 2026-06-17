---
title: "AP CSA 1.3：表达式与输出"
layout: post
categories: media
render_with_liquid: false
---


In Lesson 1.2, we learned how variables store values. In this lesson, we learn how Java **prints values**, **calculates expressions**, and **decides the final output**.

在 1.2 中，我们学习了变量如何储存值。本节课我们学习 Java 如何**输出信息**、**计算表达式**，以及**判断程序最终会打印什么**。

> **Expressions calculate values. Output statements display values.**
> **表达式负责计算，输出语句负责显示。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.3 表达式与输出<br>Expressions and Output

## 输出语句<br>Output Statements

* `System.out.print(value)`：输出后不换行<br>prints without new line
* `System.out.println(value)`：输出后换行<br>prints then new line
* 做输出题时要追踪光标位置<br>track where the next output starts

## 字符串字面量<br>String Literal

* 双引号里的固定文本<br>fixed text in double quotes
* 例：`"Hello"`<br>example: `"Hello"`
* 引号里的变量名只是文字<br>variable names inside quotes are just text

## 转义序列<br>Escape Sequence

* `\"`：输出双引号<br>prints double quote
* `\\`：输出反斜杠<br>prints backslash
* `\n`：换行<br>new line

## 算术表达式<br>Arithmetic Expression

* 由数字、变量、运算符组成<br>numbers, variables, operators
* 运算符 Operators：`+`, `-`, `*`, `/`, `%`
* Java 用 `*` 和 `/`，不用 `×` 和 `÷`<br>Java uses `*` and `/`

## 类型与除法<br>Types and Division

* `int / int` → `int`，小数部分被截掉<br>decimal part is truncated
* 至少一个 `double` → `double` 结果<br>one double gives double result
* `2 / 3` → `0`，`2.0 / 3` → `0.666...`

## 余数运算符<br>Remainder Operator `%`

* `5 % 2` → `1`<br>5 divided by 2 leaves 1
* `8 % 2` → `0`<br>no remainder
* 如果 `x < y`，`x % y` → `x`<br>if x is smaller, result is x

## 运算顺序<br>Operator Precedence

* 括号先算<br>parentheses first
* `*`, `/`, `%` 先于 `+`, `-`
* 同级从左到右<br>same level: left to right

## 常见错误<br>Common Mistakes

* 以为 `2 / 3` 是 `0.666...`
* 把变量名放进引号<br>printing variable name as text
* 整数除以 0<br>integer division by zero
* 公式写错但程序不报错<br>logic error

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

This lesson is mainly about **predicting output**.

本节课的核心能力是：**判断 Java 代码会输出什么结果**。

When reading output code, check:

| Check                 | Why it matters                               | 中文理解          |
| --------------------- | -------------------------------------------- | ------------- |
| `print` or `println`? | Controls line breaks.                        | 判断是否换行        |
| Text or expression?   | Text is printed; expressions are calculated. | 文字直接输出，表达式先计算 |
| `int` or `double`?    | Division behaves differently.                | 整数除法和小数除法不同   |
| Operator order?       | Java follows precedence rules.               | Java 按运算优先级计算 |

# 2. Output Statements<br>输出语句

Java commonly uses two output methods.

Java 常用两个输出方法：

| Code                         | Meaning                              | 中文解释   |
| ---------------------------- | ------------------------------------ | ------ |
| `System.out.print(value);`   | Prints without moving to a new line. | 输出后不换行 |
| `System.out.println(value);` | Prints and then moves to a new line. | 输出后换行  |

Example:

```java 
System.out.print("Hi ");
System.out.println("there");
System.out.print("!");
```

Output:

```text
Hi there
!
```

`print("Hi ")` stays on the same line.
`println("there")` prints `there` and then moves to the next line.

`print("Hi ")` 不换行。
`println("there")` 输出后换行，所以 `!` 在下一行。

# 3. String Literals and Escape Sequences<br>字符串字面量与转义序列

A **string literal** is fixed text inside double quotes.

**字符串字面量 String Literal** 是双引号里的固定文本。

```java 
System.out.println("Hello");
```

Useful escape sequences:

| Code | Prints   | 中文解释  |
| ---- | -------- | ----- |
| `\"` | `"`      | 输出双引号 |
| `\\` | `\`      | 输出反斜杠 |
| `\n` | new line | 换行    |

Example:

```java 
System.out.println("She said, \"Hi!\"");
System.out.println("C:\\Users\\Student");
System.out.println("Line 1\nLine 2");
```

Output:

```text
She said, "Hi!"
C:\Users\Student
Line 1
Line 2
```

# 4. Arithmetic Expressions<br>算术表达式

An **arithmetic expression** uses numbers, variables, and operators to calculate one value.

**算术表达式 Arithmetic Expression** 使用数字、变量和运算符，最后算出一个值。

| Operator | Meaning        | Example | Result |
| -------- | -------------- | ------- | ------ |
| `+`      | addition       | `2 + 3` | `5`    |
| `-`      | subtraction    | `2 - 3` | `-1`   |
| `*`      | multiplication | `2 * 3` | `6`    |
| `/`      | division       | `7 / 2` | `3`    |
| `%`      | remainder      | `7 % 2` | `1`    |

Java uses `*` and `/`, not `×` or `÷`.

Java 中乘法用 `*`，除法用 `/`，不能写 `×` 或 `÷`。

# 5. `int` Division vs. `double` Division<br>整数除法 vs 小数除法

This is the most important trap in this lesson.

这是本节课最重要的易错点。

```java
System.out.println(2 / 3);
System.out.println(2.0 / 3);
```

Output:

```text
0
0.6666666666666666
```

| Expression | Type           | Result     | 中文解释                |
| ---------- | -------------- | ---------- | ------------------- |
| `2 / 3`    | `int / int`    | `0`        | 整数除法会截掉小数部分         |
| `2.0 / 3`  | `double / int` | `0.666...` | 有一个 `double`，结果就是小数 |

Important:

`int` division **truncates**. It does not round.

整数除法是**截断 truncation**，不是四舍五入。

```java
System.out.println(7 / 2);    // 3
System.out.println(7.0 / 2);  // 3.5
```

# 6. Remainder Operator `%`<br>余数运算符

The `%` operator gives the remainder after division.

`%` 是**余数运算符 Remainder Operator**，表示除法后的余数。

```java 
System.out.println(5 % 2);  // 1
System.out.println(8 % 2);  // 0
System.out.println(9 % 2);  // 1
System.out.println(3 % 8);  // 3
```

Key rule:

If `x < y`, then `x % y` is `x`.

如果 `x < y`，那么 `x % y` 的结果就是 `x`。

Example:

`3 % 8` is `3`, because 8 cannot go into 3 even once.

`3 % 8` 等于 `3`，因为 8 一次都除不进 3。

# 7. Order of Operations<br>运算顺序

Java follows normal math precedence.

Java 遵守常见数学运算优先级。

| Priority | Operators     | 中文解释   |
| -------- | ------------- | ------ |
| 1        | `()`          | 括号优先   |
| 2        | `*`, `/`, `%` | 乘、除、余数 |
| 3        | `+`, `-`      | 加、减    |
| 4        | left to right | 同级从左到右 |

Example:

```java 
System.out.println(2 + 3 * 2);
System.out.println((2 + 3) * 2);
System.out.println(2 + (3 * 2));
```

Output:

```text 
8
10
8
```

When the expression is hard to read, use parentheses.

表达式不好判断时，使用括号会更清楚。

# 8. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                 | Wrong code                   | Why wrong                                | Fixed code                  | 中文解释                  |
| --------------------------------------- | ---------------------------- | ---------------------------------------- | --------------------------- | --------------------- |
| Expecting decimal from integer division | `2 / 3`                      | Both values are `int`, so result is `0`. | `2.0 / 3`                   | 想要小数，至少一个数要是 `double` |
| Using math symbols                      | `2 × 3`                      | Java does not use `×`.                   | `2 * 3`                     | Java 乘法用 `*`          |
| Forgetting quotes for text              | `System.out.println(Hi);`    | Java thinks `Hi` is a variable.          | `System.out.println("Hi");` | 普通文字要加双引号             |
| Putting a variable inside quotes        | `System.out.println("age");` | Prints the word `age`.                   | `System.out.println(age);`  | 变量名放进引号就变成文字          |
| Integer division by zero                | `10 / 0`                     | Causes `ArithmeticException`.            | Do not divide by zero.      | 整数除以 0 会运行时报错         |

# 9. Debugging Example<br>调试例子

Buggy code:

```java
public class CmToInches
{
    public static void main(String[] args)
    {
        System.out.print("100 centimeters in inches is: ");
        System.out.println(100 * 2.54);
    }
}
```

The code can run, but the formula is wrong.

这段代码可以运行，但公式错了。

Since:

```text
1 inch = 2.54 centimeters
```

To convert centimeters to inches, divide by `2.54`.

厘米转换成英寸，要除以 `2.54`。

Fixed code:

```java 
public class CmToInches
{
    public static void main(String[] args)
    {
        System.out.print("100 centimeters in inches is: ");
        System.out.println(100 / 2.54);
    }
}
```

| Bug              | Fix              | 中文解释          |
| ---------------- | ---------------- | ------------- |
| `100 * 2.54`     | `100 / 2.54`     | 厘米转英寸要除以 2.54 |
| No error message | Test the formula | 逻辑错误不一定会报错    |

# 10. Mini Practice<br>小练习

## Practice 1: Choose the output<br>练习 1：选择输出

What is printed?

```java 
System.out.print("Java is ");
System.out.println("fun ");
System.out.print("and cool!");
```

A.

```text 
Java is fun and cool!
```

B.

```text 
Java isfun
and cool!
```

C.

```text 
Java is
fun
and cool!
```

D.

```text 
Java is fun
and cool!
```

Answer: **D**

`print("Java is ")` does not move to a new line.
`println("fun ")` prints and then moves to the next line.

第一句不换行，第二句输出后换行，所以 `and cool!` 在下一行。

## Practice 2: Predict the result<br>练习 2：判断计算结果

What is printed?

```java 
System.out.println(5 + 5 / 2 * 3 - 1);
```

Answer: **10**

```text 
5 + 5 / 2 * 3 - 1
5 + 2 * 3 - 1
5 + 6 - 1
10
```

`5 / 2` is `2`, not `2.5`, because both values are `int`.

`5 / 2` 是 `2`，不是 `2.5`，因为这是整数除法。

## Practice 3: Fix the code<br>练习 3：修改代码

Buggy code:

```java 
System.out.println("Pay for 12 hours at 7.50 dollars per hour:");
System.out.println(12 7.50);
```

Fixed code:

```java 
System.out.println("Pay for 12 hours at 7.50 dollars per hour:");
System.out.println(12 * 7.50);
```

两个数字之间必须有运算符。这里要计算工资，所以用乘法 `*`。

# 11. Quick Checklist<br>快速检查清单

Before answering an output question, check:

做输出题前，检查：

* Is it `print` or `println`?
* Did I track line breaks?
* Is the content inside quotes just text?
* Am I printing a variable or a string literal?
* Did I use Java operators: `+`, `-`, `*`, `/`, `%`?
* Is the division `int / int` or does it include a `double`?
* Did I apply parentheses first?
* Did I calculate `*`, `/`, `%` before `+`, `-`?
* Did I avoid integer division by zero?
