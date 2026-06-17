---
title: "AP CSA 1.8：注释、文档与前后置条件"
layout: post
categories: media
render_with_liquid: false
---

In this lesson, we move from writing code for the computer to writing information for people. Comments help humans understand code. Preconditions and postconditions help programmers know how a method should be used.

这一课我们从“写给电脑执行的代码”转向“写给人看的说明”。注释帮助人理解代码；前置条件和后置条件帮助程序员判断一个方法应该如何被正确使用。

> **Comments explain code to people; preconditions and postconditions explain what code expects and promises.**
> **注释解释代码；前置条件说明代码运行前需要什么，后置条件说明代码运行后保证什么。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.8 注释、文档与前后置条件<br>Documentation with Comments and Preconditions

## 注释的作用<br>Purpose of Comments

* 写给程序员看的说明<br>Written for programmers
* 编译器会忽略注释<br>The compiler ignores comments
* 不会改变程序输出<br>They do not change program output

## 三种 Java 注释<br>Three Comment Types

* `//`：单行注释<br>Single-line comment
* `/* */`：多行注释<br>Multi-line block comment
* `/** */`：文档注释<br>Javadoc documentation comment

## Javadoc 文档注释<br>Javadoc Comments

* 用来生成 API 文档<br>Used to generate API documentation
* `@param`：说明参数<br>Describes a parameter
* `@return`：说明返回值<br>Describes the return value
* `@author`、`@since`、`@version`：说明作者、日期、版本<br>Author, date, version

## 前置条件<br>Precondition

* 代码运行前必须成立的条件<br>Must be true before code runs
* 方法不一定会主动检查<br>The method may not check it
* `Math.sqrt(num)`：`num >= 0`<br>The number should not be negative
* `a / b`：`b != 0`<br>The divisor cannot be zero

## 后置条件<br>Postcondition

* 代码运行后必须成立的结果<br>Must be true after code runs
* 说明返回值或对象状态<br>Describes return value or object state
* `return score + extraCredit`：返回总分<br>Returns the total score

## AP 考点<br>AP Exam Focus

* 区分三种注释符号<br>Distinguish comment symbols
* 判断合理的前置条件<br>Choose reasonable preconditions
* 判断方法运行后的保证<br>Identify postconditions
* 注释不会影响执行<br>Comments do not affect execution

## 调试检查<br>Debugging Checklist

* 输入是否满足前置条件？<br>Does the input satisfy the precondition?
* 程序是语法错误、运行时错误，还是逻辑问题？<br>Syntax error, runtime error, or logic issue?
* 输出题先忽略注释<br>Ignore comments when predicting output

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

Comments are for humans. The compiler skips them, so comments do not run and do not affect output.

注释是写给人看的。编译器会跳过注释，所以注释不会执行，也不会影响输出。

Preconditions and postconditions are also written for programmers, but they describe how code should be used.

前置条件和后置条件也是写给程序员看的，但它们说明的是代码应该如何被正确使用。

| Term          | Meaning                          | 中文理解    |
| ------------- | -------------------------------- | ------- |
| Comment       | Explains code                    | 解释代码    |
| Precondition  | Must be true before running code | 运行前必须满足 |
| Postcondition | Must be true after running code  | 运行后必须成立 |

# 2. Java Comment Types<br>Java 注释类型

Java has three common comment styles.

Java 中常见的注释有三种。

| Type                | Syntax           | Use                                  |
| ------------------- | ---------------- | ------------------------------------ |
| Single-line comment | `// comment`     | Short note on one line               |
| Multi-line comment  | `/* comment */`  | Longer notes across lines            |
| Javadoc comment     | `/** comment */` | Documentation for classes or methods |

Example:

```java
// This prints a greeting.
System.out.println("Hello");

/*
 This part explains
 several lines of code.
*/

/**
 * This class stores student scores.
 */
public class StudentScore
{
}
```

The comments explain the code, but only the `System.out.println("Hello");` line actually runs.

这些注释都只是解释代码，真正执行的是 `System.out.println("Hello");` 这一行。

# 3. Javadoc and Tags<br>Javadoc 与文档标签

Javadoc comments usually appear before classes or methods. They can include tags like `@param` and `@return`.

Javadoc 文档注释通常写在类或方法前面，可以使用 `@param` 和 `@return` 等标签。

```java
/**
 * Adds extra credit to a score.
 * @param score the original score
 * @param extraCredit the extra-credit points
 * @return the final score
 */
public double computeScore(double score, double extraCredit)
{
    double totalScore = score + extraCredit;
    return totalScore;
}
```

Important point: Javadoc helps people and tools create documentation. It does not change the method’s behavior.

重点：Javadoc 帮助人和工具生成文档，但它不会改变方法本身的运行结果。

# 4. Preconditions<br>前置条件

A precondition is something that must be true before a section of code or a method runs correctly.

前置条件是代码或方法正确运行前必须满足的条件。

Example:

```java
/* Precondition: divisor != 0 */
int result = total / divisor;
```

If `divisor` is `0`, integer division will cause a runtime error.

如果 `divisor` 是 `0`，整数除法会导致运行时错误。

Another example:

```java
double num = -4;
System.out.println(Math.sqrt(num));
```

Output:

```text
NaN
```

`Math.sqrt(num)` expects `num >= 0`. If `num` is negative, Java returns `NaN`, which means “not a number.”

`Math.sqrt(num)` 期望 `num >= 0`。如果 `num` 是负数，Java 会返回 `NaN`，意思是“不是一个数字”。

| Code / Method     | Reasonable Precondition      | If Broken                             |
| ----------------- | ---------------------------- | ------------------------------------- |
| `total / divisor` | `divisor != 0`               | Runtime error                         |
| `Math.sqrt(num)`  | `num >= 0`                   | `NaN`                                 |
| `forward(pixels)` | `pixels` is in a legal range | May behave unexpectedly or be limited |

A method does not always check its preconditions for you.

方法不一定会帮你检查前置条件。

# 5. Postconditions<br>后置条件

A postcondition is something that must be true after a section of code or a method finishes.

后置条件是代码或方法运行结束后必须成立的结果。

Example:

```java
/**
 * @param score the original score
 * @param extraCredit the extra-credit points
 * @return the final score
 */
public double computeScore(double score, double extraCredit)
{
    double totalScore = score + extraCredit;
    return totalScore;
}
```

A good postcondition could be:

```java
/* Postcondition: returns score + extraCredit */
```

This describes what the method guarantees after it runs.

这句话说明方法运行后保证返回什么结果。

# 6. AP Exam Focus: Reasonable Conditions<br>AP 考点：合理条件

For AP CSA, preconditions are often about method inputs.

在 AP CSA 中，前置条件通常和方法输入有关。

Consider this method:

```java
public double computeScore(double score, double extraCredit)
{
    double totalScore = score + extraCredit;
    return totalScore;
}
```

Reasonable preconditions:

```java
/* Precondition: score >= 0 */
/* Precondition: extraCredit >= 0 */
```

Why?

Because a score and extra-credit points are normally not negative.

原因是：分数和加分通常不应该是负数。

Unreasonable precondition:

```java
/* Precondition: computeScore >= 0 */
```

`computeScore` is the method name, not an input variable. Preconditions should usually describe what must be true before the method runs.

`computeScore` 是方法名，不是输入变量。前置条件通常应该描述方法运行前输入值需要满足什么条件。

# 7. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                 | Wrong Code                            | Why Wrong                                        | Fixed Code                       | 中文解释                |
| --------------------------------------- | ------------------------------------- | ------------------------------------------------ | -------------------------------- | ------------------- |
| Thinking comments run                   | `// System.out.println("Hi");`        | The line is commented out                        | `System.out.println("Hi");`      | 加了 `//` 后，这一行不会执行   |
| Forgetting to close a block comment     | `/* comment`                          | Causes a syntax error                            | `/* comment */`                  | 多行注释必须有开始和结束        |
| Using normal block comments for Javadoc | `/* @param score ... */`              | Javadoc tools will not treat it as documentation | `/** @param score ... */`        | Javadoc 要用 `/** */` |
| Writing a precondition about a result   | `/* Precondition: totalScore >= 0 */` | `totalScore` is created inside the method        | `/* Precondition: score >= 0 */` | 前置条件应描述运行前已经存在的输入   |

# 8. Debugging Example<br>调试例子

Buggy code:

```java
public class SqRoot
{
    public static void main(String[] args)
    {
        double num = -4;
        System.out.println(Math.sqrt(num));
    }
}
```

Output:

```text
NaN
```

Problem: the precondition for `Math.sqrt(num)` is not satisfied. The value should not be negative.

问题：`Math.sqrt(num)` 的前置条件没有满足。`num` 不应该是负数。

Fixed code:

```java
public class SqRoot
{
    public static void main(String[] args)
    {
        double num = 4;
        System.out.println(Math.sqrt(num));
    }
}
```

Output:

```text
2.0
```

| Issue                  | Type                        | Explanation                           |
| ---------------------- | --------------------------- | ------------------------------------- |
| `Math.sqrt(-4)`        | Logic / invalid input issue | Program runs, but the result is `NaN` |
| `12 / 0` with integers | Runtime error               | Program may stop while running        |
| Missing `*/`           | Syntax error                | Program may not compile               |

A broken precondition does not always look the same. Sometimes the program stops. Sometimes it runs but gives an invalid or useless result.

前置条件被破坏时，结果不一定一样。有时程序会停止，有时程序能运行，但结果无效或没有意义。

# 9. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is the output?

```java
System.out.print("A");
// System.out.print("B");
System.out.println("C");
```

Answer:

```text
AC
```

Explanation: the `"B"` line is a comment, so it does not run.

解释：`"B"` 那一行被注释掉了，所以不会执行。

## Practice 2: Predict the Result<br>练习 2：预测结果

What is printed?

```java
double num = 9;
System.out.println(Math.sqrt(num));
```

Answer:

```text
3.0
```

Explanation: `9` satisfies the precondition `num >= 0`.

解释：`9` 满足 `num >= 0` 这个前置条件。

## Practice 3: Fix the Code<br>练习 3：修复代码

Fix the code so it does not cause a runtime error.

```java
int total = 12;
int divisor = 0;
System.out.println(total / divisor);
```

One possible fix:

```java
int total = 12;
int divisor = 3;
System.out.println(total / divisor);
```

Output:

```text
4
```

Explanation: integer division cannot use `0` as the divisor.

解释：整数除法中，除数不能是 `0`。

# Quick Checklist<br>快速检查清单

Before answering a question about comments, preconditions, or postconditions, check:

做这类题前，检查：

* Are you reading code or comments?
* Comments are skipped by the compiler.
* Is the comment type `//`, `/* */`, or `/** */`?
* For a method, what must be true before it runs?
* Is the question asking for a precondition or a postcondition?
* Are preconditions about input values?
* Are postconditions about the result after running?
* If a precondition is broken, could it cause a runtime error, `NaN`, or unexpected behavior?
* For Javadoc, does `@param` describe input and `@return` describe output?
