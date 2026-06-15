---
title: "AP CSA 1.2：变量与数据类型"
layout: post
categories: media
render_with_liquid: false
---

# AP CSA 1.2: Variables and Data Types<br>变量与数据类型

In Lesson 1.1, we learned that a program is an ordered set of instructions.

在 1.1 中，我们学习了：程序是一组按顺序执行的指令。

In Lesson 1.2, we add one important idea:

> **A program needs memory to store information. Variables are the names we give to those memory locations.**
> **程序需要用内存保存信息。变量就是我们给这些内存位置起的名字。**

For example, a game needs to remember your score. The score may start at `0`, then become `1`, `2`, `3`, and so on. This changing value can be stored in a **variable**.

例如，一个游戏需要记录分数。分数可能从 `0` 开始，然后变成 `1`、`2`、`3`……这个会变化的值，就可以存储在一个 **变量** 中。

---

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.2 Variables and Data Types<br>变量与数据类型

## 1. Variable Basics<br>变量基础

### A memory location<br>内存位置

### Stores a value<br>存储一个值

### Value can change<br>值可以改变

### Example: game score<br>例子：游戏分数

## 2. Data Types<br>数据类型

### Type decides what values can be stored<br>类型决定能存什么值

### Primitive types<br>基本数据类型

#### `int`: integers<br>`int`：整数

#### `double`: decimals<br>`double`：小数

#### `boolean`: true / false<br>`boolean`：真 / 假

### Reference type<br>引用类型

#### `String`: sequence of characters<br>`String`：一串字符

## 3. Declaring and Initializing<br>声明与初始化

### Declaration: `int score;`<br>声明：`int score;`

### Initialization: `int score = 4;`<br>初始化：`int score = 4;`

### Assignment: `score = 4;`<br>赋值：`score = 4;`

### Variable on left, value on right<br>变量在左边，值在右边

## 4. Printing Variables<br>输出变量

### `System.out.println(score);`<br>输出变量值

### Do not put variables inside quotes<br>变量不要放进引号

### Use `+` for string concatenation<br>用 `+` 拼接字符串

### Spaces must be inside quotes<br>空格要写在引号里面

## 5. Naming Rules<br>命名规则

### Start with a letter<br>以字母开头

### No spaces<br>不能有空格

### No Java keywords<br>不能用 Java 关键字

### Use meaningful names<br>使用有意义的名字

### Use camelCase<br>使用驼峰命名法

### Case-sensitive<br>区分大小写

## 6. Common Mistakes<br>常见错误

### Wrong type: `int temperature = 70.5;`<br>类型错误：`int temperature = 70.5;`

### Wrong boolean: `boolean sunny = 1;`<br>布尔值错误：`boolean sunny = 1;`

### Variable inside quotes: `"score"`<br>把变量放进引号：`"score"`

### Misspelled variable name<br>变量名拼写错误

### Missing semicolon<br>漏写分号


</script>
</div>
</div>

---

# 1. What Is a Variable?

A **variable** is a memory location in the computer that stores a value.

**变量**就是计算机中的一个内存位置，用来存储一个值。

The key idea:

> **The value can change while the program is running.**
> **程序运行时，变量中的值可以改变。**

Example:

```text
At the beginning: score = 0
After one point:  score = 1
After two points: score = 2
```

In Java:

```java
int score = 0;
score = 1;
```

The variable is still called `score`, but its stored value changes.

变量名仍然是 `score`，但里面存的值发生了变化。

---

# 2. Every Variable Has a Name and a Type

Every variable has two important parts:

每个变量都有两个重要部分：

| Part | Meaning | 说明 |
| --- | --- | --- |
| **name** | what we call the variable | 变量名 |
| **data type** | what kind of value it can store | 数据类型 |

Example:

```java
int score = 0;
```

| Code | Meaning | 说明 |
| --- | --- | --- |
| `int` | data type | 数据类型 |
| `score` | variable name | 变量名 |
| `0` | value | 值 |

---

# 3. Data Types

A **data type** tells Java what values are allowed and what operations can be used.

**数据类型**告诉 Java：这个变量可以存哪些值，可以进行哪些操作。

| Type | Stores | Examples | Best for | 说明 |
| --- | --- | --- | --- | --- |
| `int` | integers | `3`, `0`, `-76` | counts, scores, ages | 整数，没有小数部分 |
| `double` | decimal numbers | `6.3`, `-0.9`, `101.2` | prices, averages, time, temperature | 小数，也叫浮点数 |
| `boolean` | true / false | `true`, `false` | yes/no conditions | 只有真或假两种值 |
| `String` | text | `"Hello"`, `"Jose"` | names, messages, words | 字符串，一串字符 |

---

## Primitive Types: `int`, `double`, `boolean`

Primitive types store simple values directly.

**基本数据类型**直接存储简单的值。

AP CSA focuses on these three primitive types:

AP CSA 主要关注这三种基本数据类型：

```java
int
double
boolean
```

### `int`

Use `int` when the value has **no decimal part**.

当数值没有小数部分时，用 `int`。

```java
int age = 16;
int score = 0;
int numStudents = 25;
```

Good uses: number of students, number of tickets, game score, age.

适合表示：学生人数、票的数量、游戏分数、年龄。

### `double`

Use `double` when the value may have a decimal part.

当数值可能有小数部分时，用 `double`。

```java
double price = 23.25;
double gpa = 3.5;
double temperature = 70.5;
```

Good uses: average grade, shoe size, temperature, race time, price.

适合表示：平均分、鞋码、温度、比赛用时、价格。

### `boolean`

Use `boolean` for true/false situations.

当情况只有“真/假”或“是/否”两种可能时，用 `boolean`。

```java
boolean sunny = true;
boolean won = false;
boolean hasInsurance = false;
```

Correct:

```java
boolean sunny = true;
```

Wrong in AP CSA Java:

```java
boolean sunny = 1;
```

---

## Reference Type: `String`

`String` is a reference type. It stores text, or a sequence of characters.

`String` 是一种引用类型，用来存储文本，也就是一串字符。

```java
String name = "Jose";
String message = "Hello";
String color = "blue";
```

Text values must use double quotes:

文本值必须放在双引号中：

```java
"Hello"
"AP CSA"
"Jose"
```

---

# 4. Choosing the Right Type

Choosing the right type is one of the most important skills in Lesson 1.2.

选择正确的数据类型，是 1.2 最重要的能力之一。

| Situation | Best Type | Reason | 说明 |
| --- | --- | --- | --- |
| number of people in a household | `int` | people are counted with whole numbers | 人数是整数 |
| average grade | `double` | averages may have decimals | 平均值可能有小数 |
| first name | `String` | names are text | 名字是文本 |
| raining or not | `boolean` | only true or false | 只有是/否 |
| 100m race time | `double` | time may be `9.58` seconds | 时间可能有小数 |
| number of tickets | `int` | tickets are counted with whole numbers | 数量是整数 |
| shoe size like `8.5` | `double` | it has a decimal | 有小数 |

---

# 5. Declaring, Initializing, and Assigning

To create and use variables, you need three words:

要创建和使用变量，你需要掌握三个词：

| Word | Meaning | Example | 说明 |
| --- | --- | --- | --- |
| **declare** | create a variable | `int score;` | 声明变量 |
| **initialize** | give the first value | `int score = 4;` | 第一次赋值 |
| **assign** | give or change a value | `score = 4;` | 赋值或改值 |

## Declaration

```java
int score;
```

This creates an `int` variable named `score`.

这会创建一个名叫 `score` 的 `int` 变量。

## Initialization

```java
int score = 4;
```

This declares the variable and gives it its first value.

这一行同时完成声明和初始化。

## Declaration, then Assignment

```java
int score;
score = 4;
```

First create the variable. Then put the value `4` into it.

先创建变量，再把 `4` 存进去。

---

# 6. Assignment Statements

In Java, the equal sign `=` means **assignment**.

在 Java 中，等号 `=` 表示 **赋值**。

It does **not** mean the same thing as math equality.

它和数学里的“相等”不是一回事。

Correct:

```java
score = 4;
```

Meaning:

```text
Put 4 into the variable score.
```

把 `4` 存入 `score` 这个变量。

Wrong:

```java
4 = score;
```

Rule:

```text
variable = value;
变量 = 值;
```

The variable must be on the left. The value or expression must be on the right.

变量必须在左边，值或表达式必须在右边。

---

# 7. Printing Variables

Use `System.out.println` to print a variable value.

使用 `System.out.println` 输出变量的值。

```java
int score = 4;
System.out.println(score);
```

Output:

```text
4
```

## Do Not Put Variables Inside Quotes

Correct:

```java
System.out.println(score);
```

Wrong:

```java
System.out.println("score");
```

| Code | Output | Meaning | 说明 |
| --- | --- | --- | --- |
| `System.out.println(score);` | `4` | prints the variable value | 输出变量的值 |
| `System.out.println("score");` | `score` | prints the word `score` | 输出 score 这个单词 |

---

# 8. String Concatenation

**String concatenation** means joining text and values together.

**字符串拼接**就是把文本和值连接起来。

Use `+`:

```java
int score = 4;
System.out.println("The score is " + score);
```

Output:

```text
The score is 4
```

## Spaces Matter

Spaces must be inside quotes.

空格必须写在引号里面。

```java
String name = "Jose";
System.out.println("Hi " + name);  // Hi Jose
System.out.println("Hi" + name);   // HiJose
```

---

# 9. Naming Variables

Variable names should be legal and meaningful.

变量名既要合法，也要有意义。

## Basic Rules

A variable name:

变量名：

- starts with a letter  
  以字母开头
- can include letters, numbers, and underscores  
  可以包含字母、数字和下划线
- cannot contain spaces  
  不能有空格
- cannot be a Java keyword  
  不能是 Java 关键字
- is case-sensitive  
  区分大小写

Legal names:

```java
int score;
int gameScore;
double shoeSize;
boolean hasInsurance;
String firstName;
```

Illegal names:

```java
int 2score;        // starts with a number
int game score;    // contains a space
int class;         // class is a Java keyword
```

## Meaningful Names and camelCase

Good names describe the data.

好的变量名应该能说明数据的含义。

```java
int score;
int numStudents;
double shoeSize;
```

Poor names are too vague:

```java
int x;
double a;
```

But names should not be too long either:

```java
int theNumberThatHoldsTheScore;  // too long
int score;                       // better
```

Java variable names usually use **camelCase**:

Java 变量名通常使用 **驼峰命名法**：

```java
int gameScore;
double shoeSize;
int topScore;
boolean hasInsurance;
String firstName;
```

Java is case-sensitive:

Java 区分大小写：

```java
gameScore
gamescore
GameScore
```

These are different names.

这些是不同的名字。

---

# 10. Common Beginner Mistakes

| Mistake | Wrong Code | Fix | 说明 |
| --- | --- | --- | --- |
| wrong data type | `int temperature = 70.5;` | `double temperature = 70.5;` | `int` 不能存小数 |
| wrong boolean value | `boolean sunny = 1;` | `boolean sunny = true;` | `boolean` 只能用 `true` 或 `false` |
| wrong capitalization | `Int numVisits = 5;` | `int numVisits = 5;` | 基本类型要小写 |
| variable inside quotes | `System.out.println("name");` | `System.out.println(name);` | 引号中的是文字，不是变量 |
| misspelled variable | `tempurature` | `temperature` | 拼写必须完全一致 |
| missing semicolon | `double price = 23.25` | `double price = 23.25;` | 语句结尾需要分号 |

---

# 11. Full Example

```java
public class TestVariables
{
    public static void main(String[] args)
    {
        int score = 0;
        System.out.println("The score is " + score);

        double price = 23.25;
        System.out.println("The price is " + price);

        boolean won = false;
        System.out.println("Did the player win? " + won);

        won = true;
        System.out.println("Did the player win now? " + won);

        String name = "Jose";
        System.out.println("Hi " + name);
    }
}
```

Possible output:

```text
The score is 0
The price is 23.25
Did the player win? false
Did the player win now? true
Hi Jose
```

---

# 12. Debugging Example: Weather Report

Buggy version:

```java
public class Challenge1_2_weather
{
    public static void main(String[] args)
    {
        int temperature = 70.5;
        double tvChannel = 101;
        boolean sunny = 1
        System.out.print("Welcome to the weather report on Channel ")
        System.out.println(TVchannel);
        System.out.print("The temperature today is );
        System.out.println(tempurature);
        System.out.print("Is it sunny today? ");
        System.out.println(sunny);
    }
}
```

Fixed version:

```java
public class Challenge1_2_weather
{
    public static void main(String[] args)
    {
        double temperature = 70.5;
        int tvChannel = 101;
        boolean sunny = true;

        System.out.print("Welcome to the weather report on Channel ");
        System.out.println(tvChannel);

        System.out.print("The temperature today is ");
        System.out.println(temperature);

        System.out.print("Is it sunny today? ");
        System.out.println(sunny);
    }
}
```

What was fixed?

| Bug | Problem | Fix | 说明 |
| --- | --- | --- | --- |
| `int temperature = 70.5;` | `int` cannot store decimals | use `double` | `int` 不能存小数 |
| `double tvChannel = 101;` | channel number is better as a whole number | use `int` | 频道号更适合整数 |
| `boolean sunny = 1` | boolean must be `true` or `false`; missing semicolon | `boolean sunny = true;` | 布尔值错误，且少分号 |
| missing semicolon after `print` | statement not ended | add `;` | 语句没有结束 |
| `TVchannel` | wrong capitalization | `tvChannel` | 大小写不一致 |
| missing quote | string not closed | add `"` | 字符串没有闭合 |
| `tempurature` | misspelled variable name | `temperature` | 变量名拼错 |

---

# 13. Mini Practice

## Practice 1: Choose the Best Type

| Situation | Answer |
| --- | --- |
| number of people in a household | `int` |
| average course grade | `double` |
| first name | `String` |
| raining or not | `boolean` |
| shoe size like `8.5` | `double` |
| number of tickets | `int` |

## Practice 2: Fix the Code

Buggy code:

```java
public class Practice
{
    public static void main(String[] args)
    {
        Int numTickets = 3;
        double shoeSize = 8.5
        boolean isRaining = "false";
        String name = Jose;
        System.out.println("name");
    }
}
```

Try to fix it before looking at the answer.

先自己改，再看答案。

Answer:

```java
public class Practice
{
    public static void main(String[] args)
    {
        int numTickets = 3;
        double shoeSize = 8.5;
        boolean isRaining = false;
        String name = "Jose";
        System.out.println(name);
    }
}
```

---

# 14. Quick Checklist

Before you run or submit your code, check:

运行或提交代码前，检查：

- **Correct type?** `int`, `double`, `boolean`, or `String`?  
  类型是否正确？
- **Correct assignment order?** `variable = value;`  
  赋值顺序是否正确？
- **Semicolon?** Did each statement end with `;`?  
  语句结尾是否有分号？
- **Same spelling and capitalization?**  
  变量名拼写和大小写是否完全一致？
- **String text in double quotes?**  
  字符串是否放在双引号里？
- **Variable not inside quotes when printing its value?**  
  输出变量值时，是否没有把变量放进引号？
- **Spaces inside string literals?**  
  拼接字符串时，空格是否写在引号里面？

---

# 15. Final Summary

- **A variable is a memory location that stores a value.**  
  变量是一个存储值的内存位置。
- **A variable has a name and a data type.**  
  变量有变量名和数据类型。
- **`int` stores integers.**  
  `int` 存储整数。
- **`double` stores decimal numbers.**  
  `double` 存储小数。
- **`boolean` stores `true` or `false`.**  
  `boolean` 存储 `true` 或 `false`。
- **`String` stores text.**  
  `String` 存储文本。
- **Declaration creates a variable; initialization gives its first value; assignment changes its value.**  
  声明会创建变量；初始化会给第一次赋值；赋值会改变变量中的值。
- **Good variable names are meaningful, use camelCase, and match exactly every time.**  
  好的变量名有意义，使用驼峰命名，并且每次拼写和大小写都完全一致。

---

# One-sentence takeaway

> **Variables let a program remember information, and data types tell Java what kind of information each variable can store.**
> **变量让程序能够记住信息，而数据类型告诉 Java 每个变量可以存储哪一类信息。**
