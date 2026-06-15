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

### A variable is a memory location<br>变量是一个内存位置
#### Stores one value<br>存储一个值
#### Value can change while the program runs<br>程序运行时值可以改变
#### Example: game score starts at `0`, then increases<br>例子：游戏分数从 `0` 开始，之后增加

### Every variable has two key parts<br>每个变量有两个关键部分
#### Name: what we call it<br>变量名：我们如何称呼它
#### Type: what kind of value it stores<br>数据类型：它能存哪种值

---

## 2. Data Types<br>数据类型

### A data type tells Java<br>数据类型告诉 Java
#### What values are allowed<br>哪些值可以存
#### What operations are allowed<br>哪些操作可以做
#### How much memory may be needed<br>可能需要多少内存

### Primitive types<br>基本数据类型
#### Store simple values directly<br>直接存储简单值
#### `int`: integers, no decimal part, 32 bits<br>`int`：整数，没有小数部分，32 位
#### `double`: decimal numbers, 64 bits<br>`double`：小数，64 位
#### `boolean`: only `true` or `false`<br>`boolean`：只能是 `true` 或 `false`

### Reference type: `String`<br>引用类型：`String`
#### Stores text as a sequence of characters<br>存储一串字符
#### Text must use double quotes<br>文本必须放在双引号里
#### Example: `String name = "Jose";`<br>例子：`String name = "Jose";`

---

## 3. Declare, Initialize, Assign<br>声明、初始化、赋值

### Declaration creates a variable<br>声明会创建变量
#### Format: `type name;`<br>格式：`类型 变量名;`
#### Example: `int score;`<br>例子：`int score;`

### Initialization gives the first value<br>初始化是第一次赋值
#### Format: `type name = value;`<br>格式：`类型 变量名 = 值;`
#### Example: `int score = 4;`<br>例子：`int score = 4;`

### Assignment changes the value<br>赋值会改变变量的值
#### Format: `variable = value;`<br>格式：`变量 = 值;`
#### Variable on the left, value on the right<br>变量在左边，值在右边
#### `=` means assignment, not math equality<br>`=` 表示赋值，不是数学中的相等

---

## 4. Printing Variables<br>输出变量

### Print the value<br>输出变量的值
#### Correct: `System.out.println(score);`<br>正确：`System.out.println(score);`
#### Wrong: `System.out.println("score");`<br>错误：`System.out.println("score");`

### Literal text vs variable value<br>字面文本与变量值
#### `"score"` prints the word score<br>`"score"` 输出 score 这个单词
#### `score` prints the stored value<br>`score` 输出变量里存的值

### String concatenation<br>字符串拼接
#### Use `+` to combine text and values<br>用 `+` 连接文本和值
#### Spaces must be inside quotes<br>空格必须写在引号里面
#### `"Hi " + name` → `Hi Jose`<br>`"Hi " + name` → `Hi Jose`
#### `"Hi" + name` → `HiJose`<br>`"Hi" + name` → `HiJose`

---

## 5. Variable Naming<br>变量命名

### Legal names<br>合法变量名
#### Start with a letter<br>以字母开头
#### Can include letters, numbers, underscores<br>可以包含字母、数字、下划线
#### No spaces<br>不能有空格
#### Cannot be a Java keyword<br>不能是 Java 关键字

### Good style<br>好的风格
#### Meaningful names: `score`, `numStudents`<br>有意义的名字：`score`、`numStudents`
#### Use camelCase: `gameScore`, `firstName`<br>使用驼峰命名：`gameScore`、`firstName`
#### Java is case-sensitive<br>Java 区分大小写
#### `gameScore` and `gamescore` are different<br>`gameScore` 和 `gamescore` 不一样

---

## 6. Common Beginner Mistakes<br>初学者常见错误

### Wrong type<br>类型错误
#### `int temperature = 70.5;` is wrong<br>`int temperature = 70.5;` 错，`int` 不能存小数
#### Use `double temperature = 70.5;`<br>应使用 `double temperature = 70.5;`

### Wrong boolean value<br>布尔值错误
#### `boolean sunny = 1;` is wrong<br>`boolean sunny = 1;` 错
#### Use `true` or `false`<br>应使用 `true` 或 `false`

### Wrong capitalization<br>大小写错误
#### Primitive types are lowercase: `int`, `double`, `boolean`<br>基本类型要小写：`int`、`double`、`boolean`

### Printing the name, not the value<br>输出了名字，而不是值
#### Wrong: `System.out.println("name");`<br>错误：`System.out.println("name");`
#### Correct: `System.out.println(name);`<br>正确：`System.out.println(name);`

### Misspelled variable name<br>变量名拼写错误
#### Declared: `temperature`<br>声明的是：`temperature`
#### Used: `tempurature`<br>使用时写成：`tempurature`

---

## 7. Debugging Checklist<br>调试检查清单

### Check the type<br>检查类型
#### Whole number → `int`<br>整数 → `int`
#### Decimal → `double`<br>小数 → `double`
#### True/false → `boolean`<br>真假 → `boolean`
#### Text → `String`<br>文本 → `String`

### Check the statement<br>检查语句
#### Variable on the left of `=`<br>变量在 `=` 左边
#### End with semicolon<br>以分号结尾
#### Same spelling and capitalization every time<br>每次拼写和大小写都一致
#### Variables are not inside quotes when printing values<br>输出变量值时，不要把变量放进引号

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
