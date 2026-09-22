---
title: "AP CSA 3.5：编写方法"
layout: post
categories: media
render_with_liquid: false
---

在 3.3 和 3.4 中，我们已经搭好了一个类的基本骨架：**实例变量保存对象的数据，构造器负责初始化这些数据。**

这一课继续完成第三部分：**方法（methods）定义对象能做什么，也决定类外代码怎样读取或修改对象的数据。**

> **写方法时，先问两个问题：这个方法要不要返回一个值？它需要从外面接收什么数据？**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.5 编写方法（Methods: How to Write Them）

## 方法的基本结构（Method Header + Body）

* 方法定义写在 class 里面
* 方法可以直接访问这个对象的实例变量
* 基本结构：`public returnType methodName(parameters)`
* `{ }` 中是方法体（method body）

## `void` 方法

* 完成一个动作，不返回值
* header 中使用 `void`
* 常见用途：打印、修改对象状态
* `public void feed(int amount)`

## non-void 方法

* 返回一个值
* header 中写返回类型，例如 `int`、`String`、`boolean`
* 必须返回与 return type 兼容的值
* `return` 执行后，方法立即结束

## Getter / Accessor

* 让类外代码读取 `private` 实例变量
* 通常 `public`
* 通常没有参数
* 是 non-void method
* `public int getEnergy()` → `return energy;`

## Setter / Mutator

* 修改实例变量
* 通常是 `void` method
* 参数接收新的值
* `public void setEnergy(int e)` → `energy = e;`
* **不是每个变量都一定需要 setter**

## `toString()`

* 返回描述对象的 `String`
* `public String toString()`
* `System.out.println(object)` 会自动使用它
* 对象和 `String` 做 `+` 拼接时也会使用它

## Parameters & Arguments

* parameter：方法定义中接收数据的变量
* argument：调用方法时真正传入的值
* 个数、类型、顺序必须匹配
* primitive argument 传入的是值的副本（copy）
* 修改 parameter 不会改变原来的 primitive variable

## AP 常见考法

* 判断 `void` 还是 non-void
* 补全 return type / `return` statement
* 编写 getter、setter、`toString()`
* 根据任务选择合适的 method header
* 追踪 parameter、argument 和 instance variable 的变化
* 判断 primitive parameter 改变后，原变量是否改变

</script>
</div>
</div>

# 1. 第一个 AP 核心考法

继续使用前两课的 `Pet` 类：

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

    public ___ getEnergy()
    {
        return energy;
    }

    public ___ feed(int amount)
    {
        energy += amount;
    }
}
```

两个空格应该分别填什么？

### A

```text
void, int
```

### B

```text
int, void
```

### C

```text
int, int
```

**答案：B**

先不要背格式，先看每个方法“做了什么”：

```text
getEnergy()
    ↓
要把 energy 的值交给调用者
    ↓
需要返回 int

feed(int amount)
    ↓
只负责修改 energy
    ↓
不需要返回值 → void
```

所以写方法前，最重要的第一步不是想名字，而是先判断：

> **这个方法是“做一件事”，还是“算出 / 提供一个值”？**

# 2. 一个方法由什么组成？

看这个方法：

```java
public void feed(int amount)
{
    energy += amount;
}
```

可以拆成两部分：

```text
public void feed(int amount)
↑      ↑    ↑      ↑
访问   返回  方法名  参数列表
权限   类型

{
    energy += amount;
}
↑
method body
```

方法 header 的常见结构是：

```java
public returnType methodName(parameters)
```

例如：

```java
public int getEnergy()
public void feed(int amount)
public String getName()
public boolean isTired()
```

方法写在 class 里面，因此 instance method 可以直接使用这个对象的实例变量：

```java
public void feed(int amount)
{
    energy += amount;
}
```

这里不需要重新声明 `energy`，因为它已经是这个 class 的 instance variable。

从类外调用时，仍然使用 Unit 1 学过的写法：

```java
Pet p = new Pet("Milo", 50);
p.feed(20);
```

Unit 1 的重点是**会调用别人写好的方法**；现在 3.5 的重点变成**自己写出这些方法**。

# 3. `void` 和 non-void：先决定有没有返回值

这是整课最核心的区别。

## `void` method：完成动作，不返回值

```java
public void feed(int amount)
{
    energy += amount;
}
```

调用：

```java
p.feed(20);
```

执行后对象的 `energy` 发生变化，但 `feed` 没有把一个值返回给调用者。

常见的 `void` method 会：

* 修改对象状态
* 打印内容
* 完成某个动作

---

## non-void method：返回一个值

```java
public int getEnergy()
{
    return energy;
}
```

因为返回的是 `int`，header 中必须写：

```java
public int getEnergy()
```

调用后可以使用返回值：

```java
int current = p.getEnergy();
System.out.println(p.getEnergy());
```

可以把过程理解成：

```text
p.getEnergy()
      ↓
return energy;
      ↓
把一个 int 值送回调用的位置
```

### return type 必须匹配

```java
public String getName()
{
    return name;
}
```

```java
public boolean isTired()
{
    return energy < 20;
}
```

`return` 后面可以是变量，也可以是一个计算后得到正确类型的 expression。

# 4. `return` 不只是“给答案”

在 non-void method 中，`return` 有两个作用：

1. 返回一个值
2. **立即结束当前方法**

例如：

```java
public int getEnergy()
{
    return energy;
    System.out.println("Done");
}
```

`return energy;` 执行以后，方法已经结束，所以后面的代码不会执行。

因此下面这种结构也很重要：

```java
public boolean hasEnoughEnergy(int needed)
{
    if (energy >= needed)
    {
        return true;
    }

    return false;
}
```

一旦执行：

```java
return true;
```

控制流程就直接回到调用这个方法的位置，不会继续执行这个方法剩下的代码。

### 常见 non-void 错误

```java
public int getEnergy()
{
    System.out.println(energy);
}
```

这里虽然打印了 `energy`，但**没有返回一个 `int` 值**。

正确写法：

```java
public int getEnergy()
{
    return energy;
}
```

打印（print）和返回（return）不是一回事。

# 5. Getter：读取 `private` 数据

3.3 中我们把 instance variables 设为 `private`：

```java
private String name;
private int energy;
```

这样类外代码不能直接写：

```java
System.out.println(p.energy);   // 不应该直接访问 private data
```

如果我们希望类外代码能读取 `energy`，可以提供一个 accessor method，平时通常叫 **getter**：

```java
public int getEnergy()
{
    return energy;
}
```

调用：

```java
int e = p.getEnergy();
```

典型 getter 的结构：

```java
public Type getVariableName()
{
    return variableName;
}
```

例如：

```java
public String getName()
{
    return name;
}
```

```java
public int getEnergy()
{
    return energy;
}
```

getter 最重要的特点：

| 特征 | Getter |
|---|---|
| 是否返回值 | ✅ 是 |
| 常见 return type | 和实例变量类型相同 |
| 是否通常有参数 | ❌ 没有 |
| 是否修改实例变量 | 通常不会 |

> **Getter 让外部代码“看见”数据，但不会直接把 `private` 变量变成 `public`。**

而且不是每一个 instance variable 都必须提供 getter；是否开放读取，是 class design 的一部分。

# 6. Setter：修改 `private` 数据

如果希望类外代码能够修改某个实例变量，可以提供 mutator method，通常叫 **setter**。

例如：

```java
public void setEnergy(int newEnergy)
{
    energy = newEnergy;
}
```

调用：

```java
p.setEnergy(90);
```

数据流是：

```text
90
↓
newEnergy
↓
energy
```

典型 setter 的结构：

```java
public void setVariableName(Type newValue)
{
    variableName = newValue;
}
```

Getter 和 Setter 放在一起看最清楚：

| | Getter | Setter |
|---|---|---|
| 目的 | 读取数据 | 修改数据 |
| 常见返回类型 | 实例变量的类型 | `void` |
| 参数 | 通常没有 | 通常有一个 |
| 例子 | `getEnergy()` | `setEnergy(int e)` |

## 不要机械地给每个变量都写 setter

Runestone 特别强调：**并不是所有 instance variables 都应该允许外部代码随意修改。**

例如，一个对象可能允许：

```java
p.getEnergy();
```

但不一定应该允许：

```java
p.setEnergy(1000000);
```

更合理的设计可能是只提供有明确行为含义的方法：

```java
p.feed(20);
p.play(10);
```

这样 class 可以控制自己的数据应该怎样改变。

这也是 3.3 中 **data encapsulation（数据封装）** 的继续应用。

# 7. `toString()`：对象怎样变成可读文字

Java 中有一个非常重要的特殊方法：

```java
public String toString()
```

例如：

```java
public String toString()
{
    return name + " (energy: " + energy + ")";
}
```

假设：

```java
Pet p = new Pet("Milo", 80);
```

下面两种写法得到相同的对象描述：

```java
System.out.println(p.toString());
System.out.println(p);
```

当 `println` 收到一个 object 时，Java 会自动使用这个对象的 `toString()` 方法取得它的 `String` 表示。

所以：

```java
System.out.println(p);
```

可以理解成：

```text
p
↓
调用 p.toString()
↓
"Milo (energy: 80)"
↓
打印
```

对象和 `String` 使用 `+` 拼接时，也会使用 `toString()`：

```java
System.out.println("My pet: " + p);
```

可能输出：

```text
My pet: Milo (energy: 80)
```

### `toString()` 的固定特征

```java
public String toString()
```

* 返回类型是 `String`
* 方法名是 `toString`
* 没有参数
* 返回描述当前对象的文字

# 8. Parameters、Arguments 和 primitive pass-by-value

学生在 Unit 1 已经调用过大量带参数的方法：

```java
str.substring(1, 4);
Math.pow(2, 3);
p.feed(20);
```

现在从“写方法”的角度重新看：

```java
public void feed(int amount)
{
    energy += amount;
}
```

这里：

```text
parameter（形参）
        ↓
int amount
```

调用：

```java
p.feed(20);
```

这里的 `20` 是 argument（实参）。

```text
argument → parameter
20       → amount
```

参数和实参必须在 **个数、类型、顺序** 上匹配 method header。

---

## Primitive arguments：传进去的是值的副本

这是 AP 很重要的一点。

```java
public void feed(int amount)
{
    energy += amount;
    amount = 0;
}
```

然后：

```java
int snack = 20;
p.feed(snack);
```

调用时可以理解成：

```text
snack = 20
   ↓ copy
amount = 20
```

方法里面执行：

```java
amount = 0;
```

只改变参数变量 `amount`，**不会把原来的 `snack` 改成 0**。

所以方法执行结束后：

```text
snack → 20
```

但这一句：

```java
energy += amount;
```

确实修改了 `p` 对象的 instance variable `energy`。

因此要区分两件事：

```text
修改 primitive parameter
→ 不会修改原来的 primitive argument

修改当前对象的 instance variable
→ 会改变这个 object 的状态
```

> 3.5 先掌握 primitive values 的这一规则；把 object reference 作为参数传递会在 3.6 单独学习。

# 9. 带参数、又有返回值的方法

方法不只是 getter 和 setter。

它也可以：

> **接收数据 → 计算 → 返回结果**

例如：

```java
public boolean hasEnoughEnergy(int needed)
{
    return energy >= needed;
}
```

调用：

```java
boolean canPlay = p.hasEnoughEnergy(30);
```

过程是：

```text
30
↓
needed
↓
energy >= needed
↓
boolean result
↓
return
```

再例如：

```java
public int energyAfterEating(int food)
{
    return energy + food;
}
```

它计算一个结果并返回，但没有修改 `energy` 本身。

对比：

```java
public void feed(int food)
{
    energy += food;
}
```

这两个方法看起来相似，但作用完全不同：

| 方法 | 修改 `energy`？ | 返回值？ |
|---|---:|---:|
| `energyAfterEating(int food)` | ❌ | ✅ `int` |
| `feed(int food)` | ✅ | ❌ `void` |

所以不要只看 method name，要读 method body 判断它真正做了什么。

# 10. 把一个 `Pet` 类完整起来

到这里，一个简单的 class 已经可以同时包含 constructor、getter、setter、普通行为方法和 `toString()`：

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

    public String getName()
    {
        return name;
    }

    public int getEnergy()
    {
        return energy;
    }

    public void setName(String newName)
    {
        name = newName;
    }

    public void feed(int amount)
    {
        energy += amount;
    }

    public boolean hasEnoughEnergy(int needed)
    {
        return energy >= needed;
    }

    public String toString()
    {
        return name + " (energy: " + energy + ")";
    }
}
```

外部代码可以这样使用：

```java
Pet p = new Pet("Milo", 50);

System.out.println(p.getEnergy());
p.feed(20);
System.out.println(p.getEnergy());
System.out.println(p);
```

输出：

```text
50
70
Milo (energy: 70)
```

现在一个 class 的三个主要部分已经连起来了：

```text
instance variables
保存对象的数据
        ↓
constructor
设置初始状态
        ↓
methods
读取数据 / 修改状态 / 完成行为 / 返回计算结果
```

# 11. 常见初学者错误

| 错误 | 错误代码 / 想法 | 问题 | 正确理解 |
|---|---|---|---|
| non-void method 没有返回值 | `public int getEnergy() { System.out.println(energy); }` | 打印不是返回 | `return energy;` |
| 返回类型和实际值不匹配 | `public int getName() { return name; }` | `name` 是 `String` | `public String getName()` |
| 只调用返回值方法，却没有使用结果 | `p.getEnergy();` | 返回值被直接丢掉 | 保存、打印或放进表达式中使用 |
| 认为 `return` 后的代码还会执行 | `return x;` 后继续写顺序代码 | 方法已经结束 | `return` 会立即退出方法 |
| Setter 赋值方向写反 | `newEnergy = energy;` | 没有修改 instance variable | `energy = newEnergy;` |
| 把 getter 写成 `void` | `public void getEnergy()` | Getter 应提供一个值 | `public int getEnergy()` |
| 认为修改 primitive parameter 会修改原变量 | 方法中 `amount = 0` | parameter 只是 argument value 的 copy | 原 primitive argument 不变 |
| 每个变量机械地都写 setter | 所有 private data 都允许任意修改 | 可能破坏 class 的设计规则 | 只有真正需要时才开放 setter |

# 12. 小练习（Mini Practice）

## Practice 1：Getter 还是 Setter？

```java
private int score;
```

下面哪个方法可以让类外代码**读取** `score`？

### A

```java
public void getScore()
{
    System.out.println(score);
}
```

### B

```java
public int getScore()
{
    return score;
}
```

### C

```java
public void setScore(int s)
{
    score = s;
}
```

**答案：B**

Getter 是 non-void method，需要把 instance variable 的值返回给调用者。

---

## Practice 2：修复 method header

目标：把 `additionalPeople` 加到 `numOfPeople` 中，不需要返回值。

```java
public int addPeople(int additionalPeople)
{
    numOfPeople += additionalPeople;
}
```

应该怎样修改？

**答案：**

```java
public void addPeople(int additionalPeople)
{
    numOfPeople += additionalPeople;
}
```

这个方法的任务只是修改对象状态，因此 return type 应该是 `void`。

---

## Practice 3：Primitive parameter 会不会改掉原变量？

```java
public void usePoints(int points)
{
    points = points - 5;
}
```

调用：

```java
int bonus = 20;
obj.usePoints(bonus);
System.out.println(bonus);
```

输出是什么？

**答案：**

```text
20
```

`bonus` 的值被复制给 parameter `points`。方法修改的是这个副本，不是原来的 `bonus`。

---

## Practice 4：`toString()`

```java
public String toString()
{
    return name + ": " + energy;
}
```

如果：

```java
Pet p = new Pet("Luna", 60);
System.out.println(p);
```

输出是什么？

**答案：**

```text
Luna: 60
```

`println` 收到 object 时，会自动使用这个对象的 `toString()`。

---

## Practice 5：返回还是修改？

```java
public int futureEnergy(int food)
{
    return energy + food;
}
```

假设：

```java
Pet p = new Pet("Milo", 50);
int result = p.futureEnergy(20);
```

执行以后：

```text
result = ?
energy = ?
```

**答案：**

```text
result = 70
energy = 50
```

这个方法只计算并返回 `energy + food`，并没有执行：

```java
energy += food;
```

所以对象本身的 `energy` 没有改变。

# Unit 3.5 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| method / 方法 | class 中完成特定任务的一段代码 | 定义对象的行为 |
| method header / 方法头 | 方法第一行，说明访问权限、返回类型、名称和参数 | `public int getEnergy()` |
| method body / 方法体 | `{ }` 中真正执行的代码 | `energy += amount;` |
| return type / 返回类型 | 方法返回值的数据类型 | `int`、`String`、`boolean`、`void` |
| `void` method / 无返回值方法 | 完成动作但不返回值的方法 | `public void feed(int amount)` |
| non-void method / 有返回值方法 | 返回一个值的方法 | `public int getEnergy()` |
| `return` statement / 返回语句 | 返回一个值并立即结束当前方法 | `return energy;` |
| accessor / getter / 访问器 | 让外部代码获得 instance variable 的值 | `getEnergy()` |
| mutator / setter / 修改器 | 修改 instance variable 的方法 | `setEnergy(int e)` |
| `toString()` | 返回对象的 `String` 描述 | `System.out.println(object)` 会自动使用 |
| parameter / 形参 | 方法定义中用来接收数据的变量 | `int amount` |
| argument / 实参 | 调用方法时真正传进去的值 | `p.feed(20)` 中的 `20` |
| pass by value / 值传递 | parameter 得到 argument value 的副本 | 修改 primitive parameter 不改变原变量 |
