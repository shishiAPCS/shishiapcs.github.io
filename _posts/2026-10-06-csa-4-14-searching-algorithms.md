---
title: "AP CSA 4.14：查找算法"
layout: post
categories: media
render_with_liquid: false
---

在前面的课程中，我们已经学会了遍历 array、`ArrayList` 和 2D array，也编写过“找到一个符合条件的元素就返回”的代码。

现在考虑一个更具体的问题：**给定一份数据和一个目标值（target），如何判断它是否存在？如果存在，它在哪个位置？**

例如，老师想在学生名单中查找某个人，或者在一张成绩表中查找某个分数。我们不需要事先知道目标在哪个位置，可以让程序按照一定顺序逐个检查。

> **本课的核心：Linear Search（线性查找）依次检查元素，找到目标就结束；如果直到最后都没找到，才确定目标不存在。**

**考纲提醒：** Runestone 4.14 同时介绍 Linear Search 和 Binary Search，但 College Board 2025 版 CED 把 **4.14.A.1–A.2 的正式要求集中在线性查找**。Binary Search 会在本课作为教材拓展与 **4.17.B 的预习**出现，重点区分考试范围，不必在这里提前掌握递归版 Binary Search。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.14 Searching Algorithms

## 1. Linear Search（线性查找）
* 按顺序逐个检查元素
* 不要求数组预先排序
* 找到 target 就可以提前 return
* 检查完仍未找到，返回 -1 或 false
* 从左到右 / 从右到左均可

## 2. 在不同数据结构中查找
* Array：`a.length`、`a[i]`
* ArrayList：`list.size()`、`list.get(i)`
* String：用 `.equals()` 比较内容
* 重复元素：前向查找返回第一个，后向查找返回最后一个

## 3. 在二维数组中查找
* 外层访问每一个 row
* 内层在当前 row 中执行 linear search
* `grid[row][col]` 表示当前被检查的元素
* 可以返回 boolean，也可以按题意返回位置

## 4. Binary Search（4.17 预习）
* **必须先排序**
* 检查中间元素，而不是从头到尾依次检查
* 每次排除一半搜索范围
* `left`、`right`、`middle`
* 迭代与递归的深入考查放在 4.17

## 5. 查找效率与 AP 考点
* Linear Search：最好情况只检查一次
* 目标不存在时，Linear Search 需检查所有元素
* Binary Search 通常检查更少元素（前提：有序）
* 4.14.A.1：array / ArrayList 双向线性查找
* 4.14.A.2：二维数组逐行线性查找

</script>
</div>
</div>

# 1. 第一个 AP 核心考法：查找失败时，什么时候才能返回？

先看这个数组：

```java
int[] scores = {92, 76, 88, 95, 81};
```

假设我们要找的目标值是 `95`。

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| `scores[index]` | 92 | 76 | 88 | **95** | 81 |

从左向右依次检查：

1. Index 0 是 92，不匹配，继续。
2. Index 1 是 76，不匹配，继续。
3. Index 2 是 88，不匹配，继续。
4. Index 3 是 95，匹配，立即返回 index `3`。

这就是 Linear Search（线性查找），也叫 Sequential Search（顺序查找）。

**一个非常重要的区别：**

- **找到目标**：马上就能得出结论，可以提前 `return`。
- **没有找到目标**：必须检查完应该搜索的所有位置，才能得出结论。

所以，查找算法的 `return -1` 或 `return false` 通常要放在循环**结束之后**，而不是第一次遇到不匹配就返回。

# 2. Linear Search：一维数组的标准写法

Runestone 使用了一个返回目标 index 的查找方法。下面用成绩数组整理成更方便理解的版本：

```java
public static int linearSearch(int[] scores, int target)
{
    for (int i = 0; i < scores.length; i++)
    {
        if (scores[i] == target)
        {
            return i;
        }
    }

    return -1;
}
```

例如：

```java
int[] scores = {92, 76, 88, 95, 81};

System.out.println(linearSearch(scores, 95)); // 3
System.out.println(linearSearch(scores, 100)); // -1
```

## 2.1 理解这段方法的每一个部分

| 代码 | 作用 |
|---|---|
| `int[] scores` | 要搜索的数组 |
| `int target` | 想寻找的目标值 |
| `i = 0` | 从第一个元素开始 |
| `i < scores.length` | 保证访问的 index 在有效范围内 |
| `scores[i] == target` | 判断当前元素是否匹配 |
| `return i;` | 找到目标，返回它的 index，并结束整个 method |
| `return -1;` | 全部检查完仍未找到，返回表示“未找到”的值 |

为什么用 `-1`？因为合法的数组 index 是 `0` 到 `length - 1`。`-1` 不会与任何合法位置混淆。

这里的 `-1` **不是 Java 自动产生的查找结果**，而是这个方法约定的返回值。别的方法也可能选择返回 `boolean`。

## 2.2 查找不要求数据有序

下面两个数组都可以使用线性查找：

```java
int[] a = {2, 7, 11, 18, 25};    // sorted
int[] b = {18, 2, 25, 7, 11};    // unsorted
```

Linear Search 按照当前顺序逐个比较，因此**不需要事先排序**。

它的代价是：如果目标排在后面，或者根本不存在，就需要检查很多元素。

## 2.3 找到之后为什么不能继续执行？

```java
if (scores[i] == target)
{
    return i;
}
```

`return` 不只是结束这一轮循环，而是**直接结束整个 method**。因此，一旦找到匹配的元素，后面的元素就不再被检查。

如果题目要求的是“判断有没有”，这种提前返回很高效；但如果题目要求的是“统计出现了多少次”，就不能找到第一个就返回，而应该继续遍历并计数。

# 3. 从左往右与从右往左：重复元素会影响结果

College Board 4.14.A.1 明确指出：线性查找可以从 array 或 `ArrayList` 的**任意一端**开始。

看下面的数组：

```java
int[] nums = {4, 7, 2, 7, 9};
```

| Index | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Value | 4 | **7** | 2 | **7** | 9 |

## 3.1 从前往后查找

前面的 `linearSearch(nums, 7)` 会先找到 index `1`，所以返回 `1`。

## 3.2 从后往前查找

```java
public static int searchFromEnd(int[] nums, int target)
{
    for (int i = nums.length - 1; i >= 0; i--)
    {
        if (nums[i] == target)
        {
            return i;
        }
    }

    return -1;
}
```

这次从 index 4 开始，依次检查 `9 → 7`，先找到 index `3`，所以返回 `3`。

| 查找方向 | 第一个匹配到的 `7` | 返回值 |
|---|---|---:|
| 从前往后 | Index 1 | `1` |
| 从后往前 | Index 3 | `3` |

**这里没有矛盾：** 两段代码都是正确的线性查找，但它们返回的匹配位置可能不同。

如果目标在数组中出现多次，**“返回哪个 index”取决于遍历顺序和题目要求**。

另外，空数组也能使用这两段方法：循环不会执行，最后返回 `-1`。

# 4. ArrayList 中的 Linear Search

查找思路完全相同。变化的是访问集合元素的写法：

| Array | ArrayList |
|---|---|
| `a.length` | `list.size()` |
| `a[i]` | `list.get(i)` |

例如：

```java
import java.util.ArrayList;

public class ScoreSearch
{
    public static int linearSearch(ArrayList<Integer> scores,
                                   int target)
    {
        for (int i = 0; i < scores.size(); i++)
        {
            if (scores.get(i) == target)
            {
                return i;
            }
        }

        return -1;
    }
}
```

假设 `scores` 中保存的是：

```text
[92, 76, 88, 95, 81]
```

那么 `linearSearch(scores, 95)` 仍然返回 `3`。

这里有一个细节值得注意：`scores.get(i)` 返回 `Integer`，而 `target` 是 `int`。Java 会对非 `null` 的 `Integer` 自动拆箱（unboxing），然后使用 `==` 比较两个 `int` 值。

**不要由此误以为 `==` 可以普遍用于比较对象内容。** 如果是 `String`，我们应该使用 `.equals()`；如果是两个 `Integer` 对象，也不应依赖 `==` 判断它们表示的数值是否相等。

本例假设 `ArrayList<Integer>` 中没有 `null` 元素，否则自动拆箱可能产生 `NullPointerException`。

## 为什么不直接调用 `contains()`？

Java 的 `ArrayList` 确实有一些现成的搜索方法，例如 `contains()`。但 Runestone 说明，它不属于本课采用的 AP CSA Java subset 中要求掌握的方法。

因此，**这节课的考试重点是自己编写、分析线性查找过程**，不能依赖 `contains()` 跳过算法。

# 5. 查找 String：使用 `.equals()` 比较内容

假设我们在一份学生名字列表中寻找 `"Mia"`：

```java
public static int findName(String[] names, String target)
{
    for (int i = 0; i < names.length; i++)
    {
        if (names[i].equals(target))
        {
            return i;
        }
    }

    return -1;
}
```

调用：

```java
String[] names = {"Leo", "Mia", "Eva", "Noah"};

System.out.println(findName(names, "Mia"));  // 1
System.out.println(findName(names, "Lily")); // -1
```

为什么不使用 `names[i] == target`？

因为对于 `String`：

- `==` 比较的是两个引用是否指向同一个对象。
- `.equals()` 比较的是两个 String 的字符内容是否相同。

我们想查找的是**内容相同的名字**，因此应该使用 `.equals()`。

这里假设 `names` 中的元素不是 `null`。如果可能包含 `null`，还需要额外处理，但这不是本课的主要难点。

# 6. 2D Array：怎样在线性查找中加入 Row 和 Column？

这是 **AP 4.14.A.2** 明确要求的知识点，不能只学一维数组就结束。

上一课我们使用二维数组表示学生成绩表。现在假设要在整个表格中查找分数 `91`：

```java
int[][] scores = {
    {85, 91, 78},
    {88, 76, 90},
    {91, 84, 95}
};
```

| Row | Col 0 | Col 1 | Col 2 |
|---|---:|---:|---:|
| 0 | 85 | **91** | 78 |
| 1 | 88 | 76 | 90 |
| 2 | **91** | 84 | 95 |

二维数组中的线性查找可以理解为两层工作：

1. **Outer loop（外层循环）**：依次进入每一行。
2. **Inner loop（内层循环）**：在当前行中从左往右查找目标。

## 6.1 返回 Boolean：有没有找到？

```java
public static boolean containsScore(int[][] scores, int target)
{
    for (int row = 0; row < scores.length; row++)
    {
        for (int col = 0; col < scores[row].length; col++)
        {
            if (scores[row][col] == target)
            {
                return true;
            }
        }
    }

    return false;
}
```

例如：

```java
System.out.println(containsScore(scores, 91));  // true
System.out.println(containsScore(scores, 100)); // false
```

注意：

- `scores.length` 是行数。
- `scores[row].length` 是当前行的列数。
- `scores[row][col]` 是当前正在比较的元素。
- 只要找到目标，就可以 `return true`，不需要继续查找其他行。
- 只有所有行都检查完了，仍然没有找到，才返回 `false`。

## 6.2 用追踪表理解二维线性查找

对于 `containsScore(scores, 91)`：

| 检查次序 | `row` | `col` | 当前值 | 结果 |
|---|---:|---:|---:|---|
| 1 | 0 | 0 | 85 | 不匹配，继续 |
| 2 | 0 | 1 | 91 | 匹配，返回 `true` |

因为找到目标后就立即返回，**Row 0 的 Col 2 和后面的两行根本不会被访问**。

这再次说明：遍历顺序会决定算法实际检查哪些元素。

## 6.3 如果要返回目标的 Row 和 Column 呢？

题目也可能要求返回一个位置，而不仅仅是 `true` 或 `false`。

下面返回一个长度为 2 的 `int[]`：第一项是 row，第二项是 col。若没有找到，返回 `{-1, -1}`。

```java
public static int[] findPosition(int[][] grid, int target)
{
    for (int row = 0; row < grid.length; row++)
    {
        for (int col = 0; col < grid[row].length; col++)
        {
            if (grid[row][col] == target)
            {
                return new int[] {row, col};
            }
        }
    }

    return new int[] {-1, -1};
}
```

例如 `findPosition(scores, 91)` 返回 `{0, 1}`，因为这里按照 row-major order 从左到右、从上到下查找，遇到的第一个 `91` 位于 Row 0、Col 1。

**本例是便于理解位置的扩展示例**。正式题目要求返回什么，就应该按照 method specification 返回 `boolean`、`int` 或位置数据，不要认为搜索算法只能有一种固定的返回类型。

## 6.4 二维 String 数组也可以搜索

如果二维数组保存的是 `String`，算法结构不变，只需要把数值比较替换成 `.equals()`：

```java
public static boolean containsName(String[][] seats, String target)
{
    for (int row = 0; row < seats.length; row++)
    {
        for (int col = 0; col < seats[row].length; col++)
        {
            if (seats[row][col].equals(target))
            {
                return true;
            }
        }
    }

    return false;
}
```

这里同样假设被比较的 `String` 元素都不是 `null`。

# 7. Binary Search：为什么可以不用检查每一个元素？（4.17 预习）

Runestone 在本课后半部分还讲了 **Binary Search（二分查找）**。为了理解它，先想象在按字母排序的英文词典中找一个单词。

如果要找 `melon`，你大概不会从第一页开始逐个单词检查；你会先翻到中间，再决定往前翻还是往后翻。

这就是二分查找的核心思想：**每次检查中间元素，并根据比较结果排除当前搜索范围的一半。**

## 7.1 Binary Search 有一个重要前提：数据必须有序

例如：

```java
int[] sorted = {2, 7, 11, 18, 25, 32, 41, 50, 63};
```

可以对这个从小到大排列的数组使用二分查找。

但对于：

```java
int[] unsorted = {25, 2, 41, 7, 32, 11, 63, 18, 50};
```

不能直接套用下面的标准二分查找算法，因为它根据中间值的大小决定丢弃哪一半；如果数据无序，这个判断就没有依据。

**Linear Search 不要求排序；Binary Search 要求有序。**

## 7.2 三个重要变量

| 变量 | 含义 |
|---|---|
| `left` | 当前搜索范围的左端 index |
| `right` | 当前搜索范围的右端 index |
| `middle` | 当前范围的中间 index |

中间位置的正确计算方式是：

```java
int middle = (left + right) / 2;
```

因为都是 `int`，这里使用整数除法。例如 `(0 + 5) / 2` 得到 2。

**特别注意括号。** `left + right / 2` 与 `(left + right) / 2` 在 Java 中不是同一个表达式。应该先把两端 index 相加，再除以 2。

## 7.3 每次比较后，缩小搜索范围

下面是 Runestone 介绍的迭代式 Binary Search 思路：

```java
public static int binarySearch(int[] a, int target)
{
    int left = 0;
    int right = a.length - 1;

    while (left <= right)
    {
        int middle = (left + right) / 2;

        if (target < a[middle])
        {
            right = middle - 1;
        }
        else if (target > a[middle])
        {
            left = middle + 1;
        }
        else
        {
            return middle;
        }
    }

    return -1;
}
```

这段代码的判断逻辑是：

- `target < a[middle]`：目标更小，只需要搜索左半边。
- `target > a[middle]`：目标更大，只需要搜索右半边。
- 两者相等：找到目标，返回中间 index。
- `left > right`：已经没有元素可以检查，返回 `-1`。

更新时使用 `middle - 1` 或 `middle + 1`，因为中间位置已经检查过了，不需要再重复检查。

## 7.4 AP 风格追踪：查找 `32`

```java
int[] a = {2, 7, 11, 18, 25, 32, 41, 50, 63};
```

| 轮次 | left | right | middle | `a[middle]` | 结果 |
|---|---:|---:|---:|---:|---|
| 1 | 0 | 8 | 4 | 25 | 32 更大，`left = 5` |
| 2 | 5 | 8 | 6 | 41 | 32 更小，`right = 5` |
| 3 | 5 | 5 | 5 | 32 | 找到，返回 5 |

最终返回 `5`，总共进行了 **3 次元素比较**。

如果要找 `30`：

| 轮次 | left | right | middle | `a[middle]` | 结果 |
|---|---:|---:|---:|---:|---|
| 1 | 0 | 8 | 4 | 25 | `left = 5` |
| 2 | 5 | 8 | 6 | 41 | `right = 5` |
| 3 | 5 | 5 | 5 | 32 | `right = 4` |

这时 `left = 5`、`right = 4`，循环条件 `left <= right` 不成立。返回 `-1`。

**不要把这个搜索过程理解成直接修改数组。** `left` 和 `right` 只是在改变“当前要搜索的 index 范围”，数组本身没有被删除或重排。

## 7.5 String 的二分查找需要 `compareTo()`

Runestone 也演示了在有序 String 数组中进行二分查找。因为 `String` 不能使用数值的 `<`、`>` 运算符比较字母顺序，所以需要 `compareTo()`：

- 结果小于 0：当前 String 排在参数 String 之前。
- 结果等于 0：内容相同。
- 结果大于 0：当前 String 排在参数 String 之后。

例如：

```java
int cmp = target.compareTo(words[middle]);
```

当 `cmp < 0` 时，说明目标按词典序排在中间元素之前，可以搜索左半边。

这部分在本课只需要建立概念；**Binary Search 的正式 AP 学习目标属于 4.17.B**，不必在 4.14 提前掌握递归实现。

# 8. Runtimes：怎样比较两种查找算法的效率？

教材接下来通过比较次数（comparisons）讨论算法效率。

## 8.1 Linear Search：目标的位置决定检查次数

对于从前往后的线性查找：

| 目标位置 | 需要检查多少个元素？ |
|---|---|
| 第一个元素 | 1 个（最好情况） |
| 第三个元素 | 3 个 |
| 最后一个元素 | 全部元素 |
| 根本不存在 | 全部元素（最坏情况之一） |

如果集合有 100 个元素，而目标不存在，线性查找必须检查全部 **100 个**，才能确认没有找到。

## 8.2 Binary Search：每轮排除一半

对于已排序的集合，二分查找通常能用更少的比较次数判断目标是否存在。

Runestone 用下面的表格对比最坏情况下的比较次数：

| 元素数量 N | Linear Search | Binary Search |
|---|---:|---:|
| 2 | 2 | 最多 2 |
| 4 | 4 | 最多 3 |
| 8 | 8 | 最多 4 |
| 16 | 16 | 最多 5 |
| 100 | 100 | 最多 7 |

最值得理解的是增长趋势：

- 线性查找：元素越多，最坏情况下需要检查的数量也相应增加。
- 二分查找：搜索范围每轮大约缩小一半，所以即使数据量很大，检查次数通常也少得多。

例如，教材的练习指出，在一个有序的 500 元素集合中，二分查找在最坏情况下大约检查 **9 次**，而线性查找最坏需要检查 **500 次**。

**本课不需要把 `O(n)`、`O(log n)` 的数学公式当成背诵任务。** 重点是能够通过追踪和比较次数解释两种算法效率为什么不同。Runestone 的进阶实验还要求用词典数据实际比较两种搜索所检查的单词数量。

# 9. 如何判断一道题该用哪种查找？

| 题目要求 | 最合适的思路 |
|---|---|
| 在未排序的数组中找一个数字 | Linear Search |
| 在 `ArrayList<String>` 中找某个名字 | Linear Search + `.equals()` |
| 找到第一个符合条件的 index | 从前往后 Linear Search |
| 找到最后一个符合条件的 index | 从后往前 Linear Search |
| 判断二维数组中是否有某个数 | 外层遍历行 + 内层 Linear Search |
| 在已排序的数据中快速查找 | 可以考虑 Binary Search（4.17 预习） |
| 统计目标出现的次数 | 遍历 + `count++`，不是找到第一个就返回 |

**先读清楚问题：要的是 `boolean`、index、出现次数，还是二维坐标？** 即使都在“查找”，返回值要求不同，代码也会不同。

# 10. AP Exam Focus：官方考点与教材拓展

## 10.1 College Board Topic 4.14 的正式要求

| 考点 | 学生必须掌握什么？ |
|---|---|
| **4.14.A.1** | Linear Search 按顺序检查 array 或 `ArrayList` 的元素，直到找到目标或检查完所有元素；可以从任意一端开始。 |
| **4.14.A.2** | 在二维数组中逐行访问，在每一行上应用线性查找。 |

官方学习目标 4.14.A：能够开发线性查找代码，在集合中寻找指定信息，并判断搜索的执行结果。

官方建议技能：

- **2.B**：编写涉及数据抽象的 Java 代码。
- **3.B**：根据涉及数据抽象的代码判断结果或输出。
- **4.A**：解释代码段或程序的行为。

## 10.2 教材讲到、但不属于 4.14.A.1–A.2 的正式细项

Runestone 本页也介绍：

- Binary Search 的排序前提与每轮折半。
- 迭代版本的 Binary Search 代码。
- String Binary Search 中的 `compareTo()`。
- Linear Search 与 Binary Search 的检查次数和效率。
- 通过词典 Spellchecker 比较两种算法的实践项目。

这些内容有学习价值，但其中 **Binary Search 的正式考纲知识点在 Topic 4.17.B**。本课可以先理解它的思想，之后再系统追踪 4.17 的迭代与递归查找算法。

# 11. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 第一个元素不匹配，就立即返回 `-1` | 必须检查完整个搜索范围后，才能判定不存在。 |
| 认为 `return` 只会结束当前这轮循环 | `return` 会直接结束整个 method。 |
| 认为 Linear Search 必须先排序 | 线性查找可用于未排序的数据。 |
| 认为 Linear Search 一定返回第一个匹配位置 | 从哪一端开始就先遇到哪一端的匹配；要看具体代码。 |
| 把 `a.length` 写成 `a.size()` | Array 用 `.length`，ArrayList 用 `.size()`。 |
| 把 `list.get(i)` 写成 `list[i]` | ArrayList 应调用 `get(i)`。 |
| 用 `==` 查找内容相同的 `String` | 应使用 `.equals()`。 |
| 在二维数组中只检查 Row 0 | 必须逐行搜索；除非已经找到目标并返回。 |
| 认为 `return -1` 会自动发生 | 这是程序员按方法约定写出的返回值。 |
| 对无序数据直接使用 Binary Search | 二分查找依赖数据的排序状态。 |
| 把中间索引写成 `left + right / 2` | 应写 `(left + right) / 2`，注意运算优先级。 |
| 认为二分查找会删除元素 | 它只改变当前的搜索范围，不修改集合内容。 |
| 认为本课已要求掌握递归式 Binary Search | 递归查找正式放在 4.17。 |

# 12. Mini Practice：AP 风格练习

下面的练习覆盖 4.14 的正式考点，并安排两题教材中的 Binary Search 预习。

## Practice 1：追踪 Linear Search 的返回值

```java
int[] nums = {8, 3, 8, 4};
```

使用本课第 2 节的 `linearSearch(nums, 8)`，返回什么？

A. `0`  
B. `2`  
C. `-1`

**答案：A。** 从 index 0 开始，第一次检查就找到 `8`，马上返回 `0`；不会继续查找 index 2。

## Practice 2：从后向前搜索

```java
int[] nums = {5, 2, 5, 7, 5};
```

调用 `searchFromEnd(nums, 5)`，返回什么？

A. `0`  
B. `2`  
C. `4`

**答案：C。** 从最后一个 index 4 开始，第一次就找到 `5`。

## Practice 3：查找失败与提前返回

```java
public static boolean contains(int[] nums, int target)
{
    for (int i = 0; i < nums.length; i++)
    {
        if (nums[i] == target)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    return false;
}
```

这段代码有什么问题？如何用最小改动修复？

**答案：** 第一个元素不匹配时，就提前 `return false`，导致后面的元素没有被检查。**删除循环内部的整个 `else` 分支**，只保留循环结束后的 `return false`。

## Practice 4：ArrayList 的写法

下面哪种写法可以在 `ArrayList<String> names` 中，从左到右寻找目标名字 `target` 的 index？

A.

```java
for (int i = 0; i < names.length; i++)
{
    if (names[i] == target) return i;
}
```

B.

```java
for (int i = 0; i < names.size(); i++)
{
    if (names.get(i).equals(target)) return i;
}
```

C.

```java
for (int i = 0; i <= names.size(); i++)
{
    if (names.get(i).equals(target)) return i;
}
```

**答案：B。** ArrayList 使用 `size()` 和 `get(i)`；String 比较内容使用 `.equals()`。A 使用了数组语法和引用比较，C 在最后一次访问时可能越界。完整方法还应该在循环后按约定返回未找到的结果，例如 `-1`。

## Practice 5：二维数组查找（AP 4.14.A.2）

```java
int[][] grid = {
    {4, 7, 9},
    {2, 5, 8},
    {6, 1, 3}
};
```

使用本课第 6 节的 `containsScore(grid, 8)`，程序依次检查哪些位置？

**答案：**

```text
(0,0) → (0,1) → (0,2) →
(1,0) → (1,1) → (1,2)
```

在 `(1,2)` 发现 `8` 后返回 `true`。因此 Row 2 完全不会被检查。

## Practice 6：写一个二维 String 查找方法（FRQ-style）

已知 `String[][] seats` 是非空矩形二维数组，其中所有元素都是非 `null` 的 String。请完成：

```java
public static boolean hasStudent(String[][] seats, String target)
```

要求：按 row-major order 搜索；找到内容相同的名字返回 `true`，否则返回 `false`。

**参考答案：**

```java
public static boolean hasStudent(String[][] seats, String target)
{
    for (int row = 0; row < seats.length; row++)
    {
        for (int col = 0; col < seats[row].length; col++)
        {
            if (seats[row][col].equals(target))
            {
                return true;
            }
        }
    }

    return false;
}
```

关键点：外层遍历每一行，内层遍历当前行的每个元素；比较 String 内容时使用 `.equals()`，未找到的返回值放在两层循环之后。

## Practice 7：Binary Search 的前提（4.17 预习）

下面哪项是标准二分查找正确运行的必要条件？

I. 数组必须只包含 `int`。  
II. 数组必须已经排序。  
III. 数组不能包含重复值。

A. 只有 I  
B. 只有 II  
C. II 和 III

**答案：B。** 二分查找可以应用于其他可比较类型，也不要求所有元素都不同，但必须能够利用已排序的顺序排除某一半范围。

## Practice 8：Binary Search 的逐轮追踪（4.17 预习）

```java
int[] a = {2, 10, 23, 31, 55, 86};
```

使用本课第 7 节的 `binarySearch(a, 55)`，需要比较多少次？返回什么？

**答案：比较 2 次，返回 index `4`。**

- 第一次：`left = 0`，`right = 5`，`middle = 2`，检查 `23`，目标更大，所以 `left = 3`。
- 第二次：`left = 3`，`right = 5`，`middle = 4`，检查 `55`，找到目标，返回 4。

## Practice 9：Linear Search 编程题（FRQ-style）

编写方法：

```java
public static int lastIndexOf(int[] nums, int target)
```

要求：返回 `target` 在数组中**最后一次出现**的 index；如果不存在，则返回 `-1`。数组可能为空。

**参考答案：**

```java
public static int lastIndexOf(int[] nums, int target)
{
    for (int i = nums.length - 1; i >= 0; i--)
    {
        if (nums[i] == target)
        {
            return i;
        }
    }

    return -1;
}
```

关键点：从最后一个合法 index 开始；`i--`；循环继续条件是 `i >= 0`；只有全部检查完才返回 `-1`。

# Unit 4.14 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| searching algorithm | 查找算法；在数据中寻找指定信息的步骤 |
| linear search | 线性查找；逐个检查元素，直到找到目标或检查完毕 |
| sequential search | 顺序查找；linear search 的另一种名称 |
| target | 目标值；需要寻找的数据 |
| match | 匹配；当前元素符合目标条件 |
| index | 索引；array 或 ArrayList 中元素的位置编号 |
| first occurrence | 第一次出现的位置 |
| last occurrence | 最后一次出现的位置 |
| early return | 提前返回；满足条件时立即结束 method |
| row-major order | 按行顺序；先逐列检查一行，再进入下一行 |
| binary search | 二分查找；在有序数据中反复排除一半搜索范围 |
| sorted data | 已排序的数据；元素按规定顺序排列 |
| search range | 搜索范围；当前仍可能包含目标的 index 区间 |
| middle index | 中间索引；当前搜索范围的中间位置 |
| runtime | 运行时间或执行开销；可用执行步骤数进行非正式比较 |
| comparison | 比较；检查元素与目标值是否相等或大小关系 |
| worst case | 最坏情况；算法可能需要最多检查的情形 |

---

**下一课预告：** 4.14 学习了如何在数据中查找目标。4.15 将学习 **Sorting Algorithms（排序算法）**，重点理解 Selection Sort 和 Insertion Sort 如何逐步把无序数据变成有序数据。

**参考资料：**

- [Runestone CSAwesome2 — 4.14 Searching Algorithms](https://runestone.academy/ns/books/published/csawesome2/topic-4-14-searching.html)
- [College Board — AP Computer Science A Course and Exam Description（Effective Fall 2025）, Topic 4.14, p. 118；Binary Search 见 Topic 4.17](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
