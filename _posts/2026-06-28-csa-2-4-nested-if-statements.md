---
title: "AP CSA 2.4：嵌套 if 语句与多路选择"
layout: post
categories: media
render_with_liquid: false
---

Topic 2.3 introduced one-way and two-way selection. In this lesson, you will combine conditional statements to handle more complex decisions and three or more possible outcomes.

在 2.3 中，我们学习了单向选择和双向选择。本节课将组合多个条件语句，处理更复杂的判断以及三种或更多可能的结果。

> **In nested conditionals, later conditions are checked only if execution reaches them. In an `else if` chain, only the first true branch runs.**
> **在嵌套条件语句中，只有程序执行到某个条件时才会检查它；在 `else if` 链中，只执行第一个为真的分支。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.4 嵌套 if 语句与多路选择<br>Nested if Statements

## 嵌套条件语句<br>Nested Conditionals

* 一个条件语句写在另一个条件语句内部<br>One conditional appears inside another
* 外层条件为真时，才会检查内层条件<br>The inner condition is checked only when execution reaches it
* 可以组合 `if`、`if-else` 和 `else if`<br>Can combine `if`, `if-else`, and `else if`

## 多路选择<br>Multi-Way Selection

* 使用 `if-else-if` 处理三种或更多情况<br>Handles three or more possible cases
* 条件按照从上到下的顺序检查<br>Conditions are checked from top to bottom
* 只执行第一个为真的分支<br>Only the first true branch runs

## 最后的 else<br>Trailing else

* 当前面条件都为假时执行<br>Runs when all earlier conditions are false
* `else` 可以省略<br>The final `else` is optional
* 没有匹配条件时可能什么都不执行<br>No branch may run when there is no final `else`

## 条件顺序<br>Condition Order

* 条件顺序可能改变最终结果<br>Condition order may change the result
* 范围判断不能让宽条件挡住窄条件<br>A broad condition must not block a more specific one
* 边界值要检查 `<`、`<=`、`>`、`>=`<br>Check boundary values carefully

## 独立 if 与 else-if<br>Independent if vs. else-if

* 独立的 `if` 会分别检查<br>Separate `if` statements are checked independently
* 多个独立代码块可能同时执行<br>Multiple independent blocks may run
* `else if` 链最多执行一个分支<br>An `else if` chain runs at most one branch

## 悬空的 else<br>Dangling else

* `else` 属于最近且尚未匹配的 `if`<br>`else` matches the closest unmatched `if`
* 缩进不会改变匹配关系<br>Indentation does not control the match
* 使用大括号明确代码结构<br>Use braces to make the structure clear

## AP 考试重点<br>AP Exam Focus

* 根据给定值追踪嵌套条件<br>Trace nested conditionals with specific values
* 判断第一个为真的分支<br>Identify the first true branch
* 检查范围和边界值<br>Check ranges and boundary values
* 判断 `else` 与哪个 `if` 匹配<br>Determine which `if` an `else` belongs to

</script>
</div>
</div>

# 1. Trace the Outer Condition First<br>先判断外层条件

What is printed?

下面的代码会输出什么？

```java
int score = 82;

if (score >= 60)
{
    if (score >= 90)
    {
        System.out.println("Excellent");
    }
    else
    {
        System.out.println("Pass");
    }
}
else
{
    System.out.println("Fail");
}
```

**Answer:**

```text
Pass
```

Trace the code from the outside inward:

从外层向内层追踪代码：

1. `score >= 60` is `true`, so Java enters the outer `if`.

2. Java then checks `score >= 90`.

3. That condition is `false`, so the inner `else` runs.

4. The outer `else` is skipped.

5. `score >= 60` 为真，因此进入外层 `if`。

6. Java 接着检查 `score >= 90`。

7. 这个条件为假，因此执行内层的 `else`。

8. 外层的 `else` 被跳过。

The inner condition is not checked unless execution first enters the outer `if`.

只有程序先进入外层 `if`，才会检查内层条件。

# 2. Nested `if` Statements<br>嵌套 `if` 语句

A **nested conditional** is a conditional statement placed inside another conditional statement.

**嵌套条件语句**是写在另一个条件语句内部的条件语句。

```java
if (outerCondition)
{
    if (innerCondition)
    {
        statements;
    }
}
```

The inner condition is evaluated only when the outer condition is true.

只有外层条件为真时，内层条件才会被计算。

Consider this example:

观察下面的例子：

```java
boolean hasTicket = true;
boolean hasSeat = false;

if (hasTicket)
{
    System.out.println("Enter the theater");

    if (hasSeat)
    {
        System.out.println("Sit down");
    }
}

System.out.println("Movie starts");
```

**Output:**

```text
Enter the theater
Movie starts
```

Because `hasTicket` is true, Java enters the outer block. However, `hasSeat` is false, so the inner block is skipped.

因为 `hasTicket` 为真，Java 进入外层代码块；但 `hasSeat` 为假，因此跳过内层代码块。

The final statement is outside both conditions, so it always runs.

最后一条语句位于两个条件语句之外，因此总会执行。

# 3. Multi-Way Selection with `else if`<br>使用 `else if` 进行多路选择

An `if-else-if` chain handles three or more possible cases.

`if-else-if` 链可以处理三种或更多可能的情况。

```java
int temperature = 18;

if (temperature >= 30)
{
    System.out.println("Hot");
}
else if (temperature >= 20)
{
    System.out.println("Warm");
}
else if (temperature >= 10)
{
    System.out.println("Cool");
}
else
{
    System.out.println("Cold");
}
```

**Output:**

```text
Cool
```

Java checks the conditions from top to bottom:

Java 从上到下检查条件：

```text
18 >= 30 → false
18 >= 20 → false
18 >= 10 → true
```

As soon as Java finds the first true condition, it executes that branch and skips the rest of the chain.

Java 一旦找到第一个为真的条件，就会执行该分支，并跳过后面的所有分支。

> An `else if` chain executes no more than one branch.

> 一个 `else if` 链最多只会执行一个分支。

The final `else` runs only when every earlier condition is false.

只有前面的所有条件都为假时，最后的 `else` 才会执行。

# 4. The First True Condition Wins<br>第一个为真的条件优先

What is printed?

下面的代码会输出什么？

```java
int score = 95;

if (score >= 60)
{
    System.out.println("Pass");
}
else if (score >= 80)
{
    System.out.println("Good");
}
else if (score >= 90)
{
    System.out.println("Excellent");
}
```

**Answer:**

```text
Pass
```

All three comparisons would be true for `95`, but Java stops at the first true condition.

对于 `95`，三个比较实际上都为真，但 Java 会在第一个真条件处停止。

The code does not reach `score >= 80` or `score >= 90`.

程序不会继续检查 `score >= 80` 或 `score >= 90`。

The order should usually go from the most restrictive high boundary to the lower boundaries:

条件通常应该按照从较高边界到较低边界的顺序排列：

```java
if (score >= 90)
{
    System.out.println("Excellent");
}
else if (score >= 80)
{
    System.out.println("Good");
}
else if (score >= 60)
{
    System.out.println("Pass");
}
else
{
    System.out.println("Fail");
}
```

Now a score of `95` correctly prints:

现在，`95` 会正确输出：

```text
Excellent
```

# 5. Range Conditions and Boundary Values<br>范围条件与边界值

Suppose the required categories are:

假设分类要求如下：

| Category | Range          |
| -------- | -------------- |
| High     | `x >= 66`      |
| Medium   | `33 <= x < 66` |
| Low      | `x < 33`       |

One correct implementation is:

一种正确写法是：

```java
if (x < 33)
{
    System.out.println("Low");
}
else if (x < 66)
{
    System.out.println("Medium");
}
else
{
    System.out.println("High");
}
```

Why does the second condition need only `x < 66`?

为什么第二个条件只需要写 `x < 66`？

Because Java reaches that condition only after `x < 33` has already been false.

因为只有在 `x < 33` 已经为假之后，Java 才会检查第二个条件。

At that point, Java already knows:

此时 Java 已经知道：

```text
x >= 33
```

Therefore:

因此：

```java
else if (x < 66)
```

really represents:

实际上表示：

```text
33 <= x && x < 66
```

The important boundary values are:

重要的边界值包括：

|  `x` | Expected result |
| ---: | --------------- |
| `32` | Low             |
| `33` | Medium          |
| `65` | Medium          |
| `66` | High            |

Testing values directly on both sides of a boundary helps reveal errors involving `<` versus `<=`.

测试边界值以及边界两侧的值，有助于发现 `<` 和 `<=` 使用错误的问题。

# 6. Independent `if` Statements vs. an `else if` Chain<br>独立 `if` 与 `else if` 链

Consider the following code:

观察下面的代码：

```java
int score = 95;
String grade = "";

if (score >= 90)
{
    grade = "A";
}

if (score >= 80)
{
    grade = "B";
}

if (score >= 70)
{
    grade = "C";
}

if (score >= 60)
{
    grade = "D";
}
else
{
    grade = "F";
}

System.out.println(grade);
```

What is printed?

输出是什么？

```text
D
```

This code does not work as intended.

这段代码没有得到预期结果。

Each `if` is checked independently:

每个 `if` 都会单独检查：

```text
95 >= 90 → grade becomes "A"
95 >= 80 → grade becomes "B"
95 >= 70 → grade becomes "C"
95 >= 60 → grade becomes "D"
```

Later assignments overwrite earlier ones.

后面的赋值覆盖了前面的结果。

For mutually exclusive categories, use one connected `if-else-if` chain:

对于互相排斥的分类，应该使用一个完整连接的 `if-else-if` 链：

```java
if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 70)
{
    grade = "C";
}
else if (score >= 60)
{
    grade = "D";
}
else
{
    grade = "F";
}
```

Now only the first matching branch runs.

现在只会执行第一个符合条件的分支。

# 7. The Final `else` Is Optional<br>最后的 `else` 可以省略

An `else if` chain does not always need a final `else`.

`else if` 链不一定必须包含最后的 `else`。

```java
int score = 55;

if (score >= 90)
{
    System.out.println("Excellent");
}
else if (score >= 60)
{
    System.out.println("Pass");
}

System.out.println("Done");
```

**Output:**

```text
Done
```

Neither condition is true, so neither branch runs. Execution continues after the conditional.

两个条件都为假，因此两个分支都不会执行。程序继续执行条件语句后面的代码。

Add a final `else` only when the algorithm needs a default action for all remaining cases.

只有当算法需要处理所有剩余情况时，才需要添加最后的 `else`。

```java
else
{
    System.out.println("Fail");
}
```

# 8. The Dangling `else` Rule<br>悬空 `else` 规则

Consider this code without braces:

观察下面这段没有大括号的代码：

```java
if (sunny)
    if (hot)
        System.out.println("Go swimming");
    else
        System.out.println("Wear a jacket");
```

Which `if` does the `else` belong to?

这个 `else` 属于哪一个 `if`？

It belongs to:

它属于：

```java
if (hot)
```

Java follows this rule:

Java 遵循下面的规则：

> An `else` matches the closest preceding unmatched `if` in the same block.

> `else` 会与同一代码块中最近且尚未匹配的 `if` 配对。

The indentation does not change this rule.

缩进不会改变这个规则。

The code is interpreted as:

Java 实际上把代码理解为：

```java
if (sunny)
{
    if (hot)
    {
        System.out.println("Go swimming");
    }
    else
    {
        System.out.println("Wear a jacket");
    }
}
```

If `sunny` is false, neither message is printed because Java never reaches the inner conditional.

如果 `sunny` 为假，两个消息都不会输出，因为程序根本不会执行到内层条件。

# 9. Use Braces to Control Which `if` Gets the `else`<br>使用大括号明确 `else` 的匹配关系

Suppose the intended behavior is:

假设预期逻辑是：

* If it is sunny, check whether it is hot.

* If it is not sunny, print `"Bring an umbrella"`.

* 如果天气晴朗，再判断是否炎热。

* 如果天气不晴朗，输出 `"Bring an umbrella"`。

Use braces around the outer `if` body:

应该给外层 `if` 的代码块添加大括号：

```java
if (sunny)
{
    if (hot)
    {
        System.out.println("Go swimming");
    }
}
else
{
    System.out.println("Bring an umbrella");
}
```

Now the `else` belongs to `if (sunny)`.

现在，`else` 与 `if (sunny)` 配对。

| Structure                                      | Which `if` gets the `else`?            |
| ---------------------------------------------- | -------------------------------------- |
| No braces around the inner `if` structure      | Closest unmatched `if`<br>最近且未匹配的 `if` |
| Braces close the outer `if` body before `else` | Outer `if`<br>外层 `if`                  |

On the AP exam, follow braces and Java’s matching rule—not visual indentation.

在 AP 考试中，应根据大括号和 Java 的匹配规则判断，而不能只看视觉缩进。

# 10. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                          | Why it is wrong                                                                          | Correct understanding                                                                                   |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Checking broad conditions before specific conditions.<br>把范围较宽的条件放在前面。           | An earlier true branch prevents later branches from being checked.<br>前面的真分支会阻止后面的条件被检查。 | Put higher or more specific boundaries first when appropriate.<br>根据范围设计，先检查更具体的边界。                     |
| Using separate `if` statements for one category choice.<br>用多个独立 `if` 处理互斥分类。    | Multiple blocks may run and overwrite earlier results.<br>多个代码块可能执行，并覆盖之前的结果。            | Use one connected `if-else-if` chain.<br>使用完整连接的 `if-else-if` 链。                                        |
| Assuming every `else if` condition is checked.<br>认为每个条件都会被检查。                   | Java stops after the first true branch.<br>Java 在第一个真分支后停止。                              | Trace from top to bottom and stop after a branch runs.<br>从上到下追踪，执行一个分支后停止。                             |
| Checking the inner condition when the outer condition is false.<br>外层为假时仍检查内层条件。 | Execution never reaches the inner condition.<br>程序不会执行到内层条件。                             | Evaluate the outer condition first.<br>先判断外层条件。                                                         |
| Using indentation to match an `else`.<br>根据缩进判断 `else`。                          | Java ignores indentation when matching statements.<br>Java 不根据缩进匹配语句。                    | Match `else` with the closest unmatched `if`, using braces for clarity.<br>根据最近未匹配的 `if` 判断，并使用大括号明确结构。 |
| Assuming the final `else` is always required.<br>认为最后的 `else` 必须存在。              | A chain may intentionally do nothing when no condition is true.<br>有时所有条件为假时，本来就不需要执行操作。 | Add a final `else` only when a default case is needed.<br>只有需要默认情况时才添加 `else`。                          |

# 11. Debugging Example<br>调试例子

The following program should assign one grade to the score:

下面的程序应该根据分数得到一个等级：

```java
int score = 88;
String grade = "";

if (score >= 90)
{
    grade = "A";
}

if (score >= 80)
{
    grade = "B";
}

if (score >= 70)
{
    grade = "C";
}
else
{
    grade = "F";
}

System.out.println(grade);
```

**Actual output:**

```text
C
```

The code runs, but the answer is wrong. This is a **logic error**.

代码可以运行，但结果不正确。这属于**逻辑错误**。

All three `if` statements are independent. For `score = 88`:

三个 `if` 都是独立的。对于 `score = 88`：

```text
88 >= 90 → false
88 >= 80 → true  → grade becomes "B"
88 >= 70 → true  → grade becomes "C"
```

### Fixed code

```java
int score = 88;
String grade;

if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 70)
{
    grade = "C";
}
else
{
    grade = "F";
}

System.out.println(grade);
```

```text
B
```

| Problem                  | What happened                                 | Fix                                                           |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------------- |
| Separate `if` statements | More than one condition was true.<br>多个条件都为真。 | Connect the conditions with `else if`.<br>使用 `else if` 连接条件。  |
| Later assignment         | `"C"` overwrote `"B"`.<br>`"C"` 覆盖了 `"B"`。    | Allow only the first matching branch to run.<br>只允许第一个匹配分支执行。 |

# 12. Mini Practice<br>小练习

## Practice 1: Nested Conditionals<br>练习一：嵌套条件语句

What is printed?

下面的代码会输出什么？

```java
int x = 7;

if (x > 0)
{
    if (x % 2 == 0)
    {
        System.out.println("Positive even");
    }
    else
    {
        System.out.println("Positive odd");
    }
}
else
{
    System.out.println("Not positive");
}
```

**Answer:**

```text
Positive odd
```

The outer condition is true. Java then checks the inner condition, which is false because `7 % 2` is `1`.

外层条件为真，因此继续检查内层条件。因为 `7 % 2` 为 `1`，内层条件为假。

---

## Practice 2: First True Branch<br>练习二：第一个真分支

What is printed?

下面的代码会输出什么？

```java
int x = 75;

if (x >= 60)
{
    System.out.println("Pass");
}
else if (x >= 70)
{
    System.out.println("Good");
}
else if (x >= 80)
{
    System.out.println("Excellent");
}
```

**Answer:**

```text
Pass
```

The first condition is already true, so Java skips all later conditions.

第一个条件已经为真，因此 Java 跳过后面的所有条件。

---

## Practice 3: Range Boundaries<br>练习三：范围边界

Which code correctly prints:

下面哪段代码可以正确实现：

* `"High"` for `x >= 66`
* `"Medium"` for `33 <= x < 66`
* `"Low"` for `x < 33`

A.

```java
if (x > 66)
{
    System.out.println("High");
}
else if (x > 33)
{
    System.out.println("Medium");
}
else
{
    System.out.println("Low");
}
```

B.

```java
if (x < 33)
{
    System.out.println("Low");
}
else if (x < 66)
{
    System.out.println("Medium");
}
else
{
    System.out.println("High");
}
```

C.

```java
if (x >= 66)
{
    System.out.println("High");
}

if (x >= 33)
{
    System.out.println("Medium");
}

if (x < 33)
{
    System.out.println("Low");
}
```

**Answer: B**

A incorrectly classifies the boundary values `33` and `66`. C may print more than one category.

A 无法正确处理边界值 `33` 和 `66`；C 可能输出多个类别。

---

## Practice 4: Dangling `else`<br>练习四：悬空的 `else`

Consider:

观察下面的代码：

```java
boolean a = true;
boolean b = false;

if (a)
    if (b)
        System.out.println("X");
    else
        System.out.println("Y");
```

What is printed?

输出是什么？

```text
Y
```

The `else` belongs to `if (b)`. Because `a` is true, Java reaches the inner condition. Since `b` is false, the inner `else` runs.

`else` 与 `if (b)` 配对。因为 `a` 为真，程序执行到内层条件；`b` 为假，因此执行内层 `else`。

---

## Practice 5: Fix the Order<br>练习五：修正条件顺序

The following code should print `"A"` for scores of at least `90`, `"B"` for scores from `80` to `89`, and `"C"` otherwise.

下面的代码应该让 `90` 分及以上输出 `"A"`，`80–89` 分输出 `"B"`，其他分数输出 `"C"`。

```java
if (score >= 80)
{
    System.out.println("B");
}
else if (score >= 90)
{
    System.out.println("A");
}
else
{
    System.out.println("C");
}
```

What is wrong?

问题是什么？

**Answer:** A score of `90` or higher satisfies `score >= 80` first, so the `"A"` branch can never run.

**答案：**`90` 分及以上会先满足 `score >= 80`，因此 `"A"` 分支永远不会执行。

### Fixed code

```java
if (score >= 90)
{
    System.out.println("A");
}
else if (score >= 80)
{
    System.out.println("B");
}
else
{
    System.out.println("C");
}
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.4 question, check:

做 2.4 的题目之前，检查：

* What is the outer condition?
  外层条件是什么？

* Does execution reach the inner condition?
  程序是否会执行到内层条件？

* Are the conditions part of one `else if` chain or separate `if` statements?
  这些条件属于同一个 `else if` 链，还是多个独立的 `if`？

* Which condition is checked first?
  哪个条件最先被检查？

* Which condition is the first one that evaluates to `true`?
  第一个为真的条件是哪一个？

* Should tracing stop after that branch runs?
  执行该分支后是否应该停止检查后续分支？

* Could separate `if` statements cause multiple blocks to run?
  多个独立 `if` 是否可能让多个代码块同时执行？

* Are broad and specific conditions in the correct order?
  范围较宽和较具体的条件顺序是否正确？

* Are the boundary values handled correctly?
  边界值是否被正确处理？

* Is a final `else` needed for the remaining cases?
  是否需要最后的 `else` 处理剩余情况？

* Which unmatched `if` does each `else` belong to?
  每个 `else` 与哪个尚未匹配的 `if` 配对？

* Are braces making the intended structure clear?
  大括号是否清楚地表示了预期结构？
