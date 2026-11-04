---
title: "AP CSA 4.3：数组的创建与访问"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学习了如何用表格组织数据。这一课开始学习如何在 Java 程序中保存一组相关的数据。

如果要记录 30 位学生的成绩，我们不需要声明 `score1`、`score2`……`score30` 这 30 个变量。我们可以使用一个数组（array），再通过编号访问其中的每一个成绩。

> **数组用一个名称管理多个相同类型的数据。理解数组的关键，是分清数组变量、数组对象和数组中的元素。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.3 Array Creation and Access（数组的创建与访问）

## 1. 数组是什么？
* 一个数组保存多个相同类型的值
* 元素可以是 primitive values 或 object references
* 每个元素都有 index（索引）
* Java 数组从 index 0 开始

## 2. 声明与创建
* `int[] scores`：声明数组变量
* `new int[5]`：创建数组对象
* 数组变量保存对数组对象的 reference
* 数组创建后长度固定
* `new` 创建的元素会得到默认值

## 3. 初始化列表
* 用 `{}` 同时创建并填入初始值
* 长度由初始值的数量决定
* 可以创建 primitive arrays 和 object arrays

## 4. 长度与元素访问
* `array.length`：数组长度，不是 method
* `array[index]`：读取或修改指定元素
* 有效索引：`0` 到 `length - 1`
* 越界会产生 `ArrayIndexOutOfBoundsException`

## 5. 数组的实际应用
* index 可以使用 int variable 或表达式
* parallel arrays：相同 index 对应相关数据
* object arrays：先创建引用数组，再逐个创建对象

## 6. AP 代码追踪
* `array[i]`：访问第 i 个元素
* `array[i - 1]`：访问前一个元素
* `array[i + 1]`：访问后一个元素
* 数组可以作为 method argument，也可以作为 return value

</script>
</div>
</div>

# 1. 什么是数组（Array）？

**数组是一种数据结构，可以用一个名称保存多个相同类型的值。**

例如，要保存五位学生的考试成绩：

```java
int[] scores = {95, 88, 92, 76, 100};
```

`scores` 是数组的名称，里面保存了五个 `int` 值。

数组中的每个值叫作一个元素（element）。每个元素都有一个位置编号，叫作索引（index）。

可以把数组想象成一排储物柜：

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Element | 95 | 88 | 92 | 76 | 100 |

**Java 数组从 0 开始编号，而不是从 1 开始。**

- 第一个元素：`scores[0]`
- 第二个元素：`scores[1]`
- 最后一个元素：`scores[4]`

数组可以保存不同种类的同类型数据，例如：

```java
int[] scores;       // int values
double[] prices;    // double values
String[] names;     // String references
Student[] students; // Student references
```

数组中的元素必须是同一种类型，但这个类型既可以是基本数据类型（primitive type），也可以是对象引用（object reference）。

# 2. 声明数组与创建数组

这是本课第一个重要区别：**声明数组变量（declare）不等于创建数组对象（create）。**

## 2.1 声明数组变量

```java
int[] scores;
```

这行代码只是声明了一个名为 `scores` 的数组变量，告诉 Java：它将用来引用一个 `int` 数组。

但此时还没有创建真正的数组，也没有任何元素可以访问。

## 2.2 使用 `new` 创建数组

```java
scores = new int[5];
```

`new int[5]` 才是真正创建数组对象的部分。

它会创建一个可以保存 5 个 `int` 值的数组，并让 `scores` 指向这个数组。

也可以把声明和创建合并成一行：

```java
int[] scores = new int[5];
```

| 代码 | 作用 |
|---|---|
| `int[] scores` | 声明一个数组变量 |
| `new int[5]` | 创建一个长度为 5 的数组对象 |

数组在 Java 中也是一种对象。因此，数组变量保存的是指向数组对象的引用（reference），而不是把整个数组直接放进变量里。

## 2.3 数组创建后，长度固定

```java
int[] scores = new int[5];
```

这个数组创建时长度就是 5。

**数组的长度在创建时确定，之后不能改变。**

如果需要保存更多元素，就需要创建一个新的、更长的数组；不能直接把原数组的长度从 5 改成 6。

# 3. 使用 `new` 创建数组时的默认值

使用 `new` 创建数组时，Java 会自动为每个元素设置默认值（default value）。

| 元素类型 | 默认值 |
|---|---|
| `int` | `0` |
| `double` | `0.0` |
| `boolean` | `false` |
| 引用类型（如 `String`、自定义 class） | `null` |

例如：

```java
int[] scores = new int[4];
String[] names = new String[3];
```

创建后，数组中的值分别是：

```text
scores: [0, 0, 0, 0]

names:  [null, null, null]
```

- `new int[4]` 创建了 4 个 `int` 元素，每个元素初始值为 `0`。
- `new String[3]` 创建了 3 个引用位置，每个位置初始值为 `null`。

`null` 表示这个位置目前没有引用任何 String 对象。

**特别容易考：** `new Student[3]` 也不会自动创建三个 Student 对象。它只创建一个长度为 3 的数组，里面的三个元素都是 `null`。对象需要另外创建，后面会详细讲。

# 4. 使用初始化列表创建数组（Initializer List）

除了使用 `new` 指定数组长度，我们还可以在创建数组时直接提供初始值。

```java
int[] scores = {95, 88, 92, 76, 100};

String[] names = {"Mia", "Leo", "Eva"};
```

这种写法叫作初始化列表（initializer list）。

它有两个特点：

1. 使用大括号 `{}` 列出数组中的初始值。
2. 不需要手动指定长度，Java 会根据初始值的数量确定数组长度。

例如：

```java
int[] scores = {95, 88, 92};
```

这个数组的长度就是 3。

## 两种创建方式对比

| 创建方式 | 示例 | 适合什么情况 |
|---|---|---|
| 使用 `new` 和长度 | `int[] scores = new int[5];` | 先确定元素数量，之后再逐个赋值 |
| 使用初始化列表 | `int[] scores = {95, 88, 92};` | 创建时已经知道所有初始值 |

对于基本数据类型，初始化列表会把给出的值放进数组。

对于对象类型，例如 `String`，数组中保存的是对象引用。使用初始化列表时，数组会保存这些 String 值对应的对象引用，不需要先创建一个全是 `null` 的数组，再逐个填入。

# 5. 数组的长度（length）

每个数组都有一个 `length` 属性，用来表示数组中有多少个元素。

```java
int[] scores = {95, 88, 92, 76, 100};

System.out.println(scores.length);
```

输出：

```text
5
```

## `length` 不是 method

这是一个容易和 String 混淆的地方：

| 对象 | 获取长度的写法 |
|---|---|
| Array | `scores.length` |
| String | `name.length()` |

数组的 `length` 是一个属性（instance variable），不是 method，所以不需要括号。

它是一个 `public final int`：

- `public`：可以直接读取。
- `final`：创建数组后，这个长度不能被修改。

因此，正确写法是 `scores.length`，不要把数组的 `length` 和 String 的 `length()` 混为一谈。

# 6. 使用 index 访问和修改元素

我们使用方括号 `[]` 和索引（index）访问数组中的元素。

```java
int[] scores = {95, 88, 92, 76, 100};

System.out.println(scores[0]); // 95
System.out.println(scores[2]); // 92
```

也可以通过索引修改元素：

```java
scores[1] = 97;
```

修改后：

```text
[95, 97, 92, 76, 100]
```

`array[index]` 可以像普通变量一样使用：

- 放在等号右边：读取元素。
- 放在等号左边：修改元素。

## 6.1 有效索引范围

假设：

```java
int[] scores = new int[5];
```

数组长度是 5，但有效索引是：

```text
0, 1, 2, 3, 4
```

因此：

- 第一个 index：`0`
- 最后一个 index：`scores.length - 1`
- 有效范围：`0` 到 `scores.length - 1`

如果访问不存在的位置，例如：

```java
System.out.println(scores[5]);
```

就会产生 `ArrayIndexOutOfBoundsException`。

因为长度为 5 的数组只有索引 0–4，没有索引 5。

**记住：数组长度是元素的数量，最后一个索引永远比长度小 1。**

## 6.2 索引可以使用变量或表达式

索引不一定要直接写数字，也可以使用 `int` 变量：

```java
int index = 3;

System.out.println(scores[index]);
```

也可以使用表达式：

```java
scores[i]
scores[i - 1]
scores[i + 1]
```

这些写法在 AP 代码追踪中很常见：

- `array[i]`：访问索引为 `i` 的元素。
- `array[i - 1]`：访问前一个元素。
- `array[i + 1]`：访问后一个元素。

使用这些表达式时，要特别注意最终计算出的索引是否在有效范围内。

# 7. Parallel Arrays：平行数组

有时候，我们需要同时保存两组相关数据。

例如，记录学生姓名和成绩：

```java
String[] names = {"Jamal", "Emily", "Mateo"};
int[] scores = {99, 98, 88};
```

这两个数组叫作平行数组（parallel arrays）。

它们通过相同的 index 对应起来：

| Index | `names` | `scores` |
|---|---|---:|
| 0 | Jamal | 99 |
| 1 | Emily | 98 |
| 2 | Mateo | 88 |

例如：

```java
System.out.println(names[2]);
System.out.println(scores[2]);
```

这两行代码访问的是同一个学生 Mateo 的姓名和成绩。

**平行数组最重要的规则：不同数组中相同的 index 必须对应同一条记录。**

如果只调整 `names` 的顺序，却没有同步调整 `scores`，姓名和成绩就会对应错误。

# 8. Array of Objects：对象数组

数组不仅可以保存 `int`、`double` 等基本类型，也可以保存我们自己创建的对象。

例如，保存三个 Student 对象：

```java
Student[] students = new Student[3];
```

这行代码创建了一个长度为 3 的 Student 引用数组。

但是，**它还没有创建任何 Student 对象！**

创建后，数组的状态是：

```text
students
    |
    v
+--------+--------+--------+
|  null  |  null  |  null  |
+--------+--------+--------+
    0        1        2
```

三个位置目前都没有指向 Student 对象。

## 8.1 逐个创建对象并放入数组

我们需要使用 constructor 单独创建对象，再把对象引用放到对应的数组位置：

```java
Student[] students = new Student[3];

students[0] = new Student("Mia");
students[1] = new Student("Leo");
students[2] = new Student("Eva");
```

此时，数组中的每个元素才真正保存了一个 Student 对象的引用：

```text
students 数组
+-----------+-----------+-----------+
| ref       | ref       | ref       |
+-----------+-----------+-----------+
     |           |           |
     v           v           v
  Student     Student     Student
   "Mia"        "Leo"       "Eva"
```

数组的三个位置保存的是三个对象的引用；Student 对象本身是分别创建的。

现在就可以通过数组元素调用对象的方法：

```java
students[0].printInfo();
students[1].printInfo();
students[2].printInfo();
```

理解这行代码：

```java
students[0].printInfo();
```

1. `students[0]`：先找到数组中索引为 0 的元素。
2. 这个元素保存着 Mia 对象的引用。
3. `.printInfo()`：调用 Mia 对象的 method。

## 8.2 本课最重要的区别

| 代码 | 实际发生的事情 |
|---|---|
| `new Student[3]` | 创建一个长度为 3 的数组，三个元素初始值都是 `null` |
| `new Student("Mia")` | 创建一个 Student 对象 |
| `students[0] = new Student("Mia")` | 创建 Mia 对象，并把它的引用存入数组的第 0 个位置 |
| `students[0].printInfo()` | 调用第 0 个位置所引用对象的 method |

这也是本课最值得反复练习的地方：

**创建对象数组（array of objects），不等于创建数组中的每一个对象。**

## 8.3 本课六个 AP 核心要求

College Board 将本课的要求归在 **AP 4.3.A：使用一维数组表示相关数据集合**。

| AP 知识点 | 必须掌握的内容 |
|---|---|
| **4.3.A.1** | 数组保存多个相同类型的值；元素可以是基本数据类型的值，也可以是对象引用。 |
| **4.3.A.2** | 数组长度在创建时确定，之后不能改变；使用 `array.length` 获取长度。 |
| **4.3.A.3** | 使用 `new` 创建数组时，元素会自动获得对应类型的默认值。 |
| **4.3.A.4** | 可以使用初始化列表 `{}` 创建并初始化数组。 |
| **4.3.A.5** | 使用方括号和索引 `array[index]` 访问或修改一维数组元素。 |
| **4.3.A.6** | 有效索引从 `0` 到 `length - 1`；超出范围会产生 `ArrayIndexOutOfBoundsException`。 |

# 9. AP Code Tracing：数组代码追踪

AP 题目经常会把数组作为 method 的参数，或者在方括号中使用数学表达式。

不要急着看答案。先确定索引，再逐步追踪元素的变化。

## Example 1：修改一个指定元素

```java
int[] array = {4, 10, 15};

public void mystery(int[] a, int i)
{
    a[i] = a[i - 1] * 2;
}
```

调用：

```java
mystery(array, 2);
```

逐步分析：

1. `i = 2`。
2. 左边 `a[i]` 就是 `a[2]`。
3. 右边 `a[i - 1]` 就是 `a[1]`。
4. `a[1]` 的值是 10，所以 `a[2] = 10 * 2 = 20`。

最终数组：

| Index | 0 | 1 | 2 |
|---|---:|---:|---:|
| Original | 4 | 10 | 15 |
| After method call | 4 | 10 | 20 |

**注意：方法只修改了 `a[2]`，并没有把整个数组中的所有元素乘以 2。**

## Example 2：`i + 1`、参数与返回数组

```java
public int[] mystery(int[] a, int i, int value)
{
    a[i + 1] = a[i] + value;
    return a;
}
```

调用：

```java
int[] array1 = {5, 10, 15};
int[] array2 = mystery(array1, 1, 10);
```

逐步分析：

1. `i = 1`，`value = 10`。
2. 左边 `a[i + 1]` 就是 `a[2]`。
3. 右边 `a[i] + value` 就是 `a[1] + 10`。
4. `a[1]` 的值是 10，所以 `a[2] = 20`。
5. 方法返回数组引用 `a`，并赋值给 `array2`。

最终：

```text
array1 = {5, 10, 20}
array2 = {5, 10, 20}
```

这里还有一个重要的引用概念：

**`array1` 和 `array2` 指向同一个数组对象。**

因为数组是对象，传入 method 的是数组引用的值。方法通过参数 `a` 修改数组元素，原来的数组内容也会改变。

# 10. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 认为 `int[] scores;` 已经创建了数组 | 这只是声明变量，还需要创建数组对象 |
| 认为 `new int[5]` 的索引是 1–5 | Java 数组索引从 0 开始，范围是 0–4 |
| 认为最后一个索引等于 `length` | 最后一个索引是 `length - 1` |
| 把 `array.length` 写成 `array.length()` | 数组的 `length` 是属性，不是 method |
| 认为数组长度可以直接修改 | 数组创建后长度固定 |
| 认为 `new Student[3]` 创建了三个 Student 对象 | 它只创建了三个引用位置，初始值都是 `null` |
| 认为数组越界只会返回一个空值 | 越界会产生 `ArrayIndexOutOfBoundsException` |
| 认为修改 method 参数中的数组元素不会影响原数组 | 数组是对象，参数引用可以指向原数组；通过它修改元素会改变原数组内容 |

# 11. Mini Practice：小练习

## Practice 1：声明与创建

下面哪一行代码真正创建了一个长度为 8 的 `double` 数组？

A. `double prices;`

B. `double[] prices;`

C. `double[] prices = new double[8];`

**答案：C**

解释：A 是普通变量声明，B 是数组变量声明，只有 C 使用 `new double[8]` 创建了数组对象。

## Practice 2：默认值

执行下面的代码后，`names` 数组中的元素是什么？

```java
String[] names = new String[3];
```

A. `["", "", ""]`

B. `[null, null, null]`

C. `["null", "null", "null"]`

**答案：B**

解释：引用类型数组使用 `new` 创建时，每个元素默认值是 `null`。`null` 不是空字符串 `""`，也不是字符串 `"null"`。

## Practice 3：索引与长度

```java
int[] scores = {80, 90, 95, 100};
```

下面哪个表达式可以访问最后一个元素？

A. `scores[4]`

B. `scores[scores.length]`

C. `scores[scores.length - 1]`

**答案：C**

解释：数组长度是 4，有效索引是 0–3，所以最后一个元素的索引是 `4 - 1`。

## Practice 4：对象数组

执行下面的代码后，哪项描述正确？

```java
Student[] students = new Student[2];
```

A. 创建了两个 Student 对象。

B. 创建了一个长度为 2 的数组，两个元素初始值都是 `null`。

C. 创建了一个 Student 对象，数组中的两个元素都指向它。

**答案：B**

解释：`new Student[2]` 创建的是数组对象，不会自动调用两次 Student constructor。

## Practice 5：代码追踪

```java
int[] nums = {3, 6, 9, 12};

public void change(int[] a, int i)
{
    a[i + 1] = a[i] * 2;
}
```

调用：

```java
change(nums, 1);
```

最终数组是什么？

A. `{3, 6, 12, 12}`

B. `{3, 12, 9, 12}`

C. `{6, 12, 18, 24}`

**答案：A**

解释：

- `i = 1`
- `a[i + 1]` 是 `a[2]`
- `a[i] * 2` 是 `a[1] * 2 = 6 * 2 = 12`
- 因此只修改 `a[2]`，最终是 `{3, 6, 12, 12}`。

# Unit 4.3 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| array | 数组；保存多个相同类型元素的数据结构 |
| element | 元素；数组中的一个值 |
| index | 索引；元素在数组中的位置编号 |
| declare | 声明；指定变量的类型和名称 |
| create | 创建；在内存中建立数组对象 |
| initialize | 初始化；为数组元素设置初始值 |
| initializer list | 初始化列表；使用 `{}` 提供数组初始值 |
| length | 长度；数组包含的元素数量 |
| default value | 默认值；数组创建时元素自动获得的初始值 |
| reference | 引用；指向对象的值 |
| parallel arrays | 平行数组；使用相同索引保存相互对应的数据 |
| ArrayIndexOutOfBoundsException | 数组索引越界异常；访问无效索引时产生 |
| array of objects | 对象数组；元素保存对象引用的数组 |

---

**下一课预告：** 4.3 学会了创建数组和访问单个元素。4.4 将进一步学习如何使用循环（loops）逐个遍历数组中的元素。
