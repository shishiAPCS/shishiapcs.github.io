---
title: "AP CSA 4.13：实现二维数组算法"
layout: post
categories: media
render_with_liquid: false
---

在 4.11，我们学会了创建二维数组，并用 `grid[row][col]` 访问元素；在 4.12，我们学会了通过嵌套循环遍历二维数组。

现在要解决的是：**如果数据放在一张表格里，如何找到最高分、计算某一列的总分、判断是否有重复值，或者移动其中一整行？**

这些算法并不是全新的一套知识。它们与 4.5 的一维数组算法有着相同的核心思路，只是需要先弄清楚**要处理哪一部分数据，再决定如何遍历行与列**。

> **本课的核心：先确定处理范围（全表、某行、某列或指定区域），再选择算法模式（累加、比较、判断、计数、交换等），最后检查 row / col 的变化和边界。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.13 Implementing 2D Array Algorithms

## 1. 选择处理范围（Traversal Scope）
* 整个二维数组：外层 row、内层 col
* 指定行：固定 row，遍历 col
* 指定列：固定 col，遍历 row
* 指定区域：限制 row 和 col 的起止值

## 2. 累积、最值与判断
* Sum / Average：累加后计算平均值
* Min / Max：从真实元素初始化，遇到更小或更大就更新
* Any：找到符合条件的值就返回 true
* All：找到反例就返回 false
* Count：符合条件时 count++

## 3. 比较元素
* Consecutive Pairs：比较左右或上下相邻元素
* 相邻边界：`col + 1` 或 `row + 1` 不可越界
* Duplicates：比较不同位置的元素
* 全表查重可能需要四层循环

## 4. 移动与重排
* Shift：元素移动，空出的位置需要处理
* Rotate：移出一端的值放回另一端
* Reverse：首尾配对交换，向中间靠近
* Temporary Variable：避免数据被覆盖

## 5. AP 代码能力
* 4.13.A.1：九种标准二维数组算法
* Row / Column / Subsection
* 逐轮追踪 index、输出和二维数组状态
* 解释并修复边界及逻辑错误
* 二维数组 FRQ：按方法要求完成算法

</script>
</div>
</div>

# 1. 从一张表格开始：先确定你到底要处理哪些元素

沿用二维成绩表的思路。假设下面的二维数组保存了三名学生在四次小测中的分数（为方便追踪，这里用较小的数字）：

```java
int[][] scores = {
    {3, 1, 3, 4},
    {5, 3, 2, 6},
    {7, 8, 3, 9}
};
```

| Row / Student | Col 0 | Col 1 | Col 2 | Col 3 |
|---|---:|---:|---:|---:|
| **Row 0** | 3 | 1 | 3 | 4 |
| **Row 1** | 5 | 3 | 2 | 6 |
| **Row 2** | 7 | 8 | 3 | 9 |

在写任何算法之前，先回答两个问题：

1. **需要处理哪些元素？** 是全表、某一行、某一列，还是一个矩形区域？
2. **对这些元素做什么？** 是累加、找最值、计数、判断、比较还是修改位置？

## 1.1 四种最常见的遍历范围

| 任务 | 哪个 index 固定？ | 哪个 index 改变？ | 需要几层循环？ |
|---|---|---|---|
| 访问**整个数组** | 无 | `row` 和 `col` | 通常两层 |
| 访问**第 1 行** | `row = 1` | `col` | 一层 |
| 访问**第 2 列** | `col = 2` | `row` | 一层 |
| 访问**指定矩形区域** | 限定行列范围 | `row` 和 `col` | 通常两层 |

最值得记住的是：

- **固定 row，移动 col → 沿着一行从左到右。**
- **固定 col，移动 row → 沿着一列从上到下。**

在下面的例子中，我们使用**非空的矩形二维数组（rectangular 2D array）**，也就是每行元素数量相同。这符合本课的 AP 考试范围。对于涉及第一个元素、指定行列的代码，还假设相应元素和索引确实存在。

# 2. Sum：计算整个数组、某行和某列的总和

这部分直接联系 4.5 的 **accumulator pattern（累加器模式）**。

## 2.1 计算整个二维数组的总和

思路很简单：先准备一个 `sum`，再访问每个元素，把它加进去。

```java
public static int totalAll(int[][] a)
{
    int sum = 0;

    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            sum += a[row][col];
        }
    }

    return sum;
}
```

对于开头的 `scores`，实际累加过程如下：

| 处理完成 | 本行总和 | 累加器 `sum` |
|---|---:|---:|
| Row 0 | 3 + 1 + 3 + 4 = 11 | 11 |
| Row 1 | 5 + 3 + 2 + 6 = 16 | 27 |
| Row 2 | 7 + 8 + 3 + 9 = 27 | 54 |

因此：

```java
totalAll(scores)  // 54
```

注意 `sum = 0` 必须放在两层循环**之前**。如果把它放在外层循环内部，每换一行就会重新清零，最后只剩下最后一行的总和。

## 2.2 只计算指定的一行（Row Sum）

这是 Runestone 4.13.1 的第一个重点例子。

如果只计算 Row 1，意味着 `row` 已经确定，我们只需要让 `col` 变化。

```java
public static int getTotalForRow(int row, int[][] a)
{
    int total = 0;

    for (int col = 0; col < a[row].length; col++)
    {
        total += a[row][col];
    }

    return total;
}
```

调用：

```java
getTotalForRow(1, scores)
```

计算的是：

```text
scores[1][0] + scores[1][1] + scores[1][2] + scores[1][3]
    5         +     3        +     2        +     6     = 16
```

**这里不需要两层循环。** 因为 `row = 1` 是固定的，我们只需要遍历这一行的所有 `col`。

## 2.3 只计算指定的一列（Column Sum）

这是 Runestone 要求学生自己完成的另一半代码。

例如，第 2 列的数据是：

```text
scores[0][2] = 3
scores[1][2] = 2
scores[2][2] = 3
```

因此它的总和是 `8`。

正确代码：

```java
public static int getTotalForCol(int col, int[][] a)
{
    int total = 0;

    for (int row = 0; row < a.length; row++)
    {
        total += a[row][col];
    }

    return total;
}
```

把两段代码放在一起，比较区别：

| Row Sum | Column Sum |
|---|---|
| `row` 固定 | `col` 固定 |
| 循环变量是 `col` | 循环变量是 `row` |
| `a[row][col]` | `a[row][col]` |
| 边界是 `a[row].length` | 边界是 `a.length` |

虽然访问元素的表达式都叫 `a[row][col]`，但**改变的是不同的 index**。

**考场上的判断办法：读题出现“某一列”，立刻想到固定 `col`、循环 `row`。**

# 3. Average、Min、Max：同样的遍历，不同的计算方式

## 3.1 计算平均值（Average）

整张矩形二维数组的元素数量是：

```java
a.length * a[0].length
```

所以：

```java
public static double averageAll(int[][] a)
{
    double total = 0;

    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            total += a[row][col];
        }
    }

    return total / (a.length * a[0].length);
}
```

开头的成绩表一共有 `3 × 4 = 12` 个元素，总和是 `54`，所以平均值是 `4.5`。

**注意两个条件：** 这段方法假设数组非空且每行长度相同；`double total` 避免整数除法截断小数部分。

如果题目只要求**某一行**的平均值，就应该用**该行总和 ÷ 该行元素数量**；如果只要求**某一列**的平均值，就用**该列总和 ÷ 行数**。

## 3.2 找整个二维数组的最大值（Maximum）

```java
public static int getLargest(int[][] a)
{
    int largest = a[0][0];

    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            if (a[row][col] > largest)
            {
                largest = a[row][col];
            }
        }
    }

    return largest;
}
```

在我们的成绩表中，最终 `largest = 9`。

### 为什么要用 `a[0][0]` 初始化？

因为最大值有可能是负数。例如：

```java
int[][] numbers = {
    {-8, -3},
    {-10, -5}
};
```

如果写 `int largest = 0;`，最后会错误地得到 `0`，但 `0` 根本不在数组里。

正确做法是：**先选用数组中真实存在的一个元素，再逐个比较。**

- 找全表最大值：初始值通常是 `a[0][0]`。
- 找指定行最大值：初始值可以是 `a[row][0]`。
- 找指定列最大值：初始值可以是 `a[0][col]`。
- 找最小值：把比较符号改为 `<`。

这些初始化方式都要求所选范围非空。

# 4. Any、All 和 Count：对二维数组中的元素做判断

这三种算法也来自 4.5，但这次要注意**判断范围**。

## 4.1 Any：是否至少有一个元素符合条件？

例如，判断全表中有没有大于 `8` 的元素：

```java
public static boolean hasValueAbove8(int[][] a)
{
    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            if (a[row][col] > 8)
            {
                return true;
            }
        }
    }

    return false;
}
```

我们的成绩表里有 `9`，因此返回 `true`。

**找到一个就足够了**，可以提前返回；如果没有找到，必须等两个循环都结束后才能返回 `false`。

## 4.2 All：是否所有元素都符合条件？

例如，判断所有数字是否都大于 `0`：

```java
public static boolean allPositive(int[][] a)
{
    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            if (a[row][col] <= 0)
            {
                return false;
            }
        }
    }

    return true;
}
```

我们的成绩表里所有值都大于 `0`，因此返回 `true`。

**All 的思路是寻找反例。** 只要有一个元素不符合条件，就可以提前返回 `false`。

## 4.3 Count：有多少个元素符合条件？

例如，计算整个二维数组中数字 `3` 出现了几次：

```java
public static int countThrees(int[][] a)
{
    int count = 0;

    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            if (a[row][col] == 3)
            {
                count++;
            }
        }
    }

    return count;
}
```

答案是 `4`：

```text
(0, 0)  (0, 2)  (1, 1)  (2, 2)
```

## 三种算法的核心区别

| 算法 | 要回答的问题 | 可以提前结束吗？ |
|---|---|---|
| **Any** | 至少有一个符合条件吗？ | 可以，找到一个就 `return true` |
| **All** | 全部符合条件吗？ | 可以，找到一个反例就 `return false` |
| **Count** | 一共有多少个符合条件？ | 通常不能，必须处理完指定范围 |

特别注意：如果题目说“**第 2 行**中是否有一个值大于 8”，就只需要遍历这一行；如果说“**整个二维数组**中是否有一个值大于 8”，才需要遍历全表。

# 5. Subsection：只处理指定的矩形区域

Runestone 4.13.2 专门介绍了对二维数组的一部分（subsection）进行处理。

例如，我们只检查：

- Row 0 到 Row 1。
- Col 1 到 Col 2。

对应下面四个元素：

| Row / Col | Col 0 | **Col 1** | **Col 2** | Col 3 |
|---|---:|---:|---:|---:|
| **Row 0** | 3 | **1** | **3** | 4 |
| **Row 1** | 5 | **3** | **2** | 6 |
| Row 2 | 7 | 8 | 3 | 9 |

这个区域中数字 `3` 出现了 **2 次**。

## 5.1 指定区域计数的完整方法

```java
public static int countValues(int value, int[][] a,
    int rowStart, int rowEnd, int colStart, int colEnd)
{
    int count = 0;

    for (int row = rowStart; row <= rowEnd; row++)
    {
        for (int col = colStart; col <= colEnd; col++)
        {
            if (a[row][col] == value)
            {
                count++;
            }
        }
    }

    return count;
}
```

调用：

```java
countValues(3, scores, 0, 1, 1, 2)
```

得到 `2`。

### 为什么使用 `<=` 而不是 `<`？

因为这个方法规定，`rowEnd` 和 `colEnd` **也属于指定区域**。

因此：

```java
row <= rowEnd
col <= colEnd
```

如果改成 `<`，就会漏掉区域最下面一行或最右边一列。

**这与遍历整个数组时使用 `< a.length` 并不矛盾：** `a.length` 本身不是有效 index，而本方法的 `rowEnd` / `colEnd` 是需要包含的有效 index。

### 5.2 手工追踪指定区域

调用 `countValues(3, scores, 0, 1, 1, 2)` 的执行情况：

| `(row, col)` | 当前值 | 等于 3？ | `count` |
|---|---:|---|---:|
| (0, 1) | 1 | 否 | 0 |
| (0, 2) | 3 | 是 | 1 |
| (1, 1) | 3 | 是 | 2 |
| (1, 2) | 2 | 否 | 2 |

这种表格追踪方法同样适用于 Sum、Max、Any、All 等指定区域算法。

# 6. Consecutive Pairs：比较相邻的元素

在一维数组中，相邻元素通常是 `array[i]` 与 `array[i + 1]`。

到了二维数组里，**要先看题目规定“相邻”是哪个方向**：

- **水平方向**：同一行中，左右相邻的两个元素。
- **垂直方向**：同一列中，上下相邻的两个元素。

如果题目没有要求，不能擅自把对角线元素也算作相邻。

## 6.1 比较水平方向相邻元素

假设要统计“左右相邻、两数之和至少为 10”的元素对：

```java
public static int countHorizontalPairs(int[][] a)
{
    int count = 0;

    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length - 1; col++)
        {
            if (a[row][col] + a[row][col + 1] >= 10)
            {
                count++;
            }
        }
    }

    return count;
}
```

在我们的成绩表中，符合条件的水平相邻对是：

```text
Row 2: (7, 8), (8, 3), (3, 9)
```

结果为 `3`。

**边界为什么是 `col < a[row].length - 1`？** 因为我们还要访问 `col + 1`。最后一列没有右邻居。

## 6.2 比较垂直方向相邻元素

例如，要统计上下相邻、两数之和至少为 10 的元素对：

```java
public static int countVerticalPairs(int[][] a)
{
    int count = 0;

    for (int row = 0; row < a.length - 1; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            if (a[row][col] + a[row + 1][col] >= 10)
            {
                count++;
            }
        }
    }

    return count;
}
```

结果为 `4`：

```text
(0,3) 与 (1,3): 4 + 6 = 10
(1,0) 与 (2,0): 5 + 7 = 12
(1,1) 与 (2,1): 3 + 8 = 11
(1,3) 与 (2,3): 6 + 9 = 15
```

这里的关键边界变成了 `row < a.length - 1`，因为最后一行没有下邻居。

| 比较方向 | 两个元素 | 哪个循环不能走到最后一个 index？ |
|---|---|---|
| 水平 | `a[row][col]`、`a[row][col + 1]` | `col` |
| 垂直 | `a[row][col]`、`a[row + 1][col]` | `row` |

# 7. Duplicates：如何检查二维数组中是否存在重复元素？

这一部分难度会明显增加，因为题目可能要求：

- 检查**指定的一行**有没有重复值。
- 检查**指定的一列**有没有重复值。
- 检查**整个二维数组**中任意两个不同位置是否存在相同的值。

最后一种情况是 Runestone 4.13.3 的重点挑战。

## 7.1 先从“一行中有没有重复”开始

指定的一行本身就是一个一维数组，所以可以直接沿用 4.5 的方法。

```java
public static boolean hasDuplicateInRow(int[][] a, int row)
{
    for (int i = 0; i < a[row].length; i++)
    {
        for (int j = i + 1; j < a[row].length; j++)
        {
            if (a[row][i] == a[row][j])
            {
                return true;
            }
        }
    }

    return false;
}
```

Row 0 是 `{3, 1, 3, 4}`，其中 index 0 和 index 2 都是 `3`，所以返回 `true`。

为什么 `j = i + 1`？因为比较两个**不同位置**时，不需要拿一个元素和自己比较，也不需要重复检查同一对位置。

## 7.2 全表查重：为什么 Runestone 使用四层循环？

如果题目要求“整个二维数组中任意两个不同位置是否有相同的值”，就要比较**两个位置**：

```text
第一个位置：(row, col)
第二个位置：(row2, col2)
```

一个位置需要两个 index；两个位置就需要四个 index。

这是理解四层循环的最自然方式。

```java
public static boolean hasDuplicate(int[][] a)
{
    for (int row = 0; row < a.length; row++)
    {
        for (int col = 0; col < a[row].length; col++)
        {
            for (int row2 = row; row2 < a.length; row2++)
            {
                int startCol;

                if (row2 == row)
                {
                    startCol = col + 1;
                }
                else
                {
                    startCol = 0;
                }

                for (int col2 = startCol; col2 < a[row2].length; col2++)
                {
                    if (a[row][col] == a[row2][col2])
                    {
                        return true;
                    }
                }
            }
        }
    }

    return false;
}
```

不要一开始就尝试记住整段代码。先理解它在做什么：

1. 外面两层循环选定当前元素 `(row, col)`。
2. 里面两层循环选择它后面尚未比较过的其他位置 `(row2, col2)`。
3. 如果两个位置的值相同，立即返回 `true`。
4. 全部比较结束还没有找到，返回 `false`。

### 为什么有 `startCol` 这个变量？

这是本题最值得看懂的细节。

- 如果 `row2 == row`，第二个位置仍在**同一行**，就从 `col + 1` 开始，避免和自己比较。
- 如果 `row2 > row`，第二个位置已经在**后面的行**，就应该从那一行的 `0` 列开始，不漏掉任何元素。

例如，第一个位置是 `(0, 0)`，值为 `3`：

```text
比较 (0,0) 后面的 (0,1)、(0,2)、(0,3)
再比较第 1 行和第 2 行的所有位置
```

它会发现 `(0,2)` 也是 `3`，于是立即返回 `true`。

**注意：** 这一算法检查的是全表的任意重复值，不只是相邻重复值。对于 `String[][]` 等对象数组，判断内容相等时还需要使用合适的 `.equals()` 方法，而不是直接用 `==` 比较字符串内容。

# 8. Shift 与 Rotate：移动一行或一列

Runestone 4.13.4 的重点是对某一行进行向右旋转。它和 4.5 的一维数组旋转思路完全相同：**先保存即将丢失的元素，再沿正确的方向移动，最后放回另一端。**

为了更清楚地观察元素移动，以下使用一个新的小矩阵：

```java
int[][] board = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

| | Col 0 | Col 1 | Col 2 |
|---|---:|---:|---:|
| Row 0 | 1 | 2 | 3 |
| Row 1 | 4 | 5 | 6 |
| Row 2 | 7 | 8 | 9 |

## 8.1 先分清 Shift 和 Rotate

假设我们只处理 Row 1：

```text
原来：          {4, 5, 6}
Shift Right：   {0, 4, 5}   // 最后一个 6 被移出，空位填 0
Rotate Right：  {6, 4, 5}   // 最后一个 6 绕回最前面
```

**Shift（移动）** 需要按题目要求处理空出的位置；**Rotate（旋转）** 则要把移出的一端放回另一端，保留所有原有元素。

## 8.2 指定行向右旋转（Rotate Row Right）

```java
public static int[][] rotateRowRight(int[][] a, int row)
{
    int last = a[row][a[row].length - 1];

    for (int col = a[row].length - 1; col > 0; col--)
    {
        a[row][col] = a[row][col - 1];
    }

    a[row][0] = last;
    return a;
}
```

调用：

```java
rotateRowRight(board, 1);
```

Row 1 的变化：

| 步骤 | Row 1 的状态 |
|---|---|
| 初始 | `{4, 5, 6}` |
| 保存 `last = 6` | `{4, 5, 6}` |
| `col = 2`：把 index 1 移到 index 2 | `{4, 5, 5}` |
| `col = 1`：把 index 0 移到 index 1 | `{4, 4, 5}` |
| `a[row][0] = last` | `{6, 4, 5}` |

最终矩阵：

```text
{1, 2, 3}
{6, 4, 5}
{7, 8, 9}
```

### 为什么从右往左移动？

因为要向右移动元素。如果先从 index 0 开始往右复制，很容易提前覆盖还没有移动的数值。

所以顺序必须是：

1. 保存最后一个元素。
2. 从右往左，把前一个元素复制到后一个位置。
3. 把保存的元素放到第一个位置。

**本方法修改的是原数组本身**。返回 `a` 只是返回同一个二维数组对象的引用，并没有创建新数组。

## 8.3 指定列向下旋转（Rotate Column Down）

现在换一种方向：把 Col 0 的元素向下旋转一格。

原来：

```text
1
4
7
```

旋转后：

```text
7
1
4
```

写法与行旋转非常相似，只是这次**固定 `col`，改变 `row`**：

```java
public static void rotateColDown(int[][] a, int col)
{
    int last = a[a.length - 1][col];

    for (int row = a.length - 1; row > 0; row--)
    {
        a[row][col] = a[row - 1][col];
    }

    a[0][col] = last;
}
```

在一个尚未修改的 `board` 上调用 `rotateColDown(board, 0)`，结果是：

```text
{7, 2, 3}
{1, 5, 6}
{4, 8, 9}
```

注意这里特意使用了**未执行上一节行旋转的原始 board**，所以两节的结果不要连在一起追踪。

两种方向放在一起比较：

| Row → Right | Column ↓ Down |
|---|---|
| 固定 `row` | 固定 `col` |
| 变量 `col` 从大到小 | 变量 `row` 从大到小 |
| `a[row][col] = a[row][col - 1]` | `a[row][col] = a[row - 1][col]` |

## 8.4 如果只是 Shift，不是 Rotate 呢？

例如，Row 1 向右移动，并把空出的位置填 `0`：

```java
public static void shiftRowRight(int[][] a, int row)
{
    for (int col = a[row].length - 1; col > 0; col--)
    {
        a[row][col] = a[row][col - 1];
    }

    a[row][0] = 0;
}
```

对于 `{4, 5, 6}`，结果是 `{0, 4, 5}`。

与 Rotate 的区别：**不需要保存并重新放回最后一个元素**，因为题目要求的是移动并填充空位。

向左移动或向上移动时，也要把循环的方向相应改成从前往后，避免覆盖尚未移动的数值。

# 9. Reverse：反转指定的一行或一列

反转（reverse）不是只移动一格，而是把元素顺序完全颠倒。

例如：

```text
Row: {1, 2, 3, 4} → {4, 3, 2, 1}
```

它仍然沿用 4.5 的思路：**两端交换，逐步向中间靠近，只需要交换一半的位置。**

## 9.1 反转指定的一行

```java
public static void reverseRow(int[][] a, int row)
{
    int left = 0;
    int right = a[row].length - 1;

    while (left < right)
    {
        int temp = a[row][left];
        a[row][left] = a[row][right];
        a[row][right] = temp;

        left++;
        right--;
    }
}
```

例如，原始 `board` 的 Row 0 是 `{1, 2, 3}`；反转后是 `{3, 2, 1}`。

## 9.2 反转指定的一列

同一个算法也可以用于列，只需要让两个指针改为控制 row：

```java
public static void reverseCol(int[][] a, int col)
{
    int top = 0;
    int bottom = a.length - 1;

    while (top < bottom)
    {
        int temp = a[top][col];
        a[top][col] = a[bottom][col];
        a[bottom][col] = temp;

        top++;
        bottom--;
    }
}
```

在原始 `board` 上反转 Col 1：

```text
原列：2, 5, 8
反转：8, 5, 2
```

得到：

```text
{1, 8, 3}
{4, 5, 6}
{7, 2, 9}
```

> **关键区别：Rotate 把元素整体移动一格并首尾衔接；Reverse 把前后元素的位置完全对调。**

# 10. AP 考试：如何根据题目选择算法？

本课的官方内容是 **4.13.A.1**，列出九类必须认识并会实现的二维数组算法。虽然它们都属于一个知识条目，但题目可以要求处理**全表、指定行、指定列或指定区域**。

| 官方要求（4.13.A.1） | 题目关键词 | 核心思路 |
|---|---|---|
| 1. **Minimum / Maximum** | 最大、最小 | 用范围内真实元素初始化，逐个比较更新 |
| 2. **Sum / Average** | 总和、平均 | 累加器；平均值还需正确的元素数量 |
| 3. **At least one（Any）** | 是否至少一个 | 找到符合条件的就 `return true` |
| 4. **All** | 是否全部 | 找到反例就 `return false` |
| 5. **Count** | 有多少个 | 符合条件时 `count++` |
| 6. **Consecutive Pairs** | 相邻元素 | 判断左右或上下，设置 `+1` 的有效边界 |
| 7. **Duplicates** | 重复值 | 比较两个不同位置；全表可使用四层循环 |
| 8. **Shift / Rotate** | 左移、右移、上移、下移 | 先判断方向和是否需要首尾衔接 |
| 9. **Reverse** | 反转 | 两端交换，逐步靠近中间 |

官方学习目标 **4.13.A** 还要求能够：

- **根据要求写代码**：不只是识别现成算法，还要会编写方法。
- **判断结果**：追踪循环的顺序、变量变化和数组最终状态。
- **解释与修复错误**：例如错误的索引边界、移动方向或提前返回。

相关建议技能为 **2.B、3.B、3.D、4.A**。

## 读题时的四步判断法

1. **圈出处理范围**：整个数组、某行、某列，还是 `(rowStart, colStart)` 到 `(rowEnd, colEnd)`？
2. **圈出目标**：求数字、判断真假、比较元素，还是改变位置？
3. **决定遍历方式**：需要一层还是两层循环？哪些 index 是固定的？
4. **检查边界和状态**：`row + 1`、`col + 1` 会不会越界？是否覆盖旧值？是否提前返回？

# 11. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 求某列总和时循环 `col` 而不是 `row` | 固定列号，让行号从上往下改变 |
| 求某行总和时把 `total` 放在循环内部 | 累加器应在遍历前初始化，否则每轮清零 |
| 求平均值时永远用 `a.length` 作分母 | 全表用总元素数；某行用列数；某列用行数 |
| 用 `0` 初始化最大值或最小值 | 负数数据会出错；应该用处理范围内真实存在的元素 |
| 判断 Any 时第一次不匹配就返回 `false` | 必须确认整个指定范围都检查过后，才能返回 `false` |
| 判断 All 时发现一个匹配就返回 `true` | 必须找反例；全部检查完才能确认 All 成立 |
| 访问 `a[row][col + 1]` 却没有减少列边界 | 水平相邻对要确保 `col + 1` 有效 |
| 访问 `a[row + 1][col]` 却没有减少行边界 | 垂直相邻对要确保 `row + 1` 有效 |
| 检查全表重复时只比较同一行 | 任意重复可能出现在不同的行 |
| 全表查重时把某位置与自己比较 | 应比较不同位置，避免每个元素都被当作重复 |
| 处理包含端点的指定区域时使用 `< rowEnd` | 若题目说明端点也包含在内，应使用 `<= rowEnd` |
| Rotate 时没有保存最后一个或第一个元素 | 该元素可能被移动过程覆盖而丢失 |
| 向右或向下移动时从前往后复制 | 可能覆盖未移动的值；应从后往前 |
| 将 Rotate 与 Reverse 混淆 | Rotate 首尾衔接移动一格；Reverse 将顺序颠倒 |

# 12. Mini Practice：AP 风格练习

以下练习基于本课讲解的数组算法，题目为原创练习，不是直接摘录的官方考试题。

## Practice 1：固定行还是固定列？

```java
int[][] a = {
    {2, 4, 6},
    {3, 5, 7},
    {8, 1, 9}
};

int total = 0;
for (int r = 0; r < a.length; r++)
{
    total += a[r][1];
}
```

最终 `total` 是多少？

A. `12`　B. `10`　C. `15`　D. `9`

**答案：B。** `col = 1` 始终固定，访问的是 `4、5、1`，所以总和是 `10`。这道题的关键不是看见 `r` 就觉得在计算一行，而是看清访问表达式 `a[r][1]`。

## Practice 2：判断指定区域

使用本课最开始的 `scores`：

```java
int[][] scores = {
    {3, 1, 3, 4},
    {5, 3, 2, 6},
    {7, 8, 3, 9}
};
```

执行：

```java
countValues(3, scores, 1, 2, 1, 3)
```

结果是多少？

A. `1`　B. `2`　C. `3`　D. `4`

**答案：B。** 检查 Row 1–2、Col 1–3，得到 `3,2,6,8,3,9`，其中有两个 `3`。

## Practice 3：找最大值

```java
int[][] a = {
    {-6, -8},
    {-2, -5}
};

int largest = 0;
for (int r = 0; r < a.length; r++)
{
    for (int c = 0; c < a[r].length; c++)
    {
        if (a[r][c] > largest)
        {
            largest = a[r][c];
        }
    }
}
```

这段代码的问题是什么？

A. 内层应该遍历 `r`。  
B. `largest` 初始值应该是 `a[0][0]`。  
C. 应该使用增强型 `for`。  
D. 最大值必须从最右下角开始找。

**答案：B。** 所有元素都是负数，`0` 会造成错误的最大值。正确结果应该是 `-2`。

## Practice 4：相邻元素边界

如果需要在循环中访问：

```java
a[row][col] + a[row][col + 1]
```

哪个内层循环条件最合适？

A. `col < a[row].length`  
B. `col <= a[row].length`  
C. `col < a[row].length - 1`  
D. `col <= a[row].length - 1`

**答案：C。** `col + 1` 也必须是有效 index，因此 `col` 不能到最后一列。

## Practice 5：全表重复检测

一个方法要检查二维数组中**任意两个不同位置**是否保存相同的 `int` 值。为什么只比较 `a[row][col]` 和 `a[row][col + 1]` 不够？

**参考答案：** 因为它只检查同一行里水平相邻的位置。重复值可能位于同一行但不相邻，也可能位于不同行。因此需要检查其他位置，而不能只比较右邻居。

## Practice 6：追踪向右旋转

```java
int[][] board = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

rotateRowRight(board, 1);
```

执行后，`board[1][0]` 和 `board[1][2]` 分别是多少？

A. `4`、`6`  
B. `6`、`5`  
C. `5`、`4`  
D. `6`、`4`

**答案：B。** Row 1 从 `{4, 5, 6}` 变成 `{6, 4, 5}`。

## Practice 7：FRQ-style — 完成指定列求和方法

请完成下面的方法，返回指定列所有元素的总和。假设 `a` 是非空矩形二维数组，`col` 是有效列号。

```java
public static int columnSum(int[][] a, int col)
{
    // Write your code here.
}
```

**参考答案：**

```java
public static int columnSum(int[][] a, int col)
{
    int sum = 0;

    for (int row = 0; row < a.length; row++)
    {
        sum += a[row][col];
    }

    return sum;
}
```

解释：固定 `col`，遍历所有 `row`。不需要两层循环。

## Practice 8：FRQ-style — 完成指定列向下旋转

请完成方法 `rotateColDown`，将 `a` 的指定列**向下旋转一格**，直接修改原数组。假设 `a` 是非空矩形二维数组，`col` 是有效列号。

例如：

```text
原列：2, 5, 8
结果：8, 2, 5
```

```java
public static void rotateColDown(int[][] a, int col)
{
    // Write your code here.
}
```

**参考答案：**

```java
public static void rotateColDown(int[][] a, int col)
{
    int last = a[a.length - 1][col];

    for (int row = a.length - 1; row > 0; row--)
    {
        a[row][col] = a[row - 1][col];
    }

    a[0][col] = last;
}
```

关键评分思路：

1. 正确保存最后一个元素。
2. 从最后一行向上移动，把上一行的数据复制到下一行。
3. 把保存的值放回第 0 行的指定列。
4. 不修改其他列，也不创建不必要的新二维数组。

## Practice 9：解释代码行为

```java
int[][] nums = {
    {1, 2, 3},
    {4, 5, 6}
};

int total = 0;
for (int r = 0; r < nums.length; r++)
{
    for (int c = 0; c < nums[0].length - 1; c++)
    {
        total += nums[r][c];
    }
}
```

这个算法最终会得到多少？为什么？

**答案：12。** 每一行只访问 Col 0、Col 1，跳过每一行的最后一列，因此加的是 `1 + 2 + 4 + 5 = 12`。这类边界追踪题也考查了 4.12 的嵌套循环理解。

# Unit 4.13 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| 2D array algorithm | 二维数组算法；在二维数组上实现特定任务的步骤 |
| traversal scope | 遍历范围；需要处理全表、某行、某列或指定区域 |
| designated row / column | 指定行 / 指定列 |
| subsection | 子区域；二维数组中指定的部分范围 |
| accumulator | 累加器；持续记录总和等计算结果的变量 |
| minimum / maximum | 最小值 / 最大值 |
| average | 平均值；总和除以相应元素数量 |
| property | 条件或特征；判断元素是否满足某项要求 |
| count | 计数；统计满足条件的元素数量 |
| consecutive pairs | 相邻元素对；同一行或同一列中连续的位置 |
| duplicate | 重复元素；不同位置出现相同的值 |
| nested loops | 嵌套循环；一个循环位于另一个循环内部 |
| shift | 移动；元素移动后需处理空位 |
| rotate | 旋转；把移出一端的元素放到另一端 |
| reverse | 反转；将元素的前后顺序颠倒 |
| in place | 原地修改；直接更改传入的数组，而非创建新数组 |
| temporary variable | 临时变量；保存即将被覆盖的值 |
| off-by-one error | 边界错误；循环多访问或少访问一个位置 |

---

**下一课预告：** 4.13 已把一维数组的常见算法扩展到了二维数组。4.14 将进一步系统学习 **Searching Algorithms（查找算法）**，包括如何判断线性查找的结果，以及如何在二维数组中逐行查找。

**参考资料：**

- [Runestone CSAwesome2 — 4.13 Implementing 2D Array Algorithms](https://runestone.academy/ns/books/published/csawesome2/topic-4-13-2Darray-algorithms.html)
- [College Board — AP Computer Science A Course and Exam Description（Effective Fall 2025）, Topic 4.13, p. 117](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
