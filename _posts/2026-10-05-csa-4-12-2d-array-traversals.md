---
title: "AP CSA 4.12：二维数组遍历"
layout: post
categories: media
render_with_liquid: false
---

上一课（4.11）我们学会了用 `scores[row][col]` 访问二维数组中的某一个元素。但如果要读取**所有学生的所有成绩**，总不能把每一个位置都手动写出来。

这一课，我们会用**嵌套循环（nested loops）**遍历整张二维数组，并学会判断程序到底按什么顺序访问元素。

> **理解 4.12 的关键：二维数组是“数组的数组”。外层循环决定当前处理哪一行或哪一列；内层循环在这个范围内逐个访问元素。先判断两个循环分别控制什么，再追踪输出。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.12 2D Array Traversals

## 1. Nested Loops（嵌套循环）
* 外层循环：控制一组行或列
* 内层循环：逐个访问该行或该列中的元素
* `a.length`：行数
* `a[row].length`：当前行的元素数量
* `a[row][col]`：具体元素

## 2. Row-Major Order（按行遍历）
* 固定一行，先访问该行所有列
* 通常外层 `row`，内层 `col`
* `0,0 → 0,1 → … → 1,0`

## 3. Column-Major Order（按列遍历）
* 固定一列，先访问该列所有行
* 通常外层 `col`，内层 `row`
* `0,0 → 1,0 → … → 0,1`
* 不会改变二维数组本身

## 4. Different Traversal Orders（其他遍历顺序）
* 从右向左：`col--`
* 只访问一部分：根据行列关系设定条件
* 追踪起点、条件、更新和访问位置
* 小心 off-by-one errors

## 5. Nested Enhanced for（嵌套增强型 for）
* 外层变量类型是一维数组，如 `int[] row`
* 内层变量类型是元素类型，如 `int value`
* 循环变量得到当前元素的副本
* 重赋值给 `value` 不会改变原数组
* 对象引用副本仍可通过方法修改原对象属性

## 6. AP Exam Focus
* 4.12.A.1：嵌套遍历与访问顺序
* 4.12.A.2：两层 enhanced for 的类型与副本
* 代码追踪、修复边界错误
* 2D Array Algorithms 将在 4.13 重点学习

</script>
</div>
</div>

# 1. 从一张成绩表开始：两层循环究竟在做什么？

沿用 4.11 的成绩表：三名学生，每人四次小测。

```java
int[][] scores = {
    {88, 92, 95, 80},
    {75, 90, 82, 91},
    {100, 84, 96, 89}
};
```

| Row / 学生 | Col 0 | Col 1 | Col 2 | Col 3 |
|---|---:|---:|---:|---:|
| **Row 0** | 88 | 92 | 95 | 80 |
| **Row 1** | 75 | 90 | 82 | 91 |
| **Row 2** | 100 | 84 | 96 | 89 |

上一课你已经会访问某一个成绩：

```java
scores[1][2]  // 82
```

那么，如果我们要按顺序访问整张表，应该怎么做？

可以把问题拆成两步：

1. **先选一行。**
2. **再把这一行中的所有元素逐个访问一遍。**

处理完第一行，就换到第二行，再重复同样的事情。

这正是**一个循环套着另一个循环**的思路。

# 2. Nested `for` Loops：用嵌套循环遍历二维数组

最常见的代码结构是：

```java
for (int row = 0; row < scores.length; row++)
{
    for (int col = 0; col < scores[row].length; col++)
    {
        System.out.println(scores[row][col]);
    }
}
```

不要把它理解成“两个 `for` 循环同时往前走”。实际的执行方式是：

- **外层循环**：`row = 0`，选择第 0 行。
- **内层循环**：`col` 从 0 走到 3，把第 0 行的四个元素全部访问完。
- 然后外层循环才更新为 `row = 1`。
- 内层循环**重新从 `col = 0` 开始**，访问第 1 行的四个元素。
- 最后访问第 2 行。

> **外层每执行一轮，内层就会从自己的起点重新运行一遍。**

## 2.1 看清两个 `length`

| 表达式 | 类型 / 意义 | 本例的值 |
|---|---|---:|
| `scores.length` | 二维数组的行数 | 3 |
| `scores[row]` | 当前一整行，是 `int[]` | 一维数组 |
| `scores[row].length` | 当前行有多少个元素 | 4 |
| `scores[row][col]` | 当前访问的成绩，是 `int` | 例如 88 |

所以代码中的两个循环分别是：

```java
row < scores.length          // 控制 row：0、1、2
col < scores[row].length     // 控制 col：0、1、2、3
```

这里采用的是 AP CSA 范围内的**矩形二维数组**：每行列数相同。Java 本身允许不同长度的行，但非矩形二维数组不属于当前 AP CSA 考试范围。

## 2.2 用追踪表看执行顺序

为了更清楚地看到两个循环怎样配合，先只看这个较小的二维数组：

```java
int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};
```

下面这段代码：

```java
for (int row = 0; row < a.length; row++)
{
    for (int col = 0; col < a[row].length; col++)
    {
        System.out.print(a[row][col] + " ");
    }
}
```

逐步执行：

| 执行顺序 | `row` | `col` | `a[row][col]` |
|---|---:|---:|---:|
| 1 | 0 | 0 | 1 |
| 2 | 0 | 1 | 2 |
| 3 | 0 | 2 | 3 |
| 4 | 1 | 0 | 4 |
| 5 | 1 | 1 | 5 |
| 6 | 1 | 2 | 6 |

输出：

```text
1 2 3 4 5 6
```

**一共执行了 2 × 3 = 6 次内层循环体**。对于这种完整遍历的矩形二维数组，访问次数就是行数 × 列数。

# 3. Row-Major Order：按行遍历

刚才使用的方式叫作 **row-major order（按行遍历）**。

它的特点是：**先固定当前行，沿着这一行从左到右访问；然后再进入下一行。**

对于：

```text
        col 0  col 1  col 2
row 0      1      2      3
row 1      4      5      6
```

按行遍历的访问顺序是：

```text
(0,0) → (0,1) → (0,2) → (1,0) → (1,1) → (1,2)
  1       2       3       4       5       6
```

典型代码：

```java
for (int row = 0; row < a.length; row++)
{
    for (int col = 0; col < a[row].length; col++)
    {
        System.out.print(a[row][col] + " ");
    }
    System.out.println();
}
```

输出：

```text
1 2 3 
4 5 6 
```

注意 `System.out.println();` 放在**内层循环结束后、外层循环内部**：

- `print(...)`：访问一个元素并打印，不换行。
- `println()`：当前整行访问结束后换行。

所以输出也会以二维表格的形式呈现。

# 4. Column-Major Order：按列遍历

现在换一种访问顺序：**先固定一列，把这一列从上到下访问完，再换到下一列。**

这叫作 **column-major order（按列遍历）**。

仍然使用同一个数组：

```java
int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};
```

代码：

```java
for (int col = 0; col < a[0].length; col++)
{
    for (int row = 0; row < a.length; row++)
    {
        System.out.print(a[row][col] + " ");
    }
}
```

访问顺序变成：

```text
(0,0) → (1,0) → (0,1) → (1,1) → (0,2) → (1,2)
  1       4       2       5       3       6
```

输出：

```text
1 4 2 5 3 6
```

## 4.1 最容易犯的错误：交换循环之后，忘记交换边界

对比两种方式：

| 比较项目 | Row-Major | Column-Major |
|---|---|---|
| 外层循环控制 | `row` | `col` |
| 内层循环控制 | `col` | `row` |
| 外层循环范围 | `row < a.length` | `col < a[0].length` |
| 内层循环范围 | `col < a[row].length` | `row < a.length` |
| 访问顺序 | 先横向，后换行 | 先纵向，后换列 |

注意：**`a[row][col]` 的索引顺序永远还是先 row 后 col。**

改变的是访问顺序，而不是数组的行列结构。即使使用 column-major traversal，也不要写成 `a[col][row]`。

同时，row-major 和 column-major 是**遍历顺序**的名称，不意味着这道题把数组变成了另一种存储结构。Java 的二维数组仍然是“数组的数组”。

# 5. 不一定要按正常顺序：自定义遍历（Custom Traversal）

College Board 还明确要求能够理解根据题目设定的其他遍历顺序。

例如：**每一行从右往左打印，并且不同的行可能打印不同数量的元素**。

教材中的一题使用了这样的数组：

```java
int[][] points = {
    {11, 12, 13, 14, 15},
    {21, 22, 23, 24, 25},
    {31, 32, 33, 34, 35},
    {41, 42, 43, 44, 45}
};
```

下面的循环：

```java
for (int row = 0; row < points.length; row++)
{
    for (int col = points[0].length - 1; col >= row; col--)
    {
        System.out.print(points[row][col] + " ");
    }
    System.out.println();
}
```

不要直接猜结果。先追踪内层循环的 `col`：

| 外层 `row` | 内层 `col` 依次取值 | 打印结果 |
|---|---|---|
| 0 | 4、3、2、1、0 | `15 14 13 12 11` |
| 1 | 4、3、2、1 | `25 24 23 22` |
| 2 | 4、3、2 | `35 34 33` |
| 3 | 4、3 | `45 44` |

最终输出：

```text
15 14 13 12 11
25 24 23 22
35 34 33
45 44
```

这里有三个关键细节：

1. `col = points[0].length - 1`：每行都从最后一列开始。
2. `col--`：向左移动。
3. `col >= row`：内层循环的结束位置由**当前的 row** 决定。

所以后一行会比前一行少打印一个元素。教材的 AP Practice 特别要求判断**最后一行**，答案是 `45 44`。

> **遇到自定义嵌套循环，先追踪外层变量，再在每一轮里单独列出内层变量的取值。**

# 6. Nested Enhanced `for` Loop：嵌套增强型 for 循环

前面的代码通过 index 访问元素。4.4 还学过 enhanced `for` loop：它可以不使用 index，直接取得数组中的元素。

二维数组既然是“数组的数组”，就可以对它使用**两层 enhanced `for`**。

## 6.1 第一层取得整行，第二层取得元素

```java
int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int[] row : a)
{
    for (int value : row)
    {
        System.out.print(value + " ");
    }
}
```

输出：

```text
1 2 3 4 5 6
```

这段代码不需要写 `a[row][col]`，但仍然是按行遍历。

最重要的是理解**两层循环变量的类型为什么不同**：

| 部分 | 代码 | `for` 每轮得到什么？ |
|---|---|---|
| 外层 | `for (int[] row : a)` | 当前一整行，类型为 `int[]` |
| 内层 | `for (int value : row)` | 当前行中的一个 `int` 值 |

可以把它读作：

> 对二维数组 `a` 中的每一行 `row`，再对这一行中的每一个数值 `value` 执行操作。

和 4.11 的知识联系起来：

```text
a                 → int[][]
a[0]              → int[]
a[0][0]           → int
```

因此嵌套 enhanced `for` 的变量类型必须对应：

```text
int[][]  →  int[]  →  int
整个表格     一整行     单个元素
```

如果是 `String[][]`，则应该写成：

```java
for (String[] row : names)
{
    for (String name : row)
    {
        System.out.println(name);
    }
}
```

其中假设 `names` 已经被声明并初始化为 `String[][]`。

## 6.2 Enhanced `for` 的 Copy：重新赋值不修改原数组

这部分与 4.4 完全一致，只是从一维数组扩展到二维数组。

```java
int[][] a = {
    {1, 2},
    {3, 4}
};

for (int[] row : a)
{
    for (int value : row)
    {
        value = 0;
    }
}
```

**结果：数组没有变化。**

```text
1  2
3  4
```

原因是内层 `value` 每轮得到的是当前 `int` 元素的**值的副本**。`value = 0` 只改变局部循环变量，并没有修改 `a` 中的元素。

如果确实要把所有值改成 0，需要通过 index 给数组元素赋值：

```java
for (int row = 0; row < a.length; row++)
{
    for (int col = 0; col < a[row].length; col++)
    {
        a[row][col] = 0;
    }
}
```

还有一个容易混淆的细节：外层的 `row` 取得的是**当前一维数组引用的副本**。因此，`row[0] = 0;` 可以通过这个引用修改原来那一行的元素；但 `row = new int[2];` 只是让局部变量指向新数组，**不会替换二维数组中原来的那一行**。

# 7. 对象二维数组：可以修改对象属性，但不等于替换对象

Runestone 使用图片的 Pixel（像素）来说明这一点：一张照片由许多像素组成，每个像素的颜色可以用红、绿、蓝（RGB）三个分量表示。

假设 `pixels` 是一个 `Pixel[][]`，每个位置都引用了一个已创建的 `Pixel` 对象；并且 `Pixel` 类提供 `setBlue(int)` 方法。

```java
for (Pixel[] row : pixels)
{
    for (Pixel p : row)
    {
        p.setBlue(0);
    }
}
```

这里：

- 外层 `row` 是一个 `Pixel[]`，也就是**一整行的对象引用**。
- 内层 `p` 是一个 `Pixel` 对象引用的副本。
- `p.setBlue(0)` 通过引用，修改**原来那个 Pixel 对象**的蓝色属性。

执行后，对象内部的颜色状态确实变化了。但二维数组中的每个元素仍然引用原来的 Pixel 对象，**没有换成另一个 Pixel 对象**。

对比一下：

```java
Pixel replacement = pixels[0][0];  // 假设要使用的另一个对象引用

for (Pixel[] row : pixels)
{
    for (Pixel p : row)
    {
        p.setBlue(0);      // 修改 p 所引用的原对象的属性
        p = replacement;   // 只让局部变量 p 改为引用 replacement
    }
}
```

这里 `p.setBlue(0)` 会修改原 Pixel 对象的状态；`p = replacement` 则**不会**把二维数组中的其他元素替换为 `replacement`。第二个操作只是让当前循环变量改为引用另一个对象，不影响数组元素原来保存的引用。

如果需要替换某个位置所引用的对象，应使用 `pixels[row][col] = ...`，而不是给 `p` 重新赋值。

这和 4.4 的 `Student` 对象例子遵循同一个原则：

> **通过引用调用 mutator method，是修改原对象的内部状态；给局部循环变量重新赋值，是改变该局部变量指向哪里。两者不是一回事。**

# 8. AP Code Tracing：一道特别值得练习的官方教材题

Runestone 的 AP Practice 有一题使用**外层 enhanced for、内层 indexed for**：

```java
int[][] arr = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

int sum = 0;

for (int[] x : arr)
{
    for (int y = 0; y < x.length - 1; y++)
    {
        sum += x[y];
    }
}
```

问题：最终的 `sum` 是多少？

先不要直接把 1–12 全部相加。最关键的地方在这里：

```java
y < x.length - 1
```

每一行有 4 个元素，因此 `x.length - 1` 是 3；内层 `y` 只会取：

```text
0, 1, 2
```

所以**每一行都跳过最后一个元素**，而不只是跳过整个二维数组最后的 12。

| 当前 `x` | 访问的元素 | 本行累计 |
|---|---|---:|
| `{1, 2, 3, 4}` | 1、2、3 | 6 |
| `{5, 6, 7, 8}` | 5、6、7 | 18 |
| `{9, 10, 11, 12}` | 9、10、11 | 30 |

最终：

```text
sum = 6 + 18 + 30 = 54
```

**正确答案：54。**

这道题同时考查三件事：

1. 外层 enhanced `for` 每轮取得一整行 `int[]`。
2. 内层循环只访问当前行的部分元素。
3. 内层的边界是 `x.length - 1`，不能误读成 `x.length`。

# 9. AP Exam Focus：本课两个官方核心要求

根据 College Board《AP Computer Science A Course and Exam Description》（Effective Fall 2025），本课的学习目标是 **4.12.A：编写二维数组遍历代码，并确定遍历后的结果**。

| AP 知识点 | 必须掌握的内容 |
|---|---|
| **4.12.A.1** | 可以通过嵌套循环按行、按列或按题目规定的其他顺序访问二维数组的全部或部分元素；能够判断访问顺序和输出。 |
| **4.12.A.2** | 嵌套 enhanced `for` 的外层变量是一维数组类型，内层变量是单个元素的类型；重新给 enhanced `for` 的循环变量赋值，不会修改数组中存储的值。 |

官方建议技能：

- **2.B**：编写涉及数据抽象的代码。
- **3.B**：根据代码判断最终结果或输出。
- **3.D**：解释代码为什么无法编译或未按预期运行，并修改错误。

**课程边界：** 本课以“如何遍历、按什么顺序遍历、代码会输出什么”为核心。下一课 4.13 才系统介绍二维数组的 Min/Max、Sum/Average、搜索、计数、移动、反转等标准算法。这里的求和例题是为了训练遍历顺序与边界，而不是提前展开所有 4.13 算法。

# 10. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 认为外层和内层的 index 会同时各增加一次 | 外层每轮确定一个范围；**内层先完整运行**，外层才更新。 |
| 把 `a.length` 当作列数 | `a.length` 是行数；矩形二维数组的列数可以使用 `a[0].length`。 |
| 按列遍历时写成 `a[col][row]` | 访问元素的语法仍然是 `a[row][col]`；改变的是循环顺序。 |
| 把 `row < a[0].length`、`col < a.length` 混用 | `row` 应按行数控制，`col` 应按列数控制；非方阵容易暴露错误。 |
| 认为内层循环只在整个程序开始时初始化一次 | 外层每走到下一轮，内层就会重新初始化。 |
| 忽略 `col--` 或 `col >= row` | 变量的变化方向和依赖外层变量的条件会改变访问次序与数量。 |
| 认为 `for (int[] row : a)` 中 `row` 是 `int` | `row` 是一整行，所以类型是 `int[]`。 |
| 认为 `value = 0` 会修改二维 `int` 数组 | `value` 是元素值的副本；需要使用 `a[row][col] = 0` 修改原元素。 |
| 认为对象二维数组不能通过 enhanced `for` 修改 | 可以通过对象引用调用 mutator method 修改对象的**属性**，但重赋值给循环变量不会替换数组中的引用。 |
| 把 `y < x.length - 1` 理解成只跳过整张表格最后一个数 | 这个条件在**每一行**都重新生效，会跳过每行最后一个元素。 |

# 11. Mini Practice：AP 风格练习

以下练习按从基础到综合的顺序排列。建议先自己写出答案，再阅读解释。

## Practice 1：嵌套循环的输出

```java
int[][] a = {
    {2, 4},
    {6, 8},
    {10, 12}
};

for (int row = 0; row < a.length; row++)
{
    for (int col = 0; col < a[row].length; col++)
    {
        System.out.print(a[row][col] + " ");
    }
}
```

输出顺序是什么？

A. `2 4 6 8 10 12`

B. `2 6 10 4 8 12`

C. `2 4 6 8`

**答案：A。** 外层控制行，内层控制列，先完成一行，再进入下一行。

## Practice 2：Column-Major Traversal

使用 Practice 1 的数组，执行：

```java
for (int col = 0; col < a[0].length; col++)
{
    for (int row = 0; row < a.length; row++)
    {
        System.out.print(a[row][col] + " ");
    }
}
```

输出顺序是什么？

A. `2 4 6 8 10 12`

B. `2 6 10 4 8 12`

C. `2 4 10 12 6 8`

**答案：B。** 先打印第 0 列的 `2、6、10`，再打印第 1 列的 `4、8、12`。

## Practice 3：循环执行了多少次？

```java
int[][] grid = new int[3][4];

for (int r = 0; r < grid.length; r++)
{
    for (int c = 0; c < grid[r].length; c++)
    {
        System.out.print("*");
    }
}
```

一共打印多少个 `*`？

A. 7 个　B. 12 个　C. 16 个

**答案：B。** 外层运行 3 轮，每轮内层运行 4 次，所以共 `3 × 4 = 12` 次。

## Practice 4：检测边界错误

下面的代码要按列遍历一个 **2 行 3 列**的二维数组：

```java
int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int col = 0; col < a.length; col++)
{
    for (int row = 0; row < a[0].length; row++)
    {
        System.out.print(a[row][col] + " ");
    }
}
```

哪项判断正确？

A. 正确打印所有元素，只是顺序不同。

B. 第二个循环会让 `row` 取到 2，访问 `a[2][col]` 时越界。

C. 代码无法编译，因为二维数组不能按列遍历。

**答案：B。** `a.length` 是 2，合法 `row` 为 0–1。内层错误地让 `row` 取到 2。应该将外层条件改为 `col < a[0].length`，内层条件改为 `row < a.length`。

## Practice 5：Enhanced `for` 的类型

对于：

```java
String[][] names = {
    {"Mia", "Leo"},
    {"Eva", "Noah"}
};
```

下面哪个循环变量类型正确？

A.

```java
for (String row : names)
{
    for (String name : row)
    {
        System.out.println(name);
    }
}
```

B.

```java
for (String[] row : names)
{
    for (String name : row)
    {
        System.out.println(name);
    }
}
```

C.

```java
for (String[][] row : names)
{
    for (String name : row)
    {
        System.out.println(name);
    }
}
```

**答案：B。** 外层取得的是一整行 `String[]`，内层才是单个 `String`。

## Practice 6：Enhanced `for` 能否修改数组？

```java
int[][] a = {
    {1, 2},
    {3, 4}
};

for (int[] row : a)
{
    for (int value : row)
    {
        value += 10;
    }
}
```

执行后 `a[0][0]` 的值是多少？

A. 1　B. 11　C. 10

**答案：A。** 重新给 `value` 赋值只影响循环变量的副本，原数组仍是 `{ {1, 2}, {3, 4} }`。

## Practice 7：理解内层循环边界

```java
int[][] a = {
    {1, 2, 3},
    {4, 5, 6}
};

int total = 0;

for (int[] row : a)
{
    for (int i = 0; i < row.length - 1; i++)
    {
        total += row[i];
    }
}
```

`total` 最终是多少？

A. 12　B. 15　C. 21

**答案：A。** 每行只访问前两个元素，因此 `1 + 2 + 4 + 5 = 12`。3 和 6 都被跳过。

## Practice 8：FRQ-Style 填空

某个矩形二维数组 `temps` 保存了多天、多个时段的气温。请补全代码，让方法**按行顺序打印所有温度**，每一行打印完后换行。

```java
public static void printTemps(int[][] temps)
{
    for (int row = 0; row < __________; row++)
    {
        for (int col = 0; col < __________; col++)
        {
            System.out.print(temps[__________][__________] + " ");
        }
        System.out.println();
    }
}
```

**参考答案：**

```java
public static void printTemps(int[][] temps)
{
    for (int row = 0; row < temps.length; row++)
    {
        for (int col = 0; col < temps[row].length; col++)
        {
            System.out.print(temps[row][col] + " ");
        }
        System.out.println();
    }
}
```

解释：外层遍历每一行，内层遍历该行中的所有列；内层循环结束后换行，因此每行的数据会显示在单独一行。

# Unit 4.12 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| 2D array traversal | 二维数组遍历；依次访问二维数组的全部或部分元素 |
| nested loops | 嵌套循环；一个循环包含另一个循环 |
| outer loop | 外层循环；控制内层循环运行的轮次 |
| inner loop | 内层循环；每次外层循环执行时，在指定范围内反复运行 |
| row-major order | 按行遍历；先访问一行中的各列，再进入下一行 |
| column-major order | 按列遍历；先访问一列中的各行，再进入下一列 |
| enhanced `for` loop | 增强型 for 循环；直接依次取得当前元素，不使用显式索引 |
| loop variable | 循环变量；当前循环轮次用来保存值或引用副本的变量 |
| rectangular 2D array | 矩形二维数组；每行的元素数量相同 |
| off-by-one error | 边界错误；循环多访问或少访问一个位置 |
| object reference | 对象引用；指向对象的值 |
| mutator method | 修改器方法；修改对象内部状态的方法 |

---

**下一课预告：** 4.12 重点是**怎样正确遍历二维数组**。4.13 将把 4.5 学过的 Sum、Average、Min/Max、Count 等算法扩展到二维数组，并学习在指定的行、列或部分区域上执行算法。

**参考资料：**

- [Runestone CSAwesome2 — 4.12 2D Array Traversals: Nested Loops](https://runestone.academy/ns/books/published/csawesome2ptxbeta/topic-4-12-2Darray-traversal.html)
- [College Board — AP Computer Science A Course and Exam Description（Effective Fall 2025）, Topic 4.12](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
