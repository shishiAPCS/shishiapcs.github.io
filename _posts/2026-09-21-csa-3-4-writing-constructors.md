---
title: "AP CSA 3.4：编写构造器"
layout: post
categories: media
render_with_liquid: false
---

在 3.3 中，我们已经认识了一个类的基本结构：**实例变量（instance variables）保存数据，构造器（constructor）负责初始化对象，方法（methods）定义对象的行为。**

这一课开始真正自己写构造器。

> **构造器最重要的任务，是在对象创建时给实例变量设置合适的初始值，让对象从一开始就处于可用的状态。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.4 编写构造器（Writing Constructors）

## 构造器的写法（Constructor Signature）

* 名字必须和类名完全相同
* AP CSA 中通常使用 `public`
* **没有返回类型**，连 `void` 都不能写
* 可以有参数（parameters）
* 通常写在实例变量之后、其他方法之前

## 构造器的任务（Job of a Constructor）

* 初始化对象的实例变量
* 把传入的参数保存到对象中
* 让新对象进入合理、可用的状态（valid state）
* 每次 `new` 一个对象时都会执行对应的构造器

## 参数 → 实例变量

* 参数接收创建对象时传入的数据
* 典型写法：`name = n;`
* 左边：对象的实例变量
* 右边：构造器的参数
* 不要把赋值方向写反

## 调用构造器

* `new ClassName(arguments)`
* 参数个数、类型、顺序必须匹配
* `new Pet("Milo", 80)`
* 创建不同对象时可以传入不同的数据

## 默认无参构造器（Default No-Argument Constructor）

* 如果**一个构造器都没有写**，Java 会自动提供
* 实例变量得到类型默认值
  * 数值 → `0` / `0.0`
  * `boolean` → `false`
  * 引用类型 → `null`
* 一旦自己写了任何构造器，Java 就不会再自动提供这个默认构造器

## 多个构造器（Overloaded Constructors）

* 一个类可以有多个构造器
* 构造器名称都和类名相同
* 参数列表必须不同
* 可以让对象用不同方式初始化

## AP 常见考法

* 从 class 中识别 constructor
* 找出合法 / 不合法的 constructor signature
* 根据参数补全实例变量初始化
* 判断 `new ClassName(...)` 调用了哪个构造器
* 判断是否存在 Java 自动提供的 default constructor
* 写出一个完整、正确的 constructor

</script>
</div>
</div>

# 1. 第一个 AP 核心考法

下面的 `Cat` 类需要用构造器接收猫的颜色 `c` 和是否饥饿 `h`：

```java
public class Cat
{
    private String color;
    private boolean isHungry;

    public Cat(String c, boolean h)
    {
        /* missing code */
    }
}
```

哪一段代码可以正确替换 `missing code`？

### A

```java
c = color;
h = isHungry;
```

### B

```java
color = c;
isHungry = h;
```

### C

```java
c = "black";
h = true;
```

**答案：B**

构造器参数 `c` 和 `h` 接收外部传进来的值，再把这些值存入对象自己的实例变量：

```text
传进来的参数 → 对象的实例变量

c → color
h → isHungry
```

所以最典型的构造器代码就是：

```java
instanceVariable = parameter;
```

这会是 3.4 最常见的 AP 考法之一。

# 2. 构造器长什么样？

继续使用上一课的 `Pet` 类：

```java
public class Pet
{
    private String name;
    private int energy;

    public Pet(String n, int e)
    {
        name = n;
        energy = e;
    }
}
```

构造器是这一部分：

```java
public Pet(String n, int e)
{
    name = n;
    energy = e;
}
```

构造器的 signature 有几个非常重要的特征：

| 特征 | `Pet` 中的例子 |
|---|---|
| 通常使用 `public` | `public Pet(...)` |
| 名字和类名完全相同 | 类叫 `Pet`，构造器也叫 `Pet` |
| **没有返回类型** | 前面没有 `void`、`int`、`String` |
| 可以有参数 | `String n, int e` |

特别注意：

```java
public void Pet(String n, int e)
```

**不是构造器。**

因为写了 `void` 之后，它就变成了一个名字叫 `Pet` 的普通方法。

可以先把构造器的模板记成：

```java
public ClassName(parameters)
{
    // initialize instance variables
}
```

# 3. 构造器到底做什么？

构造器的核心任务是：

> **给一个刚创建的对象设置初始状态（initial state）。**

例如：

```java
Pet p1 = new Pet("Milo", 80);
Pet p2 = new Pet("Luna", 50);
```

两次 `new Pet(...)` 都会执行 `Pet` 的构造器，但传进去的数据不同。

执行完之后，可以理解成：

| 对象 | `name` | `energy` |
|---|---|---:|
| `p1` | `"Milo"` | `80` |
| `p2` | `"Luna"` | `50` |

也就是说，构造器不是只运行一次。

> **每创建一个新的对象，就会执行一次与参数匹配的构造器。**

构造器还应该让对象进入一个合理、可用的状态（valid state）。

例如，如果一个 `Fraction` 类用 `denominator` 保存分母，那么：

```java
private int denominator;
```

如果让它保持默认值 `0`，就会得到一个无效的分数。因此一个无参构造器可能会选择：

```java
public Fraction()
{
    numerator = 1;
    denominator = 1;
}
```

重点不是一定要用 `1`，而是：

> **构造器应该把对象初始化成合理的状态，而不是机械地给变量随便一个值。**

# 4. 参数怎样进入对象？

看这一行：

```java
Pet p = new Pet("Milo", 80);
```

调用构造器时：

```text
"Milo" → n
80       → e
```

然后构造器执行：

```java
name = n;
energy = e;
```

数据继续流向实例变量：

```text
"Milo" → n → name
80       → e → energy
```

因此可以把整个过程理解成：

```text
arguments
   ↓
constructor parameters
   ↓
instance variables
```

### 左右两边不要看反

```java
name = n;
```

意思是：

> 把 `n` 当前保存的值，赋给实例变量 `name`。

而下面这样通常不是你想要的：

```java
n = name;
```

它把方向写反了，并没有用参数初始化 `name`。

这和 Unit 1 学过的普通赋值完全一样：

```text
左边 ← 右边
```

# 5. `new` 的参数必须和构造器匹配

假设类中有：

```java
public Pet(String n, int e)
{
    name = n;
    energy = e;
}
```

那么下面是合法的：

```java
Pet p = new Pet("Milo", 80);
```

因为参数列表匹配：

```text
constructor: Pet(String, int)
call:        Pet(String, int)
```

下面这些则不能匹配这个构造器：

```java
new Pet("Milo");       // 少一个参数
new Pet(80, "Milo");   // 顺序 / 类型不对
new Pet();              // 没有对应的无参构造器
```

所以看 constructor call 时，检查三件事：

```text
参数个数（number）
参数类型（type）
参数顺序（order）
```

这和 Unit 1 中调用别人写好的 constructor 时的规则完全相同；3.4 只是把视角反过来——现在是你自己负责写出那个构造器。

# 6. Java 自动提供的 default constructor

这是这一课最容易混淆的地方之一。

如果一个类**完全没有写任何构造器**：

```java
public class Pet
{
    private String name;
    private int energy;
}
```

Java 会自动提供一个**默认无参构造器（default no-argument constructor）**。

因此下面可以创建对象：

```java
Pet p = new Pet();
```

实例变量会得到各自类型的默认值：

| 类型 | 默认值 |
|---|---|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| 引用类型，例如 `String` | `null` |

所以这个 `Pet` 对象一开始相当于：

```text
name   → null
energy → 0
```

## 但是：只要自己写了一个构造器……

例如：

```java
public Pet(String n, int e)
{
    name = n;
    energy = e;
}
```

Java 就**不会再自动提供**：

```java
Pet()
```

因此：

```java
Pet p1 = new Pet("Milo", 80);   // OK
Pet p2 = new Pet();             // error
```

除非你自己再写一个无参构造器：

```java
public Pet()
{
    name = "Unknown";
    energy = 100;
}
```

这里要区分两个词：

* **default constructor**：你一个 constructor 都没写时，Java 自动提供
* **no-argument constructor**：参数列表为空；可以是 Java 自动提供的，也可以是程序员自己写的

# 7. 一个类可以有多个构造器

同一个类可以提供不同的初始化方式。

例如：

```java
public class Pet
{
    private String name;
    private int energy;

    public Pet()
    {
        name = "Unknown";
        energy = 100;
    }

    public Pet(String n, int e)
    {
        name = n;
        energy = e;
    }
}
```

于是两种创建方式都合法：

```java
Pet p1 = new Pet();
Pet p2 = new Pet("Milo", 80);
```

这叫构造器重载（constructor overloading）。

学生在 Unit 1 已经见过 overloaded constructors；这里重点只是从“调用它们”转为“自己写它们”。

多个构造器的名字都一样，所以 Java 通过 **signature** 区分它们。参数列表需要在数量、类型或顺序上有所不同。

# 8. 常见初学者错误

| 错误 | 错误代码 | 问题 | 正确写法 / 理解 |
|---|---|---|---|
| 给构造器写返回类型 | `public void Pet(...)` | 这变成普通方法，不是 constructor | `public Pet(...)` |
| 构造器名称和类名不同 | `public Animal(...)` 写在 `Pet` 中 | constructor 必须和 class 同名 | `public Pet(...)` |
| 赋值方向写反 | `n = name;` | 没有把参数保存到实例变量 | `name = n;` |
| 参数自己赋给自己 | `n = n;` | 只改变 / 保留参数本身，对实例变量没有作用 | `name = n;` |
| 写了一个 constructor 后还以为 `new Pet()` 自动存在 | `new Pet()` | Java 已经不会自动提供 default constructor | 自己写 `Pet()`，或调用已有 constructor |
| 调用时参数不匹配 | `new Pet(80, "Milo")` | 参数类型和顺序不符合 signature | `new Pet("Milo", 80)` |
| 以为 constructor 必须 `return` 一个对象 | `return p;` | constructor 没有返回类型，也不写返回对象 | 只负责初始化实例变量 |

# 9. 小练习（Mini Practice）

## Practice 1：哪一个是真正的 constructor？

假设类名是：

```java
public class Book
```

下面哪一个是合法的构造器？

### A

```java
public void Book(String t)
```

### B

```java
public Book(String t)
```

### C

```java
public String Book(String t)
```

**答案：B**

构造器和类同名，而且**没有返回类型**。

---

## Practice 2：补全构造器

```java
public class Student
{
    private String name;
    private int grade;

    public Student(String n, int g)
    {
        /* missing code */
    }
}
```

应该怎样补全？

**答案：**

```java
name = n;
grade = g;
```

构造器参数把创建对象时传入的数据交给对象自己的实例变量。

---

## Practice 3：有没有自动的 default constructor？

```java
public class Car
{
    private String model;
    private int year;

    public Car(String m, int y)
    {
        model = m;
        year = y;
    }
}
```

下面哪一个 constructor call 合法？

A. `new Car()`  
B. `new Car("Honda", 2026)`  
C. 两个都合法

**答案：B**

因为类已经自己写了 `Car(String, int)`，Java 不会再自动提供 `Car()`。

---

## Practice 4：预测两个对象的数据

```java
Pet a = new Pet("Milo", 80);
Pet b = new Pet("Luna", 50);
```

构造器是：

```java
public Pet(String n, int e)
{
    name = n;
    energy = e;
}
```

创建完成后，下面哪一个正确？

A. `a` 和 `b` 都保存最后一次传入的数据  
B. `a` 保存 `"Milo", 80`，`b` 保存 `"Luna", 50`  
C. `name` 和 `energy` 只是参数，不会保存到对象中

**答案：B**

每个对象都有自己的一份实例变量；每次调用构造器时，参数只用来初始化当前正在创建的那个对象。

# Unit 3.4 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| constructor / 构造器 | 初始化新对象的特殊代码 | `public Pet(String n, int e)` |
| constructor signature / 构造器签名 | 构造器名称及参数信息 | 用于判断调用哪个 constructor |
| parameter / 参数 | 构造器定义中接收数据的变量 | `String n`, `int e` |
| argument / 实参 | 调用构造器时真正传入的值 | `"Milo"`, `80` |
| initialize / 初始化 | 给对象的数据设置初始值 | `name = n;` |
| initial state / 初始状态 | 对象刚创建完成时保存的数据状态 | `name = "Milo"`, `energy = 80` |
| valid state / 有效状态 | 对象的数据处于合理、可使用的状态 | 分母不能为 `0` |
| no-argument constructor / 无参构造器 | 参数列表为空的构造器 | `public Pet()` |
| default constructor / 默认构造器 | 没有写任何 constructor 时 Java 自动提供的无参构造器 | 实例变量使用类型默认值 |
| constructor overloading / 构造器重载 | 同一个类中定义多个不同 signature 的构造器 | `Pet()` 与 `Pet(String, int)` |
