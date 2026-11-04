---
title: "AP CSA 4.5：数组算法"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学习了如何遍历数组。这一课要进一步学习：**怎样利用循环和条件判断，让数组帮助我们解决实际问题？**

例如：

- 如何找到数组中的最大值？
- 如何判断数组中是否存在重复数字？
- 如何统计符合条件的元素有多少个？
- 如何把数组中的元素向左或向右移动？
- 如何将数组反转？

这些问题看起来不同，但背后使用的是一些可以重复利用的算法模式（algorithm patterns）。

> **本课的重点不是背诵九套代码，而是识别问题、选择合适的算法模式，再根据题目要求调整代码。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.5 Implementing Array Algorithms（实现数组算法）

## 1. 累积与统计
* Sum / Average：累加元素，再计算平均值
* Min / Max：保存目前找到的最小值或最大值
* Count：满足条件时，计数器加 1

## 2. 查找与判断
* Search：找到目标就返回 true
* At least one：找到一个符合条件的元素即可
* All：找到一个不符合条件的元素就返回 false
* Reverse search：从后往前找，返回最后一个符合条件的 index

## 3. 元素比较
* Consecutive pairs：比较相邻的两个元素
* Adjacent duplicates：检查相邻元素是否重复
* Any duplicates：嵌套循环，比较所有不同位置的元素

## 4. 数组重排
* Shift：元素向左或向右移动
* Rotate：移动后，把移出的元素放到另一端
* Reverse：从两端向中间交换元素
* Temporary variable：暂存数据，避免覆盖

## 5. AP 考试要求
* 4.5.A.1：九种标准数组算法
* 2.B：编写算法代码
* 3.B：追踪代码结果
* 3.D：发现并修复错误
* 4.A：解释代码行为

</script>
</div>
</div>

# 1. 本课要掌握哪些数组算法？

College Board 的 4.5.A.1 列出了九种使用数组遍历的标准算法。

| 算法任务 | 要解决的问题 |
|---|---|
| **Minimum / Maximum** | 找到数组中的最小值或最大值 |
| **Sum / Average** | 计算所有元素的总和或平均值 |
| **At least one** | 判断是否至少有一个元素符合条件 |
| **All** | 判断是否所有元素都符合条件 |
| **Count** | 统计有多少个元素符合条件 |
| **Consecutive pairs** | 访问数组中所有相邻的元素对 |
| **Duplicates** | 判断数组中是否存在重复元素 |
| **Shift / Rotate** | 将元素向左或向右移动 |
| **Reverse** | 将数组中的元素顺序反转 |

Runestone 还单独讲解了在数组中查找特定元素（search），以及从后往前查找最后一个符合条件的位置。

这些算法并不是九种完全不同的编程技巧。我们可以把它们归纳为四大类：

1. 累积与统计
2. 查找与判断
3. 元素比较
4. 数组重排

下面逐一学习。

# 2. 累积与统计（Accumulation and Counting）

这一类算法的共同特点是：**在遍历数组的过程中，使用一个变量持续记录结果。**

## 2.1 计算总和与平均值（Sum / Average）

假设有一个数组：

```java
int[] values = {6, 2, 1, 7, 12, 5};
```

我们想计算所有元素的总和和平均值。

可以使用累加器模式（accumulator pattern）。

它有四个步骤：

1. 在循环之前初始化累加器。
2. 遍历数组。
3. 在循环内部不断更新累加器。
4. 循环结束后，使用累加结果。

代码：

```java
int[] values = {6, 2, 1, 7, 12, 5};

double sum = 0;

for (int val : values)
{
    sum += val;
}

double average = sum / values.length;

System.out.println("Sum: " + sum);
System.out.println("Average: " + average);
```

输出：

```text
Sum: 33.0
Average: 5.5
```

理解这段代码：

- `sum = 0`：先准备一个累加器。
- `sum += val`：每轮把当前元素加进去。
- `sum / values.length`：循环结束后，用总和除以元素数量。

**注意：** 这里使用 `double sum`，可以保留平均值的小数部分。如果使用 `int` 进行整数除法，再把结果赋给 `double`，小数部分已经丢失，无法恢复。

## 2.2 只计算前几个元素

有时题目不要求计算整个数组，而是只计算前几个元素。

例如，只计算前 3 个元素的平均值：

```java
public static double avg3(int[] a)
{
    double total = 0;

    for (int i = 0; i < a.length && i < 3; i++)
    {
        total += a[i];
    }

    return total / 3;
}
```

这里的循环条件有两个部分：

- `i < a.length`：不能访问数组范围之外的元素。
- `i < 3`：最多只处理前三个元素。

两个条件必须同时成立。

**这段方法假设数组至少有 3 个元素。** 因为最后固定除以 3，如果数组不足 3 个元素，计算结果就不再是实际处理元素的平均值。

## 2.3 找最小值或最大值（Minimum / Maximum）

假设我们想找到数组中的最小值：

```java
int[] values = {6, 2, 1, 7, 12, 5};

int min = values[0];

for (int val : values)
{
    if (val < min)
    {
        min = val;
    }
}

System.out.println(min);
```

输出：

```text
1
```

这个算法的思路是：

1. 先把第一个元素当作目前的最小值。
2. 逐个检查数组中的其他元素。
3. 如果发现更小的值，就更新 `min`。
4. 遍历结束后，`min` 就是整个数组的最小值。

如果要找最大值，只需要改变比较符号：

```java
int max = values[0];

for (int val : values)
{
    if (val > max)
    {
        max = val;
    }
}
```

## 为什么要用 `values[0]` 初始化？

这是一个非常重要的细节。

不要随意写成：

```java
int max = 0;
```

例如：

```java
int[] values = {-8, -3, -12};
```

如果 `max` 初始值是 0，循环中没有任何一个元素大于 0，最后得到的最大值就会是 0。

但 0 根本不在数组中。

因此，使用第一个元素作为初始值，可以确保初始的比较对象确实来自数组本身。

**注意：** 这种写法假设数组至少有一个元素，因为空数组无法访问 `values[0]`。

## 2.4 统计符合条件的元素数量（Count）

假设我们想统计数组中有多少个偶数。

可以使用计数器（counter）：

```java
int[] values = {14, -5, 2, 17, 29, -8, 36};

int count = 0;

for (int val : values)
{
    if (val % 2 == 0)
    {
        count++;
    }
}

System.out.println(count);
```

输出：

```text
4
```

理解：

- `count = 0`：开始时还没有找到任何符合条件的元素。
- `val % 2 == 0`：判断当前元素是不是偶数。
- `count++`：符合条件时，计数器加 1。

与 Sum 的区别：

| 算法 | 循环中更新什么？ |
|---|---|
| Sum | 把当前元素加到总和中 |
| Count | 符合条件时，计数器加 1 |
| Average | 先计算总和，最后除以元素数量 |

# 3. 查找与判断（Searching and Testing Properties）

这一类算法要回答的问题通常是：

- 数组中有没有符合条件的元素？
- 所有元素是否都符合条件？
- 最后一个符合条件的元素在哪里？

## 3.1 查找一个目标（Search）

假设要检查数组中是否存在数字 `7`：

```java
public static boolean find(int[] array, int target)
{
    for (int val : array)
    {
        if (val == target)
        {
            return true;
        }
    }

    return false;
}
```

它的执行过程：

1. 逐个检查数组元素。
2. 如果发现目标值，立即返回 `true`。
3. 如果整个数组都检查完了，仍然没有找到，才返回 `false`。

这里有一个非常重要的规则：

**找到了，可以提前返回；没有找到，必须等整个数组检查完才能返回。**

错误写法：

```java
for (int val : array)
{
    if (val == target)
    {
        return true;
    }
    else
    {
        return false;
    }
}
```

为什么错误？

假设数组是：

```text
{6, 2, 1, 7, 12, 5}
```

第一次循环检查 `6`，发现它不是目标值 `7`，程序就立即返回 `false`。

后面的 `2、1、7、12、5` 根本没有机会检查。

因此，不能在第一次不匹配时就返回 `false`。

## 3.2 判断是否至少有一个元素符合条件（At least one / Any）

例如，判断数组中是否至少有一个偶数。

```java
public static boolean hasEven(int[] values)
{
    for (int val : values)
    {
        if (val % 2 == 0)
        {
            return true;
        }
    }

    return false;
}
```

这和上面的 Search 使用的是同一种结构：

- 找到一个符合条件的元素 → `return true`
- 所有元素都检查完仍未找到 → `return false`

AP 题目经常会提供一个 helper method 来判断某个元素是否符合要求。

例如：

```java
if (isEven(val))
{
    return true;
}
```

你不一定需要自己重新编写判断条件，只需要正确使用提供的方法。

## 3.3 判断是否所有元素都符合条件（All）

现在换一个问题：

**数组中的所有数字是不是都是奇数？**

与 Any 不同，All 需要关注的是有没有元素不符合条件。

```java
public static boolean allOdd(int[] values)
{
    for (int val : values)
    {
        if (val % 2 == 0)
        {
            return false;
        }
    }

    return true;
}
```

执行过程：

1. 逐个检查元素。
2. 如果发现一个偶数，就说明并不是所有元素都是奇数，立即返回 `false`。
3. 如果整个数组检查完都没有发现偶数，才返回 `true`。

这里可以使用一个非常有用的思考方式：

**判断 All，不需要寻找所有符合条件的元素；只需要寻找一个反例（counterexample）。**

例如：

```text
{1, 3, 5, 7}  → true
{1, 3, 6, 7}  → false
```

第二个数组只要发现一个偶数，就已经可以确定答案是 `false`，不必继续检查。

## Any 和 All 的区别

| 比较项目 | Any（至少一个） | All（全部） |
|---|---|---|
| 关注什么？ | 有没有符合条件的元素？ | 有没有不符合条件的元素？ |
| 提前返回的条件 | 找到符合条件的元素 | 找到不符合条件的元素 |
| 循环结束后 | 返回 `false` | 返回 `true` |

可以记住：

- Any：找到一个符合条件的，返回 `true`。
- All：找到一个不符合条件的，返回 `false`。

## 3.4 一个容易出错的 Boolean 变量

看下面的代码：

```java
boolean temp = false;

for (int val : array)
{
    temp = (target == val);
}

return temp;
```

很多学生会认为它是在判断数组中是否存在 `target`。

但实际上不是。

因为每一轮循环都会重新给 `temp` 赋值，之前的结果会被覆盖。

假设：

```java
int[] array = {6, 2, 7};
int target = 7;
```

| 当前元素 | 表达式 | temp |
|---|---|---|
| 6 | `7 == 6` | false |
| 2 | `7 == 2` | false |
| 7 | `7 == 7` | true |

如果最后一个元素不是 7，即使前面出现过 7，最终结果仍然可能是 `false`。

**这段代码实际判断的是：最后一个元素是否等于 target。**

如果要判断整个数组中是否至少有一个目标值，应该使用前面介绍的 Search 模式。

## 3.5 从后往前查找（Looping From Back to Front）

有时题目要求的不是第一个符合条件的元素，而是最后一个符合条件的元素。

例如：

```java
public static int getIndexOfLastElementSmallerThanTarget(
    int[] values, int target)
{
    for (int i = values.length - 1; i >= 0; i--)
    {
        if (values[i] < target)
        {
            return i;
        }
    }

    return -1;
}
```

这里有三个需要注意的地方：

- 从 `values.length - 1` 开始，因为这是最后一个有效 index。
- 每轮使用 `i--`，向数组前面移动。
- 找到第一个符合条件的元素，就返回它的 index。

为什么第一次找到的就是最后一个符合条件的位置？

因为我们是从后往前检查的，所以最先找到的匹配项，就是原数组中位置最靠后的匹配项。

如果没有找到，返回 `-1`，表示不存在符合条件的 index。

# 4. 比较数组中的元素（Pairs and Duplicates）

前面我们通常一次处理一个元素。但有些问题需要同时访问两个元素。

例如：

- 两个相邻的数字之和是不是 10？
- 数组中有没有相邻的重复数字？
- 数组中任意两个位置是否存在相同的数字？

这些问题需要特别注意 index 的使用。

## 4.1 访问所有相邻元素对（Consecutive Pairs）

假设数组是：

```java
int[] values = {3, 7, 4, 6, 8};
```

相邻元素对分别是：

```text
(3, 7)
(7, 4)
(4, 6)
(6, 8)
```

如果想检查是否存在一对相邻数字，它们的和等于 10：

```java
public static boolean sumPairs10(int[] nums)
{
    for (int i = 0; i < nums.length - 1; i++)
    {
        if (nums[i] + nums[i + 1] == 10)
        {
            return true;
        }
    }

    return false;
}
```

这里必须使用 indexed `for` loop，因为我们需要同时访问：

```java
nums[i]
nums[i + 1]
```

### 为什么循环条件是 `i < nums.length - 1`？

假设数组长度是 5，有效 index 是 0–4。

当 `i = 3` 时：

```java
nums[i]     // nums[3]
nums[i + 1] // nums[4]
```

这是最后一对有效的相邻元素。

如果让 `i` 变成 4，就会尝试访问 `nums[5]`，发生越界。

所以：

**只要循环体中要访问 `array[i + 1]`，就要确保 `i + 1` 不超过最后一个有效 index。**

## 4.2 检查相邻元素是否重复

如果只需要检查相邻元素是否重复，可以使用同样的结构：

```java
for (int i = 0; i < values.length - 1; i++)
{
    if (values[i] == values[i + 1])
    {
        return true;
    }
}

return false;
```

例如：

```text
{2, 5, 5, 8} → true
{2, 5, 8, 5} → false
```

第二个数组虽然也有两个 `5`，但它们不相邻。

因此，这段代码只能检查相邻重复，不能检查整个数组中的任意重复。

## 4.3 检查任意位置是否存在重复元素（Duplicates）

如果要检查数组中任意两个位置是否有相同的值，就需要使用嵌套循环（nested loops）。

```java
public static boolean anyDuplicates(int[] values)
{
    for (int i = 0; i < values.length; i++)
    {
        for (int j = i + 1; j < values.length; j++)
        {
            if (values[i] == values[j])
            {
                return true;
            }
        }
    }

    return false;
}
```

为什么需要两个循环？

- 外层循环：选定一个元素。
- 内层循环：把它与后面所有元素逐个比较。

例如：

```text
values = {2, 5, 8, 5}
```

比较过程：

```text
2 与 5、8、5 比较
5 与 8、5 比较
8 与 5 比较
```

发现两个 `5` 相等，就返回 `true`。

### 为什么内层循环从 `j = i + 1` 开始？

因为我们只需要比较不同位置的元素：

- 不需要把一个元素和自己比较，例如 `values[0]` 和 `values[0]`。
- 不需要重复比较同一对元素，例如先比较 `(2, 5)`，之后也不必再比较 `(5, 2)`。

所以，内层循环从当前元素的下一个位置开始。

## 相邻重复与任意重复的区别

| 问题 | 使用什么算法？ |
|---|---|
| 检查相邻的两个元素是否相等 | 一个 indexed loop |
| 检查数组中任意两个位置是否相等 | 两个嵌套 loop |

这是本课非常重要的区别。题目中的关键词是 adjacent（相邻）还是 any（任意），会直接决定算法结构。

# 5. 移动和旋转数组（Shift and Rotate）

前面的算法主要是读取和比较元素。这一部分开始直接改变数组中元素的位置。

## 5.1 什么是 Rotate？

旋转数组（rotate）就是让所有元素向左或向右移动一个位置，并把移出的一端元素放到另一端。

例如：

原数组：

```text
{6, 2, 5, 3}
```

向右旋转一次：

```text
{3, 6, 2, 5}
```

向左旋转一次：

```text
{2, 5, 3, 6}
```

注意：旋转不是简单地丢弃移出去的元素，而是把它放到另一端。

## 5.2 创建新数组：向右旋转（Rotate Right）

一种方法是创建一个新数组，把原数组中的元素放到新位置。

```java
public static int[] rotateRight(int[] arr)
{
    int[] result = new int[arr.length];

    result[0] = arr[arr.length - 1];

    for (int i = 0; i < arr.length - 1; i++)
    {
        result[i + 1] = arr[i];
    }

    return result;
}
```

假设：

```java
int[] arr = {6, 2, 5, 3};
```

执行过程：

| 原数组位置 | 新数组位置 |
|---|---|
| `arr[3]` = 3 | `result[0]` |
| `arr[0]` = 6 | `result[1]` |
| `arr[1]` = 2 | `result[2]` |
| `arr[2]` = 5 | `result[3]` |

最终：

```text
result = {3, 6, 2, 5}
```

注意：

- `result` 是一个新数组。
- 原来的 `arr` 不会因为这个方法而改变。
- 方法返回的是新数组的引用。

这段代码假设数组至少有一个元素，因为它访问了 `arr[arr.length - 1]` 和 `result[0]`。

## 5.3 原地旋转（Rotate In Place）

另一种方法是不创建新数组，而是直接修改原数组。

这叫作原地修改（in place）。

例如，向左旋转：

```java
int[] values = {6, 2, 5, 3};

int first = values[0];

for (int i = 0; i < values.length - 1; i++)
{
    values[i] = values[i + 1];
}

values[values.length - 1] = first;
```

最终：

```text
{2, 5, 3, 6}
```

理解这个过程：

1. 先保存第一个元素 `6`，因为后面的移动会覆盖它。
2. 把第二个元素移动到第一个位置。
3. 把第三个元素移动到第二个位置。
4. 把最后一个元素移动到倒数第二个位置。
5. 最后把原来的第一个元素放到数组末尾。

这里的 `first` 就是临时变量（temporary variable），用来保存即将被覆盖的数据。

## 5.4 原地向右旋转

如果要向右旋转，移动方向也要改变。

```java
int[] values = {6, 2, 5, 3};

int last = values[values.length - 1];

for (int i = values.length - 1; i > 0; i--)
{
    values[i] = values[i - 1];
}

values[0] = last;
```

最终：

```text
{3, 6, 2, 5}
```

为什么这里要从后往前移动？

因为如果从前往后移动，原来的元素可能还没被保存，就已经被覆盖了。

例如，向右移动时，必须先把倒数第二个元素放到最后一个位置，再把倒数第三个元素放到倒数第二个位置。

因此，**向右移动要从后往前，向左移动要从前往后**，这样才能避免覆盖还没有移动的数据。

## 新数组与原地修改的区别

| 比较项目 | 创建新数组 | 原地修改 |
|---|---|---|
| 是否创建新数组？ | 是 | 否 |
| 是否改变原数组？ | 否 | 是 |
| 是否需要额外空间？ | 需要一个新数组 | 只需要临时变量 |
| 核心操作 | 把元素复制到新位置 | 先保存，再移动，再放回 |

# 6. 反转数组（Reverse an Array）

旋转和反转看起来相似，但它们并不是同一件事。

例如：

原数组：

```text
{2, 4, 6, 8, 10}
```

向右旋转一次：

```text
{10, 2, 4, 6, 8}
```

反转：

```text
{10, 8, 6, 4, 2}
```

反转会改变整个数组的顺序，使第一个元素变成最后一个，最后一个元素变成第一个。

## 6.1 为什么需要 Temporary Variable？

假设我们要交换两个位置：

```java
array[0] = array[4];
array[4] = array[0];
```

这样写是错误的。

因为第一行执行后，`array[0]` 原来的值已经丢失了。第二行只会把新值再次复制过去，无法完成交换。

因此，我们需要一个临时变量：

```java
int temp = array[0];

array[0] = array[4];

array[4] = temp;
```

可以把它理解为三个步骤：

1. 先把第一个元素暂存在 `temp`。
2. 把第二个元素放到第一个位置。
3. 把 `temp` 中保存的原始值放到第二个位置。

## 6.2 使用 While Loop 原地反转

```java
public static void reverse(int[] array)
{
    int start = 0;
    int end = array.length - 1;

    while (start < end)
    {
        int temp = array[start];

        array[start] = array[end];

        array[end] = temp;

        start++;
        end--;
    }
}
```

例如：

```text
原数组：{2, 4, 6, 8, 10}
```

第一轮：

```text
交换 index 0 和 index 4

{10, 4, 6, 8, 2}
```

第二轮：

```text
交换 index 1 和 index 3

{10, 8, 6, 4, 2}
```

第三轮：

```text
start = 2
end   = 2
```

条件 `start < end` 不再成立，循环结束。

最终：

```text
{10, 8, 6, 4, 2}
```

## 6.3 为什么只需要遍历一半？

因为每次循环都会交换两个位置：

- 第一个和最后一个。
- 第二个和倒数第二个。
- 第三个和倒数第三个。

每交换一次，就有两个元素完成了最终位置的调整。

因此，不需要再交换第二遍。

对于奇数长度的数组，中间元素不需要移动；对于偶数长度的数组，两个指针会在中间相遇。

也可以使用 indexed `for` loop：

```java
public static void reverse(int[] a)
{
    int half = a.length / 2;
    int max = a.length - 1;

    for (int i = 0; i < half; i++)
    {
        int temp = a[i];

        a[i] = a[max - i];

        a[max - i] = temp;
    }
}
```

这与上面的 `while` loop 完成的是同一件事。

## 旋转与反转的区别

| Rotate | Reverse |
|---|---|
| 所有元素移动一个位置 | 两端元素成对交换 |
| 移出的元素放到另一端 | 元素顺序完全颠倒 |
| 例如 `{2,4,6,8}` 右旋为 `{8,2,4,6}` | 例如 `{2,4,6,8}` 反转为 `{8,6,4,2}` |

# 7. 如何选择正确的算法？

AP 考试不会总是直接告诉你应该使用哪一种算法。学生需要先读懂题目，再选择合适的结构。

| 题目想要什么？ | 应该想到什么？ | 典型代码结构 |
|---|---|---|
| 计算所有元素的总和 | Sum | `sum += value` |
| 计算平均值 | Average | `sum / array.length` |
| 找最小值或最大值 | Min / Max | 初始化一个当前最值，再用 `if` 更新 |
| 是否至少有一个符合条件？ | Any / Search | 找到一个就 `return true` |
| 是否全部符合条件？ | All | 找到一个反例就 `return false` |
| 有多少个元素符合条件？ | Count | `count++` |
| 比较相邻的两个元素 | Consecutive Pairs | `array[i]` 与 `array[i + 1]` |
| 任意位置是否有重复？ | Duplicates | Nested loops |
| 元素整体移动位置 | Shift / Rotate | Indexed loop + temporary variable |
| 反转元素顺序 | Reverse | 两端交换，逐渐向中间靠近 |

**读题时先确定结果类型：**

- 需要一个数字结果？考虑 Sum、Average、Min、Max 或 Count。
- 需要 `true` 或 `false`？考虑 Search、Any、All 或 Duplicates。
- 需要比较两个位置？考虑 Consecutive Pairs 或 Nested Loops。
- 需要改变元素的位置？考虑 Shift、Rotate 或 Reverse。

这样可以先确定算法的大方向，再写具体代码。

# 8. AP Exam Focus：核心考点

College Board 将本课归在 **4.5.A：实现标准或自定义数组算法，并确定算法的结果**。

## 4.5.A.1：九种标准数组算法

| AP 要求 | 学生必须能够完成的任务 |
|---|---|
| Minimum / Maximum | 找到数组的最小值或最大值 |
| Sum / Average | 计算总和或平均值 |
| At least one | 判断是否至少有一个元素符合条件 |
| All | 判断是否所有元素都符合条件 |
| Count | 统计符合条件的元素数量 |
| Consecutive pairs | 访问所有相邻元素对 |
| Duplicates | 判断是否存在重复元素 |
| Shift / Rotate | 向左或向右移动、旋转元素 |
| Reverse | 反转元素的顺序 |

## Suggested Skills

本课对应四项 AP 技能：

- **2.B**：编写涉及数据抽象的程序代码。
- **3.B**：根据包含数据抽象的代码确定结果或输出。
- **3.D**：解释代码为什么无法编译或不能按预期工作，并修改错误。
- **4.A**：描述一段代码或程序的行为。

因此，考试不仅要求学生看懂已有算法，还要求他们能够根据题目描述编写代码、追踪结果，以及找出算法中的错误。

# 9. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 把 `sum` 或 `count` 初始化在循环内部 | 累加器和计数器应在循环前初始化，否则每轮都会重新开始 |
| 用 `0` 初始化最大值或最小值 | 使用 `array[0]`，避免数组全部为正数或负数时出错 |
| 在第一次不匹配时就 `return false` | 必须检查完整个数组，确认没有找到目标后才能返回 `false` |
| 用 `temp = (target == val)` 判断是否存在目标 | 每轮会覆盖前一轮结果，最后只反映最后一个元素 |
| 判断 All 时，找到符合条件的元素就返回 `true` | 应寻找反例；发现一个不符合条件的元素就返回 `false` |
| 访问 `array[i + 1]` 时使用 `i < array.length` | 应使用 `i < array.length - 1`，否则最后一轮会越界 |
| 用一个 loop 检查任意位置的重复元素 | 需要嵌套循环比较不同位置的元素 |
| 旋转数组时没有先保存将被覆盖的元素 | 先用 temporary variable 保存，再移动其他元素 |
| 向右移动时仍然从前往后复制 | 应从后往前移动，避免覆盖尚未复制的数据 |
| 交换两个元素时不使用 temp | 第一次赋值可能覆盖原始值，导致无法完成交换 |
| 反转数组时遍历整个数组并交换 | 只需要交换前一半与后一半对应的元素 |

# 10. Mini Practice：小练习

## Practice 1：Sum and Average

```java
int[] values = {4, 6, 8, 10};

double sum = 0;

for (int val : values)
{
    sum += val;
}

double average = sum / values.length;
```

`average` 的值是多少？

A. `7.0`

B. `28.0`

C. `8.0`

**答案：A**

解释：总和为 28，数组长度为 4，因此平均值为 28 / 4 = 7.0。

## Practice 2：Minimum and Maximum

```java
int[] values = {-8, -3, -12, -5};

int max = 0;

for (int val : values)
{
    if (val > max)
    {
        max = val;
    }
}
```

这段代码有什么问题？

A. 应该使用 `val < max`。

B. `max` 应该初始化为 `values[0]`。

C. 应该使用 indexed `for` loop。

**答案：B**

解释：数组中的所有值都是负数，初始值 0 不属于数组，最终会错误地得到 0。

## Practice 3：Any and All

下面的方法要判断数组中的所有元素是否都是偶数。

```java
public static boolean allEven(int[] values)
{
    for (int val : values)
    {
        if (val % 2 != 0)
        {
            return false;
        }
    }

    return true;
}
```

下面哪个数组会使方法返回 `false`？

A. `{2, 4, 6, 8}`

B. `{2, 4, 5, 8}`

C. `{2, 4, 6, 10}`

**答案：B**

解释：5 是奇数，是一个反例。发现一个不符合条件的元素，就可以立即返回 `false`。

## Practice 4：Counting

```java
int[] nums = {3, 8, 10, 5, 12, 7};

int count = 0;

for (int num : nums)
{
    if (num > 6)
    {
        count++;
    }
}
```

最终 `count` 是多少？

A. `2`

B. `3`

C. `4`

**答案：C**

解释：8、10、12、7 一共有四个元素大于 6。

## Practice 5：Consecutive Pairs

下面哪个循环能够安全地访问所有相邻元素对？

A.

```java
for (int i = 0; i < values.length; i++)
```

B.

```java
for (int i = 0; i < values.length - 1; i++)
```

C.

```java
for (int i = 1; i <= values.length; i++)
```

**答案：B**

解释：循环体需要访问 `values[i + 1]`，所以 `i` 最大只能是 `values.length - 2`。

## Practice 6：Duplicates

下面的代码：

```java
for (int i = 0; i < values.length; i++)
{
    for (int j = i + 1; j < values.length; j++)
    {
        if (values[i] == values[j])
        {
            return true;
        }
    }
}

return false;
```

它检查的是什么？

A. 只检查相邻元素是否重复。

B. 检查任意两个不同位置的元素是否相同。

C. 检查数组是否已经从小到大排序。

**答案：B**

解释：内层循环从 `i + 1` 开始，所以每个元素会与后面所有元素比较。

## Practice 7：Rotate

原数组：

```text
{6, 2, 5, 3}
```

执行一次向右旋转，结果是什么？

A. `{2, 5, 3, 6}`

B. `{3, 6, 2, 5}`

C. `{3, 5, 2, 6}`

**答案：B**

解释：最后一个元素 3 移到最前面，其余元素整体向右移动一位。

## Practice 8：Reverse

```java
int[] nums = {2, 4, 6, 8, 10};

int start = 0;
int end = nums.length - 1;

while (start < end)
{
    int temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;

    start++;
    end--;
}
```

最终数组是什么？

A. `{10, 8, 6, 4, 2}`

B. `{10, 2, 4, 6, 8}`

C. `{2, 4, 6, 8, 10}`

**答案：A**

解释：第一次交换第一个和最后一个元素，第二次交换第二个和倒数第二个元素，中间的 6 不需要移动。

# Unit 4.5 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| algorithm | 算法；解决问题的一系列步骤 |
| accumulator | 累加器；用于持续保存计算结果的变量 |
| accumulator pattern | 累加器模式；遍历数据并逐步更新结果 |
| minimum / maximum | 最小值 / 最大值 |
| search | 查找；寻找符合条件的元素 |
| property | 属性或特征；用来判断元素是否符合条件的标准 |
| counterexample | 反例；一个足以证明某个条件并非全部成立的例子 |
| counter | 计数器；记录符合条件的元素数量 |
| consecutive pairs | 相邻元素对；数组中位置连续的两个元素 |
| nested loops | 嵌套循环；一个循环位于另一个循环内部 |
| duplicate | 重复元素；与其他位置元素相同的值 |
| shift | 移动；将元素向左或向右移动位置 |
| rotate | 旋转；移动元素并将移出的元素放到另一端 |
| reverse | 反转；将元素的顺序完全颠倒 |
| in place | 原地修改；直接修改原数组，而不是创建新数组 |
| temporary variable | 临时变量；暂时保存数据，避免覆盖 |

---

**下一课预告：** 4.5 学习了如何使用数组算法处理数据。4.6 将学习如何从文本文件（text files）中读取数据，把程序从处理已有数组扩展到处理外部保存的数据。

**参考资料：**

- [Runestone CSAwesome2 — 4.5 Implementing Array Algorithms](https://runestone.academy/ns/books/published/csawesome2/topic-4-5-array-algorithms.html?mode=browsing)
- [College Board — AP CSA Course and Exam Description, Effective Fall 2025](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
