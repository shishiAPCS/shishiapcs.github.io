---
title: "AP CSA 2.7：while 循环"
layout: post
categories: media
render_with_liquid: false
---

Selection statements choose which code runs. A `while` loop repeatedly runs a block of code while its Boolean condition remains `true`.

选择语句决定哪些代码会执行，而 `while` 循环会在布尔条件保持为 `true` 时，不断重复执行一段代码。

> **A `while` loop checks its condition before every iteration. It repeats while the condition is true and stops when the condition becomes false.**
> **`while` 循环会在每次迭代前检查条件：条件为真就继续重复，条件变为假就停止。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.7 while 循环<br>While Loops

## 循环行为<br>Loop Behavior

* 循环也叫重复或迭代<br>A loop is also called repetition or iteration
* 条件为真时执行循环体<br>The body runs while the condition is true
* 条件为假时退出循环<br>The loop stops when the condition is false
* 循环体可能执行零次或多次<br>The body may run zero or more times

## 三个核心步骤<br>Three Essential Steps

* 初始化循环变量<br>Initialize the loop variable
* 检查循环条件<br>Test the loop condition
* 更新循环变量<br>Update the loop variable

## 执行顺序<br>Execution Order

* 每次迭代前先检查条件<br>Check the condition before each iteration
* 执行循环体中的语句<br>Run the statements in the body
* 更新变量后返回条件<br>Return to the condition after the update

## 代码追踪<br>Loop Tracing

* 记录每次迭代前后的变量值<br>Record variable values during each iteration
* 第 0 次表示进入循环前<br>Iteration 0 means before the loop
* 严格按照循环体中的语句顺序执行<br>Follow the exact statement order

## 循环边界<br>Loop Boundaries

* `<` 不包含边界值<br>`<` excludes the boundary
* `<=` 包含边界值<br>`<=` includes the boundary
* 错误边界会造成多一次或少一次<br>A wrong boundary causes an off-by-one error

## 常见错误<br>Common Errors

* 忘记更新变量导致无限循环<br>A missing update can cause an infinite loop
* 初始条件为假时循环一次也不执行<br>An initially false condition causes zero iterations
* 更新和输出顺序错误会改变结果<br>The order of updating and printing changes the output

## AP 考试重点<br>AP Exam Focus

* 预测循环输出和最终变量值<br>Predict output and final variable values
* 判断循环执行次数<br>Determine the number of iterations
* 补全正确的循环条件<br>Choose the correct loop condition
* 识别无限循环和边界错误<br>Identify infinite loops and off-by-one errors

</script>
</div>
</div>

# 1. Trace the Loop One Iteration at a Time<br>逐次追踪循环

What is printed?

下面的代码会输出什么？

```java
int n = 35;
int result = 1;

while (n > 0)
{
    int digit = n % 10;
    result *= digit;
    n /= 10;
}

System.out.println(result);
```

**Answer:**

```text
15
```

Trace each iteration:

逐次追踪：

| Stage                         |  `n` | `digit` | `result` |
| ----------------------------- | ---: | ------: | -------: |
| Before the loop<br>进入循环前      | `35` |       — |      `1` |
| After iteration 1<br>第 1 次迭代后 |  `3` |     `5` |      `5` |
| After iteration 2<br>第 2 次迭代后 |  `0` |     `3` |     `15` |

During the first iteration:

第一次迭代：

```text
digit = 35 % 10 → 5
result = 1 * 5 → 5
n = 35 / 10 → 3
```

During the second iteration:

第二次迭代：

```text
digit = 3 % 10 → 3
result = 5 * 3 → 15
n = 3 / 10 → 0
```

Java checks `n > 0` again. Because `0 > 0` is false, the loop stops.

Java 再次检查 `n > 0`。因为 `0 > 0` 为假，所以循环停止。

# 2. How a `while` Loop Works<br>`while` 循环如何执行

The general form of a `while` loop is:

`while` 循环的基本结构是：

```java
while (booleanExpression)
{
    statements;
}
```

Java follows this order:

Java 会按照下面的顺序执行：

1. Evaluate the Boolean expression.
   计算布尔表达式。

2. If it is `false`, skip the loop body.
   如果结果为 `false`，跳过循环体。

3. If it is `true`, execute the loop body.
   如果结果为 `true`，执行循环体。

4. Return to the condition and check it again.
   返回循环条件，再次进行检查。

5. Continue until the condition becomes `false`.
   不断重复，直到条件变为 `false`。

A complete execution of the loop body is called an **iteration**.

循环体每完整执行一次，就叫作一次 **iteration（迭代）**。

## `if` compared with `while`<br>`if` 与 `while` 的区别

| Statement | What happens when the condition is true?                       | Possible executions         |
| --------- | -------------------------------------------------------------- | --------------------------- |
| `if`      | Runs the body once.<br>执行一次代码块。                                | Zero or one time<br>零次或一次   |
| `while`   | Runs the body and checks the condition again.<br>执行代码块后再次检查条件。 | Zero or more times<br>零次或多次 |

# 3. The Three Essential Parts of a Loop<br>循环的三个核心部分

A counter-controlled loop usually has three parts.

计数控制循环通常包含三个部分。

```java
int count = 1;          // 1. initialize

while (count <= 5)      // 2. test
{
    System.out.println(count);
    count++;            // 3. update
}
```

```text
1
2
3
4
5
```

## 1. Initialize the loop variable<br>初始化循环变量

```java
int count = 1;
```

This gives the loop its starting value.

这一步设置循环变量的初始值。

## 2. Test the loop variable<br>检查循环变量

```java
count <= 5
```

This decides whether another iteration should run.

这个条件决定是否继续执行下一次迭代。

## 3. Update the loop variable<br>更新循环变量

```java
count++;
```

This changes the variable so that the loop moves toward its stopping condition.

这一步改变循环变量，让循环逐渐接近停止条件。

The update does not have to use `++`.

更新操作不一定必须使用 `++`。

```java
count += 2;
count--;
count *= 2;
n /= 10;
```

Any update can work if it eventually makes the loop condition false.

只要能够让循环条件最终变为假，其他更新方式也可以使用。

# 4. The Condition Is Checked Before the Body<br>先检查条件，再执行循环体

A `while` loop checks its condition before every iteration, including the first one.

`while` 循环会在每次迭代之前检查条件，包括第一次迭代。

```java
int i = 10;

while (i < 10)
{
    System.out.println(i);
    i++;
}

System.out.println("Done");
```

**Output:**

```text
Done
```

The first condition is:

第一次检查的条件是：

```text
10 < 10 → false
```

The loop body never runs.

循环体一次也不会执行。

> A `while` loop may execute zero times.

> `while` 循环可能一次也不执行。

Do not assume that every loop runs at least once.

不要认为每个循环至少会执行一次。

# 5. Use a Trace Table<br>使用追踪表

Consider:

观察下面的代码：

```java
int count = 1;

while (count <= 10)
{
    count *= 2;
}

count -= 10;
```

What is the final value of `count`?

`count` 的最终值是多少？

**Answer: `6`**

| Iteration | Value before the condition | Condition            | Value after the body |
| --------: | -------------------------: | -------------------- | -------------------: |
|       `0` |                        `1` | `1 <= 10` → `true`   |                  `2` |
|       `1` |                        `2` | `2 <= 10` → `true`   |                  `4` |
|       `2` |                        `4` | `4 <= 10` → `true`   |                  `8` |
|       `3` |                        `8` | `8 <= 10` → `true`   |                 `16` |
|       `4` |                       `16` | `16 <= 10` → `false` |   Loop stops<br>循环停止 |

After the loop:

循环结束后：

```text
count = 16 - 10
count = 6
```

In a trace table, **iteration 0** usually represents the state before the loop body has executed.

在追踪表中，**第 0 次迭代**通常表示循环体尚未执行时的初始状态。

# 6. Statement Order Changes the Output<br>语句顺序会改变输出

What is printed?

下面的代码会输出什么？

```java
int x = -5;

while (x < 0)
{
    x++;
    System.out.print(x + " ");
}
```

**Answer:**

```text
-4 -3 -2 -1 0
```

The value changes before it is printed.

变量先发生变化，然后才输出。

First iteration:

第一次迭代：

```text
x starts at -5
x++ changes x to -4
-4 is printed
```

The final iteration begins when `x` is `-1`:

最后一次迭代开始时，`x` 为 `-1`：

```text
-1 < 0 → true
x++ changes x to 0
0 is printed
```

After that:

之后：

```text
0 < 0 → false
```

The loop stops.

循环停止。

Compare this with printing before updating:

与先输出、再更新进行比较：

```java
int x = -5;

while (x < 0)
{
    System.out.print(x + " ");
    x++;
}
```

This version prints:

这个版本会输出：

```text
-5 -4 -3 -2 -1
```

Always follow the exact order of statements inside the loop body.

必须严格按照循环体中语句的顺序进行追踪。

# 7. Choosing the Correct Loop Boundary<br>选择正确的循环边界

Suppose the loop should print:

假设循环需要输出：

```text
0 2 4 6 8 10
```

A correct loop is:

正确的循环是：

```java
int count = 0;

while (count <= 10)
{
    System.out.print(count + " ");
    count += 2;
}
```

The condition uses `<=` because `10` must be included.

条件使用 `<=`，因为需要包含 `10`。

If the condition were:

如果条件写成：

```java
count < 10
```

the output would stop at `8`.

输出会在 `8` 结束。

```text
0 2 4 6 8
```

This is an **off-by-one error**: the loop runs one time too many or one time too few.

这叫作 **off-by-one error（差一错误）**：循环比预期多执行一次或少执行一次。

| Intended values  | Correct condition |
| ---------------- | ----------------- |
| `0` through `9`  | `count < 10`      |
| `0` through `10` | `count <= 10`     |
| `1` through `8`  | `count <= 8`      |
| Values below `0` | `value < 0`       |

# 8. Infinite Loops<br>无限循环

Consider:

观察下面的代码：

```java
int i = 0;

while (i < 10)
{
    System.out.println(i);
}
```

This loop never stops.

这个循环永远不会停止。

`i` begins at `0`, and nothing inside the loop changes it.

`i` 的初始值是 `0`，但循环体中没有任何语句改变它。

Therefore:

因此：

```text
i < 10
```

remains true forever.

会永远保持为真。

This is an **infinite loop**.

这就是**无限循环**。

### Fixed code

```java
int i = 0;

while (i < 10)
{
    System.out.println(i);
    i++;
}
```

Now `i` eventually becomes `10`, making the condition false.

现在 `i` 最终会变成 `10`，从而使循环条件变为假。

An infinite loop is usually a **logic error**: the code compiles and runs, but it does not terminate as intended.

无限循环通常属于**逻辑错误**：代码可以编译和运行，但不会按照预期结束。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                          | Why it is wrong                                                                    | Correct understanding                                                                 |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Forgetting to update the loop variable.<br>忘记更新循环变量。             | The condition may remain true forever.<br>条件可能永远为真。                                | Include an update that moves the loop toward stopping.<br>加入能够让循环逐渐结束的更新。             |
| Using `<` when the boundary must be included.<br>需要包含边界时却使用 `<`。 | The final required value is skipped.<br>最后一个需要的值会被跳过。                              | Use `<=` when the boundary should be included.<br>需要包含边界时使用 `<=`。                     |
| Assuming the body always runs once.<br>认为循环体一定会执行一次。             | The initial condition may already be false.<br>初始条件可能已经为假。                         | Check the condition before the first iteration.<br>第一次迭代前先检查条件。                       |
| Updating the variable in the wrong direction.<br>变量更新方向错误。       | The loop may move away from its stopping condition.<br>循环可能越来越远离停止条件。              | Check whether the update will eventually make the condition false.<br>确认更新最终能够让条件变为假。 |
| Ignoring the order of update and output.<br>忽略更新与输出的顺序。          | Printing before or after an update produces different results.<br>先输出还是先更新会产生不同结果。 | Trace each statement in its written order.<br>严格按照代码顺序追踪。                             |
| Updating a different variable.<br>更新了错误的变量。                      | The variable used in the condition may never change.<br>条件中的变量可能始终不变。              | Identify the variable that controls the loop.<br>找出真正控制循环的变量。                         |

# 10. Debugging Example<br>调试例子

The following loop is intended to print the integers from `1` through `8`.

下面的循环原本应该输出从 `1` 到 `8` 的所有整数。

```java
int count = 1;

while (count < 8)
{
    System.out.println(count);
}
```

There are two problems.

这里有两个问题。

## Problem 1: The variable is never updated<br>问题一：变量没有更新

`count` remains `1`, so `count < 8` remains true forever.

`count` 一直是 `1`，因此 `count < 8` 永远为真。

This causes an infinite loop.

这会导致无限循环。

## Problem 2: The condition excludes `8`<br>问题二：条件不包含 `8`

Even after adding an update, `count < 8` would print only `1` through `7`.

即使加入更新，`count < 8` 也只会输出 `1` 到 `7`。

### Fixed code

```java
int count = 1;

while (count <= 8)
{
    System.out.println(count);
    count++;
}
```

```text
1
2
3
4
5
6
7
8
```

| Problem           | Error type                            | Fix                                                         |
| ----------------- | ------------------------------------- | ----------------------------------------------------------- |
| Missing `count++` | Infinite-loop logic error<br>无限循环逻辑错误 | Update `count` inside the loop.<br>在循环中更新 `count`。          |
| Using `count < 8` | Off-by-one logic error<br>差一逻辑错误      | Use `count <= 8` to include `8`.<br>使用 `count <= 8` 包含 `8`。 |

# 11. Mini Practice<br>小练习

## Practice 1: Predict the Output<br>练习一：预测输出

What is printed?

下面的代码会输出什么？

```java
int count = 2;

while (count <= 8)
{
    System.out.print(count + " ");
    count += 3;
}
```

**Answer:**

```text
2 5 8
```

The values are:

变量依次为：

```text
2 → 5 → 8 → 11
```

When `count` becomes `11`, the condition is false.

当 `count` 变成 `11` 时，循环条件为假。

---

## Practice 2: Final Variable Value<br>练习二：最终变量值

What is the final value of `x`?

`x` 的最终值是多少？

```java
int x = 3;

while (x < 20)
{
    x *= 2;
}
```

**Answer: `24`**

```text
3 → 6 → 12 → 24
```

The loop stops after `x` becomes `24` because `24 < 20` is false.

当 `x` 变成 `24` 后，`24 < 20` 为假，因此循环停止。

---

## Practice 3: Choose the Loop Header<br>练习三：选择循环条件

The following code should print the even integers from `0` through `8`.

下面的代码应该输出从 `0` 到 `8` 的所有偶数。

```java
int count = 0;

/* missing loop header */
{
    if (count % 2 == 0)
    {
        System.out.println(count);
    }

    count++;
}
```

Which loop header works?

哪个循环条件能够正确实现目标？

A. `while (count > 0)`
B. `while (count >= 8)`
C. `while (count < 8)`
D. `while (count < 10)`
E. `while (count <= 10)`

**Answer: D**

With `count < 10`, the loop checks the values `0` through `9`. The `if` statement prints only:

使用 `count < 10` 时，循环会检查 `0` 到 `9`。其中 `if` 只会输出：

```text
0 2 4 6 8
```

---

## Practice 4: Zero Iterations<br>练习四：零次迭代

What is printed?

下面的代码会输出什么？

```java
int value = 5;

while (value < 5)
{
    System.out.println(value);
    value++;
}

System.out.println("End");
```

**Answer:**

```text
End
```

The initial condition is false, so the loop body does not run.

初始条件为假，因此循环体一次也不会执行。

---

## Practice 5: Fix the Infinite Loop<br>练习五：修复无限循环

Why does this loop never stop?

为什么下面的循环永远不会停止？

```java
int number = 10;

while (number > 0)
{
    System.out.println(number);
    number++;
}
```

**Answer:** The update moves `number` in the wrong direction.

**答案：**更新操作让 `number` 朝错误方向变化。

`number` becomes larger, so `number > 0` remains true.

`number` 变得越来越大，因此 `number > 0` 始终为真。

### Fixed code

```java
int number = 10;

while (number > 0)
{
    System.out.println(number);
    number--;
}
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.7 question, check:

做 2.7 的题目之前，检查：

* What is the loop variable’s initial value?
  循环变量的初始值是什么？

* Is the condition checked before the first iteration?
  第一次迭代前是否会先检查条件？

* Is the initial condition already false?
  初始条件是否已经为假？

* Which statements are inside the loop body?
  哪些语句位于循环体中？

* In what order do the body statements execute?
  循环体中的语句按照什么顺序执行？

* How is the loop variable updated?
  循环变量如何更新？

* Does the update move the loop toward stopping?
  更新操作是否让循环逐渐接近停止？

* What is the variable value after each iteration?
  每次迭代后，变量的值是多少？

* When does the condition first become false?
  条件第一次变为假是什么时候？

* Should the boundary value be included?
  是否应该包含边界值？

* Should the condition use `<` or `<=`?
  条件应该使用 `<` 还是 `<=`？

* Could the loop run one time too many or one time too few?
  循环是否可能多执行一次或少执行一次？

* Could the loop become infinite?
  循环是否可能变成无限循环？

* What statements run after the loop ends?
  循环结束后还会执行哪些语句？
