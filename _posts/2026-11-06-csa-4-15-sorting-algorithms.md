---
title: "AP CSA 4.15：排序算法"
layout: post
categories: media
render_with_liquid: false
---

上一课 4.14，我们学习了如何在数据集合中**查找**一个元素。这一课学习如何把元素按一定顺序排列——例如，将考试成绩从小到大排列。

我们会研究两种排序算法：**Selection Sort（选择排序）**和 **Insertion Sort（插入排序）**。它们最后都能得到有序数组，但**每一轮的操作方法不同，中间结果也可能不同**。

> **Selection Sort：每轮选出剩余部分的最小值，放到最终位置。**  
> **Insertion Sort：每轮取出一个元素，插入左侧已有序部分的合适位置。**

本课的 AP 考试重点不是只看最终结果，而是能够**追踪每一轮循环结束后，数组到底变成什么样**。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.15 Sorting Algorithms（排序算法）

## 1. Sorting 与 Pass
* Ascending：从小到大；Descending：从大到小
* Pass：外层循环完整执行一轮
* 两种算法最终结果相同，中间状态不一定相同

## 2. Selection Sort（选择排序）
* 将数组分成左侧已排序部分、右侧未排序部分
* 在未排序部分找到最小值的 index：`minIndex`
* 找完之后才交换：`swap`
* 每轮固定一个元素的最终位置
* 外层从 `i = 0` 开始

## 3. Insertion Sort（插入排序）
* 将左侧视为已排序部分
* 保存待插入元素：`temp`
* 右移比 `temp` 大的元素：`shift`
* 把 `temp` 放进空出的位置
* 外层从 `i = 1` 开始
* 左侧有序，不代表元素已在最终位置

## 4. AP Code Tracing
* Selection：追踪 `minIndex` → 最后 `swap`
* Insertion：追踪 `temp`、`possibleIndex`、右移
* 分清内层循环的一次执行与外层完整的一轮
* 找到并修复 loop boundary 错误

## 5. Arrays 与 ArrayList
* 两种算法都可以处理 array 或 ArrayList
* Array：`a[i]`、`a.length`
* ArrayList：`get(i)`、`set(i, value)`、`size()`
* 排序主要是替换元素，不是增加或删除元素

## 6. 比较与考点
* Selection：标准代码的比较次数不受初始顺序影响
* Insertion：已有序时移动少；逆序时移动多
* AP 4.15.A.1–A.3：识别算法、解释行为、逐轮追踪
* Merge Sort 在 4.17 正式学习

</script>
</div>
</div>

# 1. 第一题先不要写代码：第一轮结束后，数组是什么样？

假设有五个成绩：

```text
Index:    0  1  2  3  4
Values:  [8, 3, 6, 2, 5]
```

现在分别对它进行**升序（ascending order）**排序。

**问题 A：** Selection Sort 完成第一轮（first pass）后，数组会变成什么样？

**问题 B：** Insertion Sort 完成第一轮（first pass）后，数组又会变成什么样？

先试着预测，之后再对照：

| 算法 | 第一轮做什么？ | 第一轮结束后的数组 |
|---|---|---|
| Selection Sort | 在整个数组里找到最小值 `2`，与 index 0 的 `8` 交换 | `[2, 3, 6, 8, 5]` |
| Insertion Sort | 把 index 1 的 `3` 插入左侧 `[8]` 中 | `[3, 8, 6, 2, 5]` |

**为什么答案不同？**

- Selection Sort 的第一轮会扫描整个未排序部分，因此能找到后面的 `2`。
- Insertion Sort 的第一轮只处理第二个元素 `3`：它还没有轮到后面的 `6`、`2`、`5`。

这就是整课最重要的区别。

## 什么叫一轮（Pass）？

在本课标准代码里，**一个 pass 指外层循环完整执行一次**。外层循环里面可能有多次比较、移动或交换，但这些操作仍然属于同一个 pass。

AP 题目如果问 *after two passes*，就应当停在**外层循环完成两轮**的位置，而不是随意数两次比较或两行赋值。

# 2. Selection Sort：选择排序

想象你要把几张写有成绩的卡片从小到大摆好。

Selection Sort 的思路是：

1. 从尚未排好的卡片中，**找出最小的一张**。
2. 把它与未排序部分的第一张交换位置。
3. 这样，左侧就多了一个已经放在**最终正确位置**的元素。
4. 对剩下的元素重复这个过程。

## 2.1 每一轮都将数组分成两部分

最初：

```text
[8, 3, 6, 2, 5]
 ↑
 从 index 0 开始，整个数组都是未排序部分
```

第一轮找到最小值 `2`，与 `8` 交换：

```text
[2 | 3, 6, 8, 5]
 ↑   └── 未排序部分 ──┘
 已经在最终位置
```

下一轮只需在右侧 `[3, 6, 8, 5]` 中寻找最小值，不需要再检查 `2`。

**关键：Selection Sort 左侧已完成的元素不会在后续轮次被移动到其他位置。**

## 2.2 逐轮追踪：同一组成绩

初始数组：

```java
int[] scores = {8, 3, 6, 2, 5};
```

| 外层循环 | 本轮开始时的未排序部分 | 找到的最小值 | 本轮结束后的数组 |
|---|---|---:|---|
| 初始 | 整个数组 | — | `[8, 3, 6, 2, 5]` |
| Pass 1 (`i = 0`) | `[8, 3, 6, 2, 5]` | `2` | `[2, 3, 6, 8, 5]` |
| Pass 2 (`i = 1`) | `[3, 6, 8, 5]` | `3` | `[2, 3, 6, 8, 5]` |
| Pass 3 (`i = 2`) | `[6, 8, 5]` | `5` | `[2, 3, 5, 8, 6]` |
| Pass 4 (`i = 3`) | `[8, 6]` | `6` | `[2, 3, 5, 6, 8]` |

请注意 **Pass 2**：最小值 `3` 本来就在未排序部分的最前面，所以数组**看起来没有改变**。但外层循环确实完成了一轮。

教材示例会执行交换语句，即使两个 index 相同；如果两个位置是同一个位置，交换前后数组自然不变。

## 2.3 Selection Sort 的 Java 代码

下面采用 Runestone 使用的标准思路（变量名改成更容易阅读的 `i`、`k`）：

```java
public static void selectionSort(int[] elements)
{
    for (int i = 0; i < elements.length - 1; i++)
    {
        int minIndex = i;

        for (int k = i + 1; k < elements.length; k++)
        {
            if (elements[k] < elements[minIndex])
            {
                minIndex = k;
            }
        }

        int temp = elements[i];
        elements[i] = elements[minIndex];
        elements[minIndex] = temp;
    }
}
```

把代码分成三个阶段更容易理解：

### 阶段 A：确定本轮要放好的位置

```java
for (int i = 0; i < elements.length - 1; i++)
{
    int minIndex = i;
```

- `i` 表示本轮要确定的 index。
- `minIndex` 暂时设为 `i`，表示**先假设当前位置就是未排序部分的最小值所在位置**。
- `minIndex` 保存的是**索引**，不是最小值本身。

### 阶段 B：搜索剩余部分的最小值

```java
for (int k = i + 1; k < elements.length; k++)
{
    if (elements[k] < elements[minIndex])
    {
        minIndex = k;
    }
}
```

- `k = i + 1`：从当前位置的**下一个元素**开始比较。
- `elements[k] < elements[minIndex]`：如果找到更小的值，就记录它的 index。
- 内层循环只是**寻找位置**，**还没有交换元素**。

为什么不从 `k = 0` 开始？因为 `0` 到 `i - 1` 已经属于完成排序的左侧部分，不应重新参与本轮寻找。

### 阶段 C：等搜索完成后，再交换

```java
int temp = elements[i];
elements[i] = elements[minIndex];
elements[minIndex] = temp;
```

`temp` 暂存原来的 `elements[i]`，防止交换时覆盖数据。

**Selection Sort 每一轮先找完最小值，再交换；不是看到一个比较小的值就立刻交换。**

## 2.4 为什么外层只执行 `length - 1` 轮？

假设数组有 5 个元素。

前四轮分别将最小、第二小、第三小、第四小的值放到了 index 0–3。此时 index 4 只剩一个值，它自然已经在正确位置。

所以：

```java
for (int i = 0; i < elements.length - 1; i++)
```

不会遗漏最后一个元素。

# 3. Insertion Sort：插入排序

想象你整理手中的扑克牌：每次拿起一张新牌，把它插入手里已有序的牌之间。

Insertion Sort 的思路是：

1. 先把第一个元素视为**已经排好序的部分**（一个元素本来就是有序的）。
2. 取出下一个元素，暂存在 `temp` 中。
3. 把左侧比它大的元素逐个向右移动，腾出位置。
4. 将 `temp` 放入空出的位置。
5. 继续处理下一个元素。

## 3.1 左侧有序，不代表左侧元素已在最终位置

初始数组：

```text
[8, 3, 6, 2, 5]
```

第一轮只处理 `3`，插入左侧的 `[8]`：

```text
[3, 8 | 6, 2, 5]
 └有序┘  └未处理┘
```

第二轮取出 `6`，插入 `[3, 8]`：

```text
[3, 6, 8 | 2, 5]
 └──有序──┘ └未处理┘
```

**此时前三个元素内部确实有序，但 `3` 并不一定永远待在 index 0。**

下一轮遇到 `2` 时，`3`、`6`、`8` 都要右移，`2` 才能插入最前面。

这正是官方对 Insertion Sort 的表述中特别强调的：**插入的位置在当前已排序部分中是正确的，但未必是最终位置。**

## 3.2 逐轮追踪：与 Selection Sort 使用同一数组

```java
int[] scores = {8, 3, 6, 2, 5};
```

| 外层循环 | 本轮取出的 `temp` | 操作 | 本轮结束后的数组 |
|---|---:|---|---|
| 初始 | — | 第一个元素视为已有序 | `[8, 3, 6, 2, 5]` |
| Pass 1 (`j = 1`) | `3` | `8` 右移，插入 `3` | `[3, 8, 6, 2, 5]` |
| Pass 2 (`j = 2`) | `6` | `8` 右移，插入 `6` | `[3, 6, 8, 2, 5]` |
| Pass 3 (`j = 3`) | `2` | `8`、`6`、`3` 依次右移 | `[2, 3, 6, 8, 5]` |
| Pass 4 (`j = 4`) | `5` | `8`、`6` 依次右移 | `[2, 3, 5, 6, 8]` |

注意：Insertion Sort 第一轮从 `j = 1` 开始，而不是 `j = 0`。因为 index 0 的一个元素不需要排序。

## 3.3 Insertion Sort 的 Java 代码

以下与 Runestone 的标准实现逻辑一致：

```java
public static void insertionSort(int[] elements)
{
    for (int j = 1; j < elements.length; j++)
    {
        int temp = elements[j];
        int possibleIndex = j;

        while (possibleIndex > 0 &&
               temp < elements[possibleIndex - 1])
        {
            elements[possibleIndex] = elements[possibleIndex - 1];
            possibleIndex--;
        }

        elements[possibleIndex] = temp;
    }
}
```

这段代码可以拆成三步：

### 阶段 A：先保存准备插入的元素

```java
int temp = elements[j];
int possibleIndex = j;
```

- `temp` 保存待插入的值。
- `possibleIndex` 表示**这个值目前可能放入的位置**。

为什么必须先保存 `temp`？因为接下来会把左侧元素向右移动，覆盖原来 `elements[j]` 的位置。如果不保存，待插入的值就可能丢失。

### 阶段 B：比 `temp` 大的元素向右移动

```java
while (possibleIndex > 0 &&
       temp < elements[possibleIndex - 1])
{
    elements[possibleIndex] = elements[possibleIndex - 1];
    possibleIndex--;
}
```

- 先确保 `possibleIndex > 0`，才可以访问左边的 `elements[possibleIndex - 1]`。
- 如果左边的元素比 `temp` 大，就把左边元素**复制到右边一个位置**。
- 然后 `possibleIndex--`，继续检查更左边的位置。

这一步是**移动（shift）**，不是两个元素直接交换（swap）。

### 阶段 C：把 `temp` 放到腾出的空位

```java
elements[possibleIndex] = temp;
```

循环结束意味着：要么已经到达数组最左边，要么左侧元素不大于 `temp`。这时把 `temp` 放入当前位置，左侧这段数组就有序了。

## 3.4 最难理解的一轮：`2` 到底是怎样插入的？

继续追踪 Pass 3 开始时的数组：

```text
[3, 6, 8, 2, 5]
          ↑
        temp = 2
```

我们已经把 `2` 保存到 `temp`，因此可以安全地移动数组元素。

| 操作 | `possibleIndex` | 数组状态 | `temp` |
|---|---:|---|---:|
| 取出待插入值 | 3 | `[3, 6, 8, 2, 5]` | 2 |
| 将 `8` 从 index 2 移到 index 3 | 2 | `[3, 6, 8, 8, 5]` | 2 |
| 将 `6` 从 index 1 移到 index 2 | 1 | `[3, 6, 6, 8, 5]` | 2 |
| 将 `3` 从 index 0 移到 index 1 | 0 | `[3, 3, 6, 8, 5]` | 2 |
| `while` 结束，把 `2` 写入 index 0 | 0 | `[2, 3, 6, 8, 5]` | 2 |

看到中间出现两个 `8` 或两个 `6`，**不代表排序出错**。它们只是移动过程中的临时状态。原来的 `2` 已经保存在 `temp`，所以没有丢失。

### 为什么 `while` 里的判断顺序很重要？

```java
possibleIndex > 0 && temp < elements[possibleIndex - 1]
```

Java 的 `&&` 会先判断左边：如果 `possibleIndex > 0` 为 `false`，就不会再执行右边的数组访问。

当 `possibleIndex == 0` 时，如果仍去读取 `elements[-1]`，就会发生越界。因此边界条件必须正确。

# 4. 同一数组，两种排序的执行过程对比

现在把两种算法摆在一起：

**初始数组相同：** `[8, 3, 6, 2, 5]`

| 完成轮数 | Selection Sort | Insertion Sort |
|---|---|---|
| 0 | `[8, 3, 6, 2, 5]` | `[8, 3, 6, 2, 5]` |
| 1 | `[2, 3, 6, 8, 5]` | `[3, 8, 6, 2, 5]` |
| 2 | `[2, 3, 6, 8, 5]` | `[3, 6, 8, 2, 5]` |
| 3 | `[2, 3, 5, 8, 6]` | `[2, 3, 6, 8, 5]` |
| 4 | `[2, 3, 5, 6, 8]` | `[2, 3, 5, 6, 8]` |

**考试遇到“after 2 iterations of the outer loop”时，千万不要直接写最终排序结果。**

两种标准方法都直接修改传入的数组对象。虽然方法的返回类型是 `void`，排序结果仍然保留在原数组中：

```java
int[] data = {8, 3, 6, 2, 5};
selectionSort(data);
// data 现在是 {2, 3, 5, 6, 8}
```

这里**不需要**通过 `data = selectionSort(data);` 来接收结果（`void` method 也不能这样赋值）。这是之前学过的**通过数组引用修改原数组**的应用。

## 4.1 怎样从代码识别是哪一种排序？

| 观察点 | Selection Sort | Insertion Sort |
|---|---|---|
| 外层从哪里开始？ | 通常 `i = 0` | 通常 `j = 1` |
| 每轮主要任务 | 找未排序部分的最小值 | 把当前元素插入已有序部分 |
| 典型变量 | `minIndex` | `temp`、`possibleIndex` |
| 内层循环 | 扫描右侧，记录最小值 index | 向左比较，较大的值向右移动 |
| 修改数组的时机 | 内层扫描完成后交换 | 内层循环中不断移动，再插入 |
| 每轮完成后 | 左侧多一个**最终就位**的元素 | 左侧多一个**目前有序**的元素 |

不能只凭变量名称判断——考试可能将 `minIndex` 改名为 `smallest`，或将 `possibleIndex` 改成 `pos`。**要根据代码实际上在“寻找最小值”还是“移动元素”来判断。**

# 5. ArrayList 也可以使用排序算法

官方考纲说明：Selection Sort 和 Insertion Sort 都可以用于 array 或 `ArrayList`。

它们的**排序思路不变**，只是访问和修改元素的语法不同。

| 操作 | Array | `ArrayList<Integer>` |
|---|---|---|
| 获取元素数量 | `a.length` | `list.size()` |
| 读取 index `i` 的元素 | `a[i]` | `list.get(i)` |
| 替换 index `i` 的元素 | `a[i] = value;` | `list.set(i, value);` |

例如，Selection Sort 使用 `ArrayList<Integer>` 时，可以写成：

```java
// This method belongs inside a class.
// Add: import java.util.ArrayList;
public static void selectionSortList(ArrayList<Integer> list)
{
    for (int i = 0; i < list.size() - 1; i++)
    {
        int minIndex = i;

        for (int k = i + 1; k < list.size(); k++)
        {
            if (list.get(k) < list.get(minIndex))
            {
                minIndex = k;
            }
        }

        int temp = list.get(i);
        list.set(i, list.get(minIndex));
        list.set(minIndex, temp);
    }
}
```

这和数组版本一样：**寻找最小值，最后交换两个位置的值**。

注意我们使用的是 `set()`，而不是 `add()`：

- `set(index, value)`：替换该位置的元素，不改变列表大小。
- `add(index, value)`：插入一个新元素，让后面的元素右移，还会增加列表大小。

排序的目标是**重新排列已有元素**，而不是向列表增加额外元素。因此，不能随意用 `add()` 代替 `set()`。

Insertion Sort 也能做同样的转换，例如数组的右移操作：

```java
elements[possibleIndex] = elements[possibleIndex - 1];
```

对应 `ArrayList` 的写法是：

```java
list.set(possibleIndex, list.get(possibleIndex - 1));
```

这里同样不需要增加元素或改变 `size()`。

# 6. 比较两种排序：哪一种更快？

Runestone 有一项活动：在排序代码中加入 counter，比较不同初始顺序下，内层循环执行了多少次。

**先说结论：两种算法处理同一个数组时，比较与移动的工作量可能很不一样。**

## 6.1 Selection Sort：比较次数取决于数组长度

如果数组有 5 个元素，那么标准 Selection Sort：

- 第一轮比较 4 次。
- 第二轮比较 3 次。
- 第三轮比较 2 次。
- 第四轮比较 1 次。

总共比较：

```text
4 + 3 + 2 + 1 = 10 次
```

无论初始数组已经升序、完全逆序，还是乱序，**这份标准代码扫描的范围都相同**，所以元素大小比较次数相同。

注意：**“比较次数相同”不等于真实电脑上运行时间精确相同。** 我们在这里比较的是算法执行步骤的数量，而不是受硬件和运行环境影响的实际毫秒数。

## 6.2 Insertion Sort：初始顺序会影响右移次数

如果数组已经升序：

```text
[1, 2, 3, 4, 5]
```

每一轮 `temp` 都不小于左边的元素，不需要右移；`while` 循环体执行 **0 次**。

如果数组完全逆序：

```text
[5, 4, 3, 2, 1]
```

每次都要把当前值插到最前面，需要大量右移：

```text
1 + 2 + 3 + 4 = 10 次右移
```

| 对比 | Selection Sort | Insertion Sort |
|---|---|---|
| 初始数组已经升序 | 仍然扫描剩余部分寻找最小值 | 不需要右移元素 |
| 初始数组完全逆序 | 仍然扫描相同的剩余范围 | 需要较多右移 |
| 比较次数是否主要取决于初始顺序？ | 标准代码：否 | 是 |
| 课内要掌握的重点 | 每轮选最小值并交换 | 每轮右移较大值并插入 |

从算法效率的角度，两者在一般情况下都有可能执行大量比较或移动。**本课优先掌握逐轮执行与工作量比较；更系统的递归排序在 4.17 学习。**

# 7. AP Exam Focus：官方三个核心考点

以下内容对应 College Board **AP CSA CED（Effective Fall 2025）** 的 Topic 4.15。

| 考点 | 官方要求（中文理解） | 学生应该能够做什么 |
|---|---|---|
| **4.15.A.1** | Selection Sort 和 Insertion Sort 都是迭代式排序算法，可用于 array 或 `ArrayList` | 识别算法，理解它们操作的集合类型 |
| **4.15.A.2** | Selection Sort 不断从未排序部分选出最小（或最大）元素，交换到已排序部分中的最终正确位置 | 追踪 `minIndex`、外层循环次数，以及交换后的数组 |
| **4.15.A.3** | Insertion Sort 将未排序部分的元素插入已有序部分，右移元素腾出位置；插入位置暂时正确，但不一定是最终位置 | 追踪 `temp`、右移过程及每轮结束后的数组 |

**Suggested Skills：**

- **3.B**：根据使用数据集合的代码，判断执行结果或输出。
- **4.A**：解释一段代码的行为。
- **4.B**：说明代码要按预期工作所需的条件。

## 这课的题目通常怎么考？

例如，提供某个排序方法和初始数组，再问：

> *What will the array contain after three iterations of the outer loop?*

也就是：**外层循环完整执行三轮后，数组是什么样？**

不一定要求学生从零写完整排序方法。**读懂、准确追踪每一步**是本课学习目标的核心。

### 4.B：排序代码有哪些必要条件？

对于本指南里的 `int[]` 示例：

- 数组引用必须有效，不能是 `null`。
- 元素可以是乱序的：**不要求数组预先排序**，否则就失去排序的意义。
- 代码使用 `<` 将数值排成升序；如果题目要求降序，比较方向和具体实现必须相应调整。
- `length` 为 0 或 1 时，标准外层循环不执行，数组本来就有序。

**不要混淆：Binary Search 要求数据预先有序，而这里的 Selection/Insertion Sort 恰恰是用来把乱序数据变成有序数据的。**

# 8. Common Mistakes：最容易出现的错误

| 常见误解 / 错误 | 正确理解 |
|---|---|
| 认为每次比较就是一个 pass | **外层循环完整执行一轮**才是一个 pass |
| 以为第一轮一定只比较前两个元素 | Selection 第一轮扫描整个数组；Insertion 第一轮才只处理 index 1 与左侧已有序部分 |
| Selection 在找到一个较小值后立即交换 | 内层循环应先找完未排序部分的最小值，最后才交换 |
| Selection 的内层循环从 index 0 开始 | 应从 `i + 1` 开始，否则会重新处理已完成的左侧部分 |
| 把 `minIndex` 当成最小值本身 | 它保存的是**最小值所在的 index** |
| Selection 某轮数组没有变化，就认为那一轮没执行 | 可能最小值本来就在正确位置；外层循环仍然执行了一轮 |
| Insertion 把 `temp` 取出后忘记保存 | 右移会覆盖原位置，所以必须保存待插入值 |
| 把 Insertion 的右移当成交换 | 右移是复制左边元素到右边，最后再写回 `temp` |
| 看到移动过程中出现两个相同数字就认为数据丢失 | 待插入元素已保存在 `temp`；这是正常的中间状态 |
| Insertion 外层写成 `j < elements.length - 1` | 会漏掉最后一个元素，正确条件通常是 `j < elements.length` |
| 认为 Insertion 已有序部分中的元素都已经最终就位 | 后面遇到更小的值时，这些元素还可能右移 |
| 在 `ArrayList` 排序中用 `add()` 代替 `set()` | 排序应替换位置上的元素，而不是增加新元素 |

# 9. Mini Practice：AP 风格练习

## Practice 1：第一轮 Selection Sort

```java
int[] a = {9, 4, 7, 1, 6};
```

完成 Selection Sort 的**第一轮外层循环**后，数组是哪一个？

A. `{4, 9, 7, 1, 6}`  
B. `{1, 4, 7, 9, 6}`  
C. `{1, 4, 6, 7, 9}`

**答案：B**

解释：第一轮必须检查整个数组，最小值为 `1`，位于 index 3。将它与 index 0 的 `9` 交换，得到 `{1, 4, 7, 9, 6}`。

## Practice 2：第一轮 Insertion Sort

仍然使用：

```java
int[] a = {9, 4, 7, 1, 6};
```

完成 Insertion Sort 的**第一轮外层循环**后，数组是哪一个？

A. `{4, 9, 7, 1, 6}`  
B. `{1, 4, 7, 9, 6}`  
C. `{9, 4, 7, 1, 6}`

**答案：A**

解释：第一轮只需要把 `a[1]` 的 `4` 插入左侧 `[9]`。其他元素暂时不参与本轮。

## Practice 3：两轮之后，哪一个才是 Selection Sort？

原数组：

```text
[8, 3, 6, 2, 5]
```

Selection Sort 完成**两轮外层循环**后，数组是什么？

A. `[3, 6, 8, 2, 5]`  
B. `[2, 3, 6, 8, 5]`  
C. `[2, 3, 5, 6, 8]`

**答案：B**

解释：第一轮找到 `2` 并与 `8` 交换；第二轮最小值 `3` 已经在 index 1，数组不改变。A 是 Insertion Sort 两轮后的状态，C 是最终排序结果。

## Practice 4：Insertion Sort 的中间状态

准备将 `2` 插入已有序的 `[3, 6, 8]` 中：

```text
[3, 6, 8, 2, 5]
```

假设 `temp = 2`。**内层 while 循环已经执行了两次右移，但还没有写回 `temp`。** 数组是什么？

A. `[3, 6, 6, 8, 5]`  
B. `[2, 3, 6, 8, 5]`  
C. `[3, 6, 8, 8, 5]`

**答案：A**

解释：第一次把 `8` 从 index 2 复制到 index 3，得到 `[3, 6, 8, 8, 5]`；第二次把 `6` 复制到 index 2，得到 `[3, 6, 6, 8, 5]`。B 是整个插入步骤完成后的结果。

## Practice 5：识别 Selection Sort 的错误

```java
for (int i = 0; i < a.length - 1; i++)
{
    int minIndex = i;

    for (int k = 0; k < a.length; k++)
    {
        if (a[k] < a[minIndex])
        {
            minIndex = k;
        }
    }

    int temp = a[i];
    a[i] = a[minIndex];
    a[minIndex] = temp;
}
```

哪个部分应当修改，才能按照标准 Selection Sort 正确处理未排序部分？

A. 外层循环改为从 `i = 1` 开始。  
B. 内层循环改为从 `k = i + 1` 开始。  
C. 交换时不应该使用 `temp`。

**答案：B**

解释：从 index 0 重新寻找最小值，会把原本已经排好的左侧部分重新拉入比较，可能破坏前几轮结果。

## Practice 6：识别 Insertion Sort 的错误

```java
for (int j = 1; j < a.length - 1; j++)
{
    int temp = a[j];
    int pos = j;

    while (pos > 0 && temp < a[pos - 1])
    {
        a[pos] = a[pos - 1];
        pos--;
    }

    a[pos] = temp;
}
```

如果要正确处理整个数组，应修改哪一处？

A. 把外层条件改为 `j < a.length`。  
B. 把 `pos--` 改为 `pos++`。  
C. 把 `temp < a[pos - 1]` 改为 `temp > a[pos - 1]`。

**答案：A**

解释：原来的 `j < a.length - 1` 会跳过最后一个元素。对于 `{3, 2, 1}`，它只处理 `2`，不会再处理最后的 `1`。

## Practice 7：`ArrayList` 排序为什么使用 `set()`？

一个 `ArrayList<Integer>` 现在包含：

```text
[5, 2, 7]
```

为了把 index 0 的值改成 `2`，且列表的元素数量保持不变，应该使用哪个操作？

A. `list.add(0, 2);`  
B. `list.set(0, 2);`  
C. `list.remove(0);`

**答案：B**

解释：`set(0, 2)` 替换 index 0 的元素，`size()` 不变。`add(0, 2)` 会插入一个新元素，列表变长。

## Practice 8：比较执行次数

一个长度为 4 的数组已经按升序排列：

```text
[1, 2, 3, 4]
```

针对本课的**标准实现**，哪项说法正确？

A. Selection Sort 不再比较任何元素。  
B. Insertion Sort 不需要右移任何元素，但仍会检查插入条件。  
C. 两种算法在任何输入上的比较和移动次数都完全相同。

**答案：B**

解释：Insertion Sort 的 `while` 条件一开始就不成立，因此不需要右移。Selection Sort 仍会检查剩余未排序部分。

## Practice 9：自己填一张 Pass 表

对以下数组进行升序排序：

```text
[7, 4, 6, 1]
```

填写**每轮外层循环结束后**的数组，分别完成两种算法。

| Pass | Selection Sort | Insertion Sort |
|---|---|---|
| 初始 | `[7, 4, 6, 1]` | `[7, 4, 6, 1]` |
| 1 | ? | ? |
| 2 | ? | ? |
| 3 | ? | ? |

**参考答案：**

| Pass | Selection Sort | Insertion Sort |
|---|---|---|
| 初始 | `[7, 4, 6, 1]` | `[7, 4, 6, 1]` |
| 1 | `[1, 4, 6, 7]` | `[4, 7, 6, 1]` |
| 2 | `[1, 4, 6, 7]` | `[4, 6, 7, 1]` |
| 3 | `[1, 4, 6, 7]` | `[1, 4, 6, 7]` |

**你应该观察到：** Selection Sort 第一轮就能把 `1` 放到最终位置，而 Insertion Sort 直到第三轮才轮到 `1`。两种算法的中间状态不同，但最后结果相同。

# Unit 4.15 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 本课作用 |
|---|---|---|
| sort / sorting | 排序；按照某种规则排列元素 | 本课研究的算法任务 |
| ascending order | 升序；从小到大 | 本文 Java 示例的排序方向 |
| descending order | 降序；从大到小 | 与升序相反 |
| selection sort | 选择排序 | 每轮选最小值，放到最终位置 |
| insertion sort | 插入排序 | 每轮把一个元素插入左侧已有序部分 |
| iteration / pass | 迭代 / 一轮 | 本课 pass 指外层循环完整执行一次 |
| sorted portion | 已排序部分 | 每一轮结束后已有序的部分 |
| unsorted portion | 未排序部分 | 尚未处理完成的部分 |
| `minIndex` | 最小值的索引 | Selection Sort 中记录最小值的位置 |
| swap | 交换 | 通过临时变量互换两个位置的值 |
| shift | 移动（右移） | Insertion Sort 中为待插入值腾出位置 |
| temporary variable | 临时变量 | 暂存即将被移动或覆盖的值 |
| `possibleIndex` | 可能的插入位置 | Insertion Sort 中向左寻找合适的位置 |
| comparison | 比较 | 判断元素大小，决定下一步操作 |

---

**下一课预告：** 4.16 将学习 Recursion（递归）。4.17 再正式学习 Recursive Searching and Sorting，包括 Binary Search 和 Merge Sort。注意不要把 4.15 的 Selection / Insertion Sort 与 4.17 的 Merge Sort 混在一起。

**参考资料：**

- [Runestone CSAwesome2 — 4.15 Sorting Algorithms](https://runestone.academy/ns/books/published/csawesome2/topic-4-15-sorting.html?mode=browsing)
- [College Board — AP Computer Science A Course and Exam Description（Effective Fall 2025），第 119 页](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description-effective-fall-2025.pdf)
