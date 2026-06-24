---
title: "AP CSA 1.5：类型转换与数值范围"
layout: post
categories: media
render_with_liquid: false
---

In the previous lesson, we worked with arithmetic expressions. In this lesson, we learn how Java converts values between `int` and `double`, and why the order of casting matters.

上一课我们学习了算术表达式。这一课，我们学习 Java 如何在 `int` 和 `double` 之间转换数值，以及为什么“先转换再计算”很重要。

> **Casting changes the type of a value; casting to `int` truncates, not rounds.**
> **类型转换会改变值的类型；转换成 `int` 是截断，不是四舍五入。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.5 类型转换与数值范围<br>Casting and Ranges of Values

## 类型转换基础<br>Type Casting Basics

* `(int)`：转换成整数<br>Convert to an integer
* `(double)`：转换成小数类型<br>Convert to a double
* 写在表达式前面<br>Placed before an expression
* `(double) total / count`：先把 `total` 变成 `double`<br>Cast before division

## `int` 除法<br>Integer Division

* `3 / 4` 得到 `0`<br>Result is `0`
* 小数部分被截断<br>Decimal part is truncated
* 截断不是四舍五入<br>Truncation is not rounding

## `double` 的影响<br>Double Is Contagious

* 只要表达式中有 `double`，结果通常是 `double`<br>If one operand is double, result is usually double
* `3.0 / 4` 得到 `0.75`<br>Result is `0.75`
* `(double) 3 / 4` 得到 `0.75`<br>Casting before division matters

## 自动拓宽转换<br>Widening Conversion

* `int` 可以自动变成 `double`<br>`int` can widen to `double`
* `double` 比 `int` 能表示更多数值形式<br>`double` is a wider type
* `int` 到 `double` 通常不需要手动强转<br>Often automatic

## `int` 范围<br>Range of int

* `Integer.MAX_VALUE`：最大 `int`<br>Largest int value
* `Integer.MIN_VALUE`：最小 `int`<br>Smallest int value
* 超出范围可能溢出<br>Out-of-range values may overflow

## AP 考点<br>AP Exam Focus

* 判断 `int / int` 和 `double` 除法<br>Tell integer division from double division
* 判断 `(double) total / 3` 与 `(double)(total / 3)`<br>Cast before or after division
* 记住 `(int) 3.9` 是 `3`<br>Truncation, not rounding
* 理解整数溢出<br>Understand integer overflow

## 常见错误<br>Common Mistakes

* 在除法之后才转换<br>Casting after division
* 以为 Java 会自动四舍五入<br>Thinking Java rounds automatically
* 忘记 `int / int` 会丢掉小数<br>Forgetting integer division truncates
* 忽略 `int` 的范围限制<br>Ignoring int range limits

</script>
</div>
</div>



# 1. Main Idea<br>核心理解

Type casting means converting a value from one type to another.

类型转换就是把一个值从一种类型转换成另一种类型。

In AP CSA Unit 1, the most important casts are:

在 AP CSA Unit 1 中，最重要的是这两种：

| Cast       | Meaning             | Example                  |
| ---------- | ------------------- | ------------------------ |
| `(int)`    | convert to `int`    | `(int) 3.8` gives `3`    |
| `(double)` | convert to `double` | `(double) 3` gives `3.0` |

The cast only affects the expression immediately after it.

类型转换只影响它后面的那个表达式。

# 2. Casting to `int`: Truncation<br>转换成 `int`：截断

When a `double` is cast to an `int`, Java cuts off the decimal part.

当 `double` 被转换成 `int` 时，Java 会直接去掉小数部分。

```java
System.out.println((int) 3.9);
System.out.println((int) 3.1);
System.out.println((int) -3.9);
```

Output:

```text
3
3
-3
```

This is called **truncation**. It is not rounding.

这叫 **截断**，不是四舍五入。

| Expression   | Result | Why                              |
| ------------ | -----: | -------------------------------- |
| `(int) 3.9`  |    `3` | decimal part removed             |
| `(int) 3.1`  |    `3` | decimal part removed             |
| `(int) -3.9` |   `-3` | decimal part removed toward zero |

# 3. Integer Division<br>整数除法

When Java divides an `int` by an `int`, the result is also an `int`.

当 Java 用一个 `int` 除以另一个 `int` 时，结果也是 `int`。

```java
System.out.println(3 / 4);
System.out.println(9 / 10);
System.out.println(5 / 2);
```

Output:

```text
0
0
2
```

Java does the division, then removes the decimal part.

Java 会先做除法，再去掉小数部分。

So:

```text
3 / 4  → 0.75 → 0
9 / 10 → 0.9  → 0
5 / 2  → 2.5  → 2
```

Again, this is truncation, not rounding.

再次注意：这是截断，不是四舍五入。

# 4. Double Division<br>`double` 除法

If an arithmetic expression includes a `double`, the result is usually a `double`.

如果算术表达式中有 `double`，结果通常也是 `double`。

```java
System.out.println(3.0 / 4);
System.out.println(3 / 4.0);
System.out.println((double) 3 / 4);
```

Output:

```text
0.75
0.75
0.75
```

The `double` makes the whole division use decimal calculation.

`double` 会让整个除法按小数除法计算。

A useful phrase:

```text
double is contagious
```

可以理解为：`double` 有“传染性”。只要表达式里出现 `double`，其他 `int` 值通常会自动变成 `double` 来计算。

# 5. Cast Before Division<br>先转换，再除法

This is one of the most important AP CSA points in this lesson.

这是本课最重要的 AP CSA 考点之一。

Compare these two expressions:

```java
int total = 5;

System.out.println((double) total / 2);
System.out.println((double) (total / 2));
```

Output:

```text
2.5
2.0
```

Why?

为什么？

| Expression             | What Happens                                                      | Result |
| ---------------------- | ----------------------------------------------------------------- | -----: |
| `(double) total / 2`   | `total` becomes `5.0` first, then division happens                |  `2.5` |
| `(double) (total / 2)` | `5 / 2` happens first as integer division, then `2` becomes `2.0` |  `2.0` |

So for averages, cast before dividing.

所以计算平均数时，要在除法前转换。

```java
int total = 284;
int count = 3;

double average = (double) total / count;
System.out.println(average);
```

Output:

```text
94.66666666666667
```

# 6. Widening Conversion<br>拓宽转换

Java can automatically convert an `int` to a `double` when needed.

需要时，Java 可以自动把 `int` 转换成 `double`。

```java
double price = 10;
System.out.println(price);
```

Output:

```text
10.0
```

This is called a **widening conversion** because `double` can represent decimal values and has a wider range of numeric forms than `int`.

这叫 **拓宽转换**，因为 `double` 能表示小数，也能表示更广的数值形式。

But Java does not automatically convert a `double` to an `int`, because that may lose information.

但 Java 不会自动把 `double` 转成 `int`，因为这样可能丢失小数信息。

```java
double number = 3.7;
// int x = number;   // error
int x = (int) number;
```

# 7. Range of `int` and Overflow<br>`int` 范围与溢出

An `int` in Java has a limited range.

Java 中的 `int` 有固定范围。

| Constant            | Meaning                 |
| ------------------- | ----------------------- |
| `Integer.MAX_VALUE` | largest possible `int`  |
| `Integer.MIN_VALUE` | smallest possible `int` |

```java
System.out.println(Integer.MAX_VALUE);
System.out.println(Integer.MIN_VALUE);
```

Output:

```text
2147483647
-2147483648
```

If an `int` calculation goes beyond this range, integer overflow can happen.

如果 `int` 计算超出这个范围，就可能发生整数溢出。

```java
System.out.println(Integer.MAX_VALUE + 1);
```

Output:

```text
-2147483648
```

This result is not mathematically correct. It happens because the value went beyond what an `int` can store.

这个结果在数学上不正确。它出现的原因是数值超过了 `int` 能存储的范围。


# 8. Precision and Round-off Error<br>精度与舍入误差

A `double` can store decimal values, but it cannot store every decimal value exactly.

`double` 可以存储小数，但它不能精确存储所有小数。

This happens because computers use a limited amount of memory. Some decimal values, especially repeating decimals or values like `0.1`, cannot be represented exactly as a `double`.

这是因为电脑给每种数据类型分配的内存是有限的。有些小数，尤其是循环小数，或者像 `0.1` 这样的数，不能被 `double` 完全精确地表示。

Example:

```java
System.out.println(10.0 / 3);
System.out.println(0.1 + 0.2);
System.out.println((0.1 + 0.2) == 0.3);
````

Output:

```text
3.3333333333333335
0.30000000000000004
false
```

This is called a **round-off error**. It does not mean Java gives a random result. If you run the same expression again, you should get the same approximate result.

这叫 **round-off error（舍入误差 / 浮点精度误差）**。它不是说 Java 每次运行都会随机出不同结果。同一个表达式再次运行，通常还是会得到同样的近似值。

The problem is that the stored `double` value is only an approximation of the mathematical value.

问题在于：`double` 存储的是数学真实值的一个近似值。

| Expression           | Mathematical Idea        | Java Result           |
| -------------------- | ------------------------ | --------------------- |
| `10.0 / 3`           | `3.333333...` forever    | `3.3333333333333335`  |
| `0.1 + 0.2`          | `0.3`                    | `0.30000000000000004` |
| `(0.1 + 0.2) == 0.3` | should feel true in math | `false` in Java       |

For AP CSA, remember this distinction:

AP CSA 中要区分这几件事：

| Concept            | Meaning                                 | Example                                 |
| ------------------ | --------------------------------------- | --------------------------------------- |
| Integer truncation | `int / int` drops the decimal part      | `5 / 2` gives `2`                       |
| Casting to `int`   | decimal part is cut off                 | `(int) 3.9` gives `3`                   |
| Round-off error    | `double` may store an approximate value | `0.1 + 0.2` gives `0.30000000000000004` |

Round-off error is about the limits of `double` precision. It is different from integer truncation.

`round-off error` 讲的是 `double` 精度有限的问题。它和整数除法的截断不是一回事。


# 8. Common Beginner Mistakes<br>常见初学者错误

| Mistake                              | Wrong Code              | Why Wrong                                 | Fixed Code                        | 中文解释             |
| ------------------------------------ | ----------------------- | ----------------------------------------- | --------------------------------- | ---------------- |
| Casting after integer division       | `(double) (total / 3)`  | `total / 3` already used integer division | `(double) total / 3`              | 要先转成 `double`，再除 |
| Thinking `(int)` rounds              | `(int) 3.9` gives `4`   | Java truncates instead                    | `(int) 3.9` gives `3`             | 转成 `int` 是截断     |
| Forgetting `int / int` truncates     | `5 / 2` gives `2.5`     | Both operands are `int`                   | `5.0 / 2` or `(double) 5 / 2`     | 两个整数相除，结果是整数     |
| Assigning `double` to `int` directly | `int x = 3.5;`          | Possible loss of data                     | `int x = (int) 3.5;`              | 需要显式强制转换         |
| Ignoring overflow                    | `Integer.MAX_VALUE + 1` | Result wraps around                       | Use a wider type when appropriate | `int` 有范围限制      |

# 9. Debugging Example<br>调试例子

Buggy code:

```java
int grade1 = 90;
int grade2 = 100;
int grade3 = 94;

int sum = grade1 + grade2 + grade3;
double average = (double) (sum / 3);

System.out.println(average);
```

Output:

```text
94.0
```

Problem: `sum / 3` happens first. Since both `sum` and `3` are `int`, Java does integer division before the cast.

问题：`sum / 3` 先执行。因为 `sum` 和 `3` 都是 `int`，所以 Java 先做整数除法，然后才转换成 `double`。

Fixed code:

```java
int grade1 = 90;
int grade2 = 100;
int grade3 = 94;

int sum = grade1 + grade2 + grade3;
double average = (double) sum / 3;

System.out.println(average);
```

Output:

```text
94.66666666666667
```

| Bug                     | Type           | Fix                      |
| ----------------------- | -------------- | ------------------------ |
| `(double) (sum / 3)`    | Logic error    | Use `(double) sum / 3`   |
| `int x = 3.5;`          | Syntax error   | Use `int x = (int) 3.5;` |
| `Integer.MAX_VALUE + 1` | Overflow issue | Know the `int` range     |

A logic error may run, but the answer is wrong. A syntax error prevents the program from compiling. Overflow can run but produce an unexpected value.

逻辑错误可能能运行，但答案错。语法错误会导致程序无法编译。溢出可能能运行，但结果会很奇怪。

# 10. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is printed?

```java
System.out.println(7 / 2);
System.out.println(7.0 / 2);
```

Answer:

```text
3
3.5
```

Explanation: `7 / 2` is integer division. `7.0 / 2` includes a `double`.

解释：`7 / 2` 是整数除法。`7.0 / 2` 中有 `double`，所以结果是小数。

## Practice 2: Predict the Result<br>练习 2：预测结果

What is printed?

```java
double x = (int) 8.9;
System.out.println(x);
```

Answer:

```text
8.0
```

Explanation: `(int) 8.9` becomes `8`, then it is stored in a `double` variable as `8.0`.

解释：`(int) 8.9` 先变成 `8`，然后存进 `double` 变量，所以显示为 `8.0`。

## Practice 3: Fix the Code<br>练习 3：修复代码

The goal is to print the correct average as a `double`.

```java
int total = 29;
double average = (double) (total / 4);
System.out.println(average);
```

Fixed code:

```java
int total = 29;
double average = (double) total / 4;
System.out.println(average);
```

Output:

```text
7.25
```

Explanation: cast `total` before division so Java uses double division.

解释：在除法前先把 `total` 转成 `double`，这样 Java 才会做小数除法。

# Quick Checklist<br>快速检查清单

Before answering a casting question, check:

做类型转换题前，检查：

* Is the expression using `int / int`?
* Is there a `double` anywhere in the division?
* Does the cast happen before or after division?
* Does `(int)` truncate the decimal part?
* Are you accidentally expecting rounding?
* Does `(double) total / count` give a more accurate average?
* Does `(double) (total / count)` still lose the decimal part first?
* Is the value within the range of `int`?
* Could integer overflow happen?
* Are you tracking the type and value separately?
