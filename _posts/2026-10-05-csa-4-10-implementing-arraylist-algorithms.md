---
title: "AP CSA 4.10：实现 ArrayList 算法"
layout: post
categories: media
render_with_liquid: false
---

在 4.5，我们已经学会使用数组（array）完成求最值、统计、查找、重复元素检测和反转等算法。4.8 和 4.9 又学习了 `ArrayList` 的方法与遍历。

现在的问题是：**如果把数据存放在 `ArrayList` 中，原来的算法应该怎样改写？当列表的元素数量还会变化时，又该怎样避免出错？**

> **4.10 的关键不是重新背诵一套算法，而是把 4.5 的算法思路迁移到 `ArrayList`，同时正确处理 `add` / `remove` 引起的 `size` 和 index 变化。**

本课采用一个约定：代码示例中的 `ArrayList` 已正确创建，所展示的方法位于 Java class 内，文件开头已写入 `import java.util.ArrayList;`。涉及最小值、最大值或平均值的示例，会明确说明非空前提。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.10 Implementing ArrayList Algorithms

## 从 Array 迁移到 ArrayList
* `a.length` → `list.size()`
* `a[i]` → `list.get(i)`
* `a[i] = value` → `list.set(i, value)`
* 元素数可随 `add` / `remove` 变化

## 插入、删除与索引
* `add(index, value)`：插入，后面元素右移
* `set(index, value)`：替换，size 不变
* `remove(index)`：删除，后面元素左移
* 在循环中增删元素时要重新判断 index

## 统计、查找与判断
* Min / Max：从 `get(0)` 开始
* Sum / Average：累加 + `size()`
* Any：找到一个就 `return true`
* All：找到反例就 `return false`
* Count：符合条件则加 1

## 元素比较与重排
* Consecutive pairs：`get(i)` 与 `get(i + 1)`
* Duplicates：嵌套循环 + `.equals()`
* Shift / Rotate：移动并保存被覆盖的元素
* Reverse：逆向读取 / 新列表头部插入

## 同时遍历多个数据结构
* Parallel `ArrayList`：相同 index 对应同一记录
* 也可能同时处理 String、array 和 ArrayList
* 注意长度、index 与数据对应关系

## AP 考点
* **4.10.A.1**：11 类标准算法
* **4.10.A.2**：同步遍历多个数据结构
* 代码编写、追踪、纠错、解释

</script>
</div>
</div>

# 1. 第一个核心问题：数组算法怎么变成 ArrayList 算法？

先比较两个完成同一任务的循环。

**Array：**

```java
int[] scores = {90, 75, 100};

for (int i = 0; i < scores.length; i++)
{
    System.out.println(scores[i]);
}
```

**ArrayList：**

```java
ArrayList<Integer> scores = new ArrayList<Integer>();
scores.add(90);
scores.add(75);
scores.add(100);

for (int i = 0; i < scores.size(); i++)
{
    System.out.println(scores.get(i));
}
```

结果都一样：依次打印 `90`、`75`、`100`。

对照下面的表格，就能看出主要差异。

| 想做什么？ | Array | ArrayList |
|---|---|---|
| 获得元素数量 | `a.length` | `list.size()` |
| 读取 index 为 `i` 的元素 | `a[i]` | `list.get(i)` |
| 替换 index 为 `i` 的元素 | `a[i] = x;` | `list.set(i, x);` |
| 在指定位置插入 | 需要自己处理新数组或移动 | `list.add(i, x);` |
| 删除指定位置的元素 | 需要自己处理新数组或移动 | `list.remove(i);` |

**关键区别：** array 创建后长度固定，而 `ArrayList` 可以通过 `add` 或 `remove` 改变元素数量。

这意味着同样一个循环，如果内部添加或删除了元素，`list.size()` 与后续元素的 index 就可能发生变化。

# 2. Add / Set / Remove：先看懂列表怎样变化

在写复杂算法之前，必须先能够准确追踪 `ArrayList` 方法。

## 2.1 用一份列表逐步追踪

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(1);
nums.add(2);
nums.add(3);
nums.set(2, 4);
nums.add(1, 5);
nums.add(6);
System.out.println(nums);
```

不要直接猜输出。每执行一次操作，就更新一次列表。

| 操作 | 列表内容 | size |
|---|---|---:|
| 开始 | `[]` | 0 |
| `add(1)` | `[1]` | 1 |
| `add(2)` | `[1, 2]` | 2 |
| `add(3)` | `[1, 2, 3]` | 3 |
| `set(2, 4)` | `[1, 2, 4]` | 3 |
| `add(1, 5)` | `[1, 5, 2, 4]` | 4 |
| `add(6)` | `[1, 5, 2, 4, 6]` | 5 |

**最终输出：**

```text
[1, 5, 2, 4, 6]
```

在这里：

- `set(2, 4)` **替换** index 2 的元素，列表长度不变。
- `add(1, 5)` 在 index 1 **插入** 元素，原来 index 1 及后面的元素向右移动。
- `add(6)` 没有 index，表示把元素加在末尾。

## 2.2 再看 Remove

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Mia");
names.add("Leo");
names.add("Eva");

String removed = names.remove(1);
```

执行后：

```text
removed = "Leo"
names   = [Mia, Eva]
```

`remove(1)` **删除 index 1 的元素**，并返回被删除的对象引用。原来位于 index 2 的 `"Eva"` 左移到 index 1。

比较三个方法：

| 方法 | 列表中发生了什么？ | size 变化 | 返回值 |
|---|---|---|---|
| `add(index, obj)` | 插入元素，后续元素右移 | +1 | 无返回值（`void`） |
| `set(index, obj)` | 替换现有元素 | 不变 | 原来的元素 |
| `remove(index)` | 删除元素，后续元素左移 | −1 | 被删除的元素 |

**AP 追踪原则：** 只要出现 `add`、`set`、`remove`，就先写出更新后的整个列表，再继续看下一行。

## 2.3 真正的 Insert 算法：把数字插入已排序的列表

如果题目要求：**在保持升序排列的同时，把一个新数字加入列表**，就不能一律使用 `add(value)` 把数字放到末尾。

例如：

```text
原列表： [2, 5, 9]
要插入： 7
结果：   [2, 5, 7, 9]
```

算法思路：从左往右寻找**第一个大于或等于 7 的元素**，然后在它前面插入。

```java
public static void insertSorted(ArrayList<Integer> nums, int value)
{
    int i = 0;

    while (i < nums.size() && nums.get(i) < value)
    {
        i++;
    }

    nums.add(i, value);
}
```

这段代码的前提是：`nums` 原本已经按从小到大的顺序排列。

- `i` 从 0 开始，跳过所有小于 `value` 的元素。
- 遇到第一个大于或等于 `value` 的元素时停下，用 `add(i, value)` 插入。
- 如果所有元素都小于 `value`，最终 `i == nums.size()`，此时在末尾插入也是合法的。

**注意：** 这里先找到位置，*循环结束后才插入*，避免在遍历过程中不断修改列表的大小。

# 3. Insert / Delete：遍历时修改 size，为什么容易出错？

这是 4.9 的重点，也是 4.10 实现算法时必须熟练运用的概念。

## 3.1 一个看起来合理、实际结果却不对的循环

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
for (int i = 0; i < 5; i++)
{
    nums.add(i);
}
// 此时 nums = [0, 1, 2, 3, 4]

for (int i = 0; i < nums.size(); i++)
{
    if (i % 2 == 0)
    {
        nums.remove(i);
    }
}
```

有人可能以为：删除偶数 index 的元素，结果应该是 `[1, 3]`。

但实际情况是：

| 循环时的 `i` | 操作 | 操作后的列表 |
|---|---|---|
| 0 | 删除 index 0（值为 0） | `[1, 2, 3, 4]` |
| 1 | 不删除 | `[1, 2, 3, 4]` |
| 2 | 删除 index 2（此时值为 3） | `[1, 2, 4]` |
| 3 | `3 < nums.size()` 为 `false`，结束 | `[1, 2, 4]` |

**实际结果是 `[1, 2, 4]`，不是 `[1, 3]`。**

原因：第一次删除后，所有后面的元素都左移了。循环变量 `i` 却仍按照原来的规则继续增加。

如果题目要删除**原始列表中** index 为 0、2、4 的元素，可以从后往前删除：

```java
for (int i = nums.size() - 1; i >= 0; i--)
{
    if (i % 2 == 0)
    {
        nums.remove(i);
    }
}
```

这里应该使用**尚未删除任何元素的原始列表** `[0, 1, 2, 3, 4]`。从 index 4 开始往前删除，就不会影响还没处理的较小 index。最终得到 `[1, 3]`。

## 3.2 如果题目要求删除所有符合条件的元素呢？

例如：删除列表中所有负数（包括连续出现的负数）。

```java
public static void removeNegatives(ArrayList<Integer> nums)
{
    int i = 0;

    while (i < nums.size())
    {
        if (nums.get(i) < 0)
        {
            nums.remove(i);
        }
        else
        {
            i++;
        }
    }
}
```

这段代码有个重要细节：

- 如果删除了 `nums.get(i)`，**不要立即增加 `i`**。因为后面的元素已经左移到了当前 index，还需要检查。
- 如果没有删除，才使用 `i++` 去检查下一个位置。

例如：

```text
原列表： [4, -2, -5, 7]
删除 -2：[4, -5, 7]      ← -5 移到了原来 -2 的位置
继续检查相同 index
删除 -5：[4, 7]
结果：   [4, 7]
```

**不要用普通 enhanced `for` loop 在遍历同一个 `ArrayList` 时直接 `add` 或 `remove`。** 这可能触发 `ConcurrentModificationException`，并且会让遍历逻辑难以保证正确。

# 4. Min / Max / Sum / Average：把 4.5 的算法迁移过来

这几类算法的**思路与数组版本相同**，变化的主要是访问元素的语法。

## 4.1 求最小值或最大值

假设 `nums` 至少有一个元素。

```java
public static int findMax(ArrayList<Integer> nums)
{
    int max = nums.get(0);

    for (int value : nums)
    {
        if (value > max)
        {
            max = value;
        }
    }

    return max;
}
```

例如：

```text
nums = [-9, -4, -12]
结果 = -4
```

为什么不用 `int max = 0;`？因为如果数组所有元素都是负数，0 可能比所有元素都大，但它**根本不在列表里**。

所以：**求最值时，先使用 `get(0)` 作为初始答案，再逐个比较。**

求最小值只需要把 `>` 改成 `<`。

## 4.2 求平均值

假设列表至少有一个元素：

```java
public static double average(ArrayList<Integer> nums)
{
    double sum = 0;

    for (int value : nums)
    {
        sum += value;
    }

    return sum / nums.size();
}
```

例如：

```text
nums = [80, 90, 100]
sum  = 270
平均值 = 270 / 3 = 90.0
```

本课特别容易犯的错误是把 `nums.size()` 写成 `nums.length` 或 `nums.length()`。前者是 array 语法；后者也不是 `ArrayList` 方法。

注意：使用 `double sum` 可以避免在除法时丢失小数部分。求平均值的示例要求列表非空。

# 5. Any / All / Count：三个相似但不一样的问题

这一组算法都是遍历并检查条件，但它们的**返回方式**不同。

假设一个考试成绩列表使用 `Integer` 存储，及格线为 60。

## 5.1 Any：至少有一人及格吗？

```java
public static boolean hasPassingScore(ArrayList<Integer> scores)
{
    for (int score : scores)
    {
        if (score >= 60)
        {
            return true;
        }
    }

    return false;
}
```

**找到一个符合条件的值，就能够确定答案是 `true`。** 没找到则要遍历完整个列表，才能返回 `false`。

## 5.2 All：所有人都及格吗？

```java
public static boolean allPassing(ArrayList<Integer> scores)
{
    for (int score : scores)
    {
        if (score < 60)
        {
            return false;
        }
    }

    return true;
}
```

这里要寻找的是**反例**：只要有一人不及格，“所有人都及格”就不成立。

## 5.3 Count：有多少人及格？

```java
public static int countPassing(ArrayList<Integer> scores)
{
    int count = 0;

    for (int score : scores)
    {
        if (score >= 60)
        {
            count++;
        }
    }

    return count;
}
```

此时不能找到一个就 `return`，因为题目需要知道**总共有几个**。

| 题目中的关键词 | 算法 | 什么时候可以结束？ |
|---|---|---|
| 至少一个（at least one） | Any | 发现一个符合条件的元素，立刻 `true` |
| 全部（all） | All | 发现一个不符合条件的元素，立刻 `false` |
| 多少个（how many） | Count | 必须遍历完，返回计数器 |

> **考试技巧：** 如果题目给出 `boolean isQualified(...)` 之类的 helper method，直接在 `if` 条件中调用它即可。先看清题目是在问 Any、All，还是 Count。

# 6. Consecutive Pairs / Duplicates：比较多个元素

这一部分要求学生能同时处理两个不同 index。

## 6.1 相邻元素对（Consecutive Pairs）

例如，要判断是否存在相邻的两个数字，和等于 10：

```java
public static boolean hasPairSum10(ArrayList<Integer> nums)
{
    for (int i = 0; i < nums.size() - 1; i++)
    {
        if (nums.get(i) + nums.get(i + 1) == 10)
        {
            return true;
        }
    }

    return false;
}
```

**为什么是 `i < nums.size() - 1`？**

因为循环体访问了 `i + 1`。如果 `i` 到达最后一个 index，就会访问列表范围之外的位置。

这一类题使用 indexed `for` loop 通常更自然，因为要同时访问 `get(i)` 和 `get(i + 1)`。

## 6.2 任意位置有重复元素（Duplicates）

现在我们想检测：**列表中任意两个不同位置是否保存了相同的值？**

```java
public static boolean hasDuplicates(ArrayList<String> names)
{
    for (int i = 0; i < names.size(); i++)
    {
        for (int j = i + 1; j < names.size(); j++)
        {
            if (names.get(i).equals(names.get(j)))
            {
                return true;
            }
        }
    }

    return false;
}
```

这段方法假设列表中没有 `null` 元素。

假设：

```text
[Mia, Leo, Eva, Mia]
```

外层 `i = 0` 时，内层 `j` 依次为 1、2、3：

| `i` | `j` | 比较 | 结果 |
|---:|---:|---|---|
| 0 | 1 | Mia 与 Leo | 不相同 |
| 0 | 2 | Mia 与 Eva | 不相同 |
| 0 | 3 | Mia 与 Mia | 相同，返回 `true` |

两个循环各有职责：

- 外层选定一个元素；
- 内层从它的后一个位置开始，与后面的每个元素比较。

**为什么这里用 `.equals()` 而不是 `==`？**

`String`、`Integer` 都是对象。对于这类对象，题目通常要求判断它们的**内容是否相等**，使用 `.equals()` 更符合目的；`==` 比较的是两个引用是否指向同一个对象（如果没有涉及自动拆箱）。

不要因为两个 `Integer` 里的数字相同，就认为两个 `Integer` 引用一定相同。

> 相邻重复只需要比较 `get(i)` 和 `get(i + 1)`；任意位置重复通常要使用 **nested loops**。

# 7. Shift / Rotate：移动元素与元素数量的区别

4.5 已经学习过数组旋转。`ArrayList` 可以用 `get` / `set` 实现同样的算法，也能利用 `add` / `remove` 简化部分移动操作。

## 7.1 用 `set` 向右旋转一次

原列表：

```text
[2, 5, 7, 9]
```

向右旋转一次后应变成：

```text
[9, 2, 5, 7]
```

```java
public static void rotateRight(ArrayList<Integer> nums)
{
    if (nums.size() < 2)
    {
        return;
    }

    int last = nums.get(nums.size() - 1);

    for (int i = nums.size() - 1; i > 0; i--)
    {
        nums.set(i, nums.get(i - 1));
    }

    nums.set(0, last);
}
```

执行顺序：

| 步骤 | 当前列表 |
|---|---|
| 保存 `last = 9` | `[2, 5, 7, 9]` |
| `set(3, get(2))` | `[2, 5, 7, 7]` |
| `set(2, get(1))` | `[2, 5, 5, 7]` |
| `set(1, get(0))` | `[2, 2, 5, 7]` |
| `set(0, last)` | `[9, 2, 5, 7]` |

**为什么要从后往前移动？** 因为如果从前往后覆盖，前面的元素可能在被复制之前就丢失了。

注意：这里使用 `set`，列表的 **size 始终是 4**。

## 7.2 ArrayList 也可以用 `remove` + `add` 向左旋转

```java
public static void rotateLeft(ArrayList<Integer> nums)
{
    if (nums.size() < 2)
    {
        return;
    }

    int first = nums.remove(0);
    nums.add(first);
}
```

过程：

```text
开始：   [2, 5, 7, 9]
remove： [5, 7, 9]      first = 2
add：    [5, 7, 9, 2]
```

`remove(0)` 自动让后面的元素左移；`add(first)` 把被移出的第一个元素放回末尾。

这里是**旋转（rotate）**，最终元素数量不变。如果只是 `remove(0)` 而没有把元素加回去，那么列表就缩短了，不是完整的旋转。

## 7.3 Shift 和 Rotate 不一样

| 原列表 | 操作 | 结果 |
|---|---|---|
| `[2,5,7,9]` | 向左移动一格，末尾填 0（用 `set`） | `[5,7,9,0]` |
| `[2,5,7,9]` | 向左旋转一格 | `[5,7,9,2]` |
| `[2,5,7,9]` | 删除首元素 | `[5,7,9]` |

**Shift、Rotate、Remove 不能混为一谈**：前两种例子保留了四个位置，而删除会使列表变短。

# 8. Reverse：反转顺序，但别误改原列表

假设我们需要把：

```text
[cat, dog, mouse]
```

反转为：

```text
[mouse, dog, cat]
```

Runestone 使用了一个非常适合 `ArrayList` 的思路：**创建一个新列表，每次把当前元素插入到新列表的最前面。**

```java
public static ArrayList<String> reversedCopy(ArrayList<String> words)
{
    ArrayList<String> result = new ArrayList<String>();

    for (String word : words)
    {
        result.add(0, word);
    }

    return result;
}
```

追踪 `result`：

| 读到的 `word` | 执行后 `result` |
|---|---|
| `"cat"` | `[cat]` |
| `"dog"` | `[dog, cat]` |
| `"mouse"` | `[mouse, dog, cat]` |

**这段方法返回一个新列表，原来的 `words` 列表没有被修改。**

注意它使用的是 `add(0, word)`（插入），不是 `set(0, word)`（替换）。新列表一开始是空的，根本不存在 index 0 的元素可供 `set` 替换。

如果题目要求**直接修改原列表**，则可以像数组的 4.5 一样用两端交换的方式，使用 `get` 与 `set`：

```java
public static void reverseInPlace(ArrayList<Integer> nums)
{
    int left = 0;
    int right = nums.size() - 1;

    while (left < right)
    {
        int temp = nums.get(left);
        nums.set(left, nums.get(right));
        nums.set(right, temp);
        left++;
        right--;
    }
}
```

**同样是 Reverse，先看题目要求：返回一个新列表，还是修改已有列表。**

# 9. Multiple or Parallel Data Structures：同时遍历多个数据集合

这是 **College Board 4.10.A.2 单独列出的考点**，容易被学生忽视。

有些问题需要在同一个循环中，访问两个或更多数据结构中**相互对应的位置**。

## 9.1 两次考试成绩的平均分

假设两次考试分别保存在两个 `ArrayList<Integer>` 中：

```text
Index       0    1    2
Test 1    100   80   70
Test 2    100   70   90
```

每个 index 代表同一位学生在两次考试中的成绩。

```java
public static double averageOfTwoTests(
    ArrayList<Integer> test1, ArrayList<Integer> test2)
{
    double total = 0;

    for (int i = 0; i < test1.size(); i++)
    {
        total += test1.get(i) + test2.get(i);
    }

    return total / (test1.size() + test2.size());
}
```

这段代码假设两个列表**长度相同、非空**，并且对应 index 存放同一个学生的数据。

计算结果：

```text
Total = 100 + 100 + 80 + 70 + 70 + 90 = 510
Count = 3 + 3 = 6
Average = 510 / 6 = 85.0
```

为什么这里使用 indexed `for` loop，而不是增强型 `for` 循环？

因为循环中需要同时访问两个列表的**相同 index**：

```java
test1.get(i)
test2.get(i)
```

## 9.2 一个 Array 和一个 ArrayList 也可以同时遍历

例如，学生姓名保存在数组，成绩保存在 `ArrayList`：

```java
String[] names = {"Mia", "Leo", "Eva"};
ArrayList<Integer> grades = new ArrayList<Integer>();
grades.add(95);
grades.add(72);
grades.add(88);

for (int i = 0; i < names.length; i++)
{
    if (grades.get(i) >= 85)
    {
        System.out.println(names[i]);
    }
}
```

输出：

```text
Mia
Eva
```

这里仍然使用同一个 `i`，但访问方法不同：

- Array：`names[i]`
- ArrayList：`grades.get(i)`

**同时遍历的前提是明确对应关系，并保证 index 对所有被访问的数据结构都有效。** 如果有一个集合缺少某条记录，就不能直接假设另一个集合中的相同 index 仍然对应正确的学生。

# 10. 如何把题目要求转换成算法？

4.10 不要求学生把所有方法机械背下来。遇到新题时，先判断需要怎样的结果，再选择算法结构。

| 题目要你做什么？ | 优先想到的模式 | 关键代码 / 限制 |
|---|---|---|
| 找最小 / 最大值 | Min / Max | `get(0)` 初始化，循环比较 |
| 求总和 / 平均值 | Sum / Average | 累加，最后使用 `size()` |
| 至少一个符合条件？ | Any | 找到就 `return true` |
| 所有元素符合条件？ | All | 找到反例就 `return false` |
| 符合条件的有几个？ | Count | 循环中 `count++` |
| 比较所有相邻元素对 | Consecutive pairs | `get(i)`、`get(i+1)`，边界减 1 |
| 任意两个位置有重复？ | Duplicates | 双重循环、`.equals()` |
| 整体左移 / 右移 | Shift | 注意覆盖方向与末尾处理 |
| 首尾接续地移动 | Rotate | 保存一端，再移动或删除并插入 |
| 顺序反转 | Reverse | 头部插入新列表 / 原地交换 |
| 在指定位置插入 | Insert | `add(index, value)`，后面右移 |
| 删除某类元素 | Delete | `remove` 后重新检查 index |
| 同时分析两组信息 | Parallel traversal | 一个 index 同时访问多个集合 |

**最实用的读题顺序：**

1. 题目想得到的是 `int`、`double`、`boolean`，还是一个新列表？
2. 题目是否允许修改原来的 `ArrayList`？
3. 是否需要知道 index、访问相邻元素或同时访问多个集合？
4. 是否有 `add` / `remove`？如果有，列表 size 和 index 会不会变化？
5. 是否存在空列表、越界或对象比较的问题？

# 11. AP Exam Focus：官方要求完整核对

College Board 2025 版 CED 将这课归在 **4.10.A**，有两个 Essential Knowledge 要求。

## 4.10.A.1 — 十一类标准 ArrayList 算法

| 官方要求 | 在本篇的位置 |
|---|---|
| Minimum / Maximum | §4 |
| Sum / Average | §4 |
| At least one | §5 |
| All | §5 |
| Count | §5 |
| Consecutive pairs | §6 |
| Duplicates | §6 |
| Shift / Rotate left or right | §7 |
| Reverse | §8 |
| Insert | §2–3 |
| Delete | §2–3 |

## 4.10.A.2 — 同时遍历多个数据结构

某些算法需要同时遍历多个 `String`、array 或 `ArrayList` 对象。重点是使用对应的 index，并保证数据之间的对应关系正确。见 §9。

## Suggested Skills

- **2.B**：编写使用数据集合的程序代码。
- **3.B**：追踪代码，确定结果或输出。
- **3.D**：解释代码无法编译或无法正确工作的原因，并修复问题。
- **4.A**：描述代码或程序的行为。

因此，这一课既要会写算法，也要会回答：“它最后输出什么？”“为什么出错？”“怎样在尽量少改动的情况下修复？”

# 12. Common Mistakes：常见错误

| 容易犯的错误 | 正确做法 |
|---|---|
| 把 `nums.size()` 写成 `nums.length` | `ArrayList` 使用 `size()` |
| 把 `nums.get(i)` 写成 `nums[i]` | `ArrayList` 使用 `get(i)` |
| 用 `set` 插入新元素 | `set` 只能替换现有位置；插入用 `add` |
| 用 `max = 0` 开始找最大值 | 非空列表应从 `get(0)` 初始化 |
| Any 找到一个不匹配就返回 `false` | 必须检查完整个列表才能确认不存在匹配项 |
| All 找到一个匹配就返回 `true` | 必须检查所有元素；发现反例才提前返回 `false` |
| 用 `==` 判断两个 String 的文本是否相同 | 用 `.equals()` 比较内容 |
| 检查 `get(i + 1)` 时让 `i` 到达最后一个 index | 循环条件应为 `i < list.size() - 1` |
| 删除后立刻 `i++` | 新移来的元素可能被跳过，需要重新检查当前 index |
| 对同一个 `ArrayList` 用 enhanced `for` 删除元素 | 使用可以控制 index 的循环 |
| 把向左旋转误写成只删除第一个元素 | 旋转要把移出的元素放回另一端 |
| 反转一个新列表时用 `set(0, item)` | 新列表为空，应使用 `add(0, item)` |
| 同时遍历两个集合时默认长度总相同 | 必须有对应关系与有效的索引范围 |

# 13. Mini Practice：AP 风格练习

## Practice 1：完整追踪 Add / Set / Remove

```java
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(3);
list.add(6);
list.add(9);
list.add(1, 4);
list.set(2, 8);
list.remove(0);
System.out.println(list);
```

输出是什么？

A. `[4, 8, 9]`  
B. `[3, 4, 8, 9]`  
C. `[6, 8, 9]`

**答案：A**

追踪：`[3,6,9]` → `[3,4,6,9]` → `[3,4,8,9]` → `[4,8,9]`。

## Practice 2：找最大值

下面的代码有什么问题？

```java
int max = 0;
for (int value : nums)
{
    if (value > max)
    {
        max = value;
    }
}
```

A. 使用了 enhanced `for`，所以无法比较元素。  
B. 如果所有元素都是负数，结果可能错误。  
C. `Integer` 不能和 `int` 比较。

**答案：B**。在假设列表非空的前提下，使用 `int max = nums.get(0);` 更可靠。

## Practice 3：Any 与 All

```java
public static boolean check(ArrayList<Integer> values)
{
    for (int x : values)
    {
        if (x < 0)
        {
            return false;
        }
    }
    return true;
}
```

该方法判断什么？

A. 至少存在一个负数。  
B. 所有数字都不是负数。  
C. 负数有多少个。

**答案：B**。只要找到一个负数，就说明“所有值都非负”不成立，返回 `false`。

## Practice 4：Duplicates

```java
ArrayList<String> names = new ArrayList<String>();
names.add(new String("Mia"));
names.add(new String("Leo"));
names.add(new String("Mia"));
```

为了判断 index 0 和 index 2 的字符串**内容**是否相同，应该使用哪个表达式？

A. `names.get(0) == names.get(2)`  
B. `names.get(0).equals(names.get(2))`  
C. `names[0].equals(names[2])`

**答案：B**。两个 `new String(...)` 创建的是不同对象，但内容可以相同；使用 `.equals()` 比较字符串内容。

## Practice 5：删除循环中的索引

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(1);
nums.add(2);
nums.add(2);
nums.add(3);

for (int i = 0; i < nums.size(); i++)
{
    if (nums.get(i) == 2)
    {
        nums.remove(i);
    }
}
```

最终 `nums` 是什么？

A. `[1, 3]`  
B. `[1, 2, 3]`  
C. `[1, 2, 2, 3]`

**答案：B**。

删除第一个 2 之后，后一个 2 左移到相同 index；循环随后执行 `i++`，跳过了它。

## Practice 6：Rotate 与 Reverse

对列表 `[2, 5, 7, 9]` 执行一次**向右旋转**，结果是？

A. `[9, 2, 5, 7]`  
B. `[9, 7, 5, 2]`  
C. `[5, 7, 9, 2]`

**答案：A**。B 是 Reverse；C 是向左旋转一次。

## Practice 7：Parallel Data Structures

假设两个列表的内容分别为：

```text
test1: [80, 90]
test2: [70, 100]
```

执行：

```java
double total = 0;
for (int i = 0; i < test1.size(); i++)
{
    total += test1.get(i) + test2.get(i);
}
System.out.println(total / (test1.size() + test2.size()));
```

输出是什么？

A. `85.0`  
B. `170.0`  
C. `340.0`

**答案：A**。总分为 340，共有 4 个成绩，平均值是 85.0。

## Practice 8：FRQ-style — 编写完整方法

**方法要求：**

编写 `removeBelow`，删除 `scores` 中所有**低于** `minimum` 的成绩，保留其余成绩的原有顺序。

```java
public static void removeBelow(
    ArrayList<Integer> scores, int minimum)
{
    // Write your code here.
}
```

示例：

```text
输入：scores = [45, 90, 55, 55, 82], minimum = 60
执行后：scores = [90, 82]
```

**参考答案：**

```java
public static void removeBelow(
    ArrayList<Integer> scores, int minimum)
{
    int i = 0;

    while (i < scores.size())
    {
        if (scores.get(i) < minimum)
        {
            scores.remove(i);
        }
        else
        {
            i++;
        }
    }
}
```

解释：

- 低于 `minimum` 的成绩被删除。
- 删除后当前 index 可能已经移动进来下一个元素，因此不增加 `i`，继续检查。
- 只有当前元素保留时，才通过 `i++` 前进。
- 该方法直接修改传入的列表，不需要 `return` 一个新列表。

**自测：** 请另外检查 `[40, 50, 90]`、`[90, 80]` 和空列表 `[]` 是否也能得到正确结果。

# Unit 4.10 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| `ArrayList` algorithm | ArrayList 算法；使用列表解决问题的一系列步骤 |
| traversal | 遍历；按顺序访问集合中的元素 |
| accumulator | 累加器；持续保存总和等结果的变量 |
| minimum / maximum | 最小值 / 最大值 |
| property | 特征或条件；用于判断元素是否符合要求 |
| consecutive pair | 相邻元素对；索引连续的两个元素 |
| duplicate | 重复元素；在不同位置出现的相同值 |
| nested loops | 嵌套循环；一个循环包含另一个循环 |
| insert | 插入；在某个 index 添加元素并右移后续元素 |
| delete | 删除；移除元素并左移后续元素 |
| shift | 移动；让元素向左或向右移动位置 |
| rotate | 旋转；把移出一端的元素放到另一端 |
| reverse | 反转；颠倒元素顺序 |
| in-place modification | 原地修改；直接改变已有列表 |
| parallel data structures | 平行数据结构；多个集合中相同 index 对应相关数据 |
| `equals()` | 比较对象内容是否相等的方法（取决于类的实现） |

---

**下一课预告：** 4.10 完成了 `ArrayList` 算法。4.11 将开始学习二维数组（2D Arrays），了解如何使用行与列管理表格形式的数据。

**教材与考纲：**

- [Runestone CSAwesome2 — 4.10 Implementing ArrayList Algorithms](https://runestone.academy/ns/books/published/csawesome2/topic-4-10-arraylist-algorithms.html?mode=browsing)
- [College Board — AP Computer Science A Course and Exam Description（2025 Fall）, Topic 4.10](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
