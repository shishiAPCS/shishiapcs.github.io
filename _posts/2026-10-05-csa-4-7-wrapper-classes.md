---
title: "AP CSA 4.7：包装类（Integer 与 Double）"
layout: post
categories: media
render_with_liquid: false
---

在 4.6 中，我们学会了从文本文件读取数据，以及用 `split(",")` 将一行 CSV 数据拆成 `String[]`。但这带来一个新问题：

```java
String score = "85";
System.out.println(score + 5);
```

输出是 `855`，而不是 `90`。因为 `score` 是 **String（文本）**，`+` 在这里执行的是字符串连接，而不是数值加法。

本课将解决两个相互关联的问题：**如何在基本类型与对象类型之间转换？如何把数字形式的 String 转成真正可以计算的数值？**

> **三个核心方向：`int` → `Integer`（autoboxing），`Integer` → `int`（unboxing），`"85"` → `85`（parsing）。它们看起来相似，但实际上是不同的操作。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.7 包装类<br>Wrapper Classes: Integer and Double

## 1. 为什么需要包装类？
* `int` / `double`：primitive types（基本类型）
* `Integer` / `Double`：wrapper classes（包装类）
* 包装对象可以用于需要 object 的位置
* 在 `java.lang` 中，不需要额外 import
* 包装对象是 immutable（不可变的）

## 2. Autoboxing（自动装箱）
* `int` → `Integer`
* `double` → `Double`
* 赋值给对应 wrapper 变量
* 传入需要 wrapper object 的 method

## 3. Unboxing（自动拆箱）
* `Integer` → `int`
* `Double` → `double`
* 赋值给对应 primitive 变量
* 传入需要 primitive 的 method
* 修改变量，不等于修改 immutable 对象

## 4. Parsing（文本转数值）
* `Integer.parseInt("85")` → `int 85`
* `Double.parseDouble("3.5")` → `double 3.5`
* String 不是数字，不能直接数值计算
* CSV：`split()` → String → parse → 算法

## 5. AP 考点与教材补充
* AP 4.7.A.1–A.5：不可变性、装箱、拆箱、两个 parse 方法
* 读懂参数与赋值中的自动转换
* Runestone 补充：`MIN_VALUE` / `MAX_VALUE` 与 overflow
* 为 4.8 `ArrayList<Integer>` 做准备

</script>
</div>
</div>

# 1. 第一题：看起来都是 85，为什么结果不一样？

```java
String a = "85";
int b = 85;

System.out.println(a + 5);
System.out.println(b + 5);
```

输出是什么？

A. `90` 和 `90`  
B. `855` 和 `90`  
C. `855` 和 `855`

**答案：B。**

- `a` 是 String，所以 `a + 5` 把 `5` 接在文本末尾，得到 `"855"`。
- `b` 是 int，所以 `b + 5` 执行数值加法，得到 `90`。

同样显示成“85”，**数据类型不同，执行的操作就可能不同**。本课学习的包装类和 `parse` 方法，就是为了正确处理这些类型。

# 2. Wrapper Classes：什么是包装类？

我们以前学过两种基本数据类型：

```java
int score = 85;
double gpa = 3.5;
```

`int` 和 `double` 是 **primitive types（基本数据类型）**，不是对象。

Java 提供了与它们对应的包装类（wrapper classes），可以使用对象来表示这些数值：

| 基本类型（primitive） | 对应包装类（wrapper class） | 包装类变量示例 |
|---|---|---|
| `int` | `Integer` | `Integer score = 85;` |
| `double` | `Double` | `Double gpa = 3.5;` |

**为什么要有两套类型？**

因为有些 Java 功能需要的是对象引用，而不是基本类型的值。例如，下一课的 `ArrayList` 保存的是对象引用，所以存储整数时需要使用 `Integer`，而不是 `int`。

```java
// 下一课会学习的类型：ArrayList<Integer>
```

现在先记住这个动机即可，不需要提前学习 `ArrayList` 的方法。

## 2.1 大小写有意义

`int` 和 `Integer` 不是同一个类型；`double` 和 `Double` 也不是。

- `int`、`double`：Java 关键字，首字母小写。
- `Integer`、`Double`：类名，首字母大写。

它们位于 `java.lang` 包中，Java 会自动导入这个包，因此**使用 `Integer` 和 `Double` 不需要写额外的 `import`**。

## 2.2 包装对象是不可变的（Immutable）

`Integer` 和 `Double` 对象创建后，它们所表示的数值不能被修改。这叫作 **immutable（不可变的）**。

看下面的例子：

```java
Integer first = 10;
Integer second = first;

first = 20;

System.out.println(first);  // 20
System.out.println(second); // 10
```

这段代码并没有把原来表示 `10` 的对象改成 `20`。

它实际做的是：

1. `first` 最初引用一个表示 `10` 的包装对象。
2. `second = first`：`second` 也引用这个对象。
3. `first = 20`：让 `first` 改为引用表示 `20` 的包装对象。
4. `second` 仍然引用原来表示 `10` 的对象。

| 比较项目 | 是否发生改变？ |
|---|---|
| 原来表示 `10` 的 Integer 对象中的数值 | **没有改变** |
| `first` 变量保存的引用 | **改变**，现在表示 `20` |
| `second` 变量保存的引用 | **没有改变**，仍表示 `10` |

**核心理解：给包装类变量重新赋值，可能改变它指向哪个对象，但不会修改原来包装对象内部的数值。**

这也与前面学习的对象引用概念一致。

# 3. Autoboxing：自动装箱

**Autoboxing（自动装箱）**：Java 自动把基本类型的值转换成对应的包装类对象。

```java
int score = 85;
Integer wrappedScore = score; // autoboxing: int → Integer

double gpa = 3.5;
Double wrappedGpa = gpa;     // autoboxing: double → Double
```

这里没有显式调用 constructor。编译器会自动处理类型转换。

你可以把它想成：**把一个基本类型的数值装进可以作为对象使用的包装形式**。

## 3.1 什么时候会自动装箱？

College Board 明确列出了两种常见情况。

**情况一：赋值给对应的包装类变量**

```java
Integer points = 90;  // int → Integer
Double rate = 2.5;    // double → Double
```

**情况二：传给参数类型是包装类的方法**

```java
public static void printPoints(Integer points)
{
    System.out.println(points);
}
```

调用：

```java
printPoints(90);
```

虽然传入的 `90` 是 `int`，但方法参数需要 `Integer`，Java 会自动装箱。

**不用手动把 `90` 转成 `Integer` 才能调用方法。**

# 4. Unboxing：自动拆箱

**Unboxing（自动拆箱）**：Java 自动把包装类对象转换成对应的基本类型数值。

例如：

```java
Integer wrappedScore = 85;
int score = wrappedScore; // unboxing: Integer → int

Double wrappedGpa = 3.5;
double gpa = wrappedGpa;  // unboxing: Double → double
```

## 4.1 什么时候会自动拆箱？

College Board 也明确列出了两种常见情况。

**情况一：赋值给对应的基本类型变量**

```java
Integer points = 90;
int result = points; // Integer → int
```

**情况二：传给参数类型是基本类型的方法**

```java
public static void showNextScore(int score)
{
    System.out.println(score + 1);
}
```

调用：

```java
Integer points = 90;
showNextScore(points);
```

方法参数要求 `int`，而 `points` 是 `Integer`。Java 自动拆箱，然后执行加法。

输出：

```text
91
```

## 4.2 自动装箱与拆箱：放在一起对比

| 转换方向 | 名称 | 例子 |
|---|---|---|
| `int` → `Integer` | **Autoboxing** | `Integer a = 5;` |
| `Integer` → `int` | **Unboxing** | `int b = a;` |
| `double` → `Double` | **Autoboxing** | `Double x = 2.5;` |
| `Double` → `double` | **Unboxing** | `double y = x;` |

最简单的记忆方式：

- **Boxing**：基本类型 → 包装对象。
- **Unboxing**：包装对象 → 基本类型。

## 4.3 AP Code Tracing：包装对象会不会被修改？

```java
Integer a = 8;
Integer b = a;

a = a + 2;

System.out.println(a);
System.out.println(b);
```

输出：

```text
10
8
```

关键是：

1. 在 `a + 2` 中，Java 可以把 `a` 自动拆箱为 `int 8`，再计算 `8 + 2 = 10`。
2. 计算出的数值再被自动装箱，赋值给 `a`。
3. 原来表示 `8` 的 Integer 对象**没有被修改**，`b` 仍然引用它。

因此，**即使包装类变量参与算术运算，也不代表包装对象内部的值变成了新数字**。

# 5. Parsing：把 String 转成真正的数值

自动装箱和拆箱处理的是**基本类型与包装类**之间的转换。

但如果数据原本是字符串：

```java
String score = "85";
```

就需要一种不同的操作：**parsing（解析）**。

Java 提供了两个 AP 必须掌握的类方法：

| 方法 | 输入 | 返回类型 | 示例结果 |
|---|---|---|---|
| `Integer.parseInt(String s)` | 表示整数的 String | `int` | `Integer.parseInt("85")` → `85` |
| `Double.parseDouble(String s)` | 表示浮点数的 String | `double` | `Double.parseDouble("3.5")` → `3.5` |

注意：**这两个方法返回的是基本类型 `int` / `double`，不是 `Integer` / `Double` 对象。**

## 5.1 为什么必须 parse？

```java
String scoreText = "85";

System.out.println(scoreText + 5);
System.out.println(Integer.parseInt(scoreText) + 5);
```

输出：

```text
855
90
```

第一行是字符串连接；第二行先把 `"85"` 解析为整数 `85`，再执行加法。

## 5.2 parseInt 和 parseDouble 不要选错

```java
int age = Integer.parseInt("16");          // 16
double gpa = Double.parseDouble("3.75"); // 3.75
```

如果写：

```java
int gpa = Integer.parseInt("3.75");
```

程序会抛出 `NumberFormatException`，因为 `"3.75"` 不是合法的 `int` 文本。

**`parseInt()` 不会把 `"3.75"` 自动截断成 `3`。** 想读取小数应使用 `Double.parseDouble()`。

## 5.3 `parse` 不等于 autoboxing

这是本课最值得认真分清的三个转换：

| 原始数据 | 转换代码 | 转换后 |
|---|---|---|
| String `"85"` | `Integer.parseInt("85")` | 基本类型 `int 85` |
| 基本类型 `int 85` | `Integer n = 85;` | 包装类引用 `Integer` |
| 包装类 `Integer n` | `int x = n;` | 基本类型 `int` |

如果这样写：

```java
Integer points = Integer.parseInt("85");
```

也完全合法，但**实际发生了两步**：

1. `Integer.parseInt("85")` 返回 `int 85`。
2. `int 85` 自动装箱，赋值给 `Integer points`。

# 6. 与 4.6 连接：CSV 数据怎样变成可计算的数字？

这部分延续上一课的文件读取思路。`Scanner` 读取某行文字后，我们可能先使用 `split(",")` 拆出字段，再把数字字段解析成数值。

## 6.1 从一行 CSV 中读取成绩与 GPA

假设文件中的一行是：

```text
Mia,85,3.5
```

对应的 Java 代码：

```java
String line = "Mia,85,3.5";
String[] fields = line.split(",");

String name = fields[0];
int score = Integer.parseInt(fields[1]);
double gpa = Double.parseDouble(fields[2]);

System.out.println(name);
System.out.println(score + 5);
System.out.println(gpa);
```

输出：

```text
Mia
90
3.5
```

逐步理解：

| 表达式 | 结果 | 类型 |
|---|---|---|
| `fields[0]` | `"Mia"` | String |
| `fields[1]` | `"85"` | String |
| `Integer.parseInt(fields[1])` | `85` | int |
| `fields[2]` | `"3.5"` | String |
| `Double.parseDouble(fields[2])` | `3.5` | double |

`split()` 得到的每个字段都是 String。**只有执行相应的转换后，数字字段才能按数值参与计算。**

## 6.2 AP 风格整合题：从多行成绩记录中计算总分

假设已经从文件中读出三行记录，并保存在一个 String 数组中（本题不要求重新编写文件读取代码）：

```java
String[] records = {"Mia,85", "Leo,93", "Eva,76"};
int total = 0;

for (String record : records)
{
    String[] fields = record.split(",");
    total += Integer.parseInt(fields[1]);
}

System.out.println(total);
```

输出：

```text
254
```

如何追踪？

| 循环轮次 | `record` | `fields[1]` | 转换成 int | 累计 `total` |
|---|---|---|---:|---:|
| 1 | `"Mia,85"` | `"85"` | 85 | 85 |
| 2 | `"Leo,93"` | `"93"` | 93 | 178 |
| 3 | `"Eva,76"` | `"76"` | 76 | 254 |

这段代码并没有使用新算法；它把已经学过的知识接起来了：

**String 数组 → 遍历 → split → parseInt → 累加器**。

# 7. Runestone 教材补充：Integer 的最大值与最小值

Runestone 4.7.1 还展示了 `Integer` 类提供的两个常量：

```java
Integer.MIN_VALUE  // -2147483648
Integer.MAX_VALUE  //  2147483647
```

Java 的 `int` 是 32 位有符号整数，因此能表示的数值有上下限。

```java
System.out.println(Integer.MAX_VALUE + 1);
System.out.println(Integer.MIN_VALUE - 1);
```

输出：

```text
-2147483648
2147483647
```

- 最大值再加 1，会回绕到最小值：**overflow（溢出）**。
- 最小值再减 1，会回绕到最大值：教材称之为 **underflow**。

`MIN_VALUE` / `MAX_VALUE` 也可以用作某些最值算法的初始值。例如，找最大值时可以把初始值设成 `Integer.MIN_VALUE`，这样任意合法的 `int` 元素都不会比它小。

**考试范围提醒：** 上述常量和溢出示例出现在 Runestone 教材中，但 College Board 4.7.A.1–A.5 的五项明确要求主要集中于包装类不可变性、装箱/拆箱、`parseInt()` 和 `parseDouble()`。因此这里作为简短教材补充，不扩展到二进制补码的推导。

另外，Runestone 还展示了旧式写法 `new Integer(2)`、`new Double(3.5)`，以及 `intValue()`、`doubleValue()`。现代 Java 中旧式包装类构造器已弃用；在本课主要使用自动装箱与拆箱即可。后面两个取值方法不是 CED 4.7 列出的必备 Quick Reference 方法。

# 8. AP Exam Focus：五项核心考点

| 官方代码 | 要求 | 学生必须能够判断什么？ |
|---|---|---|
| **4.7.A.1** | `Integer`、`Double` 属于 `java.lang`，对象 immutable | 重新给变量赋值不会修改原包装对象；不需要额外 import |
| **4.7.A.2** | Autoboxing | 把 `int` / `double` 赋给对应包装类变量，或传给需要包装类参数的方法 |
| **4.7.A.3** | Unboxing | 把包装类赋给对应基本类型变量，或传给需要基本类型参数的方法 |
| **4.7.A.4** | `Integer.parseInt(String s)` | 将合法的整数文本转换成 `int` |
| **4.7.A.5** | `Double.parseDouble(String s)` | 将合法的浮点数文本转换成 `double` |

College Board 在本课建议的技能为 **2.B：编写涉及数据抽象的程序代码**。同时，学习目标 4.7.A 也要求学生能够根据使用这些对象的代码判断结果。

## 考试时先问自己三个问题

1. **现在是什么类型？** `String`、primitive，还是 wrapper object？
2. **正在发生什么转换？** Parsing、autoboxing，还是 unboxing？
3. **改变的是谁？** 是局部变量保存的值/引用，还是原包装对象？（包装对象是不可变的。）

# 9. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 把 `int` 和 `Integer` 当成完全相同的类型 | 一个是 primitive，一个是 wrapper class |
| 把 `Integer` 写成 `integer` | Java 区分大小写，类名首字母要大写 |
| 认为 `Integer x = 5;` 需要自己手动创建对象 | Java 会自动装箱 |
| 认为 `int y = x;`（x 是 Integer）无法运行 | Java 会自动拆箱 |
| 认为 `x = x + 1` 修改了原 Integer 对象 | 计算后变量得到新值对应的引用，原对象不变 |
| 把 `"85" + 5` 当成整数加法 | String 与数值相加会进行字符串连接，得到 `"855"` |
| 认为 `parseInt()` 返回 `Integer` 对象 | 它返回的是基本类型 `int` |
| 用 `Integer.parseInt("3.5")` 读取小数 | 应使用 `Double.parseDouble("3.5")` |
| 认为 `Integer`、`Double` 需要像 `Scanner` 一样 import | 两者在 `java.lang`，自动可用 |

# 10. Mini Practice：小练习

## Practice 1：Autoboxing 与 Unboxing

```java
Integer a = 12;
int b = a;
Double c = 2.5;
double d = c;
```

哪一项描述正确？

A. `a` 和 `c` 使用 autoboxing；`b` 和 `d` 使用 unboxing。  
B. 四个赋值全部使用 autoboxing。  
C. 四个赋值全部使用 unboxing。

**答案：A。** 基本类型转包装类是装箱，包装类转基本类型是拆箱。

## Practice 2：Immutable Objects

```java
Integer x = 6;
Integer y = x;
x = x + 3;

System.out.println(x + " " + y);
```

输出是什么？

A. `9 9`  
B. `6 6`  
C. `9 6`

**答案：C。** `x` 的计算结果是 9，重新赋给 `x`；`y` 仍然引用原来表示 6 的对象。原 Integer 对象不会被修改。

## Practice 3：String 与数字

```java
String s = "24";
System.out.println(s + 6);
System.out.println(Integer.parseInt(s) + 6);
```

输出是什么？

A. `246` 和 `30`  
B. `30` 和 `30`  
C. `246` 和 `246`

**答案：A。** 第一行进行字符串连接，第二行先解析成 `int`，再执行加法。

## Practice 4：哪个 parse 方法合适？

```java
String price = "12.75";
```

要把 `price` 转换成可用于计算的数值，应该写什么？

A. `int value = Integer.parseInt(price);`  
B. `double value = Double.parseDouble(price);`  
C. `double value = Double(price);`

**答案：B。** `"12.75"` 是小数文本，应该用 `Double.parseDouble()`，结果类型是 `double`。

## Practice 5：方法参数中的自动转换

假设有两个方法：

```java
public static void showA(Integer n)
{
    System.out.println(n);
}

public static void showB(int n)
{
    System.out.println(n + 1);
}
```

调用：

```java
int first = 5;
Integer second = 8;

showA(first);
showB(second);
```

输出是什么？

A. `5` 和 `9`  
B. `5` 和 `8`  
C. 编译错误，因为两种参数都不匹配。

**答案：A。** `showA(first)` 发生 autoboxing；`showB(second)` 发生 unboxing，然后 `8 + 1 = 9`。

## Practice 6：CSV + Parsing + 数组遍历

```java
String[] records = {"Ava,70", "Ben,85", "Cia,95"};
int count = 0;

for (String record : records)
{
    String[] parts = record.split(",");
    int score = Integer.parseInt(parts[1]);

    if (score >= 80)
    {
        count++;
    }
}

System.out.println(count);
```

输出是什么？

A. `1`  
B. `2`  
C. `3`

**答案：B。** 解析后的成绩依次是 70、85、95，后两项满足 `score >= 80`，所以 `count` 是 2。

# Unit 4.7 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| wrapper class | 包装类；使用对象表示基本类型数值的类 |
| primitive type | 基本数据类型；例如 `int`、`double` |
| `Integer` | `int` 对应的包装类 |
| `Double` | `double` 对应的包装类 |
| immutable | 不可变的；对象创建后其内部数值不能修改 |
| autoboxing | 自动装箱；基本类型转换为对应的包装类对象 |
| unboxing | 自动拆箱；包装类对象转换为对应的基本类型值 |
| parsing | 解析；把符合格式的文本转换成相应的数据 |
| `Integer.parseInt()` | 把整数形式的 String 转换成 `int` |
| `Double.parseDouble()` | 把数字形式的 String 转换成 `double` |
| `Integer.MIN_VALUE` | `int` 能表示的最小值（Runestone 补充） |
| `Integer.MAX_VALUE` | `int` 能表示的最大值（Runestone 补充） |
| overflow | 整数溢出；超过最大可表示数值时发生回绕 |

---

**下一课预告：** 4.8 将正式学习 `ArrayList`。我们会看到为什么 `ArrayList<Integer>` 使用包装类而不是 `int`，以及 `ArrayList` 与普通数组在长度和操作方法上有什么区别。

**参考资料：**

- [Runestone CSAwesome2 — 4.7 Wrapper Classes - Integer and Double](https://runestone.academy/ns/books/published/csawesome2/topic-4-7-wrapper-classes.html?mode=browsing)
- [College Board — AP Computer Science A CED, Effective Fall 2025（Topic 4.7，印刷页 108–109）](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
