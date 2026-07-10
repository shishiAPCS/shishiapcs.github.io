---
title: "AP CSA 2.12：循环的非正式运行分析"
layout: post
categories: media
render_with_liquid: false
---

Earlier lessons focused on writing and tracing loops. In this lesson, you will determine final variable values and count exactly how many times a statement executes.

前面的课程重点是编写和追踪循环。本节课将进一步判断循环结束后的变量值，并准确计算某条语句会执行多少次。

> **To analyze a loop, track the values that actually reach the loop body—not just the numbers written in the loop header.**
> **分析循环时，要追踪真正进入循环体的变量值，而不能只看循环头中出现的数字。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.12 循环的非正式运行分析<br>Informal Runtime Analysis of Loops

## 循环追踪<br>Tracing Loops

* 使用追踪表记录每次迭代<br>Use a trace table for each iteration
* 第 `0` 行表示进入循环前的状态<br>Row `0` shows the state before the loop
* 每次赋值后立即更新变量<br>Update variables immediately after assignments

## 语句执行次数<br>Statement Execution Count

* 表示某条语句实际执行多少次<br>Counts how many times a statement executes
* 通常等于循环体进入次数<br>Often matches the number of body executions
* 不一定等于条件检查次数<br>May differ from the number of condition checks

## 单层循环<br>Single Loops

* 先列出循环变量的实际取值<br>List the actual counter values
* 步长为 `1` 时可使用“最大值 − 最小值 + 1”<br>For a step of `1`, use largest minus smallest plus one
* `<` 不包含边界，`<=` 包含边界<br>`<` excludes the boundary; `<=` includes it

## 固定次数的嵌套循环<br>Rectangular Nested Loops

* 内层循环每次执行相同次数<br>The inner loop runs the same number of times
* 总次数等于外层次数乘以内层次数<br>Total equals outer iterations times inner iterations
* 分别计算两个循环后再相乘<br>Count each loop separately before multiplying

## 非固定次数的嵌套循环<br>Non-Rectangular Nested Loops

* 内层循环次数取决于外层变量<br>The inner count depends on the outer variable
* 不能直接使用固定次数相乘<br>Do not use simple multiplication
* 需要把每轮内层次数相加<br>Add the inner-loop counts

## 短路求值<br>Short-Circuit Evaluation

* `&&` 左边为假时跳过右边<br>The right side is skipped when the left side is false
* 可以避免除以零等运行时错误<br>Can prevent runtime errors such as division by zero
* 安全检查必须写在危险表达式前面<br>Place the safety check before the unsafe expression

## AP 考试陷阱<br>Common AP Traps

* 把结束边界误算为循环变量取值<br>Counting an excluded boundary
* 忘记最后一次失败的条件检查<br>Forgetting the final false condition check
* 对非固定嵌套循环直接相乘<br>Multiplying non-rectangular loop counts
* 忽略短路求值的执行顺序<br>Ignoring short-circuit evaluation

</script>
</div>
</div>

# 1. Trace the Variables Before Counting<br>先追踪变量，再判断次数

What are the final values of `var1` and `var2`?

`var1` 和 `var2` 的最终值分别是多少？

```java
int var1 = 0;
int var2 = 2;

while (var2 != 0 && var1 / var2 >= 0)
{
    var1++;
    var2--;
}
```

**Answer:**

```text
var1 = 2
var2 = 0
```

Use a trace table:

使用追踪表：

| Stage                         | `var1` | `var2` | Condition result |
| ----------------------------- | -----: | -----: | ---------------- |
| Before the loop<br>进入循环前      |    `0` |    `2` | `true`           |
| After iteration 1<br>第 1 次迭代后 |    `1` |    `1` | Checked again    |
| After iteration 2<br>第 2 次迭代后 |    `2` |    `0` | Checked again    |
| Final check<br>最后一次检查         |    `2` |    `0` | `false`          |

On the final condition check:

最后一次检查条件时：

```text
var2 != 0
0 != 0
false
```

Because the left side of `&&` is already false, Java does not evaluate:

因为 `&&` 左边已经为假，所以 Java 不会计算：

```java
var1 / var2 >= 0
```

Therefore, the code does **not** divide by zero.

因此，这段代码**不会**发生除以零的错误。

# 2. Use a Trace Table for Changing Variables<br>使用追踪表记录变量变化

Consider:

观察下面的代码：

```java
int x = 2;
int y = 5;

while (y > 2 && x < y)
{
    x++;
    y--;
}
```

What are the final values?

最终值是什么？

**Answer:**

```text
x = 4
y = 3
```

Trace every complete iteration:

追踪每一次完整迭代：

| Stage                         | `x` | `y` | `y > 2` | `x < y` | Complete condition |
| ----------------------------- | --: | --: | ------- | ------- | ------------------ |
| Before the loop<br>进入循环前      | `2` | `5` | `true`  | `true`  | `true`             |
| After iteration 1<br>第 1 次迭代后 | `3` | `4` | `true`  | `true`  | `true`             |
| After iteration 2<br>第 2 次迭代后 | `4` | `3` | `true`  | `false` | `false`            |

When the condition becomes false, the loop stops immediately. The body does not run a third time.

当条件变为假时，循环立即停止，不会执行第三次循环体。

A reliable trace table should include:

一个可靠的追踪表应该记录：

1. all starting values;
   所有变量的初始值；

2. each value after the loop body finishes;
   每次循环体结束后的变量值；

3. the condition that finally becomes false.
   最终让循环停止的条件。

# 3. Statement Execution Count<br>语句执行次数

A **statement execution count** tells us how many times a particular statement runs.

**语句执行次数**表示某一条语句实际执行了多少次。

```java
for (int i = 3; i < 7; i++)
{
    System.out.print("*");
}
```

The loop variable takes these values:

循环变量的实际取值是：

```text
3 4 5 6
```

Therefore:

因此：

* the loop body runs `4` times;

* `System.out.print("*");` executes `4` times;

* four stars are printed.

* 循环体执行 `4` 次；

* `System.out.print("*");` 执行 `4` 次；

* 最终输出四个星号。

```text
****
```

Do not count `7`. When `i` becomes `7`, the condition `i < 7` is false, so the body does not run.

不能把 `7` 算进去。当 `i` 变成 `7` 时，`i < 7` 为假，因此不会进入循环体。

# 4. Counting a Single Loop<br>计算单层循环次数

For loops that increase or decrease by `1`, first identify:

对于每次增加或减少 `1` 的循环，先确定：

* the smallest value that enters the body;

* the largest value that enters the body.

* 能够进入循环体的最小值；

* 能够进入循环体的最大值。

Then use:

然后使用：

```text
largest value - smallest value + 1
```

## Example 1: Boundary excluded<br>例一：不包含边界

```java
for (int i = 3; i < 8; i++)
{
    System.out.println(i);
}
```

The actual values are:

实际取值为：

```text
3 4 5 6 7
```

```text
7 - 3 + 1 = 5 iterations
```

## Example 2: Boundary included<br>例二：包含边界

```java
for (int i = 3; i <= 8; i++)
{
    System.out.println(i);
}
```

The actual values are:

实际取值为：

```text
3 4 5 6 7 8
```

```text
8 - 3 + 1 = 6 iterations
```

| Loop condition     | Largest value entering the body |
| ------------------ | ------------------------------- |
| `counter < limit`  | `limit - 1`                     |
| `counter <= limit` | `limit`                         |
| `counter > limit`  | `limit + 1`                     |
| `counter >= limit` | `limit`                         |

This shortcut assumes the loop variable changes by exactly `1`.

这个快捷公式假设循环变量每次正好变化 `1`。

For a different update such as `i += 2`, list the values or calculate the step size carefully.

如果更新方式是 `i += 2` 等其他步长，应列出实际取值或单独计算。

# 5. Count the Values, Not Just the Distance<br>计算实际取值，而不是只看距离

How many times does this loop run?

下面的循环执行多少次？

```java
for (int i = 2; i <= 10; i += 2)
{
    System.out.print("*");
}
```

**Answer: Five times.**

```text
i = 2, 4, 6, 8, 10
```

The body executes once for each of those five values.

循环体会针对这五个值各执行一次。

The formula:

公式：

```text
largest - smallest + 1
```

does not directly work here because the update is `i += 2`, not `i++`.

在这里不能直接使用“最大值减最小值加一”，因为更新方式是 `i += 2`，而不是 `i++`。

A simple AP-safe strategy is to list the values:

一种可靠的 AP 做题方法是直接列出取值：

```text
2 → 4 → 6 → 8 → 10 → 12 stops
```

# 6. Fixed Nested Loops: Multiply the Counts<br>固定次数嵌套循环：次数相乘

How many stars are printed?

下面会输出多少个星号？

```java
for (int row = 0; row < 5; row++)
{
    for (int col = 0; col < 10; col++)
    {
        System.out.print("*");
    }

    System.out.println();
}
```

**Answer: `50` stars.**

外层循环：

```text
row = 0, 1, 2, 3, 4
5 iterations
```

内层循环：

```text
col = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
10 iterations
```

The inner loop runs ten times during each of the five outer iterations:

在五次外层迭代中，内层循环每次都执行十次：

```text
5 × 10 = 50
```

| Loop                    |   Iterations | Meaning                         |
| ----------------------- | -----------: | ------------------------------- |
| Outer loop<br>外层循环      |          `5` | Five rows<br>五行                 |
| Inner loop<br>内层循环      | `10` per row | Ten stars in each row<br>每行十个星号 |
| Inner statement<br>内层语句 |   `50` total | Total stars<br>星号总数             |

Multiplication works because the inner loop executes the same number of times for every outer iteration.

之所以能够直接相乘，是因为每次外层迭代中，内层循环的执行次数都相同。

# 7. Non-Rectangular Nested Loops: Add the Counts<br>非固定嵌套循环：逐轮相加

Consider:

观察下面的代码：

```java
int count = 0;

for (int row = 1; row <= 4; row++)
{
    for (int col = 1; col <= row; col++)
    {
        count++;
    }
}

System.out.println(count);
```

What is printed?

输出是什么？

**Answer:**

```text
10
```

The inner-loop limit depends on `row`.

内层循环的结束范围取决于 `row`。

| `row` | Inner values of `col` | Inner iterations |
| ----: | --------------------- | ---------------: |
|   `1` | `1`                   |              `1` |
|   `2` | `1, 2`                |              `2` |
|   `3` | `1, 2, 3`             |              `3` |
|   `4` | `1, 2, 3, 4`          |              `4` |

Add the counts:

把每一轮的次数相加：

```text
1 + 2 + 3 + 4 = 10
```

Do not calculate:

不能直接计算：

```text
4 × 4
```

The inner loop does not run four times during every outer iteration.

因为内层循环并不是在每次外层迭代中都执行四次。

For the pattern:

对于下面这种模式：

```text
1 + 2 + 3 + ... + n
```

the total can be calculated with:

总数可以使用：

```text
n(n + 1) / 2
```

For `n = 4`:

当 `n = 4` 时：

```text
4(4 + 1) / 2 = 10
```

# 8. Condition Checks and Body Executions Are Different<br>条件检查次数与循环体执行次数不同

Consider:

观察：

```java
for (int i = 0; i < 3; i++)
{
    System.out.println(i);
}
```

The body executes three times:

循环体执行三次：

```text
i = 0
i = 1
i = 2
```

However, the condition is checked four times:

但是，条件一共检查四次：

```text
0 < 3 → true
1 < 3 → true
2 < 3 → true
3 < 3 → false
```

| What is being counted?                 | Count |
| -------------------------------------- | ----: |
| Loop-body executions<br>循环体执行次数        |   `3` |
| `println` executions<br>`println` 执行次数 |   `3` |
| Condition evaluations<br>条件检查次数        |   `4` |
| Updates using `i++`<br>`i++` 执行次数      |   `3` |

Read the question carefully. “How many times does the loop body run?” and “How many times is the condition evaluated?” are different questions.

要仔细阅读题目。“循环体执行多少次”和“条件检查多少次”不是同一个问题。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                                    | Why it is wrong                                                                                 | Correct understanding                                                          |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Counting the excluded boundary.<br>把不包含的边界也算进去。                                            | A condition such as `i < 7` does not allow `i = 7` into the body.<br>`i < 7` 不允许 `i = 7` 进入循环体。 | List only the values that make the condition true.<br>只列出让条件为真的变量值。            |
| Using the shortcut formula when the step is not `1`.<br>步长不是 `1` 时仍直接套公式。                  | The loop may skip values.<br>循环可能会跳过一些数值。                                                       | List the values or account for the step size.<br>列出实际取值或考虑步长。                  |
| Multiplying all nested-loop limits.<br>直接把嵌套循环的边界数字相乘。                                     | The limits may not equal the iteration counts.<br>边界值不一定就是迭代次数。                                 | Calculate each loop’s actual iterations first.<br>先分别计算实际迭代次数。                 |
| Multiplying a non-rectangular nested loop.<br>对变化的内层循环直接相乘。                                | The inner-loop count changes with the outer variable.<br>内层次数会随着外层变量变化。                         | Add the inner counts for each outer iteration.<br>把每轮内层次数相加。                   |
| Confusing body executions with condition checks.<br>混淆循环体执行次数与条件检查次数。                      | The final false condition is checked but does not run the body.<br>最后一次假条件会被检查，但不会执行循环体。        | Identify the exact statement the question asks you to count.<br>先确定题目要求统计哪条语句。 |
| Predicting division by zero without applying short-circuit evaluation.<br>没有考虑短路求值就判断会除以零。 | The unsafe right side may be skipped.<br>右边的危险表达式可能不会执行。                                        | Evaluate the left side of `&&` first.<br>先计算 `&&` 左边。                          |

# 10. Debugging Example<br>调试例子

The following condition is intended to avoid division by zero:

下面的条件原本想避免除以零：

```java
int numerator = 8;
int denominator = 1;

while (numerator / denominator >= 0 && denominator != 0)
{
    numerator++;
    denominator--;
}
```

After one iteration:

第一次迭代后：

```text
numerator = 9
denominator = 0
```

Java returns to the condition and evaluates the left side first:

Java 返回条件后，会先计算左边：

```java
numerator / denominator >= 0
```

This attempts to divide by zero and causes an `ArithmeticException`.

这会尝试除以零，并导致 `ArithmeticException`。

This is a **runtime error**.

这属于**运行时错误**。

### Fixed code

```java
int numerator = 8;
int denominator = 1;

while (denominator != 0 && numerator / denominator >= 0)
{
    numerator++;
    denominator--;
}
```

Now the safety check appears first.

现在，安全检查位于前面。

When `denominator` becomes `0`:

当 `denominator` 变成 `0` 时：

```text
denominator != 0 → false
```

Short-circuit evaluation skips the division.

短路求值会跳过除法运算。

| Version       | First condition checked        | Result when `denominator` is `0` |
| ------------- | ------------------------------ | -------------------------------- |
| Unsafe<br>不安全 | `numerator / denominator >= 0` | Runtime error<br>运行时错误           |
| Safe<br>安全    | `denominator != 0`             | Right side is skipped<br>跳过右边    |

# 11. Mini Practice<br>小练习

## Practice 1: Trace Final Values<br>练习一：追踪最终值

What are the final values?

最终值是什么？

```java
int a = 1;
int b = 6;

while (a < b)
{
    a += 2;
    b--;
}
```

**Answer:**

```text
a = 5
b = 4
```

Trace:

```text
a = 1, b = 6 → condition true
a = 3, b = 5 → condition true
a = 5, b = 4 → condition false
```

---

## Practice 2: Count a Single Loop<br>练习二：计算单层循环次数

How many times is `"AP"` printed?

`"AP"` 会输出多少次？

```java
for (int i = 4; i < 9; i++)
{
    System.out.println("AP");
}
```

**Answer: Five times.**

```text
i = 4, 5, 6, 7, 8
```

---

## Practice 3: Count with a Different Step<br>练习三：计算不同步长

How many times does the body run?

循环体执行多少次？

```java
for (int i = 1; i <= 10; i += 3)
{
    System.out.println(i);
}
```

**Answer: Four times.**

```text
i = 1, 4, 7, 10
```

---

## Practice 4: Rectangular Nested Loop<br>练习四：固定次数嵌套循环

How many times does `count++` execute?

`count++` 会执行多少次？

```java
int count = 0;

for (int i = 2; i < 8; i++)
{
    for (int j = 1; j <= 5; j++)
    {
        count++;
    }
}
```

**Answer: `30` times.**

```text
Outer loop: 2, 3, 4, 5, 6, 7 → 6 iterations
Inner loop: 1, 2, 3, 4, 5 → 5 iterations

6 × 5 = 30
```

---

## Practice 5: Non-Rectangular Nested Loop<br>练习五：非固定次数嵌套循环

What is the final value of `count`?

`count` 的最终值是多少？

```java
int count = 0;

for (int i = 1; i <= 3; i++)
{
    for (int j = 0; j < i; j++)
    {
        count++;
    }
}
```

**Answer: `6`**

The inner loop runs:

内层循环分别执行：

```text
1 time when i = 1
2 times when i = 2
3 times when i = 3
```

```text
1 + 2 + 3 = 6
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.12 question, check:

做 2.12 的题目之前，检查：

* What exact statement are you being asked to count?
  题目要求统计的是哪一条语句？

* What are all variables’ starting values?
  所有变量的初始值是什么？

* Should you create a trace table?
  是否应该创建追踪表？

* What values actually enter the loop body?
  哪些变量值真正进入了循环体？

* Is the ending boundary included or excluded?
  是否包含结束边界？

* Does the loop update by `1`, or does it use another step size?
  循环每次变化 `1`，还是使用其他步长？

* Is the largest valid value `limit` or `limit - 1`?
  最大合法值是 `limit` 还是 `limit - 1`？

* Are you counting body executions or condition checks?
  你统计的是循环体执行次数，还是条件检查次数？

* Does the final false condition add another body execution?
  最后一次假条件是否会增加一次循环体执行？

* For fixed nested loops, did you calculate both iteration counts before multiplying?
  对于固定次数的嵌套循环，是否先分别计算次数再相乘？

* Does the inner-loop count remain the same for every outer iteration?
  每次外层迭代中，内层循环次数是否相同？

* If the inner count changes, did you add the counts instead of multiplying?
  如果内层次数发生变化，是否逐轮相加而不是直接相乘？

* Could the natural-number sum formula apply?
  是否可以使用自然数求和公式？

* Does short-circuit evaluation skip an unsafe expression?
  短路求值是否会跳过危险表达式？

* Is a division-by-zero check placed before the division?
  除零检查是否位于除法表达式之前？

* Have you checked the final values after the loop stops?
  循环停止后，是否检查了变量的最终值？
