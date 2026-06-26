---
title: "AP CSA 1.7：API 与库"
layout: post
categories: media
render_with_liquid: false
---

In earlier lessons, we used code like `System.out.println()` without knowing exactly how it works inside. In this lesson, we learn why that is normal: programmers often use libraries and APIs written by other people.

前几课我们已经用过 `System.out.println()`，但并没有研究它内部到底怎么实现。这一课我们要理解：程序员经常使用别人已经写好的库和 API，这很正常，也很重要。

> **A library gives us reusable code; an API tells us how to use it.**
> **库提供可复用的代码；API 告诉我们怎样使用这些代码。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.7 API 与库<br>APIs and Libraries

## 核心定义<br>Core Definitions

* 库：别人写好的类的集合<br>Library: collection of classes written by others
* API：说明如何使用库<br>API: specification for how to use a library
* 包：相关类的分组<br>Package: group of related classes
* `java.lang`：Java 默认可用的基础包<br>Fundamental package available automatically

## 类与对象<br>Classes and Objects

* 类：对象的蓝图，也是一种引用类型<br>Class: blueprint and reference type
* 对象：类的具体实例<br>Object: instance of a class
* `Turtle yertle = new Turtle(habitat);`<br>Create a Turtle object

## 属性与行为<br>Attributes and Behaviors

* 属性：对象保存的数据<br>Attributes: data stored in variables / fields
* 例子：`xPos`、`yPos`、`heading`<br>Examples: position and direction
* 行为：对象能做的动作<br>Behaviors: actions defined by methods
* 例子：`forward()`、`turnRight()`<br>Examples: movement methods

## 点运算符<br>Dot Operator

* `objectName.methodName()`：调用对象的方法<br>Call a method on an object
* `yertle.forward();`：让海龟前进<br>Ask yertle to move forward
* 方法名后面要有括号<br>Methods need parentheses

## Javadocs 文档<br>Javadocs Documentation

* 查看类有哪些属性和方法<br>Shows fields and methods
* 字段 / 属性通常没有括号<br>Fields usually have no parentheses
* 方法通常有括号<br>Methods usually have parentheses
* `println()` 是方法<br>`println()` is a method

## AP 考点<br>AP Exam Focus

* 区分类、对象、属性、方法<br>Distinguish class, object, attribute, method
* 根据 API 描述判断属性和行为<br>Read API descriptions
* 正确使用点运算符<br>Use the dot operator
* 理解库和 API 的作用<br>Understand why libraries and APIs matter

## 常见错误<br>Common Mistakes

* 把类名当成对象名使用<br>Using class name as object name
* 调用方法时忘记 `()`<br>Forgetting parentheses
* 把属性误认为方法<br>Confusing fields and methods
* 不查 API 就乱猜方法名<br>Guessing method names without API

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A **library** is code written by other programmers that we can use.

**库（library）** 是别人已经写好的、我们可以直接使用的代码。

An **API** tells us how to use that code: what classes exist, what methods are available, what data they need, and what they do.

**API** 告诉我们怎样使用这些代码：有哪些类、有哪些方法、方法需要什么数据、会做什么事情。

For example:

```java
System.out.println("Hello");
```

You do not need to know how `println()` works internally. You only need to know how to call it and what it does.

你不需要知道 `println()` 内部是怎样实现的。你只需要知道怎样调用它，以及它会做什么。

# 2. Library, API, Package, Class, Method<br>库、API、包、类、方法

These terms are easy to mix up, so keep them separate.

这些概念很容易混在一起，要分清楚。

| Term    | Meaning                                         | 中文理解         |
| ------- | ----------------------------------------------- | ------------ |
| Library | A collection of reusable classes                | 可复用代码的集合     |
| API     | Documentation/specification for using a library | 使用库的说明书      |
| Package | A group of related classes                      | 相关类的分组       |
| Class   | A blueprint / reference type                    | 对象的蓝图 / 引用类型 |
| Method  | A block of code that performs a task            | 执行某个动作的代码块   |

A simple way to remember:

简单理解：

```text
library = code we can use
API = instructions for using the code
package = organized group of related classes
class = blueprint
method = action
```

# 3. Classes and Objects<br>类与对象

A **class** defines a kind of object.

**类（class）** 定义一种对象的类型。

An **object** is a specific instance created from a class.

**对象（object）** 是根据类创建出来的具体实例。

Example:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);
```

Here:

| Code                  | Role                        |
| --------------------- | --------------------------- |
| `World`               | class                       |
| `habitat`             | object variable             |
| `Turtle`              | class                       |
| `yertle`              | object variable             |
| `new Turtle(habitat)` | creates a new Turtle object |

`Turtle` is the class. `yertle` is the variable that refers to a specific Turtle object.

`Turtle` 是类；`yertle` 是变量，指向一个具体的 Turtle 对象。

# 4. Attributes and Behaviors<br>属性与行为

Classes define what objects **have** and what objects **can do**.

类会定义对象“有什么”和“能做什么”。

| Concept   | Meaning                    | Turtle Example                           |
| --------- | -------------------------- | ---------------------------------------- |
| Attribute | Data stored in an object   | `xPos`, `yPos`, `heading`, `color`       |
| Behavior  | Action defined by a method | `forward()`, `turnLeft()`, `turnRight()` |

A Turtle object has attributes such as position and direction.

一个 Turtle 对象有自己的属性，比如位置和方向。

A Turtle object also has behaviors, such as moving forward or turning.

Turtle 对象也有行为，比如前进和转弯。

# 5. The Dot Operator<br>点运算符

The dot operator `.` lets us access an object’s attributes or call its methods.

点运算符 `.` 可以让我们访问对象的属性，或者调用对象的方法。

```java
yertle.forward();
yertle.turnRight();
```

Read this as:

```text
Ask yertle to move forward.
Ask yertle to turn right.
```

可以理解为：

```text
让 yertle 前进。
让 yertle 向右转。
```

The general pattern is:

```java
objectName.methodName();
```

If a method needs extra information, the information goes inside the parentheses.

如果方法需要额外信息，就把信息放进括号里。

```java
yertle.forward(50);
```

This means: call `forward` on `yertle`, and move forward `50` pixels.

意思是：调用 `yertle` 的 `forward` 方法，前进 `50` 像素。

# 6. Methods Need Parentheses<br>方法需要括号

In Java, method calls use parentheses.

在 Java 中，调用方法时需要括号。

Correct:

```java
yertle.forward();
```

Wrong:

```java
yertle.forward;
```

Even if there is nothing inside the parentheses, the `()` still matters.

即使括号里没有参数，`()` 也必须写。

A useful clue when reading APIs:

读 API 时可以用这个线索：

| Form                  | Usually Means     |
| --------------------- | ----------------- |
| `forward()`           | method            |
| `xPos`                | attribute / field |
| `println()`           | method            |
| `out` in `System.out` | field             |

Methods usually have parentheses. Fields or attributes usually do not.

方法通常有括号；字段或属性通常没有括号。

# 7. Reading API Documentation<br>阅读 API 文档

API documentation tells you what a class provides.

API 文档会告诉你一个类提供了什么功能。

For a class, documentation usually lists:

一个类的文档通常会列出：

* fields / attributes: data connected to the object

* methods: actions the object can perform

* parameters: information a method needs

* return values: information a method gives back

* 字段 / 属性：对象相关的数据

* 方法：对象能执行的动作

* 参数：方法需要的信息

* 返回值：方法返回的信息

For example, if an API says:

```text
forward()
Moves the turtle forward by 100 pixels.
```

Then you can call:

```java
yertle.forward();
```

If an API says:

```text
forward(int pixels)
Moves the turtle forward by the given number of pixels.
```

Then you can call:

```java
yertle.forward(50);
```

The API is not extra decoration. It is the instruction manual.

API 不是“装饰性说明”，而是使用说明书。

# 8. Turtle Example<br>Turtle 示例

Here is a short Turtle program.

下面是一个简短的 Turtle 程序。

```java
import java.awt.*;
import java.util.*;

public class TurtleTest
{
    public static void main(String[] args)
    {
        World habitat = new World(300, 300);
        Turtle yertle = new Turtle(habitat);

        yertle.forward();
        yertle.turnRight();
        yertle.forward();

        habitat.show(true);
    }
}
```

What happens?

发生了什么？

1. A `World` object is created.

2. A `Turtle` object named `yertle` is created inside that world.

3. `yertle` moves forward.

4. `yertle` turns right.

5. `yertle` moves forward again.

6. The world is shown.

7. 创建一个 `World` 对象。

8. 在这个世界里创建一个叫 `yertle` 的 `Turtle` 对象。

9. `yertle` 前进。

10. `yertle` 右转。

11. `yertle` 再次前进。

12. 显示这个世界。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                        | Wrong Code                      | Why Wrong                              | Correct Code                           | 中文解释          |
| ------------------------------ | ------------------------------- | -------------------------------------- | -------------------------------------- | ------------- |
| Forgetting parentheses         | `yertle.forward;`               | Method calls need `()`                 | `yertle.forward();`                    | 调用方法必须写括号     |
| Guessing method name           | `yertle.right();`               | The API uses `turnRight()`             | `yertle.turnRight();`                  | 方法名必须和 API 一致 |
| Using class name as object     | `Turtle.forward();`             | `forward()` belongs to a Turtle object | `yertle.forward();`                    | 要让具体对象执行动作    |
| Confusing attribute and method | `yertle.xPos();`                | `xPos` is data, not a method           | `yertle.xPos`                          | 属性通常没有括号      |
| Forgetting setup               | `Turtle yertle = new Turtle();` | This Turtle library needs a world      | `Turtle yertle = new Turtle(habitat);` | 创建对象要符合构造方法要求 |

# 10. Debugging Example<br>调试例子

Buggy code:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);

yertle.forward;
yertle.right();

habitat.show(true);
```

Problems:

问题：

* `yertle.forward;` is missing parentheses.

* `right()` is not the method name provided by the Turtle API.

* The correct method is `turnRight()`.

* `yertle.forward;` 少了括号。

* `right()` 不是 Turtle API 提供的方法名。

* 正确方法名是 `turnRight()`。

Fixed code:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);

yertle.forward();
yertle.turnRight();

habitat.show(true);
```

| Bug                                      | Type                        | Fix                         |
| ---------------------------------------- | --------------------------- | --------------------------- |
| Missing `()` after `forward`             | Syntax / compile-time error | Use `forward()`             |
| Using `right()` instead of `turnRight()` | Compile-time error          | Check the API method name   |
| Calling method on wrong object           | Compile-time or logic error | Use the correct object name |

Most API mistakes are not about hard math. They are about using the correct name, object, and parentheses.

大多数 API 错误不是数学难，而是方法名、对象名、括号写错。

# 11. Mini Practice<br>小练习

## Practice 1: Choose the Best Answer<br>练习 1：选择最佳答案

What is the purpose of APIs and libraries in programming?

A. To write every program from scratch
B. To use code written by others
C. To create new programming languages
D. To replace variables

Answer:

```text
B. To use code written by others
```

Explanation: libraries provide reusable code, and APIs explain how to use it.

解释：库提供可复用代码，API 说明如何使用这些代码。

## Practice 2: Predict the Meaning<br>练习 2：判断含义

In the code below, what does `Turtle` refer to?

```java
Turtle yertle = new Turtle(habitat);
```

Answer:

```text
Turtle is a class.
```

Explanation: `Turtle` defines the type. `yertle` is the variable that refers to a Turtle object.

解释：`Turtle` 定义类型；`yertle` 是指向 Turtle 对象的变量。

## Practice 3: Fix the Code<br>练习 3：修复代码

Fix the method calls.

```java
yertle.forward;
yertle.right();
```

Fixed code:

```java
yertle.forward();
yertle.turnRight();
```

Explanation: method calls need parentheses, and the API method name is `turnRight()`.

解释：调用方法要写括号，而且 API 中的方法名是 `turnRight()`。

# Quick Checklist<br>快速检查清单

Before answering an API / library question, check:

做 API / 库相关题目前，检查：

* Is this asking about a library, API, package, class, object, attribute, or method?
* Is the class the blueprint or the actual object?
* Which variable refers to the object?
* Is the dot operator used with the correct object?
* Does the method name exactly match the API?
* Did you include parentheses for a method call?
* Are there parameters inside the parentheses if the method needs them?
* Is the item an attribute / field or a method?
* Does the API describe data stored in an object or an action the object can do?
* Are you using the library to avoid rewriting code from scratch?
