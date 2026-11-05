---
title: "AP CSA 4.8：ArrayList 的创建与方法"
layout: post
categories: media
render_with_liquid: false
---

在 4.3–4.5 中，我们用 **array（数组）** 保存并处理一组数据。但数组有一个限制：**创建之后，长度就固定了。**

假设你要为班级管理一份活动报名名单。今天有 3 人报名，明天可能增加到 8 人，也可能有人退出。我们希望可以随时添加、插入或删除名字，而不用自己创建新数组和搬移元素。

这就是使用 `ArrayList` 的一个典型场景。

> **核心理解：array 的长度固定；`ArrayList` 的元素数量可以改变。`ArrayList` 用方法（methods）完成读取、替换、插入和删除。**

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.8 ArrayList and its Methods

## Array 与 ArrayList
* array：创建后长度固定
* ArrayList：可通过添加/删除改变 size
* ArrayList 保存 object references
* 两者的 index 都从 0 开始

## 声明与创建
* `import java.util.ArrayList;`
* `ArrayList<String> names`
* `new ArrayList<String>()` 创建空列表
* `<E>`：指定元素的对象类型
* 数字用 `Integer` / `Double`（不是 `int` / `double`）

## 必须掌握的六个方法
* `size()`：元素数量
* `add(obj)`：追加到末尾
* `add(index, obj)`：插入并右移
* `get(index)`：读取
* `set(index, obj)`：替换；返回旧元素
* `remove(index)`：删除并左移；返回旧元素

## 索引与元素移动
* 现有元素：`0` 到 `size() - 1`
* `get` / `set` / `remove`：必须使用现有 index
* `add(index, obj)`：允许 `index == size()`
* 插入 ≠ 替换；删除后 index 会改变

## 与旧知识连接
* `array.length` vs `list.size()`
* `array[i]` vs `list.get(i)`
* `array[i] = x` vs `list.set(i, x)`
* Autoboxing / Unboxing（4.7）
* ArrayList 中的 Student 对象引用

## AP 考试任务
* 创建 ArrayList 并调用方法
* 判断最终内容与 size
* 追踪插入/删除后的 index
* 判断返回值和越界问题
* 4.8.A.1–A.6

</script>
</div>
</div>

# 1. 从 Array 走向 ArrayList

先看熟悉的 array：

```java
String[] names = new String[3];
```

这个数组能保存三个 `String` 引用。我们可以修改某个位置的内容，但**不能直接把它的长度变成 4**。

`ArrayList` 不一样：

```java
ArrayList<String> names = new ArrayList<String>();

names.add("Mia");
names.add("Leo");
names.add("Eva");
names.add("Noah");
```

创建时，列表是空的；调用四次 `add` 后，列表就有四个元素：

```text
[Mia, Leo, Eva, Noah]
```

它不需要提前规定能装多少人。

| 比较 | Array | ArrayList |
|---|---|---|
| 长度/数量 | 创建后长度固定 | 添加、删除元素时数量可以变化 |
| 元素类型 | 可保存基本类型值或对象引用 | 保存对象引用 |
| 创建示例 | `int[] nums = new int[3];` | `ArrayList<Integer> nums = new ArrayList<Integer>();` |
| 获取数量 | `nums.length` | `nums.size()` |
| 读取元素 | `nums[0]` | `nums.get(0)` |
| 替换元素 | `nums[0] = 10;` | `nums.set(0, 10);` |
| 插入/删除并改变数量 | 没有对应的内置操作 | `add(index, obj)` / `remove(index)` |

这里最值得注意的并不只是写法不同：**`ArrayList` 可以在运行过程中改变元素数量，数组却不能。**

# 2. 声明、创建与泛型（Generic Type）

## 2.1 先 Import，再创建

`ArrayList` 属于 `java.util` package，因此完整程序通常先写：

```java
import java.util.ArrayList;

public class Demo
{
    public static void main(String[] args)
    {
        ArrayList<String> names = new ArrayList<String>();
        System.out.println(names.size());
    }
}
```

输出：

```text
0
```

为什么是 0？因为 `new ArrayList<String>()` **创建的是一个空列表**，不会自动创建几个 `String` 元素。

也可以使用 `import java.util.*;`。在 AP 考试中，题目会提供必要的 import；平时自己编写完整程序时仍要懂得它的作用。

## 2.2 读懂 `ArrayList<String>`

把这行代码分成三个部分：

```java
ArrayList<String> names = new ArrayList<String>();
```

| 部分 | 含义 |
|---|---|
| `ArrayList<String>` | 声明一个列表变量；其中的元素应该是 `String` 引用 |
| `names` | 变量名，保存指向列表对象的引用 |
| `new ArrayList<String>()` | 调用 constructor，创建**空**列表对象 |

`<String>` 指定的是**元素的类型**，不是列表的名字。

在教材和 Java Quick Reference 中，这种写法一般写成：

```java
ArrayList<E>
```

`E` 代表元素类型（element type），可以替换为 `String`、`Integer`、`Student` 等引用类型。

例如：

```java
ArrayList<String> names = new ArrayList<String>();
ArrayList<Integer> scores = new ArrayList<Integer>();
ArrayList<Student> students = new ArrayList<Student>();
```

指定 `<E>` 的好处：**编译器能够帮助检查元素类型是否正确。**

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Mia");   // 正确：String
names.add(85);      // 编译错误：不能把 Integer 加进 String 列表
```

虽然 Java 允许不写类型参数的 `ArrayList`（raw type），但本课应养成明确写出 `<E>` 的习惯。它更容易发现类型错误。

## 2.3 ArrayList 为什么不能写 `<int>`？

因为 `ArrayList` 保存的是**对象引用**，不能直接把 primitive type 当作泛型类型参数。

```java
ArrayList<int> numbers = new ArrayList<int>(); // 错误
```

正确写法：

```java
ArrayList<Integer> numbers = new ArrayList<Integer>();
ArrayList<Double> prices = new ArrayList<Double>();
```

这正好连接了 4.7 学过的 wrapper classes：

```java
numbers.add(85);           // 85 自动装箱为 Integer
int score = numbers.get(0); // Integer 自动拆箱为 int
```

**用 `Integer` 或 `Double` 指定类型；添加与读取数值时，Java 通常会自动处理装箱和拆箱。**

## 2.4 声明不等于创建

和数组、其他对象一样：

```java
ArrayList<String> names = null;
```

这并没有创建 `ArrayList` 对象。如果此时执行：

```java
names.size();
```

就会出现 `NullPointerException`，因为 `names` 没有引用一个列表对象。

正确创建方式：

```java
ArrayList<String> names = new ArrayList<String>();
```

# 3. 六个必须掌握的 ArrayList 方法

下面列出的**六个方法签名**属于 AP CSA Java Quick Reference 的范围。考试会提供 Quick Reference，但学生仍然需要理解方法的行为以及返回值。

这里的 `E` 是列表元素的类型，例如 `String` 或 `Integer`。

| 方法 | 作用 | 对 size 的影响 | 返回值 |
|---|---|---|---|
| `int size()` | 获取元素数量 | 不变 | `int` |
| `boolean add(E obj)` | 在末尾追加元素 | **+1** | `true` |
| `void add(int index, E obj)` | 在指定 index **插入**元素，后面的元素右移 | **+1** | 无（`void`） |
| `E get(int index)` | 读取指定位置的元素 | 不变 | 该元素 |
| `E set(int index, E obj)` | 用新元素**替换**旧元素 | 不变 | **原来**的元素 |
| `E remove(int index)` | 删除指定位置的元素，后面的元素左移 | **−1** | **被删除**的元素 |

请先建立一个最重要的区别：

> **`add` 让列表变长；`remove` 让列表变短；`set` 只替换原来的元素，数量不变。**

接下来会围绕同一份名单逐步追踪。

# 4. `size()` 和 `add(obj)`：从空列表开始

```java
ArrayList<String> names = new ArrayList<String>();
System.out.println(names.size()); // 0

names.add("Mia");
names.add("Leo");
names.add("Eva");

System.out.println(names);
System.out.println(names.size());
```

输出：

```text
0
[Mia, Leo, Eva]
3
```

`add(obj)` 会把新元素**追加到列表末尾**。

| 操作 | 列表内容 | `size()` |
|---|---|---:|
| 创建空列表 | `[]` | 0 |
| `add("Mia")` | `[Mia]` | 1 |
| `add("Leo")` | `[Mia, Leo]` | 2 |
| `add("Eva")` | `[Mia, Leo, Eva]` | 3 |

注意：`add(E obj)` 的返回类型是 `boolean`，调用成功时返回 `true`，所以可以写：

```java
boolean added = names.add("Noah");
System.out.println(added); // true
```

**但 `add(index, obj)` 是另一种重载方法，返回 `void`。** 别把两个 `add` 的返回值混在一起。

# 5. `add(index, obj)`：插入，不是替换

假设名单是：

```text
Index:     0      1      2
Element:  Mia    Leo    Eva
```

现在一位新同学 Noah 要插入到 index 1：

```java
names.add(1, "Noah");
```

列表会变成：

```text
Index:     0      1       2      3
Element:  Mia    Noah     Leo    Eva
```

发生了什么？

1. 在 index 1 留出一个位置。
2. 原来 index 1 及其后面的元素**整体向右移动一格**。
3. 把 `"Noah"` 放到 index 1。
4. `size()` 从 3 变成 4。

**原来的 `"Leo"` 和 `"Eva"` 没有消失，只是 index 改变了。**

## 5.1 连续插入：每一轮都要重新看 Index

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(10);
nums.add(20);
nums.add(30);
nums.add(1, 40);
nums.add(1, 50);
```

逐行追踪：

| 代码执行之后 | 列表内容 |
|---|---|
| `add(10)` | `[10]` |
| `add(20)` | `[10, 20]` |
| `add(30)` | `[10, 20, 30]` |
| `add(1, 40)` | `[10, 40, 20, 30]` |
| `add(1, 50)` | `[10, 50, 40, 20, 30]` |

最后一次插入，并不是在刚才的 40 后面加入 50，而是**再次插入到 index 1**，所以 40 也被右移了。

## 5.2 一个特殊但重要的有效位置：`index == size()`

假设当前有三个元素：

```text
[Mia, Leo, Eva]
size() == 3
```

以下代码是正确的：

```java
names.add(3, "Noah");
```

它的结果和 `names.add("Noah")` 一样，都是把新元素放到末尾。

这是因为插入允许一个**位于最后一个元素之后的位置**：`index == size()`。

但请注意：**允许在 index `size()` 插入，不代表可以读取这个位置已有的元素。** 这两种操作的索引范围不同，后面会专门比较。

# 6. `get(index)` 与 `set(index, obj)`：读取和替换

假设列表现在是：

```text
Index:     0      1      2
Element:  Mia    Leo    Eva
```

## 6.1 `get(index)`：读取，不修改

```java
String second = names.get(1);
System.out.println(second); // Leo
```

`get(1)` 会返回 index 1 的元素。列表内容和数量都不变。

## 6.2 `set(index, obj)`：替换，而不是插入

```java
String old = names.set(1, "Noah");
```

这一次：

```text
原列表：[Mia, Leo, Eva]
新列表：[Mia, Noah, Eva]
返回值：Leo
```

| 发生的事 | 结果 |
|---|---|
| index 1 的元素 | 从 `Leo` 变成 `Noah` |
| 其他元素的位置 | 不变 |
| `size()` | 仍然是 3 |
| `set(...)` 的返回值 | 被替换掉的旧元素 `Leo` |

## 6.3 `add(1, "Noah")` vs. `set(1, "Noah")`

从同一份列表开始：

```text
[Mia, Leo, Eva]
```

| 方法 | 操作后 | `size()` |
|---|---|---:|
| `add(1, "Noah")` | `[Mia, Noah, Leo, Eva]` | 4 |
| `set(1, "Noah")` | `[Mia, Noah, Eva]` | 3 |

**判断题目究竟要求 Insert（插入）还是 Replace（替换），这是 AP 代码题的高频关键。**

# 7. `remove(index)`：删除后左移，还会返回被删元素

从下面的列表开始：

```text
Index:     0      1      2      3
Element:  Mia    Noah    Leo    Eva
```

执行：

```java
String removed = names.remove(1);
```

结果：

```text
removed = "Noah"
names   = [Mia, Leo, Eva]
```

为什么？

1. `remove(1)` 删除 **index 1** 的元素，也就是 `Noah`。
2. 原来在 index 2、3 的 `Leo` 和 `Eva` **向左移动一格**。
3. `size()` 从 4 变为 3。
4. 返回被删除的旧元素 `Noah`。

## 7.1 `remove(1)` 删的是位置，不是数值 1

这在 `ArrayList<Integer>` 中格外容易看错：

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(8);
nums.add(1);
nums.add(5);

nums.remove(1);
System.out.println(nums);
```

输出：

```text
[8, 5]
```

这里的 `1` 被解释为 **index**，所以删除 index 1 的元素，恰好是数值 1。

再换一个更能说明问题的例子：

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(9);
nums.add(4);
nums.add(7);

int removed = nums.remove(1);
```

结果是：

```text
removed = 4
nums    = [9, 7]
```

虽然方法参数写的是 `1`，但被删除的数值是 **4**，因为 4 原来位于 index 1。

> **本课官方要求掌握的是 `remove(int index)`：按照索引删除，并返回被删除的元素。**

# 8. Index 范围：为什么插入可以等于 Size，读取却不可以？

这是 ArrayList 与数组代码追踪中最容易引发边界错误的部分。

假设：

```text
names = [Mia, Leo, Eva]
size() = 3
```

现有元素只有三个：

| Index | 0 | 1 | 2 |
|---|---|---|---|
| Element | Mia | Leo | Eva |

因此，读取、替换和删除**现有元素**时：

```text
有效 index：0, 1, 2
范围：0 <= index < size()
```

但插入操作可以在已有元素后面创造一个新位置：

```text
add(index, obj) 的有效 index：0, 1, 2, 3
范围：0 <= index <= size()
```

| 代码 | 是否有效？ | 原因 |
|---|---|---|
| `names.get(2)` | ✅ | index 2 有元素 |
| `names.get(3)` | ❌ | index 3 没有现有元素 |
| `names.set(3, "Bo")` | ❌ | 不能替换不存在的元素 |
| `names.remove(3)` | ❌ | 不能删除不存在的元素 |
| `names.add(3, "Bo")` | ✅ | 可以在末尾插入新元素 |
| `names.add(4, "Bo")` | ❌ | 不能跳过 index 3 创建空位 |

超出有效索引范围时，`ArrayList` 的这些操作会产生 `IndexOutOfBoundsException`。

**一口气记住：**

- `get` / `set` / `remove`：访问已经存在的元素，最后一个 index 是 `size() - 1`。
- `add(index, obj)`：创建新位置，允许 index **等于 `size()`**。

# 9. AP Code Tracing：把六种方法组合起来

考试不会总是单独问某个方法的作用。更常见的是连续执行多条代码，要求判断最终列表和输出。

先尝试不看答案，手动追踪下面的代码：

```java
ArrayList<String> club = new ArrayList<String>();

club.add("Amy");
club.add("Ben");
club.add("Cal");
club.add(1, "Dan");
String old = club.set(2, "Eva");
String gone = club.remove(0);

System.out.println(club);
System.out.println(old);
System.out.println(gone);
System.out.println(club.size());
```

## 9.1 每执行一行，就画一次列表

| 步骤 | 执行的代码 | 列表内容 | size |
|---|---|---|---:|
| 0 | 创建空列表 | `[]` | 0 |
| 1 | `add("Amy")` | `[Amy]` | 1 |
| 2 | `add("Ben")` | `[Amy, Ben]` | 2 |
| 3 | `add("Cal")` | `[Amy, Ben, Cal]` | 3 |
| 4 | `add(1, "Dan")` | `[Amy, Dan, Ben, Cal]` | 4 |
| 5 | `set(2, "Eva")` | `[Amy, Dan, Eva, Cal]` | 4 |
| 6 | `remove(0)` | `[Dan, Eva, Cal]` | 3 |

第 5 步 `set` 返回的是旧元素 `Ben`。

第 6 步 `remove` 返回的是被删除的元素 `Amy`。

因此输出是：

```text
[Dan, Eva, Cal]
Ben
Amy
3
```

## 9.2 一个特别有效的追踪习惯

不要只记元素内容。每次遇到 `add(index, ...)` 或 `remove(index)`，都重新标出 index：

```text
[ Amy, Dan, Ben, Cal ]
   0    1    2    3
```

因为只要插入或删除一次，后面元素的 index 就可能改变。**把旧 index 一直沿用到后面的代码，是常见错误。**

# 10. ArrayList 中放的是对象引用

`ArrayList<String>` 和 `ArrayList<Integer>` 比较容易阅读，但它们并不是特殊情况。我们同样可以创建 `ArrayList<Student>`。

假设 `Student` 类已有 `Student(String name, int score)` constructor，以及 `setScore(int score)` method：

```java
ArrayList<Student> roster = new ArrayList<Student>();

Student mia = new Student("Mia", 80);
roster.add(mia);

roster.get(0).setScore(90);
```

理解最后一行：

1. `roster.get(0)` 取得列表中第 0 个元素保存的 **Student 引用**。
2. 通过这个引用调用 `setScore(90)`。
3. **Mia 对象的分数发生了变化；列表第 0 个元素仍然引用原来的 Mia 对象。**

再比较另一种操作：

```java
roster.set(0, new Student("Leo", 95));
```

这次 `set` 把列表中 index 0 的引用替换成了新创建的 Leo 对象的引用。

| 操作 | 对象的内部状态 | 列表元素保存的引用 |
|---|---|---|
| `roster.get(0).setScore(90)` | 原 Student 对象的 score 被修改 | 仍指向原 Student 对象 |
| `roster.set(0, new Student("Leo", 95))` | 创建一个新的 Student 对象 | 改为指向新对象 |

**这里不要把“修改某个对象的属性”和“替换列表中的对象引用”混为一谈。**

# 11. 教材 FRQ 思路：为什么要 `add(0, digit)`？

Runestone 的本课后半部分使用了一个改编自旧 AP FRQ 的任务：将整数拆分为一个个数字，并存入 `ArrayList<Integer>`。这个例子恰好能说明 **在指定 index 插入** 的用途。

假设整数是 `154`，希望得到：

```text
[1, 5, 4]
```

我们已经学过：

- `number % 10`：取得最后一位数字。
- `number / 10`：整数除法，去掉最后一位。

因此，处理 `154` 时，依次取出的数字实际上是：

```text
4 → 5 → 1
```

如果每次都 `add(digit)`，列表会变成 `[4, 5, 1]`，顺序反了。

解决办法：**每次把新取出的数字插入到 index 0**。

```java
// 假设 number 是正整数
int number = 154;
ArrayList<Integer> digits = new ArrayList<Integer>();

while (number > 0)
{
    int digit = number % 10;
    digits.add(0, digit);
    number = number / 10;
}

System.out.println(digits);
```

追踪过程：

| number（本轮开始） | digit | 执行 `add(0, digit)` 后 |
|---|---:|---|
| 154 | 4 | `[4]` |
| 15 | 5 | `[5, 4]` |
| 1 | 1 | `[1, 5, 4]` |

输出：

```text
[1, 5, 4]
```

这不是要求学生现在背诵一整套新算法，而是理解：**`add(0, obj)` 总能把元素插在最前面，并让已有元素向右移动。**

# 12. AP Exam Focus：官方六项考点

College Board 将本课归在 **4.8.A：使用 ArrayList 表示相关对象的集合，并根据方法调用判断结果**。

| AP 知识点 | 必须掌握的内容 |
|---|---|
| **4.8.A.1** | `ArrayList` 的元素数量可改变（mutable in size），内部保存的是对象引用。 |
| **4.8.A.2** | `ArrayList()` constructor 创建一个**空列表**。 |
| **4.8.A.3** | `ArrayList<E>` 的 `E` 指定元素类型；使用泛型可以更早发现类型错误。 |
| **4.8.A.4** | `ArrayList` 位于 `java.util` package；需要相应的 import（考试会提供）。 |
| **4.8.A.5** | 会使用并追踪六个官方方法：`size`、两种 `add`、`get`、`set`、`remove`；理解返回值和元素移动。 |
| **4.8.A.6** | 索引从 `0` 开始，已有元素的最后一个 index 为 `size() - 1`。 |

本课对应的 Suggested Skills：

- **2.B**：编写使用数据结构的 Java 代码。
- **3.B**：根据代码判断结果或输出。
- **3.D**：找出并修正不能编译或不能按预期工作的代码。

**考试关联：** 当前 AP CSA 的 FRQ Question 3 是 *Data Analysis with ArrayList*。本课是后续 ArrayList 遍历与算法（4.9–4.10）的基础；现在先把六个方法与 index 机制理解清楚。

## 这课不需要提前展开的内容

Runestone 还提到了 `List` interface 和 `Arrays.asList()` 等内容，但前者不属于当前 AP CSA 考查的接口知识范围，后者教材也注明不在 AP 考试范围内。

此外，**4.9 才会系统学习 ArrayList Traversals**，包括遍历过程中删除元素如何避免跳过数据。不要把它和本课的基础方法混在一起背诵。

# 13. Common Mistakes：常见错误

| 常见错误 | 正确理解 |
|---|---|
| 把 `ArrayList` 看作固定长度的数组 | 列表元素数量可以在运行过程中改变 |
| 认为 `new ArrayList<String>()` 自动创建几个空字符串 | 它创建的是 size 为 0 的空列表 |
| 写成 `ArrayList<int>` | 泛型参数要使用引用类型，例如 `Integer` |
| 用 `list.length` 或 `list.length()` | `ArrayList` 使用 `list.size()` |
| 用 `list[0]` 读取元素 | `ArrayList` 使用 `list.get(0)` |
| 认为 `add(1, obj)` 替换 index 1 的元素 | 它是**插入**，会把已有元素右移 |
| 认为 `set(1, obj)` 让列表增加一个元素 | 它是**替换**，size 不变 |
| 认为 `remove(1)` 删除“数值 1” | 官方方法 `remove(int index)` 按**位置**删除 |
| 忘记 `set()` 与 `remove()` 的返回值 | 它们都会返回原先位于该 index 的元素 |
| 以为 `list.get(list.size())` 有效 | 最后一个现有元素的 index 是 `size() - 1` |
| 认为 `list.add(list.size(), x)` 会越界 | 这是合法的末尾插入 |

# 14. Mini Practice：AP 风格练习

建议先自己画出列表，每执行一行就更新一次，再查看答案。

## Practice 1：创建和类型

哪段代码能够创建一个空的整数列表，并允许之后加入 `int` 值？

A. `ArrayList<int> nums = new ArrayList<int>();`

B. `ArrayList<Integer> nums = new ArrayList<Integer>();`

C. `int[] nums = new ArrayList<Integer>();`

**答案：B。** `ArrayList` 的泛型参数必须是引用类型。`Integer` 是 `int` 的 wrapper class。

## Practice 2：Insertion vs. Replacement

```java
ArrayList<String> items = new ArrayList<String>();
items.add("A");
items.add("B");
items.add("C");
items.add(1, "X");
items.set(2, "Y");
System.out.println(items);
```

输出是什么？

A. `[A, X, Y, C]`

B. `[A, X, C]`

C. `[A, Y, X, C]`

**答案：A。** `add(1, "X")` 得到 `[A, X, B, C]`；随后 `set(2, "Y")` 替换 `B`，得到 `[A, X, Y, C]`。

## Practice 3：Return Value

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(3);
nums.add(6);
nums.add(9);

int old = nums.set(1, 12);
int removed = nums.remove(0);

System.out.println(old + " " + removed);
System.out.println(nums);
```

输出是什么？

A. `12 3`，`[12, 9]`

B. `6 3`，`[12, 9]`

C. `6 12`，`[3, 9]`

**答案：B。** `set` 返回被替换的旧元素 `6`；`remove(0)` 返回被删除的 `3`，剩余 `[12, 9]`。

## Practice 4：Index Boundary

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Mia");
names.add("Leo");
```

哪一行**可以正常执行**？

A. `names.get(2);`

B. `names.set(2, "Eva");`

C. `names.add(2, "Eva");`

**答案：C。** 当前 `size() == 2`，只有 index 0、1 对应现有元素；但 `add(2, ...)` 可以在末尾插入。

## Practice 5：Remove by Index

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(1);
nums.add(4);
nums.add(7);
nums.remove(1);
System.out.println(nums);
```

A. `[4, 7]`

B. `[1, 7]`

C. `[1, 4]`

**答案：B。** 参数 `1` 是索引，所以删除 index 1 的元素 `4`。

## Practice 6：Insertion at Index 0

```java
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(5);
nums.add(0, 3);
nums.add(0, 2);
System.out.println(nums);
```

输出是什么？

A. `[2, 3, 4, 5]`

B. `[4, 5, 3, 2]`

C. `[3, 2, 4, 5]`

**答案：A。** 每次 `add(0, value)` 都插入到最前面，并把原有元素向右移动。

## Practice 7：判断编译错误

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Mia");
String first = names[0];
```

这段代码哪里有问题？如何用**最小修改**修复？

**答案：** `ArrayList` 不能用 `[]` 访问元素。把第三行改成：

```java
String first = names.get(0);
```

## Practice 8：Mini FRQ（读题并补全代码）

题目要求：将一个新名字 `name` 插入到 `ArrayList<String> roster` 的最前面，并返回更新后的元素数量。

完成下面的方法：

```java
public static int addFirst(ArrayList<String> roster, String name)
{
    // Write your code here.
}
```

**参考答案：**

```java
public static int addFirst(ArrayList<String> roster, String name)
{
    roster.add(0, name);
    return roster.size();
}
```

解释：`add(0, name)` 把新元素插在 index 0，所有原有元素向右移动；`size()` 返回添加后的元素数量。这个方法假设 `roster` 不为 `null`。

# Unit 4.8 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| `ArrayList` | 可调整元素数量的列表；保存对象引用 |
| dynamic / resizable | 可动态改变大小；元素数量可增加或减少 |
| mutable in size | 元素数量可被改变 |
| type parameter / generic type | 类型参数 / 泛型；`<E>` 指定元素类型 |
| wrapper class | 包装类；如 `Integer`、`Double` |
| autoboxing / unboxing | 自动装箱 / 自动拆箱 |
| append | 追加；把元素放到末尾 |
| insert | 插入；在指定位置新增元素，并右移后续元素 |
| replace | 替换；新元素占据原位置，数量不变 |
| remove | 删除；移除元素，并左移后续元素 |
| shift right / shift left | 右移 / 左移；插入或删除后元素的位置变化 |
| index | 索引；从 0 开始的位置编号 |
| `IndexOutOfBoundsException` | 索引越界异常；使用了无效 index |

---

**下一课预告：** 4.9 会使用循环遍历 `ArrayList`，并重点学习一个新问题：**如果一边遍历一边删除元素，为什么有时会漏掉某些元素？**

**参考教材：**

- [Runestone CSAwesome2 — 4.8 ArrayList and its Methods](https://runestone.academy/ns/books/published/csawesome2/topic-4-8-arraylists.html)
- [College Board — AP CSA Course and Exam Description（Effective Fall 2025）](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
