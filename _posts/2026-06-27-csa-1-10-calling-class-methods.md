---
title: "AP CSA 1.10：调用类方法"
layout: post
categories: media
render_with_liquid: false
---

In the previous lesson, we learned method signatures, parameters, arguments, and how method calls change the flow of control. In this lesson, we focus on **static class methods** and how non-void methods return values back to the calling code.

上一课我们学习了方法签名、参数、实参，以及方法调用如何改变执行流程。这一课，我们重点学习 **static 类方法**，以及非 `void` 方法如何把结果返回给调用它的代码。

> **A non-void method returns a value; the calling code should store it, print it, or use it in an expression.**
> **非 `void` 方法会返回一个值；调用它的代码应该保存、打印或在表达式中使用这个返回值。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.10 调用类方法<br>Calling Class Methods

## static 类方法<br>Static Class Methods

* 方法头中有 `static`<br>Header includes `static`
* 与类相关，而不是与某个对象相关<br>Associated with the class, not an object
* `main` 方法是 `static`<br>The `main` method is static
* 同一个类中调用时，类名通常可省略<br>Class name is optional inside the same class

## void 与非 void 方法<br>Void and Non-void Methods

* `void`：不返回值<br>`void`: returns no value
* 非 `void`：返回指定类型的值<br>Non-void: returns a value of the declared type
* `public static int square(int x)`：返回 `int`<br>Returns an int
* `public static double divide(double x, double y)`：返回 `double`<br>Returns a double

## return 语句<br>Return Statement

* 把值返回给调用处<br>Returns a value to the calling code
* 返回值类型必须匹配方法头<br>Return value type must match the header
* `return` 会结束方法执行<br>`return` exits the method

## 使用返回值<br>Using Return Values

* 存入变量<br>Store in a variable
* 直接打印<br>Print directly
* 放进表达式<br>Use in an expression
* 忽略返回值通常没有意义<br>Ignoring the returned value is usually not useful

## 调用其他类的方法<br>Calling Methods from Another Class

* 语法：`ClassName.methodName(arguments)`<br>Syntax: `ClassName.methodName(arguments)`
* `Math.sqrt(9)` 返回 `3.0`<br>Returns `3.0`
* `Math.pow(3, 2)` 返回 `9.0`<br>Returns `9.0`
* `Math` 方法通常返回 `double`<br>Math methods usually return double values

## 常见错误<br>Common Errors

* 实参数量、顺序、类型不匹配<br>Argument number, order, or type mismatch
* 把 `double` 返回值存进 `int`<br>Assigning double return value to int
* 调用了非 `void` 方法但没使用返回值<br>Calling a non-void method but ignoring the result
* 忘记使用类名调用外部类方法<br>Forgetting class name for external class methods

## AP 考点<br>AP Exam Focus

* 识别 `static` 方法头<br>Identify static method headers
* 判断返回值类型<br>Determine return type
* 匹配参数与实参<br>Match parameters and arguments
* 追踪返回值如何参与表达式<br>Trace return values in expressions
* 判断代码是否能编译<br>Decide whether code compiles

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A **static method**, also called a **class method**, is associated with the class.

**static 方法**，也叫 **类方法（class method）**，是和类相关的方法。

A static method header includes the keyword `static`.

static 方法的方法头中包含关键字 `static`。

```java
public static int square(int number)
{
    return number * number;
}
```

For AP CSA 1.10, the most important question is:

对于 AP CSA 1.10，最重要的问题是：

```text
What value does the method return, and how is that value used?
```

也就是：

```text
这个方法返回什么值？这个返回值被怎样使用？
```

# 2. Static Class Methods<br>static 类方法

A class method is usually called using the class name and the dot operator.

类方法通常用类名加点运算符调用。

```java
ClassName.methodName(arguments);
```

Example:

```java
Math.sqrt(9);
```

Here, `Math` is the class name, and `sqrt` is a static method in the `Math` class.

这里 `Math` 是类名，`sqrt` 是 `Math` 类中的 static 方法。

If the method is in the same class, the class name is usually optional.

如果方法就在同一个类里，类名通常可以省略。

```java
public class Example
{
    public static int square(int number)
    {
        return number * number;
    }

    public static void main(String[] args)
    {
        int result = square(5);
        System.out.println(result);
    }
}
```

Output:

```text
25
```

# 3. Void vs. Non-void Methods<br>void 与非 void 方法

A `void` method does not return a value.

`void` 方法不返回值。

```java
public static void printHello()
{
    System.out.println("Hello");
}
```

A non-void method returns a value.

非 `void` 方法会返回一个值。

```java
public static int square(int number)
{
    return number * number;
}
```

The return type in the method header tells you what type of value comes back.

方法头中的返回类型告诉你会返回什么类型的值。

| Method Header                                     | Return Type | Meaning            |
| ------------------------------------------------- | ----------- | ------------------ |
| `public static void printHello()`                 | `void`      | returns nothing    |
| `public static int square(int number)`            | `int`       | returns an `int`   |
| `public static double divide(double x, double y)` | `double`    | returns a `double` |

AP trap:

AP 常见陷阱：

```java
int x = printHello();   // wrong if printHello is void
```

A `void` method cannot be used as a value.

`void` 方法不能当作一个值来使用。

# 4. The `return` Statement<br>`return` 语句

A non-void method must return a value of the correct type.

非 `void` 方法必须返回正确类型的值。

```java
public static int square(int number)
{
    int result = number * number;
    return result;
}
```

The return value goes back to the place where the method was called.

返回值会回到方法被调用的位置。

```java
int y = square(5);
```

This means:

```text
square(5) returns 25
y gets 25
```

也就是：

```text
square(5) 返回 25
y 得到 25
```

The `return` statement also ends the method.

`return` 也会结束方法的执行。

# 5. Using Return Values<br>使用返回值

When you call a non-void method, you should usually do something with the value it returns.

调用非 `void` 方法时，通常应该使用它返回的值。

## Option 1: Store it in a variable<br>方式 1：存入变量

```java
int y = square(5);
System.out.println(y);
```

Output:

```text
25
```

## Option 2: Print it directly<br>方式 2：直接打印

```java
System.out.println(square(4));
```

Output:

```text
16
```

## Option 3: Use it in an expression<br>方式 3：放进表达式

```java
int total = square(3) + square(4);
System.out.println(total);
```

Output:

```text
25
```

Because:

因为：

```text
square(3) + square(4)
= 9 + 16
= 25
```

A call like this is legal but usually not useful:

下面这种写法通常没有意义：

```java
square(5);
```

The method returns `25`, but the program does not store, print, or use it.

这个方法返回了 `25`，但程序没有保存、打印或使用它。

# 6. Calling Methods from Another Class<br>调用其他类中的方法

When a static method is in another class, use:

如果 static 方法在另一个类中，使用：

```java
ClassName.methodName(arguments);
```

Example:

```java
double x = Math.pow(3, 2);
double y = Math.sqrt(9);

System.out.println(x);
System.out.println(y);
```

Output:

```text
9.0
3.0
```

Important AP point:

AP 重点：

`Math.pow` and `Math.sqrt` return `double` values.

`Math.pow` 和 `Math.sqrt` 返回的是 `double` 值。

So this is correct:

```java
double x = Math.pow(3, 2);
```

This is not correct:

```java
int x = Math.pow(3, 2);
```

The method returns a `double`, and Java will not automatically store that into an `int`.

该方法返回 `double`，Java 不会自动把它存进 `int`。

# 7. Matching Arguments and Return Types<br>匹配实参与返回类型

When calling a method, check three things:

调用方法时，检查三件事：

* number of arguments

* order of arguments

* compatible argument types

* 实参数量

* 实参顺序

* 实参类型是否兼容

Example:

```java
public static double divide(double x, double y)
{
    return x / y;
}
```

Correct:

```java
double result = divide(5, 2);
```

Output:

```text
2.5
```

`5` and `2` are `int` literals, but they can be widened to `double`.

`5` 和 `2` 是 `int` 字面量，但可以自动拓宽为 `double`。

Wrong return variable type:

```java
int result = divide(5, 2);
```

The method returns a `double`, so the result should be stored in a `double`.

这个方法返回 `double`，所以结果应该存进 `double` 变量。

Wrong logical order:

```java
double result = divide(2, 5);
```

This compiles, but it calculates `2 / 5`, not `5 / 2`.

这段代码可以编译，但它算的是 `2 / 5`，不是 `5 / 2`。

# 8. Method Calls in Expressions<br>表达式中的方法调用

A non-void method call can appear anywhere a value of that type can appear.

非 `void` 方法调用可以出现在任何需要该类型值的位置。

Example:

```java
public class MethodTrace
{
    public static int square(int x)
    {
        return x * x;
    }

    public static int divide(int x, int y)
    {
        return x / y;
    }

    public static void main(String[] args)
    {
        System.out.println(square(3) + divide(5, 2));
    }
}
```

Output:

```text
11
```

Trace:

| Expression     | Result |
| -------------- | -----: |
| `square(3)`    |    `9` |
| `divide(5, 2)` |    `2` |
| `9 + 2`        |   `11` |

Notice that `divide(5, 2)` returns `2`, not `2.5`, because this version of `divide` uses `int` parameters and returns an `int`.

注意：这里 `divide(5, 2)` 返回 `2`，不是 `2.5`，因为这个版本的 `divide` 使用 `int` 参数并返回 `int`。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                         | Wrong Code              | Why Wrong                      | Correct Code               | 中文解释                  |
| ----------------------------------------------- | ----------------------- | ------------------------------ | -------------------------- | --------------------- |
| Ignoring a returned value                       | `square(5);`            | Return value is not used       | `int y = square(5);`       | 返回值没有被使用              |
| Assigning `double` to `int`                     | `int x = Math.sqrt(9);` | `Math.sqrt` returns `double`   | `double x = Math.sqrt(9);` | `double` 不能直接存进 `int` |
| Wrong number of arguments                       | `square(4, 2);`         | `square` expects one argument  | `square(4);`               | 实参数量不匹配               |
| Wrong argument order                            | `divide(2, 5);`         | Calculates the wrong direction | `divide(5, 2);`            | 顺序错可能导致逻辑错误           |
| Using a `void` method as a value                | `int x = printHello();` | `void` returns nothing         | call `printHello();` alone | `void` 方法没有返回值        |
| Forgetting class name for external class method | `sqrt(9);`              | `sqrt` is in the `Math` class  | `Math.sqrt(9);`            | 调用其他类的方法要加类名          |

# 10. Debugging Example<br>调试例子

Buggy code:

```java
public class MathMethods
{
    public static int square(int number)
    {
        return number * number;
    }

    public static double divide(double x, double y)
    {
        return x / y;
    }

    public static void main(String[] args)
    {
        int result1 = square(4.0, 2);
        int result2 = divide(2, 5);

        System.out.println("4 squared is " + result1);
        System.out.println("5 divided by 2 is " + result2);
    }
}
```

Problems:

* `square` expects one `int` argument, but the call gives two arguments.
* `divide` returns a `double`, but `result2` is declared as `int`.
* `divide(2, 5)` calculates `2 / 5`, not `5 / 2`.

问题：

* `square` 需要一个 `int` 实参，但调用时给了两个实参。
* `divide` 返回 `double`，但 `result2` 被声明成了 `int`。
* `divide(2, 5)` 算的是 `2 / 5`，不是 `5 / 2`。

Fixed code:

```java
public class MathMethods
{
    public static int square(int number)
    {
        return number * number;
    }

    public static double divide(double x, double y)
    {
        return x / y;
    }

    public static void main(String[] args)
    {
        int result1 = square(4);
        double result2 = divide(5, 2);

        System.out.println("4 squared is " + result1);
        System.out.println("5 divided by 2 is " + result2);
    }
}
```

Output:

```text
4 squared is 16
5 divided by 2 is 2.5
```

| Bug                          | Type               | Fix                             |
| ---------------------------- | ------------------ | ------------------------------- |
| `square(4.0, 2)`             | compile-time error | `square(4)`                     |
| `int result2 = divide(5, 2)` | compile-time error | `double result2 = divide(5, 2)` |
| `divide(2, 5)`               | logic error        | `divide(5, 2)`                  |

# 11. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is printed?

```java
public class Test
{
    public static int doubleIt(int x)
    {
        return x * 2;
    }

    public static void main(String[] args)
    {
        System.out.println(doubleIt(4) + 1);
    }
}
```

Answer:

```text
9
```

Explanation: `doubleIt(4)` returns `8`, and `8 + 1` is `9`.

解释：`doubleIt(4)` 返回 `8`，`8 + 1` 是 `9`。

## Practice 2: Predict the Result<br>练习 2：预测结果

What is printed?

```java
public static int square(int x)
{
    return x * x;
}

public static int divide(int x, int y)
{
    return x / y;
}

public static void main(String[] args)
{
    System.out.println(square(3) + divide(5, 2));
}
```

Answer:

```text
11
```

Explanation: `square(3)` returns `9`; `divide(5, 2)` returns `2` because it uses integer division.

解释：`square(3)` 返回 `9`；`divide(5, 2)` 返回 `2`，因为这里是整数除法。

## Practice 3: Match the Method Call<br>练习 3：匹配方法调用

Given this method:

```java
public static double calculatePizzaBoxes(int numOfPeople, double slicesPerBox)
{
    return numOfPeople / slicesPerBox;
}
```

Which line compiles correctly?

A. `int result = calculatePizzaBoxes(45, 9.0);`
B. `double result = calculatePizzaBoxes(45.0, 9.0);`
C. `int result = calculatePizzaBoxes(45.0, 9);`
D. `double result = calculatePizzaBoxes(45, 9.0);`

Answer:

```text
D. double result = calculatePizzaBoxes(45, 9.0);
```

Explanation: the method needs an `int` first and a `double` second, and it returns a `double`.

解释：这个方法需要第一个实参是 `int`，第二个实参是 `double`，并且返回 `double`。

## Practice 4: Fix the Code<br>练习 4：修复代码

Fix the code.

```java
int x = Math.sqrt(25);
System.out.println(x);
```

Fixed code:

```java
double x = Math.sqrt(25);
System.out.println(x);
```

Output:

```text
5.0
```

Explanation: `Math.sqrt` returns a `double`.

解释：`Math.sqrt` 返回的是 `double`。

# Quick Checklist<br>快速检查清单

Before answering a class-method question, check:

做类方法题前，检查：

* Is the method `static`?
* Is the method in the same class or another class?
* If it is in another class, did you use `ClassName.methodName(arguments)`?
* Is the method `void` or non-void?
* If it is non-void, what type does it return?
* Is the return value stored, printed, or used in an expression?
* Are you assigning the return value to a compatible variable type?
* Do the number of arguments match the parameter list?
* Do the argument types match or widen safely?
* Is the argument order correct?
* If a method call is inside an expression, what value does it produce?
* If `Math.sqrt` or `Math.pow` is used, are you expecting a `double` result?

