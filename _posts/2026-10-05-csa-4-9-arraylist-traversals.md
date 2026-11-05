---
title: "AP CSA 4.9：ArrayList 遍历"
layout: post
categories: media
render_with_liquid: false
---

在 4.8 中，我们学会了用 `ArrayList` 保存一组对象，并使用 `add()`、`get()`、`set()`、`remove()` 等方法操作单个元素。

现在，如果要逐个检查整个名单、计算所有学生的得分，或者删除名单中所有符合条件的元素，就需要使用**遍历（traversal）**。

这一课表面上和 4.4 的 Array Traversals 很相似，但有一个重要的新变化：**`ArrayList` 可以在循环执行过程中改变大小。** 这也意味着，删除一个元素后，剩下的元素会移动，原来的 index 可能不再对应同一个元素。

> **核心理解：遍历 `ArrayList` 时，不仅要知道当前访问哪个 index，还要注意列表的 `size()` 是否发生变化。删除之后，下一步应该检查哪个位置？这是本课最关键的问题。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.9 ArrayList Traversals

## 遍历的三种方式
* Indexed `for`：`i < list.size()` + `list.get(i)`
* `while`：手动控制 index 的更新
* Enhanced `for`：`for (Type item : list)`
* Recursion 也可以遍历，但本课不展开

## Index 与边界
* 现有元素的 index：`0` 到 `size() - 1`
* `get(size())`：越界
* `i <= list.size()`：常见 off-by-one error
* `IndexOutOfBoundsException`

## 删除时为什么会漏检
* `remove(i)` 删除当前元素
* 后面的元素全部左移一位
* 新元素移到当前 index
* 如果马上 `i++`，会跳过它

## 安全删除的两种方式
* 正向 `while`：删除后不增加 index
* 没删除才 `i++`
* 反向 indexed `for`：从 `size() - 1` 向前检查
* 随时使用当前的 `size()`

## Enhanced for 的限制
* 适合读取、计算、访问对象
* 遍历时不要 `add` 或 `remove`
* 可能出现 `ConcurrentModificationException`
* 可通过引用调用对象方法修改其属性
* 改写循环变量不能替换列表元素

## AP 考点
* 4.9.A.1：遍历概念
* 4.9.A.2：删除时避免漏检
* 4.9.A.3：索引越界
* 4.9.A.4：enhanced for 的结构性修改风险
* 追踪代码、解释错误、写出修正代码

</script>
</div>
</div>

# 1. 先思考一个问题：为什么删掉一个名字后，还会剩下同名的人？

假设报名名单是：

```text
Index:     0       1       2       3
Names:   [Mia,    Leo,    Leo,    Eva]
```

我们想用循环删除所有叫 `"Leo"` 的人：

```java
for (int i = 0; i < names.size(); i++)
{
    if (names.get(i).equals("Leo"))
    {
        names.remove(i);
    }
}
```

看上去很合理：逐个检查，遇到 Leo 就删除。**但最终名单却是：**

```text
[Mia, Leo, Eva]
```

为什么还剩一个 Leo？

关键在于：当第一个 Leo 被删除时，**第二个 Leo 会立即左移到同一个 index**。然而 `for` loop 随后执行了 `i++`，跳到了下一个位置，没有检查刚刚移过来的 Leo。

学会解释这个过程，就理解了 4.9 最重要的知识点。

# 2. Array 和 ArrayList：遍历写法有什么不同？

我们已经在 4.4 学过数组遍历。`ArrayList` 也能使用 indexed `for`、`while` 和 enhanced `for` loop。

区别主要在于**获取元素数量**与**访问元素**的写法。

| 需要做什么？ | Array | ArrayList |
|---|---|---|
| 获取元素数量 | `arr.length` | `list.size()` |
| 读取索引为 `i` 的元素 | `arr[i]` | `list.get(i)` |
| 替换索引为 `i` 的元素 | `arr[i] = value;` | `list.set(i, value);` |
| 完整遍历条件 | `i < arr.length` | `i < list.size()` |
| 删除元素并改变数量 | 不支持直接删除 | `list.remove(i)` |

注意：`ArrayList` 不能写成 `list[i]`，也没有 `list.length`。它通过方法访问元素和获取数量。

以下各节的示例使用 `ArrayList`。在完整 Java 文件中，需要先写：

```java
import java.util.ArrayList;
```

# 3. Indexed `for` Loop：使用 index 遍历

这是最直接的遍历方式：

```java
ArrayList<Integer> scores = new ArrayList<Integer>();
scores.add(85);
scores.add(90);
scores.add(95);

for (int i = 0; i < scores.size(); i++)
{
    System.out.println(scores.get(i));
}
```

输出：

```text
85
90
95
```

把循环拆成三个部分：

| 部分 | 写法 | 含义 |
|---|---|---|
| 初始化 | `int i = 0` | 从第一个元素开始 |
| 条件 | `i < scores.size()` | 只访问现有的元素 |
| 更新 | `i++` | 每轮转到下一个 index |

每轮变化：

| 循环轮次 | `i` | `scores.get(i)` |
|---|---:|---:|
| 1 | 0 | 85 |
| 2 | 1 | 90 |
| 3 | 2 | 95 |
| 结束检查 | 3 | `3 < 3` 为 `false`，不再访问 |

这种方式最适合**需要使用 index 的任务**，例如替换某个位置的元素，或者控制遍历范围。

## 3.1 修改某个位置的值：`set()`

例如，让列表中每个分数增加 5 分：

```java
for (int i = 0; i < scores.size(); i++)
{
    scores.set(i, scores.get(i) + 5);
}
```

结果：

```text
[90, 95, 100]
```

这段代码使用了两种操作：

1. `scores.get(i)`：读取当前元素。
2. `scores.set(i, ...)`：用计算出的新值替换当前元素。

**`set()` 会替换元素，但不会改变 `ArrayList` 的大小。** 因此，这个例子不会发生删除元素造成的 index 左移问题。

# 4. 越界：为什么使用 `< size()`，而不是 `<= size()`？

一个有 3 个元素的 `ArrayList`，有效 index 是：

```text
Index:       0      1      2
Elements:  [85,    90,    95]
size() = 3
```

最后一个 index 是 `size() - 1`，不是 `size()`。

下面这段代码有问题：

```java
for (int i = 0; i <= scores.size(); i++)
{
    System.out.println(scores.get(i));
}
```

当 `i == 3` 时，条件 `3 <= 3` 仍然成立，程序会尝试调用：

```java
scores.get(3);
```

但 index 3 并不存在，因此产生 **`IndexOutOfBoundsException`**。

正确写法：

```java
for (int i = 0; i < scores.size(); i++)
{
    System.out.println(scores.get(i));
}
```

## 4.1 两个名称非常相似的 Exception

| 数据结构 | 访问无效 index 时的异常 |
|---|---|
| Array | `ArrayIndexOutOfBoundsException` |
| ArrayList | `IndexOutOfBoundsException` |

两者都表示**索引超出有效范围**，但考试可能要求判断具体异常类型。

还要联系 4.8 学过的方法边界：

- `list.get(list.size())`：错误，没有这个元素。
- `list.set(list.size(), value)`：错误，没有这个位置可供替换。
- `list.remove(list.size())`：错误，没有这个位置可供删除。
- `list.add(list.size(), value)`：**正确**，相当于在末尾插入新元素。

# 5. Enhanced `for` Loop：只需要依次访问元素时

和数组一样，`ArrayList` 也可以使用 enhanced `for` loop：

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Mia");
names.add("Leo");
names.add("Eva");

for (String name : names)
{
    System.out.println(name);
}
```

输出：

```text
Mia
Leo
Eva
```

它的含义是：**依次取出列表中的每个元素，将其保存到循环变量 `name` 中，然后执行循环体。**

不需要自己管理 `i`，也不需要写 `get(i)`。每一轮，循环变量得到的是当前元素的**副本**。对于对象类型（如 `String` 或 `Student`），这个副本是对象引用的副本，仍然指向原来的对象。

## 5.1 用 enhanced `for` 计算结果

例如，计算整数列表中的所有分数之和：

```java
int sum = 0;

for (Integer score : scores)
{
    sum += score;
}

System.out.println(sum);
```

假设 `scores` 的内容是 `[85, 90, 95]`，输出是 `270`。

这里用到了 4.7 的 **unboxing（自动拆箱）**：`score` 是 `Integer` 引用，但在加法运算中可以自动转换为 `int` 值。

## 5.2 Enhanced `for` 不适合什么情况？

如果需要知道 index，或者在遍历时通过 `add()`、`remove()` 改变列表大小，就不应该使用 enhanced `for`。

| 任务 | 建议使用 |
|---|---|
| 打印列表中所有元素 | Enhanced `for` |
| 计算所有数值的总和 | Enhanced `for` |
| 根据 index 调用 `set(i, value)` | Indexed `for` |
| 删除所有符合条件的元素 | `while` 或反向 indexed `for` |
| 向某个 index 插入元素 | Indexed `for` / `while`（按具体任务设计） |

尤其注意：**对 `ArrayList` 来说，enhanced `for` 并不是一个适合边遍历、边增加或删除元素的工具。** 原因在第 8 节详细解释。

# 6. `while` Loop：删除元素时更容易控制 index

现在回到第 1 节的问题：如何删除名单中**所有**的 Leo？

先看正确写法：

```java
int i = 0;

while (i < names.size())
{
    if (names.get(i).equals("Leo"))
    {
        names.remove(i);
    }
    else
    {
        i++;
    }
}
```

**最重要的是：只有没有删除元素时，才执行 `i++`。**

为什么？我们来逐步追踪。

## 6.1 删除后，后面的元素会左移

初始名单：

```text
Index:      0       1       2       3
          [Mia,    Leo,    Leo,    Eva]
```

当 `i = 1`，删除第一个 Leo：

```java
names.remove(1);
```

剩下的内容立刻变成：

```text
Index:      0       1       2
          [Mia,    Leo,    Eva]
                   ↑
             第二个 Leo 左移到了 index 1
```

所以，**下一次必须继续检查 index 1，而不是马上去检查 index 2**。

## 6.2 正确删除所有 Leo 的追踪表

| 循环轮次 | 进入循环时 `i` | 当前 `names.get(i)` | 操作 | 操作后的名单 | 下次 `i` |
|---|---:|---|---|---|---:|
| 1 | 0 | Mia | 不删除，`i++` | `[Mia, Leo, Leo, Eva]` | 1 |
| 2 | 1 | Leo | `remove(1)`，不增加 `i` | `[Mia, Leo, Eva]` | 1 |
| 3 | 1 | Leo | `remove(1)`，不增加 `i` | `[Mia, Eva]` | 1 |
| 4 | 1 | Eva | 不删除，`i++` | `[Mia, Eva]` | 2 |
| 结束 | 2 | — | `2 < size()` 为 `false` | `[Mia, Eva]` | — |

最终列表：

```text
[Mia, Eva]
```

这次没有漏掉任何 Leo。

## 6.3 为什么这种写法能够处理连续重复的元素？

在循环的每一轮：

- **如果删除了元素**：左移后的新元素占据当前 index，因此保持 `i` 不变，下一轮检查它。
- **如果没有删除元素**：当前元素已经检查过了，因此使用 `i++`，继续检查下一个位置。

这是一条比死记代码更重要的规则：

> **删除后，位置没有空出来，而是被后面的元素补上了。应该先检查补上来的元素，再决定是否向前移动 index。**

## 6.4 包装成完整的 Method

假设要删除 `ArrayList<String>` 中所有与 `target` 相同的字符串，并返回是否至少删除过一个：

```java
public static boolean removeAllMatches(ArrayList<String> names, String target)
{
    boolean found = false;
    int i = 0;

    while (i < names.size())
    {
        if (names.get(i).equals(target))
        {
            names.remove(i);
            found = true;
        }
        else
        {
            i++;
        }
    }

    return found;
}
```

这里 `found` 的初始值是 `false`；只有真正删除了匹配项，才变成 `true`。

注意：`return found;` 必须放在循环外面，否则可能只检查一个元素就结束了。

# 7. 另一种安全方法：从后往前删除

当使用 indexed `for` loop 时，还有一种常见且可靠的做法：**从最后一个元素开始，向前遍历。**

```java
for (int i = names.size() - 1; i >= 0; i--)
{
    if (names.get(i).equals("Leo"))
    {
        names.remove(i);
    }
}
```

为什么反向遍历不会漏检？

因为 `remove(i)` 只会让**当前位置之后的元素**左移，而我们下一轮要检查的是 `i - 1`，也就是当前位置之前的元素。

这些尚未检查的位置不会因为这次删除而改变。

例如，初始内容：

```text
[Mia, Leo, Leo, Eva]
```

访问顺序：

| `i` | 当前元素 | 处理结果 |
|---:|---|---|
| 3 | Eva | 保留 |
| 2 | Leo | 删除，变成 `[Mia, Leo, Eva]` |
| 1 | Leo | 删除，变成 `[Mia, Eva]` |
| 0 | Mia | 保留 |

结果同样是：

```text
[Mia, Eva]
```

## 两种可靠的删除写法对比

| 方式 | 遍历方向 | 删除之后该怎么办？ |
|---|---|---|
| 正向 `while` | 从前往后 | **不要增加 index**；下轮检查左移过来的元素 |
| 反向 `for` | 从后往前 | 正常 `i--`；不影响前面尚未检查的元素 |

两种方式都值得掌握。AP 题目可能要求修复错误，也可能要求直接写出删除符合条件元素的方法。

# 8. `ConcurrentModificationException`：为什么 Enhanced `for` 不能边遍历边删除？

假设我们尝试这样写：

```java
for (String name : names)
{
    if (name.equals("Mia"))
    {
        names.remove(0);
    }
}
```

**这不是安全的写法。**

Enhanced `for` loop 在遍历过程中，会依赖一个内部的遍历机制，来记录列表的遍历状态。

如果我们在循环执行时直接使用 `add()` 或 `remove()` 改变列表的大小，可能破坏遍历机制所预期的状态，从而产生：

`ConcurrentModificationException`

College Board 的表述是 **can result in（可能导致）**，不是保证每一种情况都会立刻抛出异常。所以不能仅因为某一次运行没有报错，就认定这种写法安全。

## 8.1 不要混淆两类错误

| 情况 | 典型问题 |
|---|---|
| Indexed loop 调用 `get()` 使用了无效的 index | `IndexOutOfBoundsException` |
| Enhanced `for` 遍历时调用 `add()` / `remove()` 改变列表大小 | 可能出现 `ConcurrentModificationException` |
| Indexed loop 删除元素后仍然无条件 `i++` | 可能**漏检**左移过来的元素；不一定抛异常 |

这些错误的原因不同，不能用一种 Exception 名称概括所有情况。

## 8.2 Enhanced `for` 中，哪些操作仍然可以做？

可以读取数据、计算总和、打印元素、调用对象方法。

与 4.4 相同，如果元素是对象引用，**通过循环变量调用 mutator method，可以修改原对象的内部状态**。这不会因为对象属性改变，就自动成为“添加或删除列表元素”。

假设 `Student` 类提供 `setGPA(double)` 方法来修改成绩。请区分以下两种操作：

```java
for (Student student : students)
{
    student.setGPA(3.8); // 修改原 Student 对象的属性
}
```

和：

```java
for (Student student : students)
{
    student = new Student("Tom", 4.0); // 只改变局部循环变量的引用
}
```

第一个例子中，列表里的每个元素**仍然引用原来的 Student 对象**，只是对象的分数发生了变化。

第二个例子中，重新赋值的是局部变量 `student`，并没有把 `students` 列表中的元素替换成新对象。

**一句话：修改对象属性，和改变 `ArrayList` 的大小，是两种不同的操作。**

# 9. AP 代码追踪：连续的 0 为什么没有被全部删除？

这是 Runestone 4.9 专门设计的一类题目，直接对应 **4.9.A.2**。

初始列表：

```text
[0, 0, 4, 2, 5, 0, 3, 0]
```

代码：

```java
int k = 0;

while (k < nums.size())
{
    if (nums.get(k) == 0)
    {
        nums.remove(k);
    }

    k++;
}
```

这里的 `nums` 是 `ArrayList<Integer>`。读取元素时会自动拆箱，因此 `nums.get(k) == 0` 是合法的数值比较。

关键错误是：**不管有没有删除元素，每轮都会执行 `k++`。**

完整追踪：

| 进入时 `k` | 当前元素 | 操作后 `nums` | 之后的 `k` |
|---:|---|---|---:|
| 0 | `0`：删除 | `[0, 4, 2, 5, 0, 3, 0]` | 1 |
| 1 | `4`：保留 | `[0, 4, 2, 5, 0, 3, 0]` | 2 |
| 2 | `2`：保留 | `[0, 4, 2, 5, 0, 3, 0]` | 3 |
| 3 | `5`：保留 | `[0, 4, 2, 5, 0, 3, 0]` | 4 |
| 4 | `0`：删除 | `[0, 4, 2, 5, 3, 0]` | 5 |
| 5 | `0`：删除 | `[0, 4, 2, 5, 3]` | 6 |
| 6 | 不再进入 | `6 < 5` 为 `false` | — |

最终：

```text
[0, 4, 2, 5, 3]
```

最前面的第二个 `0` 被漏掉了。

## 怎样改正？

只需要调整 `k++` 的位置：

```java
int k = 0;

while (k < nums.size())
{
    if (nums.get(k) == 0)
    {
        nums.remove(k);
    }
    else
    {
        k++;
    }
}
```

修正后，会删除所有的 0，最终得到：

```text
[4, 2, 5, 3]
```

**AP 代码追踪建议：每次遇到 `remove(index)`，立即把列表重新写一遍，再判断下一轮访问哪个 index。不要继续看删除前的旧索引表。**

# 10. 对象列表：如何遍历 Student 并筛选成绩？

Runestone 4.9 还使用 `ArrayList<Student>` 练习访问对象及其属性。

假设 `Student` 类有：

```java
public String getName()
public double getGPA()
```

以及将学生信息转换成字符串的 `toString()` 方法。

我们建立一个学生名单：

```java
ArrayList<Student> students = new ArrayList<Student>();

students.add(new Student("Skyler", 3.4));
students.add(new Student("Ayanna", 4.0));
students.add(new Student("Lin", 3.6));
students.add(new Student("Sunil", 3.0));
```

假设题目要求：**打印所有 GPA 大于 3.5 的学生姓名**。

使用 indexed `for`：

```java
for (int i = 0; i < students.size(); i++)
{
    if (students.get(i).getGPA() > 3.5)
    {
        System.out.println(students.get(i).getName());
    }
}
```

输出：

```text
Ayanna
Lin
```

读懂这行代码：

```java
students.get(i).getGPA()
```

需要先执行 `students.get(i)`，取得当前位置的 Student 对象引用，再调用该对象的 `getGPA()` 方法。

这是 **method chaining（方法连续调用）** 的一个例子。

同样的任务也可以使用 enhanced `for`：

```java
for (Student student : students)
{
    if (student.getGPA() > 3.5)
    {
        System.out.println(student.getName());
    }
}
```

因为这里**只读取并打印信息，没有添加或删除列表元素**，enhanced `for` 很适合。

## 10.1 打印整个对象时会发生什么？

如果 `Student` 类已经正确重写 `toString()`：

```java
for (Student student : students)
{
    System.out.println(student);
}
```

`System.out.println(student)` 会调用该对象的 `toString()`，输出它提供的文字表示。

不要把这件事误解成“列表自动展开了 Student 的所有属性”。输出什么内容，取决于 `Student` 类的 `toString()` 实现。

# 11. 教材中的延伸活动：有序插入与读取文件

Runestone 4.9 除了遍历和删除，还提供了两类练习。它们有助于应用已有知识，但要分清本课的核心考点。

## 11.1 把新名字插入已经排好序的名单

如果 `nameList` 已经按字母顺序排列，可以先找出插入位置，再使用 4.8 的 `add(index, value)`：

```java
public void insertInOrder(String name)
{
    int index = 0;

    while (index < nameList.size() &&
           nameList.get(index).compareTo(name) < 0)
    {
        index++;
    }

    nameList.add(index, name);
}
```

它的关键思路是：**先遍历，找到应该插入的位置；然后插入，而不是替换。**

这里假设名单原本已经按字母顺序排列。`compareTo()` 的基础知识来自前面的 String 课程。

## 11.2 `java.nio.file`：知道有这种工具即可

教材还介绍了 `Files.readAllLines()` 和 `List`，用于从文件中读入一组字符串。

**教材明确说明这部分不属于 AP CSA 考试要求。** 因此本指南不展开 `List` interface 或 `java.nio.file` 的具体语法；文件读取的正式考点已在 4.6 学过。

教材的旧版 Word Pairs FRQ 挑战可以作为额外编程实践，但不需要为了它提前学习 4.10 的完整算法内容。

# 12. AP Exam Focus：官方四项核心考点

College Board 的正式学习目标是 **4.9.A：编写遍历 `ArrayList` 的代码，并确定遍历后的结果**。

| 官方考点 | 必须理解与掌握的内容 |
|---|---|
| **4.9.A.1** | 遍历是通过迭代或递归，访问 `ArrayList` 的全部元素，或按顺序访问其中一部分。**本课重点使用循环**。 |
| **4.9.A.2** | 遍历过程中删除元素需要特殊处理，否则左移后的元素可能被跳过。 |
| **4.9.A.3** | 访问超出有效索引范围的位置，会产生 `IndexOutOfBoundsException`。 |
| **4.9.A.4** | 在 enhanced `for` 遍历过程中改变列表大小，可能导致 `ConcurrentModificationException`；因此不要在其中 `add()` 或 `remove()`。 |

官方建议技能：

- **2.B**：编写处理数据集合的程序代码。
- **3.D**：解释代码为什么不能编译或不能按预期工作，并修正错误。
- **4.A**：描述代码片段或程序的行为。

这也说明：本课的练习应该重点训练**代码追踪、解释原因、修复错误和编写安全遍历代码**，而不是提前学习 4.10 的所有标准 `ArrayList` 算法。

# 13. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 把 `list.size()` 写成 `list.length` | `ArrayList` 使用 `size()` 方法，array 才使用 `length` 属性 |
| 把 `list.get(i)` 写成 `list[i]` | `ArrayList` 使用 `get(i)` 读取元素 |
| 遍历时使用 `i <= list.size()` | 最后会访问无效 index；应使用 `i < list.size()` |
| 认为 `get(list.size())` 可以得到最后一个元素 | 最后一个元素是 `get(list.size() - 1)` |
| 把 `ArrayList` 的越界异常写成 `ArrayIndexOutOfBoundsException` | 对 `ArrayList`，应使用 `IndexOutOfBoundsException` |
| 删除一个元素后仍然无条件 `i++` | 左移到当前 index 的元素可能被跳过 |
| 认为 `remove(i)` 后 index `i` 变成了空位置 | 后面的元素会左移补上这个位置 |
| 用 enhanced `for` 边遍历边删除或增加元素 | 可能触发 `ConcurrentModificationException`；使用 indexed loop 或 `while` |
| 认为 enhanced `for` 不能修改 Student 对象的属性 | 可以通过循环变量调用 mutator 方法；不能靠重新赋值循环变量替换列表元素 |
| 使用 `==` 判断两个 String 是否有相同内容 | 比较字符串内容应使用 `.equals()` |

# 14. Mini Practice：AP 风格练习

以下题目主要考查**循环追踪、索引边界、删除时的元素移动和修复错误**。

## Practice 1：读取与计算

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(6);
nums.add(8);

int sum = 0;
for (int i = 0; i < nums.size(); i++)
{
    sum += nums.get(i);
}

System.out.println(sum);
```

输出是什么？

A. `3`  
B. `18`  
C. `24`

**答案：B。** `4 + 6 + 8 = 18`；循环依次访问 index 0、1、2。

## Practice 2：索引越界

```java
ArrayList<String> words = new ArrayList<String>();
words.add("cat");
words.add("dog");

for (int i = 0; i <= words.size(); i++)
{
    System.out.println(words.get(i));
}
```

哪项描述正确？

A. 正常打印两个单词后结束。  
B. 会在尝试访问 index 2 时产生 `IndexOutOfBoundsException`。  
C. 会产生 `ArrayIndexOutOfBoundsException`。

**答案：B。** `words.size()` 是 2，有效索引只有 0 和 1。应把 `<=` 改为 `<`。

## Practice 3：连续元素被漏检

初始列表：

```text
["A", "B", "B", "C"]
```

执行：

```java
for (int i = 0; i < letters.size(); i++)
{
    if (letters.get(i).equals("B"))
    {
        letters.remove(i);
    }
}
```

最终列表是什么？

A. `[A, C]`  
B. `[A, B, C]`  
C. `[A, B, B, C]`

**答案：B。** 删除第一个 B 后，第二个 B 左移到 index 1，但循环立即执行 `i++`，跳过了它。

## Practice 4：修复删除代码

已知 `names` 是一个 `ArrayList<String>`。请补全代码，删除所有 `"Leo"`，而不漏检元素。

```java
int i = 0;

while (i < names.size())
{
    if (names.get(i).equals("Leo"))
    {
        names.remove(i);
    }
    else
    {
        // Write one statement here.
    }
}
```

**答案：**

```java
i++;
```

解释：只有未删除时才前进；删除后必须继续检查左移到当前位置的元素。

## Practice 5：反向删除

初始列表：

```text
[2, 3, 4, 5, 6]
```

执行：

```java
for (int i = nums.size() - 1; i >= 0; i--)
{
    if (nums.get(i) % 2 == 0)
    {
        nums.remove(i);
    }
}
```

最终列表是什么？

A. `[3, 5]`  
B. `[2, 4, 6]`  
C. `[3, 4, 5]`

**答案：A。** 反向遍历可以安全地删除偶数，保留 3 和 5。

## Practice 6：Enhanced for 的限制

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(1);
nums.add(2);
nums.add(3);

for (Integer n : nums)
{
    nums.add(10);
}
```

哪项描述最符合官方考纲？

A. 一定正常结束，最后有 6 个元素。  
B. 修改列表大小可能导致 `ConcurrentModificationException`，不应这样写。  
C. 会导致 `IndexOutOfBoundsException`，因为 `nums.add(10)` 的 index 是 10。

**答案：B。** `add(10)` 在这里是添加值为 10 的元素，不是把元素插入 index 10。问题在于遍历时改变列表大小。

## Practice 7：Student 对象列表

假设：

```java
ArrayList<Student> students = new ArrayList<Student>();
students.add(new Student("Mia", 3.4));
students.add(new Student("Leo", 3.8));
students.add(new Student("Eva", 4.0));
```

`Student` 类提供 `getName()` 和 `getGPA()`。

下面的代码：

```java
for (Student student : students)
{
    if (student.getGPA() > 3.5)
    {
        System.out.println(student.getName());
    }
}
```

输出是什么？

A. Mia、Leo、Eva  
B. Leo、Eva  
C. Mia

**答案：B。** 只有 Leo（3.8）和 Eva（4.0）的 GPA 大于 3.5。这段代码没有改变列表大小，可以使用 enhanced `for`。

## Practice 8：编写方法（FRQ-style）

**任务：** 编写方法 `removeShortWords`，删除 `ArrayList<String>` `words` 中所有长度小于 4 的字符串，并返回删除的元素数量。

方法签名：

```java
public static int removeShortWords(ArrayList<String> words)
```

示例：

```text
Before: [cat, dog, apple, sun, book]
After:  [apple, book]
Return: 3
```

**参考答案：**

```java
public static int removeShortWords(ArrayList<String> words)
{
    int removed = 0;
    int i = 0;

    while (i < words.size())
    {
        if (words.get(i).length() < 4)
        {
            words.remove(i);
            removed++;
        }
        else
        {
            i++;
        }
    }

    return removed;
}
```

**评分重点：**

1. 使用 `i < words.size()`，每轮按列表当前大小判断边界。
2. 正确判断 `words.get(i).length() < 4`。
3. 删除后不增加 `i`，避免漏检。
4. 正确累计并返回删除数量。

# Unit 4.9 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| ArrayList traversal | ArrayList 遍历；按顺序访问列表元素 |
| indexed `for` loop | 索引式 for 循环；使用 index 和 `get(i)` 访问列表 |
| enhanced `for` loop | 增强型 for 循环；依次获得元素，不需要显式 index |
| iteration | 迭代；循环的一次执行过程 |
| index | 索引；元素的当前位置编号 |
| `size()` | 返回列表当前的元素数量 |
| `get(index)` | 读取指定索引的元素 |
| `set(index, value)` | 替换指定位置的元素，不改变列表大小 |
| `remove(index)` | 删除指定位置的元素，后面的元素左移 |
| `IndexOutOfBoundsException` | 索引越界异常；访问了列表不存在的位置 |
| `ConcurrentModificationException` | 并发修改异常；例如 enhanced for 遍历中改变列表大小可能触发 |
| structural modification | 结构性修改；例如添加、删除元素，改变列表大小 |
| method chaining | 方法连续调用；例如 `students.get(i).getGPA()` |

---

**下一课预告：** 4.9 重点学习如何安全遍历 `ArrayList`，特别是删除元素时如何避免漏检。4.10 将继续学习怎样在 `ArrayList` 上实现常见算法，例如统计、查找、比较和重排元素。

**参考教材与官方考纲：**

- [Runestone CSAwesome2 — 4.9 ArrayList Traversals](https://runestone.academy/ns/books/published/csawesome2/topic-4-9-arraylist-traversal.html?mode=browsing)
- [College Board — AP Computer Science A CED（Effective Fall 2025），Topic 4.9，第 112 页](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf#page=119)
