---
title: "AP CSA 3.9：this 关键字"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学过：当 parameter / local variable 和 instance variable 同名时，Java 会优先使用离当前位置更近的 local variable。

这会带来一个非常实际的问题：

```java
private String name;

public Person(String name)
{
    name = name;
}
```

这里左右两边的 `name` 都指向 **parameter**，所以 instance variable 根本没有被修改。

Java 用 **`this`** 来解决这个问题。

> **`this` 表示“当前这个对象（current object）”。**
>
> 在 constructor 或 instance method 中，`this` 保存的是当前正在调用这段代码的 object reference。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.9 `this` 关键字<br>`this` Keyword

## `this` 是什么

* `this` = 当前对象（current object）的 reference
* 哪个 object 调用 method，`this` 就指向哪个 object
* constructor 中，`this` 指向正在被创建的 object
* `this` 不是新建一个 object

## `this.instanceVariable`

* 明确访问当前对象的 instance variable
* 常用于 parameter 和 instance variable 同名时
* `this.name` → instance variable
* `name` → 最近的 local variable / parameter

## Constructor 中的 `this`

* `this.name = name;`
* 左边：当前 object 的 instance variable
* 右边：constructor parameter
* 把传入的数据保存到 object 中

## Instance Method 中的 `this`

* setter 中非常常见
* `this.energy = energy;`
* 没有同名 local variable 时，`this.` 往往可以省略
* 写出 `this.` 可以明确表示“当前对象的数据”

## `this` 作为 Argument

* `this` 本身就是一个 object reference
* 可以像其他 object variable 一样作为 argument
* `group.addPet(this);`
* 表示把“当前对象”传给另一个 method

## `static` Method 没有 `this`

* `this` 只属于 constructor 和 instance method
* class method (`static`) 不属于某一个具体 object
* 因此 static method 中不能使用 `this`
* 也不能直接访问 instance variables

## AP 常见考法

* 判断 `this` 当前指向哪个 object
* 区分 `name` 与 `this.name`
* 修复 `name = name;` 这类 constructor / setter bug
* 判断 `this` 作为 argument 传递的对象
* 判断 `static` method 中能否使用 `this`

</script>
</div>
</div>

# 1. 第一个 AP 核心问题：`name = name;` 到底做了什么？

看下面这个 class：

```java
public class Person
{
    private String name;

    public Person(String name)
    {
        name = name;
    }

    public String getName()
    {
        return name;
    }
}
```

运行：

```java
Person p = new Person("Mia");
System.out.println(p.getName());
```

很多同学会以为输出：

```text
Mia
```

但实际上 constructor 中：

```java
name = name;
```

左右两边的 `name` 都优先指向 constructor parameter：

```text
parameter name = parameter name
```

所以只是把 parameter 自己的值重新赋给自己。

instance variable 没有被修改。

正确写法是：

```java
public Person(String name)
{
    this.name = name;
}
```

现在两边代表不同的 variable：

```text
this.name = name;
    ↑        ↑
instance   parameter
variable
```

可以把它读成：

> **把 parameter `name` 的值，存进当前对象的 instance variable `name`。**

这是 3.9 最重要的一行代码。

# 2. `this` 到底指向谁？

Runestone 对 `this` 的核心定义是：

> 在 constructor 或 instance method 中，`this` 保存当前对象的 reference。

例如：

```java
public class Person
{
    private String name;

    public Person(String name)
    {
        this.name = name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
```

创建两个不同对象：

```java
Person p1 = new Person("Mia");
Person p2 = new Person("Leo");
```

当执行：

```java
p1.setName("Emma");
```

在这次 method call 中：

```text
this → p1
```

所以：

```java
this.name = name;
```

修改的是 `p1` 的 `name`。

但如果执行：

```java
p2.setName("Ethan");
```

此时：

```text
this → p2
```

修改的就是 `p2` 的 `name`。

所以不要把 `this` 想成某一个固定 object。

更准确的理解是：

> **谁正在调用这个 instance method，`this` 就是谁。**

constructor 中也是一样：

```java
Person p1 = new Person("Mia");
```

执行 constructor 时：

```text
this → 正在创建的 p1 object
```

# 3. `this.instanceVariable`：区分同名 Variables

上一课 3.8 已经学过：

> local variable / parameter 和 instance variable 同名时，local variable / parameter 优先。

所以：

```java
private int energy;

public void setEnergy(int energy)
{
    energy = energy;
}
```

这里两个 `energy` 都是 parameter。

正确写法：

```java
public void setEnergy(int energy)
{
    this.energy = energy;
}
```

分别表示：

| Code | 指什么 |
|---|---|
| `this.energy` | 当前 object 的 instance variable |
| `energy` | method parameter |

所以：

```java
this.energy = energy;
```

就是：

```text
object 的 energy ← argument 传进来的 energy
```

这种写法在 constructors 和 setters 中都非常常见。

## Constructor

```java
public Pet(String name, int energy)
{
    this.name = name;
    this.energy = energy;
}
```

## Setter

```java
public void setEnergy(int energy)
{
    this.energy = energy;
}
```

同一个模式：

```text
this.instanceVariable = parameter;
```

# 4. `this.` 是不是每次都必须写？

不是。

如果没有同名 local variable / parameter：

```java
private int energy;

public void rest()
{
    energy += 10;
}
```

Java 可以直接找到 instance variable `energy`。

下面也可以：

```java
public void rest()
{
    this.energy += 10;
}
```

两种写法都表示当前对象的 `energy`。

所以：

```text
没有同名 local variable
→ this. 通常可以省略

有同名 local variable / parameter
→ 用 this. 明确指定 instance variable
```

例如：

```java
public int getEnergy()
{
    return energy;
}
```

和：

```java
public int getEnergy()
{
    return this.energy;
}
```

都可以。

但：

```java
public void setEnergy(int energy)
{
    this.energy = energy;
}
```

这里 `this.` 非常重要，因为需要区分 field 和 parameter。

# 5. `this` 也可以作为 Argument

`this` 本身就是一个 object reference。

所以只要某个 method 需要一个当前 class 类型的 object，就可以把 `this` 作为 argument 传进去。

例如：

```java
public class Pet
{
    private String name;

    public Pet(String name)
    {
        this.name = name;
    }

    public void checkIn(Clinic clinic)
    {
        clinic.addPet(this);
    }
}
```

假设 `Clinic` 中有：

```java
public void addPet(Pet p)
{
    // add the pet to the clinic
}
```

当执行：

```java
myPet.checkIn(clinic);
```

在 `checkIn` 中：

```text
this → myPet
```

所以：

```java
clinic.addPet(this);
```

相当于把：

```text
myPet
```

作为 argument 传给 `addPet`。

这和 3.6 学过的 object reference parameter 完全一致：传进去的是当前 object 的 reference value。

Runestone 的 AP 例题也使用同样的模式：一个 object 把 `this` 传给另一个 object 的 method。

# 6. 为什么 `static` Method 不能使用 `this`？

回顾 3.7：

```text
instance method → 属于某一个 object
static method   → 属于整个 class
```

`this` 的意思是：

```text
当前 object
```

所以在 instance method 中有意义：

```java
public void setName(String name)
{
    this.name = name;
}
```

因为一定有一个 object 正在调用 `setName`。

但 static method 可以直接通过 class name 调用：

```java
Math.sqrt(25);
```

这里没有某一个具体 `Math` object。

所以 class method (`static`) 中没有 `this` reference。

下面的代码不能编译：

```java
public static void showName()
{
    System.out.println(this.name);
}
```

原因不是 `this` 拼错了，而是：

> **static method 没有“当前对象”，因此没有 `this`。**

这和 3.7 的规则是同一件事：static method 也不能在没有具体 object 的情况下直接访问 instance variables。

# 7. 一个完整例子：`this` 在 Constructor 和 Methods 中

```java
public class Pet
{
    private String name;
    private int energy;

    public Pet(String name, int energy)
    {
        this.name = name;
        this.energy = energy;
    }

    public String getName()
    {
        return this.name;
    }

    public int getEnergy()
    {
        return this.energy;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public void setEnergy(int energy)
    {
        this.energy = energy;
    }

    public void rest()
    {
        this.energy += 10;
    }

    public String toString()
    {
        return this.name + ": " + this.energy;
    }
}
```

这里的每个：

```java
this.name
this.energy
```

都表示：

> 当前这个 `Pet` object 自己的数据。

注意：像 `getName()`、`rest()` 这种没有同名 local variable 的方法，其实可以省略 `this.`。

所以：

```java
return name;
```

和：

```java
return this.name;
```

都可以。

但在：

```java
public Pet(String name, int energy)
```

以及：

```java
public void setName(String name)
```

这种 parameter 和 field 同名的情况下，`this.` 才真正承担“消除歧义”的作用。

# 8. 常见初学者错误

| 错误 | 错误代码 / 想法 | 问题 | 正确理解 |
|---|---|---|---|
| constructor 中写 `name = name;` | `name = name;` | 两边都是 parameter | `this.name = name;` |
| setter 中忘记 `this` | `energy = energy;` | parameter 给自己赋值 | `this.energy = energy;` |
| 认为 `this` 是 class name | `this` = `Pet` | `this` 不是 class | `this` 是当前 object 的 reference |
| 认为 `this` 永远指向同一个 object | `this` 总是 `p1` | 不同 method call 中会改变 | 哪个 object 调用，`this` 就指向哪个 object |
| 认为 `this` 会创建新 object | 把 `this` 当作 `new` | `this` 只是已有当前对象的 reference | 不会创建新 object |
| 在 static method 中使用 `this` | `static` method 写 `this.name` | class method 没有 current object | `this` 只能用于 constructor / instance method |
| 认为所有 field 前都必须写 `this.` | `return this.energy;` 才正确 | 没有同名 local variable 时可以省略 | `return energy;` 也正确 |
| 看见 `method(this)` 不知道传了什么 | 把 `this` 当特殊参数类型 | `this` 就是当前 object reference | 相当于把当前对象作为 argument |

# 9. 小练习（Mini Practice）

## Practice 1：输出是什么？

```java
public class Player
{
    private String name;

    public Player(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }
}
```

运行：

```java
Player p = new Player("Alex");
System.out.println(p.getName());
```

**答案：**

```text
Alex
```

`this.name = name;` 把 constructor parameter 保存到了 `p` 的 instance variable 中。

---

## Practice 2：找出 Bug

```java
public class Game
{
    private int score;

    public Game(int score)
    {
        score = score;
    }
}
```

问题在哪里？

**答案：**

```java
public Game(int score)
{
    this.score = score;
}
```

原来的 `score = score;` 只是把 parameter 赋值给自己。

---

## Practice 3：哪个 `energy` 是哪个？

```java
private int energy;

public void setEnergy(int energy)
{
    this.energy = energy;
}
```

判断：

```text
this.energy → ?
energy      → ?
```

**答案：**

```text
this.energy → instance variable
energy      → parameter
```

---

## Practice 4：`this` 指向谁？

```java
Pet p1 = new Pet("Milo", 5);
Pet p2 = new Pet("Luna", 8);

p2.setEnergy(10);
```

在 `setEnergy` 执行过程中：

```text
this → ?
```

**答案：**

```text
this → p2
```

因为这次是 `p2` 调用了 instance method。

---

## Practice 5：能不能编译？

```java
public static void reset()
{
    this.energy = 0;
}
```

**答案：不能。**

`reset()` 是 static method，没有当前 object，因此不存在 `this` reference。

---

## Practice 6：`this` 作为 Argument

```java
public void register(Club club)
{
    club.addMember(this);
}
```

如果下面这样调用：

```java
p1.register(chessClub);
```

`addMember` 收到的是哪个 object？

**答案：**

```text
p1
```

因为执行 `register` 时：

```text
this → p1
```

所以 `club.addMember(this)` 把 `p1` 作为 argument 传入。

# Unit 3.9 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| `this` | 当前对象的 reference | 谁调用 instance method，`this` 就指向谁 |
| current object / 当前对象 | 当前正在执行 constructor / instance method 的 object | `p1.setName(...)` 中 current object 是 `p1` |
| `this.instanceVariable` | 当前对象的某个 instance variable | `this.name` |
| instance variable / 实例变量 | 每个 object 自己保存的数据 | `private int energy;` |
| parameter / 参数变量 | method / constructor 接收 argument 的 local variable | `setEnergy(int energy)` |
| same-name variables / 同名变量 | parameter / local variable 与 instance variable 名字相同 | 用 `this.energy` 区分 field |
| argument / 实参 | method call 时传入的实际值 | `club.addMember(this)` 中 `this` 是 argument |
| object reference / 对象引用 | 指向某个 object 的 reference value | `this` 保存 current object 的 reference |
| instance method / 实例方法 | 由某个 object 调用的方法 | instance method 中有 `this` |
| class method / 类方法 | `static` method，属于 class | 没有 `this` reference |
