---
title: "AP CSA 3.3：Java 类的结构"
layout: post
categories: media
render_with_liquid: false
---

在 Unit 1 中，我们一直在**使用别人已经写好的类**：例如 `String`、`Turtle`，以及它们的对象和方法。从这一课开始，我们反过来学习：**一个 Java 类本身是怎样组成的，以及怎样设计自己的类。**

> **一个类的主体通常由三部分组成：实例变量（instance variables）保存对象的数据，构造器（constructor）负责初始化对象，方法（methods）定义对象能做什么。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.3 Java 类的结构（Anatomy of a Java Class）

## 类的骨架（Class Structure）

* `public class ClassName`
* `{ }` 中是类的主体（class body）
* 主体通常包含三部分
  * 实例变量（instance variables）
  * 构造器（constructor）
  * 方法（methods）

## 实例变量（Instance Variables）

* 保存对象的属性和数据（attributes / data）
* 通常写在类的顶部、方法之外
* AP CSA 中通常声明为 `private`
* 每个对象都有自己的一份实例变量

## 构造器（Constructor）

* 创建对象时初始化实例变量
* 名字与类名相同
* AP CSA 中构造器使用 `public`
* 具体写法在 3.4 继续学习

## 实例方法（Instance Methods）

* 定义对象的行为<br>behaviors
* 可以直接访问该对象的实例变量
* 需要让类外调用时通常使用 `public`
* 只在类内部使用的辅助方法可以是 `private`

## `public` 与 `private`（Access Modifiers）

* `public`：类外代码可以访问
* `private`：只能在当前类内部访问
* 实例变量通常设为 `private`
* 这是数据封装（data encapsulation）的基础

## 每个对象各自保存数据

* 同一个类可以创建多个对象
* 每个对象都有相同种类的实例变量
* 但这些变量可以保存不同的值
* 对某个对象调用方法时，使用的是那个对象自己的数据

## AP 常见考法

* 识别 class / instance variable / constructor / method
* 为不同成员选择合适的 `public` / `private`
* 判断哪些数据属于每个对象
* 判断类外代码能否直接访问某个成员
* 补全一个合理的 class declaration

</script>
</div>
</div>

# 1. 第一个 AP 核心考法

下面的 `Cat` 类需要保存猫的名字和年龄，并提供一个构造器：

```java
public class Cat
{
    /* missing code */
}
```

哪一种设计最合理？

### A

```java
public String name;
public int age;

public Cat(String n, int a)
{
    // implementation not shown
}
```

### B

```java
private String name;
private int age;

public Cat(String n, int a)
{
    // implementation not shown
}
```

### C

```java
private String name;
private int age;

private Cat(String n, int a)
{
    // implementation not shown
}
```

**答案：B**

这里先记住两个 AP CSA 中非常重要的设计习惯：

```text
实例变量 → private
构造器   → public
```

为什么要这样设计，会在下面逐步解释。

# 2. 一个 Java 类由什么组成？

先看一个完整但很小的 `Person` 类：

```java
public class Person
{
    // 1. instance variables
    private String name;
    private String email;

    // 2. constructor
    public Person(String n, String e)
    {
        name = n;
        email = e;
    }

    // 3. method
    public void print()
    {
        System.out.println(name + " " + email);
    }
}
```

一个典型的类可以先看成下面这个骨架：

```java
public class ClassName
{
    // instance variables

    // constructor

    // methods
}
```

| 部分 | 作用 | AP CSA 中常见写法 |
|---|---|---|
| 类（class） | 定义一种新的对象类型 | `public class Person` |
| 实例变量（instance variables） | 保存对象的数据 | 通常 `private` |
| 构造器（constructor） | 创建对象时初始化数据 | `public` |
| 方法（methods） | 定义对象能做什么 | 根据是否需要类外访问决定 `public` / `private` |

在 AP CSA 本课程范围内，类写成 `public class ClassName`，构造器使用 `public`，实例变量通常使用 `private`。

这节课最重要的不是马上学会把每一部分都写出来，而是先能够**认出这些部分，并理解它们各自负责什么。**

# 3. 实例变量：对象保存的数据

实例变量（instance variables）保存一个对象的属性或状态。

例如：

```java
private String name;
private String email;
```

它们写在类的主体中，但写在构造器和方法之外。

```java
public class Person
{
    private String name;
    private String email;

    // constructor and methods...
}
```

这里的 `name` 和 `email` 不是某一个特定人的数据，而是在说明：

> **每一个 `Person` 对象都应该拥有一个 `name` 和一个 `email`。**

例如：

```java
Person ada = new Person("Ada", "ada@example.com");
Person alan = new Person("Alan", "alan@example.com");
```

这两个对象来自同一个 `Person` 类，但它们各自保存自己的数据：

| 对象 | `name` | `email` |
|---|---|---|
| `ada` | `"Ada"` | `"ada@example.com"` |
| `alan` | `"Alan"` | `"alan@example.com"` |

这就是实例变量中的 **instance**：

> **每个实例（object / instance）都有自己的一份变量。**

改变 `ada` 的数据，不代表 `alan` 的数据也一起改变。

# 4. `public`、`private` 与数据封装

`public` 和 `private` 叫作访问修饰符（access modifiers）。它们决定代码可以从哪里访问一个成员。

| 修饰符 | 含义 |
|---|---|
| `public` | 当前类内部和其他类都可以访问 |
| `private` | 只能在声明它的类内部访问 |

例如：

```java
public class Person
{
    private String name;

    public void print()
    {
        System.out.println(name);
    }
}
```

`name` 是 `private`，所以类外代码不应该直接这样做：

```java
Person p = new Person("Ada", "ada@example.com");
p.name = "Grace";     // cannot directly access a private field
```

但 `print()` 是 `public`，所以类外代码可以调用：

```java
p.print();
```

这种设计背后的概念叫 **数据封装（data encapsulation）**：

> 把对象内部的数据和实现细节保护在类里面，只把需要使用的操作暴露给外部代码。

可以把它理解成：

```text
外部代码
   ↓
public methods
   ↓
-----------------
类的内部
private instance variables
-----------------
```

所以在 AP CSA 中，除非题目特别说明，实例变量通常写成：

```java
private type variableName;
```

例如：

```java
private String name;
private int age;
private double balance;
```

# 5. 构造器和实例方法在类中的位置

## 构造器（constructor）

构造器的任务是在对象创建时初始化对象的数据。

```java
public Person(String n, String e)
{
    name = n;
    email = e;
}
```

这一课先认出它即可：

* 构造器的名字和类名相同
* AP CSA 中构造器写成 `public`
* 它通常出现在实例变量之后、其他方法之前

构造器内部具体发生什么，会在 **3.4 Constructors** 中继续学习。

## 实例方法（instance methods）

实例方法定义对象的行为。

```java
public void print()
{
    System.out.println(name + " " + email);
}
```

这个方法能够直接使用 `name` 和 `email`，因为这些变量属于同一个类中的对象。

在 Unit 1 中，我们已经一直在调用这种方法：

```java
p.print();
```

这里的重点是：

> **对哪个对象调用方法，方法就使用哪个对象自己的实例变量。**

例如：

```java
ada.print();
alan.print();
```

`ada.print()` 使用的是 `ada` 自己的 `name` 和 `email`；`alan.print()` 使用的是 `alan` 自己的数据。

方法是否使用 `public` 或 `private`，取决于它是否需要被类外代码调用：

```text
需要给外部使用 → public
只在类内部辅助使用 → private
```

# 6. 设计一个类时，先问两个问题

写类并不是先想 Java 语法，而是先决定这个类要表示什么。

假设要设计一个 `Book` 类，可以先问：

### 1. 这个对象需要保存什么数据？

例如：

```text
title
author
pages
```

这些通常会变成实例变量：

```java
private String title;
private String author;
private int pages;
```

### 2. 这个对象需要做什么？

例如：

```text
printInfo()
isLongBook()
```

这些通常会变成方法。

所以可以把面向对象设计最开始的思路压缩成：

```text
对象“有什么” → instance variables
对象“能做什么” → methods
```

构造器则负责在创建对象时，把一开始的数据放进这些实例变量中。

# 7. 常见初学者错误

| 错误 | 错误想法 / 代码 | 为什么不合适 | 正确理解 |
|---|---|---|---|
| 把实例变量写成 `public` | `public int age;` | 类外代码可以直接改内部数据 | AP CSA 中通常使用 `private int age;` |
| 把构造器写成 `private` | `private Person(...)` | 在本课程的 class design 中，构造器应允许外部创建对象 | 使用 `public Person(...)` |
| 以为多个对象共享同一份实例变量 | 改 `ada.name` 后以为 `alan.name` 也会变 | 每个对象都有自己的实例变量 | `ada` 和 `alan` 各有自己的 `name` |
| 把类和对象混为一谈 | 说 `Person` 是某一个具体的人 | `Person` 是蓝图 / 类型 | `ada` 才是一个 `Person` 对象的引用变量 |
| 从类外直接访问 `private` 字段 | `p.name` | `private` 只允许当前类内部访问 | 通过类提供的 `public` 方法与对象交互 |
| 认为所有方法都必须 `public` | helper method 也一定 `public` | 有些方法只需要在类内部使用 | 外部要调用用 `public`；内部辅助可用 `private` |

# 8. 小练习（Mini Practice）

## Practice 1：识别类的三个主要部分

下面代码中的 `name`、`Student(...)` 和 `printName()` 分别是什么？

```java
public class Student
{
    private String name;

    public Student(String n)
    {
        name = n;
    }

    public void printName()
    {
        System.out.println(name);
    }
}
```

**答案：**

```text
name         → instance variable
Student(...) → constructor
printName()  → method
```

---

## Practice 2：每个对象的数据

```java
Student a = new Student("Amy");
Student b = new Student("Ben");
```

哪一种说法正确？

A. `a` 和 `b` 共用同一个 `name` 变量  
B. `a` 和 `b` 各自有自己的 `name` 变量  
C. 只有第一个创建的对象有实例变量

**答案：B**

同一个类创建出的每个对象都有自己的一份实例变量，因此 `a` 可以保存 `"Amy"`，`b` 可以保存 `"Ben"`。

---

## Practice 3：选择合适的访问权限

一个 `Party` 类需要：

* 保存参加人数 `numPeople`
* 提供构造器创建 `Party` 对象
* 提供 `startParty()` 给其他类调用

下面哪种设计最合理？

### A

```java
public int numPeople;
private Party(int n) { }
private void startParty() { }
```

### B

```java
private int numPeople;
public Party(int n) { }
public void startParty() { }
```

### C

```java
private int numPeople;
private Party(int n) { }
public void startParty() { }
```

**答案：B**

* 实例变量属于对象内部数据 → `private`
* AP CSA 中构造器 → `public`
* `startParty()` 需要让类外调用 → `public`

---

## Practice 4：哪一行不能从类外直接访问？

假设有：

```java
public class Account
{
    private double balance;

    public void printBalance()
    {
        System.out.println(balance);
    }
}
```

并且变量 `a` 已经指向一个 `Account` 对象。下面哪一行在另一个类中不应该被允许？

A. `a.printBalance();`  
B. `System.out.println(a.balance);`

**答案：B**

`balance` 是 `private`，只能在 `Account` 类内部直接访问；`printBalance()` 是 `public`，所以类外代码可以调用。

# Unit 3.3 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| class / 类 | 创建对象的蓝图或类型 | `public class Person` |
| class body / 类主体 | 类的 `{ }` 中定义成员的部分 | 包含实例变量、构造器和方法 |
| instance variable / 实例变量 | 每个对象自己拥有的数据 | `private String name;` |
| attribute / field / 属性、字段 | 常用来指对象保存的数据 | 在本课中通常就是 instance variable |
| constructor / 构造器 | 创建对象时初始化数据的特殊代码 | `public Person(...)` |
| instance method / 实例方法 | 定义对象行为的方法 | `p.print()` |
| access modifier / 访问修饰符 | 控制成员能从哪里访问 | `public`、`private` |
| public / 公有 | 类外代码也可以访问 | 常用于需要对外提供的 constructor / method |
| private / 私有 | 只能在当前类内部直接访问 | 实例变量通常使用 `private` |
| data encapsulation / 数据封装 | 隐藏类的内部数据和实现细节 | 外部通过公开的方法与对象交互 |
