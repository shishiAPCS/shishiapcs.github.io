---
title: "AP CSA 1.7：API 与库"
layout: post
categories: media
render_with_liquid: false
---

In earlier lessons, we used code like `System.out.println()` without knowing exactly how it works inside. In this lesson, we learn how programmers use code written by others through libraries and APIs.

前几课我们已经用过 `System.out.println()`，但并没有研究它内部到底怎么实现。这一课我们要理解：程序员经常通过库和 API 使用别人已经写好的代码。

> **A library gives us reusable code; an API is the public interface that tells us how to use it.**
> **库提供可复用代码；API 是告诉我们如何使用这些代码的公开接口。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.7 API 与库<br>APIs and Libraries

## 核心定义<br>Core Definitions

* 库：别人写好的类的集合<br>Library: collection of classes written by others
* API：库或类对外提供的使用接口<br>API: public interface for using code
* API 文档：解释如何使用 API<br>API documentation: written explanation of the API
* 包：相关类的分组<br>Package: group of related classes

## 类与对象<br>Classes and Objects

* 类：对象的蓝图，也是一种类型<br>Class: blueprint and type
* 对象：类的具体实例<br>Object: instance of a class
* `Turtle yertle = new Turtle(habitat);`<br>Create a Turtle object

## 属性与行为<br>Attributes and Behaviors

* 属性：对象保存的数据<br>Attributes: data stored in variables / fields
* 例子：`xPos`、`yPos`、`heading`<br>Examples: position and direction
* 行为：对象能做的动作<br>Behaviors: actions defined by methods
* 例子：`forward()`、`turnRight()`<br>Examples: movement methods

## 点运算符<br>Dot Operator

* `objectName.methodName()`：调用对象的方法<br>Call a method on an object
* `yertle.forward();`：让对象执行动作<br>Ask the object to perform an action
* 方法名后面通常有括号<br>Method names usually have parentheses

## 读 API 描述<br>Reading API Descriptions

* 变量 / 字段通常是属性<br>Variables / fields are usually attributes
* 方法通常是行为<br>Methods are usually behaviors
* 有 `()` 的名字通常是方法<br>Names with `()` are usually methods
* 根据描述判断“数据”还是“动作”<br>Decide whether it is data or an action

## AP 考点<br>AP Exam Focus

* 区分类、对象、属性、方法<br>Distinguish class, object, attribute, method
* 根据 API 描述判断属性和行为<br>Read API descriptions
* 理解库和 API 的作用<br>Understand why libraries and APIs matter
* 正确识别方法调用<br>Recognize method calls

## 常见错误<br>Common Mistakes

* 把类名当成对象名使用<br>Using class name as object name
* 调用方法时忘记 `()`<br>Forgetting parentheses
* 把属性误认为方法<br>Confusing attributes and methods
* 乱猜 API 中没有的方法名<br>Guessing method names not listed in the API

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

A **library** is a collection of classes written by other programmers that we can use.

**库（library）** 是别人已经写好的类的集合，我们可以直接使用。

An **API** is the public interface of a library or class. It tells programmers what classes, methods, fields, and parameters are available.

**API** 是库或类对外提供的公开接口。它告诉程序员可以使用哪些类、方法、字段和参数。

**API documentation** is the written explanation of that API.

**API 文档** 是对这个 API 的文字说明。

For example:

```java
System.out.println("Hello");
```

You do not need to know how `println()` works internally. You need to know how to call it and what it does.

你不需要知道 `println()` 内部是怎样实现的。你需要知道怎样调用它，以及它会做什么。

# 2. Terms You Must Know<br>必须分清的概念

These terms are easy to mix up. For AP CSA 1.7, focus on the simple exam-level meanings.

这些概念很容易混在一起。对于 AP CSA 1.7，先掌握考试需要的核心意思。

| Term              | AP CSA Meaning                                    | 中文理解       |
| ----------------- | ------------------------------------------------- | ---------- |
| Library           | A collection of classes written by others         | 别人写好的类的集合  |
| API               | The public interface for using a library or class | 使用库或类的公开接口 |
| API documentation | The written guide that explains the API           | API 的说明文档  |
| Package           | A group of related classes                        | 相关类的分组     |
| Class             | A blueprint / type used to create objects         | 对象的蓝图 / 类型 |
| Object            | An instance of a class                            | 类创建出来的具体实例 |
| Method            | A behavior or action an object can perform        | 对象能执行的动作   |
| Attribute         | Data stored about an object                       | 对象保存的数据    |

A simple way to remember:

```text
library = reusable code
API = public interface for using the code
API documentation = explanation of the interface
class = blueprint
object = actual thing created from the blueprint
attribute = data
method = action
```

# 3. Classes and Objects<br>类与对象

A **class** defines a kind of object.

**类（class）** 定义一种对象。

An **object** is a specific instance created from a class.

**对象（object）** 是根据类创建出来的具体实例。

Example:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);
```

Here:

| Code                  | Role                                      |
| --------------------- | ----------------------------------------- |
| `World`               | class                                     |
| `habitat`             | variable that refers to a `World` object  |
| `Turtle`              | class                                     |
| `yertle`              | variable that refers to a `Turtle` object |
| `new Turtle(habitat)` | creates a new Turtle object               |

`Turtle` is the class. `yertle` is the variable that refers to one specific Turtle object.

`Turtle` 是类；`yertle` 是变量，指向一个具体的 Turtle 对象。

# 4. Attributes and Behaviors<br>属性与行为

Classes describe what objects **have** and what objects **can do**.

类会描述对象“有什么”和“能做什么”。

| Concept   | Meaning                     | Turtle Example                           |
| --------- | --------------------------- | ---------------------------------------- |
| Attribute | Data stored about an object | `xPos`, `yPos`, `heading`, `color`       |
| Behavior  | Action defined by a method  | `forward()`, `turnLeft()`, `turnRight()` |

A Turtle object has attributes such as position and direction.

一个 Turtle 对象有自己的属性，比如位置和方向。

A Turtle object also has behaviors, such as moving forward or turning.

Turtle 对象也有行为，比如前进和转弯。

For AP-style questions, use this test:

AP 题里可以这样判断：

```text
Is it data?  → attribute
Is it an action? → method / behavior
```

# 5. The Dot Operator<br>点运算符

The dot operator `.` is used to access something that belongs to an object or class.

点运算符 `.` 用来访问属于某个对象或类的内容。

In this lesson, the most important pattern is method calls on objects:

本课最重要的是对象调用方法：

```java
objectName.methodName();
```

Example:

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

If a method needs extra information, put that information inside the parentheses.

如果方法需要额外信息，就把信息放进括号里。

```java
yertle.forward(50);
```

This means: call `forward` on `yertle`, using `50` as the number of pixels.

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

When reading API descriptions, this clue is useful:

读 API 描述时，这个线索很有用：

| Form          | Usually Means     |
| ------------- | ----------------- |
| `forward()`   | method            |
| `turnRight()` | method            |
| `println()`   | method            |
| `xPos`        | attribute / field |
| `heading`     | attribute / field |

Methods usually have parentheses. Attributes or fields usually do not.

方法通常有括号；属性或字段通常没有括号。

# 7. Reading API Descriptions<br>阅读 API 描述

AP CSA questions may give you a short API description and ask you to identify attributes and behaviors.

AP CSA 题目可能会给你一段简短的 API 描述，让你判断哪些是属性，哪些是行为。

Example API description:

```text
A Turtle class has:

- an int variable called xPos to represent the x-coordinate
- an int variable called yPos to represent the y-coordinate
- a method called forward() that moves the turtle forward
- a method called turnRight() that turns the turtle right
```

How to read it:

| API Description             | AP CSA Meaning    |
| --------------------------- | ----------------- |
| `int variable called xPos`  | attribute         |
| `int variable called yPos`  | attribute         |
| `method called forward()`   | behavior / method |
| `method called turnRight()` | behavior / method |

So a correct statement would be:

```text
xPos and yPos are attributes of Turtle objects.
```

Another correct statement would be:

```text
turnRight() is a behavior of Turtle objects.
```

Do not overthink this. For this lesson, AP mainly wants you to separate **data** from **actions**.

不要想复杂。本课 AP 主要考你能不能区分“数据”和“动作”。

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

* A `World` object is created.

* A `Turtle` object named `yertle` is created inside that world.

* `yertle` moves forward.

* `yertle` turns right.

* `yertle` moves forward again.

* The world is shown.

* 创建一个 `World` 对象。

* 在这个世界里创建一个叫 `yertle` 的 `Turtle` 对象。

* `yertle` 前进。

* `yertle` 右转。

* `yertle` 再次前进。

* 显示这个世界。

For AP CSA 1.7, the key is not drawing the shape perfectly. The key is understanding which parts are classes, objects, and method calls.

对于 AP CSA 1.7，重点不是画图画得多漂亮。重点是看懂哪些是类、对象和方法调用。

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                        | Wrong Code                 | Why Wrong                              | Correct Code                | 中文解释          |
| ------------------------------ | -------------------------- | -------------------------------------- | --------------------------- | ------------- |
| Forgetting parentheses         | `yertle.forward;`          | Method calls need `()`                 | `yertle.forward();`         | 调用方法必须写括号     |
| Guessing method name           | `yertle.right();`          | The API uses `turnRight()`             | `yertle.turnRight();`       | 方法名必须和 API 一致 |
| Using class name as object     | `Turtle.forward();`        | `forward()` belongs to a Turtle object | `yertle.forward();`         | 要让具体对象执行动作    |
| Confusing attribute and method | `xPos()`                   | `xPos` is data, not an action          | identify it as an attribute | 属性是数据，不是动作    |
| Confusing object and class     | saying `yertle` is a class | `yertle` refers to an object           | `Turtle` is the class       | 类和对象要分清       |

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

* `yertle.forward;` is missing parentheses.
* `right()` is not the method name provided by the Turtle API.
* The correct method is `turnRight()`.

问题：

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

| Bug                                      | Type                        | Fix                             |
| ---------------------------------------- | --------------------------- | ------------------------------- |
| Missing `()` after `forward`             | Syntax / compile-time error | Use `forward()`                 |
| Using `right()` instead of `turnRight()` | Compile-time error          | Check the API method name       |
| Calling a method on the wrong name       | Compile-time or logic error | Use the correct object variable |

Most API mistakes are not about hard math. They are about using the correct object name, method name, and parentheses.

大多数 API 错误不是数学难，而是对象名、方法名、括号写错。

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

Explanation: libraries provide reusable code, and APIs provide the public interface for using that code.

解释：库提供可复用代码，API 提供使用这些代码的公开接口。

## Practice 2: Identify the Role<br>练习 2：判断角色

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

## Practice 3: Attribute or Method?<br>练习 3：属性还是方法？

Given this API description:

```text
xPos: an int variable for the turtle's x-coordinate
forward(): moves the turtle forward
turnRight(): turns the turtle right
```

Which items are methods?

Answer:

```text
forward() and turnRight()
```

Explanation: they describe actions and have parentheses.

解释：它们描述动作，而且有括号。

## Practice 4: Fix the Code<br>练习 4：修复代码

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
* Is the item a piece of data or an action?
* If it is data, is it probably an attribute / field?
* If it is an action, is it probably a method?
* Does the method name have parentheses?
* Does the method name exactly match the API?
* Which variable refers to the object?
* Is the dot operator used with the correct object?
* Is the class the blueprint, or is it the actual object?
* Are you using the API description instead of guessing?
