---
title: "AP CSA 3.6：用 BlueJ 看懂对象引用"
layout: post
categories: media
render_with_liquid: false
---

3.6 最难的地方通常不是语法，而是脑中要同时追踪 **object（对象）** 和 **reference（引用）**。

这份讲义用两个很小的 class —— `Avatar` 和 `GameProfile` —— 配合 BlueJ 的 Object Bench，把这些 reference 真正“看见”。

> 这一课最重要的问题只有两个：**现在一共有几个 object？哪些 reference 指向同一个 object？**

如果需要完整的 AP 3.6 知识整理，可以同时参考：
[AP CSA 3.6：传递与返回对象引用](/csa-3-6-passing-and-returning-object-references/)

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.6 用 BlueJ 看懂对象引用

## Class 也可以定义一种 Type

* `int` 是 primitive type
* `String` 是 Java 已经提供的 class type
* 自己写 `class Avatar` 后，`Avatar` 也成为一种 type
* `Avatar avatar;` 保存的是 object reference

## Object 作为 Instance Variable

* `GameProfile` 可以保存一个 `Avatar` reference
* `GameProfile has an Avatar`
* 这是一种简单的 has-a relationship
* 不需要把它想复杂

## Object 作为 Argument

* Java 始终是 pass by value
* object argument 复制的是 reference value
* parameter 和 argument 可能指向同一个 object
* 通过 parameter 修改 object，caller 也能看到变化

## 修改 Object vs 修改 Reference

* `target.heal(20)` → 修改共享的 object
* `target = new Avatar(...)` → 只让 parameter 指向另一个 object
* caller 原来的 variable 不会被重新指向

## 返回 Object

* method return type 也可以是自己定义的 class
* `return avatar;` 返回 reference value 的副本
* 不会自动创建一个新 object
* returned reference 可能再次指向同一个 object

## 最重要的检查方法

* 数一数执行了几次 `new`
* 数一数实际创建了几个 object
* 再画出每个 reference 指向哪里

</script>
</div>
</div>

# 1. 今天到底要看懂什么？

先看三行代码：

```java
private int level;
private String username;
private Avatar avatar;
```

前两行我们已经很熟悉。

但第三行第一次看会有点奇怪：

```java
private Avatar avatar;
```

`Avatar` 不是一个 class 吗？

为什么它会出现在变量类型的位置？

答案来自 Java 中一个非常重要的规则：

> **定义一个 class，也就定义了一种新的 reference type。**

例如我们写：

```java
public class Avatar
{
    ...
}
```

从这一刻开始，`Avatar` 就可以像 `String` 一样出现在变量声明、parameter 和 return type 中。

对比：

| 代码 | Type | Variable 中保存什么 |
| --- | --- | --- |
| `int level;` | primitive type | 一个整数值 |
| `String username;` | class / reference type | 指向 `String` object 的 reference |
| `Avatar avatar;` | 我们自己定义的 class / reference type | 指向 `Avatar` object 的 reference |

所以：

```java
Avatar avatar;
```

不是“把整个 Avatar 塞进变量”。

更准确的理解是：

```text
avatar
  │
  │ reference
  ▼
┌────────────────┐
│ Avatar object  │
└────────────────┘
```

---

# 2. BlueJ 准备：先建立 `Avatar`

新建一个 BlueJ Project：

```text
Unit3_6_ObjectReferences
```

创建第一个 class：

```text
Avatar
```

`Avatar.java` 这一课直接给你完整代码。它只是我们的实验工具，不是今天主要要写的 class。

```java
public class Avatar
{
    private String name;
    private int health;

    public Avatar(String n, int h)
    {
        name = n;
        health = h;
    }

    public String getName()
    {
        return name;
    }

    public int getHealth()
    {
        return health;
    }

    public void setHealth(int h)
    {
        health = h;
    }

    public void heal(int amount)
    {
        health += amount;
    }

    public void takeDamage(int amount)
    {
        health -= amount;
    }

    public String toString()
    {
        return name + " (HP: " + health + ")";
    }
}
```

Compile。

然后在 BlueJ 中创建：

```java
new Avatar("Knight", 80)
```

把 object name 设为：

```text
avatar1
```

现在 Object Bench 上出现了 `avatar1`。

可以先右键 `avatar1` → **Inspect**。

脑中把它画成：

```text
avatar1
   │
   ▼
┌─────────────────┐
│ Avatar object   │
│ name = Knight   │
│ health = 80     │
└─────────────────┘
```

> Object Bench 是帮助我们理解 reference 的可视化工具。它不是 Java 内存的真实图片，但非常适合用来追踪 object。

---

# 3. BlueJ Task 1：让 `GameProfile` 拥有一个 `Avatar`

现在创建第二个 class：

```text
GameProfile
```

先复制下面的 scaffold。

**先不要看页面最下面的答案。**

```java
public class GameProfile
{
    private String username;
    private int level;

    // TODO 1
    // GameProfile has an Avatar.
    // 这里的 type 应该是什么？
    private ________ avatar;


    // TODO 2
    // constructor 需要接收一个 Avatar object 的 reference。
    public GameProfile(String u, int l, ________ a)
    {
        username = u;
        level = l;

        // 把 parameter 中的 reference 存进 instance variable。
        avatar = ________;
    }


    public void printProfile()
    {
        System.out.println("Username: " + username);
        System.out.println("Level: " + level);
        System.out.println("Avatar: " + avatar);
    }


    // TODO 3
    // 接收另一个 Avatar reference，然后让那个 Avatar 恢复 health。
    public void healAvatar(________ target, int amount)
    {
        ________.heal(amount);
    }


    // TODO 4
    // 返回这个 GameProfile 保存的 Avatar reference。
    public ________ getAvatar()
    {
        return ________;
    }
}
```

先完成 **TODO 1 和 TODO 2**，然后 Compile。

这里最重要的不是背答案，而是回答：

```text
为什么 String 可以是一种 type？
为什么 Avatar 也可以是一种 type？
```

因为它们都是 class name。

区别只是：

```text
String  → Java 已经写好的 class
Avatar  → 我们自己写的 class
```

---

# 4. BlueJ Experiment 1：一个 Object 可以成为另一个 Object 的一部分

现在 Object Bench 上已经有：

```text
avatar1
```

接着创建一个 `GameProfile`：

```java
new GameProfile("Alex", 5, avatar1)
```

object name：

```text
profile1
```

注意第三个 argument：

```java
avatar1
```

我们没有创建新的 `Avatar`。

这一行也没有新的：

```java
new Avatar(...)
```

所以此时仍然只有 **一个 Avatar object**。

可以画成：

```text
avatar1 ─────────────┐
                     │
                     ▼
                ┌───────────────┐
                │ Avatar object │
                │ Knight        │
                │ HP = 80       │
                └───────────────┘
                     ▲
                     │
profile1.avatar ─────┘
```

两个 reference：

```text
avatar1
profile1.avatar
```

但只有：

```text
1 个 Avatar object
```

这就是最简单的：

```text
GameProfile has an Avatar
```

也就是 **has-a relationship**。

这一课不需要把这个术语想得更复杂。

---

# 5. BlueJ Experiment 2：两个 Reference，一个 Object

先右键：

```text
profile1
```

调用：

```text
printProfile()
```

应该能看到当前 Avatar 的信息。

然后右键：

```text
avatar1
```

调用：

```java
setHealth(20)
```

现在不要再 Inspect `avatar1`。

直接再次调用：

```java
profile1.printProfile()
```

## 先预测

`profile1` 里面的 Avatar health 是多少？

```text
A. 80

B. 20

C. 编译错误
```

为什么？

先自己画 reference 图，再到页面底部检查答案。

---

# 6. Constructor 到底复制了什么？

创建 `profile1` 时：

```java
new GameProfile("Alex", 5, avatar1)
```

constructor 中有一个 parameter：

```java
Avatar a
```

调用发生时，不是这样：

```text
复制整个 Avatar object
```

而是这样：

```text
avatar1 中保存的 reference
            │
            │ copy
            ▼
            a
```

所以 constructor 执行期间：

```text
avatar1 ─────┐
             ▼
          Avatar
             ▲
a ───────────┘
```

如果 constructor 再把 `a` 存进 instance variable：

```text
avatar1 ──────────┐
a ────────────────┼──► same Avatar object
profile1.avatar ──┘
```

这就是：

> **Java is pass by value. Object argument 被复制的 value 是 reference。**

---

# 7. BlueJ Task 2：Object 也可以作为 Method Argument

现在完成 scaffold 中的 **TODO 3**：

```java
public void healAvatar(________ target, int amount)
{
    ________.heal(amount);
}
```

Compile。

然后在 BlueJ 中调用：

```java
profile1.healAvatar(avatar1, 30)
```

调用前先预测：

```text
avatar1 的 health 会不会改变？
```

这里 parameter：

```text
target
```

是一个新的 variable。

但它拿到的是 `avatar1` 中 reference value 的副本。

调用期间：

```text
avatar1 ─────┐
             ▼
          Avatar
             ▲
target ──────┘
```

所以真正要问的是：

> `target.heal(amount)` 修改的是 `target` 这个 variable，还是 `target` 指向的 object？

测试后再调用：

```java
profile1.printProfile()
```

看看结果。

---

# 8. BlueJ Task 3：修改 Object 和修改 Reference，不是一回事

这是 3.6 最容易混淆的地方之一。

在 `GameProfile` 中再加入下面这个 method，但先自己补空格：

```java
public void tryToReplace(________ target)
{
    target = new Avatar("Robot", 100);
}
```

Compile 后调用：

```java
profile1.tryToReplace(avatar1)
```

## 先预测

调用结束后：

```text
avatar1
```

会不会变成 Robot？

先不要急着试。

在 method 一开始：

```text
avatar1 ─────┐
             ▼
          Knight
             ▲
target ──────┘
```

然后执行：

```java
target = new Avatar("Robot", 100);
```

请自己完成下面的图：

```text
avatar1 ─────────► __________

target  ─────────► __________
```

再到 BlueJ 中：

1. 调用 `tryToReplace`
2. Inspect `avatar1`
3. 再调用 `profile1.printProfile()`

看看你的预测是否正确。

---

# 9. 一条非常重要的规则

把刚才两个 experiment 放在一起：

```java
target.heal(30);
```

和：

```java
target = new Avatar("Robot", 100);
```

看起来都用了 `target`，但完全不是同一件事。

请完成：

```text
target.heal(30)
→ 修改 ______________________

target = new Avatar(...)
→ 修改 ______________________
```

这条区别以后会反复出现在 AP 题目中。

---

# 10. BlueJ Task 4：Method 也可以返回 Object

现在完成 scaffold 中的 **TODO 4**：

```java
public ________ getAvatar()
{
    return ________;
}
```

想一想：

如果 method 返回的是一个 `Avatar` object 的 reference，

它的 return type 应该是什么？

Compile 后，在 BlueJ 中：

1. 右键 `profile1`
2. 调用 `getAvatar()`
3. BlueJ 会显示一个返回的 object
4. 如果你的 BlueJ 版本提供 **Get**，把返回的 object 放到 Object Bench
5. 给它一个名字，例如：

```text
avatar2
```

现在 Object Bench 上可能同时有：

```text
avatar1
profile1
avatar2
```

问题：

```text
现在有几个 Avatar object？
```

不要通过“Object Bench 上有几个名字”判断。

要数：

```java
new Avatar(...)
```

到底执行过几次。

如果 `avatar2` 和 `profile1.avatar` 指向同一个 object，那么：

```java
avatar2.setHealth(1);
```

之后再调用：

```java
profile1.printProfile();
```

会发生什么？

先预测，再实验。

---

# 11. 以后遇到 Reference 题，只问这两个问题

3.6 的题目代码可能越来越长，但分析方法不要变。

## Question 1：到底创建了几个 Object？

找：

```java
new ClassName(...)
```

例如：

```java
Avatar a1 = new Avatar("Knight", 80);
Avatar a2 = a1;
Avatar a3 = a2;
```

这里只有一次：

```java
new Avatar(...)
```

所以只有：

```text
1 个 Avatar object
```

---

## Question 2：每个 Reference 指向哪里？

把变量画出来：

```text
a1 ───┐
a2 ───┼──► Avatar object
a3 ───┘
```

> **Reference 的数量 ≠ Object 的数量。**

这是 3.6 最重要的 mental model。

---

# 12. Primitive 和 Object 放在一起比较

3.5 中：

```java
int score = 80;
change(score);
```

parameter 得到：

```text
80 的 copy
```

所以：

```text
score = 80
   ↓ copy
x = 80
```

3.6 中：

```java
Avatar avatar1 = new Avatar("Knight", 80);
healAvatar(avatar1, 20);
```

parameter 得到：

```text
reference value 的 copy
```

所以：

```text
avatar1 ─────┐
             ▼
          Avatar
             ▲
target ──────┘
```

Java 的规则没有改变：

> **Java 永远是 pass by value。**

变的只是被复制的 value 是什么。

---

# 13. BlueJ Challenge：先预测，再运行

下面都不要马上运行。先画图。

## Challenge 1

```java
Avatar a1 = new Avatar("Knight", 80);
Avatar a2 = a1;

a2.setHealth(10);
```

问题：

```text
a1.getHealth() 是多少？
```

---

## Challenge 2

假设：

```java
public void change(Avatar target)
{
    target.setHealth(5);
}
```

运行：

```java
Avatar a1 = new Avatar("Knight", 80);
profile1.change(a1);
```

问题：

```text
a1.getHealth() 是多少？
```

---

## Challenge 3

假设：

```java
public void change(Avatar target)
{
    target = new Avatar("Robot", 100);
}
```

运行：

```java
Avatar a1 = new Avatar("Knight", 80);
profile1.change(a1);
```

问题：

```text
a1 现在指向 Knight 还是 Robot？
```

---

## Challenge 4

假设：

```java
Avatar a2 = profile1.getAvatar();
```

`getAvatar()` 只是：

```java
return avatar;
```

问题：

```text
a2 和 profile1.avatar 是两个不同的 Avatar object，
还是两个 reference 指向同一个 Avatar object？
```

---

# 14. 本课最后只需要记住四句话

```text
1. 定义一个 class，也就定义了一种新的 reference type。

2. Object variable 保存的是 reference，不是整个 object。

3. Java pass by value；
   object argument 被复制的是 reference value。

4. 多个 reference 可以指向同一个 object。
```

如果遇到复杂题目：

```text
数 new
   ↓
数 object
   ↓
画 reference 箭头
```

不要只靠脑内想象。

---

# Answers / 答案

下面是课堂任务和 Challenge 的答案。建议先完成前面的 BlueJ 实验再看。

## Answer 1：完整 `GameProfile.java`

```java
public class GameProfile
{
    private String username;
    private int level;
    private Avatar avatar;

    public GameProfile(String u, int l, Avatar a)
    {
        username = u;
        level = l;
        avatar = a;
    }

    public void printProfile()
    {
        System.out.println("Username: " + username);
        System.out.println("Level: " + level);
        System.out.println("Avatar: " + avatar);
    }

    public void healAvatar(Avatar target, int amount)
    {
        target.heal(amount);
    }

    public Avatar getAvatar()
    {
        return avatar;
    }
}
```

关键不是记住 `Avatar` 这个单词，而是：

```text
class name → 可以作为 type
```

所以：

```java
private Avatar avatar;
public void healAvatar(Avatar target, int amount)
public Avatar getAvatar()
```

都成立。

---

## Answer 2：Experiment 2

执行：

```java
avatar1.setHealth(20);
```

之后：

```java
profile1.printProfile();
```

会看到 Avatar 的 health 也是：

```text
20
```

因为：

```text
avatar1 ─────────────┐
                     ▼
                  Avatar
                     ▲
profile1.avatar ─────┘
```

两个 reference 指向同一个 mutable object。

---

## Answer 3：`healAvatar`

TODO 3：

```java
public void healAvatar(Avatar target, int amount)
{
    target.heal(amount);
}
```

调用：

```java
profile1.healAvatar(avatar1, 30);
```

`target` 和 `avatar1` 指向同一个 Avatar object。

所以 `target.heal(30)` 会修改那个共享的 object。

---

## Answer 4：`tryToReplace`

完整 method：

```java
public void tryToReplace(Avatar target)
{
    target = new Avatar("Robot", 100);
}
```

执行之前：

```text
avatar1 ─────┐
             ▼
          Knight
             ▲
target ──────┘
```

执行：

```java
target = new Avatar("Robot", 100);
```

之后：

```text
avatar1 ─────────► Knight

target  ─────────► Robot
```

所以：

```text
avatar1 仍然指向 Knight
```

调用结束后，parameter `target` 消失。

如果没有其他 reference 保存 Robot，那么程序也无法再通过这个 variable 找到那个 Robot object。

---

## Answer 5：修改 Object vs 修改 Reference

```text
target.heal(30)
→ 修改 target 指向的 object

target = new Avatar(...)
→ 修改 target 自己保存的 reference
```

第一种可能影响 caller 看到的 object。

第二种不会让 caller 的 variable 自动改指向。

---

## Answer 6：`getAvatar()`

完整代码：

```java
public Avatar getAvatar()
{
    return avatar;
}
```

`return avatar;` 不会自动执行：

```java
new Avatar(...)
```

它返回的是 reference value 的副本。

所以可能出现：

```text
profile1.avatar ───┐
                   ▼
                Avatar
                   ▲
avatar2 ───────────┘
```

如果：

```java
avatar2.setHealth(1);
```

那么：

```java
profile1.printProfile();
```

也会看到：

```text
HP: 1
```

---

# Challenge Answers

## Challenge 1

```text
10
```

`a1` 和 `a2` 指向同一个 Avatar object。

## Challenge 2

```text
5
```

`target.setHealth(5)` 修改了共享的 object。

## Challenge 3

```text
Knight
```

`target = new Avatar(...)` 只改变 local parameter `target` 的 reference。

## Challenge 4

```text
两个 reference 指向同一个 Avatar object
```

`return avatar;` 返回 reference value 的副本，并不会自动创建新的 Avatar object。

---

# 最后检查

如果你能解释下面这张图，说明你已经抓住 3.6 的核心：

```text
avatar1 ────────────┐
                    │
profile1.avatar ────┼──► Avatar object
                    │
avatar2 ────────────┘
```

问自己：

```text
有几个 reference？ → 3

有几个 Avatar object？ → 1
```

**Reference 的数量和 Object 的数量不是一回事。**
