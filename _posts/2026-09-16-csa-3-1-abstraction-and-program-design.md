---
title: "AP CSA 3.1：抽象与程序设计"
layout: post
categories: media
render_with_liquid: false
---

In Unit 1, you used classes and methods written by other programmers. Unit 3 changes the perspective: now you will design your own classes by deciding what data they need and what behaviors they should provide.

在第一单元中，我们主要使用别人已经写好的类和方法。从 Unit 3 开始，我们将自己设计类：先决定对象需要保存什么数据，以及应该提供哪些行为。

> **Good class design focuses on what an object needs to know and what it needs to do, while hiding unnecessary details.**
> **好的类设计关注对象需要“知道什么”和“做什么”，同时隐藏不必要的实现细节。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.1 抽象与程序设计<br>Abstraction and Program Design

## 抽象<br>Abstraction

* 通过隐藏无关细节降低复杂度<br>Reduce complexity by hiding unnecessary details
* 关注主要功能，而不是所有实现细节<br>Focus on the main idea instead of every implementation detail

## 类的设计<br>Class Design

* 编写代码前先确定需要保存的数据<br>Decide what data the class needs before implementation
* 再确定对象应该提供哪些行为<br>Decide what behaviors the objects should provide
* 数据通常由属性表示<br>Data is represented by attributes
* 行为通常由方法表示<br>Behaviors are represented by methods

## 数据抽象<br>Data Abstraction

* 给数据一个清楚的名称和意义<br>Give data a meaningful name and purpose
* 使用数据时不需要知道所有表示细节<br>Use data without knowing every representation detail
* 属性是在类中定义的数据<br>An attribute is data defined in a class

## 实例变量与类变量<br>Instance vs. Class Variables

* 实例变量：每个对象有自己的值<br>Instance variable: each object has its own value
* 类变量：所有对象共享同一个值<br>Class variable: shared by all instances
* 先问：这个值属于一个对象还是整个类？<br>Ask whether the value belongs to one object or the whole class

## 过程抽象<br>Procedural Abstraction

* 方法给一个过程命名<br>A method gives a process a name
* 调用者只需要知道方法做什么<br>The caller needs to know what the method does
* 不需要知道内部每一步如何实现<br>The caller does not need to know every implementation step
* 大任务可以拆成多个小方法<br>Method decomposition breaks a large task into smaller methods

## 参数与代码复用<br>Parameters and Reuse

* 参数让同一个方法处理不同输入<br>Parameters let one method work with different inputs
* 减少重复代码<br>Reduce duplicated code
* 让方法更加通用<br>Make methods more general

## AP 考试陷阱<br>Common AP Traps

* 混淆属性和方法<br>Confusing attributes with methods
* 混淆实例变量和类变量<br>Confusing per-object data with shared data
* 认为使用方法必须知道内部实现<br>Thinking callers must know a method's implementation
* 为不同输入复制相同代码，而不是使用参数<br>Duplicating code instead of generalizing with parameters

</script>
</div>
</div>

# 1. Start with What the Object Needs<br>先判断对象需要什么

Suppose a program needs to represent students.

假设一个程序需要表示学生。

Each student:

每个学生：

* has a name;

* has a grade level;

* can move to the next grade level.

* 有姓名；

* 有年级；

* 可以升到下一个年级。

Which design makes the most sense?

哪一种设计最合理？

**A.**

* Attributes: `name`, `gradeLevel`
* Behavior: `advanceGrade()`

**B.**

* Attributes: `advanceGrade`
* Behavior: `name()`, `gradeLevel()`

**Answer: A**

`name` and `gradeLevel` describe information that a student object needs to remember. They are **attributes**.

`name` 和 `gradeLevel` 是学生对象需要保存的信息，因此属于 **attributes（属性）**。

`advanceGrade()` describes something the object can do. It is a **behavior**, represented by a method.

`advanceGrade()` 表示对象可以完成的操作，因此属于 **behavior（行为）**，通常通过方法实现。

This is the first step of class design:

这就是类设计最基本的思路：

> **What data does the object need? What should the object be able to do?**

> **这个对象需要保存什么数据？它应该能够做什么？**

# 2. Abstraction Reduces Complexity<br>抽象用于降低复杂度

**Abstraction** means focusing on the important idea while hiding details that are not currently needed.

**Abstraction（抽象）**就是关注当前真正重要的信息，同时隐藏暂时不需要的细节。

You already use abstraction whenever you call a Java method.

每当你调用一个 Java 方法时，其实就在使用抽象。

For example:

例如：

```java
String word = "computer";
int length = word.length();
```

You know what `length()` does:

你知道 `length()` 的作用：

> It gives back the number of characters.

> 它会返回字符串中的字符数量。

You do **not** need to know the internal Java code that calculates that answer.

但你并不需要知道 Java 内部究竟是怎样计算出这个结果的。

That hidden detail reduces the amount of information you need to think about.

这些实现细节被隐藏后，我们需要同时考虑的信息就更少了。

This is the purpose of abstraction:

这就是抽象的目的：

```text
hide unnecessary detail
        ↓
reduce complexity
        ↓
focus on the problem
```

# 3. Design the Class Before Writing It<br>写代码前先设计类

Before implementing a class, decide its **attributes** and **behaviors**.

正式编写一个类之前，先确定它的 **属性** 和 **行为**。

Suppose we want a `Course` class.

假设我们准备设计一个 `Course` 类。

A reasonable design might be:

一种合理设计可能是：

| Question                                          | Example                                        |
| ------------------------------------------------- | ---------------------------------------------- |
| What does a course need to remember?<br>课程需要保存什么？ | `courseName`, `teacherName`                    |
| What might a course need to do?<br>课程可能需要做什么？     | add a student, change the teacher<br>添加学生、修改教师 |

The exact design depends on the problem specification.

具体应该保存哪些数据、提供哪些行为，要由题目的需求决定。

Do not start by writing random variables and methods. First identify what information must belong to the object and what operations the object needs to support.

不要一开始就随意添加变量和方法。先判断哪些信息应该属于对象，以及对象需要支持哪些操作。

# 4. Data Abstraction<br>数据抽象

**Data abstraction** separates what some data represents from the details of how it is represented internally.

**Data abstraction（数据抽象）**把“这份数据代表什么”和“它在内部具体怎样表示”分开。

For example, imagine a student has a grade level.

例如，一个学生有一个年级信息。

From the program's point of view, the important idea might simply be:

从程序的角度，真正重要的可能只是：

```text
gradeLevel
```

Other parts of the program can use that data without needing to think about every detail of how the class stores or manages it.

程序中的其他部分可以使用这份数据，而不需要同时考虑这个类内部所有的存储与管理细节。

An **attribute** is data defined in a class outside any method or constructor.

**Attribute（属性）**是定义在类中、但位于方法和构造器之外的数据。

Attributes describe the state of an object or the class.

属性用于描述对象或整个类当前保存的状态。

# 5. Instance Variable or Class Variable?<br>实例变量还是类变量？

This distinction is important:

这个区别非常重要：

| Type                          | Meaning                                                          | Example                                                        |
| ----------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- |
| **Instance variable**<br>实例变量 | Each object has its own value.<br>每个对象拥有自己的值。                    | Each student has a different `name`.<br>每个学生有自己的姓名。            |
| **Class variable**<br>类变量     | The value is shared by all instances of the class.<br>所有对象共享这个值。 | A count of how many students have been created.<br>已经创建了多少个学生。 |

Ask this question:

可以问自己：

> **Does every object need its own copy of this value?**

> **每一个对象是否都需要拥有自己的一份这个值？**

For example:

例如：

```text
Student 1 → name = "Maya"
Student 2 → name = "Leo"
Student 3 → name = "Nina"
```

`name` must be an instance variable because each student may have a different value.

`name` 应该是实例变量，因为不同学生的值可以不同。

But suppose the program stores:

但如果程序记录：

```text
numberOfStudents = 3
```

This value describes the class as a whole rather than one particular student.

这个值描述的是整个类，而不是某一个具体学生。

That is the idea of a **class variable**.

这就是 **class variable（类变量）** 的基本概念。

# 6. Procedural Abstraction: Know What, Not How<br>过程抽象：知道“做什么”，不必知道“怎么做”

A method is a form of **procedural abstraction**.

方法是一种 **procedural abstraction（过程抽象）**。

Consider:

观察：

```java
int position = text.indexOf("AP");
```

To use `indexOf()`, you need to know:

使用 `indexOf()` 时，你需要知道：

* what argument it needs;

* what result it gives back;

* what that result means.

* 它需要什么参数；

* 它返回什么结果；

* 返回结果代表什么。

You do not need to know every line of code inside `indexOf()`.

你不需要知道 `indexOf()` 内部的每一行代码。

The same principle applies when you write your own methods.

自己编写方法时也一样。

A well-designed method gives a useful process a clear name so that other code can simply call it.

设计良好的方法会给一个过程起一个清楚的名字，让其他代码直接调用它。

# 7. Method Decomposition and Code Reuse<br>方法拆分与代码复用

A large task can often be broken into smaller methods.

一个较大的任务通常可以拆分成多个较小的方法。

This is called **method decomposition**.

这叫作 **method decomposition（方法拆分）**。

Instead of writing one very large method:

与其把所有代码都写在一个很长的方法中：

```text
large task
```

break it into smaller behaviors:

可以拆成多个较小的行为：

```text
large task
├── stepA()
├── stepB()
└── stepC()
```

This helps manage complexity because each method can focus on one smaller job.

这样每个方法只需要负责一个较小的任务，可以降低程序复杂度。

Methods also reduce repeated code.

方法还可以减少重复代码。

Instead of copying the same statements several times:

与其多次复制相同代码：

```java
System.out.println("Welcome, Maya!");
System.out.println("Welcome, Leo!");
System.out.println("Welcome, Nina!");
```

we can generalize the repeated behavior:

可以把重复行为抽象成一个方法：

```java
public static void welcome(String name)
{
    System.out.println("Welcome, " + name + "!");
}
```

Then call it with different values:

之后使用不同的值调用：

```java
welcome("Maya");
welcome("Leo");
welcome("Nina");
```

One method now represents the repeated process.

现在，一个方法就可以表示这个重复过程。

# 8. Parameters Make Methods More General<br>参数让方法更加通用

Consider these two method calls:

观察下面两个方法调用：

```java
welcome("Maya");
welcome("Leo");
```

The method performs the same general task, but the input changes.

方法完成的是同一种任务，只是输入不同。

The parameter:

参数：

```java
String name
```

allows the same method to work with many different argument values.

让同一个方法可以处理不同的实参。

This is another form of abstraction.

这也是抽象的一种体现。

Without a parameter, you might need several almost identical methods:

如果没有参数，可能需要写很多几乎完全一样的方法：

```text
welcomeMaya()
welcomeLeo()
welcomeNina()
```

Using a parameter gives us one generalized method:

使用参数后，只需要一个更通用的方法：

```java
welcome(String name)
```

The AP idea is:

AP 中需要理解的核心是：

> **Parameters let one procedure be reused with different input values.**

> **参数让同一个过程能够使用不同输入重复使用。**

# 9. The Inside Can Change Without Changing the Call<br>内部实现可以改变，调用方式不必改变

Suppose a program uses this method:

假设程序调用下面的方法：

```java
int result = doubleValue(6);
```

One implementation could be:

一种实现方式可能是：

```java
public static int doubleValue(int value)
{
    return value + value;
}
```

Later, the programmer changes the internal implementation:

之后，程序员修改了内部实现：

```java
public static int doubleValue(int value)
{
    return value * 2;
}
```

The caller still writes:

调用者仍然可以写：

```java
int result = doubleValue(6);
```

Both versions perform the same job from the caller's point of view.

从调用者的角度看，两个版本完成的是同一个任务。

Procedural abstraction allows internal implementation details to change without requiring callers to change, as long as the method's expected behavior and signature are preserved.

过程抽象允许程序员修改方法内部的实现方式；只要方法签名以及它对外提供的行为保持不变，调用者就不需要修改代码。

# 10. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                             | Why it is wrong                                                      | Correct understanding                                                                           |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Treating every piece of information as a method.<br>把所有信息都设计成方法。                    | Some information needs to be stored as data.<br>有些信息需要作为数据保存。        | Data becomes attributes; actions become methods.<br>数据对应属性，操作对应方法。                              |
| Treating an action as an attribute.<br>把一个操作设计成属性。                                  | Actions describe behavior, not stored state.<br>操作描述的是行为，而不是需要保存的状态。 | Represent behaviors with methods.<br>行为通常通过方法表示。                                                |
| Making shared data an instance variable.<br>把共享数据设计成实例变量。                           | Every object would have its own separate copy.<br>每个对象都会拥有独立的一份数据。   | Use the class-variable concept when one value belongs to the whole class.<br>如果一个值属于整个类，应考虑类变量。 |
| Assuming two objects share their instance variables.<br>认为两个对象共享实例变量。               | Instance variables belong to individual objects.<br>实例变量属于各自的对象。     | Each instance can have different values.<br>每个实例可以拥有不同的值。                                       |
| Copying almost identical methods for different inputs.<br>为不同输入复制几乎相同的方法。           | It duplicates code and increases complexity.<br>这样会产生重复代码并增加复杂度。     | Generalize the method with parameters.<br>使用参数让方法更加通用。                                          |
| Thinking callers must understand a method's internal algorithm.<br>认为调用方法前必须理解内部算法。 | Procedural abstraction hides those details.<br>过程抽象会隐藏这些细节。          | Know what the method does and how to call it.<br>重点是知道方法做什么以及如何调用。                              |

# 11. Mini Practice<br>小练习

## Practice 1: Attribute or Behavior?<br>练习一：属性还是行为？

A `Book` object needs to remember its title and number of pages, and it should be able to display information about itself.

一个 `Book` 对象需要保存书名和页数，并能够显示自己的信息。

Which are attributes?

哪些属于属性？

**Answer:**

```text
title
numberOfPages
```

Displaying information is a behavior and would be represented by a method.

“显示信息”属于行为，应该通过方法表示。

---

## Practice 2: Instance or Class Variable?<br>练习二：实例变量还是类变量？

A `Car` class stores:

一个 `Car` 类需要保存：

1. the color of each car;
2. the total number of cars created.

Which should be an instance variable?

哪一个应该是实例变量？

**Answer: `color`**

Different cars may have different colors.

不同汽车可以拥有不同颜色。

The total number of cars describes all instances together, so it is class-level data.

汽车总数描述的是所有对象整体，因此属于类级别的数据。

---

## Practice 3: Procedural Abstraction<br>练习三：过程抽象

Consider:

观察：

```java
String text = "computer";
int position = text.indexOf("put");
```

What must a programmer know to use `indexOf()` correctly?

程序员要正确使用 `indexOf()`，最需要知道什么？

A. Every statement inside the method
B. How Java stores every character internally
C. What argument the method needs and what result it returns
D. Who originally wrote the method

**Answer: C**

Procedural abstraction lets programmers use a method based on what it does rather than how it is implemented.

过程抽象让程序员根据方法“做什么”来使用它，而不需要了解内部“怎么做”。

---

## Practice 4: Why Use a Parameter?<br>练习四：为什么使用参数？

Which design better supports code reuse?

哪一种设计更有利于代码复用？

**A.**

```java
printDog();
printCat();
printCow();
```

**B.**

```java
printAnimal(String animal);
```

**Answer: B**

The parameter allows the same procedure to work with many different input values.

参数让同一个过程可以处理许多不同的输入值。

---

## Practice 5: Changing the Implementation<br>练习五：修改内部实现

A method is changed internally, but its signature and behavior remain the same.

一个方法的内部实现被修改了，但方法签名以及对外行为保持不变。

Does code that correctly called the old version necessarily need to change?

原来正确调用这个方法的代码是否一定需要修改？

**Answer: No.**

Procedural abstraction separates method use from implementation details.

过程抽象把“如何使用方法”和“方法内部如何实现”分离开来。

# Quick Checklist<br>快速检查清单

Before answering a Topic 3.1 question, check:

做 3.1 的题目之前，检查：

* What information does each object need to remember?
  每个对象需要保存哪些信息？

* Which items are **attributes** rather than behaviors?
  哪些内容属于属性，而不是行为？

* Which actions should be represented by methods?
  哪些操作应该通过方法表示？

* Does each object need its own value?
  每个对象是否需要拥有自己的值？

* If yes, is it an **instance variable**?
  如果是，它是否应该是实例变量？

* Is one value shared by every instance?
  是否有一个值需要由所有对象共享？

* If yes, is it class-level data?
  如果是，它是否属于类级别的数据？

* What details can abstraction hide?
  哪些细节可以通过抽象隐藏？

* Do you need to know how a method works internally to call it?
  调用一个方法时，是否真的需要知道它内部如何实现？

* Could a large behavior be divided into smaller methods?
  一个较大的行为是否可以拆成多个较小的方法？

* Is code being unnecessarily repeated?
  是否存在不必要的重复代码？

* Could parameters make one method work with different inputs?
  是否可以通过参数让一个方法处理不同输入？

* If a method's internals change, are its signature and expected behavior preserved?
  如果方法内部实现改变，它的方法签名和预期行为是否仍然保持不变？
