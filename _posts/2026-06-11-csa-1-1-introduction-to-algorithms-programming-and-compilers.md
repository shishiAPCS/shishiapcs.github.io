---
title: "AP CSA 1.1：算法、Java 程序结构与调试入门"
mathjax: true
layout: post
categories: media
render_with_liquid: false
---

## Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.1 Introduction to Algorithms, Programming, and Compilers<br>算法、编程与编译器简介

## 1. Algorithms<br>算法
### Step-by-step processes<br>一步一步完成任务的过程
#### Recipe for cooking<br>做饭菜谱
#### Directions to a place<br>去某个地方的路线
#### Searching, sorting, or coding a game<br>搜索、排序或编写游戏

### Problem solving<br>解决问题
#### Break a large task into smaller steps<br>把大任务拆成小步骤
#### Each step should be clear enough to implement<br>每一步都应该清楚到可以写成代码

### Sequencing<br>顺序执行
#### Steps happen one at a time<br>步骤一次执行一个
#### Order matters<br>顺序很重要
#### Code usually runs from top to bottom<br>代码通常从上往下运行

### Planning algorithms<br>设计算法
#### English descriptions<br>英文描述
#### Diagrams<br>图示
#### Pseudocode<br>伪代码
#### Goal: plan before coding<br>目标：先想清楚，再写代码

---

## 2. Java Program Basics<br>Java 程序基础

### Java is used in real software<br>Java 被用于真实软件开发
#### Android apps<br>安卓应用
#### Minecraft<br>Minecraft
#### Netflix software<br>Netflix 的部分软件

### Object-oriented language<br>面向对象语言
#### Classes and objects are basic building blocks<br>类和对象是基本组成部分
#### Details will be learned later<br>后面会继续深入学习

### Class<br>类
#### Every Java program is written inside a class<br>每个 Java 程序都写在类里面
#### Example: `public class MyClass`<br>例子：`public class MyClass`

### Main method<br>main 方法
#### Entry point of the program<br>程序运行的入口
#### Java starts execution in `main`<br>Java 从 `main` 开始执行
#### Template: `public static void main(String[] args)`<br>模板：`public static void main(String[] args)`

### Output<br>输出
#### `System.out.println()` displays information<br>`System.out.println()` 用来显示信息
#### Text must be inside quotation marks<br>文字要放在引号里
#### Example: `System.out.println("Hi there!");`<br>例子：`System.out.println("Hi there!");`

---

## 3. Java Structure and Rules<br>Java 结构与规则

### Basic program structure<br>基本程序结构
#### `public class MyClass`<br>定义类
#### `{ }` for code blocks<br>`{ }` 表示代码块
#### `main` method inside the class<br>`main` 方法写在类里面
#### Statements inside `main`<br>语句写在 `main` 方法里面

### Curly braces `{ }`<br>大括号 `{ }`
#### Every `{` needs a matching `}`<br>每个 `{` 都需要对应的 `}`
#### Used for class definitions<br>用于类定义
#### Used for method definitions<br>用于方法定义

### Statements<br>语句
#### A complete action in Java<br>Java 中一个完整的动作
#### Most statements end with semicolon `;`<br>大多数语句以分号 `;` 结尾
#### Example: `System.out.println("Hi!");`<br>例子：`System.out.println("Hi!");`

### Semicolon `;`<br>分号 `;`
#### Like a period in English<br>像英文句子的句号
#### Needed after complete statements<br>完整语句后通常需要分号
#### Not used after class or method headers<br>类头和方法头后面不加分号

### Keywords<br>关键字
#### Reserved words with special meanings<br>有特殊含义的保留词
#### Examples: `public`, `class`, `static`, `void`<br>例子：`public`、`class`、`static`、`void`
#### Keywords must be lowercase<br>关键字必须小写

### Capitalization<br>大小写
#### Java is case-sensitive<br>Java 区分大小写
#### `System` and `String` are capitalized<br>`System` 和 `String` 首字母大写
#### `system.out.println()` is wrong<br>`system.out.println()` 是错误写法

### Comments<br>注释
#### Notes for humans, ignored by the compiler<br>写给人看的说明，编译器会跳过
#### Single-line comment: `//`<br>单行注释：`//`
#### Multi-line comment: `/* ... */`<br>多行注释：`/* ... */`
#### Good comments explain purpose<br>好的注释解释代码目的

---

## 4. Development Process<br>开发过程

### Source file<br>源文件
#### Java source files end with `.java`<br>Java 源文件以 `.java` 结尾
#### Code is written in a text editor or IDE<br>代码可以写在文本编辑器或 IDE 中

### File name and class name<br>文件名与类名
#### Class name should match file name<br>类名应与文件名一致
#### Example: `Hello` class → `Hello.java`<br>例子：`Hello` 类 → `Hello.java`

### IDE<br>集成开发环境
#### Integrated Development Environment<br>集成开发环境
#### Helps write code<br>帮助写代码
#### Helps compile code<br>帮助编译代码
#### Helps run code<br>帮助运行代码
#### Examples: CSAwesome Active Code, BlueJ, IntelliJ, VS Code<br>例子：CSAwesome Active Code、BlueJ、IntelliJ、VS Code

### Compiler<br>编译器
#### Computers do not directly understand Java<br>计算机不能直接理解 Java
#### Compiler translates Java source code<br>编译器翻译 Java 源代码
#### Checks code for syntax errors<br>检查代码语法错误
#### Produces code the computer can run<br>生成计算机可以运行的代码

### Compile and run<br>编译与运行
#### First compile the program<br>先编译程序
#### Fix syntax errors if needed<br>如果有语法错误，先修复
#### Then run the program<br>然后运行程序

---

## 5. Errors<br>错误类型

### Syntax errors<br>语法错误
#### Code breaks Java grammar rules<br>代码违反 Java 语法规则
#### Detected by the compiler<br>由编译器发现
#### Program cannot run until fixed<br>修复前程序不能运行

### Common syntax errors<br>常见语法错误
#### Missing semicolon `;`<br>漏写分号 `;`
#### Missing closing brace `}`<br>漏写右大括号 `}`
#### Missing closing quote `"`<br>漏写右引号 `"`
#### Missing parenthesis `)`<br>漏写右括号 `)`
#### Wrong capitalization<br>大小写错误

### Reading error messages<br>阅读错误信息
#### Look at the file name<br>看文件名
#### Look at the line number<br>看行号
#### Read the error message<br>读错误提示
#### Use the caret `^` as a clue<br>利用 `^` 找线索
#### The real error may be nearby<br>真正错误可能在附近行

### Run-time errors<br>运行时错误
#### Happen while the program is running<br>程序运行时发生
#### Not always detected by the compiler<br>编译器不一定提前发现
#### May cause the program to crash<br>可能导致程序崩溃

### Exceptions<br>异常
#### A type of run-time error<br>一种运行时错误
#### Interrupts normal program flow<br>中断程序正常执行
#### Example: `ArithmeticException`<br>例子：`ArithmeticException`
#### Example cause: divide by zero<br>原因示例：除以 0

### Logic errors<br>逻辑错误
#### Program runs but gives the wrong result<br>程序能运行，但结果错误
#### Caused by a mistake in the algorithm<br>通常由算法思路错误导致
#### Found by testing with expected output<br>通过测试预期输出发现

---

## 6. Debugging<br>调试

### What is debugging?<br>什么是调试？
#### Finding and fixing errors<br>发现并修复错误
#### Normal part of programming<br>编程中的正常过程
#### All coders get bugs<br>所有程序员都会遇到 bug

### Debugging habits<br>调试习惯
#### Read the error message carefully<br>认真阅读错误信息
#### Check the line number first<br>先检查提示的行号
#### Also check nearby lines<br>同时检查附近的行
#### Fix one error at a time<br>一次修复一个错误
#### Run the program again after fixing<br>修复后重新运行程序

### Pair programming<br>结对编程
#### Driver types the code<br>Driver 负责打代码
#### Navigator checks ideas and mistakes<br>Navigator 负责检查思路和错误
#### Switch roles often<br>经常交换角色

### Rubber duck debugging<br>小黄鸭调试法
#### Explain code line by line<br>逐行解释代码
#### Use a duck, toy, friend, or yourself<br>可以讲给小黄鸭、玩具、同学或自己听
#### Explaining helps reveal mistakes<br>解释过程会帮助发现错误

---

## 7. Must-Remember Code<br>必须记住的代码

### Basic Java program<br>Java 基本程序

```java
public class MyClass
{
    public static void main(String[] args)
    {
        System.out.println("Hi there!");
    }
}
````

### Output statement<br>输出语句

```java
System.out.println("Hello, AP CSA!");
```

### Single-line comment<br>单行注释

```java
// This prints a greeting.
```

### Multi-line comment<br>多行注释

```java
/*
Programmer: My Name
Date:
Purpose: Print a greeting
*/
```

---

## 8. Quick Checklist<br>快速检查清单

### Before asking for help, check:<br>求助前先检查：

#### Did I forget a semicolon `;`?<br>我有没有漏掉分号 `;`？

#### Did I match every `{` with `}`?<br>每个 `{` 有没有对应的 `}`？

#### Did I match every `(` with `)`?<br>每个 `(` 有没有对应的 `)`？

#### Did I close every quotation mark `"`?<br>每个引号 `"` 有没有闭合？

#### Did I write `System` with capital `S`?<br>`System` 的 `S` 有没有大写？

#### Is my code inside the `main` method?<br>我的代码是不是写在 `main` 方法里面？

#### Did I read the error message carefully?<br>我有没有认真读错误信息？

---

## 9. One-Sentence Takeaway<br>一句话总结

### Code is an ordered set of precise instructions<br>代码是一组按顺序执行的精确指令

### The compiler checks syntax before the program runs<br>程序运行前，编译器会检查语法

### Debugging means improving code step by step<br>调试就是一步一步改进代码

</script>
</div>
</div>


## Introduction

This lesson is the first step into AP Computer Science A.

这一课是 AP CSA 的第一步。
你不需要一开始就完全理解 Java 的每一个单词，但你需要先建立一个重要的基本观念：

> **A program is an ordered set of instructions, written with strict syntax, checked by the compiler, and improved through debugging.**
> **程序是一组按顺序执行的指令，需要遵守严格语法，由编译器检查，并通过调试不断改进。**

---

# 1. Big Picture

## What you should understand after this lesson

| Core idea                  | What it means                                                      | 中文理解                           |
| -------------------------- | ------------------------------------------------------------------ | ------------------------------ |
| **Algorithm**              | A step-by-step process for solving a problem                       | 算法就是解决问题的一组步骤                  |
| **Sequencing**             | Steps happen in a specific order, one at a time                    | 程序会按照顺序一步一步执行                  |
| **Java program structure** | Java code is written inside a class and usually starts from `main` | Java 程序写在类里面，通常从 `main` 方法开始运行 |
| **Compiler**               | A tool that checks and translates Java code                        | 编译器会检查并翻译 Java 代码              |
| **Syntax error**           | A grammar mistake in code                                          | 语法错误，编译器可以发现                   |
| **Run-time error**         | An error that happens while the program is running                 | 运行时错误，程序运行时才出现                 |
| **Logic error**            | The program runs, but the result is wrong                          | 逻辑错误，程序能跑，但结果不对                |
| **Debugging**              | Finding and fixing errors                                          | 调试，也就是找 bug、改 bug              |

---

# 2. Algorithm

## What is an algorithm?

An **algorithm** is a step-by-step process used to complete a task or solve a problem.

**算法**就是完成一个任务或解决一个问题的步骤。

---

## Example 1: Making instant noodles

```text
1. Boil water.
2. Put noodles into the bowl.
3. Add hot water.
4. Wait three minutes.
5. Add seasoning.
6. Eat the noodles.
```

This is an algorithm because it gives clear steps.

这就是一个算法，因为它一步一步告诉你该怎么做。

---

## Example 2: Finding a student’s name in a class list

```text
1. Start from the first name.
2. Compare the name with the target name.
3. If it matches, stop.
4. If it does not match, move to the next name.
5. Repeat until the name is found or the list ends.
```

This is also an algorithm.

这也是一个算法。
以后我们会在 Java 里用循环和判断来实现类似的过程。

---

# 3. Sequencing

## What is sequencing?

**Sequencing** means steps are completed in order.

**顺序执行**指的是步骤按照一定顺序一个一个完成。

In Java, code usually runs from top to bottom.

在 Java 中，程序通常从上往下一行一行执行。

---

## Example 1: Daily-life sequencing

Correct order:

```text
1. Wake up.
2. Brush your teeth.
3. Put on your clothes.
4. Pack your bag.
5. Go to school.
```

Wrong order:

```text
1. Go to school.
2. Wake up.
3. Brush your teeth.
```

The steps are similar, but the order is wrong.

步骤差不多，但顺序错了，结果就不合理。

---

## Example 2: Java sequencing

```java
System.out.println("Good morning!");
System.out.println("Good afternoon!");
System.out.println("Good evening!");
```

Output:

```text
Good morning!
Good afternoon!
Good evening!
```

Java prints the lines in order.

Java 会按照顺序依次输出。

---

# 4. First Java Program

A basic Java program looks like this:

```java
public class MyClass
{
    public static void main(String[] args)
    {
        System.out.println("Hi there!");
    }
}
```

---

## What students should notice first

| Code                      | Meaning                           | 中文理解               |
| ------------------------- | --------------------------------- | ------------------ |
| `public class MyClass`    | Defines a class named `MyClass`   | 定义一个叫 `MyClass` 的类 |
| `{ }`                     | Groups code into blocks           | 大括号用来包住代码块         |
| `main`                    | The starting point of the program | 程序开始运行的地方          |
| `System.out.println(...)` | Prints output to the screen       | 在屏幕上输出内容           |
| `;`                       | Ends a statement                  | 分号表示一条语句结束         |

---

## Important classroom note

At this stage, you do **not** need to fully understand every word in:

```java
public static void main(String[] args)
```

For now, remember this:

```text
class → main → statement → output
```

中文记忆：

```text
类 → main 方法 → 语句 → 输出
```

---

# 5. Class and File Name

In Java, code is written inside a **class**.

Java 程序写在 **class（类）** 里面。

Example:

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello!");
    }
}
```

If the class is named `Hello`, the file is usually named:

```text
Hello.java
```

---

## Common mistake

Wrong:

```java
public class Hello
{
}
```

but the file name is:

```text
MyClass.java
```

This can cause problems because the class name and file name should match.

这可能会出问题，因为类名和文件名应该一致。

---

# 6. The `main` Method

## What is `main`?

The `main` method is where the Java program starts running.

`main` 方法是 Java 程序开始运行的地方。

```java
public static void main(String[] args)
{
    System.out.println("Program starts here!");
}
```

When the program runs, Java looks for `main`.

程序运行时，Java 会从 `main` 方法开始执行。

---

## Simple way to remember

```text
No main, no starting point.
```

中文：

```text
没有 main，程序就没有正常的起点。
```

---

# 7. Statements and Semicolons

## What is a statement?

A **statement** is a complete action in Java.

**语句**就是 Java 中一个完整的动作。

Example:

```java
System.out.println("Hi!");
```

This line prints something, so it is a statement.

这一行完成了“输出”这个动作，所以它是一条语句。

---

## Semicolon rule

Most Java statements end with a semicolon:

```java
System.out.println("Hello");
```

Wrong:

```java
System.out.println("Hello")
```

The second example is missing a semicolon.

第二个例子少了分号。

---

## Easy memory trick

```text
A semicolon in Java is like a period in English.
```

中文：

```text
Java 里的分号，就像英文句子的句号。
```

But remember: not every line needs a semicolon.

但是注意：不是每一行都要加分号。

For example:

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hi!");
    }
}
```

These lines do **not** end with semicolons:

```java
public class Hello
public static void main(String[] args)
{
}
```

---

# 8. Curly Braces `{ }`

Curly braces group code blocks.

大括号 `{ }` 用来包住代码块。

---

## Example

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hi!");
    }
}
```

The outer braces belong to the class:

```java
public class Hello
{
    ...
}
```

The inner braces belong to the `main` method:

```java
public static void main(String[] args)
{
    ...
}
```

---

## Common mistake

Wrong:

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hi!");
}
```

This code is missing one closing brace `}`.

这段代码少了一个右大括号。

---

## Quick check

Every `{` should have a matching `}`.

每一个 `{` 都应该有一个对应的 `}`。

---

# 9. `System.out.println()`

`System.out.println()` displays information on the screen.

`System.out.println()` 用来在屏幕上输出内容。

---

## Example 1: Print text

```java
System.out.println("Hello, AP CSA!");
```

Output:

```text
Hello, AP CSA!
```

---

## Example 2: Print a calculation

```java
System.out.println(3 + 4);
```

Output:

```text
7
```

Java calculates `3 + 4` first, then prints the result.

Java 会先计算 `3 + 4`，再输出结果。

---

# 10. IDE

An **IDE** is an Integrated Development Environment.

IDE 是集成开发环境。

It helps programmers:

```text
write code
compile code
run code
find errors
```

中文理解：

```text
写代码
编译代码
运行代码
查找错误
```

Examples of IDEs:

```text
CSAwesome Active Code
BlueJ
IntelliJ IDEA
VS Code
Eclipse
```

A simple way to understand it:

> **An IDE is like a coding notebook, checker, and run button in one place.**
> **IDE 就像一个集“代码本、检查器、运行按钮”于一体的工具。**

---

# 11. Compiler

Computers do not directly understand Java source code.

计算机不能直接理解我们写的 Java 源代码。

So Java code must be compiled.

所以 Java 代码需要被编译。

---

## What does a compiler do?

A compiler:

```text
1. Checks your code for syntax errors.
2. Translates your code into a form the computer can run.
```

中文：

```text
1. 检查代码有没有语法错误。
2. 把代码翻译成计算机可以运行的形式。
```

---

## Important idea

If the compiler finds a syntax error, the program will not run.

如果编译器发现语法错误，程序就不能运行。

---

# 12. Java Keywords

**Keywords** are reserved words with special meanings in Java.

**关键字**是 Java 中有特殊含义的保留词。

Examples:

```java
public
class
static
void
```

You cannot use them randomly as names.

你不能随便把这些词当作变量名或类名来用。

---

## Capitalization matters

Correct:

```java
public class Hello
```

Wrong:

```java
Public Class Hello
```

Java is case-sensitive.

Java 区分大小写。

---

# 13. Capitalization in Java

Capitalization is very important in Java.

Java 中大小写非常重要。

---

## Example

Correct:

```java
System.out.println("Hi!");
```

Wrong:

```java
system.out.println("Hi!");
```

`System` must start with a capital `S`.

`System` 必须大写 `S`。

---

# 14. Syntax Errors

A **syntax error** is a grammar mistake in code.

**语法错误**就是代码没有遵守 Java 的语法规则。

The compiler can detect syntax errors.

编译器可以发现语法错误。

---

## Example 1: Missing semicolon

Wrong:

```java
System.out.println("Hi!")
```

Correct:

```java
System.out.println("Hi!");
```

---

## Example 2: Missing quote

Wrong:

```java
System.out.println("Hi!);
```

Correct:

```java
System.out.println("Hi!");
```

---

## Example 3: Missing parenthesis

Wrong:

```java
System.out.println("Hi!";
```

Correct:

```java
System.out.println("Hi!");
```

---

# 15. Reading Error Messages

When the compiler reports an error, do not panic.

当编译器报错时，不要慌。

Read the error message carefully.

认真读错误信息。

---

## Example error message

```text
FirstClass.java:5: error: unclosed string literal
System.out.println("Hi there!);
                  ^
1 error
```

---

## How to read it

| Part                      | Meaning                                        | 中文理解        |
| ------------------------- | ---------------------------------------------- | ----------- |
| `FirstClass.java`         | File name                                      | 文件名         |
| `5`                       | Line number where the compiler found the error | 编译器发现错误的位置  |
| `unclosed string literal` | Something with quotation marks is not closed   | 字符串没有正确闭合   |
| `^`                       | Where the compiler thinks the problem is       | 编译器认为出问题的位置 |

---

## Important reminder

The error message is helpful, but it is not always perfect.

错误信息很有帮助，但不一定百分之百准确。

Sometimes the real mistake is:

```text
on the line shown
one line before
one line after
```

中文：

```text
可能就在提示的那一行
也可能在上一行
也可能在下一行
```

---

# 16. Debugging

**Debugging** means finding and fixing bugs.

**调试**就是找出并修复 bug。

All programmers make mistakes.

所有程序员都会犯错。

Debugging is a normal part of coding.

调试是写代码的正常过程。

---

## Example

Buggy code:

```java
public class Hello
{
    public static void main(String[] args)
    {
        system.out.println("Hello, AP CSA!")
    }
}
```

Fixed code:

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello, AP CSA!");
    }
}
```

---

## Bugs fixed

| Bug         | Fix                | 中文              |
| ----------- | ------------------ | --------------- |
| `system`    | Change to `System` | `System` 首字母要大写 |
| Missing `;` | Add semicolon      | 语句结尾要加分号        |

---

# 17. Run-time Errors

A **run-time error** happens while the program is running.

**运行时错误**是在程序运行过程中发生的错误。

The compiler may not catch it.

编译器不一定能提前发现它。

---

## Example: Divide by zero

```java
public class DivideByZero
{
    public static void main(String[] args)
    {
        System.out.println(3 / 0);
    }
}
```

This code may compile, but it will crash when it runs.

这段代码可能能通过编译，但运行时会出错。

Why?

Because dividing by zero is impossible.

因为除以 0 是不允许的。

---

# 18. Exception

An **exception** is a type of run-time error.

**异常**是一种运行时错误。

Example:

```java
System.out.println(3 / 0);
```

This causes an:

```text
ArithmeticException
```

Student-friendly meaning:

> The program starts running, hits an impossible action, and Java reports an exception.
> 程序开始运行，但遇到了一个无法完成的操作，于是 Java 报出异常。

---

# 19. Logic Errors

A **logic error** happens when the program runs, but the result is wrong.

**逻辑错误**指的是程序能运行，但结果不正确。

---

## Example 1: Wrong calculation

Suppose you want to calculate:

```text
10 + 2
```

But you write:

```java
System.out.println(10 - 2);
```

Output:

```text
8
```

The program runs, but the answer is wrong.

程序能运行，但答案错了。

---

## Example 2: Wrong percent

You want to print a score as a percentage:

```text
85
```

But your program prints:

```text
0.85
```

The program does not crash, but the logic is wrong.

程序没有崩溃，但逻辑错了。

---

## How to find logic errors

Use test cases.

使用测试数据。

Ask yourself:

```text
What output do I expect?
What output did I actually get?
Why are they different?
```

中文：

```text
我期待的输出是什么？
实际输出是什么？
为什么不一样？
```

---

# 20. Comments

Comments are notes for humans.

注释是写给人看的说明。

The compiler skips comments.

编译器会跳过注释，不会执行它们。

---

## Single-line comment

```java
// Print a greeting
System.out.println("Hello!");
```

---

## Multi-line comment

```java
/*
Programmer: Roy
Date: June 11
Purpose: Print a greeting
*/
```

---

## Good comments explain why

Less useful:

```java
// print hello
System.out.println("Hello!");
```

More useful:

```java
// Show the first greeting message to the user
System.out.println("Hello!");
```

---

# 21. Pair Programming and Rubber Duck Debugging

## Pair programming

Pair programming means two programmers work together.

结对编程指两个程序员一起写代码。

Usually:

| Role          | Job                               | 中文          |
| ------------- | --------------------------------- | ----------- |
| **Driver**    | Types the code                    | 负责打代码       |
| **Navigator** | Checks ideas, logic, and mistakes | 负责看思路、逻辑和错误 |

They switch roles often.

两个人会经常交换角色。

---

## Rubber duck debugging

Rubber duck debugging means explaining your code line by line to a rubber duck, a toy, or another person.

小黄鸭调试法就是把代码一行一行讲给小黄鸭、玩具或同学听。

Why does it work?

Because when you explain your code slowly, you often notice your own mistake.

因为当你慢慢解释代码时，经常会突然发现自己的错误。

---

# 22. Best First Examples to Remember

## Example 1: Algorithm

```text
Goal: Get ready for school

1. Wake up.
2. Brush your teeth.
3. Put on your uniform.
4. Pack your bag.
5. Go to school.
```

Key idea:

```text
Order matters.
```

中文：

```text
顺序很重要。
```

---

## Example 2: First Java program

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello, AP CSA!");
    }
}
```

Key idea:

```text
class → main → statement → output
```

中文：

```text
类 → main 方法 → 语句 → 输出
```

---

## Example 3: Debugging

Buggy version:

```java
public class Hello
{
    public static void main(String[] args)
    {
        system.out.println("Hello, AP CSA!")
    }
}
```

Fixed version:

```java
public class Hello
{
    public static void main(String[] args)
    {
        System.out.println("Hello, AP CSA!");
    }
}
```

Two bugs:

```text
1. system should be System.
2. The statement needs a semicolon.
```

中文：

```text
1. system 应该改成 System。
2. 语句结尾需要分号。
```

---

# 23. Quick Error Checklist

Before you ask for help, check these first:

在求助之前，先检查这些地方：

* **Did I forget a semicolon `;`?**
  我有没有漏掉分号？

* **Did I match every `{` with a `}`?**
  每个左大括号有没有对应的右大括号？

* **Did I match every `(` with a `)`?**
  每个左括号有没有对应的右括号？

* **Did I close every quote `"`?**
  字符串的引号有没有闭合？

* **Did I write `System` with a capital `S`?**
  `System` 的 `S` 有没有大写？

* **Is my code inside the `main` method?**
  我的代码是不是写在 `main` 方法里面？

* **Did I read the error message carefully?**
  我有没有认真读错误信息？

---

# 24. Mini Practice

## Practice 1: Find the syntax errors

```java
public class FirstClass
{
    public static void main(String[] args)
    {
        system.out.println("Hi there!")
    }
}
```

Questions:

```text
1. What is wrong with system?
2. What is missing at the end of the statement?
```

Answers:

```text
1. system should be System.
2. The statement is missing a semicolon.
```

中文答案：

```text
1. system 应该改成 System。
2. 语句结尾少了分号。
```

---

## Practice 2: Predict the output

```java
public class Greeting
{
    public static void main(String[] args)
    {
        System.out.println("Good morning!");
        System.out.println("Good afternoon!");
        System.out.println("Good evening!");
    }
}
```

Output:

```text
Good morning!
Good afternoon!
Good evening!
```

---

## Practice 3: Runtime error or syntax error?

```java
System.out.println(3 / 0);
```

Answer:

```text
Run-time error
```

Why?

```text
The code can be written in correct Java syntax, but dividing by zero fails when the program runs.
```

中文：

```text
这是运行时错误。代码语法上可能没问题，但程序运行时不能除以 0。
```

---

# 25. Final Summary

## The most important ideas

* **Algorithms** are step-by-step processes.
  算法是一步一步解决问题的过程。

* **Sequencing** means steps run in order.
  顺序执行表示步骤按照顺序运行。

* A Java program is written inside a **class**.
  Java 程序写在类里面。

* The program usually starts from the **main method**.
  程序通常从 `main` 方法开始。

* `System.out.println()` prints output.
  `System.out.println()` 用来输出内容。

* Java statements usually end with a **semicolon**.
  Java 语句通常用分号结尾。

* A **compiler** checks and translates your code.
  编译器检查并翻译代码。

* **Syntax errors** are caught by the compiler.
  语法错误会被编译器发现。

* **Run-time errors** happen while the program runs.
  运行时错误发生在程序运行过程中。

* **Logic errors** produce wrong results even if the program runs.
  逻辑错误会让程序能运行但结果错误。

* **Debugging** is part of programming.
  调试是编程的一部分。

---

# One-sentence takeaway

> **Code is not magic. It is a carefully ordered set of instructions. When something goes wrong, read the error message, check the structure, and debug step by step.**
> **代码不是魔法，而是一组按顺序执行的精确指令。出错时，先读错误信息，再检查结构，然后一步一步调试。**
