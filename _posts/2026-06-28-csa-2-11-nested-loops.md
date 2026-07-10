---
title: "AP CSA 2.11：嵌套循环"
layout: post
categories: media
render_with_liquid: false
---

A nested loop places one loop inside another. For each iteration of the outer loop, the inner loop starts again and completes all of its iterations.

嵌套循环是把一个循环写在另一个循环内部。外层循环每执行一次，内层循环都会重新开始，并完成自己的全部迭代。

> **The outer loop cannot continue until the inner loop finishes.**
> **内层循环完成全部迭代后，外层循环才能继续下一次迭代。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.11 嵌套循环<br>Nested Iteration

## 基本结构<br>Basic Structure

* 一个循环写在另一个循环内部<br>One loop appears inside another loop
* 外层循环控制整体重复次数<br>The outer loop controls the larger repetition
* 内层循环完成更小的重复任务<br>The inner loop completes the repeated inner task

## 执行顺序<br>Execution Order

* 外层循环先开始一次迭代<br>The outer loop begins one iteration
* 内层循环从初始值重新开始<br>The inner loop restarts from its initial value
* 内层循环全部结束后，外层才继续<br>The outer loop continues only after the inner loop finishes

## 行与列<br>Rows and Columns

* 外层循环通常控制行<br>The outer loop usually controls rows
* 内层循环通常控制每行的列<br>The inner loop usually controls columns
* `print()` 保持在同一行<br>`print()` stays on the current line
* `println()` 开始新的一行<br>`println()` starts a new line

## 总执行次数<br>Total Iterations

* 固定次数时：外层次数乘以内层次数<br>For fixed bounds: outer iterations times inner iterations
* `3` 行、`5` 列会执行内层语句 `15` 次<br>Three rows and five columns execute the inner statement 15 times

## 变量追踪<br>Tracing Variables

* 固定外层变量，完整追踪内层变量<br>Hold the outer value and trace every inner value
* 内层结束后，再更新外层变量<br>Update the outer variable after the inner loop finishes
* 每次外层迭代都会重新初始化内层变量<br>The inner variable is reinitialized for every outer iteration

## 循环边界<br>Loop Boundaries

* `<` 不包含结束值<br>`<` excludes the ending value
* `<=` 包含结束值<br>`<=` includes the ending value
* 每个循环都要单独计算迭代次数<br>Calculate each loop’s iterations separately

## AP 考试陷阱<br>Common AP Traps

* 只执行一次内层循环<br>Running the inner loop only once
* 忘记内层循环会重新开始<br>Forgetting that the inner loop restarts
* 混淆外层循环与内层循环的次数<br>Confusing outer and inner iteration counts
* 把 `println()` 放在错误的位置<br>Placing `println()` in the wrong location

</script>
</div>
</div>

# 1. Finish the Inner Loop First<br>先完成内层循环

What is printed?

下面的代码会输出什么？

```java
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        System.out.print(row + "-" + col + " ");
    }

    System.out.println();
}
```

**Answer:**

```text
1-1 1-2 1-3 
2-1 2-2 2-3
```

Trace the execution in this order:

按照下面的顺序追踪：

```text
row = 1
    col = 1
    col = 2
    col = 3

row = 2
    col = 1
    col = 2
    col = 3
```

When `row` is `1`, the inner loop completes all three iterations before `row` changes to `2`.

当 `row` 为 `1` 时，内层循环会先完成三次迭代，然后 `row` 才会变成 `2`。

The inner variable `col` is initialized to `1` again for the second outer iteration.

外层循环开始第二次迭代时，内层变量 `col` 会重新初始化为 `1`。

# 2. What Is a Nested Loop?<br>什么是嵌套循环？

A **nested loop** is a loop placed inside the body of another loop.

**嵌套循环**是写在另一个循环体内部的循环。

```java
for (int outer = 1; outer <= 3; outer++)
{
    for (int inner = 1; inner <= 2; inner++)
    {
        statements;
    }
}
```

The first loop is the **outer loop**.

第一个循环叫作**外层循环**。

The loop inside it is the **inner loop**.

写在里面的循环叫作**内层循环**。

Java follows this pattern:

Java 会按照下面的模式执行：

1. Begin one outer-loop iteration.
   开始一次外层循环迭代。

2. Initialize the inner-loop variable.
   初始化内层循环变量。

3. Complete every inner-loop iteration.
   完成内层循环的全部迭代。

4. Update the outer-loop variable.
   更新外层循环变量。

5. Restart the inner loop for the next outer iteration.
   在下一次外层迭代中重新开始内层循环。

# 3. Use Nested Loops to Print Rows and Columns<br>使用嵌套循环输出行与列

What does the following code print?

下面的代码会输出什么？

```java
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 5; col++)
    {
        System.out.print("*");
    }

    System.out.println();
}
```

**Answer:**

```text
*****
*****
*****
```

The outer loop runs three times, so the output contains three rows.

外层循环执行三次，因此输出包含三行。

For each row, the inner loop prints five stars.

在每一行中，内层循环会输出五个星号。

| Loop               | Variable values       | Controls                     |
| ------------------ | --------------------- | ---------------------------- |
| Outer loop<br>外层循环 | `row = 1, 2, 3`       | Number of rows<br>行数         |
| Inner loop<br>内层循环 | `col = 1, 2, 3, 4, 5` | Stars in each row<br>每行的星号数量 |

The inner loop does not print all fifteen stars at once. It prints five stars, restarts, and then prints five more for the next row.

内层循环不是一次性输出十五个星号。它会先输出五个，然后重新开始，为下一行再输出五个。

# 4. Calculate the Total Number of Executions<br>计算总执行次数

How many times is `"X"` printed?

`"X"` 会被输出多少次？

```java
for (int i = 0; i < 4; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        System.out.print("X");
    }
}
```

**Answer: `12` times.**

**答案：`12` 次。**

The outer loop values are:

外层循环变量的值为：

```text
0 1 2 3
```

So the outer loop runs four times.

因此，外层循环执行四次。

The inner loop values are:

内层循环变量的值为：

```text
1 2 3
```

So the inner loop runs three times for each outer iteration.

因此，在每次外层迭代中，内层循环执行三次。

```text
4 outer iterations × 3 inner iterations = 12 executions
```

When the inner loop has the same number of iterations every time, use:

当内层循环每次的迭代次数相同时，可以使用：

```text
total executions = outer iterations × inner iterations
```

Do not multiply the ending values automatically. First determine the actual number of iterations in each loop.

不要直接把两个结束值相乘。应该先分别判断两个循环实际执行多少次。

# 5. Track Both Loop Variables<br>同时追踪两个循环变量

What is printed?

下面的代码会输出什么？

```java
for (int x = 2; x <= 3; x++)
{
    for (int y = 4; y <= 6; y++)
    {
        System.out.print(x + y + " ");
    }
}
```

**Answer:**

```text
6 7 8 7 8 9
```

Trace one outer value at a time.

每次固定一个外层变量的值进行追踪。

## When `x` is `2`<br>当 `x` 为 `2`

```text
y = 4 → 2 + 4 = 6
y = 5 → 2 + 5 = 7
y = 6 → 2 + 6 = 8
```

## When `x` is `3`<br>当 `x` 为 `3`

The inner loop restarts at `y = 4`.

内层循环从 `y = 4` 重新开始。

```text
y = 4 → 3 + 4 = 7
y = 5 → 3 + 5 = 8
y = 6 → 3 + 6 = 9
```

A useful tracing strategy is:

一种实用的追踪方法是：

1. Write the current outer-loop value.
   写下当前外层循环变量的值。

2. List every inner-loop value.
   列出内层循环变量的全部取值。

3. Evaluate the loop body for each pair.
   对每一组变量值执行循环体。

4. Change the outer value only after the inner loop finishes.
   只有内层循环结束后，才改变外层变量。

# 6. `print()` and `println()` Create Different Patterns<br>`print()` 与 `println()` 会产生不同图案

Consider this version:

观察下面的代码：

```java
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        System.out.print("*");
    }

    System.out.println();
}
```

It prints:

输出为：

```text
***
***
```

`print()` is inside the inner loop, so the stars remain on the same line.

`print()` 位于内层循环中，因此星号会留在同一行。

`println()` is after the inner loop, so it starts a new line only after the row is complete.

`println()` 位于内层循环之后，因此只有一整行输出完成后才会换行。

Now move `println()` inside the inner loop:

现在把 `println()` 移入内层循环：

```java
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        System.out.println("*");
    }
}
```

The output becomes:

输出会变成：

```text
*
*
*
*
*
*
```

The loops still execute six times, but the output pattern changes because the printing statement changed.

循环仍然执行六次，但由于输出语句发生变化，最终图案也不同。

# 7. Check Each Loop Boundary Separately<br>分别检查每个循环的边界

How many rows and stars per row are printed?

下面的代码会输出多少行？每行有多少个星号？

```java
for (int i = 1; i < 7; i++)
{
    for (int j = 1; j <= 5; j++)
    {
        System.out.print("*");
    }

    System.out.println();
}
```

**Answer: Six rows with five stars per row.**

**答案：六行，每行五个星号。**

The outer loop uses:

外层循环使用：

```java
i = 1; i < 7; i++
```

Its values are:

取值为：

```text
1 2 3 4 5 6
```

The inner loop uses:

内层循环使用：

```java
j = 1; j <= 5; j++
```

Its values are:

取值为：

```text
1 2 3 4 5
```

| Condition       | Values included | Iterations |
| --------------- | --------------- | ---------: |
| `i = 1; i < 7`  | `1` through `6` |        `6` |
| `j = 1; j <= 5` | `1` through `5` |        `5` |

The total number of stars is:

星号总数为：

```text
6 × 5 = 30
```

The `<` and `<=` operators belong to different loops and must be analyzed separately.

`<` 和 `<=` 分别属于不同的循环，必须单独分析。

# 8. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                    | Why it is wrong                                                                                | Correct understanding                                                                     |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Running the inner loop only once.<br>只执行一次内层循环。                            | The inner loop restarts during every outer iteration.<br>每次外层迭代都会重新执行内层循环。                     | Trace the full inner loop for every outer value.<br>对每个外层变量值完整追踪内层循环。                     |
| Updating the outer variable after each inner iteration.<br>每次内层迭代后就更新外层变量。 | The inner loop must finish before the outer loop continues.<br>内层循环必须先全部结束。                    | Keep the outer value fixed while tracing the inner loop.<br>追踪内层循环时，外层变量保持不变。             |
| Multiplying the ending values.<br>直接把两个结束值相乘。                              | A loop may start somewhere other than `1` or exclude its boundary.<br>循环可能不从 `1` 开始，也可能不包含结束值。 | Calculate both iteration counts before multiplying.<br>先分别计算两个循环的迭代次数。                    |
| Forgetting that the inner variable restarts.<br>忘记内层变量会重新初始化。              | The inner initialization runs once for every outer iteration.<br>每次外层迭代都会执行内层初始化。              | Return the inner variable to its starting value.<br>进入下一次外层迭代时，内层变量回到初始值。                 |
| Putting `println()` inside the inner loop.<br>把 `println()` 放在内层循环中。       | Every inner iteration starts a new line.<br>每次内层迭代都会换行。                                        | Put `println()` after the inner loop to end one completed row.<br>需要完成一行后再换行时，把它写在内层循环之后。 |
| Confusing which loop controls rows.<br>混淆哪个循环控制行数。                         | The newline normally occurs after the inner loop finishes.<br>通常内层循环结束后才换行。                    | The outer loop normally controls the number of completed rows.<br>外层循环通常控制完整行数。           |

# 9. Debugging Example<br>调试例子

The following code is supposed to print three rows with four stars in each row:

下面的代码原本应该输出三行，每行四个星号：

```text
****
****
****
```

Buggy code:

错误代码：

```java
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 4; col++)
    {
        System.out.println("*");
    }
}
```

Actual output:

实际输出：

```text
*
*
*
*
*
*
*
*
*
*
*
*
```

The loops run the correct number of times:

两个循环的执行次数是正确的：

```text
3 × 4 = 12
```

The problem is the location of `println()`.

问题在于 `println()` 的位置。

`println()` starts a new line after every star, so the result is twelve separate lines.

`println()` 会在每个星号后换行，因此结果变成十二行。

### Fixed code

```java
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 4; col++)
    {
        System.out.print("*");
    }

    System.out.println();
}
```

| Problem                                                             | Error type                         | Fix                                                               |
| ------------------------------------------------------------------- | ---------------------------------- | ----------------------------------------------------------------- |
| `println("*")` is inside the inner loop.<br>`println("*")` 位于内层循环中。 | Logic error<br>逻辑错误                | Use `print("*")` inside the inner loop.<br>在内层循环中使用 `print("*")`。 |
| No separate newline after one row.<br>一行完成后没有单独换行。                  | Incorrect output pattern<br>输出图案错误 | Add `println()` after the inner loop.<br>在内层循环后添加 `println()`。    |

The code compiles and runs, but the output pattern is incorrect. Therefore, this is a logic error.

代码能够编译和运行，但输出图案错误，因此属于逻辑错误。

# 10. Mini Practice<br>小练习

## Practice 1: Predict the Pattern<br>练习一：预测图案

What is printed?

下面的代码会输出什么？

```java
for (int row = 0; row < 2; row++)
{
    for (int col = 0; col < 4; col++)
    {
        System.out.print("#");
    }

    System.out.println();
}
```

**Answer:**

```text
####
####
```

The outer loop creates two rows. The inner loop prints four symbols in each row.

外层循环创建两行，内层循环在每行输出四个符号。

---

## Practice 2: Count the Executions<br>练习二：计算执行次数

How many times does `count++` execute?

`count++` 会执行多少次？

```java
int count = 0;

for (int i = 2; i <= 5; i++)
{
    for (int j = 0; j < 3; j++)
    {
        count++;
    }
}
```

**Answer: `12` times.**

**答案：`12` 次。**

The outer values are:

外层变量取值为：

```text
2 3 4 5
```

That is four iterations.

共四次迭代。

The inner loop runs three times for each outer iteration:

每次外层迭代中，内层循环执行三次：

```text
4 × 3 = 12
```

---

## Practice 3: Trace the Variable Pairs<br>练习三：追踪变量组合

What is printed?

下面的代码会输出什么？

```java
for (int a = 1; a <= 2; a++)
{
    for (int b = 2; b <= 3; b++)
    {
        System.out.print(a + "," + b + " ");
    }
}
```

**Answer:**

```text
1,2 1,3 2,2 2,3
```

The inner variable returns to `2` when the second outer iteration begins.

第二次外层迭代开始时，内层变量会重新回到 `2`。

---

## Practice 4: Rows and Columns<br>练习四：行与列

Which loop headers print five rows with three stars in each row?

下面哪组循环头会输出五行，每行三个星号？

A.

```java
for (int row = 0; row < 5; row++)
{
    for (int col = 0; col < 3; col++)
```

B.

```java
for (int row = 0; row < 3; row++)
{
    for (int col = 0; col < 5; col++)
```

C.

```java
for (int row = 1; row < 5; row++)
{
    for (int col = 1; col <= 3; col++)
```

**Answer: A**

The outer loop runs five times, and the inner loop runs three times per row.

外层循环执行五次，内层循环在每一行中执行三次。

---

## Practice 5: Fix the Newline<br>练习五：修正换行位置

The following code should print two rows containing `"ABC"`:

下面的代码应该输出两行 `"ABC"`：

```java
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        System.out.println((char) ('A' + col - 1));
    }
}
```

What should change?

应该如何修改？

**Answer:** Use `print()` inside the inner loop and place an empty `println()` after it.

**答案：**在内层循环中使用 `print()`，并在内层循环结束后添加空的 `println()`。

```java
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        System.out.print((char) ('A' + col - 1));
    }

    System.out.println();
}
```

```text
ABC
ABC
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.11 question, check:

做 2.11 的题目之前，检查：

* Which loop is the outer loop?
  哪个是外层循环？

* Which loop is the inner loop?
  哪个是内层循环？

* How many times does the outer loop run?
  外层循环执行多少次？

* How many times does the inner loop run during each outer iteration?
  每次外层迭代中，内层循环执行多少次？

* Does the inner loop restart from its initial value?
  内层循环是否会从初始值重新开始？

* Does the inner loop finish before the outer variable changes?
  内层循环是否在外层变量变化前完成？

* What are the exact outer-loop variable values?
  外层循环变量具体有哪些值？

* What are the exact inner-loop variable values?
  内层循环变量具体有哪些值？

* Can the total executions be found by multiplying the two iteration counts?
  是否可以通过两个循环次数相乘得到总执行次数？

* Are `<` and `<=` handled correctly in both loops?
  两个循环中的 `<` 和 `<=` 是否都被正确处理？

* Which loop controls the rows?
  哪个循环控制行数？

* Which loop controls the number of items in each row?
  哪个循环控制每行的项目数量？

* Is `print()` or `println()` being used?
  使用的是 `print()` 还是 `println()`？

* Is the newline placed after the inner loop?
  换行语句是否位于内层循环之后？

* Are you tracing one complete inner loop for every outer value?
  是否针对每一个外层变量值完整追踪了内层循环？
