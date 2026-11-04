---
title: "AP CSA 4.4：数组遍历"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学习了如何创建数组，以及如何通过 index 访问单个元素。这一课要解决一个更实际的问题：

**如果数组里有 100 个元素，难道要一个一个写出 `array[0]`、`array[1]`、`array[2]` 吗？**

当然不需要。我们可以使用循环（loop），让程序自动访问数组中的元素，并对它们进行处理。

> **数组遍历（array traversal）就是使用循环，按顺序访问数组中的全部元素，或其中一部分元素。理解本课的关键，是掌握 indexed loop 和 enhanced for loop 的区别。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.4 Array Traversals（数组遍历）

## 1. 什么是数组遍历？
* 使用 repetition statements 访问数组元素
* 可以访问全部元素，也可以访问按顺序排列的一部分元素
* 可以读取、打印、比较或修改元素

## 2. Indexed for / while loop
* 使用 index 访问元素：`array[i]`
* 从 `i = 0` 开始
* 条件通常是 `i < array.length`
* 每轮更新 index：`i++`
* while loop 也可以完成相同遍历

## 3. 控制遍历范围
* 全部元素：`0` 到 `length - 1`
* 前几个元素：同时限制 `i < array.length` 和目标数量
* 从中间到末尾：从 `array.length / 2` 开始
* 每隔一个元素：`i += 2`
* 反向遍历：从 `length - 1` 开始，使用 `i--`
* 注意 off-by-one errors

## 4. Enhanced for loop
* 语法：`for (type item : array)`
* 不需要 index，依次访问每个元素
* 循环变量每轮得到当前元素的 copy
* 重新给循环变量赋值，不会改变数组元素
* 适合访问全部元素，不需要 index，也不需要替换元素值

## 5. 对象数组与 enhanced for
* 循环变量得到的是对象引用的 copy
* 调用 setter / mutator method 可以修改对象属性
* 把循环变量指向新对象，不会替换数组中的引用
* 要替换数组元素，需要使用 index

## 6. AP 考试重点
* 4.4.A.1–A.2：理解遍历与 indexed loop
* 4.4.A.3–A.4：理解 enhanced for 的 copy
* 4.4.A.5：对象属性可以通过方法修改
* 4.4.A.6：能够改写不同形式的遍历代码
* 追踪循环、发现并修复边界错误

</script>
</div>
</div>

# 1. 什么是数组遍历（Array Traversal）？

**数组遍历就是使用循环，按顺序访问数组中的元素。**

例如，我们想打印数组里的所有成绩：

```java
int[] scores = {95, 88, 92, 76, 100};
```

如果没有循环，就需要逐个写：

```java
System.out.println(scores[0]);
System.out.println(scores[1]);
System.out.println(scores[2]);
System.out.println(scores[3]);
System.out.println(scores[4]);
```

如果数组有 100 个元素，这样写就非常麻烦。

使用循环，我们只需要写一次操作，让循环自动访问每个元素。

遍历时可以进行不同的操作：

- 读取或打印每个元素。
- 比较元素是否符合某个条件。
- 计算或累计数据。
- 修改数组中的元素。

**遍历不一定意味着修改数据。它的核心是按顺序访问元素。**

# 2. 使用 Indexed `for` Loop 遍历数组

最常见的方式是使用带索引的 `for` loop，也叫 indexed `for` loop。

```java
int[] scores = {95, 88, 92, 76, 100};

for (int i = 0; i < scores.length; i++)
{
    System.out.println(scores[i]);
}
```

输出：

```text
95
88
92
76
100
```

理解这个循环的三个部分：

| 部分 | 代码 | 作用 |
|---|---|---|
| 初始化（initialization） | `int i = 0` | 从第一个 index 开始 |
| 条件（condition） | `i < scores.length` | 只要 index 还在有效范围内，就继续循环 |
| 更新（update） | `i++` | 每次循环后，index 加 1 |

每一轮循环中，`i` 都会改变：

| 循环轮次 | `i` | 访问的元素 |
|---|---:|---|
| 第 1 轮 | 0 | `scores[0]` |
| 第 2 轮 | 1 | `scores[1]` |
| 第 3 轮 | 2 | `scores[2]` |
| 第 4 轮 | 3 | `scores[3]` |
| 第 5 轮 | 4 | `scores[4]` |

当 `i` 变成 5 时，`i < scores.length` 不再成立，循环结束。

## 2.1 为什么条件是 `i < scores.length`？

假设数组长度为 5：

- 第一个 index 是 `0`。
- 最后一个 index 是 `4`。
- `scores.length` 的值是 `5`。

因此：

```java
i < scores.length
```

等价于：

```java
i <= scores.length - 1
```

两种条件都能访问全部元素，但 AP 代码中通常使用 `i < array.length`。

**记住：数组遍历的标准写法是从 `0` 开始，条件使用 `< array.length`。**

## 2.2 使用 `while` Loop 完成相同的遍历

也可以使用 `while` loop：

```java
int i = 0;

while (i < scores.length)
{
    System.out.println(scores[i]);
    i++;
}
```

它与上面的 `for` loop 做的是同一件事：

1. 从 index 0 开始。
2. 检查 index 是否小于数组长度。
3. 访问当前元素。
4. `i++`，进入下一个 index。

两种方式都可以遍历数组。由于遍历数组通常是简单的计数循环，教材更常使用 `for` loop。

**注意：** `while` loop 的 `i++` 必须正确执行，否则可能反复访问同一个元素，造成无限循环。

# 3. 控制遍历范围

遍历不一定要从头到尾访问全部元素。我们也可以根据题目要求，只访问数组中的一部分元素，或者改变访问顺序。

## 3.1 遍历前五个元素

假设数组可能有很多元素，但我们只想处理前五个：

```java
for (int i = 0; i < values.length && i < 5; i++)
{
    values[i] = values[i] * 2;
}
```

这里有两个条件：

- `i < values.length`：不能超过数组的有效范围。
- `i < 5`：最多只处理前五个元素。

两个条件必须同时成立，循环才会继续。

如果数组只有 3 个元素，循环就只处理这 3 个元素，不会访问不存在的第 4、5 个元素。

## 3.2 从数组中间遍历到末尾

```java
for (int i = values.length / 2; i < values.length; i++)
{
    values[i] = values[i] * 2;
}
```

假设：

```java
int[] values = {-20, -15, 2, 8, 16, 33};
```

数组长度为 6，因此：

```java
values.length / 2
```

等于 3。

循环从 index 3 开始，访问并修改：

| Index | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---:|---:|---:|---:|---:|---:|
| Original | -20 | -15 | 2 | 8 | 16 | 33 |
| After loop | -20 | -15 | 2 | 16 | 32 | 66 |

注意：循环只处理了后半部分，并没有修改前面的三个元素。

## 3.3 每隔一个元素遍历

`for` loop 的更新部分不一定只能使用 `i++`。

例如：

```java
for (int i = 0; i < values.length; i += 2)
{
    values[i] = values[i] * 2;
}
```

`i += 2` 等价于 `i = i + 2`。

如果数组是：

```java
int[] values = {-20, -15, 2, 8, 16, 33};
```

访问的 index 是：

```text
0 → 2 → 4
```

因此只有这三个位置会被修改：

```text
{-40, -15, 4, 8, 32, 33}
```

**追踪这类题目时，不要默认 index 每次只增加 1。一定要看清楚更新表达式。**

## 3.4 反向遍历

有时题目要求从最后一个元素开始访问：

```java
for (int i = values.length - 1; i >= 0; i--)
{
    System.out.println(values[i]);
}
```

这里有三个重要变化：

- 初始 index：`values.length - 1`，也就是最后一个元素。
- 条件：`i >= 0`，只要 index 没有小于 0，就继续。
- 更新：`i--`，每轮减 1。

如果数组是：

```java
int[] values = {10, 20, 30, 40};
```

访问顺序是：

```text
index:  3 → 2 → 1 → 0
value: 40 → 30 → 20 → 10
```

# 4. Off-by-One Errors：数组遍历中的常见边界错误

这是 AP 代码追踪和错误分析中非常重要的内容。

**Off-by-one error 指循环边界设置错误，导致少访问一个元素，或者访问了数组范围之外的位置。**

## 4.1 最常见的错误：使用 `<=`

错误代码：

```java
int[] scores = {10, 9, 8, 7};

for (int i = 0; i <= scores.length; i++)
{
    System.out.println(scores[i]);
}
```

数组长度是 4，有效 index 是 0、1、2、3。

但是，条件 `i <= scores.length` 允许 `i` 等于 4。

当程序执行 `scores[4]` 时，就会产生：

`ArrayIndexOutOfBoundsException`

正确写法：

```java
for (int i = 0; i < scores.length; i++)
{
    System.out.println(scores[i]);
}
```

## 4.2 另一个错误：从 index 1 开始

```java
for (int i = 1; i < scores.length; i++)
{
    System.out.println(scores[i]);
}
```

这段代码不会产生越界异常，但会跳过第一个元素 `scores[0]`。

所以要区分：

| 循环条件 | 结果 |
|---|---|
| `i = 0; i < scores.length; i++` | 正确访问全部元素 |
| `i = 1; i < scores.length; i++` | 不会越界，但漏掉第一个元素 |
| `i = 0; i <= scores.length; i++` | 最后会越界 |

## 4.3 反向遍历时，更新方向也不能写错

错误：

```java
for (int i = scores.length - 1; i >= 0; i++)
{
    System.out.println(scores[i]);
}
```

虽然初始 index 和条件都正确，但 `i++` 会让 index 越来越大，最终超出数组范围。

正确写法：

```java
for (int i = scores.length - 1; i >= 0; i--)
{
    System.out.println(scores[i]);
}
```

## 4.4 追踪循环时的检查顺序

遇到数组遍历题，建议依次检查：

1. **Start**：index 从哪里开始？
2. **Condition**：循环什么时候停止？
3. **Update**：每轮 index 如何变化？
4. **Access**：循环体实际访问哪个元素？

不要只看循环条件，也不要忽略 `i++`、`i--` 或 `i += 2`。

# 5. 数组作为 Method 参数：遍历后修改原数组

上一课我们学过，数组是对象，传入 method 的是数组引用的副本。两个引用仍然指向同一个数组对象。

这一点在数组遍历中很重要，因为 method 可以通过循环修改原数组中的元素。

例如：

```java
public static void multAll(int[] values, int amt)
{
    for (int i = 0; i < values.length; i++)
    {
        values[i] = values[i] * amt;
    }
}
```

调用：

```java
int[] numArray = {2, 6, 7, 12, 5};

multAll(numArray, 2);
```

执行后，原数组变成：

```text
{4, 12, 14, 24, 10}
```

原因是 `values` 和 `numArray` 指向同一个数组对象。method 通过 `values[i]` 修改元素，原数组也随之改变。

**注意：** 这里改变的是数组对象中的元素，不是把调用者的数组变量重新指向另一个数组。

# 6. Enhanced `for` Loop：增强型 for 循环

除了 indexed `for` loop，Java 还有一种更简洁的循环，叫作增强型 `for` 循环（enhanced for loop），也叫 for-each loop。

它不需要 index，也不需要写 `[]`，而是依次把数组中的元素交给一个循环变量。

## 6.1 语法

```java
for (type variable : arrayName)
{
    // use variable
}
```

可以读作：

**对于 arrayName 中的每一个元素，把它交给 variable。**

例如：

```java
int[] scores = {95, 88, 92, 76};

for (int score : scores)
{
    System.out.println(score);
}
```

输出：

```text
95
88
92
76
```

再看一个 String 数组：

```java
String[] names = {"Jamal", "Emily", "Mateo"};

for (String name : names)
{
    System.out.println(name);
}
```

注意：循环变量的类型必须与数组元素类型匹配。

- `int[]` → `int`
- `double[]` → `double`
- `String[]` → `String`
- `Student[]` → `Student`

## 6.2 每轮循环，变量得到的是元素的 Copy

这是 enhanced for loop 最重要的概念，也是 AP 4.4 的核心考点。

College Board 明确指出：每次循环时，enhanced for loop variable 会得到当前数组元素的一个 copy。

例如：

```java
int[] values = {6, 2, 1, 7};

for (int val : values)
{
    val++;
}
```

很多学生会认为数组变成：

```text
{7, 3, 2, 8}
```

但实际上并没有改变。

原因是：

- `val` 是当前元素的副本。
- `val++` 只修改了局部循环变量。
- 数组中原来的元素没有被修改。

如果之后再次打印数组，结果仍然是：

```text
6 2 1 7
```

**记住：给 enhanced for loop variable 重新赋值，不会改变数组中保存的值。**

## 6.3 什么时候使用 Enhanced for Loop？

它特别适合：

- 需要访问数组中的全部元素。
- 按照数组原来的顺序访问。
- 不需要知道元素的 index。
- 不需要直接替换数组中的元素值。

以下情况不适合使用 enhanced for loop：

| 需求 | 更合适的循环 |
|---|---|
| 需要知道当前 index | Indexed `for` loop |
| 只访问前五个或某一段元素 | Indexed `for` loop |
| 从后往前访问 | Indexed `for` loop |
| 修改 `int`、`double` 等基本类型数组中的元素 | Indexed `for` loop |
| 需要把数组中的某个位置替换成新对象 | Indexed `for` loop |

# 7. Array of Objects：对象数组中的 Enhanced for Loop

这里是本课最容易混淆、也最值得理解的地方。

前面我们学过：对象数组中的元素保存的是对象引用（object references）。

例如：

```java
Student[] students = {
    new Student("Mia"),
    new Student("Leo"),
    new Student("Eva")
};
```

当我们使用 enhanced for loop 遍历它：

```java
for (Student student : students)
{
    student.printInfo();
}
```

每轮循环中的 `student` 得到的是当前数组元素所保存的**引用副本**。

这个引用副本仍然指向原来的 Student 对象。

因此，我们可以通过它调用 mutator method（修改器方法），改变对象的属性。

## 7.1 可以修改对象的属性

假设 Student 类有一个 `addBonus` 方法，可以增加学生的分数：

```java
for (Student student : students)
{
    student.addBonus(5);
}
```

这段代码会逐个访问 Student 对象，并调用方法修改每个对象的属性。

对象本身发生了变化。

但数组中保存的对象引用并没有改变。

## 7.2 不能通过循环变量替换数组中的对象

看下面的代码：

```java
for (Student student : students)
{
    student = new Student("New Student");
}
```

这不会把 `students` 数组中的每个位置替换成新的 Student 对象。

原因是：

- `student` 只是数组中引用的副本。
- `student = new Student(...)` 只让这个局部变量指向新对象。
- 数组中原来保存的引用没有改变。

如果真的需要替换数组中的某个对象，应该使用 index：

```java
for (int i = 0; i < students.length; i++)
{
    students[i] = new Student("New Student");
}
```

## 7.3 两种操作的区别

| 操作 | 能否通过 enhanced for loop 完成？ | 原因 |
|---|---|---|
| 读取对象属性 | 可以 | 循环变量引用着原对象 |
| 调用 setter 修改对象属性 | 可以 | 方法作用于原对象 |
| 把循环变量重新赋值为新对象 | 不可以替换数组元素 | 只改变局部变量的引用 |
| 替换数组中某个位置的对象 | 不可以直接完成 | 需要通过 index 修改数组元素 |

**本课最重要的理解：**

对于基本类型，循环变量得到的是值的副本；对于对象数组，循环变量得到的是引用的副本。

引用副本仍然可以访问和修改原对象的属性，但不能直接替换数组中保存的引用。

# 8. 两种循环如何互相改写？

College Board 的 4.4.A.6 明确要求：使用 enhanced for loop 编写的遍历代码，可以改写成 indexed `for` loop 或 `while` loop。

例如，使用 enhanced for loop 打印所有成绩：

```java
for (int score : scores)
{
    System.out.println(score);
}
```

等价的 indexed `for` loop：

```java
for (int i = 0; i < scores.length; i++)
{
    System.out.println(scores[i]);
}
```

等价的 `while` loop：

```java
int i = 0;

while (i < scores.length)
{
    System.out.println(scores[i]);
    i++;
}
```

三段代码都按照数组原有顺序访问每个元素，并打印结果。

区别在于：

- Enhanced `for` loop：直接得到元素，不需要 index。
- Indexed `for` loop：通过 index 访问元素，控制更灵活。
- `while` loop：同样通过 index 访问，但需要自己管理 index 的初始化和更新。

**考试时要能够读懂三种写法，并判断它们是否完成了相同的遍历。**

# 9. 遍历数组时的另一个常见错误：过早 Return

Runestone 还通过一个查找姓名的例子，提醒我们：不要在循环还没有检查完所有元素时，就提前返回“没有找到”。

错误代码：

```java
public int findString(String target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i].equals(target))
        {
            return i;
        }
        else
        {
            return -1;
        }
    }

    return -1;
}
```

问题在于：

如果第一个元素不匹配，程序就立即执行 `return -1`，后面的元素根本没有机会检查。

正确写法：

```java
public int findString(String target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i].equals(target))
        {
            return i;
        }
    }

    return -1;
}
```

现在程序会：

1. 逐个检查数组元素。
2. 找到匹配项时，立即返回它的 index。
3. 只有循环结束、确认所有元素都检查过之后，才返回 `-1`。

这种逐个检查元素的查找方式叫作线性查找（linear search）。

**记住：找到了可以提前 return；没有找到，必须等遍历结束后才能 return。**

# 10. AP Exam Focus：六个核心考点

College Board 将本课归在 **4.4.A：使用代码遍历一维数组，并确定遍历的结果**。

| AP 知识点 | 必须掌握的内容 |
|---|---|
| **4.4.A.1** | 数组遍历是使用循环访问数组中的全部元素，或按顺序访问其中一部分元素。 |
| **4.4.A.2** | 使用 indexed `for` loop 或 `while` loop 遍历时，需要通过 index 访问元素。 |
| **4.4.A.3** | Enhanced `for` loop 每轮将一个元素的副本赋给循环变量，不需要使用 index。 |
| **4.4.A.4** | 给 enhanced `for` loop 的循环变量重新赋值，不会改变数组中存储的值。 |
| **4.4.A.5** | 如果数组保存对象引用，可以通过 enhanced `for` loop 变量调用方法修改对象属性；但数组中保存的对象引用不会改变。 |
| **4.4.A.6** | Enhanced `for` loop 可以改写成 indexed `for` loop 或 `while` loop。 |

## AP 考试技能

本课对应三项建议技能：

- **2.B**：编写涉及数据抽象的程序代码。
- **3.B**：根据包含数据抽象的代码确定结果或输出。
- **3.D**：解释代码为什么无法编译或不能按预期工作，并修改错误。

因此，不能只会背循环语法。还需要能追踪每一轮循环、判断数组最终状态，并修复循环边界或逻辑错误。

# 11. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 使用 `i <= array.length` 遍历全部元素 | 应使用 `i < array.length`，否则最后会越界 |
| 从 `i = 1` 开始，以为可以访问全部元素 | 不会越界，但会漏掉 index 0 |
| 反向遍历时使用 `i++` | 应使用 `i--`，否则 index 会越来越大 |
| 忘记在 `while` loop 中更新 index | 可能一直访问同一个元素，形成无限循环 |
| 认为 enhanced for loop 中 `val++` 会修改原数组 | 只修改循环变量的副本 |
| 认为 enhanced for loop 完全不能修改对象 | 可以通过循环变量调用 mutator method 修改对象属性 |
| 认为 `student = new Student(...)` 会替换数组中的对象 | 只改变局部循环变量；替换数组元素需要 index |
| 在查找循环中，第一次不匹配就 `return -1` | 应遍历完所有元素后再返回 `-1` |

# 12. Mini Practice：小练习

## Practice 1：理解数组遍历

下面哪项最准确地描述了 array traversal？

A. 只能访问数组中的第一个元素。

B. 使用循环访问数组中的全部元素，或按顺序访问其中一部分元素。

C. 必须修改数组中的每一个元素。

**答案：B**

解释：遍历的核心是使用循环访问元素，可以读取、打印、比较或修改元素，并不要求一定修改数据。

## Practice 2：循环边界

下面哪个循环能够正确访问数组 `scores` 的全部元素？

A.

```java
for (int i = 0; i <= scores.length; i++)
```

B.

```java
for (int i = 1; i < scores.length; i++)
```

C.

```java
for (int i = 0; i < scores.length; i++)
```

**答案：C**

解释：A 最后会访问 `scores[scores.length]`，产生越界异常；B 会跳过第一个元素；C 才能完整访问所有元素。

## Practice 3：部分遍历与代码追踪

```java
int[] nums = {2, 4, 6, 8, 10, 12};

for (int i = 0; i < nums.length && i < 4; i++)
{
    nums[i] *= 2;
}
```

最终数组是什么？

A. `{4, 8, 12, 16, 10, 12}`

B. `{4, 8, 12, 16, 20, 24}`

C. `{2, 4, 6, 8, 20, 24}`

**答案：A**

解释：循环只处理 index 0、1、2、3。后面两个元素不会被修改。

## Practice 4：Enhanced for loop

```java
int[] values = {3, 5, 7};

for (int value : values)
{
    value *= 2;
}

System.out.println(values[0] + " " + values[1] + " " + values[2]);
```

输出是什么？

A. `6 10 14`

B. `3 5 7`

C. `5 7 9`

**答案：B**

解释：`value` 每轮得到的是数组元素的副本。`value *= 2` 不会修改数组中的原始值。

## Practice 5：对象数组与 Enhanced for loop

假设 `Student` 类有 `addBonus(int amount)` 方法和一个 constructor。

执行下面代码：

```java
for (Student student : students)
{
    student.addBonus(5);
}
```

哪项描述正确？

A. 每个 Student 对象的属性可以被修改，数组中保存的对象引用保持不变。

B. 循环变量 `student` 被重新赋值，因此数组中的所有对象都会被替换。

C. Enhanced for loop 不能用于对象数组。

**答案：A**

解释：循环变量保存的是对象引用的副本，但仍然指向原对象。调用 mutator method 可以修改原对象的属性。

## Practice 6：查找代码中的错误

下面的方法想在数组中查找 `target`。如果找到，返回 index；如果没有找到，返回 `-1`。

```java
public int findString(String target)
{
    for (int i = 0; i < arr.length; i++)
    {
        if (arr[i].equals(target))
        {
            return i;
        }
        else
        {
            return -1;
        }
    }

    return -1;
}
```

问题在哪里？

A. `return i` 应该放在循环外面。

B. `return -1` 放在 `else` 中，会在第一次不匹配时提前结束循环。

C. `arr.length` 应该写成 `arr.length - 1`。

**答案：B**

解释：只有检查完所有元素仍然没有找到，才能返回 `-1`。应删除 `else` 中的 `return -1`，保留循环结束后的 `return -1`。

# Unit 4.4 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| array traversal | 数组遍历；使用循环访问数组元素 |
| traverse | 遍历；按顺序访问元素 |
| iteration | 迭代；循环执行的一轮 |
| indexed `for` loop | 索引式 for 循环；使用 index 访问元素 |
| enhanced `for` loop | 增强型 for 循环；依次取得数组元素，不需要 index |
| for-each loop | 增强型 for 循环的另一种名称 |
| loop variable | 循环变量；每轮循环中接收当前元素的变量 |
| off-by-one error | 边界错误；循环多访问或少访问一个位置 |
| mutator method | 修改器方法；用于修改对象属性的方法 |
| linear search | 线性查找；逐个检查元素，寻找目标值 |

---

**下一课预告：** 4.4 学会了如何遍历数组。4.5 将进一步学习如何利用数组遍历实现常见算法，例如求最大值、计算平均值、统计符合条件的元素，以及查找重复值。
