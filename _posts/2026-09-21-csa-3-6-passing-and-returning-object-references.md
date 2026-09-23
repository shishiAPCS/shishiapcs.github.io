---
title: "AP CSA 3.6：传递与返回对象引用"
layout: post
categories: media
render_with_liquid: false
---

在 3.5 中，我们已经学会了给方法传入 primitive values，例如 `int`、`double`，并知道 parameter 得到的是 argument value 的一个副本。

这一课把同样的规则应用到 object 上。最关键的区别是：**object variable 保存的不是整个对象，而是指向对象的 reference（引用）。**

> **Java 永远使用 pass by value。传入 object 时，被复制的是 reference，所以两个变量可能同时指向同一个对象。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.6 传递与返回对象引用（Passing and Returning References of an Object）

## Object 作为实例变量

* 一个 class 的 instance variable 可以是另一个 class 的 object
* `private Address addr;`
* `Person` **has an** `Address`
* 这叫 has-a relationship

## Object 作为 Argument

* Java 始终使用 pass by value
* primitive → 复制 primitive value
* object → 复制 reference value
* 不会自动复制整个 object
* 两个 reference 可能指向同一个 object → aliases

## Mutable Object

* mutable object 的状态可以改变
* 两个 reference 指向同一个 mutable object 时
* 通过其中一个 reference 修改 object
* 另一个 reference 看到的也是修改后的 object
* 自己写的、有 setter / mutator 的 class 通常是 mutable

## Defensive Copy

* constructor / method 收到 mutable object 时要特别小心
* 直接保存 reference：可能和外部共享同一个 object
* 需要独立 object 时，创建一个 copy
* 可以使用 getter 复制数据
* 或使用 copy constructor

## 同类对象与 `private`

* 一个 class 的代码可以访问**同一个 class 的其他 object** 的 private data
* `Person` method 可以使用 `otherPerson.addr`
* 但 `Person` 不能直接访问 `Address` 的 private data
* 不同 class 之间应通过 getter / setter

## 返回 Object

* method 可以返回 object reference
* `return addr;` 返回的是 reference 的副本
* 不会自动创建新的 object
* caller 和 instance variable 可能再次指向同一个 object
* mutable object 仍可能被外部修改

## AP 常见考法

* 判断两个 reference 是否指向同一个 object
* object parameter 被修改后，原 object 是否改变
* 区分“修改 object”和“修改 parameter reference”
* 判断什么时候需要 defensive copy
* 判断同类 object 的 private data 能否访问
* 追踪返回 object reference 后的 aliasing

</script>
</div>
</div>

# 1. 第一个 AP 核心考法

先看一个很小的例子。

```java
public class Person
{
    private String name;
    private Address addr;

    public Person(String n, Address a)
    {
        name = n;
        addr = a;
    }

    public Address getAddress()
    {
        return addr;
    }
}
```

假设 `Address` 有一个 `setCity` method：

```java
Address a1 = new Address("Chengdu");
Person p1 = new Person("Alex", a1);

a1.setCity("Shanghai");

System.out.println(p1.getAddress().getCity());
```

输出是什么？

### A

```text
Chengdu
```

### B

```text
Shanghai
```

### C

程序报错

**答案：B**

关键不是 `Person` constructor 做了什么复杂操作，而是这一句：

```java
addr = a;
```

这里复制的是 **reference**，不是整个 `Address` object。

可以把它想成：

```text
          ┌────────────────────┐
a1 ──────►│ Address            │
          │ city = "Chengdu"   │
          └────────────────────┘
                ▲
                │
p1.addr ────────┘
```

`a1` 和 `p1.addr` 指向**同一个 Address object**。

所以：

```java
a1.setCity("Shanghai");
```

修改的是那个共享的 object。

结果变成：

```text
          ┌────────────────────┐
a1 ──────►│ Address            │
          │ city = "Shanghai"  │
          └────────────────────┘
                ▲
                │
p1.addr ────────┘
```

这就是 3.6 最核心的 mental model。

# 2. Object 可以成为另一个 class 的实例变量

到目前为止，我们常见的 instance variables 是 primitive 或 `String`：

```java
private String name;
private int age;
```

但 instance variable 也可以是另一个 class 的 object：

```java
private Address addr;
```

例如：

```java
public class Person
{
    private String name;
    private Address addr;
}
```

这里：

```text
Person has an Address
```

这种关系通常叫 **has-a relationship**。

其他例子：

```text
Student has a Schedule
Car has an Engine
Friend has a Date
GameProfile has an Avatar
```

对象之间可以这样组合，所以大型程序并不是把所有数据都塞进一个 class，而是让多个 class 互相协作。

> **一个 object 作为 instance variable 时，这个变量保存的是对另一个 object 的 reference。**

# 3. Java 仍然是 Pass by Value

这是这一课最容易被说错的地方。

Java **不是**“primitive pass by value，object pass by reference”。

正确说法是：

> **Java always passes arguments by value.**

区别只在于“这个 value 到底是什么”。

## Primitive argument

```java
int score = 80;
obj.change(score);
```

假设 parameter 是：

```java
public void change(int x)
```

调用时：

```text
score = 80
   ↓ copy
x = 80
```

`x` 得到的是数字 `80` 的副本。

---

## Object argument

```java
Address a1 = new Address("Chengdu");
obj.change(a1);
```

假设 parameter 是：

```java
public void change(Address a)
```

调用时：

```text
a1 = reference to Address object
          ↓ copy
 a = same reference value
```

所以：

```text
a1 ───────┐
          ▼
      Address object
          ▲
a  ───────┘
```

`a1` 和 parameter `a` 是两个不同的变量，但它们保存了指向**同一个 object** 的 reference。

这两个 reference 可以称为 **aliases（别名）**。

| Argument 类型 | Parameter 得到什么？ | 是否自动复制整个 object？ |
|---|---|---|
| `int` / `double` / `boolean` | primitive value 的副本 | 不适用 |
| object reference | reference value 的副本 | ❌ 不会 |

# 4. 修改 Object ≠ 修改 Reference

这是理解 pass by value 后非常重要的一步。

看两个 method。

## 情况 1：通过 parameter 修改 object

```java
public void changeCity(Address a)
{
    a.setCity("Shanghai");
}
```

调用：

```java
Address home = new Address("Chengdu");
changeCity(home);
```

因为 `home` 和 `a` 指向同一个 object：

```text
home ─────┐
          ▼
      Address
          ▲
a ────────┘
```

执行：

```java
a.setCity("Shanghai");
```

会修改原来的 Address object。

所以调用结束后：

```text
home.getCity() → "Shanghai"
```

---

## 情况 2：让 parameter 指向另一个 object

```java
public void replaceAddress(Address a)
{
    a = new Address("Beijing");
}
```

调用：

```java
Address home = new Address("Chengdu");
replaceAddress(home);
```

最开始：

```text
home ─────┐
          ▼
      Chengdu Address
          ▲
a ────────┘
```

方法中执行：

```java
a = new Address("Beijing");
```

只是改变 parameter `a` 保存的 reference：

```text
home ─────► Chengdu Address

a ────────► Beijing Address
```

原来的 `home` **没有改变**。

所以：

```text
home.getCity() → "Chengdu"
```

这正是因为 Java 是 pass by value：parameter `a` 本身只是 caller 中 reference value 的一个副本。

> **通过 reference 修改 object，可能影响原 object；重新给 parameter reference 赋值，不会改变 caller 的变量。**

# 5. Mutable 和 Immutable Object

如果 object 的状态可以改变，它就是 **mutable object（可变对象）**。

例如我们自己写的 `Address` class 有 setter：

```java
public void setCity(String c)
{
    city = c;
}
```

那么 `Address` 是 mutable。

如果两个 reference 指向同一个 mutable object：

```text
a1 ─────┐
        ▼
     Address
        ▲
a2 ─────┘
```

通过：

```java
a1.setCity("Shanghai");
```

修改 object 后，`a2` 看到的也会是新的 city。

---

## `String` 是特殊的：immutable

Unit 1.15 已经学过：

```java
String s = "hello";
s.toUpperCase();
```

不会把原来的 `s` 改成大写。

因为 `String` 是 **immutable（不可变）**。

`toUpperCase()` 会产生并返回一个新的 `String`：

```java
s = s.toUpperCase();
```

所以 object reference 作为 argument 时，要特别关注：

```text
这个 object 是 mutable 还是 immutable？
```

对于 mutable object，共享 reference 可能带来真正的状态变化。

# 6. 为什么需要 Defensive Copy？

回到最开始的 `Person`：

```java
public Person(String n, Address a)
{
    name = n;
    addr = a;
}
```

这意味着：

```text
a ───────┐
         ▼
     Address object
         ▲
addr ────┘
```

constructor 外面的代码仍然可以通过原 reference 修改这个 Address。

例如：

```java
Address a1 = new Address("Chengdu");
Person p1 = new Person("Alex", a1);

a1.setCity("Shanghai");
```

这会间接改变 `p1` 里面的 address。

如果 class design 不希望这种事情发生，就应该保存一个**独立的 copy**。

## 方法 1：使用 getter 创建新的 object

```java
public Person(String n, Address a)
{
    name = n;
    addr = new Address(a.getCity());
}
```

现在：

```text
a ───────► Address("Chengdu")

addr ────► Address("Chengdu")
```

两个 object 内容一样，但不是同一个 object。

这叫 **defensive copy（防御性复制）**。

之后：

```java
a.setCity("Shanghai");
```

不会改变 `p1` 内部保存的 Address。

---

## 方法 2：Copy Constructor

另一个常见设计是在 `Address` 中提供 copy constructor：

```java
public Address(Address other)
{
    city = other.getCity();
}
```

然后 `Person` constructor 可以写成：

```java
public Person(String n, Address a)
{
    name = n;
    addr = new Address(a);
}
```

这里：

```java
new Address(a)
```

明确创建了一个新的 `Address` object。

> **当 mutable object 作为 constructor parameter 时，如果不希望 class 内部状态和外部 object 共享，就要保存一个 copy，而不是直接保存原 reference。**

# 7. 同一个 Class 的 Object 可以访问彼此的 `private` Data

这是一个很容易误判的 AP 点。

假设：

```java
public class Person
{
    private String name;
    private Address addr;

    public void copyAddress(Person otherPerson)
    {
        addr = new Address(otherPerson.addr);
    }
}
```

很多学生会觉得：

```java
otherPerson.addr
```

不能访问，因为 `addr` 是 `private`。

但这是**合法的**。

原因是 `private` 的限制针对的是 **class**，不是针对“这个 object 只能访问自己的数据”。

`copyAddress` 的代码本身就在 `Person` class 内部，因此可以访问任何 `Person` object 的 private members：

```java
otherPerson.addr
```

是可以的。

---

但是如果 parameter 是不同 class：

```java
public void copyCity(Address otherAddr)
{
    addr.city = otherAddr.city;   // 不可以
}
```

如果 `Address.city` 是 `private`，`Person` class 不能直接访问它。

应该通过公开的方法：

```java
public void copyCity(Address otherAddr)
{
    addr.setCity(otherAddr.getCity());
}
```

可以记成：

```text
Person code
   ↓
访问 Person object 的 private data → ✅
访问 Address object 的 private data → ❌
```

# 8. Method 返回 Object 时，返回的也是 Reference

method 不只可以返回：

```java
int
boolean
String
```

也可以返回我们自己定义的 object type：

```java
public Address getAddress()
{
    return addr;
}
```

这里：

```java
return addr;
```

**不会创建一个新的 Address object。**

返回的是 `addr` 保存的 reference value 的副本。

例如：

```java
Address a = p1.getAddress();
```

执行后可能是：

```text
p1.addr ──┐
          ▼
       Address
          ▲
a ────────┘
```

如果 `Address` 是 mutable：

```java
a.setCity("Shanghai");
```

那么 `p1` 内部的 Address 也会变，因为它们仍然指向同一个 object。

这和 method parameter 的核心规则完全一样：

```text
传入 object
→ copy reference
→ 可能产生多个 reference 指向同一 object

返回 object
→ copy reference
→ 也可能产生多个 reference 指向同一 object
```

> **Passing 和 returning 都不会自动复制 object 本身。**

# 9. 把整条 Reference 链连起来

下面这个例子把 3.6 最重要的概念连在一起。

```java
class Address
{
    private String city;

    public Address(String c)
    {
        city = c;
    }

    public Address(Address other)
    {
        city = other.getCity();
    }

    public String getCity()
    {
        return city;
    }

    public void setCity(String c)
    {
        city = c;
    }
}

public class Person
{
    private String name;
    private Address addr;

    public Person(String n, Address a)
    {
        name = n;
        addr = new Address(a);   // defensive copy
    }

    public Address getAddress()
    {
        return addr;
    }
}
```

创建对象：

```java
Address home = new Address("Chengdu");
Person p = new Person("Alex", home);
```

因为 constructor 做了 defensive copy：

```text
home ─────► Address("Chengdu")

p.addr ───► Address("Chengdu")
```

所以：

```java
home.setCity("Shanghai");
```

不会修改 `p.addr`。

但是接下来：

```java
Address returned = p.getAddress();
```

`getAddress()` 直接：

```java
return addr;
```

所以：

```text
p.addr ──────┐
             ▼
          Address
             ▲
returned ────┘
```

现在：

```java
returned.setCity("Beijing");
```

会修改 `p` 内部的 Address。

这说明：

> **判断是否共享 object，不能只看 constructor；要一路追踪每一次 reference 的赋值、传递和返回。**

# 10. 一个小补充：Anonymous Object

Runestone 在这一课还出现了这种写法：

```java
Person p = new Person("Alex", new Address("Chengdu"));
```

这里：

```java
new Address("Chengdu")
```

创建了一个 object，但没有先用独立变量保存它。

这种 object 常被称为 **anonymous object（匿名对象）**。

它和下面写法在这里的作用类似：

```java
Address a = new Address("Chengdu");
Person p = new Person("Alex", a);
```

对 3.6 来说，重点不是记这个名字，而是仍然要看 constructor 最终保存的是哪个 reference，以及是否创建了 copy。

# 11. 常见初学者错误

| 错误理解 | 实际情况 |
|---|---|
| “Java 的 object 是 pass by reference” | ❌ Java 始终 pass by value；object argument 复制的是 reference value |
| “传 object 会自动复制整个 object” | ❌ parameter 默认只是拿到同一个 object 的另一个 reference |
| “两个 reference 是两个 object” | ❌ 两个不同变量完全可能指向同一个 object |
| “给 parameter 重新 `new` 一个 object，会改变 caller 的 variable” | ❌ 只改变 parameter 自己保存的 reference |
| “通过 parameter 调 setter 不会影响原 object” | ❌ 如果两者指向同一个 mutable object，会影响 |
| “constructor 参数是 object，直接 `field = parameter` 一定安全” | ❌ mutable object 可能因此和外部共享；必要时应 defensive copy |
| “private data 只能这个 object 自己访问” | ❌ 同一个 class 的代码可以访问其他同类 object 的 private members |
| “getter 返回 object 时会得到一个新 object” | ❌ `return addr;` 返回的是 reference，不会自动 copy |
| “String 也会像自己写的 mutable class 一样被 setter 改掉” | ❌ `String` 是 immutable |

# 12. 小练习（Mini Practice）

## Practice 1：到底有几个 Object？

```java
Address a1 = new Address("Chengdu");
Address a2 = a1;
```

现在有几个 `Address` object？

### A

1 个

### B

2 个

**答案：A**

这里只执行了一次：

```java
new Address(...)
```

所以只创建了一个 object。`a1` 和 `a2` 是两个 reference，指向同一个 object。

---

## Practice 2：修改 Object

```java
Address a1 = new Address("Chengdu");
Address a2 = a1;

a2.setCity("Shanghai");

System.out.println(a1.getCity());
```

输出是什么？

**答案：**

```text
Shanghai
```

`a1` 和 `a2` 指向同一个 mutable object。

---

## Practice 3：重新给 Parameter 赋值

```java
public static void replace(Address a)
{
    a = new Address("Beijing");
}
```

调用：

```java
Address home = new Address("Chengdu");
replace(home);
System.out.println(home.getCity());
```

输出是什么？

**答案：**

```text
Chengdu
```

parameter `a` 得到的是 `home` 中 reference value 的副本。重新给 `a` 赋值不会改变 `home`。

---

## Practice 4：同类 Object 的 `private` Data

```java
public class Student
{
    private int score;

    public boolean hasHigherScore(Student other)
    {
        return score > other.score;
    }
}
```

`other.score` 是否合法？

**答案：合法。**

这段代码位于 `Student` class 内，因此可以访问另一个 `Student` object 的 `private score`。

---

## Practice 5：返回 Object

```java
public Address getAddress()
{
    return addr;
}
```

调用：

```java
Address x = p.getAddress();
x.setCity("Shanghai");
```

如果 `Address` 是 mutable，并且 `getAddress()` 直接返回 `addr`，`p` 内部的 address 会不会改变？

**答案：会。**

`x` 得到的是 `addr` reference value 的副本，所以 `x` 和 `p.addr` 指向同一个 object。

---

## Practice 6：Defensive Copy

哪一个 constructor 可以避免外部 `Address` 和 `Person` 内部的 `Address` 共享同一个 object？

### A

```java
public Person(Address a)
{
    addr = a;
}
```

### B

```java
public Person(Address a)
{
    addr = new Address(a);
}
```

**答案：B**

`new Address(a)` 创建新的 object，因此 `addr` 不再指向原来的 `Address`。

# Unit 3.6 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 核心理解 / Example |
|---|---|---|
| object reference / 对象引用 | 指向某个 object 的值 | object variable 保存的是 reference |
| has-a relationship / “拥有”关系 | 一个 object 内部包含对另一个 object 的引用 | `Person has an Address` |
| pass by value / 值传递 | parameter 得到 argument value 的副本 | Java 所有 arguments 都遵守这个规则 |
| alias / 别名引用 | 两个或更多 reference 指向同一个 object | `Address a2 = a1;` |
| mutable object / 可变对象 | 创建后内部状态还能改变的 object | 有 setter 的 `Address` |
| immutable object / 不可变对象 | 创建后自身状态不能被修改 | `String` |
| defensive copy / 防御性复制 | 创建独立 object，避免共享 mutable object | `addr = new Address(a);` |
| copy constructor / 复制构造器 | 接收同类 object，并根据它创建新 object 的 constructor | `public Address(Address other)` |
| object parameter / 对象参数 | parameter 的类型是某个 class | `change(Address a)` |
| returned reference / 返回的引用 | method 返回 object 时实际返回 reference value | `return addr;` |
| anonymous object / 匿名对象 | 创建后没有先保存到独立变量中的 object | `new Person("Alex", new Address("Chengdu"))` |
