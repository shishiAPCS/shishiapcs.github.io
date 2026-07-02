---
title: "AP CSA 1.13：创建和初始化对象：构造器"
layout: post
categories: media
render_with_liquid: false
---

In the previous lesson, we learned that objects are instances of classes. In this lesson, we learn how objects are created and initialized using constructors.

上一课我们学习了对象是类的实例。这一课，我们学习如何使用构造器创建并初始化对象。

> **A constructor is called with `new` to create an object and initialize its attributes.**
> **构造器通过 `new` 被调用，用来创建对象并初始化对象的属性。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.13 创建和初始化对象：构造器<br>Creating and Initializing Objects: Constructors

## 基本语法<br>Basic Syntax

* `new` 用来创建对象<br>`new` creates an object
* 构造器名字和类名相同<br>Constructor name matches class name
* 格式：`ClassName variableName = new ClassName(arguments);`<br>General syntax
* 例子：`World w = new World();`<br>Create a World object

## 构造器的作用<br>Purpose of Constructors

* 初始化新对象的属性<br>Initialize attributes of a new object
* 实参用于设置初始值<br>Arguments set initial values
* 构造器执行完后，程序回到创建对象后的下一行<br>Flow returns after constructor finishes

## 构造器重载<br>Constructor Overloading

* 一个类可以有多个构造器<br>A class can have multiple constructors
* 构造器签名必须不同<br>Signatures must be different
* 可按参数数量、类型、顺序区分<br>Differ by number, type, or order
* 无参构造器通常设置默认值<br>No-argument constructor often sets default values

## 参数与实参<br>Parameters and Arguments

* 参数：构造器头中的变量<br>Parameters: variables in constructor header
* 实参：调用构造器时传入的值<br>Arguments: values passed in
* 数量、顺序、类型必须匹配<br>Number, order, and types must match
* 按值传递：参数得到实参值的副本<br>Call by value: parameters get copies

## 对象引用与 null<br>Object References and null

* 引用类型变量保存对象引用<br>Reference variables store object references
* 可理解为对象的内存地址<br>Can be thought of as memory address
* `null` 表示没有指向任何对象<br>`null` means no object
* 例子：`Turtle t = null;`<br>Reference variable points to nothing

## AP 考点<br>AP Exam Focus

* 判断构造器调用是否合法<br>Check valid constructor calls
* 匹配实参与构造器签名<br>Match arguments to constructor signatures
* 识别构造器重载<br>Identify overloaded constructors
* 区分参数和实参<br>Distinguish parameters and arguments
* 注意缺少 `new` 的错误<br>Watch for missing `new`

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A **constructor** is used to create and initialize a new object.

**构造器（constructor）** 用来创建并初始化一个新对象。

The general syntax is:

基本语法是：

```java
ClassName variableName = new ClassName(arguments);
```

Example:

```java
World habitat = new World();
Turtle yertle = new Turtle(habitat);
```

`new World()` creates a new `World` object.
`new Turtle(habitat)` creates a new `Turtle` object inside the world.

`new World()` 创建一个新的 `World` 对象。
`new Turtle(habitat)` 在这个世界中创建一个新的 `Turtle` 对象。

# 2. Constructors Match the Class Name<br>构造器名字和类名相同

A constructor has the same name as the class.

构造器的名字和类名相同。

Example:

```java
public class Date
{
    private int year;
    private int month;
    private int day;

    public Date()
    {
        // implementation not shown
    }

    public Date(int y, int m, int d)
    {
        // implementation not shown
    }
}
```

Here, both constructors are named `Date` because the class is named `Date`.

这里两个构造器都叫 `Date`，因为类名是 `Date`。

Important AP point:

AP 重点：

```text
constructor name = class name
```

# 3. Object Creation Syntax<br>对象创建语法

To create an object, you usually need both:

创建对象时，通常需要这两部分：

* the keyword `new`

* a constructor call

* 关键字 `new`

* 构造器调用

Correct:

```java
World w = new World();
World w2 = new World(300, 500);
```

Wrong:

```java
World w = new World;
World w = World();
```

Why?

为什么？

| Code              | Problem                                     |
| ----------------- | ------------------------------------------- |
| `new World`       | missing parentheses                         |
| `World()`         | missing `new`                               |
| `World w = null;` | valid declaration, but no object is created |

`World w = null;` is legal Java, but it does not create a `World` object.

`World w = null;` 是合法的 Java 代码，但它没有创建 `World` 对象。

# 4. Constructor Overloading<br>构造器重载

A class can have more than one constructor.

一个类可以有多个构造器。

This is called **constructor overloading**.

这叫 **构造器重载（constructor overloading）**。

Example:

```java
World world1 = new World();
World world2 = new World(300, 400);
```

These constructor calls match different constructor signatures:

这些构造器调用匹配不同的构造器签名：

| Constructor Call      | Meaning                                          |
| --------------------- | ------------------------------------------------ |
| `new World()`         | create a default-size world                      |
| `new World(300, 400)` | create a world with width `300` and height `400` |

A no-argument constructor has no arguments inside the parentheses.

无参构造器的括号里没有实参。

```java
new World()
```

It often sets attributes to default values.

它通常会把对象的属性设置为默认值。

# 5. Constructor Signatures<br>构造器签名

A constructor signature consists of:

构造器签名由这两部分组成：

```text
constructor name + ordered list of parameter types
```

也就是：

```text
构造器名字 + 按顺序排列的参数类型列表
```

Example:

```java
public Date()
{
}

public Date(int year, int month, int day)
{
}
```

The constructor signatures are:

```text
Date()
Date(int, int, int)
```

Constructor signatures do **not** use variable names when matching calls. The important part is the constructor name and the ordered parameter types.

匹配构造器调用时，重点不是变量名，而是构造器名字和按顺序排列的参数类型。

# 6. Matching Arguments to Constructors<br>匹配实参与构造器

Constructor arguments must match the constructor signature in:

构造器实参必须和构造器签名匹配：

* number

* order

* compatible type

* 数量

* 顺序

* 兼容的数据类型

Example:

```java
World world1 = new World(300, 400);
Turtle t = new Turtle(50, 100, world1);
```

If the `Turtle` constructor expects:

```java
Turtle(int x, int y, World world)
```

then this is correct:

```java
Turtle t = new Turtle(50, 100, world1);
```

This is wrong:

```java
Turtle t = new Turtle(world1, 50, 100);
```

The order does not match the constructor signature.

实参顺序和构造器签名不匹配。

# 7. Parameters and Arguments<br>参数与实参

A **parameter** is a variable in the constructor header.

**参数（parameter）** 是构造器头中的变量。

An **argument** is the value passed into the constructor call.

**实参（argument）** 是调用构造器时传入的值。

Example:

```java
public World(int width, int height)
{
    // implementation not shown
}

World w = new World(150, 200);
```

Here:

| Item     | Role      |
| -------- | --------- |
| `width`  | parameter |
| `height` | parameter |
| `150`    | argument  |
| `200`    | argument  |

When the constructor is called:

```text
width gets 150
height gets 200
```

调用构造器时：

```text
width 得到 150
height 得到 200
```

Java uses **call by value**, so the parameters receive copies of the argument values.

Java 使用 **按值传递（call by value）**，所以参数接收的是实参值的副本。

# 8. Object References and `null`<br>对象引用与 null

A variable of a class type stores an object reference.

类类型变量存储的是对象引用。

You can think of an object reference as a way to find the object in memory.

可以把对象引用理解成找到对象的“内存地址”。

```java
World world1 = new World();
Turtle t1 = new Turtle(world1);
```

A reference variable can also store `null`.

引用变量也可以存储 `null`。

```java
Turtle t1 = null;
```

This means:

```text
t1 does not refer to any Turtle object yet.
```

意思是：

```text
t1 目前没有指向任何 Turtle 对象。
```

Later, it can refer to a real object:

之后，它可以指向一个真正的对象：

```java
t1 = new Turtle(world1);
```

# 9. Reading a Class Definition<br>读懂类定义

AP CSA questions may show you a class and ask which constructor call is valid.

AP CSA 题目可能会给你一个类定义，让你判断哪个构造器调用是合法的。

Example:

```java
public class Cat
{
    private String color;
    private String breed;
    private boolean isHungry;

    public Cat()
    {
        color = "unknown";
        breed = "unknown";
        isHungry = false;
    }

    public Cat(String c, String b, boolean h)
    {
        color = c;
        breed = b;
        isHungry = h;
    }
}
```

Valid constructor calls:

```java
Cat a = new Cat();
Cat c = new Cat("orange", "Tabby", false);
```

Invalid constructor call:

```java
Cat b = new Cat("Shorthair", true);
```

Why?

为什么？

There is no constructor with the signature:

```text
Cat(String, boolean)
```

这个类中没有 `Cat(String, boolean)` 这个构造器签名。

# 10. Common Beginner Mistakes<br>常见初学者错误

| Mistake                           | Wrong Code                    | Why Wrong                                        | Correct Code                        | 中文解释           |
| --------------------------------- | ----------------------------- | ------------------------------------------------ | ----------------------------------- | -------------- |
| Missing `new`                     | `World w = World();`          | constructor calls that create objects need `new` | `World w = new World();`            | 创建对象要用 `new`   |
| Missing parentheses               | `World w = new World;`        | constructor call needs `()`                      | `World w = new World();`            | 构造器调用要有括号      |
| Wrong argument order              | `new Turtle(world1, 50, 100)` | order does not match expected signature          | `new Turtle(50, 100, world1)`       | 实参顺序必须匹配       |
| Wrong number of arguments         | `new Cat("Tabby", true)`      | no matching constructor                          | `new Cat("orange", "Tabby", false)` | 实参数量不匹配        |
| Confusing parameter and argument  | saying `150` is a parameter   | `150` is passed in the call                      | `150` is an argument                | 参数在构造器头，实参在调用里 |
| Thinking `null` creates an object | `Turtle t = null;`            | `null` means no object                           | `Turtle t = new Turtle(world1);`    | `null` 不创建对象   |

# 11. Debugging Example<br>调试例子

Buggy code:

```java
public class TurtleConstructorDebug
{
    public static void main(String[] args)
    {
        World w = new World(300, 300);

        Turtle t1 = new Turtle();
        Turtle t2 = new Turtle(w, 100, 50);

        t1.forward();
        t2.turnLeft();

        w.show(true);
    }
}
```

Problems:

* `new Turtle()` is invalid if the Turtle constructor requires a `World`.
* `new Turtle(w, 100, 50)` has the wrong argument order if the expected signature is `Turtle(int x, int y, World world)`.

问题：

* 如果 Turtle 构造器需要一个 `World`，那么 `new Turtle()` 不合法。
* 如果构造器签名是 `Turtle(int x, int y, World world)`，那么 `new Turtle(w, 100, 50)` 的实参顺序错误。

Fixed code:

```java
public class TurtleConstructorDebug
{
    public static void main(String[] args)
    {
        World w = new World(300, 300);

        Turtle t1 = new Turtle(w);
        Turtle t2 = new Turtle(100, 50, w);

        t1.forward();
        t2.turnLeft();

        w.show(true);
    }
}
```

| Bug                                     | Type               | Fix                          |
| --------------------------------------- | ------------------ | ---------------------------- |
| `new Turtle()`                          | compile-time error | use `new Turtle(w)`          |
| `new Turtle(w, 100, 50)`                | compile-time error | use `new Turtle(100, 50, w)` |
| missing semicolon after object creation | compile-time error | end statement with `;`       |

# 12. Mini Practice<br>小练习

## Practice 1: Valid Syntax<br>练习 1：判断合法语法

Which lines correctly create or initialize a `World` reference?

```java
A. World w = null;
B. World w = new World;
C. World w = new World();
D. World w = World();
E. World w = new World(300, 500);
```

Answer:

```text
A, C, and E
```

Explanation: `null` is a valid reference value, but it does not create an object. `new World()` and `new World(300, 500)` call constructors correctly.

解释：`null` 是合法的引用值，但不创建对象。`new World()` 和 `new World(300, 500)` 正确调用了构造器。

## Practice 2: Parameters or Arguments?<br>练习 2：参数还是实参？

In this constructor header:

```java
public World(int width, int height)
```

What are `width` and `height`?

Answer:

```text
parameters
```

解释：

```text
它们是参数，因为它们出现在构造器头中。
```

In this constructor call:

```java
new World(150, 200)
```

What are `150` and `200`?

Answer:

```text
arguments
```

解释：

```text
它们是实参，因为它们是在调用构造器时传入的值。
```

## Practice 3: Match the Constructor<br>练习 3：匹配构造器

Given this class:

```java
public class Movie
{
    public Movie(String t, String d, double r)
    {
        // implementation not shown
    }

    public Movie(String t)
    {
        // implementation not shown
    }
}
```

Which code constructs a `Movie` object with title `"Lion King"` and rating `8.0`?

A. `Movie m = new Movie(8.0, "Lion King");`
B. `Movie m = Movie("Lion King", 8.0);`
C. `Movie m = new Movie();`
D. `Movie m = new Movie("Lion King", "Disney", 8.0);`
E. `Movie m = new Movie("Lion King");`

Answer:

```text
D. Movie m = new Movie("Lion King", "Disney", 8.0);
```

Explanation: this matches the constructor signature `Movie(String, String, double)`.

解释：这个调用匹配 `Movie(String, String, double)` 这个构造器签名。

## Practice 4: Fix the Code<br>练习 4：修复代码

Fix the constructor call.

```java
World world1 = new World(300, 400);
Turtle t = new Turtle(world1, 50, 100);
```

Assume the constructor signature is:

```java
Turtle(int x, int y, World world)
```

Fixed code:

```java
World world1 = new World(300, 400);
Turtle t = new Turtle(50, 100, world1);
```

Explanation: the arguments must match the constructor signature in number, order, and type.

解释：实参必须在数量、顺序和类型上匹配构造器签名。

# Quick Checklist<br>快速检查清单

Before answering a constructor question, check:

做构造器题目前，检查：

* Is the object being created with `new`?
* Does the constructor name match the class name?
* Are parentheses included after the constructor name?
* Which constructor signatures are available?
* Is this a no-argument constructor or a constructor with parameters?
* Do the arguments match the constructor signature?
* Do the argument number, order, and types match?
* Are you confusing parameters with arguments?
* Is the variable a reference type variable?
* Does `null` mean “no object”?
* Is the constructor overloaded?
* If multiple constructors exist, which one matches the call?

