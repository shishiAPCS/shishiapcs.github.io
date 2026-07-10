---
title: "AP CSA 2.9：实现选择与迭代算法"
layout: post
categories: media
render_with_liquid: false
---

Earlier lessons introduced selection statements and loops separately. In this lesson, you will combine them to calculate totals and averages, count matching values, find minimum and maximum values, test divisibility, and process individual digits.

前面的课程分别介绍了选择语句和循环。本节课将把它们组合起来，用于计算总和与平均值、统计符合条件的次数、寻找最小值和最大值、判断整除关系，以及处理整数中的各个数字。

> **A loop processes each value, while an `if` statement decides whether and how that value should affect the result.**
> **循环负责逐个处理数值，而 `if` 语句决定当前数值是否以及如何影响最终结果。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.9 实现选择与迭代算法<br>Implementing Selection and Iteration Algorithms

## 通用算法模式<br>General Algorithm Pattern

* 循环前初始化结果变量<br>Initialize result variables before the loop
* 循环逐个处理数值<br>Process values one at a time
* 使用 `if` 判断当前数值<br>Use `if` to test the current value
* 循环结束后使用结果<br>Use the result after the loop

## 累加器<br>Accumulator

* `sum = 0`：初始化总和<br>Initialize the total
* `sum += value`：累加当前值<br>Add the current value
* 平均值等于总和除以数量<br>Average equals sum divided by count
* 使用类型转换避免整数除法<br>Cast to avoid integer division

## 频率统计<br>Frequency Count

* `count = 0`：初始化计数器<br>Initialize the counter
* 条件满足时执行 `count++`<br>Increment only when the criterion is met
* 用于统计符合条件的次数<br>Counts how often a condition is true

## 最小值与最大值<br>Minimum and Maximum

* 最小值可初始化为 `Integer.MAX_VALUE`
* 最大值可初始化为 `Integer.MIN_VALUE`
* 找到更小或更大值时更新<br>Update when a better value is found

## 整除判断<br>Divisibility

* `number % divisor == 0`：能够整除<br>The number is evenly divisible
* `number % 2 == 0`：判断偶数<br>Tests whether a number is even
* 可在循环中检查多个候选数<br>A loop can test multiple possible divisors

## 数字分解<br>Processing Digits

* `number % 10`：取得最后一位<br>Gets the last digit
* `number / 10`：删除最后一位<br>Removes the last digit
* 循环直到数字变成 `0`<br>Repeat until the number becomes `0`

## AP 考试陷阱<br>Common AP Traps

* 累加器或计数器初始化错误<br>Incorrect accumulator or counter initialization
* 计数器在错误的位置更新<br>Incrementing the counter in the wrong place
* 平均值计算发生整数除法<br>Using integer division for an average
* 忘记删除已经处理的数字<br>Forgetting to remove a processed digit

</script>
</div>
</div>

# 1. Combine a Loop with Selection<br>把循环与选择结合起来

What is printed?

下面的代码会输出什么？

```java
int number = 3524;
int sum = 0;
int count = 0;

while (number > 0)
{
    int digit = number % 10;

    if (digit % 2 == 0)
    {
        sum += digit;
        count++;
    }

    number /= 10;
}

System.out.println(sum + " " + count);
```

**Answer:**

```text
6 2
```

The loop examines the digits from right to left:

循环会从右向左依次处理各位数字：

| Iteration | `number` before | `digit` | Is it even? | `sum` after | `count` after |
| --------: | --------------: | ------: | ----------- | ----------: | ------------: |
|       `1` |          `3524` |     `4` | `true`      |         `4` |           `1` |
|       `2` |           `352` |     `2` | `true`      |         `6` |           `2` |
|       `3` |            `35` |     `5` | `false`     |         `6` |           `2` |
|       `4` |             `3` |     `3` | `false`     |         `6` |           `2` |

Inside each iteration:

每次迭代中：

1. `% 10` gets the last digit.
   `% 10` 取得最后一位数字。

2. The `if` statement checks whether the digit is even.
   `if` 语句判断这个数字是否为偶数。

3. An even digit is added to `sum`, and `count` increases.
   如果是偶数，就把它加入 `sum`，并增加 `count`。

4. `/= 10` removes the digit that was just processed.
   `/= 10` 删除刚刚处理过的最后一位。

This is the main idea of Topic 2.9: a loop processes values, and selection decides which values update the result.

这就是 2.9 的核心：循环负责处理数值，选择语句决定哪些数值会更新结果。

# 2. The Standard Loop Algorithm Pattern<br>标准循环算法模式

Many AP CSA algorithms follow the same structure:

许多 AP CSA 算法都遵循相同的结构：

```java
int result = initialValue;

for (int i = startingValue; i <= endingValue; i++)
{
    if (criterion)
    {
        result = updatedValue;
    }
}

System.out.println(result);
```

The exact variable and update depend on the task:

具体使用什么变量以及如何更新，取决于题目目标：

* Add values to a sum.
  把数值加入总和。

* Count how many values satisfy a condition.
  统计有多少数值满足条件。

* Replace the current minimum or maximum.
  更新当前最小值或最大值。

The important order is:

重要的执行顺序是：

1. Initialize the result before the loop.
   在循环前初始化结果变量。

2. Visit each candidate value.
   逐个处理候选数值。

3. Test the current value when necessary.
   必要时判断当前数值。

4. Update the result inside the loop.
   在循环中更新结果。

5. Use or return the result after the loop.
   循环结束后使用或返回结果。

# 3. Accumulator Pattern: Sum and Average<br>累加器模式：总和与平均值

An **accumulator** stores a result that is repeatedly updated inside a loop.

**累加器**是一个在循环中不断更新、用于保存当前结果的变量。

## Calculating a sum<br>计算总和

```java
int sum = 0;

for (int i = 1; i <= 4; i++)
{
    sum += i;
}

System.out.println(sum);
```

```text
10
```

The accumulator changes like this:

累加器会按照下面的过程变化：

```text
0 → 1 → 3 → 6 → 10
```

The correct starting value for a sum is usually `0`.

计算总和时，累加器通常应该从 `0` 开始。

## Calculating an average<br>计算平均值

An average requires both a sum and a count.

计算平均值需要同时知道总和与数量。

```java
int sum = 0;
int count = 0;

for (int i = 1; i <= 4; i++)
{
    sum += i;
    count++;
}

double average = (double) sum / count;

System.out.println(average);
```

```text
2.5
```

The cast must happen before division:

类型转换必须在除法之前发生：

```java
(double) sum / count
```

Without the cast:

如果没有类型转换：

```java
double average = sum / count;
```

Java performs integer division first:

Java 会先进行整数除法：

```text
10 / 4 → 2
```

The value assigned to `average` would then be `2.0`, not `2.5`.

之后赋给 `average` 的值会是 `2.0`，而不是 `2.5`。

# 4. Counting How Often a Condition Is True<br>统计条件成立的次数

A counter records how many values satisfy a criterion.

计数器用于记录有多少数值满足某个条件。

How many integers from `1` through `20` are divisible by `3`?

从 `1` 到 `20` 中，有多少个整数能被 `3` 整除？

```java
int count = 0;

for (int i = 1; i <= 20; i++)
{
    if (i % 3 == 0)
    {
        count++;
    }
}

System.out.println(count);
```

```text
6
```

The matching values are:

符合条件的数值是：

```text
3 6 9 12 15 18
```

The counter increases only when the condition is true.

只有条件为真时，计数器才会增加。

```java
if (i % 3 == 0)
{
    count++;
}
```

If `count++` were outside the `if`, it would count every iteration instead of only the matching values.

如果把 `count++` 写在 `if` 外面，它统计的就会是所有迭代次数，而不是满足条件的次数。

# 5. Finding Minimum and Maximum Values<br>寻找最小值与最大值

To find a minimum, store the smallest value seen so far.

寻找最小值时，需要保存“到目前为止见过的最小值”。

To find a maximum, store the largest value seen so far.

寻找最大值时，需要保存“到目前为止见过的最大值”。

```java
int min = Integer.MAX_VALUE;
int max = Integer.MIN_VALUE;

for (int i = 1; i <= 5; i++)
{
    int value = (i * 7) % 10;

    if (value < min)
    {
        min = value;
    }

    if (value > max)
    {
        max = value;
    }
}

System.out.println(min);
System.out.println(max);
```

The generated values are:

循环产生的数值是：

```text
7 4 1 8 5
```

**Output:**

```text
1
8
```

`Integer.MAX_VALUE` is larger than any possible `int`, so the first actual value will replace it as the minimum.

`Integer.MAX_VALUE` 大于任何合法的 `int` 值，因此第一个实际数值一定会成为新的最小值。

`Integer.MIN_VALUE` is smaller than any possible `int`, so the first actual value will replace it as the maximum.

`Integer.MIN_VALUE` 小于任何合法的 `int` 值，因此第一个实际数值一定会成为新的最大值。

| Goal                      | Initial value       | Update condition |
| ------------------------- | ------------------- | ---------------- |
| Find the minimum<br>寻找最小值 | `Integer.MAX_VALUE` | `value < min`    |
| Find the maximum<br>寻找最大值 | `Integer.MIN_VALUE` | `value > max`    |

Initializing `min` to `0` is not always correct. If every value is positive, none of them will be smaller than `0`.

不能总是把 `min` 初始化为 `0`。如果所有数值都是正数，就不会有任何数值小于 `0`。

# 6. Testing Divisibility in a Loop<br>在循环中判断整除关系

An integer is evenly divisible by another integer when the remainder is `0`.

如果一个整数除以另一个整数的余数为 `0`，就表示能够整除。

```java
number % divisor == 0
```

For example, the following loop prints the divisors of `30` from `2` through `6`:

例如，下面的循环会输出 `2` 到 `6` 中能够整除 `30` 的数：

```java
int number = 30;

for (int divisor = 2; divisor <= 6; divisor++)
{
    if (number % divisor == 0)
    {
        System.out.print(divisor + " ");
    }
}
```

```text
2 3 5 6
```

Trace each candidate:

逐个判断：

```text
30 % 2 → 0
30 % 3 → 0
30 % 4 → 2
30 % 5 → 0
30 % 6 → 0
```

The same pattern can be used to:

相同的模式还可以用于：

* test whether a number is even;
  判断一个数是否为偶数；

* count how many values are divisible by another value;
  统计有多少数能被某个数整除；

* find values that satisfy a divisibility requirement.
  找出满足整除条件的数值。

# 7. Processing Individual Digits with `%` and `/`<br>使用 `%` 和 `/` 处理各位数字

For a positive integer:

对于一个正整数：

```java
number % 10
```

gets the last digit.

会取得最后一位数字。

```java
number / 10
```

removes the last digit because integer division discards the decimal part.

会删除最后一位，因为整数除法会舍去小数部分。

For example:

例如：

```text
482 % 10 → 2
482 / 10 → 48
```

The following algorithm adds all the digits in `482`:

下面的算法会计算 `482` 的各位数字之和：

```java
int number = 482;
int sum = 0;

while (number > 0)
{
    int digit = number % 10;
    sum += digit;
    number /= 10;
}

System.out.println(sum);
```

```text
14
```

The values change like this:

变量变化过程如下：

```text
number: 482 → 48 → 4 → 0
digit:    2 →  8 → 4
sum:      2 → 10 → 14
```

The two essential digit operations are:

处理数字时最重要的两个操作是：

| Operation      | Purpose                                        |
| -------------- | ---------------------------------------------- |
| `number % 10`  | Get the current last digit.<br>取得当前最后一位。       |
| `number /= 10` | Remove the digit just processed.<br>删除刚刚处理的数字。 |

If `number` is never divided by `10`, the loop keeps processing the same last digit and may never stop.

如果没有把 `number` 除以 `10`，循环就会不断处理同一个最后一位，并且可能永远不会停止。

# 8. Returning as Soon as a Match Is Found<br>找到目标后立即返回

A loop can search through values and return immediately when it finds a match.

循环可以逐个搜索数值，并在找到目标时立即返回。

The following method checks whether a positive integer contains a particular digit:

下面的方法判断一个正整数中是否包含某个指定数字：

```java
public static boolean hasDigit(int number, int target)
{
    while (number > 0)
    {
        int digit = number % 10;

        if (digit == target)
        {
            return true;
        }

        number /= 10;
    }

    return false;
}
```

Example calls:

调用示例：

```java
System.out.println(hasDigit(12345, 3));
System.out.println(hasDigit(9876, 2));
```

```text
true
false
```

When the target is found, the method returns `true` immediately.

找到目标数字时，方法会立即返回 `true`。

The final `return false` runs only after the loop checks every digit without finding a match.

只有循环检查完所有数字后仍然没有找到目标时，最后的 `return false` 才会执行。

This method assumes that `number` is positive and `target` is a single digit from `0` through `9`.

这个方法假设 `number` 是正整数，并且 `target` 是 `0` 到 `9` 之间的一位数字。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                 | Why it is wrong                                                               | Correct understanding                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Declaring `sum` without initializing it.<br>声明 `sum` 后没有赋初值。            | A local variable must have a value before it is used.<br>局部变量在使用前必须有确定的值。     | Start a sum with `int sum = 0;`.                                                      |
| Incrementing `count` outside the `if`.<br>把 `count++` 写在 `if` 外面。       | It counts every iteration, not only matching values.<br>这样会统计所有迭代，而不是符合条件的数值。 | Increment only when the criterion is true.<br>只在条件为真时增加计数器。                           |
| Calculating an average with `sum / count`.<br>直接使用 `sum / count` 计算平均值。 | Two `int` values use integer division.<br>两个 `int` 相除会执行整数除法。                 | Use `(double) sum / count`.                                                           |
| Initializing `min` to `0`.<br>把最小值初始化为 `0`。                             | It fails when every candidate is positive.<br>当所有候选值都是正数时会失败。                 | Use `Integer.MAX_VALUE` or the first actual value.<br>使用 `Integer.MAX_VALUE` 或第一个实际值。 |
| Initializing `max` to `0`.<br>把最大值初始化为 `0`。                             | It fails when every candidate is negative.<br>当所有候选值都是负数时会失败。                 | Use `Integer.MIN_VALUE` or the first actual value.<br>使用 `Integer.MIN_VALUE` 或第一个实际值。 |
| Using `number / 10` to get the last digit.<br>使用 `number / 10` 取得最后一位。  | Division removes the last digit.<br>除法会删除最后一位。                                | Use `number % 10` to get the last digit.<br>使用 `number % 10`。                         |
| Forgetting `number /= 10` in a digit loop.<br>数字循环中忘记更新 `number`。       | The loop repeatedly processes the same digit.<br>循环会不断处理同一个数字。                | Remove the processed digit during each iteration.<br>每次迭代后删除已经处理的数字。                  |

# 10. Debugging Example<br>调试例子

The following code is intended to calculate the average of the even integers from `1` through `6`.

下面的代码原本应该计算 `1` 到 `6` 中所有偶数的平均值。

```java
int sum = 0;
int count = 0;

for (int i = 1; i <= 6; i++)
{
    if (i % 2 == 0)
    {
        sum += i;
    }

    count++;
}

double average = sum / count;

System.out.println(average);
```

The even values are:

偶数包括：

```text
2 4 6
```

Their correct average is:

正确的平均值应该是：

```text
(2 + 4 + 6) / 3 = 4.0
```

However, the buggy code produces:

但是，错误代码会得到：

```text
2.0
```

There are two logic errors.

这里有两个逻辑错误。

First, `count++` is outside the `if`, so it counts all six integers instead of only the three even integers.

第一，`count++` 位于 `if` 外面，因此它统计了全部六个整数，而不是三个偶数。

Second, `sum / count` uses integer division.

第二，`sum / count` 执行的是整数除法。

### Fixed code

```java
int sum = 0;
int count = 0;

for (int i = 1; i <= 6; i++)
{
    if (i % 2 == 0)
    {
        sum += i;
        count++;
    }
}

double average = (double) sum / count;

System.out.println(average);
```

```text
4.0
```

| Bug                                                           | Effect                                                     | Fix                                                     |
| ------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| `count++` is outside the `if`.<br>`count++` 位于 `if` 外。        | Counts all values instead of only even values.<br>统计了所有数值。 | Move `count++` inside the `if` block.<br>把它移入 `if` 代码块。 |
| `sum / count` uses integer division.<br>`sum / count` 使用整数除法。 | Any decimal part is discarded.<br>小数部分会被舍去。                | Cast before division: `(double) sum / count`.           |

Both mistakes are **logic errors**: the program compiles and runs, but the result is incorrect.

这两个问题都属于**逻辑错误**：程序可以编译并运行，但结果不正确。

# 11. Mini Practice<br>小练习

## Practice 1: Accumulator<br>练习一：累加器

What is printed?

下面的代码会输出什么？

```java
int total = 0;

for (int i = 1; i <= 4; i++)
{
    total += i * 2;
}

System.out.println(total);
```

**Answer:**

```text
20
```

The accumulated values are:

累加的数值是：

```text
2 + 4 + 6 + 8 = 20
```

---

## Practice 2: Frequency Count<br>练习二：频率统计

What is the final value of `count`?

`count` 的最终值是多少？

```java
int count = 0;

for (int i = 1; i <= 12; i++)
{
    if (i % 4 == 0)
    {
        count++;
    }
}
```

**Answer: `3`**

The matching values are `4`, `8`, and `12`.

符合条件的数值是 `4`、`8` 和 `12`。

---

## Practice 3: Minimum Initialization<br>练习三：最小值初始化

Which initialization is safest when finding the minimum of several unknown `int` values?

在寻找一组未知 `int` 数值的最小值时，哪种初始化方式最安全？

A. `int min = 0;`
B. `int min = Integer.MAX_VALUE;`
C. `int min = Integer.MIN_VALUE;`
D. `int min = -1;`

**Answer: B**

Every possible `int` value is less than or equal to `Integer.MAX_VALUE`, so the first actual value can correctly replace it.

所有合法的 `int` 值都小于或等于 `Integer.MAX_VALUE`，因此第一个实际数值可以正确替换它。

---

## Practice 4: Process the Digits<br>练习四：处理各位数字

What is printed?

下面的代码会输出什么？

```java
int number = 507;

while (number > 0)
{
    System.out.print(number % 10 + " ");
    number /= 10;
}
```

**Answer:**

```text
7 0 5
```

The digits are processed from right to left.

各位数字会从右向左被处理。

---

## Practice 5: Selection Inside a Loop<br>练习五：循环中的选择

What is printed?

下面的代码会输出什么？

```java
int sum = 0;

for (int i = 1; i <= 8; i++)
{
    if (i % 2 != 0)
    {
        sum += i;
    }
}

System.out.println(sum);
```

**Answer:**

```text
16
```

The loop adds the odd values:

循环会累加奇数：

```text
1 + 3 + 5 + 7 = 16
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.9 question, check:

做 2.9 的题目之前，检查：

* What result variable is being stored and updated?
  哪个变量用于保存并更新结果？

* Was the accumulator or counter initialized before the loop?
  累加器或计数器是否在循环前初始化？

* Should a sum begin at `0`?
  总和是否应该从 `0` 开始？

* Should a minimum begin at `Integer.MAX_VALUE`?
  最小值是否应该从 `Integer.MAX_VALUE` 开始？

* Should a maximum begin at `Integer.MIN_VALUE`?
  最大值是否应该从 `Integer.MIN_VALUE` 开始？

* Does the `if` statement correctly identify the values to process?
  `if` 语句是否正确识别需要处理的数值？

* Is the accumulator updated only when appropriate?
  累加器是否只在正确的情况下更新？

* Is the counter incremented only when the criterion is met?
  计数器是否只在条件满足时增加？

* Does the average use `(double)` before division?
  平均值计算是否在除法前进行了 `(double)` 类型转换？

* Is `%` being used to test divisibility?
  是否使用 `%` 判断整除关系？

* Does `number % 10` get the last digit?
  `number % 10` 是否用于取得最后一位？

* Does `number / 10` remove the last digit?
  `number / 10` 是否用于删除最后一位？

* Is the digit-processing variable updated during every iteration?
  处理数字时，循环变量是否在每次迭代中更新？

* If the algorithm searches for a match, what happens after it is found?
  如果算法在搜索目标，找到后会发生什么？

* Is the final result used or returned after the loop?
  循环结束后，最终结果是否被使用或返回？
