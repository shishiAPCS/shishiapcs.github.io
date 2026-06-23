---
title: "AP CSA 1.4：赋值语句与输入"
layout: post
categories: media
render_with_liquid: false
---

In the previous lesson, we used expressions to calculate values. In this lesson, we store those values in variables, update them, and trace how values change step by step.

上一课我们用表达式计算数值。这一课，我们把计算结果存进变量，更新变量，并一步一步追踪变量值的变化。

> **An assignment statement evaluates the right side first, then stores the result in the variable on the left.**
> **赋值语句先计算右边的表达式，再把结果存入左边的变量。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.4 赋值语句与输入<br>Assignment and Input

## 赋值语句<br>Assignment Statement

* 语法：`variable = expression;`<br>Syntax: `variable = expression;`
* `=` 读作“gets”或“is assigned”<br>Read as “gets” or “is assigned”
* 左边只能是一个变量<br>Left side must be one variable
* 右边先计算，再存入左边<br>Evaluate right side first, then store

## 变量复制<br>Copying Variables

* `y = x;` 把 `x` 的值复制给 `y`<br>Copies the value of `x` into `y`
* 不会改变 `x`<br>Does not change `x`
* 后续修改互不影响<br>Later changes are separate

## 数据类型规则<br>Data Type Rules

* 变量使用前必须先赋值<br>Must be assigned before use
* 值的类型必须兼容<br>Value type must be compatible
* `double` 结果不能直接存入 `int`<br>A double result cannot be stored directly in an int

## 表达式求值<br>Evaluating Expressions

* 表达式最终得到一个值<br>An expression produces one value
* 表达式也有类型<br>An expression has a type
* 含有 `double` 的算术表达式通常得到 `double`<br>Arithmetic with double usually produces double

## 更新变量<br>Updating Variables

* `score = score + 1;`：在旧值基础上加 1<br>Add 1 to the old value
* 右边使用旧值<br>Right side uses the old value
* 左边存入新值<br>Left side stores the new value

## 输入<br>Input

* `Scanner` 可以读取键盘输入<br>`Scanner` can read keyboard input
* 输入让同一算法处理不同数据<br>Input lets one algorithm handle different data
* 键盘输入不是 AP CSA 重点考点<br>Keyboard input is not a main AP exam focus

## AP 考点<br>AP Exam Focus

* 按顺序追踪变量值<br>Trace variable values in order
* 理解赋值不是数学等号<br>Assignment is not math equality
* 交换变量需要临时变量<br>Swapping values needs a temporary variable
* 识别不兼容类型错误<br>Recognize incompatible type errors

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

An assignment statement stores a value in a variable.

赋值语句会把一个值存入变量。

```java
score = points * 10 + 5;
```

Read this as:

```text
score gets points * 10 + 5
```

Do not read `=` as a math equals sign here. In Java, `=` means “assign the value on the right to the variable on the left.”

这里不要把 `=` 理解成数学里的“等于”。在 Java 中，`=` 的意思是“把右边的值赋给左边的变量”。

# 2. Assignment Statements<br>赋值语句

The basic form is:

基本格式是：

```java
variable = expression;
```

The right side is evaluated first. Then the result is stored in the variable on the left.

程序会先计算右边的表达式，再把结果存入左边的变量。

```java
int points = 8;
int score = points * 10 + 5;

System.out.println(score);
```

Output:

```text
85
```

`points * 10 + 5` is evaluated first, so `score` gets `85`.

先计算 `points * 10 + 5`，所以 `score` 得到 `85`。

# 3. Copying Variable Values<br>复制变量的值

One variable can get a copy of another variable’s value.

一个变量可以得到另一个变量值的副本。

```java
int x = 5;
int y = x;

x = 10;

System.out.println(x);
System.out.println(y);
```

Output:

```text
10
5
```

`y = x;` copies the current value of `x`. It does not connect `y` to `x`.

`y = x;` 复制的是 `x` 当时的值，不是把 `y` 和 `x` 绑定在一起。

# 4. Trace Variable Changes<br>追踪变量变化

When code has several assignments, trace one line at a time.

当代码里有多行赋值语句时，要一行一行追踪。

```java
int x = 0;
int y = 1;
int z = 2;

x = y;
y = y * 2;
z = 3;
```

Trace table:

| Line         | `x` | `y` | `z` |
| ------------ | --: | --: | --: |
| Start        |   0 |   1 |   2 |
| `x = y;`     |   1 |   1 |   2 |
| `y = y * 2;` |   1 |   2 |   2 |
| `z = 3;`     |   1 |   2 |   3 |

Final values:

```text
x = 1, y = 2, z = 3
```

The safest method is to update the table immediately after each assignment.

最稳的方法是：每执行一行赋值，就马上更新表格。

# 5. Swapping Values<br>交换变量的值

To swap two variables, you need a temporary variable.

如果要交换两个变量的值，需要一个临时变量。

Correct swap:

```java
int x = 3;
int y = 5;
int temp = 0;

temp = x;
x = y;
y = temp;

System.out.println(x);
System.out.println(y);
```

Output:

```text
5
3
```

Why use `temp`?

为什么需要 `temp`？

If you write `x = y;` first, the old value of `x` is lost. `temp` saves it before it gets overwritten.

如果先写 `x = y;`，`x` 原来的值就丢了。`temp` 的作用就是先把旧值保存起来。

# 6. Data Types in Assignments<br>赋值中的数据类型

A variable must be assigned a compatible value.

变量必须被赋予兼容的数据类型。

```java
int x = 1;
double y = 2.2;

// x = 2 * y;   // error
```

`2 * y` evaluates to a `double`, because `y` is a `double`. A `double` value cannot be directly stored in an `int` variable.

`2 * y` 的结果是 `double`，因为 `y` 是 `double`。`double` 不能直接存进 `int` 变量。

One simple fix:

```java
double x = 1;
double y = 2.2;

x = 2 * y;
System.out.println(x);
```

Output:

```text
4.4
```

# 7. Updating a Variable<br>更新变量

This line may look strange at first:

这一行一开始可能看起来很奇怪：

```java
score = score + 1;
```

But in Java, it makes sense:

但是在 Java 中，它的意思很清楚：

1. Use the old value of `score`.
2. Add `1`.
3. Store the new value back into `score`.

Example:

```java
int score = 0;

System.out.println(score);

score = score + 1;

System.out.println(score);
```

Output:

```text
0
1
```

The right side uses the old value. The left side receives the new value.

右边使用旧值，左边接收新值。

# 8. Input with `Scanner`<br>使用 `Scanner` 输入

`Scanner` can read text typed by the user.

`Scanner` 可以读取用户输入的文本。

```java
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.println("Please type your name:");
        String name = scan.nextLine();

        System.out.println("Hello " + name);

        scan.close();
    }
}
```

If the user types:

```text
Evie
```

Output:

```text
Hello Evie
```

Keyboard input is useful, but it is not a major AP CSA exam focus in this unit. The bigger AP idea is that variables let one program work with different values.

键盘输入很有用，但它不是本单元 AP CSA 的核心考点。更重要的思想是：变量让同一个程序可以处理不同的数据。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                              | Wrong Code                            | Why Wrong                      | Fixed Code                           | 中文解释       |
| ------------------------------------ | ------------------------------------- | ------------------------------ | ------------------------------------ | ---------- |
| Reading `=` as math equality         | `score = score + 1;` seems impossible | In Java, `=` means assignment  | Read it as “score gets score plus 1” | 赋值不是数学等号   |
| Putting expression on the left       | `x + 1 = 5;`                          | Left side must be one variable | `x = 5 - 1;`                         | 左边必须是变量    |
| Using a variable before assigning it | `int x; System.out.println(x);`       | `x` has no value yet           | `int x = 0;`                         | 变量使用前必须先赋值 |
| Losing a value while swapping        | `x = y; y = x;`                       | Old `x` is overwritten         | Use `temp`                           | 交换变量需要临时变量 |
| Assigning `double` result to `int`   | `int x = 2 * 2.2;`                    | Result is `double`             | `double x = 2 * 2.2;`                | 类型不兼容      |

# 10. Debugging Example<br>调试例子

Buggy code:

```java
public class Asgn
{
    public static void main(String[] args)
    {
        int x = 1;
        double y = 2.2;

        x = 2 * y;

        System.out.println(x);
    }
}
```

Problem: `2 * y` evaluates to a `double`, but `x` is an `int`.

问题：`2 * y` 的结果是 `double`，但 `x` 是 `int`。

Fixed code:

```java
public class Asgn
{
    public static void main(String[] args)
    {
        double x = 1;
        double y = 2.2;

        x = 2 * y;

        System.out.println(x);
    }
}
```

Output:

```text
4.4
```

| Bug                                                | Type                        | Fix                      |
| -------------------------------------------------- | --------------------------- | ------------------------ |
| `x = 2 * y;` when `x` is `int` and `y` is `double` | Syntax / compile-time error | Make `x` a `double`      |
| `x = y; y = x;` for swapping                       | Logic error                 | Use a temporary variable |
| `score = score + 1;` misunderstood as equality     | Understanding issue         | Read `=` as “gets”       |

Syntax errors stop the program from compiling. Logic errors may run, but the result is wrong.

语法错误会导致程序无法编译。逻辑错误可能能运行，但结果不对。

# 11. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is printed?

```java
int a = 5;
int b = a / 2;
double c = a / 2.0;
double d = 5 + a / b * c - 2;

System.out.println(d);
```

Answer:

```text
8.0
```

Explanation: `b` is `2`, `c` is `2.5`, and `a / b` is `5 / 2`, which is `2`. So `d = 5 + 2 * 2.5 - 2`, which is `8.0`.

解释：`b` 是 `2`，`c` 是 `2.5`，`a / b` 是 `5 / 2`，结果是 `2`。所以 `d = 5 + 2 * 2.5 - 2`，结果是 `8.0`。

## Practice 2: Predict the Result<br>练习 2：预测结果

What are the final values?

```java
int x = 4;
int y = 7;

x = y;
y = y + 1;
```

Answer:

```text
x = 7, y = 8
```

Explanation: `x = y;` copies the value `7` into `x`. Then `y` increases by `1`.

解释：`x = y;` 把 `7` 复制给 `x`。然后 `y` 增加 `1`。

## Practice 3: Fix the Code<br>练习 3：修复代码

The goal is to swap `x` and `y`.

Buggy code:

```java
int x = 3;
int y = 5;

x = y;
y = x;
```

Fixed code:

```java
int x = 3;
int y = 5;
int temp = 0;

temp = x;
x = y;
y = temp;
```

Answer:

```text
x = 5, y = 3
```

Explanation: `temp` saves the old value of `x`.

解释：`temp` 保存了 `x` 原来的值。

# Quick Checklist<br>快速检查清单

Before answering an assignment question, check:

做赋值题前，检查：

* What is on the left side of `=`?
* Is the left side exactly one variable?
* What expression is on the right side?
* What value does the right side produce?
* What type does the right side produce?
* Is the value compatible with the variable type?
* Has every variable been assigned before use?
* Are you reading `=` as “gets,” not math equality?
* When copying variables, are you copying a value, not linking variables?
* If variables are being swapped, is there a temporary variable?
* Did you trace the code line by line?
