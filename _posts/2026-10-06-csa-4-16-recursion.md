---
title: "AP CSA 4.16：递归（Recursion）"
layout: post
categories: media
render_with_liquid: false
---

上一课我们学习了 Selection Sort 和 Insertion Sort：程序通过循环，让同一段代码反复执行。这一课将看到另一种重复方式——**Recursion（递归）**。

假设你打开一个盒子，发现里面还有一个小盒子；打开小盒子，里面又有一个更小的盒子。你必须先处理最里面的盒子，再一层层回到外面。**递归方法也是这样：一个方法在执行过程中再次调用自己；当前这一层先暂停，等待更深一层完成后再继续。**

> **理解递归的两个方向：向下调用（压栈），向上返回（出栈）。每一层都有自己的参数和局部变量。**

**AP 考纲提醒：** 根据 College Board 2025 版 CED，本课要求你能**读懂递归方法并判断调用结果**，但**不要求自己编写递归方法**。所以下面的代码主要用于阅读、追踪与解释，不是让你死记每一种递归写法。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# 4.16 Recursion（递归）

## 1. 递归方法
* Recursive method：在方法内部调用自己
* Recursion：另一种 repetition
* Base case：不再继续递归，直接返回
* Recursive call：把问题交给下一层

## 2. 为什么会叠起来？
* Call stack：管理尚未完成的方法调用
* 新调用进入栈顶（push）
* 旧调用暂停，保存自己的 n 和等待的计算
* 每次调用有独立参数和局部变量

## 3. 为什么又能打开？
* 最深一层遇到 base case
* 该层先返回（pop）
* 上一层拿到返回值，完成自己的计算
* 从内到外，一层层返回

## 4. AP Code Tracing
* 先写调用链：`f(3) → f(2) → f(1) → f(0)`
* 再从 base case 倒推结果
* 区分调用次数、返回值与打印顺序
* 注意 `return` 所在位置及执行顺序

## 5. 考试范围与应用
* 4.16.A.1：递归、base case、recursive call
* 4.16.A.2：每次调用有自己的参数与局部变量
* 4.16.A.3：递归与循环可以相互实现
* **不要求编写递归方法**
* String、array、ArrayList 的递归应用将在 4.17 延伸

</script>
</div>
</div>

# 1. 第一道题：为什么不能直接算出答案？

先看 Runestone 使用的经典例子——阶乘（factorial）：

```java
public static int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}
```

数学上，阶乘表示从某个正整数一直乘到 1，例如：

```text
4! = 4 × 3 × 2 × 1 = 24
3! = 3 × 2 × 1     = 6
0! = 1
```

**问题：执行 `factorial(4)` 时，为什么程序不能在第一层就算出 24？**

因为第一层执行的是：

```java
return 4 * factorial(3);
```

这里的 `factorial(3)` 还没有结果。第一层只能先**等待**它完成。接着 `factorial(3)` 又要等待 `factorial(2)`……直到最深处找到能够直接返回的答案。

这就是理解递归时最重要的转换：**看到 `factorial(3)`，不要立刻把它当作数字 6；先把它当作一个需要执行的新方法调用。**

# 2. 先分清 Base Case 和 Recursive Call

一个正常结束的递归方法，至少需要两种情况。

| 部分 | `factorial` 中的代码 | 意义 |
|---|---|---|
| **Base case（基本情况）** | `if (n == 0) return 1;` | 已经是最小问题，可以直接给答案，不再调用自己 |
| **Recursive call（递归调用）** | `factorial(n - 1)` | 问题尚未解决，调用同一个方法处理更小的问题 |

## 2.1 Base case 不等于“把整个程序关掉”

当 `factorial(0)` 执行 `return 1;` 时，**结束的是这一次 `factorial(0)` 的调用**。此前的 `factorial(1)`、`factorial(2)` 等调用仍在等待，需要继续完成。

所以 `factorial(0)` 返回 1，**并不代表最外层的 `factorial(4)` 已经返回 1**。

## 2.2 为什么参数要越来越接近 Base Case？

观察参数：

```text
4 → 3 → 2 → 1 → 0
```

每一次都传入 `n - 1`，让问题逐渐接近 `n == 0`。

如果参数始终无法到达 base case，方法就会不断调用自己。Runestone 用 `neverEnd()` 说明这种**无限递归（infinite recursion）**；在实际 Java 程序中，它通常会由于调用栈耗尽而抛出 `StackOverflowError`。

# 3. 第一阶段：调用一层层叠起来（Call Stack）

想象桌上有一摞盘子：新的盘子放在最上面，要拿走时也先取最上面那一个。**调用栈（call stack）**就采用类似的后进先出方式。

当 `factorial(4)` 调用 `factorial(3)` 时：

1. `factorial(4)` 暂停，记住自己还需要做 `4 × (...)`。
2. 运行新的 `factorial(3)`；它又需要 `3 × factorial(2)`。
3. 新调用一层层叠在原调用上面。
4. 最后进入 `factorial(0)`，遇到 base case。

## 图 1：不断调用时，栈怎样变高？

<div style="max-width:100%; overflow-x:auto; margin: 1em 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 460" width="640" height="460" role="img" aria-label="阶段 ①：向下调用 — 压栈（Push）；展示factorial从4到0的调用栈及返回顺序">
<rect x="0" y="0" width="640" height="460" rx="17" fill="#F8FAFC" stroke="#CBD5E1" />
<text x="25" y="33" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="21" font-weight="700">阶段 ①：向下调用 — 压栈（Push）</text>
<text x="26" y="58" fill="#475569" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">最上面是最后进入、尚未结束的调用</text>
<rect x="126" y="76" width="475" height="320" rx="13" fill="#F1F5F9" stroke="#CBD5E1" stroke-dasharray="5 4" />
<path d="M77 379 V116" stroke="#2563EB" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M67 126 L77 109 L87 126" stroke="#2563EB" stroke-width="4" fill="none" stroke-linecap="round"/>
<text x="24" y="101" fill="#2563EB" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="700">栈顶</text>
<text x="24" y="408" fill="#64748B" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="700">栈底</text>
<rect x="143" y="87" width="442" height="49" rx="10" fill="#DCFCE7" stroke="#16A34A"/>
<text x="158" y="107" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(0)</text>
<text x="335" y="119" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">base case：直接 return 1</text>
<rect x="143" y="148" width="442" height="49" rx="10" fill="#E0EEFF" stroke="#93C5FD"/>
<text x="158" y="168" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(1)</text>
<text x="335" y="180" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">暂停：等待 1 × f(0)</text>
<rect x="143" y="209" width="442" height="49" rx="10" fill="#E0EEFF" stroke="#93C5FD"/>
<text x="158" y="229" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(2)</text>
<text x="335" y="241" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">暂停：等待 2 × f(1)</text>
<rect x="143" y="270" width="442" height="49" rx="10" fill="#E0EEFF" stroke="#93C5FD"/>
<text x="158" y="290" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(3)</text>
<text x="335" y="302" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">暂停：等待 3 × f(2)</text>
<rect x="143" y="331" width="442" height="49" rx="10" fill="#E0EEFF" stroke="#93C5FD"/>
<text x="158" y="351" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(4)</text>
<text x="335" y="363" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">暂停：等待 4 × f(3)</text>
<text x="27" y="443" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="500">调用进入顺序：4 → 3 → 2 → 1 → 0（从栈底到栈顶）</text>
</svg>
</div>

**读图注意：** 这是所有调用都进入之后的一个“快照”。最下面的 `factorial(4)` 是最早进入的，最上面的 `factorial(0)` 是最近进入的。**图中从下往上叠起，不表示代码一开始就先执行 `factorial(0)`。**

现在用表格再看一遍每一层在等待什么：

| 进入顺序 | 新调用 | 该层的参数 `n` | 这一层需要等待什么？ |
|---|---|---:|---|
| 1 | `factorial(4)` | 4 | 等待 `factorial(3)`，之后再乘 4 |
| 2 | `factorial(3)` | 3 | 等待 `factorial(2)`，之后再乘 3 |
| 3 | `factorial(2)` | 2 | 等待 `factorial(1)`，之后再乘 2 |
| 4 | `factorial(1)` | 1 | 等待 `factorial(0)`，之后再乘 1 |
| 5 | `factorial(0)` | 0 | 命中 base case，立即返回 `1` |

**第一个重要结论：向下递归时，重点是“建立新的调用”和“保存尚未完成的计算”；尚未得到最深层的返回值，外层就不能完成乘法。**

# 4. 第二阶段：从最里面逐层返回（Unwinding）

当 `factorial(0)` 返回 1 后，终于有了第一个确定的数值。

上一层 `factorial(1)` 原本在等待 `1 × factorial(0)`，现在就可以计算 `1 × 1`，得到 1，并把结果返回给 `factorial(2)`。

同样的过程从最里面，一层层向外发生。这常被称为 **unwinding（逐层返回、展开）**。

## 图 2：遇到 Base Case 后，如何一层层打开？

<div style="max-width:100%; overflow-x:auto; margin: 1em 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 460" width="640" height="460" role="img" aria-label="阶段 ②：逐层返回 — 出栈（Pop）；展示factorial从4到0的调用栈及返回顺序">
<rect x="0" y="0" width="640" height="460" rx="17" fill="#F8FAFC" stroke="#CBD5E1" />
<text x="25" y="33" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="21" font-weight="700">阶段 ②：逐层返回 — 出栈（Pop）</text>
<text x="26" y="58" fill="#475569" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="400">最上面的调用先完成，再返回到下一层</text>
<rect x="126" y="76" width="475" height="320" rx="13" fill="#F1F5F9" stroke="#CBD5E1" stroke-dasharray="5 4" />
<path d="M77 113 V370" stroke="#16A34A" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M67 358 L77 376 L87 358" stroke="#16A34A" stroke-width="4" fill="none" stroke-linecap="round"/>
<text x="24" y="101" fill="#16A34A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="700">先返回</text>
<text x="24" y="408" fill="#64748B" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="700">后返回</text>
<rect x="143" y="87" width="442" height="49" rx="10" fill="#DCFCE7" stroke="#86EFAC"/>
<text x="158" y="107" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(0)</text>
<text x="369" y="119" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="16" font-weight="600">return 1</text>
<rect x="143" y="148" width="442" height="49" rx="10" fill="#DCFCE7" stroke="#86EFAC"/>
<text x="158" y="168" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(1)</text>
<text x="369" y="180" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="16" font-weight="600">1 × 1 = 1</text>
<rect x="143" y="209" width="442" height="49" rx="10" fill="#DCFCE7" stroke="#86EFAC"/>
<text x="158" y="229" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(2)</text>
<text x="369" y="241" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="16" font-weight="600">2 × 1 = 2</text>
<rect x="143" y="270" width="442" height="49" rx="10" fill="#DCFCE7" stroke="#86EFAC"/>
<text x="158" y="290" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(3)</text>
<text x="369" y="302" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="16" font-weight="600">3 × 2 = 6</text>
<rect x="143" y="331" width="442" height="49" rx="10" fill="#DBEAFE" stroke="#60A5FA"/>
<text x="158" y="351" fill="#0F172A" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="17" font-weight="700">factorial(4)</text>
<text x="369" y="363" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="16" font-weight="600">4 × 6 = 24</text>
<text x="27" y="443" fill="#334155" font-family="'Noto Sans CJK SC', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif" font-size="14" font-weight="500">返回顺序：0 → 1 → 2 → 3 → 4（从栈顶到栈底）</text>
</svg>
</div>

**读图注意：** 这里的箭头从**栈顶向栈底**，表示返回的方向。最上面的 `factorial(0)` **先返回**，最下面的 `factorial(4)` **最后返回**。这张图把各层返回的结果汇总在一起，**不表示它们返回后仍同时留在栈中**；每执行一次 `return`，最上面的那次调用就会离开调用栈。

对应的计算表：

| 返回顺序 | 正在完成的调用 | 已知道的下一层结果 | 计算 | 本层返回 |
|---|---|---|---|---:|
| 1 | `factorial(0)` | 不需要下一层 | `return 1` | **1** |
| 2 | `factorial(1)` | `factorial(0) = 1` | `1 × 1` | **1** |
| 3 | `factorial(2)` | `factorial(1) = 1` | `2 × 1` | **2** |
| 4 | `factorial(3)` | `factorial(2) = 2` | `3 × 2` | **6** |
| 5 | `factorial(4)` | `factorial(3) = 6` | `4 × 6` | **24** |

因此：

```java
factorial(4)  // 24
```

**第二个重要结论：向上返回时，最深一层先给出答案；上一层才能继续计算，并把自己的结果交给更外层。**

## 把“向下调用”和“向上返回”放在一起

| 阶段 | 方向 | 执行次序 | 正在发生什么？ |
|---|---|---|---|
| **压栈 / 调用** | 外 → 内 | `factorial(4) → (3) → (2) → (1) → (0)` | 旧调用暂停，新调用进入 |
| **出栈 / 返回** | 内 → 外 | `factorial(0) → (1) → (2) → (3) → (4)` | 新调用先完成，旧调用恢复并计算 |

**AP 解题口诀：先按发生顺序写出调用链 `factorial(4) → … → factorial(0)`，再反过来按返回顺序计算 `factorial(0) → … → factorial(4)`。** 不要把调用栈图的物理“上、下”与计算的先后顺序混为一谈。

# 5. 为什么每一层的参数不会互相覆盖？

这是 **AP 4.16.A.2** 的正式要求。

假设 `factorial(4)` 在等待 `factorial(3)`。很多学生会担心：新的调用把 `n` 改成 3 后，原来的 `n = 4` 是不是就丢失了？

答案是：**不会。**

每一次调用都有自己独立的一组局部变量，包括参数。它们虽然都叫 `n`，但属于不同的方法调用。

| 方法调用 | 自己保存的 `n` | 暂停时记住的任务 |
|---|---:|---|
| `factorial(4)` | 4 | 等待结果后乘 4 |
| `factorial(3)` | 3 | 等待结果后乘 3 |
| `factorial(2)` | 2 | 等待结果后乘 2 |
| `factorial(1)` | 1 | 等待结果后乘 1 |
| `factorial(0)` | 0 | 直接返回 1 |

所以，当最深层返回后，`factorial(4)` 仍然知道自己的参数是 4。

可以把每次方法调用理解成一张独立的工作卡片：**卡片上写着本次调用的参数，以及下一层回来后自己要继续做什么。**

这和循环很相似：循环使用 `i` 的变化记录处理进度；递归通常通过**每次调用不同的参数值**记录进度。区别是：循环不断更新同一个循环过程的变量，递归则会保留多层尚未完成的调用。

# 6. AP 高频难点：打印发生在递归调用之前还是之后？

前面追踪的是返回值。考试也可能让你判断**实际打印顺序**。

看下面这个示例（用于理解执行顺序）：

```java
public static void echo(int n)
{
    if (n == 0)
    {
        return;
    }

    System.out.print(n + " ");  // A：调用之前
    echo(n - 1);                // B：递归调用
    System.out.print(n + " ");  // C：下一层返回之后
}
```

调用：

```java
echo(3);
```

先想一想：会打印几次？顺序是什么？

## 一张时间线看懂全部执行顺序

| 时间 | 当前调用 | 执行的位置 | 打印了什么？ | 累积输出 |
|---|---|---|---|---|
| 1 | `echo(3)` | A，然后进入 `echo(2)` | `3` | `3` |
| 2 | `echo(2)` | A，然后进入 `echo(1)` | `2` | `3 2` |
| 3 | `echo(1)` | A，然后进入 `echo(0)` | `1` | `3 2 1` |
| 4 | `echo(0)` | Base case，直接返回 | 无 | `3 2 1` |
| 5 | `echo(1)` | 从 B 返回，继续执行 C | `1` | `3 2 1 1` |
| 6 | `echo(2)` | 从 B 返回，继续执行 C | `2` | `3 2 1 1 2` |
| 7 | `echo(3)` | 从 B 返回，继续执行 C | `3` | `3 2 1 1 2 3` |

最终输出：

```text
3 2 1 1 2 3
```

这道题的核心不在数字，而在**代码的位置**：

- 递归调用**之前**的打印，按照 3 → 2 → 1 的顺序执行。
- 递归调用**之后**的打印，必须等下一层返回，按照 1 → 2 → 3 的顺序执行。
- `echo(0)` 遇到 base case 直接 `return`，不会执行两条 `print`。

**不要误以为执行到递归调用那一行，就会直接跳过它后面的代码。后面的代码只是被暂时推迟了。**

# 7. Runestone 追踪挑战一：`mystery(4)` 返回什么？

Runestone 4.16 给出了下面的方法：

```java
public static int mystery(int n)
{
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return 3 * mystery(n - 1);
    }
}
```

现在调用：

```java
mystery(4);
```

**第一步：只写调用链，不急着乘法。**

```text
mystery(4) = 3 × mystery(3)
mystery(3) = 3 × mystery(2)
mystery(2) = 3 × mystery(1)
mystery(1) = 3 × mystery(0)
mystery(0) = 1              ← Base case
```

**第二步：从 base case 逆向计算。**

| 当前层 | 计算过程 | 返回值 |
|---|---|---:|
| `mystery(0)` | 直接返回 | 1 |
| `mystery(1)` | `3 × 1` | 3 |
| `mystery(2)` | `3 × 3` | 9 |
| `mystery(3)` | `3 × 9` | 27 |
| `mystery(4)` | `3 × 27` | **81** |

这一题共有 **5 次方法调用**（`n` 分别为 4、3、2、1、0），但只有最后结果 `81` 是最外层 `mystery(4)` 返回给调用它的代码的值。

> **调用次数、每一层的返回值、最外层的返回值，是三个不同的问题。**

# 8. Runestone 追踪挑战二：递归处理 String

Runestone 还给出了通过 `substring(1)` 缩短字符串的方法，作为 String 递归的练习。它也为下一课 4.17 的 String 递归处理做准备。

```java
public static int strMethod(String str)
{
    if (str.length() == 1)
    {
        return 0;
    }
    else
    {
        if (str.substring(0, 1).equals("e"))
        {
            return 1 + strMethod(str.substring(1));
        }
        else
        {
            return strMethod(str.substring(1));
        }
    }
}
```

题目：`strMethod("every")` 返回多少？

**先看调用如何缩小问题：**

| 调用 | 当前字符串 | 首字符是否为 `"e"`？ | 这层等待什么？ |
|---|---|---|---|
| 1 | `"every"` | 是 | `1 + strMethod("very")` |
| 2 | `"very"` | 否 | `strMethod("ery")` |
| 3 | `"ery"` | 是 | `1 + strMethod("ry")` |
| 4 | `"ry"` | 否 | `strMethod("y")` |
| 5 | `"y"` | **不再检查首字符** | Base case：直接返回 0 |

**再从最里面返回：**

```text
strMethod("y")     → 0
strMethod("ry")    → 0
strMethod("ery")   → 1 + 0 = 1
strMethod("very")  → 1
strMethod("every") → 1 + 1 = 2
```

因此，最终结果是 **2**。

### 一个很容易漏掉的细节

**这段代码不会检查长度为 1 时的最后一个字符。**

例如，如果调用 `strMethod("bee")`，方法会检查 `"bee"` 的 `b`、`"ee"` 的第一个 `e`，最后在 `"e"` 时直接返回 0，因此结果是 **1**，不是 2。

这是由**给定代码的 base case**决定的。做 AP 代码追踪，必须根据实际代码执行，不能根据你猜测的方法用途自行修正结果。此方法的输入还应至少包含一个字符，以避免出现不符合预期的运行错误。

# 9. Base Case 的其他形式与方法的前提条件

Base case 不一定是 `n == 0`，也可能是 `n == 1`，甚至可以有多个。

例如，Runestone 的 `bunnyEars` 方法：

```java
public static int bunnyEars(int bunnies)
{
    if (bunnies == 0)
    {
        return 0;
    }
    else if (bunnies == 1)
    {
        return 2;
    }
    else
    {
        return 2 + bunnyEars(bunnies - 1);
    }
}
```

这里有**两个 base cases**：

- `bunnies == 0` → 返回 0
- `bunnies == 1` → 返回 2

因此 `bunnyEars(3)` 的调用链是 `3 → 2 → 1`，返回值依次是 `2 → 4 → 6`，最外层得到 **6**。

## 考试还可能问：什么输入才能正常结束？

Runestone 还有下面的递归调用方式：

```java
public static int product(int n)
{
    if (n == 1)
    {
        return 1;
    }
    else
    {
        return n * product(n - 2);
    }
}
```

| 输入 | 参数变化 | 是否达到 `n == 1`？ |
|---|---|---|
| `product(5)` | `5 → 3 → 1` | 是，返回 `5 × 3 × 1 = 15` |
| `product(4)` | `4 → 2 → 0 → -2 → …` | 无法正常达到 1，会持续递归直至栈溢出 |

**不要只看到“有 base case”就认为所有输入都会结束。还要检查参数是否真的能接近、并最终到达这个 base case。**

# 10. Recursion vs. Iteration：递归与循环的联系

College Board 的 **4.16.A.3** 要求理解：递归和迭代（iteration）都可以用来实现重复计算，同一个问题的解法可以采用这两种方式。

例如，阶乘不仅可以递归计算，也可以使用普通循环：

```java
public static int factorialLoop(int n)
{
    int result = 1;

    for (int i = 2; i <= n; i++)
    {
        result *= i;
    }

    return result;
}
```

对非负整数 `n` 而言，这段循环实现与前面的递归 `factorial(n)` 计算相同的数学结果（在 `int` 可表示的范围内）。

| 比较 | Iteration（循环） | Recursion（递归） |
|---|---|---|
| 重复的方式 | 通过循环继续执行 | 通过方法再次调用自己 |
| 怎样记录进度？ | 例如更新循环变量 `i` | 例如每层参数 `n` 不同 |
| 停止条件 | 循环条件不再满足 | 到达 base case |
| 中途的状态 | 同一个循环过程持续更新变量 | 调用栈保留多层未完成调用 |
| 典型应用 | 线性数据的逐个遍历 | 可以自然处理文件夹等分层结构 |

Runestone 用**文件夹里面还有子文件夹**解释递归的实际用途：处理一个文件夹时，需要知道其中各个子文件夹的大小，而每个子文件夹都可以当作一个更小的同类问题继续处理。

理论上，递归与迭代能够完成同类计算任务，但实际实现时可能需要**额外的数据结构**来代替调用栈；递归过深也会受到 Java 调用栈大小的限制。**这属于理解层面的比较，本课考试不要求你编写递归版本来替换循环。**

# 11. AP Exam Focus：官方考点与考试边界

College Board 2025 CED：**Topic 4.16 — Recursion，Learning Objective 4.16.A：Determine the result of calling recursive methods**。

| 官方编号 | 学生需要掌握的内容 | 具体能力 |
|---|---|---|
| **4.16.A.1** | 递归方法会调用自己；需要 base case 和 recursive call；递归是一种重复 | 辨认递归、找出 base case、判断何时停止 |
| **4.16.A.2** | 每次递归调用拥有独立的局部变量，包括参数 | 追踪每层参数，理解调用栈中的等待与返回 |
| **4.16.A.3** | 递归与循环可以相互实现相同任务 | 解释两种重复方式之间的关系 |

**官方明确排除：Writing recursive code is outside the scope of the AP CSA course and exam。**

因此，备考时应该优先练习：

- **3.C — Analyze Code：** 推算递归方法返回什么、打印什么、调用了多少次。
- **4.A — Describe Code：** 解释这段代码如何工作。
- **4.B — Explain Preconditions：** 判断方法能够正常运行、最终到达 base case 的输入条件。

这里不需要把精力放在设计复杂的递归方法上；下一课 **4.17** 还会正式学习 String / collection 递归、Binary Search 和 Merge Sort 的递归行为。

# 12. Common Mistakes：常见理解错误

| 常见误解 | 正确理解 |
|---|---|
| “调用了自己，所以一定会无限递归。” | 如果能到达 base case，递归就能正常结束。 |
| “出现 `return 1;`，整个递归过程就直接得到 1。” | Base case 只结束当前最深一层，外层还要恢复并继续计算。 |
| “所有调用都叫 `n`，所以新调用会覆盖原来的 `n`。” | 每次调用都有自己的局部变量和参数。 |
| “看到 `4 * factorial(3)` 就可以直接打印 4。” | 第一层还在等待 `factorial(3)` 的返回值，不能完成乘法。 |
| “向下调用的顺序就是向上返回的顺序。” | 调用为外 → 内，返回为内 → 外。 |
| “递归调用下面的代码不会执行。” | 它会暂时等待，下一层返回之后才继续执行。 |
| “方法里写了 base case，对任何输入都能停止。” | 必须确认参数会真正到达 base case。 |
| “递归和循环是完全不同、不能替换的计算方式。” | 两者都能实现重复计算，但实现方式与空间需求可能不同。 |
| “为了考试必须能从零写出递归算法。” | 官方要求会追踪和解释，**不要求编写递归方法**。 |

# 13. Mini Practice：AP 风格练习

> 建议先用纸画出调用链，找到 base case，再往回写每一层的值。下面这些题目重点是**读代码与追踪**，符合 4.16 的考试方向。

## Practice 1：是否是递归？

```java
public static int total(int n)
{
    int sum = 0;
    for (int i = 1; i <= n; i++)
    {
        sum += i;
    }
    return sum;
}
```

这段方法是否属于 recursion？

A. 是，因为它重复执行计算。

B. 不是，因为它没有调用自己，而是使用了 `for` loop。

C. 是，因为它返回 `int`。

**答案：B。** Recursion 的关键是**方法内部调用自己**。这段代码属于 iteration。

## Practice 2：返回值

```java
public static int sumDown(int n)
{
    if (n == 0)
    {
        return 0;
    }
    return n + sumDown(n - 1);
}
```

`sumDown(3)` 返回多少？

A. 3　 B. 6　 C. 0　 D. 9

**答案：B（6）。** `sumDown(3) = 3 + sumDown(2) = 3 + 2 + 1 + 0 = 6`。

## Practice 3：总共调用几次？

使用上题方法，执行 `sumDown(3)` 时，`sumDown` 总共被调用几次（包括最开始的一次）？

A. 3　 B. 4　 C. 5　 D. 6

**答案：B（4 次）。** 参数依次是 `3 → 2 → 1 → 0`；base case 的调用也要计入。

## Practice 4：递归调用之后才打印

```java
public static void show(int n)
{
    if (n == 0)
    {
        return;
    }
    show(n - 1);
    System.out.print(n + " ");
}
```

调用 `show(3)`，输出是什么？

A. `3 2 1`　 B. `1 2 3`　 C. `3 2 1 1 2 3`

**答案：B。** 打印在递归调用**后面**，必须先到达 base case，再从 `show(1)`、`show(2)`、`show(3)` 逐层返回时打印。

## Practice 5：不同调用中的 `n`

```java
public static int calc(int n)
{
    if (n == 1)
    {
        return 2;
    }
    return n + calc(n - 1);
}
```

调用 `calc(3)` 后，最外层 `calc(3)` 恢复执行时，它自己的参数 `n` 是多少？

A. 1　 B. 2　 C. 3

**答案：C。** `calc(1)`、`calc(2)`、`calc(3)` 各自有独立的参数。最外层的 `n` 始终为 3。（完整返回值为 `3 + 2 + 2 = 7`。）

## Practice 6：参数能到达 Base Case 吗？

```java
public static int product(int n)
{
    if (n == 1)
    {
        return 1;
    }
    return n * product(n - 2);
}
```

以下哪个输入能正常到达 base case？

A. `product(4)`　 B. `product(5)`　 C. `product(0)`

**答案：B。** 只有 `5 → 3 → 1` 能到达 `n == 1`；其余两个输入都不会在正常递归深度内到达 base case。

## Practice 7：Runestone 的 `mystery`

```java
public static int mystery(int n)
{
    if (n == 0) return 1;
    return 3 * mystery(n - 1);
}
```

`mystery(3)` 返回多少？

A. 9　 B. 27　 C. 81

**答案：B（27）。** 从 `mystery(0) = 1` 开始逆推：`1 → 3 → 9 → 27`。

## Practice 8：String 追踪

使用第 8 节 Runestone 的 `strMethod`，`strMethod("bee")` 的结果是什么？

A. 0　 B. 1　 C. 2

**答案：B（1）。** 最后一层字符串长度为 1 时立即返回 0，不检查最后一个 `e`。

# Unit 4.16 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| recursion | 递归；通过方法调用自己实现重复 |
| recursive method | 递归方法；在方法中调用自己的方法 |
| recursive call | 递归调用；方法再次调用自身 |
| base case | 基本情况；直接返回、不再继续递归的情形 |
| call stack | 调用栈；用于保存未完成的方法调用及其状态 |
| stack frame | 栈帧；代表某一次方法调用，保存该次调用的局部状态 |
| push / pop | 压栈 / 出栈；在栈顶加入或移除调用 |
| unwinding | 逐层返回；从最深的调用回到外层 |
| local variable | 局部变量；每次方法调用都有自己的局部变量 |
| parameter | 参数；每一层递归调用可以有不同的参数值 |
| iteration | 迭代；使用循环完成重复计算 |
| infinite recursion | 无限递归；递归调用无法正常结束 |
| StackOverflowError | 栈溢出错误；递归过深可能导致调用栈耗尽 |
| precondition | 前置条件；方法正常执行所需满足的输入条件 |

---

**下一课预告：** 4.16 先学会怎样阅读递归、追踪调用栈和返回值。4.17 将进一步研究递归处理 String、数组和 `ArrayList`，以及 Binary Search 和 Merge Sort 的执行过程。

**参考资料：**

- [Runestone CSAwesome2 — 4.16 Recursion](https://runestone.academy/ns/books/published/csawesome2/topic-4-16-recursion.html?mode=browsing)
- [College Board — AP CSA Course and Exam Description（2025 Fall），Topic 4.16，p.120](https://apcentral.collegeboard.org/media/pdf/ap-computer-science-a-course-and-exam-description.pdf)
