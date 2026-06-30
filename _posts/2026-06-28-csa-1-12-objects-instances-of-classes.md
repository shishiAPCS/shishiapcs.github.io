---
title: "AP CSA 1.12：对象：类的实例"
layout: post
categories: media
render_with_liquid: false
---

In earlier lessons, we used classes such as `Turtle`, `World`, and `Math`. In this lesson, we focus on what classes and objects mean in Java.

前几课我们已经用过 `Turtle`、`World` 和 `Math` 这样的类。这一课，我们重点理解 Java 中的类和对象到底是什么意思。

> **A class is a blueprint; an object is a specific instance created from that blueprint.**
> **类是蓝图；对象是根据这个蓝图创建出来的具体实例。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.12 对象：类的实例<br>Objects: Instances of Classes

## 类<br>Class

* 类定义一种新的数据类型<br>A class defines a new data type
* 像蓝图或模具<br>Like a blueprint or cookie cutter
* 定义对象共有的属性和行为<br>Defines shared attributes and behaviors
* 例子：`Turtle`、`World`、`Dog`<br>Examples: `Turtle`, `World`, `Dog`

## 对象<br>Object

* 对象是类的具体实例<br>An object is an instance of a class
* 一个类可以创建很多对象<br>One class can create many objects
* 每个对象可以有自己的属性值<br>Each object has its own attribute values
* `Turtle yertle = new Turtle(habitat);`<br>Create a Turtle object

## 属性与行为<br>Attributes and Behaviors

* 属性：对象知道的数据<br>Attributes: data an object knows
* 例子：颜色、位置、方向<br>Examples: color, position, heading
* 行为：对象能做的动作<br>Behaviors: actions an object can do
* 例子：`forward()`、`turnLeft()`<br>Examples: methods

## 引用变量<br>Reference Variables

* 对象变量存的是对象引用<br>Object variables store references
* 可理解为对象的内存地址<br>Can be thought of as a memory address
* `int` 等基本类型直接存值<br>Primitive variables store simple values

## 点运算符<br>Dot Operator

* `objectName.methodName()`：让对象执行方法<br>Ask an object to run a method
* `yertle.forward();`：让 `yertle` 前进<br>Ask `yertle` to move forward
* 括号中可以放实参<br>Arguments can go inside parentheses

## AP 考点<br>AP Exam Focus

* 区分类和对象<br>Distinguish class and object
* 判断属性和行为<br>Identify attributes and behaviors
* 理解对象是类的实例<br>Understand objects as instances
* 知道引用类型变量保存对象引用<br>Reference variables store object references
* 不需要设计继承关系<br>Designing inheritance is outside exam scope

## 常见错误<br>Common Mistakes

* 把类名当成对象名<br>Confusing class names with object variables
* 把属性当成方法<br>Confusing attributes with methods
* 忘记用 `new` 创建对象<br>Forgetting to create an object
* 忘记用点运算符调用方法<br>Forgetting dot notation

</script>
</div>
</div>

# 1. Main Idea<br>核心理解

Java is an object-oriented programming language. Objects combine data and methods into one unit.

Java 是一门面向对象的编程语言。对象把数据和方法组合在一起。

A class defines what kind of object can be created.

类定义可以创建什么样的对象。

An object is a specific instance created from a class.

对象是根据类创建出来的具体实例。

| Term      | Meaning                      | 中文理解     |
| --------- | ---------------------------- | -------- |
| Class     | blueprint / type             | 蓝图 / 类型  |
| Object    | instance of a class          | 类的具体实例   |
| Attribute | data stored about an object  | 对象保存的数据  |
| Behavior  | action an object can perform | 对象能执行的动作 |

# 2. Class vs. Object<br>类 vs. 对象

A **class** is like a blueprint for a house.

**类（class）** 就像房子的蓝图。

An **object** is like an actual house built from that blueprint.

**对象（object）** 就像根据蓝图建出来的一栋具体房子。

Another analogy:

另一个类比：

```text
Class  = cookie cutter
Object = cookie
```

A cookie cutter can make many cookies. A class can create many objects.

一个饼干模具可以做很多块饼干。一个类也可以创建很多个对象。

Example:

```java
Turtle yertle = new Turtle(habitat);
Turtle myrtle = new Turtle(habitat);
```

Here, `Turtle` is the class. `yertle` and `myrtle` are variables that refer to two different Turtle objects.

这里 `Turtle` 是类；`yertle` 和 `myrtle` 是两个变量，分别指向两个不同的 Turtle 对象。

# 3. A Class Defines a New Type<br>类定义一种新的类型

A class defines a new reference type.

类定义一种新的引用类型。

Just like `int` can be used to declare integer variables:

就像 `int` 可以用来声明整数变量：

```java
int score = 95;
```

A class name can be used to declare object variables:

类名也可以用来声明对象变量：

```java
Turtle yertle;
```

But this only declares the variable. To create the actual object, use `new`.

但这只是声明变量。要真正创建对象，需要使用 `new`。

```java
Turtle yertle = new Turtle(habitat);
```

# 4. Attributes and Behaviors<br>属性与行为

A class defines what its objects **have** and what they **can do**.

类定义对象“有什么”和“能做什么”。

| Concept   | Meaning                       | Turtle Example                           |
| --------- | ----------------------------- | ---------------------------------------- |
| Attribute | data about the object         | color, position, heading                 |
| Behavior  | action the object can perform | `forward()`, `turnLeft()`, `turnRight()` |

Attributes are often nouns or adjectives.

属性通常像名词或形容词。

Examples:

```text
color
height
width
xPos
yPos
heading
```

Behaviors are often verbs and are implemented as methods.

行为通常像动词，并且通过方法实现。

Examples:

```text
forward()
turnLeft()
turnRight()
backward()
```

For AP-style questions, use this simple test:

AP 题里可以这样判断：

```text
Is it data?   → attribute
Is it action? → behavior / method
```

# 5. Objects Have Their Own Attribute Values<br>对象有自己的属性值

Objects created from the same class share the same kind of attributes and behaviors.

同一个类创建出来的对象，拥有同一类属性和行为。

But each object can have different values for those attributes.

但每个对象的属性值可以不同。

For example, two Turtle objects may both have a color and a position, but their actual colors and positions can be different.

例如，两个 Turtle 对象都可以有颜色和位置，但它们具体的颜色和位置可以不一样。

```java
Turtle yertle = new Turtle(habitat);
Turtle myrtle = new Turtle(habitat);

yertle.forward();
myrtle.turnRight();
myrtle.forward();
```

`yertle` and `myrtle` are separate objects. Calling a method on one object does not automatically call it on the other.

`yertle` 和 `myrtle` 是两个独立对象。对其中一个对象调用方法，不会自动影响另一个对象。

# 6. Reference Variables<br>引用变量

A variable of a primitive type stores a simple value.

基本类型变量直接存储一个简单值。

```java
int age = 7;
```

A variable of a class type stores an object reference.

类类型变量存储的是对象引用。

```java
Turtle yertle = new Turtle(habitat);
```

For AP CSA 1.12, you can think of an object reference as the memory address of the object.

在 AP CSA 1.12 中，可以把对象引用理解成对象在内存中的地址。

| Variable Type                | Stores                 |
| ---------------------------- | ---------------------- |
| `int`, `double`, `boolean`   | actual primitive value |
| class type, such as `Turtle` | reference to an object |

This is why class types are called **reference types**.

这就是为什么类类型被称为 **引用类型（reference types）**。

# 7. Creating and Using Objects<br>创建和使用对象

The general pattern for creating an object is:

创建对象的一般格式是：

```java
ClassName variableName = new ClassName(arguments);
```

Example:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);
```

Then use the dot operator to ask the object to do something.

然后使用点运算符让对象执行动作。

```java
yertle.forward();
yertle.turnLeft();
yertle.forward();
```

The general method-call pattern is:

方法调用的一般格式是：

```java
objectName.methodName(arguments);
```

If there are no arguments, the parentheses are still required.

如果没有实参，括号仍然必须写。

```java
yertle.forward();
```

Some methods can take arguments.

有些方法可以接收实参。

```java
yertle.forward(50);
```

This asks `yertle` to move forward `50` pixels.

这表示让 `yertle` 前进 `50` 像素。

# 8. Small Turtle Example<br>Turtle 小例子

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
        yertle.turnLeft();
        yertle.forward();

        habitat.show(true);
    }
}
```

What to notice:

需要注意：

* `World` is a class.

* `habitat` refers to a `World` object.

* `Turtle` is a class.

* `yertle` refers to a `Turtle` object.

* `forward()` and `turnLeft()` are methods.

* `yertle.forward();` calls a method on the `yertle` object.

* `World` 是类。

* `habitat` 指向一个 `World` 对象。

* `Turtle` 是类。

* `yertle` 指向一个 `Turtle` 对象。

* `forward()` 和 `turnLeft()` 是方法。

* `yertle.forward();` 是对 `yertle` 对象调用方法。

# 9. Inheritance: Know the Idea Only<br>继承：只需理解概念

Inheritance means one class can be based on another class.

继承（inheritance）指的是一个类可以基于另一个类。

For example, `Dog`, `Cat`, and `Turtle` could all be subclasses of a more general `Pet` class.

例如，`Dog`、`Cat` 和 `Turtle` 都可以是更通用的 `Pet` 类的子类。

Important AP CSA note:

AP CSA 重点提醒：

```text
Designing and implementing inheritance relationships are outside the current AP CSA exam scope.
```

也就是说：

```text
设计和实现继承关系不属于当前 AP CSA 考试范围。
```

So for this lesson, just know the vocabulary:

所以这一课只需要知道基本词汇：

| Term         | Meaning                                     |
| ------------ | ------------------------------------------- |
| superclass   | more general class                          |
| subclass     | more specific class based on a superclass   |
| Object class | all Java classes are subclasses of `Object` |

Do not spend too much time designing inheritance trees for the exam.

备考时不要花太多时间设计继承结构。

# 10. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                   | Wrong Idea / Code                   | Why Wrong                            | Correct Understanding                  | 中文解释        |
| ----------------------------------------- | ----------------------------------- | ------------------------------------ | -------------------------------------- | ----------- |
| Confusing class and object                | saying `Turtle` is an object        | `Turtle` is the class/type           | `yertle` refers to a Turtle object     | 类和对象要分清     |
| Thinking a class can only make one object | “One class creates one object only” | A class can create many objects      | create as many as needed               | 一个类可以创建很多对象 |
| Confusing attributes and methods          | saying `forward()` is an attribute  | `forward()` is an action             | it is a method / behavior              | 方法是行为，不是属性  |
| Forgetting `new`                          | `Turtle yertle; yertle.forward();`  | object may not have been created     | `Turtle yertle = new Turtle(habitat);` | 声明变量不等于创建对象 |
| Calling method without object             | `forward();`                        | `forward` belongs to a Turtle object | `yertle.forward();`                    | 对象方法要通过对象调用 |
| Forgetting parentheses                    | `yertle.forward;`                   | method calls need `()`               | `yertle.forward();`                    | 调用方法必须写括号   |

# 11. Debugging Example<br>调试例子

Buggy code:

```java
World habitat = new World(300, 300);
Turtle yertle;

yertle.forward();

habitat.show(true);
```

Problem:

`yertle` was declared, but no Turtle object was created.

问题：

`yertle` 被声明了，但还没有真正创建 Turtle 对象。

Fixed code:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);

yertle.forward();

habitat.show(true);
```

| Bug                                                   | Type                                 | Fix                                                 |
| ----------------------------------------------------- | ------------------------------------ | --------------------------------------------------- |
| declaring `Turtle yertle;` but not creating an object | compile-time / object creation issue | use `new Turtle(habitat)`                           |
| `yertle.forward;`                                     | compile-time error                   | use `yertle.forward();`                             |
| confusing `Turtle` with `yertle`                      | concept error                        | `Turtle` is the class; `yertle` refers to an object |

# 12. Mini Practice<br>小练习

## Practice 1: Choose the Best Answer<br>练习 1：选择最佳答案

A student has created a `Dog` class. The class contains:

```text
breed
age
name
```

The object `pet` is declared as type `Dog`.

Which description is accurate?

A. An attribute of the `name` object is `String`.
B. An attribute of the `pet` object is `name`.
C. An instance of the `pet` class is `Dog`.
D. An attribute of the `Dog` instance is `pet`.

Answer:

```text
B. An attribute of the pet object is name.
```

Explanation: `pet` is an object of type `Dog`, and `name` is one of its attributes.

解释：`pet` 是 `Dog` 类型的对象，而 `name` 是它的一个属性。

## Practice 2: Attribute or Behavior?<br>练习 2：属性还是行为？

For a Turtle object, classify each item:

```text
color
heading
forward()
turnRight()
```

Answer:

```text
Attributes: color, heading
Behaviors / methods: forward(), turnRight()
```

Explanation: attributes are data; methods are actions.

解释：属性是数据；方法是动作。

## Practice 3: Predict the Role<br>练习 3：判断角色

In the code below, what is `Turtle` and what is `yertle`?

```java
Turtle yertle = new Turtle(habitat);
```

Answer:

```text
Turtle is the class.
yertle is a variable that refers to a Turtle object.
```

解释：

```text
Turtle 是类。
yertle 是一个变量，指向 Turtle 对象。
```

## Practice 4: Fix the Code<br>练习 4：修复代码

Fix the code so the Turtle object is created before it moves.

```java
World habitat = new World(300, 300);
Turtle yertle;

yertle.forward();
habitat.show(true);
```

Fixed code:

```java
World habitat = new World(300, 300);
Turtle yertle = new Turtle(habitat);

yertle.forward();
habitat.show(true);
```

Explanation: declaring an object variable is not the same as creating the object.

解释：声明对象变量不等于创建对象。

# Quick Checklist<br>快速检查清单

Before answering an objects question, check:

做对象相关题目前，检查：

* Is this asking about a class or an object?
* Is the class the blueprint/type?
* Is the object a specific instance of the class?
* Can one class create many objects?
* Is the item data or an action?
* If it is data, is it an attribute / instance variable?
* If it is an action, is it a method / behavior?
* Does the object variable store a reference?
* Was the object actually created with `new`?
* Is the dot operator used with the correct object?
* Does the method call include parentheses?
* Is the inheritance detail only vocabulary, not something you need to design?

