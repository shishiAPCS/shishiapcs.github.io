---
title: "AP CSA 3.7：类（static）变量与方法"
layout: post
categories: media
render_with_liquid: false
---

前面几课中，我们写的大多数变量和方法都属于某一个具体 object。

这一课学习 `static`：有些数据和行为**不属于某一个 object，而属于整个 class**。

其实你已经见过很多次了：

```java
Math.random();
Math.sqrt(25);
```

这里没有先创建 `Math` object，而是直接通过 class name 调用 method。

> **对于 class 的 variables / methods：instance member 属于具体 object；`static` member 属于整个 class。所有 objects 共享同一份 static variable。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.7 类（static）变量与方法<br>Class (static) Variables and Methods

## Instance vs. Class

* instance variable → 属于每个 object
* class variable → 属于整个 class
* `static` 表示成员属于 class
* 所有 objects 共享同一个 static variable

## Class Method（static method）

* 属于 class，不属于某个具体 object
* `public static returnType methodName(...)`
* 常用 `ClassName.methodName()` 调用
* `Math.random()`、`Math.sqrt()` 就是熟悉的例子
* `main` 也是 static method

## Static Method 能做什么

* 可以访问 / 修改 static variables
* 可以直接调用其他 static methods
* 不能直接访问 instance variables
* 不能直接调用 instance methods
* 如果拿到一个 object reference，可以通过这个 object 访问它的 instance members

## Class Variable（static variable）

* `private static int count;`
* 全班只有一份共享数据
* 常见用途：counter、最大值、最小值、平均值
* `public static` variable 可用 `ClassName.variableName` 访问

## `final`

* `final` variable 赋值后不能再修改
* 常量通常全部大写
* 常与 `static` 一起使用
* `public static final double PI = 3.14;`
* 熟悉的例子：`Math.PI`

## AP 常见考法

* 判断某个变量是每个 object 一份还是全 class 一份
* 追踪 constructor 如何更新 static counter
* 判断 static method 能否直接使用 instance variable
* 判断 static / instance method 应该如何调用
* 判断修改 `final` variable 是否合法

</script>
</div>
</div>

# 1. 第一个 AP 核心考法：到底有几份数据？

先看这个 class：

```java
public class Pet
{
    private String name;
    private static int petCount = 0;

    public Pet(String n)
    {
        name = n;
        petCount++;
    }

    public static int getPetCount()
    {
        return petCount;
    }
}
```

然后运行：

```java
Pet p1 = new Pet("Milo");
Pet p2 = new Pet("Luna");
Pet p3 = new Pet("Pico");

System.out.println(Pet.getPetCount());
```

输出是什么？

### A

```text
1
```

### B

```text
2
```

### C

```text
3
```

**答案：C**

为什么？

关键在这里：

```java
private static int petCount = 0;
```

`petCount` 是 **class variable（类变量）**。

整个 `Pet` class 只有一份 `petCount`：

```text
              Pet class
          petCount = 3
               ▲
        ┌──────┼──────┐
        │      │      │
      p1      p2      p3
    "Milo"  "Luna"  "Pico"
```

三个 objects 各自有自己的 `name`：

```text
p1.name → "Milo"
p2.name → "Luna"
p3.name → "Pico"
```

但它们共享同一个：

```text
Pet.petCount
```

这就是 3.7 最重要的区别：

> **instance data 是“一人一份”；static data 是“全班共享一份”。**

# 2. Instance Member 和 Static Member

Java class 中的 variable 和 method 都可以分成两类。

| 类型 | 属于谁 | 是否写 `static` | 常见调用 / 使用方式 |
|---|---|---|---|
| instance variable | 某个 object | 否 | 通过该 object 的 instance method 使用 |
| class variable | 整个 class | 是 | `ClassName.variableName`（如果是 `public`） |
| instance method | 某个 object | 否 | `objectName.methodName()` |
| class method | 整个 class | 是 | `ClassName.methodName()` |

例如：

```java
public class Pet
{
    private String name;          // instance variable
    private static int petCount;  // class variable

    public void printName()       // instance method
    {
        System.out.println(name);
    }

    public static int getPetCount() // class method
    {
        return petCount;
    }
}
```

最简单的判断方法就是先问：

> **这个成员描述的是“某一个 object”，还是“整个 class”？**

如果每只 `Pet` 都应该有不同的名字：

```java
private String name;
```

它应该是 instance variable。

如果所有 `Pet` 需要共同维护“已经创建了多少只 Pet”：

```java
private static int petCount;
```

它应该是 class variable。

# 3. Class Method（static method）

Class method 也叫 **static method**。它可以是 `public`，也可以是 `private`。

基本语法：

```java
public static returnType methodName(parameters)
{
    // method body
}
```

注意 `static` 的位置：

```text
public static int getPetCount()
       ↑
```

它通常放在 access modifier（`public` / `private`）之后、return type 之前。

例如：

```java
public static int getPetCount()
{
    return petCount;
}
```

调用：

```java
Pet.getPetCount();
```

如果另一个 static method 也在同一个 class 中，可以直接用 method name 调用：

```java
public static void printPetCount()
{
    System.out.println(getPetCount());
}
```

这种写法你在 Unit 1 已经见过很多次：

```java
Math.random();
Math.sqrt(25);
```

`Math.random()` 和 `Math.sqrt()` 都是 class methods，所以不需要：

```java
new Math()
```

就可以直接通过 class name 调用。

`main` 也是一个 familiar example：

```java
public static void main(String[] args)
```

它也是 static method。

# 4. Static Method 最重要的限制

这一条是 3.7 最常考、也最容易出错的地方。

看这个 class：

```java
public class Pet
{
    private String name;
    private static int petCount = 0;

    public void printName()
    {
        System.out.println(name);
    }

    public static void printCount()
    {
        System.out.println(petCount);
    }
}
```

这里：

```java
printCount()
```

可以直接使用：

```java
petCount
```

因为两者都是 `static`。

但是下面这种写法不行：

```java
public static void printSomething()
{
    System.out.println(name);  // error
}
```

为什么？

因为 `name` 属于**某一个 Pet object**。

但 `printSomething()` 属于整个 `Pet class`。

当 Java 执行：

```java
Pet.printSomething();
```

它根本不知道你想访问：

```text
p1.name ?
p2.name ?
p3.name ?
```

所以 static method **不能直接访问 instance variable**。

同理，它也不能直接调用 instance method：

```java
public static void test()
{
    printName();  // error
}
```

因为 `printName()` 必须针对某一个具体 `Pet` object 执行。

可以记成：

```text
static context
    ↓
知道整个 class 的共享数据
    ↓
不知道“当前是哪一个 object”
```

# 5. 如果 Static Method 拿到了一个 Object 呢？

Static method 不能**直接**访问 instance data，并不代表它永远不能使用 object。

如果 method 收到一个 object reference：

```java
public static void showPet(Pet p)
{
    p.printName();
}
```

这是合法的。

调用：

```java
Pet p1 = new Pet("Milo");
Pet.showPet(p1);
```

输出：

```text
Milo
```

原因是现在 static method 知道你指的是哪个 object：

```text
p → p1 object
```

所以它可以通过：

```java
p.printName();
```

调用这个具体 object 的 instance method。

这就是 Runestone 总结里的关键规则：

> **static method 不能直接访问 instance members；但如果得到某个 object，就可以通过那个 object 来访问。**

# 6. Class Variable（static variable）

Class variable 使用 `static` 声明：

```java
private static int petCount = 0;
```

它属于 class，而不是某一个 object。

## 为什么 counter 很适合用 static？

继续看：

```java
public Pet(String n)
{
    name = n;
    petCount++;
}
```

每调用一次 constructor：

```java
new Pet(...)
```

共享的 `petCount` 就增加 1。

例如：

```java
Pet p1 = new Pet("Milo");   // petCount = 1
Pet p2 = new Pet("Luna");   // petCount = 2
Pet p3 = new Pet("Pico");   // petCount = 3
```

这正是 class variable 常见的用途：

```text
统计创建了多少个 objects
记录所有 objects 中的最大值
记录所有 objects 中的最小值
维护跨 objects 共享的数据
```

Runestone 也用最大温度作为例子。

例如：

```java
public class Temperature
{
    private double temperature;
    public static double maxTemp = 0;

    public Temperature(double t)
    {
        temperature = t;

        if (t > maxTemp)
        {
            maxTemp = t;
        }
    }
}
```

执行：

```java
Temperature t1 = new Temperature(75);
Temperature t2 = new Temperature(100);
Temperature t3 = new Temperature(65);
```

最终：

```text
Temperature.maxTemp → 100.0
```

不是 `65`。

因为 `maxTemp` 是一份持续共享的数据，而不是每个 `Temperature` object 自己保存一个最大值。

# 7. `public static` Variable 如何访问？

如果 class variable 是 `public`：

```java
public static int petCount;
```

class 外部可以使用：

```java
Pet.petCount
```

也就是：

```text
ClassName.variableName
```

这和 static method 的调用非常像：

```java
Pet.getPetCount();
```

对比：

```text
ClassName.variableName
ClassName.methodName()
```

原因一样：它们都属于 **class**。

# 8. `final`：这个 Variable 不能再改

3.7 的最后一个关键字是：

```java
final
```

例如：

```java
final double PI = 3.14;
```

一旦赋值之后，就不能再写：

```java
PI = 4.2;  // error
```

Java 会报错。

如果一个值应该作为整个 class 共享的 constant（常量），经常会看到：

```java
public static final double PI = 3.14;
```

三个关键词分别表示：

```text
public → class 外部可以访问
static → 属于整个 class
final  → 不能被重新赋值
```

Java 的常量名称传统上使用全部大写：

```java
MAX_SPEED
MAX_SCORE
PI
```

你其实早就用过一个真正的例子：

```java
Math.PI
```

可以把它理解成一个属于 `Math` class 的公开常量。

# 9. 把 3.7 放进一个完整 Class

现在把这一课最重要的内容放在一起：

```java
public class Pet
{
    // 每个 Pet object 自己有一份
    private String name;
    private int energy;

    // 整个 Pet class 共享一份
    private static int petCount = 0;

    // class constant
    public static final int MAX_ENERGY = 100;

    public Pet(String n, int e)
    {
        name = n;
        energy = e;
        petCount++;
    }

    // instance method
    public void feed()
    {
        if (energy < MAX_ENERGY)
        {
            energy++;
        }
    }

    // instance method
    public String getName()
    {
        return name;
    }

    // class method
    public static int getPetCount()
    {
        return petCount;
    }
}
```

创建 objects：

```java
Pet p1 = new Pet("Milo", 80);
Pet p2 = new Pet("Luna", 90);
```

现在：

```text
p1.name      → "Milo"
p1.energy    → 80

p2.name      → "Luna"
p2.energy    → 90

Pet.petCount → 2

Pet.MAX_ENERGY → 100
```

调用 instance method：

```java
p1.feed();
```

调用 class method：

```java
Pet.getPetCount();
```

访问 public class constant：

```java
Pet.MAX_ENERGY
```

这一张图可以把 3.7 的结构全部串起来：

```text
Pet class
│
├── shared by the whole class
│   ├── static petCount
│   ├── static getPetCount()
│   └── static final MAX_ENERGY
│
├── p1 object
│   ├── name = "Milo"
│   └── energy = 80
│
└── p2 object
    ├── name = "Luna"
    └── energy = 90
```

# 10. 常见初学者错误

| 错误理解 / 写法 | 实际情况 |
|---|---|
| “每个 object 都有自己的 static variable” | ❌ static variable 属于 class，所有 objects 共享一份 |
| “static method 就是普通 instance method 的另一种写法” | ❌ static method 属于 class，不针对某个具体 object |
| 在 static method 里直接写 `System.out.println(name);` | ❌ `name` 是 instance variable，没有指定是哪一个 object |
| 在 static method 中直接调用 `printName();` | ❌ instance method 需要一个具体 object |
| “static method 完全不能使用 object” | ❌ 如果拿到 object reference，可以通过这个 object 调用 instance method |
| 用 `p1.getPetCount()` 来理解 static method | ⚠️ Runestone 说明 Java 可以通过 object 调 static method，但核心理解仍是它属于 class；AP 学习时优先识别 `Pet.getPetCount()` |
| “每创建一个 object，static counter 又从 0 开始” | ❌ static counter 是共享的一份数据，会继续累积 |
| “final 就是变量永远没有值” | ❌ final variable 可以赋值，但之后不能重新赋值 |
| `final double pi = 3.14;` 必须报错 | ❌ 合法；只是常量传统上使用大写名称，如 `PI` |
| `PI = 4.2;` 在 `PI` 是 final 时合法 | ❌ final variable 不能重新赋值 |

# 11. 小练习（Mini Practice）

## Practice 1：Static Counter

```java
public class Game
{
    private static int count = 0;

    public Game()
    {
        count++;
    }

    public static int getCount()
    {
        return count;
    }
}
```

执行：

```java
Game g1 = new Game();
Game g2 = new Game();
Game g3 = new Game();
Game g4 = new Game();

System.out.println(Game.getCount());
```

输出是什么？

**答案：**

```text
4
```

`count` 是 class variable，四次 constructor call 都更新同一份变量。

---

## Practice 2：哪一行会出错？

```java
public class Student
{
    private String name;
    private static int studentCount = 0;

    public static void printInfo()
    {
        System.out.println(studentCount); // Line 1
        System.out.println(name);         // Line 2
    }
}
```

**答案：Line 2。**

`studentCount` 是 static variable，可以由 static method 直接访问。

`name` 是 instance variable，但这里没有指定某个 `Student` object。

---

## Practice 3：修复 Static Method

下面的方法不能编译：

```java
public static void showName()
{
    System.out.println(name);
}
```

如果希望传入一个 `Pet` object 并打印它的名字，可以怎样修改？

**一种正确写法：**

```java
public static void showName(Pet p)
{
    System.out.println(p.getName());
}
```

现在 static method 知道应该访问哪个 object。

---

## Practice 4：最大值

```java
public class Score
{
    public static int maxScore = 0;

    public Score(int s)
    {
        if (s > maxScore)
        {
            maxScore = s;
        }
    }
}
```

执行：

```java
Score a = new Score(72);
Score b = new Score(95);
Score c = new Score(88);

System.out.println(Score.maxScore);
```

输出是什么？

**答案：**

```text
95
```

第三个 object 的 `88` 不会替换已经保存的 `95`。

---

## Practice 5：`final`

下面哪一行会导致错误？

```java
public static final int MAX_LEVEL = 100;

System.out.println(MAX_LEVEL); // A
int x = MAX_LEVEL;             // B
MAX_LEVEL = 200;               // C
```

**答案：C。**

`final` variable 已经被赋值为 `100`，不能再重新赋值。

---

## Practice 6：调用方式

假设：

```java
public class Pet
{
    private static int petCount = 0;

    public void feed()
    {
        // ...
    }

    public static int getPetCount()
    {
        return petCount;
    }
}
```

下面哪一种最能体现两种 method 的归属？

```java
p1.feed();
Pet.getPetCount();
```

**答案：这两行正好体现核心区别。**

```text
instance method → object.method()
class method    → ClassName.method()
```

# Unit 3.7 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| `static` / 静态 | 表示成员属于整个 class | `private static int count;` |
| class method / 类方法 | 属于 class 的 method，也叫 static method | `Math.random()` |
| instance method / 实例方法 | 针对某个 object 执行的 method | `p1.feed()` |
| class variable / 类变量 | 属于整个 class、所有 objects 共享的 variable | `static int petCount` |
| instance variable / 实例变量 | 每个 object 自己保存的数据 | `private String name;` |
| shared / 共享 | 多个 objects 使用同一份 class variable | 所有 `Pet` 共享 `petCount` |
| static context / 静态环境 | 正在 static method 中执行代码 | 不能直接访问某个 object 的 instance variable |
| `final` / 最终变量 | 赋值后不能重新赋值的 variable | `final double PI = 3.14;` |
| constant / 常量 | 不应改变的固定值 | 通常使用大写名称，如 `PI` |
| `public static final` | 公开、属于 class、且不能修改 | `Math.PI` |
