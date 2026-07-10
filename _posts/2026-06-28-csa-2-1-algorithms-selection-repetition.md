---
title: "AP CSA 2.1：算法中的选择与重复"
layout: post
categories: media
render_with_liquid: false
---

In Unit 1, most instructions ran from top to bottom. In this lesson, you will learn how algorithms can make decisions, repeat steps, and produce different outcomes when the order changes.

在第一单元中，大部分指令都是从上到下依次执行。本节课将学习算法如何做出选择、重复步骤，以及为什么步骤顺序会影响最终结果。

> **An algorithm follows steps in order, makes choices based on true or false decisions, and repeats steps when needed.**
> **算法会按照顺序执行步骤，根据真假条件做出选择，并在需要时重复某些步骤。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.1 算法中的选择与重复<br>Algorithms with Selection and Repetition

## 三种基本结构<br>Three Control Structures

* 顺序 `sequencing`：按照给定顺序执行步骤<br>Perform steps in the given order
* 选择 `selection`：根据真假条件选择路径<br>Choose a path based on a true or false decision
* 重复 `repetition`：重复执行某些步骤<br>Repeat certain steps

## 顺序<br>Sequencing

* 默认按照书写顺序执行<br>Steps normally run in written order
* 前面的步骤可能影响后面的结果<br>Earlier steps may affect later results

## 选择<br>Selection

* 根据条件做出决定<br>Make a decision based on a condition
* 条件为真时执行一个步骤或路径<br>Follow a step or path when the condition is true
* 条件为假时跳过该步骤或选择另一条路径<br>Skip the step or follow another path when it is false

## 重复<br>Repetition

* 多次执行相同的步骤<br>Perform the same steps multiple times
* 持续到达到目标或条件发生变化<br>Continue until an outcome is reached or a condition changes
* 也叫 `iteration` 或 `looping`<br>Also called iteration or looping

## 表示算法<br>Representing Algorithms

* 使用文字描述步骤<br>Describe the steps using written language
* 使用图示表示执行路径<br>Use a diagram to show the execution path
* 按照缩进和箭头判断步骤关系<br>Use indentation and arrows to follow the logic

## 顺序影响结果<br>Order Affects the Outcome

* 相同的步骤，顺序不同，结果可能不同<br>The same steps in a different order may produce a different result
* 必须严格按照给定顺序追踪<br>Trace the exact given order

## AP 考试重点<br>AP Exam Focus

* 判断哪里使用了顺序、选择或重复<br>Identify sequencing, selection, and repetition
* 根据算法确定最终结果<br>Determine the outcome of an algorithm
* 比较不同步骤顺序产生的结果<br>Compare outcomes when steps are reordered

</script>
</div>
</div>

# 1. Trace the Algorithm in Order<br>按照顺序追踪算法

Consider the following algorithm:

观察下面的算法：

```text
SET total TO 16

IF total is at least 25
    BUY a gift card
    SUBTRACT 25 from total

IF total is at least 10
    BUY a cake
    SUBTRACT 10 from total

IF total is at least 5
    BUY some candy
    SUBTRACT 5 from total

REPEAT WHILE total is at least 1
    BUY a birthday card
    SUBTRACT 1 from total
```

What will be purchased?

最终会购买什么？

**Answer: A cake, some candy, and one birthday card.**

**答案：一个蛋糕、一些糖果和一张生日卡。**

Trace the algorithm from top to bottom:

按照从上到下的顺序追踪：

1. `total` starts at `16`.

2. There is not enough money for the gift card.

3. The cake costs `10`, so `total` becomes `6`.

4. The candy costs `5`, so `total` becomes `1`.

5. One birthday card is purchased, so `total` becomes `0`.

6. The repetition stops.

7. `total` 的初始值是 `16`。

8. 钱不够购买礼品卡，因此跳过这一步。

9. 购买蛋糕花费 `10`，所以 `total` 变成 `6`。

10. 购买糖果花费 `5`，所以 `total` 变成 `1`。

11. 购买一张生日卡后，`total` 变成 `0`。

12. 重复结束。

This algorithm uses all three basic control structures:

这段算法使用了三种基本控制结构：

* **Sequencing:** The steps are checked in order.

* **Selection:** Each purchase depends on a condition.

* **Repetition:** Birthday cards are purchased repeatedly.

* **顺序：** 各个步骤按照给定顺序执行。

* **选择：** 是否购买某件物品取决于条件。

* **重复：** 购买生日卡的步骤可能执行多次。

# 2. Three Building Blocks of Algorithms<br>算法的三种基本结构

| Structure            | What happens                                                             | Example                                                   |
| -------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------- |
| **Sequencing**<br>顺序 | Steps run in a particular order.<br>步骤按照特定顺序执行。                          | Wake up, brush your teeth, and leave home.<br>起床、刷牙，然后出门。 |
| **Selection**<br>选择  | A condition determines which step or path is followed.<br>条件决定执行哪个步骤或路径。 | If it is cold, wear a sweater.<br>如果天气冷，就穿毛衣。             |
| **Repetition**<br>重复 | One or more steps are performed multiple times.<br>一个或多个步骤会执行多次。         | Check every message.<br>检查每一条消息。                          |

An algorithm may combine all three structures.

一个算法可以同时包含这三种结构。

# 3. Selection Uses a True or False Decision<br>选择结构根据真假条件做决定

Consider this short algorithm:

观察下面的简短算法：

```text
CHECK the weather.

IF it is cold
    WEAR a sweater.

LEAVE home.
```

Suppose it is not cold. What happens?

假设天气不冷，会发生什么？

**Answer: The sweater step is skipped, and the person still leaves home.**

**答案：跳过穿毛衣这一步，但仍然会出门。**

The condition “it is cold” can be either true or false.

“天气冷”这个条件可能为真，也可能为假。

* If it is true, the sweater step is performed.

* If it is false, the sweater step is skipped.

* The algorithm then continues with the next step.

* 如果条件为真，就执行穿毛衣这一步。

* 如果条件为假，就跳过穿毛衣这一步。

* 之后，算法继续执行下一个步骤。

This process is called **selection** because the condition determines which action is selected.

这个过程叫作 **selection（选择）**，因为条件决定了要执行哪个操作。

# 4. Repetition Performs Steps More Than Once<br>重复结构会多次执行步骤

Consider this algorithm:

观察下面的算法：

```text
SET unreadMessages TO 3.

REPEAT WHILE there are unread messages
    READ one message.
    DECREASE unreadMessages by 1.
```

How many messages are read?

会阅读多少条消息？

**Answer: Three messages.**

**答案：三条消息。**

The reading step repeats until there are no unread messages left.

阅读消息的步骤会不断重复，直到没有未读消息为止。

Repetition is also called:

重复结构也可以叫作：

* **iteration**
* **looping**

At this point, focus on the behavior: certain steps are performed repeatedly until the desired outcome is reached.

现阶段需要重点理解它的行为：某些步骤会不断重复，直到达到目标。

# 5. Order Affects the Outcome<br>步骤顺序会影响结果

Compare the following two algorithms.

比较下面两个算法。

## Algorithm A

```text
SET score TO 4.
DOUBLE score.

IF score is greater than 5
    ADD 1 to score.
```

**Final value: `9`**

```text
4 → 8 → 9
```

## Algorithm B

```text
SET score TO 4.

IF score is greater than 5
    ADD 1 to score.

DOUBLE score.
```

**Final value: `8`**

```text
4 → 4 → 8
```

The algorithms contain the same actions, but the actions happen in a different order.

两个算法包含相同的操作，但执行顺序不同。

In Algorithm A, the score is doubled before the condition is checked. The condition is true.

在算法 A 中，先把分数翻倍，再检查条件，因此条件为真。

In Algorithm B, the condition is checked while the score is still `4`. The condition is false.

在算法 B 中，检查条件时分数仍然是 `4`，因此条件为假。

> The computer follows the given order exactly. It does not rearrange the steps.

> 计算机会严格按照给定顺序执行，不会自行调整步骤。

# 6. Reading Written Algorithms and Diagrams<br>阅读文字算法与图示

In Topic 2.1, an algorithm may be represented using written language or a diagram.

在 2.1 中，算法可能使用文字或图示来表示。

When reading a written algorithm:

阅读文字算法时：

* Start with the first step.

* Follow the steps in order.

* Use indentation to see which steps belong to a selection or repetition.

* Recheck a repeated condition when the algorithm returns to it.

* 从第一个步骤开始。

* 按照给定顺序执行。

* 通过缩进判断哪些步骤属于选择或重复结构。

* 算法返回重复条件时，需要再次进行判断。

When reading a diagram:

阅读图示时：

* Follow the arrows.

* A split in the path represents a choice.

* An arrow returning to an earlier step represents repetition.

* 按照箭头方向执行。

* 路径分开通常表示选择。

* 箭头返回前面的步骤通常表示重复。

The important skill is following the algorithm’s logic, not memorizing detailed diagram symbols.

重点是理解并追踪算法逻辑，而不是死记复杂的图示符号。

# 7. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                    | Correct understanding                                                                                       |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Thinking selection automatically repeats.<br>认为选择结构会自动重复。                  | Selection makes a decision. Repetition performs steps multiple times.<br>选择负责做决定，重复负责多次执行。                  |
| Thinking a false condition stops the entire algorithm.<br>认为条件为假时整个算法都会停止。 | Usually, only the controlled step is skipped. The algorithm continues.<br>通常只是跳过该条件控制的步骤，算法会继续执行。           |
| Performing a repeated step only once.<br>只执行一次需要重复的步骤。                     | Continue until the repetition condition is no longer met or the goal is reached.<br>应该持续重复，直到条件不再满足或目标已经达成。 |
| Changing the order while tracing.<br>追踪时改变步骤顺序。                            | Follow the exact order in which the steps are given.<br>必须严格按照给定顺序执行。                                       |
| Looking only at the original value of a variable.<br>只看变量的初始值。             | Update the value immediately whenever a step changes it.<br>每当步骤改变变量时，都要立刻记录新值。                             |

# 8. Mini Practice<br>小练习

## Practice 1: Identify the Structure<br>练习一：判断结构

Which statement describes **selection**?

下面哪句话表示**选择结构**？

A. Check every book in the bag.
B. If the book is overdue, return it.
C. Read three pages.
D. Keep walking until you reach school.

**Answer: B**

The action depends on whether the book is overdue.

这个操作取决于书是否已经逾期，因此属于选择结构。

---

## Practice 2: Identify Repetition<br>练习二：判断重复结构

Which statement describes **repetition**?

下面哪句话表示**重复结构**？

A. If it rains, take an umbrella.
B. Turn on the computer.
C. Check each answer on the test.
D. Choose the red shirt.

**Answer: C**

“Each answer” means the checking step is performed repeatedly.

“检查每一道题”表示检查这个步骤需要重复执行。

---

## Practice 3: Predict the Outcome<br>练习三：预测结果

```text
SET total TO 2.

REPEAT WHILE total is at least 1
    BUY one card.
    SUBTRACT 1 from total.
```

How many cards are purchased?

会购买多少张卡？

**Answer: Two cards.**

```text
total: 2 → 1 → 0
```

The repeated step runs twice before `total` reaches `0`.

在 `total` 变成 `0` 之前，重复步骤执行了两次。

---

## Practice 4: Compare the Order<br>练习四：比较执行顺序

### Algorithm A

```text
SET value TO 3.
ADD 2 to value.
DOUBLE value.
```

### Algorithm B

```text
SET value TO 3.
DOUBLE value.
ADD 2 to value.
```

What are the final values?

最终值分别是多少？

**Answer:**

```text
Algorithm A: 10
Algorithm B: 8
```

```text
Algorithm A: (3 + 2) × 2 = 10
Algorithm B: (3 × 2) + 2 = 8
```

The operations are the same, but their order changes the result.

运算相同，但执行顺序不同，因此结果不同。

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.1 question, check:

做 2.1 的题目之前，检查：

* What is the first step of the algorithm?
  算法的第一步是什么？

* What is the exact order of the steps?
  各个步骤的准确顺序是什么？

* Which steps always happen in sequence?
  哪些步骤会按照顺序直接执行？

* Which step depends on a true or false decision?
  哪个步骤取决于一个真假条件？

* What happens when the condition is false?
  条件为假时会发生什么？

* Which steps repeat?
  哪些步骤会重复执行？

* When does the repetition stop?
  重复在什么时候停止？

* Did any earlier step change a value used later?
  前面的步骤是否改变了后面要使用的值？

* Would changing the order change the outcome?
  改变步骤顺序是否会改变结果？

