---
title: "AP CSA 3.8：作用域与访问"
layout: post
categories: media
render_with_liquid: false
---

前面几课中，我们已经写过 instance variables、parameters 和 local variables。

这一课不再学习一种新的 variable，而是回答一个非常重要的问题：

> **一个 variable 到底在哪里“存在”，哪些代码可以使用它？**

这就是 **scope（作用域）**。

判断 scope 时，一个非常实用的方法是：

> **找到 variable declaration，然后看包住它的最近一层 `{ }`。这个 variable 通常只能在这一层范围内使用。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.8 作用域与访问<br>Scope and Access

## Scope 是什么

* scope = variable 可以被访问 / 使用的范围
* declaration 写在哪里，决定它的 scope
* 超出 scope 后，这个 variable 就不能再使用
* 判断时关注最近一层 `{ }`

## Class Scope

* instance variables 在 class body 中声明
* class 内的 instance methods / constructors 可以直接使用它们
* `static` method 仍然遵守 3.7 的访问规则
* `private` / `public` 不改变它们在 class 内的 scope
* `private` 只限制 class 外部的直接访问

## Method Scope

* method / constructor 中声明的 local variables
* parameters 也属于 local variables
* 只能在该 method / constructor 中使用
* method 结束后就不能再访问

## Block Scope

* 在 `for`、`if`、`while` 等 `{ }` 内声明
* 只能在该 block 内使用
* `for (int i = ... )` 中的 `i` 也是 block scope
* 离开 block 后 variable 不再存在

## Local Variables

* 只给一个 method 使用的数据应尽量声明为 local variable
* local variables 不能写 `public` / `private`
* parameters 也不能写 `public` / `private`
* 不同 methods 的 local variables 互相看不到

## 同名 Variable

* local variable 可以和 instance variable 同名
* 在该 method 内，variable name 优先指向 local variable
* 同名 instance variable 此时不会被直接选中
* 下一课用 `this` 区分二者

## AP 常见考法

* 判断 variable 属于 class / method / block scope
* 判断某一行能否访问某个 variable
* 找出 scope violation 导致的 compile error
* 判断 parameter 是否能在另一个 method 中使用
* 判断同名 local variable 与 instance variable 谁被使用

</script>
</div>
</div>

# 1. 第一个 AP 核心考法：哪个 variable 在哪里能用？

先看这个 class：

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

    public void play(int minutes)
    {
        int energyUsed = minutes * 2;

        if (energyUsed > 10)
        {
            String message = "Big workout!";
            System.out.println(message);
        }

        energy -= energyUsed;
    }
}
```

这里出现了 7 个 variable：

```text
name
energy
n
e
minutes
energyUsed
message
```

它们并不拥有相同的 scope。

| Variable | 在哪里声明 | Scope | 可以在哪里使用 |
|---|---|---|---|
| `name` | class body | class scope | 整个 `Pet` class 内 |
| `energy` | class body | class scope | 整个 `Pet` class 内 |
| `n` | constructor parameter | method scope | 只在 constructor 内 |
| `e` | constructor parameter | method scope | 只在 constructor 内 |
| `minutes` | method parameter | method scope | 只在 `play` 内 |
| `energyUsed` | `play` method body | method scope | 从声明处到 `play` 结束 |
| `message` | `if` block | block scope | 只在这个 `if { }` 内 |

这一课最重要的 mental model 就是：

```text
class
│
├── instance variables → 整个 class 看得见
│
├── constructor / method
│   ├── parameters → 只在这个 method 内
│   ├── local variables → 只在这个 method 内
│   │
│   └── if / for / while block
│       └── block variables → 只在这个 block 内
```

**scope 越往里面，范围通常越小。**

# 2. Class Scope：Instance Variables

Instance variables 在 class body 中声明：

```java
public class Pet
{
    private String name;
    private int energy;

    // methods...
}
```

这里：

```java
name
energy
```

都有 **class-level scope（class scope）**。

所以同一个 class 里的 constructor 和 instance methods 都可以直接使用它们：

```java
public Pet(String n, int e)
{
    name = n;
    energy = e;
}
```

```java
public void rest()
{
    energy += 10;
}
```

```java
public String toString()
{
    return name + ": " + energy;
}
```

这些 constructor / instance methods 都可以访问：

```java
name
energy
```

因为它们是 class scope 的 instance variables。

## `private` 会不会缩小 scope？

不会。

这是 3.8 很容易混淆的一点。

```java
private int energy;
```

`private` 表示：

> class 外部不能直接访问这个 variable。

但在 `Pet` class **内部**，`energy` 仍然具有 class scope，所有 instance methods 都可以使用它。

所以要区分：

```text
scope
→ variable 在哪些代码区域里存在 / 能被名字直接找到

access modifier
→ class 外部是否允许直接访问这个 member
```

它们有关联，但不是同一个概念。

# 3. Method Scope：Parameters 和 Local Variables

看这个 method：

```java
public void play(int minutes)
{
    int energyUsed = minutes * 2;
    energy -= energyUsed;
}
```

这里有两个 local variables：

```java
minutes
energyUsed
```

其中：

```java
minutes
```

是 **parameter variable（参数变量）**。

```java
energyUsed
```

是在 method body 中声明的 **local variable（局部变量）**。

两者都只属于：

```text
play method
```

所以另一个 method 不能直接写：

```java
public void printInfo()
{
    System.out.println(minutes);     // error
    System.out.println(energyUsed);  // error
}
```

Java 不会认为：

> “反正它们都在 `Pet` class 里面，应该能用吧。”

不行。

因为这两个 variables 只存在于 `play` 的 scope 中。

## Parameter 也是 Local Variable

这一点 AP 很喜欢考：

```java
public Pet(String n, int e)
```

这里：

```java
n
e
```

都是 constructor 的 local variables。

Constructor 结束以后，`n` 和 `e` 就不能再使用。

这也是为什么我们通常把参数值存进 instance variables：

```java
name = n;
energy = e;
```

可以理解为：

```text
n / e
constructor 的临时数据
        ↓
name / energy
object 长期保存的数据
```

# 4. Local Variable 不能写 `public` 或 `private`

下面这种写法是错误的：

```java
public void play(private int minutes)
{
}
```

也不能这样：

```java
public void play(int minutes)
{
    private int energyUsed = minutes * 2;
}
```

为什么？

`public` 和 `private` 是用来控制 **class members** 对外访问权限的。

但 parameter 和 local variable 本来就只存在于自己的 method / block 中，因此不能声明为：

```text
public
private
```

正确写法：

```java
public void play(int minutes)
{
    int energyUsed = minutes * 2;
}
```

# 5. Block Scope：`if`、`for`、`while` 里面的 Variables

Scope 还可以比一个 method 更小。

看这个例子：

```java
public void checkEnergy()
{
    if (energy < 20)
    {
        String warning = "Low energy";
        System.out.println(warning);
    }

    System.out.println(warning);  // error
}
```

`warning` 声明在：

```java
if (...)
{
    String warning = ...;
}
```

所以它只能在这个 `{ }` 中使用。

一旦离开：

```text
if block
```

`warning` 就超出 scope 了。

## `for` loop 中的 variable

Unit 2 中你其实已经用了很多 block scope：

```java
for (int i = 0; i < 5; i++)
{
    System.out.println(i);
}
```

`i` 只存在于这个 loop 中。

所以：

```java
for (int i = 0; i < 5; i++)
{
    System.out.println(i);
}

System.out.println(i);  // error
```

最后一行不能编译。

可以把它想成：

```text
for block starts
    i exists
    i exists
    i exists
for block ends
    ↓
i no longer exists
```

# 6. 最实用的判断方法：找最近的 `{ }`

遇到 scope 题时，不要靠感觉。

先找到 variable declaration：

```java
int score = 10;
```

然后问：

> **它被哪一层最近的 `{ }` 包住？**

例如：

```java
public void test()
{
    int x = 10;

    if (x > 5)
    {
        int y = 20;
    }
}
```

对于 `x`：

```text
最近的 enclosing braces
→ test() 的 { }
→ method scope
```

对于 `y`：

```text
最近的 enclosing braces
→ if 的 { }
→ block scope
```

而 instance variable：

```java
public class Pet
{
    private int energy;
}
```

最近的 enclosing braces 是：

```text
class Pet { }
```

所以是 class scope。

# 7. AP 高频错误：在另一个 Method 中使用 Local Variable

看这个 class：

```java
public class Pet
{
    private int energy;

    public void eat(int amount)
    {
        int newEnergy = energy + amount;
        energy = newEnergy;
    }

    public void play(int amount)
    {
        energy = newEnergy - amount;
    }
}
```

为什么不能编译？

问题是：

```java
newEnergy
```

声明在：

```java
eat()
```

所以它只存在于 `eat()` 的 method scope。

`play()` 里面看不到它。

```text
eat()
┌─────────────────┐
│ newEnergy       │
└─────────────────┘

play()
┌─────────────────┐
│ newEnergy ???   │ ← 不存在
└─────────────────┘
```

一种直接的修复方式：

```java
public void play(int amount)
{
    energy = energy - amount;
}
```

这里使用 `energy` 没问题，因为：

```java
energy
```

是 class scope 的 instance variable。

这正是 Runestone AP Practice 中非常典型的 scope violation 类型。

# 8. 同名 Variable：Local Variable 会“遮住” Instance Variable

这是 3.8 第二个非常重要的 AP 考点。

看这个 class：

```java
public class Pet
{
    private int energy;

    public Pet(int e)
    {
        energy = e;
    }

    public int getEnergy()
    {
        int energy = 100;
        return energy;
    }
}
```

假设：

```java
Pet p = new Pet(50);
System.out.println(p.getEnergy());
```

输出是什么？

```text
100
```

不是：

```text
50
```

为什么？

因为 `getEnergy()` 中又声明了一个：

```java
int energy = 100;
```

现在同一个 method 中同时存在：

```text
instance variable energy → 50
local variable energy    → 100
```

直接写：

```java
energy
```

Java 会优先使用 **local variable**。

所以：

```java
return energy;
```

返回的是：

```text
100
```

下一课 3.9 会学习如何使用：

```java
this
```

明确区分“当前 object 的 instance variable”和 local variable。这里暂时只需要记住：

> **同名时，在 method / constructor 中直接写 variable name，优先指向 local variable 或 parameter。**

# 9. Scope 和 Access 不要混在一起

题目中经常会同时出现：

```text
scope
public / private
```

但它们在问不同问题。

| 概念 | 核心问题 | Example |
|---|---|---|
| scope | 这个 variable 在哪里存在、哪里能使用？ | `i` 只能在 loop 中 |
| access | class 外部能不能直接访问这个 member？ | `private int energy` 不能被外部直接访问 |

例如：

```java
private int energy;
```

`energy`：

```text
scope → 整个 Pet class
access → class 外不能直接访问
```

所以 `private` **不代表只有 constructor 能看到**，也不代表只有某一个 method 能看到。

同一个 class 中的其他 instance methods 都可以使用它：

```java
public void eat(int amount)
{
    energy += amount;
}

public void play(int amount)
{
    energy -= amount;
}
```

# 10. 常见初学者错误

| 错误 | 错误代码 / 想法 | 问题 | 正确理解 |
|---|---|---|---|
| 在另一个 method 中使用 local variable | `methodB()` 使用 `methodA()` 里的 `x` | `x` 只存在于 `methodA` | 在需要的 method 中重新计算 / 传入，或真正需要共享时使用 instance variable |
| 在 loop 外使用 loop variable | loop 后写 `System.out.println(i);` | `i` 已超出 block scope | 只能在 loop scope 中使用 |
| 认为 parameter 属于整个 class | constructor 外继续使用 `n` | parameter 是 local variable | 需要长期保存就赋值给 instance variable |
| 给 local variable 加 `private` | `private int total = 0;` 写在 method 中 | access modifier 不用于 local variable | 写 `int total = 0;` |
| 把 `private` 当成 scope | 认为 private field 只能在一个 method 中用 | `private` 控制 class 外访问 | field 在 class 内仍有 class scope |
| 同名 local variable 时误以为使用 field | `int energy = 100; return energy;` | local variable 遮住 instance variable | 直接写 `energy` 指向 local variable |
| 为解决 scope 问题把所有 variable 都改成 instance variable | 所有临时计算都放 class level | 扩大了不必要的状态 | 只在一个 method 用的数据应优先 local |

# 11. 小练习（Mini Practice）

## Practice 1：判断 Scope

```java
public class Game
{
    private int score;

    public void play(int bonus)
    {
        int total = score + bonus;

        if (total > 100)
        {
            String message = "High score!";
        }
    }
}
```

判断下面 variables 的 scope：

```text
score
bonus
total
message
```

**答案：**

| Variable | Scope |
|---|---|
| `score` | class scope |
| `bonus` | method scope |
| `total` | method scope |
| `message` | block scope |

---

## Practice 2：哪一行不能编译？

```java
public void count()
{
    for (int i = 0; i < 3; i++)
    {
        int value = i * 10;
        System.out.println(value);
    }

    System.out.println(i);
}
```

**答案：**

```java
System.out.println(i);
```

不能编译。

`i` 是 `for` loop 的 block variable，离开 loop 后已经超出 scope。

---

## Practice 3：为什么报错？

```java
public void eat(int food)
{
    int newEnergy = energy + food;
    energy = newEnergy;
}

public void showChange()
{
    System.out.println(newEnergy);
}
```

为什么 `showChange()` 不能使用 `newEnergy`？

**答案：**

`newEnergy` 是 `eat()` 中的 local variable，只存在于 `eat()` 的 method scope。

---

## Practice 4：输出是什么？

```java
public class Movie
{
    private int price;

    public Movie(int p)
    {
        price = p;
    }

    public int getPrice()
    {
        int price = 16;
        return price;
    }
}
```

运行：

```java
Movie m = new Movie(25);
System.out.println(m.getPrice());
```

输出：

```text
16
```

原因：`getPrice()` 中的 local variable `price` 遮住了 instance variable `price`。

---

## Practice 5：修复 Scope Violation

```java
public class Pet
{
    private int energy;

    public void eat(int amount)
    {
        int updatedEnergy = energy + amount;
        energy = updatedEnergy;
    }

    public void play(int amount)
    {
        energy = updatedEnergy - amount;
    }
}
```

修复 `play()`：

**答案：**

```java
public void play(int amount)
{
    energy = energy - amount;
}
```

`energy` 是 instance variable，因此整个 `Pet` class 中都可以使用。

# Unit 3.8 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| scope / 作用域 | variable 可以被访问或使用的代码范围 | declaration 的位置决定 scope |
| class scope / 类作用域 | 整个 class 内都可使用 | instance variable `private int energy;` |
| method scope / 方法作用域 | 只在某个 method / constructor 中使用 | parameter、method local variable |
| block scope / 代码块作用域 | 只在某个 `{ }` block 中使用 | `if` / `for` 中声明的 variable |
| local variable / 局部变量 | 在 method、constructor 或 block 中声明的 variable | `int total = 0;` |
| parameter variable / 参数变量 | method / constructor header 中接收 argument 的 local variable | `play(int minutes)` 中的 `minutes` |
| instance variable / 实例变量 | 在 class body 中声明、每个 object 自己拥有的数据 | `private int energy;` |
| scope violation / 作用域错误 | 在 variable 的 scope 外使用它 | method B 使用 method A 的 local variable |
| same-name variable rule / 同名变量规则 | local variable / parameter 与 instance variable 同名时，前者优先 | `int price = 16; return price;` |
| access modifier / 访问修饰符 | 控制 class member 从哪里可以直接访问 | `public`、`private` |
