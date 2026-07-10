---
title: "AP CSA 2.3：if 语句"
layout: post
categories: media
render_with_liquid: false
---

Topic 2.2 introduced Boolean expressions that evaluate to `true` or `false`. Now Java can use those results to decide which statements should run.

在 2.2 中，我们学习了结果为 `true` 或 `false` 的布尔表达式。现在，Java 可以根据这些结果决定哪些语句应该执行。

> **An `if` statement checks a Boolean expression. The result determines which code runs next.**
> **`if` 语句会检查一个布尔表达式，并根据结果决定接下来执行哪些代码。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.3 if 语句<br>if Statements

## 选择结构<br>Selection

* 改变默认的顺序执行<br>Changes normal sequential execution
* 根据布尔表达式选择执行路径<br>Chooses a path using a Boolean expression

## 单向选择<br>One-Way Selection

* `if` 条件为真时执行代码块<br>The block runs when the condition is true
* 条件为假时跳过代码块<br>The block is skipped when the condition is false
* 之后继续执行 `if` 后面的语句<br>Execution continues after the `if`

## 双向选择<br>Two-Way Selection

* 使用 `if-else` 选择两条路径之一<br>Uses `if-else` to choose one of two paths
* 条件为真时执行 `if` 部分<br>The `if` branch runs when true
* 条件为假时执行 `else` 部分<br>The `else` branch runs when false

## 多个独立的 if<br>Independent if Statements

* 每个 `if` 都会单独检查<br>Each `if` is checked separately
* 前一个 `if` 可能改变后一个条件使用的值<br>An earlier `if` may change a value used later
* 多个代码块可能都执行<br>More than one block may run

## 条件与运算符<br>Conditions and Operators

* 条件结果必须是 `boolean`<br>The condition must evaluate to a `boolean`
* 常用 `==`、`!=`、`<`、`>`、`<=`、`>=`<br>Often uses relational operators
* 布尔变量可以直接作为条件<br>A Boolean variable can be used directly

## 语法规则<br>Syntax Rules

* 使用 `{ }` 标记条件控制的代码块<br>Use braces to mark the controlled block
* 条件后面不能加分号<br>Do not put a semicolon after the condition
* 使用 `==` 比较，使用 `=` 赋值<br>Use `==` to compare and `=` to assign

## AP 考试陷阱<br>Common AP Traps

* 忘记条件为假时跳过代码块<br>Forgetting that a false condition skips the block
* 把两个独立的 `if` 当成 `if-else`<br>Treating separate `if` statements as `if-else`
* 忘记变量在前一个代码块中已经改变<br>Ignoring an earlier change to a variable
* 误以为缩进决定代码块<br>Assuming indentation controls the block

</script>
</div>
</div>

# 1. Trace Every `if` in Order<br>按顺序追踪每一个 `if`

What is printed?

下面的代码会输出什么？

```java
int value = 4;

if (value > 3)
{
    value *= 2;
}

if (value > 6)
{
    value -= 5;
}

System.out.println(value);
```

**Answer:**

```text
3
```

Trace the code from top to bottom:

按照从上到下的顺序追踪代码：

```text
value starts at 4

4 > 3 → true
value becomes 8

8 > 6 → true
value becomes 3
```

The second condition uses the **updated** value of `value`, not its original value.

第二个条件使用的是 `value` 更新后的值，而不是它最开始的值。

Both `if` statements are independent, so Java checks both of them.

这两个 `if` 语句彼此独立，因此 Java 会分别检查它们。

# 2. One-Way Selection: `if`<br>单向选择：`if`

A one-way selection runs a block only when its condition is true.

单向选择只会在条件为真时执行对应的代码块。

```java
boolean isRaining = false;

if (isRaining)
{
    System.out.println("Take an umbrella.");
}

System.out.println("Drive carefully.");
```

What is printed?

输出是什么？

```text
Drive carefully.
```

Because `isRaining` is `false`, Java skips the body of the `if` statement.

因为 `isRaining` 是 `false`，Java 会跳过 `if` 语句的代码块。

The statement after the `if` is not part of the selection, so it still runs.

`if` 后面的语句不属于这个选择结构，因此仍然会执行。

The general form is:

基本结构如下：

```java
if (booleanExpression)
{
    statements;
}
```

Java follows these steps:

Java 会按照下面的过程执行：

1. Evaluate the Boolean expression.
   计算布尔表达式。

2. If the result is `true`, run the body.
   如果结果为 `true`，执行代码块。

3. If the result is `false`, skip the body.
   如果结果为 `false`，跳过代码块。

4. Continue with the next statement.
   继续执行后面的语句。

# 3. Two-Way Selection: `if-else`<br>双向选择：`if-else`

An `if-else` statement chooses exactly one of two paths.

`if-else` 语句会从两条路径中选择一条执行。

```java
int score = 72;

if (score >= 60)
{
    System.out.println("Pass");
}
else
{
    System.out.println("Keep trying");
}

System.out.println("Done");
```

**Output:**

```text
Pass
Done
```

Because `score >= 60` is true, the `if` branch runs and the `else` branch is skipped.

因为 `score >= 60` 为真，所以执行 `if` 部分，并跳过 `else` 部分。

After the selection finishes, execution continues with `"Done"`.

选择结构结束后，程序继续输出 `"Done"`。

The general form is:

基本结构如下：

```java
if (booleanExpression)
{
    statementsForTrue;
}
else
{
    statementsForFalse;
}
```

| Condition | Branch that runs          |
| --------- | ------------------------- |
| `true`    | `if` body<br>`if` 代码块     |
| `false`   | `else` body<br>`else` 代码块 |

In a single `if-else` statement, both branches cannot run.

在同一个 `if-else` 结构中，两条分支不会同时执行。

# 4. Separate `if` Statements Are Not `if-else`<br>两个独立的 `if` 不等于 `if-else`

Compare these two code segments.

比较下面两段代码。

## Two independent `if` statements<br>两个独立的 `if`

```java
int x = 8;

if (x > 5)
{
    System.out.print("A");
}

if (x < 10)
{
    System.out.print("B");
}
```

```text
AB
```

Both conditions are true, so both blocks run.

两个条件都为真，因此两个代码块都会执行。

## One `if-else` statement<br>一个 `if-else`

```java
int x = 8;

if (x > 5)
{
    System.out.print("A");
}
else
{
    System.out.print("B");
}
```

```text
A
```

Only one branch can run.

只能执行其中一条分支。

This difference is important in AP output-tracing questions.

这个区别是 AP 输出追踪题中的常见考点。

| Structure                                  | How Java checks it                                 | Possible number of executed branches |
| ------------------------------------------ | -------------------------------------------------- | -----------------------------------: |
| Two separate `if` statements<br>两个独立的 `if` | Checks both conditions independently.<br>分别检查两个条件。 |                           0, 1, or 2 |
| One `if-else` statement<br>一个 `if-else`    | Chooses one branch.<br>选择其中一条分支。                   |                            Exactly 1 |

# 5. Conditions Must Produce a Boolean Value<br>条件必须产生布尔值

The expression inside the parentheses must evaluate to `true` or `false`.

括号中的表达式必须得到 `true` 或 `false`。

A condition may use a relational operator:

条件可以使用关系运算符：

```java
if (age >= 16)
{
    System.out.println("Eligible");
}
```

It may also use a Boolean variable directly:

也可以直接使用布尔变量：

```java
boolean loggedIn = true;

if (loggedIn)
{
    System.out.println("Welcome");
}
```

Relational operators from Topic 2.2 commonly appear inside `if` conditions:

2.2 中学习的关系运算符经常出现在 `if` 条件中：

| Operator | Meaning                           |
| -------- | --------------------------------- |
| `==`     | equal to<br>等于                    |
| `!=`     | not equal to<br>不等于               |
| `<`      | less than<br>小于                   |
| `>`      | greater than<br>大于                |
| `<=`     | less than or equal to<br>小于或等于    |
| `>=`     | greater than or equal to<br>大于或等于 |

Remember:

记住：

```java
x = 5;     // assignment: changes x
x == 5     // comparison: produces true or false
```

# 6. Braces Control the Body<br>大括号决定代码块范围

Curly braces group the statements controlled by an `if`.

大括号用来标记哪些语句受到 `if` 条件的控制。

```java
if (temperature < 10)
{
    System.out.println("Wear a coat.");
    System.out.println("Wear gloves.");
}

System.out.println("Leave home.");
```

When the condition is false, both statements inside the braces are skipped.

条件为假时，大括号中的两条语句都会被跳过。

`"Leave home."` is outside the braces, so it always runs.

`"Leave home."` 位于大括号外，因此总会执行。

Java uses braces—not indentation—to determine the body.

Java 根据大括号判断代码块，而不是根据缩进。

The AP exam normally shows braces even when the body contains only one statement. Using braces also makes the controlled block easier to trace.

AP 考试通常会使用大括号，即使代码块中只有一条语句。使用大括号也能让执行范围更加清楚。

# 7. Do Not Put a Semicolon After the Condition<br>条件后面不要加分号

Consider this code:

观察下面的代码：

```java
int score = 40;

if (score >= 60);
{
    System.out.println("Pass");
}
```

This code prints:

这段代码会输出：

```text
Pass
```

The semicolon immediately ends the `if` statement:

条件后的分号立刻结束了 `if` 语句：

```java
if (score >= 60);
```

Java treats that as an `if` statement with an empty body. The following block is separate and always runs.

Java 会把它理解为一个代码块为空的 `if` 语句。后面的大括号代码块与 `if` 无关，因此总会执行。

This code compiles, but its behavior is wrong. It contains a **logic error**.

代码可以通过编译，但运行结果不符合预期。这属于**逻辑错误**。

### Correct code

```java
int score = 40;

if (score >= 60)
{
    System.out.println("Pass");
}
```

No semicolon belongs after the Boolean expression.

布尔表达式后面不能加分号。

# 8. Test Both Possible Paths<br>测试两种可能的执行路径

Suppose this code checks an age requirement:

假设下面的代码检查年龄要求：

```java
int age = 16;

if (age >= 16)
{
    System.out.println("Eligible");
}
else
{
    System.out.println("Not eligible");
}
```

A useful test should include:

测试时至少应该包括：

| Test value | Condition            | Expected branch |
| ---------: | -------------------- | --------------- |
|       `16` | `16 >= 16` → `true`  | `if`            |
|       `15` | `15 >= 16` → `false` | `else`          |

Testing `16` is especially important because it is the **boundary value** used by the condition.

测试 `16` 特别重要，因为它是条件中的**边界值**。

For an `if-else` statement, use at least:

对于一个 `if-else` 语句，至少应该测试：

* one value that makes the condition true
  一个让条件为真的值

* one value that makes the condition false
  一个让条件为假的值

For conditions containing `<=` or `>=`, also check the exact boundary.

如果条件中包含 `<=` 或 `>=`，还应该检查边界值本身。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                              | What happens                                                           | Correct understanding                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Using `=` instead of `==`.<br>把 `=` 当成 `==`。                         | Assignment is performed instead of equality testing.<br>执行了赋值，而不是相等比较。 | Use `==` to compare values.<br>使用 `==` 判断值是否相等。                    |
| Adding `;` after the condition.<br>在条件后添加分号。                         | The controlled body becomes empty.<br>`if` 控制的代码块变为空。                  | Write `if (condition)` with no semicolon.<br>条件后不要加分号。             |
| Believing indentation controls the body.<br>认为缩进决定代码块。               | Java follows braces, not visual spacing.<br>Java 根据大括号而不是缩进执行。         | Check the exact positions of `{` and `}`.<br>检查 `{` 和 `}` 的位置。     |
| Treating two `if` statements as `if-else`.<br>把两个 `if` 当作 `if-else`。 | Both conditions may be true and both blocks may run.<br>两个条件可能都为真。     | Trace every independent `if` separately.<br>分别追踪每一个独立的 `if`。       |
| Using the original variable value throughout.<br>始终使用变量初始值。          | A later condition may be evaluated incorrectly.<br>后面的条件可能判断错误。        | Update the value immediately after an assignment.<br>赋值后立刻更新变量值。   |
| Thinking a false condition ends the program.<br>认为条件为假时程序结束。         | Only the controlled body is skipped.<br>只会跳过该条件控制的代码块。                 | Continue with the statement after the selection.<br>继续执行选择结构后面的语句。 |

# 10. Debugging Example<br>调试例子

The following code is supposed to print both messages only when `isCold` is true:

下面的代码原本应该只在 `isCold` 为真时输出两条消息：

```java
boolean isCold = false;

if (isCold = true);
{
    System.out.println("Wear a coat.");
    System.out.println("Wear gloves.");
}
```

However, both messages are printed.

但是，两条消息仍然会被输出。

There are two problems:

这里有两个问题：

1. `isCold = true` assigns `true` instead of testing the variable.
   `isCold = true` 执行了赋值，而不是判断。

2. The semicolon ends the `if` statement before the block.
   分号在代码块开始前就结束了 `if` 语句。

### Fixed code

```java
boolean isCold = false;

if (isCold)
{
    System.out.println("Wear a coat.");
    System.out.println("Wear gloves.");
}
```

Because `isCold` is false, nothing is printed.

因为 `isCold` 为假，所以不会输出任何内容。

| Bug             | Why it is wrong                                                                 | Error type          |
| --------------- | ------------------------------------------------------------------------------- | ------------------- |
| `isCold = true` | Changes the variable to `true` instead of checking it.<br>把变量改成了 `true`，而不是判断它。 | Logic error<br>逻辑错误 |
| `if (isCold);`  | Creates an empty `if` body.<br>创建了一个空的 `if` 代码块。                                | Logic error<br>逻辑错误 |

# 11. Mini Practice<br>小练习

## Practice 1: Output Tracing<br>练习一：输出追踪

What is printed?

下面的代码会输出什么？

```java
int x = 3;

if (x > 2)
{
    x *= 2;
}

if (x > 4)
{
    x = 0;
}

System.out.println(x);
```

**Answer:**

```text
0
```

The first condition changes `x` from `3` to `6`. The second condition then uses `6`, so it is also true.

第一个条件把 `x` 从 `3` 改成 `6`。第二个条件使用更新后的 `6`，因此也为真。

---

## Practice 2: One-Way Selection<br>练习二：单向选择

What is printed?

下面的代码会输出什么？

```java
boolean ready = false;

if (ready)
{
    System.out.println("Start");
}

System.out.println("Wait");
```

**Answer:**

```text
Wait
```

The `if` body is skipped, but the statement after it still runs.

`if` 代码块被跳过，但后面的语句仍然会执行。

---

## Practice 3: Two-Way Selection<br>练习三：双向选择

What is printed?

下面的代码会输出什么？

```java
int number = 7;

if (number % 2 == 0)
{
    System.out.println("Even");
}
else
{
    System.out.println("Odd");
}
```

**Answer:**

```text
Odd
```

`7 % 2` is `1`, so the condition is false and the `else` branch runs.

`7 % 2` 的结果是 `1`，因此条件为假，执行 `else` 分支。

---

## Practice 4: Find the AP Trap<br>练习四：找出 AP 陷阱

```java
int x = 80;

if (x >= 80)
{
    System.out.println("High");
}

if (x >= 50)
{
    System.out.println("Middle");
}
else
{
    System.out.println("Low");
}
```

What is printed?

输出是什么？

**Answer:**

```text
High
Middle
```

The two `if` statements are independent. The `else` belongs only to the second `if`.

两个 `if` 语句彼此独立。`else` 只与第二个 `if` 组成双向选择。

When `x` is `80`, both `x >= 80` and `x >= 50` are true.

当 `x` 为 `80` 时，两个条件都为真。

---

## Practice 5: Fix the Code<br>练习五：修改代码

What is wrong with this statement?

下面的语句有什么问题？

```java
if (score >= 60);
{
    System.out.println("Pass");
}
```

**Answer:** Remove the semicolon.

**答案：**删除分号。

```java
if (score >= 60)
{
    System.out.println("Pass");
}
```

With the semicolon present, `"Pass"` is printed regardless of the value of `score`.

存在分号时，无论 `score` 的值是多少，都会输出 `"Pass"`。

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.3 question, check:

做 2.3 的题目之前，检查：

* What Boolean expression is being tested?
  正在检查哪个布尔表达式？

* Is the condition currently `true` or `false`?
  当前条件为 `true` 还是 `false`？

* Which statements are inside the braces?
  哪些语句位于大括号内？

* What happens when the condition is false?
  条件为假时会发生什么？

* Is this one `if-else` statement or two independent `if` statements?
  这是一个 `if-else`，还是两个独立的 `if`？

* Could more than one independent `if` body run?
  是否可能执行多个独立的 `if` 代码块？

* Did an earlier statement change a value used by a later condition?
  前面的语句是否改变了后面条件使用的变量？

* Is `==` being used for comparison instead of `=`?
  是否使用 `==` 进行比较，而不是使用 `=`？

* Is there an incorrect semicolon after the condition?
  条件后面是否错误地添加了分号？

* Did you test both the true and false paths?
  是否测试了条件为真和条件为假的两种路径？
