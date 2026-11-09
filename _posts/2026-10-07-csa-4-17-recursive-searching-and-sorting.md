---
title: "AP CSA 4.17：递归查找与排序"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学习了 recursion（递归）：一个 method 可以调用自己，每次调用都有独立的参数和局部变量，并在遇到 base case 后逐层返回。

这一课把递归真正用到两个重要问题上：**从一组数据中查找目标**，以及**把一组数据排序**。

> **Binary Search（折半查找）每次排除一半不可能的搜索范围；Merge Sort（归并排序）先把问题分成两半，再把已经排好序的小部分合并起来。**

这两种算法都利用了一个共同的思路：**把大问题逐步缩小（divide and conquer）**。但它们有一个关键区别：

- **Binary Search：只继续搜索可能包含目标的那一半。**
- **Merge Sort：左右两半都要处理，最后还要合并。**

本文与 [Runestone CSAwesome2 4.17](https://runestone.academy/ns/books/published/csawesome2/topic-4-17-recursive-search-sort.html) 及 [College Board 2025 版 CED（第 121–122 页）](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf) 对齐。**AP 的重点是理解、追踪、判断运行结果与前提条件；官方不要求学生独立编写递归方法。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.17 Recursive Searching and Sorting

## 递归遍历（4.17.A.1）
* Recursion 可用于 String、array、ArrayList
* 每一层处理当前位置，再调用下一层
* Base case：已处理完全部元素
* 追踪每层参数与返回值

## Binary Search（4.17.B）
* 前提：数据必须已经排序
* `middle = (start + end) / 2`
* 与中间值比较 → 保留可能的一半
* 找到目标或范围为空时停止
* Iterative / Recursive 都可以
* 通常比 Linear Search 更高效

## Merge Sort（4.17.C）
* Recursive sorting algorithm
* Split：反复分成两半
* Base case：子数组长度为 1（或 0）
* Merge：把两个有序部分合并
* 左右两半都要排序
* 适用于 array / ArrayList

## AP 代码追踪
* Binary Search：记录 start、end、middle
* 识别两种 base cases
* Merge Sort：画出 split / merge 的顺序
* 分清递归调用与返回顺序
* 判断前提条件是否满足

## 考试边界
* 正式考点：4.17.A.1 / B.1–B.3 / C.1–C.2
* 不要求独立编写递归代码（4.16 排除说明）
* 只考 Linear、Binary Search
* 只考 Selection、Insertion、Merge Sort

</script>
</div>
</div>

# 1. 先用一道题理解本课的核心

下面有一个数组：

```java
int[] nums = {2, 5, 8, 10, 11, 15, 17, 20, 22};
```

如果要找出数字 `22` 的位置，你会怎么做？

- **Linear Search（线性查找）**：从左到右逐个检查，直到找到 `22`。
- **Binary Search（折半查找）**：先检查中间的 `11`，发现 `22` 更大，因此左半边的元素都不可能是答案；接着只检查右半边。

现在试着回答：**如果数组没有排序，Binary Search 还能直接使用吗？**

**答案：不能。** 如果数据没有排序，看到 `target > middle value` 并不能证明目标不在左半边。Binary Search 正是依赖“已经排序”这个前提，才能放心地排除一半元素。

# 2. 递归也能遍历 String、Array 和 ArrayList

在 4.16 中，递归最容易通过数字 `n` 的变化来理解。但递归不只处理数字，也能逐个访问数据集合中的元素。

例如，下面这个 method 使用递归计算数组从 index `i` 开始的元素总和：

```java
public static int sumFrom(int[] nums, int i)
{
    if (i == nums.length)
    {
        return 0; // base case: 已没有元素可处理
    }

    return nums[i] + sumFrom(nums, i + 1);
}
```

调用：

```java
int[] nums = {2, 4, 6};
System.out.println(sumFrom(nums, 0));
```

如何追踪？

| 调用 | 当前处理的元素 | 要等待下一层返回什么？ |
|---|---:|---|
| `sumFrom(nums, 0)` | `2` | `2 + sumFrom(nums, 1)` |
| `sumFrom(nums, 1)` | `4` | `4 + sumFrom(nums, 2)` |
| `sumFrom(nums, 2)` | `6` | `6 + sumFrom(nums, 3)` |
| `sumFrom(nums, 3)` | 无 | 返回 `0`（base case） |

返回阶段：

```text
sumFrom(nums, 3) → 0
sumFrom(nums, 2) → 6 + 0  = 6
sumFrom(nums, 1) → 4 + 6  = 10
sumFrom(nums, 0) → 2 + 10 = 12
```

输出是 `12`。

### 同一个思路也能处理其他数据类型

| 数据类型 | 每轮可以怎样访问一个元素？ | 什么时候停止？ |
|---|---|---|
| `String` | `s.substring(i, i + 1)` | `i == s.length()` |
| Array | `nums[i]` | `i == nums.length` |
| `ArrayList<Integer>` | `list.get(i)` | `i == list.size()` |

这三种写法本质相同：**处理当前位置 → 下一层处理下一个位置 → 到达结尾时停止**。

这里只要求**能够读懂并追踪递归代码**，不用把三种递归遍历方法都背下来。

# 3. Binary Search：为什么每次可以排除一半？

Binary Search 适用于已经排序的 array 或 `ArrayList`。

假设：

```java
int[] nums = {2, 5, 8, 10, 11, 15, 17, 20, 22};
```

首先建立 index 与 value 的对应关系：

| Index | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Value | 2 | 5 | 8 | 10 | 11 | 15 | 17 | 20 | 22 |

如果目标是 `22`，第一次检查中间元素：

```text
start = 0
end   = 8
middle = (0 + 8) / 2 = 4
nums[4] = 11
```

因为 `22 > 11`，可以排除 index `0` 到 `4`，接下来只搜索 `5` 到 `8`。

<svg viewBox="0 0 760 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Binary search: check middle indices 4, 6, 7, and 8, progressively narrowing the search range and finding 22">
<rect x="1" y="1" width="758" height="328" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
<text x="18" y="28" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="17" font-weight="bold">Binary Search：每次只保留可能包含 22 的范围</text>
<text x="212" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 0</text>
<text x="263" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 1</text>
<text x="314" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 2</text>
<text x="365" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 3</text>
<text x="416" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 4</text>
<text x="467" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 5</text>
<text x="518" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 6</text>
<text x="569" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 7</text>
<text x="620" y="58" text-anchor="middle" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">index 8</text>
<text x="18" y="84" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">第 1 次</text>
<text x="18" y="102" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">范围 [0, 8]</text>
<rect x="188" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="212" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">2</text>
<rect x="239" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="263" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">5</text>
<rect x="290" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="314" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">8</text>
<rect x="341" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="365" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">10</text>
<rect x="392" y="68" width="48" height="38" rx="4" fill="#fde68a" stroke="#d97706"/>
<text x="416" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">11</text>
<rect x="443" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="467" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">15</text>
<rect x="494" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="518" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">17</text>
<rect x="545" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="569" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">20</text>
<rect x="596" y="68" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="620" y="92" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">22</text>
<text x="18" y="117" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">11 &lt; 22 → 向右</text>
<text x="18" y="139" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">第 2 次</text>
<text x="18" y="157" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">范围 [5, 8]</text>
<rect x="188" y="123" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="212" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">2</text>
<rect x="239" y="123" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="263" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">5</text>
<rect x="290" y="123" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="314" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">8</text>
<rect x="341" y="123" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="365" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">10</text>
<rect x="392" y="123" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="416" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">11</text>
<rect x="443" y="123" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="467" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">15</text>
<rect x="494" y="123" width="48" height="38" rx="4" fill="#fde68a" stroke="#d97706"/>
<text x="518" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">17</text>
<rect x="545" y="123" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="569" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">20</text>
<rect x="596" y="123" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="620" y="147" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">22</text>
<text x="18" y="172" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">17 &lt; 22 → 向右</text>
<text x="18" y="194" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">第 3 次</text>
<text x="18" y="212" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">范围 [7, 8]</text>
<rect x="188" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="212" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">2</text>
<rect x="239" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="263" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">5</text>
<rect x="290" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="314" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">8</text>
<rect x="341" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="365" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">10</text>
<rect x="392" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="416" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">11</text>
<rect x="443" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="467" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">15</text>
<rect x="494" y="178" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="518" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">17</text>
<rect x="545" y="178" width="48" height="38" rx="4" fill="#fde68a" stroke="#d97706"/>
<text x="569" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">20</text>
<rect x="596" y="178" width="48" height="38" rx="4" fill="#bfdbfe" stroke="#3b82f6"/>
<text x="620" y="202" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">22</text>
<text x="18" y="227" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">20 &lt; 22 → 向右</text>
<text x="18" y="249" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">第 4 次</text>
<text x="18" y="267" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">范围 [8, 8]</text>
<rect x="188" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="212" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">2</text>
<rect x="239" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="263" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">5</text>
<rect x="290" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="314" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">8</text>
<rect x="341" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="365" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">10</text>
<rect x="392" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="416" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">11</text>
<rect x="443" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="467" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">15</text>
<rect x="494" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="518" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">17</text>
<rect x="545" y="233" width="48" height="38" rx="4" fill="#e2e8f0" stroke="#64748b"/>
<text x="569" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">20</text>
<rect x="596" y="233" width="48" height="38" rx="4" fill="#86efac" stroke="#d97706"/>
<text x="620" y="257" text-anchor="middle" fill="#0f172a" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="15" font-weight="bold">22</text>
<text x="18" y="282" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">22 ✓ 找到</text>
<text x="18" y="317" fill="#475569" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="12">灰色 = 不在当前范围；蓝色 = 尚可能包含目标；黄色 = 本轮检查；绿色 = 找到。</text>
</svg>

> 上图是**连续缩小搜索范围的示意图**。最可靠的代码追踪方式还是下一张表：记录每次递归调用的 `start`、`end`、`middle` 和比较结果。

## 3.1 使用表格追踪 Binary Search

Runestone 的练习使用了下面这组数据，目标也是 `22`：

```java
int[] nums = {2, 5, 8, 10, 11, 15, 17, 20, 22};
```

| 第几次检查 | `start` | `end` | `middle` | `nums[middle]` | 下一步 |
|---|---:|---:|---:|---:|---|
| 1 | 0 | 8 | 4 | 11 | `22 > 11`，搜索 `5–8` |
| 2 | 5 | 8 | 6 | 17 | `22 > 17`，搜索 `7–8` |
| 3 | 7 | 8 | 7 | 20 | `22 > 20`，搜索 `8–8` |
| 4 | 8 | 8 | 8 | 22 | 找到，返回 index `8` |

最终结果：**index `8`，共检查 4 个中间元素**。

如果使用从左到右的 Linear Search，要从 index 0 一直检查到 index 8，共检查 9 个元素。

Binary Search 一般更快，是因为每次比较后，能舍弃大约一半还没检查的候选元素，而不是一个个排除。

# 4. Recursive Binary Search：递归调用怎样继续缩小范围？

先理解三个变量：

| 变量 | 含义 |
|---|---|
| `start` | 当前搜索范围最左侧的 index |
| `end` | 当前搜索范围最右侧的 index |
| `middle` | 当前搜索范围的中间 index |

这里 `start` 和 `end` **都属于搜索范围**，因此范围有效时必须满足：

```java
start <= end
```

中间索引通常写成：

```java
int middle = (start + end) / 2;
```

Java 的 `int` 除法会舍去小数部分。例如 `(5 + 8) / 2` 得到 `6`，不是 `6.5`。

## 4.1 两个停止条件（Base Cases）

Recursive Binary Search 有两个最重要的结束情况：

**情况一：找到目标。**

```java
if (target == nums[middle])
{
    return middle;
}
```

**情况二：搜索范围已经为空。**

```java
if (start > end)
{
    return -1;
}
```

它们解决的是两个不同问题：

- **找到**：有一个元素等于 `target`，返回它的 index。
- **找不到**：已经没有元素可以检查了，返回 `-1`。

为了避免空数组或空搜索范围造成无效索引访问，**实际代码应先检查 `start > end`，再计算并访问中间元素**。

## 4.2 递归版本：先读懂代码，不要求默写

```java
public static int binarySearch(int[] nums,
                               int start,
                               int end,
                               int target)
{
    // Base case 1: 搜索范围已经为空
    if (start > end)
    {
        return -1;
    }

    int middle = (start + end) / 2;

    // Base case 2: 找到了目标
    if (nums[middle] == target)
    {
        return middle;
    }

    if (target < nums[middle])
    {
        // 只在左半边继续查找
        return binarySearch(nums, start, middle - 1, target);
    }
    else
    {
        // 只在右半边继续查找
        return binarySearch(nums, middle + 1, end, target);
    }
}
```

初始调用：

```java
int[] nums = {2, 5, 8, 10, 11, 15, 17, 20, 22};
int result = binarySearch(nums, 0, nums.length - 1, 22);
```

这一版与教材的**算法思路相同**，只是将“范围已经为空”的检查放在访问元素之前，使它也能安全处理空数组。

### 递归调用链长什么样？

```text
binarySearch(nums, 0, 8, 22)
    middle = 4, nums[4] = 11
    ↓ target 更大
    binarySearch(nums, 5, 8, 22)
        middle = 6, nums[6] = 17
        ↓ target 更大
        binarySearch(nums, 7, 8, 22)
            middle = 7, nums[7] = 20
            ↓ target 更大
            binarySearch(nums, 8, 8, 22)
                middle = 8, nums[8] = 22
                return 8
            ↑ return 8
        ↑ return 8
    ↑ return 8
```

注意：**四层调用并不是同时运行。** 外层调用在等待内层找到结果；最内层返回 `8` 后，结果才沿着调用链逐层传回。

## 4.3 如果找不到呢？

仍然使用这组已排序的数据，但搜索 `12`：

| 调用 | `start` | `end` | `middle` | 比较结果 |
|---|---:|---:|---:|---|
| 1 | 0 | 8 | 4 | `nums[4] = 11`，向右 |
| 2 | 5 | 8 | 6 | `nums[6] = 17`，向左 |
| 3 | 5 | 5 | 5 | `nums[5] = 15`，向左 |
| 4 | 5 | 4 | — | `start > end`，返回 `-1` |

最后一行**不再计算 middle，也不再访问数组元素**。因为搜索范围已经为空。

## 4.4 Iterative 与 Recursive 有什么区别？

我们在 4.14 已见过用 `while` loop 实现的 Binary Search：

```java
while (start <= end)
{
    int middle = (start + end) / 2;

    if (nums[middle] == target)
    {
        return middle;
    }
    else if (target < nums[middle])
    {
        end = middle - 1;
    }
    else
    {
        start = middle + 1;
    }
}
return -1;
```

| 比较点 | Iterative（迭代） | Recursive（递归） |
|---|---|---|
| 怎样重复？ | 使用 `while` | Method 调用自己 |
| 怎样缩小范围？ | 更新 `start` / `end` | 将新范围作为参数传给下一层 |
| 什么时候结束？ | 找到或循环条件不成立 | 找到或触发空范围 base case |
| 核心查找过程 | 检查中间值，排除一半 | 检查中间值，排除一半 |

**AP 考试要求能理解两种写法以及它们的结果，不要求独立编写递归方法。**

## 4.5 换成 ArrayList 呢？

Binary Search 同样能用于**已经排序的** `ArrayList<Integer>`。

核心逻辑不变，只是访问方式不同：

| Array | ArrayList |
|---|---|
| `nums.length` | `list.size()` |
| `nums[middle]` | `list.get(middle)` |
| `nums.length - 1` | `list.size() - 1` |

不要在处理 `ArrayList` 时写 `list[middle]`，那是数组访问语法。

还有一个常见考试陷阱：如果数组存在**重复元素**，普通 Binary Search 找到的是某个匹配位置，**不保证是第一个或最后一个匹配位置**。它具体返回哪个位置，要根据代码中的 middle 计算与比较顺序判断。

# 5. Merge Sort：先拆分，再合并

上一课 4.15 学习了 Selection Sort 和 Insertion Sort，这两种算法都使用循环逐步整理数组。

**Merge Sort（归并排序）**使用不同的策略：

1. **Divide（拆分）**：把数据分成两半。
2. **继续拆分**：每一半再分成两半，直到剩下一个元素。
3. **Merge（合并）**：把两个已经有序的小部分，合并成一个更大的有序部分。
4. **继续合并**：最终得到整个有序数组。

这叫作 **divide and conquer（分治）**。

## 5.1 用教材的四个数字理解 Split 与 Merge

```java
int[] nums = {86, 3, 43, 5};
```

先看这张图：

<svg viewBox="0 0 760 440" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Merge sort splits [86,3,43,5] into [86,3] and [43,5], then single elements, then merges to [3,86] and [5,43], and finally [3,5,43,86]">
  <rect x="1" y="1" width="758" height="438" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
  <g font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="16" text-anchor="middle" fill="#0f172a">
    <text x="380" y="29" font-size="18" font-weight="bold">Merge Sort：上半部分拆分；下半部分逐层合并</text>
    <rect x="273" y="45" width="214" height="38" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="380" y="70">[86, 3, 43, 5]</text>
    <rect x="135" y="121" width="174" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="222" y="145">[86, 3]</text>
    <rect x="451" y="121" width="174" height="36" rx="6" fill="#dbeafe" stroke="#3b82f6"/><text x="538" y="145">[43, 5]</text>
    <rect x="105" y="192" width="75" height="34" rx="5" fill="#e2e8f0" stroke="#64748b"/><text x="142" y="214">[86]</text>
    <rect x="210" y="192" width="75" height="34" rx="5" fill="#e2e8f0" stroke="#64748b"/><text x="247" y="214">[3]</text>
    <rect x="474" y="192" width="75" height="34" rx="5" fill="#e2e8f0" stroke="#64748b"/><text x="511" y="214">[43]</text>
    <rect x="579" y="192" width="75" height="34" rx="5" fill="#e2e8f0" stroke="#64748b"/><text x="616" y="214">[5]</text>
    <rect x="135" y="268" width="174" height="36" rx="6" fill="#bbf7d0" stroke="#16a34a"/><text x="222" y="292">[3, 86]</text>
    <rect x="451" y="268" width="174" height="36" rx="6" fill="#bbf7d0" stroke="#16a34a"/><text x="538" y="292">[5, 43]</text>
    <rect x="273" y="351" width="214" height="40" rx="6" fill="#86efac" stroke="#15803d"/><text x="380" y="376" font-weight="bold">[3, 5, 43, 86]</text>
  </g>
  <g stroke="#64748b" stroke-width="2" fill="none" stroke-linecap="round">
    <path d="M380 83 L222 121 M380 83 L538 121 M222 157 L142 192 M222 157 L247 192 M538 157 L511 192 M538 157 L616 192"/>
    <path d="M142 226 L222 268 M247 226 L222 268 M511 226 L538 268 M616 226 L538 268 M222 304 L380 351 M538 304 L380 351"/>
  </g>
  <text x="18" y="120" fill="#1d4ed8" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">Split ↓</text>
  <text x="18" y="280" fill="#15803d" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="14" font-weight="bold">Merge ↓</text>
  <text x="380" y="421" fill="#475569" text-anchor="middle" font-family="Noto Sans CJK SC, PingFang SC, Microsoft YaHei, sans-serif" font-size="13">上半部分展示概念上的拆分；下半部分展示已排序的小数组如何合并。</text>
</svg>

这里最值得注意的是：**拆分本身不会把数据排好序。真正产生排序结果的是 Merge 阶段。**

### Split：拆到每组只剩一个元素

```text
[86, 3, 43, 5]
      ↓
[86, 3]    [43, 5]
   ↓          ↓
[86] [3]   [43] [5]
```

每组只剩一个元素时，就不需要继续拆了。

为什么？因为只有一个元素的数组，本身已经是有序的。

### Merge：逐层合并成有序数组

```text
[86] + [3]    → [3, 86]
[43] + [5]    → [5, 43]
[3, 86] + [5, 43] → [3, 5, 43, 86]
```

**注意顺序：递归实现时一般先完成左半边的排序，再完成右半边，最后合并两半。** 上面的图把拆分和合并分成两个阶段展示，是为了帮助理解整体结构，并不是说程序一定先同时拆完所有分支才开始合并。

# 6. Merge 到底怎样把两组排好序的数字合起来？

这是 Merge Sort 最需要理解的操作。

假设左右两组已经分别排序：

```text
Left  = [3, 86]
Right = [5, 43]
```

每一次都比较**两组中尚未取出的第一个元素**，把较小的那个放入结果数组。

| 步骤 | Left 当前值 | Right 当前值 | 选择哪个？ | 合并结果 |
|---|---:|---:|---|---|
| 1 | 3 | 5 | 3 | `[3]` |
| 2 | 86 | 5 | 5 | `[3, 5]` |
| 3 | 86 | 43 | 43 | `[3, 5, 43]` |
| 4 | 86 | 已用完 | 剩余的 86 | `[3, 5, 43, 86]` |

现在结果完全有序。

关键是：**Merge 只负责合并两个已经有序的部分**。如果左右两半本身没有排好序，简单地取两边较小的开头元素，就不能保证最终结果有序。

## 6.1 为什么要用一个 `temp` 数组？

Runestone 的示例使用与原数组一样长的辅助数组 `temp`，暂时保存合并结果。

因为如果一边读原数组，一边随意覆盖原来的位置，可能会把还没比较的数覆盖掉。

所以教材中的做法是：

```text
从左、右两部分比较并取值
              ↓
       写入 temp 对应位置
              ↓
       把 temp 复制回原数组
```

`temp` 不是又一份需要排序的数据，而是**合并时暂存结果的工作空间**。

# 7. 如何阅读教材中的 Merge Sort Java 代码？

Runestone 用三个 method 组织这套算法。第一次阅读时，不要从头到尾逐字符死记，而是先明确每个 method 的职责。

| Method | 负责什么？ |
|---|---|
| `mergeSort()` | 准备临时数组，启动排序 |
| `mergeSortHelper()` | 递归把范围分成左右两半，并让两半分别排好序 |
| `merge()` | 把两组有序部分合并，再写回原数组 |

下面将教材的算法整理成便于阅读的版本；**用于追踪，不要求学生自己从零编写递归排序方法**。

```java
// 入口：准备辅助数组
public static void mergeSort(int[] a)
{
    int[] temp = new int[a.length];
    mergeSortHelper(a, 0, a.length - 1, temp);
}

// 递归：先排好左半和右半，再合并
private static void mergeSortHelper(int[] a,
                                    int from, int to,
                                    int[] temp)
{
    if (from < to)
    {
        int mid = (from + to) / 2;

        mergeSortHelper(a, from, mid, temp);
        mergeSortHelper(a, mid + 1, to, temp);

        merge(a, from, mid, to, temp);
    }
}

// 合并两个已经排好序的部分
private static void merge(int[] a, int from, int mid,
                          int to, int[] temp)
{
    int i = from;       // 左半当前 index
    int j = mid + 1;    // 右半当前 index
    int k = from;       // temp 写入位置

    while (i <= mid && j <= to)
    {
        if (a[i] < a[j])
        {
            temp[k] = a[i];
            i++;
        }
        else
        {
            temp[k] = a[j];
            j++;
        }
        k++;
    }

    // 如果左半还有剩余元素，全部接上
    while (i <= mid)
    {
        temp[k] = a[i];
        i++;
        k++;
    }

    // 如果右半还有剩余元素，全部接上
    while (j <= to)
    {
        temp[k] = a[j];
        j++;
        k++;
    }

    // 把排好序的结果写回原数组
    for (k = from; k <= to; k++)
    {
        a[k] = temp[k];
    }
}
```

## 7.1 `mergeSortHelper()` 何时停止递归？

```java
if (from < to)
```

只有当这一段至少包含两个元素时，才继续拆分。

- `from < to`：至少两个元素，需要继续处理。
- `from == to`：只有一个元素，已经有序，不需要再拆。
- `from > to`：范围为空，也不需要处理。

**Base case 并不一定要明确写 `return`。** 这里条件不成立时，method 不会进入 `if`，自然就结束了。

## 7.2 三个步骤必须按顺序执行

```java
mergeSortHelper(a, from, mid, temp);       // ① 左半排序
mergeSortHelper(a, mid + 1, to, temp);     // ② 右半排序
merge(a, from, mid, to, temp);            // ③ 合并
```

第一条调用还没完成，程序就不会执行第二条；第二条还没完成，就不会执行第三条。

所以要记住：

> **先解决左边，接着解决右边，等两边都有序，再合并。**

这也是它与 Binary Search 最大的区别：Binary Search 根据比较结果只进入**一边**；Merge Sort 必须处理**两边**。

## 7.3 怎样追踪 `merge()` 中的三个指针？

| 指针 | 从哪里开始？ | 作用 |
|---|---|---|
| `i` | `from` | 指向左半当前元素 |
| `j` | `mid + 1` | 指向右半当前元素 |
| `k` | `from` | 指向 `temp` 中下一个写入位置 |

每轮比较后：

- 从左边取元素 → `i++`。
- 从右边取元素 → `j++`。
- 不管取哪边，写入一个元素后 → `k++`。

如果一边用完，剩下的另一边**已经有序**，直接依次复制剩余元素即可。

# 8. 教材 Tracing Challenge：八个数字怎样排序？

Runestone 的 Project 4.17.6 要求追踪：

```java
int[] nums = {5, 2, 20, 22, 17, 15, 8, 10};
```

先独立思考，之后用下面的表格核对。

## 8.1 Split：概念上的拆分层次

| 层次 | 拆分后的各组 |
|---|---|
| 原始数组 | `[5, 2, 20, 22, 17, 15, 8, 10]` |
| Split 1 | `[5, 2, 20, 22]`　`[17, 15, 8, 10]` |
| Split 2 | `[5, 2]`　`[20, 22]`　`[17, 15]`　`[8, 10]` |
| Split 3 | `[5]` `[2]` `[20]` `[22]` `[17]` `[15]` `[8]` `[10]` |

## 8.2 Merge：逐层形成有序数组

| 合并层次 | 合并后的各组 |
|---|---|
| Merge 1 | `[2, 5]`　`[20, 22]`　`[15, 17]`　`[8, 10]` |
| Merge 2 | `[2, 5, 20, 22]`　`[8, 10, 15, 17]` |
| Merge 3 | `[2, 5, 8, 10, 15, 17, 20, 22]` |

最后的结果是：

```text
[2, 5, 8, 10, 15, 17, 20, 22]
```

**注意：表中的 Split 和 Merge 是用来整理思路的分层示意。** 如果要追踪真实的递归调用顺序，应该先把左半边拆分并合并完成，然后才处理右半边，最后进行最外层合并。

# 9. 和已经学过的 Search / Sort 有什么区别？

## 9.1 Linear Search 与 Binary Search

| 比较点 | Linear Search | Binary Search |
|---|---|---|
| 是否需要排序？ | 不需要 | **需要先排序** |
| 怎样查找？ | 逐个检查 | 先检查中间值，每次排除一半候选范围 |
| 是否可以使用数组和 ArrayList？ | 可以 | 可以 |
| 通常哪种更高效？ | 数据量大时通常较慢 | **对已经排序的数据通常更快** |
| 可能返回哪个重复元素？ | 取决于扫描方向 | 取决于 middle 的计算与查找路径 |

注意：不要把“先排序再 Binary Search”的成本忽略掉。如果原始数据无序，而只需要查找一次，额外排序未必比直接线性查找更划算。这是对算法效率的理解补充，不是本课需要计算的考试公式。

## 9.2 Selection、Insertion 与 Merge Sort

| Sorting Algorithm | 核心思路 | 类型 |
|---|---|---|
| **Selection Sort** | 每轮选出未排序部分的最小元素，交换到最终位置 | Iterative |
| **Insertion Sort** | 逐个取出元素，插入左边已有序的部分 | Iterative |
| **Merge Sort** | 反复拆成两半，再合并有序的部分 | Recursive |

Merge Sort 对较大数据集通常具有更好的增长效率；不过**不能简单理解为任何输入下它一定比另外两种算法快**。例如很短或几乎有序的数据，Insertion Sort 也可能表现很好。

Runestone 的重点是让学生知道 Merge Sort 通常更高效；AP 正式考点更强调**能追踪每轮拆分与合并过程**。

# 10. AP Exam Focus：六项核心考点

College Board 2025 版 Course and Exam Description 将这课分为三组学习目标（4.17.A、4.17.B、4.17.C），共六条 Essential Knowledge：

| AP 知识点 | 必须理解的内容 |
|---|---|
| **4.17.A.1** | 递归可以遍历 `String`、array 和 `ArrayList`。 |
| **4.17.B.1** | Binary Search 要求数据已经排序；从中间开始比较，每次排除大约一半候选范围。 |
| **4.17.B.2** | Binary Search 通常比 Linear Search 更高效。 |
| **4.17.B.3** | Binary Search 可以使用 iteration，也可以使用 recursion。 |
| **4.17.C.1** | Merge Sort 是递归排序算法，可用于 array 或 `ArrayList`。 |
| **4.17.C.2** | Merge Sort 不断把数组分到单元素子数组，再把有序子数组逐层合并成整个有序数组。 |

### 考试技能（Suggested Skills）

- **4.A**：描述一段代码或程序的行为。
- **4.B**：描述代码按预期工作所需要满足的初始条件。

### 明确的考试边界

1. **只要求 Linear Search 和 Binary Search**；其他搜索算法不在 AP CSA 范围内。
2. **只要求 Selection Sort、Insertion Sort 和 Merge Sort**；其他排序算法不在范围内。
3. **不要求学生独立编写递归代码**（4.16 官方排除说明）。本课重点是阅读、追踪递归程序，以及判断每一阶段的结果。
4. 本课不要求推导复杂的时间复杂度公式；把精力放在**已排序前提、递归边界、搜索范围变化、拆分与合并顺序**上。

# 11. Common Mistakes：常见错误

| 容易产生的误解 | 正确理解 |
|---|---|
| 认为 Binary Search 可以直接用于乱序数据 | **必须先排序**，否则不能可靠地排除一半元素 |
| 认为 Binary Search 每次都检查剩下范围的第一个元素 | 检查的是**中间元素** |
| 找不到时仍然访问 `nums[middle]` | 先检查 `start > end`，空范围应直接返回未找到 |
| 认为 `middle = (start + end) / 2` 可能得到小数 index | Java 的整数除法会舍去小数部分 |
| 认为每次递归同时检查左右两半 | **Binary Search 只进入其中一半** |
| 忘记 `middle - 1` 或 `middle + 1` | 已检查过的 middle 应排除，不应继续包含它 |
| 认为 Binary Search 一定返回第一个重复元素 | 可能返回任意匹配位置，取决于算法路径 |
| 认为 Merge Sort 只需拆分，不需要合并 | 拆分不负责排序，**合并才逐渐形成有序结果** |
| 认为 `merge()` 可以直接合并两个乱序子数组 | 该合并过程要求左右两半**分别有序** |
| 认为 Merge Sort 只处理一边 | 必须**分别排序左右两半**再合并 |
| 认为 Split 表格就是程序真实的调用时间顺序 | 表格是概念层次；实际递归通常先完整处理左半，再处理右半 |
| 认为 Merge Sort 对所有输入都一定最快 | 它通常更高效，但不是所有规模和输入下都必然最快 |

# 12. Mini Practice：AP 风格练习

## Practice 1：Binary Search 的前提条件

下列哪种情况下，Binary Search 可以直接正确使用？

A. 数组内容是 `{8, 2, 10, 4}`，但目标是 `10`。

B. 数组内容是 `{2, 4, 8, 10}`，目标是 `10`。

C. 任意 `ArrayList`，只要元素都是 `Integer`。

**答案：B。** Binary Search 依赖元素已排序；`ArrayList<Integer>` 也不能跳过排序前提。

## Practice 2：追踪 Binary Search

```java
int[] nums = {2, 5, 8, 10, 11, 15, 17, 20, 22};
```

使用前文的递归 Binary Search 查找 `22`，依次比较了哪些值？

A. `2, 5, 8, 10, 11, 15, 17, 20, 22`

B. `11, 17, 20, 22`

C. `11, 15, 17, 20, 22`

**答案：B。** 每次只检查当前范围的中间值，共检查四次。

## Practice 3：找不到时的 Base Case

在递归 Binary Search 中，哪一个条件表示当前没有任何元素可搜索？

A. `start == end`

B. `start > end`

C. `middle == 0`

**答案：B。** `start == end` 时还剩一个可能的元素，不能直接认定找不到。

## Practice 4：ArrayList 的写法

有一个已排序的：

```java
ArrayList<Integer> values;
```

哪种表达式可以读取中间位置的元素？

A. `values[middle]`

B. `values.get(middle)`

C. `values.length[middle]`

**答案：B。** `ArrayList` 使用 `get(index)` 读取元素。

## Practice 5：递归遍历的结果

```java
public static int sumFrom(int[] a, int i)
{
    if (i == a.length)
    {
        return 0;
    }
    return a[i] + sumFrom(a, i + 1);
}
```

执行：

```java
int[] a = {3, 1, 4};
System.out.println(sumFrom(a, 1));
```

输出是什么？

A. `8`　 B. `5`　 C. `4`

**答案：B。** 从 index 1 开始，只累加 `1 + 4 = 5`，不会访问 index 0 的 `3`。

## Practice 6：Merge Sort 的拆分与合并

```java
int[] a = {86, 3, 43, 5};
```

当两个最小子问题分别合并完成后（但还没执行最终整组合并），得到的两组数据是什么？

A. `[86, 3]` 和 `[43, 5]`

B. `[3, 86]` 和 `[5, 43]`

C. `[3, 5]` 和 `[43, 86]`

**答案：B。** 左右两个长度为 2 的部分各自已经排好序，下一步才进行整体合并。

## Practice 7：追踪 Merge Sort 的最终结果

Runestone 的练习使用：

```java
int[] a = {5, 2, 20, 22, 17, 15, 8, 10};
```

第一轮将整个数组对半分开；等左右两半各自完成排序，**但还没有进行最外层的 Merge** 时，左右两组是什么？

A. `[2, 5, 20, 22]` 和 `[8, 10, 15, 17]`

B. `[5, 2, 20, 22]` 和 `[17, 15, 8, 10]`

C. `[2, 5, 8, 10]` 和 `[15, 17, 20, 22]`

**答案：A。** 左半的四个元素排序后是 `[2, 5, 20, 22]`；右半的四个元素排序后是 `[8, 10, 15, 17]`。最外层再把它们合成完整有序数组。

## Practice 8：判断方法的前提条件

假设有两个数组：

```java
int[] left  = {3, 86};
int[] right = {5, 43};
```

一个 `merge` method 每次比较两边当前的第一个元素，并把较小者放入结果中。这个方法能够正确合并的关键前提是什么？

A. 两个数组的长度必须相同。

B. 两个数组都必须已经分别排序。

C. 两个数组都不能包含重复元素。

**答案：B。** 合并过程依赖每组本身已排序；不要求两组长度相同，也不要求所有值都不同。

## Practice 9：Binary Search vs. Merge Sort

下列哪项描述正确？

A. Binary Search 和 Merge Sort 都只需要继续处理其中一半。

B. Binary Search 保留可能包含目标的一半；Merge Sort 需要分别排序两半，再合并。

C. Merge Sort 要求整个数组已经排序，才能开始运行。

**答案：B。** 两者都使用 divide and conquer，但递归处理哪些部分、最终要得到什么结果，是不同的。

# Unit 4.17 核心词汇（Vocabulary）

| Vocabulary | 中文理解 | 本课怎样使用？ |
|---|---|---|
| recursive algorithm | 递归算法 | 通过方法调用自身处理更小的问题 |
| base case | 基本情况 / 终止条件 | 到达结果或范围为空时停止递归 |
| recursive call | 递归调用 | 用缩小后的参数再次调用同一个 method |
| divide and conquer | 分治 | 将大问题拆成小问题来解决 |
| binary search | 折半查找 / 二分查找 | 在有序数据中检查中间元素、排除一半 |
| linear search | 线性查找 | 按顺序逐个检查元素 |
| sorted data | 已排序数据 | Binary Search 的必要前提 |
| start / end | 搜索范围的起点 / 终点 | 确定当前有哪些 index 还可能包含目标 |
| middle index | 中间索引 | `(start + end) / 2` |
| iterative algorithm | 迭代算法 | 使用循环反复执行步骤 |
| merge sort | 归并排序 | 递归拆分，再合并有序部分 |
| split / divide | 拆分 | 将当前数组范围分成两半 |
| merge | 合并 | 把两个已排序的部分合成一个有序部分 |
| subarray | 子数组 / 数组的一部分 | 递归排序中的较小问题 |
| temporary array | 临时数组 | Merge Sort 合并时存放结果的空间 |
| precondition | 前提条件 | 代码按预期工作之前必须满足的条件 |

---

**Unit 4 的新课到这里结束了。** Runestone 的 4.18 起是各部分的 Summary、代码练习与综合复习。到这一步，你应该已经能够将 Unit 4 学过的**数组、ArrayList、二维数组、遍历、查找、排序和递归**联系在一起：

- **查找**：在一组数据中确定目标是否存在，以及它在哪里。
- **排序**：重新组织元素的顺序。
- **递归**：把一个问题缩小，通过若干层方法调用解决它。

真正掌握 4.17 的标志，不是能把 Merge Sort 的全部代码默写出来，而是**能够画出每一次拆分、解释每一次比较，并追踪结果怎样一步步形成**。
