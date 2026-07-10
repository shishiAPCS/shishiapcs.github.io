---
title: "AP CSA 2.1：算法中的选择与重复"
layout: post
categories: media
render_with_liquid: false
---

In Unit 1, most of our code ran from top to bottom. In this lesson, you will learn how an algorithm can choose a path, repeat steps, and produce different results when the order changes.

在第一单元中，我们写的大部分代码都是从上到下依次执行。本节课将学习算法如何选择不同的执行路径、重复某些步骤，以及为什么改变步骤顺序可能会改变最终结果。

> **A condition chooses which steps run. A loop decides which steps repeat. The order of those steps determines the final result.**
> **条件决定哪些步骤会执行，循环决定哪些步骤会重复，而步骤的顺序会直接影响最终结果。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.1 算法中的选择与重复<br>Algorithms with Selection and Repetition

## 三种控制结构<br>Three Control Structures

* 顺序：语句默认从上到下执行<br>Sequence: statements run from top to bottom
* 选择：根据条件决定执行路径<br>Selection: a condition chooses a path
* 重复：多次执行同一组步骤<br>Repetition: a block of steps runs repeatedly

## 顺序执行<br>Sequencing

* 每一步的结果可能影响下一步<br>One step may affect the next step
* 改变顺序可能改变最终结果<br>Changing the order may change the result

## 选择结构<br>Selection

* 根据 `true` 或 `false` 做决定<br>Makes a decision using `true` or `false`
* `if`：条件为真时执行代码块<br>`if`: runs a block when the condition is true
* 条件为假时跳过代码块<br>A false condition skips the block

## 重复结构<br>Repetition

* 循环也叫迭代 `iteration`<br>Looping is also called iteration
* `while`：条件为真时继续重复<br>`while`: repeats while its condition is true
* 循环中的变量必须发生变化<br>A loop variable usually needs to change

## 识别算法语言<br>Recognizing Algorithm Language

* `if`、`when`、`otherwise`：选择<br>`if`, `when`, `otherwise`: selection
* `repeat`、`while`、`for each`：重复<br>`repeat`, `while`, `for each`: repetition
* `until`：重复到目标达成<br>`until`: repeat until the goal is reached

## 算法规划<br>Algorithm Planning

* 伪代码：用自然语言描述算法步骤<br>Pseudocode: describes algorithm steps informally
* 流程图：用图形和箭头表示执行路径<br>Flowchart: shows execution paths with shapes and arrows
* 缩进表示属于条件或循环的步骤<br>Indentation shows which steps belong inside a block

## AP 考试陷阱<br>AP Exam Traps

* 忽略条件为假的执行路径<br>Ignoring what happens when a condition is false
* 把 `if` 错当成循环<br>Treating an `if` statement like a loop
* 循环变量不更新，形成无限循环<br>Not updating a variable, causing an infinite loop
* 没有按照原始顺序追踪代码<br>Tracing statements in the wrong order

</script>
</div>
</div>

# 1. Read the Execution Path First<br>先看代码走哪条路

What is printed by the following code?

下面的代码会输出什么？

```java
int total = 16;

if (total >= 25) {
    System.out.print("gift card ");
    total -= 25;
}

if (total >= 10) {
    System.out.print("cake ");
    total -= 10;
}

if (total >= 5) {
    System.out.print("candy ");
    total -= 5;
}

while (total >= 1) {
    System.out.print("card ");
    total--;
}
```

**Answer:**

```text
cake candy card
```

Java reads the code from top to bottom:

1. `16 >= 25` is false, so the gift-card block is skipped.
2. `16 >= 10` is true, so a cake is bought and `total` becomes `6`.
3. `6 >= 5` is true, so candy is bought and `total` becomes `1`.
4. The loop runs once, buys one card, and changes `total` to `0`.
5. The loop condition is checked again. `0 >= 1` is false, so the loop stops.

Java 从上到下检查代码：

1. `16 >= 25` 为假，因此跳过礼品卡部分。
2. `16 >= 10` 为真，购买蛋糕后，`total` 变成 `6`。
3. `6 >= 5` 为真，购买糖果后，`total` 变成 `1`。
4. 循环执行一次，购买一张生日卡，`total` 变成 `0`。
5. Java 再次检查循环条件。`0 >= 1` 为假，因此循环结束。

This short algorithm contains all three basic control structures: **sequence**, **selection**, and **repetition**.

这段简短的算法同时包含三种基本控制结构：**顺序、选择和重复**。

# 2. The Three Building Blocks of Algorithms<br>算法的三种基本结构

An **algorithm** is an ordered set of steps used to solve a problem.

**算法**是一组按照一定顺序执行、用于解决问题的步骤。

| Control structure    | What the computer does                                             | Typical AP question                                                    |
| -------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Sequence**<br>顺序   | Runs statements in their written order.<br>按照代码书写顺序执行语句。           | What is the final value after these statements run?<br>这些语句执行后，最终值是多少？ |
| **Selection**<br>选择  | Uses a condition to decide whether a path runs.<br>根据条件决定是否执行某条路径。 | Which statement executes when the condition is true?<br>条件为真时会执行哪条语句？  |
| **Repetition**<br>重复 | Runs a block multiple times.<br>多次执行同一个代码块。                        | How many times does the loop run?<br>循环会执行多少次？                         |

At this level, every algorithm can be described using combinations of these three structures.

在现阶段，我们可以用这三种结构的不同组合来描述各种算法。

# 3. Selection Chooses a Path<br>选择结构决定执行路径

What is printed?

下面的代码会输出什么？

```java
int temperature = 20;

if (temperature < 15) {
    System.out.print("sweater ");
}

System.out.print("leave");
```

**Answer:**

```text
leave
```

The condition `temperature < 15` is false, so Java skips the statement inside the `if` block. It does not stop the entire program. Execution continues with the next statement.

条件 `temperature < 15` 为假，因此 Java 跳过 `if` 代码块中的语句。程序不会因此结束，而是继续执行后面的代码。

This is **selection**, also called **branching**. A true-or-false condition determines which path the algorithm takes.

这就是**选择结构**，也叫 **branching（分支）**。算法根据一个真假条件决定执行哪条路径。

A common beginner mistake is to think that a false condition means “nothing else runs.” It only means that the controlled block is skipped.

初学者常见的误解是：条件为假后，后面的代码都不会执行。实际上，只有这个条件控制的代码块会被跳过。

# 4. Repetition Runs Steps More Than Once<br>重复结构会多次执行步骤

What is printed?

下面的代码会输出什么？

```java
int number = 3;

while (number > 0) {
    System.out.print(number + " ");
    number--;
}

System.out.print("go");
```

**Answer:**

```text
3 2 1 go
```

The loop follows this pattern:

1. Check the condition.
2. If it is true, run the loop body.
3. Update `number`.
4. Return to the condition and check it again.

循环会按照下面的过程执行：

1. 检查条件。
2. 如果条件为真，执行循环体。
3. 更新 `number`。
4. 回到循环条件，再次进行检查。

One complete execution of the loop body is called an **iteration**.

循环体每完整执行一次，就叫作一次 **iteration（迭代）**。

The statement `number--` is important because it eventually makes the condition false. Without it, the loop would never stop.

`number--` 非常重要，因为它最终会让循环条件变成假。如果没有这条语句，循环就不会停止。

# 5. The Order of Steps Changes the Result<br>步骤顺序会改变结果

Do these two code segments print the same value?

下面两段代码会输出相同的值吗？

### Code Segment A

```java
int x = 5;

if (x > 3) {
    x += 2;
}

x *= 2;

System.out.println(x);
```

### Code Segment B

```java
int x = 5;

x *= 2;

if (x > 3) {
    x += 2;
}

System.out.println(x);
```

**Answer: No.**

```text
Code Segment A: 14
Code Segment B: 12
```

For Code Segment A:

```text
x = 5
x = 5 + 2 = 7
x = 7 * 2 = 14
```

For Code Segment B:

```text
x = 5
x = 5 * 2 = 10
x = 10 + 2 = 12
```

The two segments contain the same operations, but the operations happen in a different order. Therefore, they produce different results.

两段代码中包含相同的运算，但运算顺序不同，因此最终结果也不同。

On an AP-style tracing question, do not group statements by what they “seem to do.” Follow the exact written order.

做 AP 风格的代码追踪题时，不要按照自己认为“功能相似”的方式重新整理代码。必须严格按照原始顺序执行。

# 6. Recognizing Selection and Repetition Phrases<br>识别选择与重复的语言

An algorithm may be written in English or pseudocode instead of Java. Look for words that reveal how the algorithm behaves.

算法有时会使用英文或伪代码描述，而不是直接使用 Java。我们可以通过关键词判断算法采用了哪种结构。

| Phrase                                                     | Structure        | Meaning                                                       |
| ---------------------------------------------------------- | ---------------- | ------------------------------------------------------------- |
| **If it is cold, wear a sweater.**<br>如果天气冷，就穿毛衣。          | Selection<br>选择  | The action depends on a condition.<br>是否执行取决于条件。              |
| **Otherwise, choose another item.**<br>否则，选择另一个物品。         | Selection<br>选择  | A different path is used.<br>执行另一条路径。                         |
| **For each message, check the sender.**<br>检查每一条消息的发送者。    | Repetition<br>重复 | The same action is performed for every item.<br>对每个对象执行相同操作。  |
| **Keep searching until you find a snack.**<br>继续寻找，直到找到零食。 | Repetition<br>重复 | The action continues until a goal is reached.<br>重复执行，直到达成目标。 |
| **Repeat while `total >= 1`.**<br>当 `total >= 1` 时重复。      | Repetition<br>重复 | The condition is checked repeatedly.<br>反复检查条件。               |

Be careful with the word **until**:

> “Repeat until the bag is full” means that repetition continues while the bag is **not** full.

注意 **until（直到）** 的含义：

> “重复装东西，直到书包装满”表示：只要书包还**没有**装满，就要继续重复。

# 7. Pseudocode and Flowcharts<br>伪代码与流程图

**Pseudocode** is an informal way to plan an algorithm. It is written for people to understand and does not need to follow exact Java syntax.

**伪代码**是一种用于规划算法的非正式写法。它主要是写给人看的，因此不需要完全遵守 Java 语法。

```text
SET total TO 16

IF total >= 25
    BUY a gift card
    SET total TO total - 25

IF total >= 10
    BUY a cake
    SET total TO total - 10

IF total >= 5
    BUY some candy
    SET total TO total - 5

WHILE total >= 1
    BUY a birthday card
    SET total TO total - 1
```

Indentation shows which steps belong inside an `IF` statement or loop.

缩进表示哪些步骤属于某个 `IF` 条件或循环。

A **flowchart** represents the same logic visually:

* A rectangle usually represents an action.
* A diamond normally represents a condition or decision.
* Arrows show the order of execution.
* An arrow returning to an earlier step shows repetition.

**流程图**使用图形来表示相同的算法逻辑：

* 长方形通常表示一个操作。
* 菱形通常表示一个条件或决定。
* 箭头表示执行顺序。
* 返回前面步骤的箭头表示重复。

When reading either pseudocode or a flowchart, ask the same questions:

阅读伪代码或流程图时，都可以问下面这些问题：

1. What happens first?
   第一步是什么？

2. Which steps depend on a condition?
   哪些步骤取决于条件？

3. Which steps may repeat?
   哪些步骤可能重复？

4. What makes the repetition stop?
   什么会让重复停止？

# 8. Trace Values One Step at a Time<br>逐步追踪变量值

Suppose the gift algorithm begins with:

假设购买礼物的算法从下面的值开始：

```java
int total = 2;
```

What will the algorithm buy?

算法最终会购买什么？

**Answer: Two birthday cards.**

**答案：两张生日卡。**

| Step                     | Condition         | Action                              | `total` afterward |
| ------------------------ | ----------------- | ----------------------------------- | ----------------: |
| Start<br>开始              | —                 | Initialize `total`.<br>初始化 `total`。 |                 2 |
| Gift card check<br>检查礼品卡 | `2 >= 25` → false | Skip.<br>跳过。                        |                 2 |
| Cake check<br>检查蛋糕       | `2 >= 10` → false | Skip.<br>跳过。                        |                 2 |
| Candy check<br>检查糖果      | `2 >= 5` → false  | Skip.<br>跳过。                        |                 2 |
| Loop check 1<br>第一次循环检查  | `2 >= 1` → true   | Buy one card.<br>购买一张卡。             |                 1 |
| Loop check 2<br>第二次循环检查  | `1 >= 1` → true   | Buy one card.<br>购买一张卡。             |                 0 |
| Loop check 3<br>第三次循环检查  | `0 >= 1` → false  | Stop the loop.<br>结束循环。             |                 0 |

A reliable tracing method is:

一种可靠的追踪方法是：

1. Write down every variable’s starting value.
   写下每个变量的初始值。

2. Move through the statements from top to bottom.
   从上到下执行每条语句。

3. Record a variable immediately after it changes.
   变量发生变化后，立刻记录新值。

4. Return to the condition after every loop iteration.
   每次循环结束后，都回到循环条件重新判断。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                          | Why it is wrong                                                                      | Correct understanding                                                    |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| “An `if` statement repeats while its condition is true.”<br>认为 `if` 会在条件为真时不断重复。 | An `if` condition is checked once when execution reaches it.<br>程序执行到 `if` 时只检查一次条件。 | Use a loop when an action needs to repeat.<br>需要重复时，应使用循环。               |
| Tracing a loop body only once.<br>只追踪一次循环体。                                      | The condition is checked again after every iteration.<br>每次迭代后都会重新检查条件。              | Continue tracing until the condition becomes false.<br>一直追踪到条件变成假。       |
| Ignoring the false path.<br>忽略条件为假的情况。                                           | A false condition skips the controlled block.<br>条件为假时会跳过对应代码块。                      | Continue with the next statement after the block.<br>之后继续执行代码块后面的语句。     |
| Forgetting to update the loop variable.<br>忘记更新循环变量。                             | The condition may remain true forever.<br>循环条件可能永远为真。                                | Check which statement moves the loop toward stopping.<br>找出让循环逐渐接近结束的语句。 |
| Changing the order while tracing.<br>追踪时擅自改变代码顺序。                                | Earlier statements may change values used later.<br>前面的语句可能会改变后面使用的值。                | Follow the exact order in the code.<br>严格按照代码顺序执行。                       |

# 10. Debugging an Algorithm<br>调试算法

Consider the following code:

观察下面的代码：

```java
int total = 3;
int cards = 0;

while (total >= 1) {
    cards++;
}

System.out.println(cards);
```

This code compiles, but it never reaches the `println` statement.

这段代码能够通过编译，但程序永远无法执行到 `println`。

The problem is that `total` never changes. It remains `3`, so the condition `total >= 1` remains true forever.

问题在于 `total` 从未改变。它一直是 `3`，所以条件 `total >= 1` 永远为真。

This is an **infinite loop**, which is a type of **logic error**.

这叫作**无限循环**，属于一种**逻辑错误**。

### Fixed code

```java
int total = 3;
int cards = 0;

while (total >= 1) {
    cards++;
    total--;
}

System.out.println(cards);
```

```text
3
```

The statement `total--` moves the algorithm toward its stopping condition.

语句 `total--` 让循环逐渐接近结束条件。

| Problem                                 | Error type                 | What happens                                                                 |
| --------------------------------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `while (total >= 1 {`                   | Compile-time error<br>编译错误 | The code does not compile because a parenthesis is missing.<br>缺少右括号，代码无法编译。 |
| Dividing by `total` when `total` is `0` | Runtime error<br>运行时错误     | The code starts running but stops with an exception.<br>代码开始运行后因异常而停止。       |
| Forgetting `total--`                    | Logic error<br>逻辑错误        | The code runs, but the loop never ends.<br>代码能够运行，但循环不会结束。                   |

# 11. Mini Practice<br>小练习

## Practice 1: Output Tracing<br>练习一：输出追踪

What is printed?

下面的代码会输出什么？

```java
int x = 4;

System.out.print("A");

if (x < 3) {
    System.out.print("B");
}

System.out.print("C");
```

**Answer:**

```text
AC
```

The condition is false, so `"B"` is skipped. Execution then continues with `"C"`.

条件为假，因此跳过 `"B"`，然后继续输出 `"C"`。

## Practice 2: Predict the Final Value<br>练习二：预测最终值

What is the final value of `number`?

`number` 的最终值是多少？

```java
int number = 1;

while (number < 5) {
    number *= 2;
}

System.out.println(number);
```

**Answer:**

```text
8
```

The values are:

```text
1 → 2 → 4 → 8
```

When `number` becomes `8`, the condition `number < 5` is false.

`number` 依次变成 `1 → 2 → 4 → 8`。当它变成 `8` 时，条件 `number < 5` 为假，循环停止。

## Practice 3: Identify the Structure<br>练习三：判断控制结构

Which phrase describes repetition?

下面哪句话表示重复结构？

A. If it is sunny, wear sunglasses.
B. For each item in the backpack, check its name.
C. If homework is due, put it in the bag.
D. Choose tea if you want a hot drink.

**Answer: B.**

The words **for each item** mean that the same action is performed repeatedly.

**for each item（对于每一个物品）**表示同一个操作会被重复执行。

## Practice 4: Fix the Code<br>练习四：修改代码

What must be added to make this loop stop?

需要添加什么语句，才能让循环停止？

```java
int count = 3;

while (count > 0) {
    System.out.print(count + " ");
}
```

**Answer:** Add `count--;` inside the loop.

```java
int count = 3;

while (count > 0) {
    System.out.print(count + " ");
    count--;
}
```

```text
3 2 1
```

Without the update, `count` remains `3`, so the condition stays true forever.

如果不更新变量，`count` 会一直保持为 `3`，循环条件也会永远为真。

# Quick Checklist<br>快速检查清单

Before answering an algorithm question, check:

做算法题前，检查：

* What are the starting values of all variables?
  所有变量的初始值是什么？

* Which statements always run in sequence?
  哪些语句会按照顺序直接执行？

* Which conditions control selection?
  哪些条件控制选择结构？

* What happens when each condition is false?
  每个条件为假时会发生什么？

* Which block of code repeats?
  哪个代码块会重复执行？

* Is the loop condition checked before every iteration?
  每次迭代前是否都会重新检查循环条件？

* Which variable changes inside the loop?
  循环中哪个变量发生了变化？

* Can the loop condition eventually become false?
  循环条件最终能否变成假？

* Did an earlier statement change a value used later?
  前面的语句是否改变了后面要使用的值？

* Are you following the exact written order?
  你是否严格按照代码原始顺序进行追踪？
