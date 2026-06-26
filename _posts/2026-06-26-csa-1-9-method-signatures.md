---
title: "AP CSA 1.9：方法签名"
layout: post
categories: media
render_with_liquid: false
---

In earlier lessons, most of our code ran directly inside `main`. In this lesson, we learn how methods help organize code, reduce repetition, and make programs easier to trace.

前几课中，大部分代码都直接写在 `main` 方法里。这一课，我们学习方法如何帮助我们组织代码、减少重复，并让程序更容易追踪。

> **A method is a named block of code; a method signature tells Java which method call matches which method.**
> **方法是有名字的代码块；方法签名帮助 Java 判断一次方法调用对应哪一个方法。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.9 方法签名<br>Method Signatures

## 方法与过程抽象<br>Methods and Procedural Abstraction

* 方法：有名字的代码块<br>Method: named block of code
* 被调用时才会运行<br>Runs only when called
* 把大问题拆成小任务<br>Break large problems into smaller tasks
* 关注“做什么”，不必关心“怎么做”<br>Focus on what it does, not how

## 方法调用与流程<br>Method Calls and Flow

* `methodName();`：调用无参数方法<br>Call a method with no parameters
* 程序从 `main` 开始执行<br>Execution starts in `main`
* 调用方法会跳到方法体执行<br>Flow jumps to the method body
* 方法结束后回到调用后的下一行<br>Returns to the line after the call

## 方法头与方法签名<br>Header and Signature

* 方法头：包含返回类型、方法名、参数列表<br>Header: return type, name, parameter list
* 方法签名：方法名 + 参数类型列表<br>Signature: method name + parameter type list
* 返回类型不是方法签名的一部分<br>Return type is not part of the signature

## 参数与实参<br>Parameters and Arguments

* 参数：方法头中的变量<br>Parameter: variable in method header
* 实参：调用时传入的值<br>Argument: value passed in a call
* 调用时只写值，不写数据类型<br>Calls use values, not data types
* 实参数量、顺序、类型要匹配<br>Number, order, and types must match

## 按值传递<br>Call by Value

* 参数接收实参值的副本<br>Parameter gets a copy of the argument value
* 简单变量传入后，方法内重新赋值不会改外面的变量<br>Reassigning a parameter does not change the outside variable

## 方法重载<br>Overloading

* 同名方法可以有不同签名<br>Same name, different signatures
* `println()`、`println(String x)`、`println(int x)`<br>Examples of overloaded methods
* Java 根据实参列表选择方法<br>Java chooses by argument list

## AP 考点<br>AP Exam Focus

* 追踪方法调用顺序<br>Trace method call order
* 判断输出<br>Predict output
* 区分参数和实参<br>Distinguish parameters and arguments
* 判断调用是否匹配签名<br>Check whether a call matches a signature
* 理解重载方法的选择<br>Understand overloaded method selection

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A **method** is a named block of code that performs a task when it is called.

**方法（method）** 是一个有名字的代码块，被调用时会执行某个任务。

```java
public static void sayHello()
{
    System.out.println("Hello");
}
```

This method does not run just because it exists. It runs only when it is called.

这个方法不会因为“存在”就自动运行。它只有在被调用时才会执行。

```java
sayHello();
```

For AP CSA 1.9, the key is not writing complicated methods. The key is reading method definitions, matching calls to methods, and tracing the order of execution.

对于 AP CSA 1.9，重点不是写很复杂的方法，而是能读懂方法定义、匹配方法调用，并追踪执行顺序。

# 2. Procedural Abstraction<br>过程抽象

Procedural abstraction means using a method by knowing **what it does**, without needing to know every detail of **how it works**.

过程抽象的意思是：我们只需要知道一个方法“做什么”，不一定需要知道它内部“怎么做”。

For example:

```java
System.out.println("Hello");
```

You know it prints text. You do not need to know the internal code of `println`.

你知道它会打印文字，但不需要知道 `println` 内部到底怎样实现。

Procedural abstraction helps programmers:

过程抽象可以帮助程序员：

* divide a complex problem into smaller subproblems

* reduce repeated code

* make code easier to read and trace

* 把复杂问题拆成小问题

* 减少重复代码

* 让代码更容易阅读和追踪

# 3. Method Calls and Flow of Control<br>方法调用与执行流程

Execution starts in the `main` method.

程序从 `main` 方法开始执行。

When Java sees a method call, it jumps to that method, runs the method body, and then returns to the line after the call.

当 Java 遇到方法调用时，会跳到对应的方法，执行方法体，然后回到调用语句后面的下一行。

Example:

```java
public class Song
{
    public static void chorus()
    {
        System.out.println("E-I-E-I-O");
    }

    public static void main(String[] args)
    {
        System.out.println("Old MacDonald had a farm");
        chorus();
        System.out.println("And on that farm he had a cow");
    }
}
```

Output:

```text
Old MacDonald had a farm
E-I-E-I-O
And on that farm he had a cow
```

Trace it like this:

| Step | Code running               | Output                          |
| ---- | -------------------------- | ------------------------------- |
| 1    | `main` starts              |                                 |
| 2    | first `println`            | `Old MacDonald had a farm`      |
| 3    | `chorus();` calls `chorus` | `E-I-E-I-O`                     |
| 4    | return to `main`           |                                 |
| 5    | last `println`             | `And on that farm he had a cow` |

# 4. Method Header vs. Method Signature<br>方法头 vs. 方法签名

A **method header** is the first line of a method definition.

**方法头（method header）** 是方法定义的第一行。

```java
public static void verse(String animal, String sound)
```

For AP CSA, understand these parts:

| Part           | Example                         | Meaning                      |
| -------------- | ------------------------------- | ---------------------------- |
| return type    | `void`                          | this method returns no value |
| method name    | `verse`                         | name used to call the method |
| parameter list | `(String animal, String sound)` | values the method needs      |

A **method signature** is:

**方法签名（method signature）** 是：

```text
method name + ordered list of parameter types
```

For example:

```java
public static void verse(String animal, String sound)
```

Its method signature is:

```text
verse(String, String)
```

Important AP point: the **return type is not part of the method signature**.

AP 重点：**返回类型不是方法签名的一部分**。

# 5. Parameters and Arguments<br>参数与实参

A **parameter** is a variable declared in the method header.

**参数（parameter）** 是方法头里声明的变量。

An **argument** is the actual value passed into the method call.

**实参（argument）** 是调用方法时真正传进去的值。

Example:

```java
public static void verse(String animal, String sound)
{
    System.out.println("The animal is a " + animal);
    System.out.println("It says " + sound);
}

public static void main(String[] args)
{
    verse("cow", "moo");
}
```

Here:

| Code     | Role      |
| -------- | --------- |
| `animal` | parameter |
| `sound`  | parameter |
| `"cow"`  | argument  |
| `"moo"`  | argument  |

When the method is called:

```text
animal gets "cow"
sound gets "moo"
```

调用方法时：

```text
animal 得到 "cow"
sound 得到 "moo"
```

# 6. Method Calls Do Not Include Data Types<br>调用方法时不要写数据类型

In a method header, parameters include data types.

在方法头中，参数要写数据类型。

```java
public static void verse(String animal, String sound)
```

But in a method call, you only pass values.

但是调用方法时，只传值，不写数据类型。

Correct:

```java
verse("duck", "quack");
```

Wrong:

```java
verse(String "duck", String "quack");
```

The arguments must match the parameter list in:

实参必须和参数列表匹配：

* number

* order

* compatible data type

* 数量

* 顺序

* 兼容的数据类型

Example:

```java
public static void printScore(String name, int score)
{
    System.out.println(name + ": " + score);
}
```

Correct:

```java
printScore("Evie", 95);
```

Wrong:

```java
printScore(95, "Evie");
```

The order is wrong.

顺序错了。

# 7. Call by Value<br>按值传递

Java uses **call by value** when passing arguments to methods.

Java 调用方法传参时使用 **按值传递（call by value）**。

This means the parameter gets a **copy** of the argument value.

意思是：参数得到的是实参值的一个**副本**。

Example:

```java
public static void change(int x)
{
    x = 10;
    System.out.println("inside method: " + x);
}

public static void main(String[] args)
{
    int num = 5;
    change(num);
    System.out.println("after method: " + num);
}
```

Output:

```text
inside method: 10
after method: 5
```

Inside the method, `x` changes to `10`. But `num` in `main` is still `5`.

在方法内部，`x` 变成了 `10`。但是 `main` 里的 `num` 仍然是 `5`。

For this lesson, remember:

本课记住：

```text
parameter = copy of the argument value
```

# 8. Overloaded Methods<br>方法重载

Methods are **overloaded** when multiple methods have the same name but different signatures.

如果多个方法名字相同，但方法签名不同，这叫 **方法重载（overloading）**。

Example:

```java
System.out.println();
System.out.println("Hello");
System.out.println(42);
```

These are different versions of `println`.

这些是 `println` 的不同版本。

| Method Call        | Matching Signature | Meaning         |
| ------------------ | ------------------ | --------------- |
| `println()`        | `println()`        | print a newline |
| `println("Hello")` | `println(String)`  | print a String  |
| `println(42)`      | `println(int)`     | print an int    |

Java chooses which method to use based on the number and types of arguments.

Java 会根据实参的数量和类型，选择对应的方法。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                            | Wrong Code                           | Why Wrong                            | Correct Code               | 中文解释          |
| ---------------------------------- | ------------------------------------ | ------------------------------------ | -------------------------- | ------------- |
| Forgetting parentheses             | `chorus;`                            | Method calls need `()`               | `chorus();`                | 调用方法必须写括号     |
| Thinking methods run automatically | only defining `chorus()`             | A method runs only when called       | call `chorus();` in `main` | 方法定义了不等于执行了   |
| Putting data types in method calls | `verse(String "cow", String "moo");` | Calls use values only                | `verse("cow", "moo");`     | 调用时不写数据类型     |
| Wrong argument order               | `printScore(95, "Evie");`            | Order must match parameters          | `printScore("Evie", 95);`  | 实参顺序要匹配       |
| Confusing parameter and argument   | saying `"cow"` is a parameter        | `"cow"` is passed during the call    | `"cow"` is an argument     | 参数在方法头，实参在调用里 |
| Including return type in signature | `void verse(String, String)`         | Return type is not part of signature | `verse(String, String)`    | 方法签名不包含返回类型   |

# 10. Debugging Example<br>调试例子

Buggy code:

```java
public class Song
{
    public static void verse(String animal, String sound)
    {
        System.out.println(animal + " says " + sound);
    }

    public static void main(String[] args)
    {
        verse(String "cow", String "moo");
    }
}
```

Problem:

The method call incorrectly includes data types. Data types belong in the method header, not in the method call.

问题：

方法调用里错误地写了数据类型。数据类型应该写在方法头里，而不是调用语句里。

Fixed code:

```java
public class Song
{
    public static void verse(String animal, String sound)
    {
        System.out.println(animal + " says " + sound);
    }

    public static void main(String[] args)
    {
        verse("cow", "moo");
    }
}
```

Output:

```text
cow says moo
```

| Bug                                  | Type                        | Fix                        |
| ------------------------------------ | --------------------------- | -------------------------- |
| `verse(String "cow", String "moo");` | syntax / compile-time error | use `verse("cow", "moo");` |
| wrong number of arguments            | compile-time error          | match the parameter list   |
| wrong argument type                  | compile-time error          | pass a compatible value    |
| wrong argument order                 | compile-time or logic error | match the parameter order  |

# 11. Mini Practice<br>小练习

## Practice 1: Choose the Output<br>练习 1：选择输出

What is printed?

```java
public class Test
{
    public static void a()
    {
        System.out.print("A");
    }

    public static void b()
    {
        System.out.print("B");
        a();
    }

    public static void main(String[] args)
    {
        a();
        b();
    }
}
```

Answer:

```text
ABA
```

Explanation: `main` calls `a()` first, printing `A`. Then it calls `b()`, which prints `B` and then calls `a()` again.

解释：`main` 先调用 `a()`，打印 `A`。然后调用 `b()`，先打印 `B`，再调用 `a()` 打印 `A`。

## Practice 2: Match the Signature<br>练习 2：匹配方法签名

Given this method:

```java
public static void printScore(String name, int score)
{
    System.out.println(name + ": " + score);
}
```

Which call is correct?

A. `printScore("Mia", 90);`
B. `printScore(90, "Mia");`
C. `printScore(String "Mia", int 90);`
D. `printScore("Mia");`

Answer:

```text
A. printScore("Mia", 90);
```

Explanation: the method needs a `String` first and an `int` second.

解释：这个方法需要第一个实参是 `String`，第二个实参是 `int`。

## Practice 3: Predict Call by Value<br>练习 3：预测按值传递

What is printed?

```java
public class Test
{
    public static void change(int x)
    {
        x = x + 5;
    }

    public static void main(String[] args)
    {
        int num = 10;
        change(num);
        System.out.println(num);
    }
}
```

Answer:

```text
10
```

Explanation: `x` gets a copy of `num`’s value. Changing `x` does not change `num`.

解释：`x` 得到的是 `num` 的值的副本。改变 `x` 不会改变 `num`。

## Practice 4: Fix the Code<br>练习 4：修复代码

Fix the method call.

```java
public static void verse(String animal, String sound)
{
    System.out.println(animal + " says " + sound);
}

public static void main(String[] args)
{
    verse(String "duck", String "quack");
}
```

Fixed code:

```java
public static void main(String[] args)
{
    verse("duck", "quack");
}
```

Explanation: data types appear in the method header, not in the method call.

解释：数据类型写在方法头里，不写在方法调用里。

# Quick Checklist<br>快速检查清单

Before answering a method-signature question, check:

做方法签名题前，检查：

* Where does execution start?
* Which method is called first?
* After a method finishes, where does control return?
* Is the method call written with parentheses?
* Does the method call use the correct method name?
* How many arguments are passed?
* Do the argument types match the parameter types?
* Is the argument order correct?
* Are you confusing parameters with arguments?
* Is the method signature only the method name plus parameter types?
* Are you accidentally including the return type in the signature?
* If methods are overloaded, which signature matches the call?
* If a parameter changes inside a method, does the outside variable actually change?
