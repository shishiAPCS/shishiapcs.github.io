---
title: "AP CSA 3.3：Java 类的结构"
layout: post
categories: media
render_with_liquid: false
---

In Topic 3.1, you decided what data and behaviors a class should have. Now you will see how those ideas appear in actual Java code: **instance variables store object data, constructors initialize that data, and methods define object behaviors**.

在 3.1 中，我们学习了如何决定一个类需要哪些数据和行为。现在，我们来看这些设计如何真正写进 Java：**实例变量保存对象的数据，构造器初始化数据，方法定义对象的行为。**

> **A class is a blueprint. Each object gets its own instance-variable values, while the constructor and methods define how those objects are created and used.**
> **类是一张蓝图。每个对象拥有自己的一份实例变量数据，而构造器和方法决定对象如何被创建和使用。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.3 Java 类的结构<br>Anatomy of a Java Class

## 类与对象<br>Class and Object

* `class` 定义创建对象的蓝图<br>A class defines a blueprint for objects
* 对象是类的实例<br>An object is an instance of a class
* `new` 创建新的对象<br>`new` creates a new object

## 类的三个主要部分<br>Three Main Parts

* 实例变量：保存对象数据<br>Instance variables store object data
* 构造器：初始化实例变量<br>Constructors initialize instance variables
* 实例方法：定义对象行为<br>Instance methods define object behavior

## 实例变量<br>Instance Variables

* 每个对象拥有自己的一份<br>Each object has its own copy
* AP CSA 中通常声明为 `private`<br>Usually declared `private` in AP CSA
* 基本格式：`private type name;`

## 构造器<br>Constructors

* 创建对象时运行<br>Runs when an object is created
* 用于初始化对象数据<br>Initializes object data
* 名称与类名相同<br>Has the same name as the class
* AP CSA 中构造器为 `public`<br>Constructors are `public` in AP CSA

## 实例方法<br>Instance Methods

* 定义对象能够做什么<br>Define what an object can do
* 可以直接访问对象的实例变量<br>Can directly access the object's instance variables
* 通过对象和点运算符调用<br>Called using an object and the dot operator

## 数据封装<br>Data Encapsulation

* 隐藏类的内部数据与实现细节<br>Hide internal data and implementation details
* 实例变量使用 `private`<br>Instance variables are `private`
* 对外需要使用的操作通常使用 `public` 方法<br>Operations intended for outside use are usually `public`

## AP 考试陷阱<br>Common AP Traps

* 把实例变量声明为 `public`<br>Declaring instance variables `public`
* 把构造器声明为 `private`<br>Declaring the constructor `private`
* 忘记每个对象有独立的实例变量<br>Forgetting that each object has its own data
* 混淆实例变量、构造器和方法<br>Confusing fields, constructors, and methods

</script>
</div>
</div>

# 1. Recognize the Correct Class Structure<br>先判断正确的类结构

Suppose a `Cat` class needs to store a cat's `name` and `age`. Other classes must also be able to create `Cat` objects.

假设 `Cat` 类需要保存猫的 `name` 和 `age`，并且其他类需要能够创建 `Cat` 对象。

Which class design is most appropriate?

哪一种设计最合适？

**A.**

```java
public String name;
public int age;

private Cat(String n, int a)
{
    name = n;
    age = a;
}
```

**B.**

```java
private String name;
private int age;

public Cat(String n, int a)
{
    name = n;
    age = a;
}
```

**C.**

```java
public String name;
public int age;

public Cat(String n, int a)
{
    name = n;
    age = a;
}
```

**Answer: B**

For AP CSA class design:

在 AP CSA 的类设计中：

```java
private String name;
private int age;
```

The instance variables should normally be `private`.

实例变量通常应该声明为 `private`。

```java
public Cat(String n, int a)
```

The constructor should be `public` so that other code can create `Cat` objects.

构造器应该是 `public`，这样其他代码才能创建 `Cat` 对象。

This pattern is one of the most important ideas in Topic 3.3:

这是 3.3 最重要的结构之一：

```text
private data
public constructor
public methods when outside access is needed
```

# 2. A Class Is a Blueprint for Objects<br>类是创建对象的蓝图

A class defines what data its objects have and what those objects can do.

类规定了对象拥有哪些数据，以及这些对象能够做什么。

A basic class begins like this:

一个基本的类从下面的结构开始：

```java
public class Person
{
    // class body
}
```

The keyword:

关键字：

```java
class
```

tells Java that we are defining a class.

告诉 Java 我们正在定义一个类。

`Person` is the class name, and everything between `{` and `}` belongs to the class body.

`Person` 是类名，`{` 和 `}` 之间的内容属于类的主体。

After defining the class, we can create objects:

定义好类之后，就可以创建对象：

```java
Person p1 = new Person();
Person p2 = new Person();
```

`p1` and `p2` are two different **instances** of the `Person` class.

`p1` 和 `p2` 是 `Person` 类的两个不同 **instance（实例）**。

> **Class = blueprint**
> **Object = one instance created from that blueprint**

> **类 = 蓝图**
> **对象 = 根据这张蓝图创建出的一个实例**

# 3. The Three Main Parts of a Class<br>类的三个主要部分

A class usually contains three important parts:

一个类通常包含三个重要部分：

```java
public class Person
{
    // 1. instance variables

    // 2. constructor

    // 3. methods
}
```

| Part               | Main job                                         | 中文理解         |
| ------------------ | ------------------------------------------------ | ------------ |
| Instance variables | Store data for each object.                      | 保存每个对象自己的数据。 |
| Constructor        | Initialize the object's data when it is created. | 创建对象时初始化数据。  |
| Instance methods   | Define what the object can do.                   | 定义对象能够做什么。   |

Consider:

观察下面这个类：

```java
public class Person
{
    private String name;
    private String email;

    public Person(String initName, String initEmail)
    {
        name = initName;
        email = initEmail;
    }

    public void print()
    {
        System.out.println(name + " " + email);
    }
}
```

The roles are:

各部分的作用是：

```text
name, email       → instance variables
Person(...)       → constructor
print()           → instance method
```

When reading an AP question about a class, first identify these three parts.

做 AP 类相关题目时，可以先找出这三个部分。

# 4. Instance Variables Store Each Object's Data<br>实例变量保存每个对象自己的数据

An **instance variable** stores data associated with an object.

**Instance variable（实例变量）**用于保存某个对象的数据。

```java
public class Person
{
    private String name;
    private int age;
}
```

The standard AP CSA pattern is:

AP CSA 中的常见写法是：

```java
private type variableName;
```

For example:

```java
private String name;
private int age;
private double balance;
```

The important behavior is:

最重要的是理解：

> **Each object gets its own copy of the instance variables.**

> **每一个对象都有自己的一份实例变量。**

Suppose:

```java
Person p1 = new Person("Maya", 16);
Person p2 = new Person("Leo", 17);
```

Conceptually:

可以理解为：

```text
p1 object
name → "Maya"
age  → 16

p2 object
name → "Leo"
age  → 17
```

Changing `p1`'s age does not automatically change `p2`'s age.

改变 `p1` 的年龄，不会自动改变 `p2` 的年龄。

They are two different objects with separate instance-variable values.

它们是两个不同的对象，各自拥有独立的数据。

# 5. Why Instance Variables Are `private`<br>为什么实例变量使用 `private`

Consider:

```java
private int age;
```

The keyword `private` means that this variable can be accessed directly only by code inside the class where it is declared.

`private` 表示这个变量只能被声明它的类内部代码直接访问。

This supports **data encapsulation**.

这就是 **data encapsulation（数据封装）**。

Data encapsulation keeps a class's implementation details hidden from external classes.

数据封装会把类内部的数据和实现细节隐藏起来。

Think of the class as having an inside and an outside:

可以把类想成“内部”和“外部”：

```text
Inside Person
    private name
    private age
    methods can access them directly

Outside Person
    cannot directly access private data
    interacts through allowed public operations
```

For example, code inside the class can do this:

类内部的方法可以直接写：

```java
age++;
```

But code in another class cannot directly access:

但是其他类中的代码不能直接访问：

```java
person.age
```

when `age` is `private`.

如果 `age` 是 `private`，这种直接访问是不允许的。

# 6. `public` and `private` Control Access<br>`public` 与 `private` 控制访问权限

`public` and `private` are **access modifiers**.

`public` 和 `private` 叫作 **access modifiers（访问修饰符）**。

| Modifier  | Access                                                                       |
| --------- | ---------------------------------------------------------------------------- |
| `public`  | Can be accessed from outside the declaring class.<br>可以从类外部访问。               |
| `private` | Can be accessed directly only inside the declaring class.<br>只能在声明它的类内部直接访问。 |

For Topic 3.3, remember these AP conventions:

对于 3.3，请重点记住下面这些 AP 规则：

```java
public class Cat
```

Classes you write in this course are `public`.

本课程中编写的类使用 `public`。

```java
private String name;
private int age;
```

Instance variables should normally be `private`.

实例变量通常应该是 `private`。

```java
public Cat(...)
```

Constructors are `public` in this course.

本课程中的构造器使用 `public`。

A method that another class needs to call should also be `public`.

如果某个方法需要从类外调用，它也应该是 `public`。

# 7. Constructors Initialize Object Data<br>构造器负责初始化对象数据

A constructor runs when an object is created with `new`.

使用 `new` 创建对象时，会运行构造器。

```java
Person p = new Person("Maya", 16);
```

The constructor might be:

构造器可能是：

```java
public Person(String initName, int initAge)
{
    name = initName;
    age = initAge;
}
```

Its job is to copy the starting values into the object's instance variables.

它的作用是把创建对象时传入的初始值保存到对象的实例变量中。

After:

执行：

```java
Person p = new Person("Maya", 16);
```

the object contains:

对象中保存的是：

```text
name → "Maya"
age  → 16
```

For now, focus on recognizing the constructor's role.

现阶段重点是认出构造器的作用。

Topic 3.4 will cover how to write constructors in more detail.

3.4 会进一步学习如何编写构造器。

A constructor has the **same name as the class**:

构造器的**名称必须与类名相同**：

```java
public class Person
{
    public Person(...)
    {
        ...
    }
}
```

# 8. Instance Methods Define Object Behavior<br>实例方法定义对象行为

Instance methods define what an object can do.

实例方法定义对象能够执行哪些操作。

Consider:

```java
public class Pet
{
    private int health;

    public Pet(int initHealth)
    {
        health = initHealth;
    }

    public void feed()
    {
        health++;
    }
}
```

The `feed()` method can directly access:

`feed()` 方法可以直接访问：

```java
health
```

because `health` is an instance variable in the same class.

因为 `health` 是同一个类中的实例变量。

Suppose we create two objects:

假设创建两个对象：

```java
Pet p1 = new Pet(5);
Pet p2 = new Pet(8);

p1.feed();
```

After the call:

调用之后：

```text
p1 health → 6
p2 health → 8
```

Why did only `p1` change?

为什么只有 `p1` 改变？

Because:

因为：

```java
p1.feed();
```

calls `feed()` on the `p1` object. The method therefore uses **p1's instance variable**.

方法是在 `p1` 对象上调用的，因此它使用的是 **p1 自己的实例变量**。

This idea is extremely important when tracing object code.

在追踪对象代码时，这一点非常重要。

# 9. Calling an Instance Method<br>调用实例方法

To call an instance method, use an object reference followed by the dot operator:

调用实例方法时，使用对象引用和点运算符：

```java
objectName.methodName();
```

Example:

```java
Person p1 = new Person("Sana", "sana@example.com");

p1.print();
```

This means:

它的意思是：

> Call `print()` on the object referenced by `p1`.

> 在 `p1` 指向的对象上调用 `print()`。

If another object calls the same method:

如果另一个对象调用相同方法：

```java
p2.print();
```

the method uses the instance-variable values belonging to `p2`.

这个方法使用的就是 `p2` 自己的实例变量值。

The method code is defined once in the class, but different objects use their own data.

方法代码在类中只定义一次，但不同对象会使用各自的数据。

# 10. Choosing the Correct Access Modifiers<br>选择正确的访问修饰符

Suppose a `Party` class needs:

假设 `Party` 类需要：

* three attributes;

* a constructor that other classes can use;

* a `startParty()` method that other classes should be able to call.

* 三个属性；

* 一个可以从其他类调用的构造器；

* 一个可以从其他类调用的 `startParty()` 方法。

A good design is:

合理的设计是：

```java
public class Party
{
    private int numOfPeople;
    private int volumeOfMusic;
    private int numOfBoxesOfPizza;

    public Party()
    {
        // initialize object
    }

    public void startParty()
    {
        // perform behavior
    }
}
```

Notice the pattern:

注意这个结构：

```text
class              → public
instance variables → private
constructor        → public
outside method     → public
```

This is exactly the kind of class-design decision that can appear in an AP multiple-choice question.

这正是 AP 选择题中常见的类设计判断。

# 11. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                                                   | Why it is wrong                                                                   | Correct understanding                                                                        |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Declaring instance variables `public`.<br>把实例变量声明为 `public`。                                              | Outside code can directly access the internal data.<br>外部代码可以直接访问内部数据。            | AP CSA instance variables should normally be `private`.<br>AP CSA 中实例变量通常使用 `private`。       |
| Declaring a constructor `private` when other classes must create objects.<br>需要从外部创建对象，却把构造器写成 `private`。 | Outside code cannot call that constructor.<br>类外无法调用这个构造器。                        | Constructors in this course are `public`.<br>本课程中构造器使用 `public`。                             |
| Thinking all objects share one instance variable.<br>认为所有对象共享一份实例变量。                                      | Each object has its own copy.<br>每个对象都有自己的一份。                                     | Trace the data separately for each object.<br>分别追踪每个对象的数据。                                   |
| Thinking a constructor is an instance variable.<br>把构造器当成实例变量。                                            | A constructor initializes the object's data.<br>构造器负责初始化对象数据。                     | Identify fields, constructors, and methods separately.<br>分别识别实例变量、构造器和方法。                   |
| Adding `static` to an ordinary instance method.<br>给普通实例方法添加 `static`。                                    | Instance methods operate on a particular object's data.<br>实例方法用于操作某个具体对象的数据。     | Ordinary object behaviors are instance methods and are not marked `static`.<br>普通对象行为使用实例方法。 |
| Trying to access a private variable directly from another class.<br>从另一个类直接访问私有变量。                        | `private` restricts direct access to the declaring class.<br>`private` 限制了类外直接访问。 | Interact through the class's public methods.<br>通过类提供的公共方法进行交互。                              |

# 12. Debugging Example<br>调试例子

Suppose the specification says:

假设题目要求：

* `Dog` stores a `name`;

* its data should be encapsulated;

* other classes must be able to create a `Dog`;

* other classes must be able to call `bark()`.

* `Dog` 保存 `name`；

* 数据应该被封装；

* 其他类必须能够创建 `Dog`；

* 其他类必须能够调用 `bark()`。

Buggy code:

错误代码：

```java
public class Dog
{
    public String name;

    private Dog(String initName)
    {
        name = initName;
    }

    private void bark()
    {
        System.out.println("Woof");
    }
}
```

There are three design problems.

这里有三个设计问题。

### Problem 1

```java
public String name;
```

The instance variable should be `private`.

实例变量应该使用 `private`。

### Problem 2

```java
private Dog(String initName)
```

Outside classes are supposed to create `Dog` objects, so the constructor must be `public`.

题目要求其他类能够创建 `Dog` 对象，因此构造器必须是 `public`。

### Problem 3

```java
private void bark()
```

Outside classes are supposed to call `bark()`, so the method must be `public`.

题目要求类外能够调用 `bark()`，因此这个方法必须是 `public`。

### Fixed code

```java
public class Dog
{
    private String name;

    public Dog(String initName)
    {
        name = initName;
    }

    public void bark()
    {
        System.out.println("Woof");
    }
}
```

| Part                  | Bug                   | Fix                    |
| --------------------- | --------------------- | ---------------------- |
| Instance variable     | `public String name;` | `private String name;` |
| Constructor           | `private Dog(...)`    | `public Dog(...)`      |
| Outside-facing method | `private void bark()` | `public void bark()`   |

# 13. Mini Practice<br>小练习

## Practice 1: Identify the Instance Variables<br>练习一：识别实例变量

Which lines declare instance variables?

哪些语句声明了实例变量？

```java
public class Name
{
    private String first;
    private String last;

    public Name(String theFirst, String theLast)
    {
        first = theFirst;
        last = theLast;
    }

    public void print()
    {
        System.out.println(first + " " + last);
    }
}
```

**Answer:**

```java
private String first;
private String last;
```

They are declared inside the class but outside the constructor and methods.

它们定义在类中，但位于构造器和方法之外。

---

## Practice 2: Constructor or Method?<br>练习二：构造器还是方法？

Consider:

观察：

```java
public Student(String name)
{
    // implementation
}
```

Is this a constructor or an ordinary method?

这是构造器还是普通方法？

**Answer: Constructor**

Its name is the same as the class name, and its job is to initialize a new object.

它的名称与类名相同，用于初始化新对象。

---

## Practice 3: Separate Object Data<br>练习三：区分不同对象的数据

Suppose:

```java
Pet a = new Pet(4);
Pet b = new Pet(9);

a.feed();
```

and `feed()` increases `health` by `1`.

如果 `feed()` 会让 `health` 增加 `1`。

What are the values afterward?

之后两个对象的值是多少？

**Answer:**

```text
a health → 5
b health → 9
```

The method call changes the instance variable belonging to `a`, not `b`.

这个方法调用改变的是 `a` 自己的实例变量，而不是 `b` 的。

---

## Practice 4: Choose the Best Declaration<br>练习四：选择最佳声明

A `Book` class needs an instance variable named `pages`.

Which declaration is most appropriate?

哪个声明最合适？

A.

```java
public int pages;
```

B.

```java
private int pages;
```

C.

```java
public pages int;
```

D.

```java
private pages int;
```

**Answer: B**

```java
private int pages;
```

AP CSA instance variables should normally be private.

AP CSA 中的实例变量通常应该使用 `private`。

---

## Practice 5: Public or Private?<br>练习五：public 还是 private？

A method called `startParty()` must be called from another class.

How should it normally begin?

这个方法通常应该怎样声明？

**Answer:**

```java
public void startParty()
```

Because outside code must be able to access it.

因为类外代码需要能够调用它。

# Quick Checklist<br>快速检查清单

Before answering a Topic 3.3 question, check:

做 3.3 的题目之前，检查：

* What is the class name?
  类名是什么？

* Is the class declared `public`?
  类是否使用了 `public`？

* Which declarations are **instance variables**?
  哪些声明属于**实例变量**？

* Are the instance variables `private`?
  实例变量是否使用了 `private`？

* Does each object have its own copy of those variables?
  每个对象是否都有自己的一份实例变量？

* Which part is the **constructor**?
  哪一部分是**构造器**？

* Does the constructor have the same name as the class?
  构造器名称是否与类名相同？

* Is the constructor `public`?
  构造器是否是 `public`？

* Which parts are **instance methods**?
  哪些部分属于**实例方法**？

* Can an instance method directly use the object's instance variables?
  实例方法是否可以直接使用该对象的实例变量？

* Which object is calling the method?
  是哪个对象在调用方法？

* Whose instance-variable values will the method use?
  方法会使用哪个对象的实例变量值？

* Does outside code need to call this method?
  类外代码是否需要调用这个方法？

* If yes, should the method be `public`?
  如果需要，它是否应该使用 `public`？

* Is any private data being accessed directly from outside the class?
  是否存在从类外直接访问私有数据的情况？

* Does the class preserve data encapsulation?
  这个类是否保持了数据封装？
