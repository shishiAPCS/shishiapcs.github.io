---
title: "AP CSA 2.5：复合布尔表达式"
layout: post
categories: media
render_with_liquid: false
---

In earlier lessons, one Boolean expression controlled each decision. In this lesson, you will combine or reverse conditions to describe more precise situations.

在前面的课程中，每个判断通常只使用一个布尔表达式。本节课将学习如何组合或取反多个条件，从而表达更准确的判断逻辑。

> **`&&` requires both conditions, `||` requires at least one, and `!` reverses a Boolean value.**
> **`&&` 要求两个条件都为真，`||` 要求至少一个为真，而 `!` 会把布尔值取反。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.5 复合布尔表达式<br>Compound Boolean Expressions

## 逻辑与<br>Logical AND

* `A && B`：两边都为真时结果才为真<br>True only when both expressions are true
* 常用于判断一个值是否在某个范围内<br>Often used to test whether a value is inside a range
* `score >= 0 && score <= 100`<br>Checks whether `score` is from 0 through 100

## 逻辑或<br>Logical OR

* `A || B`：至少一边为真时结果为真<br>True when one or both expressions are true
* Java 的 `||` 是包含性或<br>Java uses inclusive OR
* 常用于判断一个值是否在合法范围之外<br>Often used to test whether a value is outside a valid range

## 逻辑非<br>Logical NOT

* `!A`：把 `true` 和 `false` 互换<br>Reverses a Boolean value
* `!finished`：表示尚未完成<br>Means `finished` is false

## 运算顺序<br>Operator Precedence

* 括号中的内容先计算<br>Parentheses are evaluated first
* `!` 先于 `&&`<br>`!` is evaluated before `&&`
* `&&` 先于 `||`<br>`&&` is evaluated before `||`
* 不确定时使用括号明确逻辑<br>Use parentheses to make the intended logic clear

## 真值表<br>Truth Tables

* `&&`：只有一组全真情况<br>Only `true && true` is true
* `||`：只有一组全假情况<br>Only `false || false` is false
* 用于检查所有布尔值组合<br>Shows the result for every Boolean combination

## 短路求值<br>Short-Circuit Evaluation

* `false && ...`：右边不再计算<br>The right side is skipped
* `true || ...`：右边不再计算<br>The right side is skipped
* 可以避免不必要或危险的运算<br>Can prevent unnecessary or unsafe evaluation

## AP 考试陷阱<br>Common AP Traps

* 把 `||` 误认为只能有一个条件为真<br>Treating `||` as exclusive OR
* 忘记 `&&` 先于 `||`<br>Forgetting that `&&` has higher precedence
* 用 `||` 判断一个值位于范围内<br>Using `||` incorrectly for an inside range
* 忽略短路求值，误判运行时错误<br>Ignoring short-circuit evaluation

</script>
</div>
</div>

# 1. Evaluate the Smaller Conditions First<br>先计算较小的条件

What is printed?

下面的代码会输出什么？

```java
int x = 10;
int y = 5;

if (x % 2 == 0 && y % 2 == 0 || x > y)
{
    System.out.print("First ");

    if (y * 2 == x || y > 5 && x <= 10)
    {
        System.out.print("Second");
    }
    else
    {
        System.out.print("Third");
    }
}
```

**Answer:**

```text
First Second
```

Start with the outer condition:

先计算外层条件：

```text
x % 2 == 0 → true
y % 2 == 0 → false
x > y      → true
```

Because `&&` is evaluated before `||`, Java reads the condition as:

因为 `&&` 的优先级高于 `||`，Java 会按照下面的方式理解：

```java
(true && false) || true
```

```text
false || true → true
```

Therefore, `"First "` is printed.

所以会输出 `"First "`。

Now evaluate the inner condition:

接着计算内层条件：

```text
y * 2 == x → true
y > 5      → false
x <= 10    → true
```

Java reads it as:

Java 会按照下面的方式理解：

```java
true || (false && true)
```

The result is `true`, so `"Second"` is printed.

结果为 `true`，因此输出 `"Second"`。

# 2. Logical AND: `&&`<br>逻辑与：`&&`

`A && B` is true only when **both** expressions are true.

只有当两个表达式都为真时，`A && B` 的结果才为真。

```java
boolean roomClean = true;
boolean homeworkDone = false;

if (roomClean && homeworkDone)
{
    System.out.println("You can go out.");
}
else
{
    System.out.println("Stay home.");
}
```

```text
Stay home.
```

Although `roomClean` is true, `homeworkDone` is false. Because both conditions are required, the complete expression is false.

虽然 `roomClean` 为真，但 `homeworkDone` 为假。由于两个条件必须同时满足，因此整个表达式为假。

## AND truth table<br>AND 真值表

| `A`     | `B`     | `A && B` |
| ------- | ------- | -------- |
| `true`  | `true`  | `true`   |
| `true`  | `false` | `false`  |
| `false` | `true`  | `false`  |
| `false` | `false` | `false`  |

A useful memory rule:

一个实用的记忆方法：

> `&&` is strict: both sides must be true.

> `&&` 的要求很严格：左右两边都必须为真。

# 3. Logical OR: `||`<br>逻辑或：`||`

`A || B` is true when **one or both** expressions are true.

只要一个或两个表达式为真，`A || B` 的结果就为真。

```java
boolean canWalk = true;
boolean carAvailable = false;

if (canWalk || carAvailable)
{
    System.out.println("You can go.");
}
```

```text
You can go.
```

Only one true condition is required.

只需要一个条件为真即可。

## OR truth table<br>OR 真值表

| `A` | `B` | `A || B` |
|---|---|---|
| `true` | `true` | `true` |
| `true` | `false` | `true` |
| `false` | `true` | `true` |
| `false` | `false` | `false` |

Java uses **inclusive OR**.

Java 中的 `||` 是**包含性或**。

That means this expression is still true when both sides are true:

这表示即使左右两边都为真，整个表达式仍然为真：

```java
true || true
```

```text
true
```

Do not assume that `||` means “exactly one side is true.”

不要把 `||` 理解为“只能有一边为真”。

# 4. Logical NOT: `!`<br>逻辑非：`!`

The logical NOT operator `!` reverses a Boolean value.

逻辑非运算符 `!` 会把一个布尔值取反。

```text
!true  → false
!false → true
```

Consider:

观察下面的代码：

```java
boolean homeworkDone = false;

if (!homeworkDone)
{
    System.out.println("Finish your homework.");
}
```

```text
Finish your homework.
```

`homeworkDone` is false, so `!homeworkDone` is true.

`homeworkDone` 为假，因此 `!homeworkDone` 为真。

You can also negate a complete comparison:

也可以对一个完整的比较表达式取反：

```java
int score = 70;
boolean result = !(score >= 60);
```

First calculate:

先计算：

```text
score >= 60 → true
```

Then reverse it:

然后取反：

```text
!true → false
```

Therefore, `result` is `false`.

所以，`result` 的值是 `false`。

# 5. Use `&&` for Values Inside a Range<br>使用 `&&` 判断范围内部

Suppose a valid score must be from `0` through `100`, including both endpoints.

假设合法分数必须在 `0` 到 `100` 之间，并且包含两个边界值。

```java
if (score >= 0 && score <= 100)
{
    System.out.println("Valid score");
}
```

Both conditions must be true:

两个条件必须同时为真：

```text
score is at least 0
AND
score is at most 100
```

```text
score >= 0 && score <= 100
```

Examples:

例如：

| `score` | `score >= 0` | `score <= 100` | Complete result |
| ------: | ------------ | -------------- | --------------- |
|    `75` | `true`       | `true`         | `true`          |
|    `-5` | `false`      | `true`         | `false`         |
|   `110` | `true`       | `false`        | `false`         |

To be inside the range, the value must satisfy both boundaries.

要位于范围内部，数值必须同时满足左右两个边界。

Java does not allow mathematical chained comparisons such as:

Java 不支持数学中的连续比较写法：

```java
0 <= score <= 100
```

Use two complete comparisons joined by `&&`.

应该写出两个完整的比较表达式，并使用 `&&` 连接。

# 6. Use `||` for Values Outside a Range<br>使用 `||` 判断范围外部

A score is outside the valid range when it is below `0` **or** above `100`.

当分数小于 `0` 或大于 `100` 时，它位于合法范围之外。

```java
if (score < 0 || score > 100)
{
    System.out.println("Invalid score");
}
```

Only one condition needs to be true.

只需要其中一个条件为真。

Examples:

| `score` | `score < 0` | `score > 100` | Complete result |
| ------: | ----------- | ------------- | --------------- |
|    `75` | `false`     | `false`       | `false`         |
|    `-5` | `true`      | `false`       | `true`          |
|   `110` | `false`     | `true`        | `true`          |

A useful pattern is:

一个实用的规律是：

| Goal                    | Common structure                   |   |                |
| ----------------------- | ---------------------------------- | - | -------------- |
| Inside a range<br>范围内部  | `lower <= value && value <= upper` |   |                |
| Outside a range<br>范围外部 | `value < lower                     |   | value > upper` |

# 7. Operator Precedence<br>运算符优先级

Among the three logical operators, Java uses this order:

在三个逻辑运算符之间，Java 使用下面的优先顺序：

```text
!  first
&& second
|| third
```

括号优先于这些运算符。

For example:

例如：

```java
boolean result = true || false && false;
```

Java evaluates `&&` first:

Java 会先计算 `&&`：

```java
true || (false && false)
```

```text
true || false → true
```

The result is `true`.

结果为 `true`。

Compare that with:

与下面的表达式比较：

```java
boolean result = (true || false) && false;
```

Parentheses force the OR expression to run first:

括号要求 Java 先计算 OR 表达式：

```text
(true || false) && false
true && false
false
```

The two expressions produce different results.

两个表达式会得到不同的结果。

Even when parentheses are not required, they can make the intended grouping easier to see.

即使语法上不需要括号，也可以使用括号让逻辑分组更加清楚。

# 8. Short-Circuit Evaluation<br>短路求值

Java does not always evaluate both sides of `&&` or `||`.

Java 不一定会计算 `&&` 或 `||` 的左右两边。

This behavior is called **short-circuit evaluation**.

这种行为叫作 **short-circuit evaluation（短路求值）**。

## Short-circuit with `&&`<br>`&&` 的短路求值

For:

对于：

```java
A && B
```

If `A` is false, the entire expression must be false. Java skips `B`.

如果 `A` 为假，整个表达式一定为假，因此 Java 会跳过 `B`。

```java
int x = 0;
int y = 6;

if (x != 0 && y / x == 3)
{
    System.out.println("Match");
}
else
{
    System.out.println("No match");
}
```

```text
No match
```

Java first checks:

Java 首先检查：

```text
x != 0 → false
```

Because the left side of `&&` is false, Java does not calculate:

因为 `&&` 左边为假，Java 不会计算：

```java
y / x
```

Therefore, no division-by-zero exception occurs.

因此，不会发生除以零的运行时错误。

## Short-circuit with `||`<br>`||` 的短路求值

For:

对于：

```java
A || B
```

If `A` is true, the complete expression must be true. Java skips `B`.

如果 `A` 为真，整个表达式一定为真，因此 Java 会跳过 `B`。

```java
int x = 0;
int y = 6;

if (x == 0 || y / x == 3)
{
    System.out.println("First case");
}
```

```text
First case
```

Because `x == 0` is already true, Java never evaluates `y / x`.

因为 `x == 0` 已经为真，所以 Java 不会计算 `y / x`。

| Operator | When the right side is skipped |    |                    |
| -------- | ------------------------------ | -- | ------------------ |
| `A && B` | When `A` is `false`            |    |                    |
| `A       |                                | B` | When `A` is `true` |

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                          | Why it is wrong                                                       | Correct understanding                                                |                                           |                |                                                                      |                                                                           |                                         |                                         |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------- | -------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------- |
| Using `                                                                          |                                                                       | `for an inside range.<br>使用`                                         |                                           | ` 判断范围内部。      | Almost every value satisfies at least one side.<br>几乎所有数值都会满足其中一个条件。 | Use `&&`: `score >= 0 && score <= 100`.<br>范围内部使用 `&&`。                   |                                         |                                         |
| Treating `                                                                       |                                                                       | `as “exactly one.”<br>认为`                                            |                                           | ` 表示只能有一个条件为真。 | `true                                                                |                                                                           | true` is also true.<br>两个条件都为真时，结果仍然为真。 | Java uses inclusive OR.<br>Java 使用包含性或。 |
| Reading strictly from left to right.<br>完全按照从左到右计算。                              | `&&` is evaluated before `                                            |                                                                      | `.<br>`&&`的优先级高于`                         |                | `。                                                                   | Add parentheses or apply the correct precedence.<br>使用括号或按照正确优先级计算。       |                                         |                                         |
| Forgetting that `!` reverses only the expression it controls.<br>不清楚 `!` 对哪部分取反。 | `!a && b` means `(!a) && b`.<br>`!` 先作用于紧跟其后的表达式。                     | Use parentheses when negating a larger expression.<br>对较大表达式取反时使用括号。 |                                           |                |                                                                      |                                                                           |                                         |                                         |
| Assuming both sides always run.<br>认为左右两边总会计算。                                   | `&&` and `                                                            |                                                                      | ` use short-circuit evaluation.<br>`&&`和` |                | ` 会进行短路求值。                                                           | Check the left side before evaluating the right side.<br>先判断左边是否已经决定最终结果。 |                                         |                                         |
| Putting an unsafe expression first.<br>把可能出错的表达式放在左边。                            | It may be evaluated before the safety check.<br>安全条件可能还没检查，危险运算就已经执行。 | Put the safety check first.<br>先写安全检查条件。                             |                                           |                |                                                                      |                                                                           |                                         |                                         |

# 10. Debugging Compound Conditions<br>调试复合条件

The following code is supposed to print `"Valid"` only when `score` is between `0` and `100`.

下面的代码原本应该只在 `score` 位于 `0` 到 `100` 之间时输出 `"Valid"`。

```java
int score = 150;

if (score >= 0 || score <= 100)
{
    System.out.println("Valid");
}
```

**Actual output:**

```text
Valid
```

The code runs, but the result is wrong. This is a **logic error**.

代码可以运行，但结果错误。这属于**逻辑错误**。

For `score = 150`:

对于 `score = 150`：

```text
score >= 0   → true
score <= 100 → false
true || false → true
```

The program accepts the score because `||` requires only one true condition.

程序接受了这个分数，因为 `||` 只要求一个条件为真。

### Fixed code

```java
int score = 150;

if (score >= 0 && score <= 100)
{
    System.out.println("Valid");
}
```

```text
score >= 0   → true
score <= 100 → false
true && false → false
```

Nothing is printed, which is correct.

不会输出任何内容，这才是正确结果。

## Unsafe condition order<br>不安全的条件顺序

Consider:

观察：

```java
int x = 0;
int y = 9;

if (y / x == 3 && x != 0)
{
    System.out.println("Match");
}
```

Java evaluates the left side first, so `y / x` causes an arithmetic exception before Java reaches `x != 0`.

Java 会先计算左边，因此还没有检查 `x != 0`，`y / x` 就已经导致算术异常。

This is a **runtime error**.

这属于**运行时错误**。

### Fixed order

```java
if (x != 0 && y / x == 3)
{
    System.out.println("Match");
}
```

| Problem                | Error type                                          | Fix                                  |                                  |                                                |   |                             |
| ---------------------- | --------------------------------------------------- | ------------------------------------ | -------------------------------- | ---------------------------------------------- | - | --------------------------- |
| `score >= 0            |                                                     | score <= 100`                        | Logic error<br>逻辑错误              | Use `&&` for the inside range.<br>范围内部使用 `&&`。 |   |                             |
| `y / x == 3 && x != 0` | Runtime error when `x` is `0`<br>`x` 为 `0` 时发生运行时错误 | Put `x != 0` first.<br>先检查 `x != 0`。 |                                  |                                                |   |                             |
| Misreading `a          |                                                     | b && c`                              | Logic/tracing mistake<br>逻辑或追踪错误 | Read it as `a                                  |   | (b && c)`.<br>先计算 `b && c`。 |

# 11. Mini Practice<br>小练习

## Practice 1: AND and OR<br>练习一：AND 与 OR

What is the value of `result`?

`result` 的值是什么？

```java
boolean result = (8 > 3) && (4 == 5);
```

**Answer: `false`**

```text
8 > 3  → true
4 == 5 → false
true && false → false
```

Both sides of `&&` must be true.

`&&` 的两边必须都为真。

---

## Practice 2: Inclusive OR<br>练习二：包含性或

What is the result?

结果是什么？

```java
boolean result = true || true;
```

**Answer: `true`**

Java’s `||` is true when one **or both** sides are true.

当一个或两个条件为真时，Java 的 `||` 都会得到 `true`。

---

## Practice 3: Range Check<br>练习三：范围判断

Which expression correctly tests whether `age` is from `13` through `19`, including both endpoints?

下面哪个表达式可以正确判断 `age` 是否位于 `13` 到 `19` 之间，并包含两个边界？

A. `age >= 13 || age <= 19`
B. `age >= 13 && age <= 19`
C. `age < 13 && age > 19`
D. `age == 13 || 19`

**Answer: B**

The value must satisfy both the lower and upper boundaries.

这个值必须同时满足下限和上限。

---

## Practice 4: Operator Precedence<br>练习四：运算符优先级

What is the value of `result`?

`result` 的值是什么？

```java
boolean result = false || true && false;
```

**Answer: `false`**

`&&` is evaluated first:

先计算 `&&`：

```text
false || (true && false)
false || false
false
```

---

## Practice 5: Short-Circuit Evaluation<br>练习五：短路求值

What happens when this code runs?

下面的代码运行时会发生什么？

```java
int x = 0;
int y = 12;

if (x != 0 && y / x == 3)
{
    System.out.println("First");
}
else
{
    System.out.println("Second");
}
```

**Answer:**

```text
Second
```

`x != 0` is false, so Java skips `y / x == 3`. No exception occurs.

`x != 0` 为假，因此 Java 跳过 `y / x == 3`，不会发生异常。

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.5 question, check:

做 2.5 的题目之前，检查：

* What is the value of each smaller Boolean expression?
  每个较小的布尔表达式结果是什么？

* Does `&&` require both sides to be true?
  `&&` 是否要求两边都为真？

* Does `||` allow one or both sides to be true?
  `||` 是否允许一个或两个条件为真？

* Is `!` reversing the correct expression?
  `!` 是否对正确的表达式取反？

* Are you checking inside a range with `&&`?
  判断范围内部时，是否使用了 `&&`？

* Are you checking outside a range with `||`?
  判断范围外部时，是否使用了 `||`？

* Did you evaluate `!` before `&&`, and `&&` before `||`?
  你是否按照 `!`、`&&`、`||` 的顺序计算？

* Do parentheses change the grouping?
  括号是否改变了表达式的分组？

* For `A && B`, is `B` skipped because `A` is false?
  对于 `A && B`，是否因为 `A` 为假而跳过 `B`？

* For `A || B`, is `B` skipped because `A` is true?
  对于 `A || B`，是否因为 `A` 为真而跳过 `B`？

* Could short-circuit evaluation prevent a runtime error?
  短路求值是否会避免一个运行时错误？

* Is a safety check placed before a potentially dangerous expression?
  安全检查是否位于可能出错的表达式之前？
