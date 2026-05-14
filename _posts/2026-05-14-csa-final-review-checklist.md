---
title:  "AP CSA 考前最后复习清单"
mathjax: true
layout: post
categories: media
---

# AP CSA 考前最后复习清单

---

# AP CSA 目标分数换算参考

> 说明：以下换算是根据当前练习表中的粗略 composite score 估算。实际 AP 分数线每年可能会根据考试难度调整，所以这不是官方固定分数线，而是考前复习用的目标参考。

## 分数换算基础

| 部分 | 原始分 | 权重 | Composite Score |
|---|---:|---:|---:|
| MCQ | 42 题 | 55% | 最高 55 分 |
| FRQ | 25 分 | 45% | 最高 45 分 |
| Total | — | — | 最高 100 分 |

大致换算：

| 项目 | 约等于 |
|---|---:|
| 每做对 1 道 MCQ | 约 1.31 分 |
| 每拿到 1 个 FRQ 原始分 | 约 1.8 分 |

所以，**FRQ 的每一个 rubric point 都很值钱**。  
考场上千万不要空着 FRQ，即使代码不完美，也要尽量写出能得分的结构。

---

# 目标 3 分

## 大致目标

| MCQ 正确题数 | MCQ 约得分 | FRQ 需要原始分 |
|---:|---:|---:|
| 18 / 42 | 约 23.6 | 约 12 / 25 |
| 20 / 42 | 约 26.2 | 约 11 / 25 |
| 22 / 42 | 约 28.8 | 约 9 / 25 |

## 简单记法

想拿 **3 分**，比较现实的目标是：

> **MCQ 做对 20 题左右 + FRQ 拿到 10–12 分左右**

## 对学生的提醒

目标 3 分的同学不需要写出完美代码。  
最重要的是：

- MCQ 把基础题尽量拿下
- FRQ 不要空着
- 写出 method header
- 写出 loop
- 正确调用题目给的方法
- 能 return 就 return
- 尽量拿 partial credit

---

# 目标 4 分

## 大致目标

| MCQ 正确题数 | MCQ 约得分 | FRQ 需要原始分 |
|---:|---:|---:|
| 26 / 42 | 约 34.0 | 约 19 / 25 |
| 28 / 42 | 约 36.7 | 约 18 / 25 |
| 30 / 42 | 约 39.3 | 约 16 / 25 |
| 32 / 42 | 约 41.9 | 约 15 / 25 |

## 简单记法

想拿 **4 分**，比较现实的目标是：

> **MCQ 做对 28–32 题左右 + FRQ 拿到 15–18 分左右**

## 对学生的提醒

目标 4 分的同学通常不是完全不会，而是容易丢小分。  
最重要的是避免：

- loop boundary 错误
- `<=` 和 `<` 混淆
- `arr.length` / `list.size()` / `str.length()` 混淆
- `list[i]` 和 `list.get(i)` 混淆
- String 比较时误用 `==`
- FRQ 没有按照题目 example table 检查
- method return type 和实际 return 不一致

---

# 目标 5 分

## 大致目标

| MCQ 正确题数 | MCQ 约得分 | FRQ 需要原始分 |
|---:|---:|---:|
| 34 / 42 | 约 44.5 | 约 22 / 25 |
| 36 / 42 | 约 47.1 | 约 21 / 25 |
| 38 / 42 | 约 49.8 | 约 19 / 25 |
| 40 / 42 | 约 52.4 | 约 18 / 25 |

## 简单记法

想拿 **5 分**，比较现实的目标是：

> **MCQ 做对 36–38 题左右 + FRQ 拿到 19–22 分左右**

## 对学生的提醒

目标 5 分的同学不能只靠“感觉自己懂”。  
最重要的是：

- 认真 trace 代码
- 不要跳过边界情况
- 保护 ArrayList mutation 题
- 注意 object references / aliasing
- 注意 `equals` vs `==`
- 注意 recursion tracing
- FRQ 不要写过度复杂的代码
- 确保每一道 FRQ 都尽量接近满分

---


## 考试结构

| 部分 | 内容 | 比重 |
| --- | --- | --- |
| Multiple Choice Questions | 42 道选择题 | 55% |
| Free Response Questions | 4 道简答题 | 45% |

---

## Unit 权重排序

| 排名 | Unit | 考试比重 |
| --- | --- | --- |
| 1 | Unit 4 Data Collections | 30–40% |
| 2 | Unit 2 Selection and Iteration | 25–35% |
| 3 | Unit 1 Using Objects and Methods | 15–25% |
| 4 | Unit 3 Class Creation | 10–18% |

---

# 第一部分：最高频核心知识点

## 1. Array / ArrayList / 2D Array 数据集合

**重要性：极高**  
**对应考试：Unit 4，30–40%；FRQ 3 + FRQ 4 + 大量 MCQ**

---

## 1.1 一维数组 Array

### 必会内容

```java
int[] arr = new int[10];
int[] nums = {1, 2, 3, 4};
```

数组长度：

```java
arr.length
```

注意：

```java
arr.length      // 对
arr.length()    // 错
```

---

### 常见考法

- 遍历数组
- 找最大值 / 最小值
- 求和 / 求平均数
- 统计符合条件的元素个数
- 替换数组中的元素
- 追踪数组变化
- 判断是否会出现 `ArrayIndexOutOfBoundsException`

---

### 必背模板

```java
for (int i = 0; i < arr.length; i++)
{
    // use arr[i]
}
```

---

### 学生易错点

- 把 `arr.length` 写成 `arr.length()`
- 循环条件写成 `i <= arr.length`
- 忘记数组下标从 `0` 开始
- 访问 `arr[arr.length]` 导致越界
- 用 enhanced for loop 时，以为修改循环变量就能修改原数组内容

---

### 快速提醒

> 数组最后一个位置不是 `arr.length`，而是 `arr.length - 1`。

---

## 1.2 ArrayList

### 必会内容

```java
ArrayList<String> list = new ArrayList<String>();
```

常用方法：

```java
list.size()
list.get(i)
list.set(i, value)
list.add(value)
list.add(i, value)
list.remove(i)
```

---

### 常见考法

- 遍历 ArrayList
- 根据条件删除元素
- 根据条件统计元素
- 根据对象属性查找元素
- 修改 ArrayList 中的对象或值
- FRQ 3 写一个完整方法处理 ArrayList

---

### 必背模板：普通遍历

```java
for (int i = 0; i < list.size(); i++)
{
    // use list.get(i)
}
```

---

### 必背模板：删除元素

如果要删除多个元素，优先倒序：

```java
for (int i = list.size() - 1; i >= 0; i--)
{
    if (condition)
    {
        list.remove(i);
    }
}
```

---

### 学生易错点

- 用 enhanced for loop 删除元素
- 在 enhanced for loop 中改变 ArrayList 的大小，可能导致 `ConcurrentModificationException`
- 正向遍历删除后漏掉相邻元素
- 把 `list.get(i)` 写成 `list[i]`
- 混淆：
  - 数组：`arr.length`
  - ArrayList：`list.size()`
  - String：`str.length()`
- `remove(i)` 删除的是 index 对应位置的元素

---

### 快速提醒

> ArrayList 删除元素，最安全的考场写法是倒序遍历。  
> ArrayList 不能用 `list[i]`，要用 `list.get(i)`。

---

## 1.3 2D Array 二维数组

**对应 FRQ 4**

---

### 必会内容

```java
int[][] grid = new int[rows][cols];
```

行数：

```java
grid.length
```

列数：

```java
grid[0].length
```

访问元素：

```java
grid[r][c]
```

---

### 必背模板：按行遍历 Row-major

```java
for (int r = 0; r < grid.length; r++)
{
    for (int c = 0; c < grid[0].length; c++)
    {
        // use grid[r][c]
    }
}
```

---

### 必背模板：按列遍历 Column-major

```java
for (int c = 0; c < grid[0].length; c++)
{
    for (int r = 0; r < grid.length; r++)
    {
        // use grid[r][c]
    }
}
```

---

### 常见考法

- 统计某个值出现几次
- 统计某一行 / 某一列
- 判断某一行是否符合条件
- 修改二维数组中的元素
- 找最大值 / 最小值
- 根据行列位置做判断
- 非正方形 2D Array 的边界判断

---

### 学生易错点

- 把行数和列数写反
- 写成 `grid[r, c]`
- 内外层循环变量混用
- 判断列数时写成 `grid.length`
- 在非正方形 2D Array 中写成 `grid[c][r]`，导致越界

---

### 快速提醒

> `grid.length` 是行数，`grid[0].length` 是列数。  
> 访问元素永远是 `grid[row][col]`。

---

# 第二部分：控制结构与算法

## 2. Selection and Iteration

**重要性：极高**  
**对应考试：Unit 2，25–35%；FRQ 1 核心；MCQ 高频**

---

## 2.1 if / else / nested if

### 必会内容

```java
if (condition)
{
    // do something
}
else if (condition)
{
    // do something else
}
else
{
    // otherwise
}
```

---

### 常见考法

- 判断代码输出
- 判断条件覆盖是否完整
- 多条件分类
- 找逻辑错误
- FRQ 中根据题目规则写分支

---

### 学生易错点

- 把 `=` 当成 `==`
- 忘记 `else if` 和多个独立 `if` 的区别
- 条件顺序写错
- 边界条件漏掉，例如 `<` 和 `<=`

---

### 快速提醒

> 多个独立 `if` 可能都会执行。  
> `if / else if / else` 只会执行其中一支。

---

## 2.2 Boolean Logic 布尔逻辑

### 必会内容

```java
&&   // and
||   // or
!    // not
```

---

### De Morgan’s Laws

```java
!(a && b)  等价于  !a || !b
!(a || b)  等价于  !a && !b
```

---

### 短路求值 Short-circuit

```java
if (obj != null && obj.getName().equals("Tom"))
{
    // safe to use obj.getName()
}
```

如果 `obj != null` 是 false，后面不会执行。

---

### 常见考法

- 判断复杂 Boolean 表达式
- 找等价表达式
- 判断是否会发生 `NullPointerException`
- 用短路保护代码

---

### 学生易错点

- `&&` 和 `||` 混淆
- `!` 进去后没有把 `&&` / `||` 反过来
- 忘记短路求值
- 把保护条件放反：

```java
obj.getName().equals("Tom") && obj != null
```

这样可能先报错。

---

### 快速提醒

> 判断对象方法前，先确认对象不是 `null`。

---

## 2.3 while loop / for loop

### 必会内容

```java
while (condition)
{
    // repeat
}
```

```java
for (int i = 0; i < n; i++)
{
    // repeat
}
```

---

### 常见考法

- 代码追踪
- 计算循环次数
- 找 infinite loop
- 找 off-by-one error
- 嵌套循环计算执行次数

---

### 学生易错点

- 循环变量没有更新
- 循环条件写错
- `i < n` 和 `i <= n` 混淆
- `return` 写在循环里面，导致循环只执行一次
- 在 loop 里面声明变量，导致 loop 外无法使用

---

### 快速提醒

> 循环题先看三件事：起点、终点、变化量。  
> 需要最后返回结果时，通常先在 loop 外初始化结果变量。

---

## 2.4 Nested Loop 嵌套循环

### 必会内容

```java
for (int i = 0; i < rows; i++)
{
    for (int j = 0; j < cols; j++)
    {
        // inner loop
    }
}
```

---

### 常见考法

- 计算总执行次数
- 打印图案
- 遍历二维结构
- 嵌套循环中的变量变化

---

### 学生易错点

- 以为内外层同时变化
- 忘记内层循环每次都会完整跑完
- 内层用了外层变量
- 外层用了内层变量

---

### 快速提醒

> 外层走一步，内层跑一整圈。

---

## 2.5 Standard Algorithms 标准算法

### 必会算法

- 判断是否整除
- 判断奇偶
- 提取整数中的数字
- 计数 count
- 求和 sum
- 求平均 average
- 找最大值 max
- 找最小值 min
- 查找符合条件的元素
- 统计符合条件的次数

---

### 常见模板：count

```java
int count = 0;

for (int i = 0; i < arr.length; i++)
{
    if (condition)
    {
        count++;
    }
}
```

---

### 常见模板：sum

```java
int sum = 0;

for (int i = 0; i < arr.length; i++)
{
    sum += arr[i];
}
```

---

### 常见模板：max

```java
int max = arr[0];

for (int i = 1; i < arr.length; i++)
{
    if (arr[i] > max)
    {
        max = arr[i];
    }
}
```

---

### 学生易错点

- max 初始化为 0，但数组里可能全是负数
- average 用整数除法导致小数丢失
- `return` 放在循环内部
- count / sum 初始化位置错误

---

### 快速提醒

> max / min 通常用第一个元素初始化，不要随便用 0。

---

# 第三部分：String 与方法调用

## 3. String Algorithms and String Methods

**重要性：高**  
**对应考试：Unit 1 + Unit 2；FRQ 1 Part B 高频**

---

## 3.1 String 常用方法

### 必会方法

```java
str.length()
str.substring(start, end)
str.substring(start)
str.indexOf(target)
str.equals(other)
str.compareTo(other)
str.split(delimiter)
```

---

### `substring`

```java
String s = "computer";
s.substring(0, 3);  // "com"
```

规则：

> 包含 start，不包含 end。

单个字符：

```java
s.substring(i, i + 1)
```

---

### `indexOf`

```java
s.indexOf("put")
```

如果找到，返回起始 index。  
如果找不到，返回 `-1`。

---

### `compareTo`

```java
"a".compareTo("b")   // negative
"b".compareTo("a")   // positive
"a".compareTo("a")   // 0
```

---

### `split`

```java
String info = "red,blue,green";
String[] parts = info.split(",");
```

结果：

```java
parts[0]   // "red"
parts[1]   // "blue"
parts[2]   // "green"
```

注意：`split` 返回的是 `String[]` 数组，所以长度用：

```java
parts.length
```

不是：

```java
parts.length()
```

---

### 常见考法

- 遍历 String
- 统计某个字符或 substring
- 反转字符串
- 判断字符串中是否包含某内容
- 判断字典顺序
- 使用 `split` 把一段字符串切成数组
- FRQ 1 Part B 写 String 方法相关代码

---

### 学生易错点

- 用 `==` 比较字符串内容
- `substring` 右边界多取或少取
- 忘记 `indexOf` 找不到时返回 `-1`
- 不理解 `compareTo` 的正负号
- 把 `length()` 写成 `length`
- 不知道 `split` 返回的是 `String[]`

---

### 快速提醒

> String 比内容用 `.equals()`，不要用 `==`。  
> `substring(a, b)` 取的是 `[a, b)`。  
> `split` 返回数组，数组长度用 `.length`。

---

# 第四部分：Class Design 类设计

## 4. Class Creation

**重要性：高**  
**对应考试：Unit 3，10–18%；FRQ 2 固定考 Class Design**

---

## 4.1 类的基本结构

### 必背模板

```java
public class Student
{
    private String name;
    private int score;

    public Student(String n, int s)
    {
        name = n;
        score = s;
    }

    public String getName()
    {
        return name;
    }

    public int getScore()
    {
        return score;
    }
}
```

---

### FRQ 2 必须有

- class header
- private instance variables
- constructor
- methods
- 根据题目 examples 实现行为

---

### 学生易错点

- 忘记 `private`
- constructor 写了返回类型
- constructor 名字和 class 名字不一样
- 局部变量遮蔽 instance variable
- 忘记 return
- 方法签名和题目要求不一致
- 题目要求 `return`，却写成 `System.out.print`

---

### 快速提醒

> Constructor 没有返回类型，连 `void` 都不能写。  
> 题目要求返回值时，要用 `return`，不是 `System.out.print`。

---

## 4.2 Scope and `this`

### 必会内容

```java
private int score;

public Student(int score)
{
    this.score = score;
}
```

---

### 常见考法

- 判断变量作用域
- 判断到底改的是 local variable 还是 instance variable
- 判断 constructor 是否正确初始化对象

---

### 学生易错点

```java
public Student(int s)
{
    int score = s;  // 错：新建了局部变量
}
```

---

### 快速提醒

> `this.score` 指的是这个对象自己的 instance variable。

---

## 4.3 Method Writing and Method Overloading

### 方法结构

```java
public int getScore()
{
    return score;
}
```

---

### Method Overloading

同名方法，参数列表不同：

```java
public void print(int x)
{
}

public void print(String s)
{
}
```

---

### 注意

返回值不同不算 overloading。

```java
public int getValue()
public double getValue()
```

这不是合法 overloading。

---

### 学生易错点

- 只改 return type，以为就是 overloading
- 参数顺序和类型没看清
- 忘记返回值类型
- `void` 方法里写了返回值

---

### 快速提醒

> Overloading 看参数，不看 return type。

---

# 第五部分：对象、引用、null、参数传递

## 5. Objects and References

**重要性：高**  
**对应考试：Unit 1 + Unit 3；MCQ 高频陷阱**

---

## 5.1 Object Reference

### 核心概念

对象变量存的是 reference，不是对象本身。

```java
Dog a = new Dog();
Dog b = a;
```

此时 `a` 和 `b` 指向同一个对象。

---

### 常见考法

- 判断两个变量是否指向同一个对象
- 修改一个 reference 后，另一个 reference 是否受影响
- 判断对象状态变化

---

### 学生易错点

- 以为 `b = a` 会复制一个新对象
- 不理解 aliasing
- 不知道两个 reference 可以指向同一个对象

---

### 快速提醒

> 对象变量装的是“地址”，不是对象本体。

---

## 5.2 `null`

### 核心概念

```java
Dog d = null;
```

`d` 目前没有指向任何对象。

---

### 常见错误

```java
d.getName();  // NullPointerException
```

---

### 安全写法

```java
if (d != null)
{
    d.getName();
}
```

---

### 快速提醒

> 只要对象是 `null`，就不能调用它的方法。

---

## 5.3 Pass-by-Value 参数传递

### 核心概念

Java 永远是 pass-by-value。

对于 primitive：

```java
int x = 5;
change(x);
```

方法里改参数，不会改变原来的 `x`。

对于 object reference：

```java
Dog d = new Dog();
changeDog(d);
```

传进去的是 reference 的 copy。  
方法里可以通过这个 reference 改对象内容，但如果让参数指向新对象，不会改变原变量指向。

---

### 学生易错点

- 以为方法里改 parameter，外面的变量一定变
- 分不清“改对象内容”和“改 reference 指向”

---

### 快速提醒

> Java 传的是值；对象传进去的是 reference 的副本。

---

# 第六部分：基本类型、表达式、Math、Wrapper Classes

## 6. Primitive Types and Expressions

**重要性：中高**  
**对应考试：Unit 1，15–25%；MCQ 高频**

---

## 6.1 int / double / boolean

### 必会内容

```java
int age = 16;
double price = 9.99;
boolean passed = true;
```

---

### 整数除法

```java
5 / 2      // 2
5.0 / 2    // 2.5
```

---

### Casting

```java
(double) total / count
(int) 3.9    // 3
```

---

### Remainder `%`

```java
x % 2 == 0
```

可以判断偶数。

---

### Integer Range and Overflow

`int` 有固定范围：

```java
Integer.MIN_VALUE
Integer.MAX_VALUE
```

如果计算结果超过 `int` 的范围，会发生 integer overflow。

重要：

> Integer overflow 通常不会报错，而是得到一个错误的数值。

例如：

```java
int x = Integer.MAX_VALUE;
x = x + 1;
```

结果不会是一个正常的大整数。

---

### 学生易错点

- `int / int` 得到 int
- cast 的位置错误
- `%` 不会得到小数
- 运算优先级判断错误
- 以为 integer overflow 一定会抛出 exception

---

### 快速提醒

> 想得到小数，除法里至少要有一个 double。  
> Integer overflow 不一定报错，但结果会错。

---

## 6.2 Math Class

### 必会方法

```java
Math.abs(x)
Math.pow(a, b)
Math.sqrt(x)
Math.random()
```

---

### 随机整数公式

生成 `[min, max]`：

```java
(int)(Math.random() * (max - min + 1)) + min
```

---

### 学生易错点

- 忘记 `(int)`
- 范围少 1
- 以为 `Math.random()` 会包含 1
- `Math.pow` 返回 double

---

### 快速提醒

> `Math.random()` 范围是 `[0.0, 1.0)`，包含 0，不包含 1。

---

## 6.3 Wrapper Classes

### 必会内容

```java
Integer x = 5;
Double y = 3.14;
```

Autoboxing：

```java
Integer x = 5;
```

Unboxing：

```java
int n = x;
```

---

### 必会方法

```java
Integer.parseInt("123")
Double.parseDouble("3.14")
```

---

### 学生易错点

- 对 wrapper object 使用 `==` 比较内容
- 忘记 parse 后才可以做数学运算
- 不知道 `Integer` / `Double` 是对象，不是 primitive

---

### 快速提醒

> `Integer` 和 `Double` 是对象；`int` 和 `double` 是 primitive。

---

# 第七部分：Searching / Sorting / Recursion

## 7. Searching Algorithms

**重要性：中**  
**对应考试：Unit 4；MCQ 高频**

---

## 7.1 Linear Search

### 核心概念

从头到尾一个一个找。

```java
for (int i = 0; i < arr.length; i++)
{
    if (arr[i] == target)
    {
        return i;
    }
}
return -1;
```

---

### 常见考法

- 判断返回值
- 判断比较次数
- 找第一个符合条件的元素
- 判断找不到时返回什么

---

### 快速提醒

> Linear search 不要求数组有序。

---

## 7.2 Binary Search

### 核心概念

每次砍掉一半。

前提：

> 数据必须已经有序。

---

### 常见考法

- 判断 mid 的变化
- 判断比较次数
- 判断搜索是否成功
- 判断初始条件是否满足

---

### 学生易错点

- 忘记 binary search 必须有序
- `low` / `high` 更新方向写反
- `while (low <= high)` 写错

---

### 快速提醒

> Binary search 的前提是 sorted。

---

## 8. Sorting Algorithms

**重要性：中**  
**对应考试：Unit 4；MCQ 常考中间状态**

---

## 8.1 Selection Sort

### 核心概念

每一轮找最小值，放到前面。

---

### 中间状态特征

前面一段已经放好了最小的几个元素。

---

### 快速提醒

> Selection sort：找最小，换到前面。

---

## 8.2 Insertion Sort

### 核心概念

像整理扑克牌，把当前元素插入前面已经排好序的部分。

---

### 中间状态特征

前面一段已经有序，但不一定是全局最小的几个。

---

### 快速提醒

> Insertion sort：前面有序，后面还没处理。

---

## 8.3 Merge Sort

### 核心概念

递归地分成小数组，再合并成有序数组。

---

### 常见考法

- 判断分割过程
- 判断合并过程
- 判断某一步后的数组状态

---

### 快速提醒

> Merge sort：先一直拆，再一层层合并。

---

## 9. Recursion

**重要性：中**  
**对应考试：Unit 4；通常出现在 MCQ**

---

### 必会内容

递归必须有：

1. Base case  
2. Recursive call

---

### 常见考法

- 判断递归输出
- 判断返回值
- 判断递归调用次数
- 判断 print 在递归前还是递归后

---

### 学生易错点

- 找不到 base case
- 不知道递归什么时候停
- print 位置判断错
- 没画 call stack，靠脑子硬想

---

### 快速提醒

> 递归题不要空想，画调用栈。

---

# 第八部分：文件、数据、注释、伦理与社会影响

## 10. Text Files and Scanner

**重要性：低到中**  
**对应考试：Unit 4 Topic 4.6**

---

### 必会内容

- 可以用 `Scanner` 读取文本数据
- 读取的数据类型要匹配
- 文件用完后要 close
- 不需要掌握复杂文件路径

---

### 常见 Exception

如果 `Scanner` 读取的数据类型和实际内容不匹配，可能出现：

```java
InputMismatchException
```

例如：程序想读一个 `int`，但文本里是一个不是整数的单词。

---

### 快速提醒

> Scanner 读取的类型必须和数据内容匹配。

---

## 11. Comments and Documentation

**重要性：低到中**

---

### 必会内容

```java
// single-line comment

/*
 multi-line comment
*/
```

---

### 常见考法

- 判断代码意图
- 判断注释是否准确描述代码
- 选择更清晰的程序说明

---

### 快速提醒

> 注释不是把代码翻译一遍，而是解释代码目的。

---

## 12. Ethical and Social Issues Around Data Collection

**重要性：低**

---

### 必会内容

- 数据隐私
- 数据收集风险
- 算法偏差
- 数据是否具有代表性
- 程序员对系统影响负责

---

### 快速提醒

> 数据不公平，算法结果也可能不公平。

---

# 第九部分：FRQ 四大题型考前模板

## FRQ 1：Methods and Control Structures

**7 分**

---

### 常考内容

- 写两个方法，或一个 constructor + 一个方法
- Part A：if / loop / method calls
- Part B：String methods
- 可能需要使用 `substring`、`indexOf`、`equals`、`compareTo` 或 `split`

---

### 考场检查

- 是否按题目要求写 method header
- 是否正确使用 loop
- 是否正确调用已有方法
- 是否正确处理 String
- 是否在 loop 外初始化结果变量
- `return` 是否在正确位置

---

### 快速提醒

> FRQ 1 通常不是语法最难，而是题目规则最多。先读 examples，再写代码。

---

## FRQ 2：Class Design

**7 分**

---

### 必须检查

- class header
- private instance variables
- constructor
- required method
- method behavior 是否符合 examples
- 要 `return` 的地方不要写成 `System.out.print`

---

### 快速模板

```java
public class ClassName
{
    private Type var;

    public ClassName(Type value)
    {
        var = value;
    }

    public ReturnType methodName()
    {
        // code
    }
}
```

---

### 快速提醒

> FRQ 2 是最应该保分的题。结构分不能丢。

---

## FRQ 3：Data Analysis with ArrayList

**5 分**

---

### 必须检查

- 是否使用 `list.size()`
- 是否使用 `list.get(i)`
- 是否错误写成 `list[i]`
- 是否正确遍历
- 如果删除元素，是否避免漏删
- 是否正确调用对象方法
- 是否避免 enhanced for loop 中增删元素

---

### 快速提醒

> ArrayList 题最怕删除时 index 乱掉。

---

## FRQ 4：2D Array

**6 分**

---

### 必须检查

- 行数：`arr.length`
- 列数：`arr[0].length`
- 访问：`arr[r][c]`
- 是否按题目要求逐行或逐列遍历
- 是否避免越界
- 非正方形 2D Array 不能随便交换 row 和 column

---

### 快速提醒

> 2D Array 题先判断：我是按行扫，还是按列扫？

---

# 第十部分：MCQ 高频陷阱总表

| 高频陷阱 | 快速提醒 |
| --- | --- |
| integer division | `int / int` 得到 int |
| casting | cast 的位置会影响结果 |
| operator precedence | 先算括号，再按优先级 |
| boolean expressions | 注意 `&&`、`||`、`!` |
| short-circuit evaluation | 前面能决定结果，后面可能不执行 |
| De Morgan’s Laws | `&&` 和 `||` 要互换 |
| String comparison | 比内容用 `.equals()` |
| substring bounds | 左闭右开 `[start, end)` |
| indexOf result | 找不到返回 `-1` |
| compareTo result | 负数、0、正数分别表示顺序关系 |
| split | 返回 `String[]` |
| array index out of bounds | 最后一个 index 是 `length - 1` |
| ArrayList remove | 删除后元素会移动 |
| enhanced for loop | 不适合在遍历时增删集合大小 |
| object references | 变量存 reference，不是对象本体 |
| aliasing | 两个变量可能指向同一个对象 |
| null | `null` 不能调用方法 |
| method overloading | 看参数，不看 return type |
| scope and shadowing | 小心 local variable 遮蔽 instance variable |
| this keyword | `this.x` 是当前对象的 instance variable |
| pass-by-value | Java 永远是 pass-by-value |
| wrapper classes | `Integer` / `Double` 是对象 |
| integer overflow | 可能不报错，但结果错误 |
| recursion tracing | 找 base case，画 call stack |
| linear search | 不要求有序 |
| binary search | 必须有序 |
| selection sort | 找最小，放前面 |
| insertion sort | 像整理扑克牌 |
| merge sort | 先拆，再合并 |
| 2D array traversal | 行列边界不能写反 |

---

# 第十一部分：最后一天复习优先级

## 必看

1. **Unit 4 数据集合**
   - 1D Array 越界问题
   - ArrayList 倒序删除
   - ArrayList `get(i)` / `size()` / `remove(i)`
   - 2D Array `[r][c]` 和嵌套遍历边界

2. **FRQ 2 Class Design 模板**
   - `private` instance variables
   - constructor 没有返回类型
   - method 要符合题目要求
   - return 不要写成 print

3. **Unit 2 控制流陷阱**
   - `if / else if / else`
   - short-circuit
   - De Morgan’s Laws
   - `==` vs `.equals()`

---

## 快速扫过

1. **String 方法**
   - `substring`
   - `indexOf`
   - `compareTo`
   - `equals`
   - `split`

2. **排序与查找**
   - Binary Search 必须有序
   - Selection Sort 找最小放前面
   - Insertion Sort 像打扑克
   - Merge Sort 先拆再合并

3. **基本类型与表达式**
   - `int / int`
   - casting
   - `%`
   - integer overflow
   - `Integer.MIN_VALUE` / `Integer.MAX_VALUE`

4. **对象和方法**
   - object reference
   - aliasing
   - `null`
   - pass-by-value
   - scope / `this`

---

## 如果时间不够，可以最后再看

1. Text Files and Scanner
2. Recursion 复杂追踪
3. Ethical and Social Issues
4. Comments and documentation

---

# 最后考前提醒

## 写代码前

先看：

1. 题目要求返回什么类型？
2. 有没有已经提供的方法必须调用？
3. examples 里面体现了什么规则？
4. 是处理 String、Array、ArrayList，还是 2D Array？

---

## 写代码时

重点检查：

1. loop 边界有没有越界？
2. `return` 有没有放错位置？
3. String 是否用了 `.equals()`？
4. ArrayList 是否用了 `.get(i)`？
5. 2D Array 是否用了 `[row][col]`？
6. constructor 有没有写返回类型？
7. method signature 是否和题目一致？

---

## 交卷前

最后快速扫一遍：

- 有没有少写 `{}`？
- 有没有少写 `;`？
- 有没有把 `=` 和 `==` 写错？
- 有没有把 `length`、`length()`、`size()` 混用？
- 有没有把 `print` 写成了本该 `return` 的答案？
- 有没有访问 `arr[arr.length]`？
- 有没有在 enhanced for loop 中增删 ArrayList？

---

# 一句话总结

AP CSA 最后冲刺最值得保住的分数来自：

> **循环边界、String 方法、ArrayList 遍历、2D Array 行列、Class Design 结构、对象引用与 null。**

