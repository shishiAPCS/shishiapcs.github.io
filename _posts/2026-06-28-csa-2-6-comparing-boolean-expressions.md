---
title: "AP CSA 2.6：比较布尔表达式"
layout: post
categories: media
render_with_liquid: false
---

Topic 2.5 introduced compound Boolean expressions. In this lesson, you will rewrite expressions without changing their results and distinguish between comparing object references and comparing object contents.

在 2.5 中，我们学习了复合布尔表达式。本节课将学习如何在不改变结果的前提下改写表达式，以及如何区分对象引用比较和对象内容比较。

> **Equivalent expressions produce the same result for every possible input, even when they look different.**
> **等价表达式的写法可能不同，但对于所有可能的输入，它们都会得到相同的结果。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.6 比较布尔表达式<br>Comparing Boolean Expressions

## 等价表达式<br>Equivalent Expressions

* 对所有可能输入都产生相同结果<br>Produce the same result for every possible input
* 可以通过真值表验证<br>Can be verified with a truth table
* 写法不同不代表逻辑不同<br>Different syntax may represent the same logic

## 德摩根定律<br>De Morgan’s Laws

* `!(A && B)` 等价于 `!A || !B`<br>NOT of AND becomes OR of the negations
* `!(A || B)` 等价于 `!A && !B`<br>NOT of OR becomes AND of the negations
* 把 `!` 移进去，同时交换 `&&` 和 `||`<br>Move NOT inside and switch the logical operator

## 关系运算符取反<br>Negating Relational Operators

* `!(x < y)` 等价于 `x >= y`
* `!(x > y)` 等价于 `x <= y`
* `!(x == y)` 等价于 `x != y`
* 取反时要包含边界值<br>Negation must include the boundary value

## 引用比较<br>Reference Equality

* `==` 判断是否指向同一个对象<br>`==` checks whether references point to the same object
* 两个变量可以成为同一对象的别名<br>Two variables can be aliases for one object
* `!=` 判断是否指向不同对象<br>`!=` checks whether references are different

## 对象内容比较<br>Object Content Equality

* String 使用 `.equals()` 比较字符内容<br>Strings use `.equals()` to compare contents
* 内容相同不一定是同一个对象<br>Equal contents do not mean the same object
* `new String(...)` 会创建新的对象<br>`new String(...)` creates a new object

## null 比较<br>Comparing with null

* `reference == null`：没有指向对象<br>The reference does not point to an object
* `reference != null`：确实指向某个对象<br>The reference points to an object
* 先检查非空，再调用方法<br>Check for non-null before calling a method

## AP 考试陷阱<br>Common AP Traps

* 移动 `!` 后忘记交换 `&&` 和 `||`<br>Forgetting to switch the logical operator
* 把 `!(x < 5)` 错写成 `x > 5`<br>Forgetting the equality boundary
* 使用 `==` 比较 String 内容<br>Using `==` to compare String contents
* 在空引用上调用方法<br>Calling a method on a null reference

</script>
</div>
</div>

# 1. Move the NOT Inside Correctly<br>正确地把 NOT 移入括号

Which expression is equivalent to the following?

下面哪个表达式与原表达式等价？

```java
!(x <= 5 && y > 7)
```

**Answer:**

```java
x > 5 || y <= 7
```

Apply De Morgan’s Law first:

先使用德摩根定律：

```text
!(A && B)
→ !A || !B
```

Substitute the two smaller conditions:

把两个小条件代入：

```java
!(x <= 5) || !(y > 7)
```

Then negate each relational operator:

然后分别对关系运算符取反：

```text
!(x <= 5) → x > 5
!(y > 7)  → y <= 7
```

Therefore:

所以：

```java
!(x <= 5 && y > 7)
```

is equivalent to:

等价于：

```java
x > 5 || y <= 7
```

Two things changed:

这里发生了两个变化：

1. `&&` became `||`.

2. Each individual condition was negated.

3. `&&` 变成了 `||`。

4. 每一个小条件都被取反。

# 2. What Does “Equivalent” Mean?<br>“等价”是什么意思？

Two Boolean expressions are **equivalent** when they produce the same result for every possible set of values.

如果两个布尔表达式对于所有可能的输入都会产生相同结果，那么它们就是**等价表达式**。

For example:

例如：

```java
!(x < 10)
```

and:

以及：

```java
x >= 10
```

are equivalent.

它们是等价的。

| `x`  | `x < 10` | `!(x < 10)` | `x >= 10` |
| ---- | -------- | ----------- | --------- |
| `5`  | `true`   | `false`     | `false`   |
| `10` | `false`  | `true`      | `true`    |
| `20` | `false`  | `true`      | `true`    |

The last two columns always match.

最后两列的结果始终相同。

Equivalent does not mean that the expressions look the same. It means that their Boolean results always match.

“等价”并不表示写法完全相同，而是表示它们的布尔结果始终相同。

# 3. De Morgan’s Laws<br>德摩根定律

De Morgan’s Laws describe how to negate expressions joined by `&&` or `||`.

德摩根定律说明了如何对由 `&&` 或 `||` 连接的表达式整体取反。

## Negating AND<br>对 AND 取反

```java
!(A && B)
```

is equivalent to:

等价于：

```java
!A || !B
```

In plain English:

用日常语言理解：

> “It is not true that both conditions are true” means that at least one condition is false.

> “两个条件不可能同时为真”意味着至少有一个条件为假。

Example:

```java
!(hasTicket && hasID)
```

Equivalent expression:

```java
!hasTicket || !hasID
```

Either the person does not have a ticket, or the person does not have identification, or both.

这个人可能没有票，也可能没有证件，或者两者都没有。

## Negating OR<br>对 OR 取反

```java
!(A || B)
```

is equivalent to:

等价于：

```java
!A && !B
```

In plain English:

用日常语言理解：

> “Neither condition is true” means that both conditions are false.

> “两个条件都不成立”意味着两个条件都为假。

Example:

```java
!(isWeekend || isHoliday)
```

Equivalent expression:

```java
!isWeekend && !isHoliday
```

It is not the weekend, and it is not a holiday.

既不是周末，也不是节假日。

## Memory pattern<br>记忆规律

When moving `!` inside:

把 `!` 移入括号时：

```text
&& changes to ||
|| changes to &&
```

Every smaller expression must also be negated.

同时，每一个小表达式都必须取反。

# 4. Negating Relational Operators<br>关系运算符取反

When a comparison is negated, use its exact opposite.

对比较表达式取反时，需要使用它的完整相反条件。

| Original expression | Equivalent negation |
| ------------------- | ------------------- |
| `!(x == y)`         | `x != y`            |
| `!(x != y)`         | `x == y`            |
| `!(x < y)`          | `x >= y`            |
| `!(x > y)`          | `x <= y`            |
| `!(x <= y)`         | `x > y`             |
| `!(x >= y)`         | `x < y`             |

The equality boundary matters.

边界上的等号非常重要。

For example:

例如：

```java
!(x < 5)
```

does **not** mean:

并不等价于：

```java
x > 5
```

When `x` is exactly `5`, `x < 5` is false, so its negation must be true.

当 `x` 恰好为 `5` 时，`x < 5` 为假，因此它的取反必须为真。

The correct equivalent expression is:

正确的等价表达式是：

```java
x >= 5
```

A useful rule:

一个实用规律：

> Flip the direction and add or remove the equal sign.

> 改变比较方向，同时添加或删除等号。

# 5. Simplifying a Complete Expression<br>化简完整表达式

Simplify:

化简：

```java
!(x < 3 && y > 2)
```

## Step 1: Apply De Morgan’s Law<br>第一步：使用德摩根定律

```java
!(x < 3) || !(y > 2)
```

`&&` becomes `||`, and both smaller expressions are negated.

`&&` 变成 `||`，并且两个小表达式都被取反。

## Step 2: Flip the relational operators<br>第二步：对关系运算符取反

```java
x >= 3 || y <= 2
```

Therefore:

因此：

```java
!(x < 3 && y > 2)
```

is equivalent to:

等价于：

```java
x >= 3 || y <= 2
```

A reliable two-step method is:

可靠的两步方法是：

1. Move `!` inside and switch `&&` or `||`.

2. Replace every comparison with its opposite.

3. 把 `!` 移入括号，并交换 `&&` 和 `||`。

4. 把每一个比较表达式替换成它的相反条件。

# 6. Proving Equivalence with a Truth Table<br>使用真值表证明等价

A truth table lists every possible combination of Boolean values.

真值表列出布尔变量所有可能的取值组合。

To verify:

为了验证：

```java
!(A && B)
```

and:

以及：

```java
!A || !B
```

compare their results:

比较它们的结果：

| `A`     | `B`     | `A && B` | `!(A && B)` | <code>!A || !B</code> |
| ------- | ------- | -------- | ----------- | --------------------- |
| `true`  | `true`  | `true`   | `false`     | `false`               |
| `true`  | `false` | `false`  | `true`      | `true`                |
| `false` | `true`  | `false`  | `true`      | `true`                |
| `false` | `false` | `false`  | `true`      | `true`                |

The final two columns are identical in every row, so the expressions are equivalent.

最后两列在每一行都相同，因此两个表达式等价。

On an AP question, a truth table can help when an expression is difficult to simplify mentally.

在 AP 题目中，如果表达式很难直接化简，可以通过真值表逐一检查所有可能情况。

# 7. `==` Compares References; `.equals()` Compares Contents<br>`==` 比较引用，`.equals()` 比较内容

Consider the following code:

观察下面的代码：

```java
String s1 = new String("Hello");
String s2 = new String("Hello");
String s3 = s2;

System.out.println(s1 == s2);
System.out.println(s2 == s3);
System.out.println(s1.equals(s2));
```

**Output:**

```text
false
true
true
```

There are two different kinds of comparison here.

这里包含两种不同的比较。

## Reference comparison with `==`<br>使用 `==` 比较引用

```java
s1 == s2
```

asks:

判断的是：

> Do `s1` and `s2` point to the exact same object?

> `s1` 和 `s2` 是否指向完全相同的对象？

Both objects contain `"Hello"`, but they were created separately with `new`, so the result is `false`.

两个对象中都包含 `"Hello"`，但它们分别通过 `new` 创建，因此结果为 `false`。

## Alias comparison<br>别名比较

```java
String s3 = s2;
```

The reference stored in `s2` is copied into `s3`. Both variables now point to the same object.

`s2` 中保存的引用被复制给 `s3`。现在两个变量指向同一个对象。

Therefore:

因此：

```java
s2 == s3
```

is `true`.

## Content comparison with `.equals()`<br>使用 `.equals()` 比较内容

```java
s1.equals(s2)
```

compares the characters stored in the two String objects.

它比较两个 String 对象中保存的字符内容。

Because both Strings contain exactly `"Hello"`, the result is `true`.

因为两个 String 的内容都是 `"Hello"`，所以结果为 `true`。

| Comparison      | What it asks                                     |
| --------------- | ------------------------------------------------ |
| `s1 == s2`      | Do they refer to the same object?<br>是否指向同一个对象？  |
| `s1 != s2`      | Do they refer to different objects?<br>是否指向不同对象？ |
| `s1.equals(s2)` | Do they contain equal characters?<br>字符内容是否相同？   |

# 8. Tracing Aliases and Reassignments<br>追踪别名与重新赋值

What is true after this code runs?

下面的代码执行后，哪些关系成立？

```java
String s1 = new String("hi");
String s2 = new String("bye");
String s3 = new String("hi");

s2 = s1;
```

After the final assignment:

执行最后一条赋值语句后：

* `s1` points to the `"hi"` object created on the first line.

* `s2` now points to the same object as `s1`.

* `s3` points to a different object that also contains `"hi"`.

* The original `"bye"` object is no longer referenced by `s2`.

* `s1` 指向第一行创建的 `"hi"` 对象。

* `s2` 现在与 `s1` 指向同一个对象。

* `s3` 指向另一个内容同样为 `"hi"` 的对象。

* `s2` 不再指向原来的 `"bye"` 对象。

Therefore:

因此：

```java
s1 == s2
```

is `true`.

```java
s1 == s3
```

is `false`.

```java
s1.equals(s3)
```

is `true`.

The correct combined expression is:

正确的复合表达式是：

```java
s1 == s2 && s1.equals(s3)
```

When tracing object variables, update the reference after every assignment.

追踪对象变量时，每次发生赋值后，都要更新变量指向的对象。

# 9. Comparing References with `null`<br>引用与 `null` 的比较

`null` means that a reference variable does not currently point to an object.

`null` 表示引用变量当前没有指向任何对象。

```java
String message = null;
```

You can test this using `==` or `!=`:

可以使用 `==` 或 `!=` 进行检查：

```java
message == null
message != null
```

| Expression        | Meaning                                                      |
| ----------------- | ------------------------------------------------------------ |
| `message == null` | `message` does not reference an object.<br>`message` 没有指向对象。 |
| `message != null` | `message` references an object.<br>`message` 确实指向一个对象。       |

Using `== null` is correct because you are comparing the reference itself, not String contents.

这里使用 `== null` 是正确的，因为比较的是引用是否存在，而不是 String 的字符内容。

# 10. Check for `null` Before Calling a Method<br>调用方法前先检查 `null`

Consider:

观察下面的代码：

```java
String s = null;

if (s.indexOf("a") >= 0)
{
    System.out.println("Contains a");
}
```

The code compiles, but it stops at runtime with a `NullPointerException`.

代码可以通过编译，但运行时会因为 `NullPointerException` 而停止。

The variable `s` does not point to a String object, so Java cannot call `indexOf()` on it.

变量 `s` 没有指向 String 对象，因此 Java 无法在它上面调用 `indexOf()`。

Use a non-null check first:

应该先检查它是否不为 `null`：

```java
String s = null;

if (s != null && s.indexOf("a") >= 0)
{
    System.out.println("Contains a");
}
```

This code is safe because of short-circuit evaluation.

由于短路求值，这段代码是安全的。

Java evaluates:

Java 首先计算：

```java
s != null
```

The result is `false`. Because the left side of `&&` is false, Java skips:

结果为 `false`。因为 `&&` 左边为假，Java 会跳过：

```java
s.indexOf("a") >= 0
```

No method is called on the null reference, so no exception occurs.

程序不会在空引用上调用方法，因此不会发生异常。

The order matters:

条件顺序非常重要：

```java
s != null && s.indexOf("a") >= 0
```

is safe.

是安全的。

```java
s.indexOf("a") >= 0 && s != null
```

is not safe when `s` is `null`, because Java evaluates the dangerous method call first.

当 `s` 为 `null` 时，这种写法不安全，因为 Java 会先执行危险的方法调用。

# 11. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                         | Why it is wrong                                                                | Correct understanding                                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Changing `!(A && B)` into `!A && !B`.<br>把 AND 取反后仍保留 AND。      | De Morgan’s Law requires `&&` to become OR.<br>使用德摩根定律时必须交换逻辑运算符。              | <code>!(A && B)</code> becomes <code>!A || !B</code>.                    |
| Changing `!(x < 5)` into `x > 5`.<br>忽略边界值 `5`。                 | The negation must also be true when `x == 5`.<br>当 `x == 5` 时，取反结果也必须为真。       | Use `x >= 5`.                                                            |
| Negating only one part of a compound expression.<br>只对其中一个条件取反。 | Every smaller expression must be negated.<br>每个小表达式都必须取反。                      | Apply `!` to both sides after switching the operator.<br>交换运算符后，对两边都取反。  |
| Using `==` for String contents.<br>使用 `==` 比较 String 内容。        | `==` compares references.<br>`==` 比较的是引用。                                      | Use `.equals()` for contents.<br>比较内容使用 `.equals()`。                     |
| Assuming equal contents mean the same object.<br>认为内容相同就是同一个对象。 | Separate objects may contain identical characters.<br>不同对象可以保存相同字符。            | Track references separately from contents.<br>分别追踪引用和内容。                 |
| Calling a method before checking for `null`.<br>检查空引用前就调用方法。    | A method call on `null` causes a runtime exception.<br>在 `null` 上调用方法会导致运行时异常。 | Put `reference != null` first in an `&&` expression.<br>把非空检查放在 `&&` 左边。 |

# 12. Debugging Example<br>调试例子

A programmer wants to rewrite:

程序员想要改写：

```java
!(score >= 60 && submitted)
```

They write:

他们写成：

```java
score < 60 && !submitted
```

This is incorrect.

这种改写不正确。

The original expression means:

原表达式的意思是：

> It is not true that the student both passed and submitted the work.

> “学生已经及格并且提交了作业”这件事并不成立。

This can happen when either condition is false:

只要其中一个条件不成立，整个取反表达式就为真：

```java
score < 60 || !submitted
```

The programmer correctly negated both smaller conditions but forgot to change `&&` to `||`.

程序员正确地对两个小条件取反了，但忘记把 `&&` 改成 `||`。

### Correct expression

```java
score < 60 || !submitted
```

| Original part | Correct transformation                          |
| ------------- | ----------------------------------------------- |
| Outer `!`     | Move it inside both expressions.<br>把它移入两个小表达式。 |
| `&&`          | Change it to OR.<br>改为逻辑或。                      |
| `score >= 60` | Change it to `score < 60`.                      |
| `submitted`   | Change it to `!submitted`.                      |

This is a **logic error**: the incorrect code compiles, but it gives the wrong result for some inputs.

这属于**逻辑错误**：错误代码可以通过编译，但在部分输入下会产生错误结果。

# 13. Mini Practice<br>小练习

## Practice 1: Apply De Morgan’s Law<br>练习一：使用德摩根定律

Which expression is equivalent to:

下面哪个表达式与原式等价？

```java
!(x > 2 && y < 4)
```

A. `x < 2 || y > 4`
B. `x <= 2 || y >= 4`
C. `x <= 2 && y >= 4`
D. `x > 2 || y < 4`

**Answer: B**

```text
!(x > 2 && y < 4)
→ !(x > 2) || !(y < 4)
→ x <= 2 || y >= 4
```

`&&` changes to `||`, and both relational operators are negated.

`&&` 变成 `||`，并且两个比较表达式都被取反。

---

## Practice 2: Negate a Relational Expression<br>练习二：对关系表达式取反

Which expression is equivalent to:

下面哪个表达式与原式等价？

```java
!(number != 10)
```

**Answer:**

```java
number == 10
```

The opposite of “not equal” is “equal.”

“不等于”的相反条件就是“等于”。

---

## Practice 3: Trace String References<br>练习三：追踪 String 引用

What is printed?

下面的代码会输出什么？

```java
String first = new String("cat");
String second = new String("cat");
String alias = first;

System.out.println(first == second);
System.out.println(first == alias);
System.out.println(first.equals(second));
```

**Answer:**

```text
false
true
true
```

`first` and `second` are different objects with equal contents. `alias` points to the same object as `first`.

`first` 和 `second` 是内容相同的不同对象；`alias` 与 `first` 指向同一个对象。

---

## Practice 4: Safe null Check<br>练习四：安全的 null 检查

Which condition safely checks whether `text` contains `"AP"`?

下面哪个条件可以安全地判断 `text` 是否包含 `"AP"`？

A.

```java
text.indexOf("AP") >= 0 && text != null
```

B.

```java
text != null && text.indexOf("AP") >= 0
```

C.

```java
text.equals(null) || text.indexOf("AP") >= 0
```

**Answer: B**

The non-null check comes first. If `text` is `null`, short-circuit evaluation skips the method call.

非空检查位于前面。如果 `text` 为 `null`，短路求值会跳过方法调用。

---

## Practice 5: Simplify a Compound Expression<br>练习五：化简复合表达式

Simplify:

化简：

```java
!(x == 5 || y >= 7)
```

**Answer:**

```java
x != 5 && y < 7
```

Steps:

步骤：

```text
!(A || B)
→ !A && !B
```

Therefore:

因此：

```text
!(x == 5 || y >= 7)
→ !(x == 5) && !(y >= 7)
→ x != 5 && y < 7
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.6 question, check:

做 2.6 的题目之前，检查：

* Are the two expressions supposed to produce the same result for every input?
  两个表达式是否应该对所有输入产生相同结果？

* When moving `!` inside, did `&&` change to `||`?
  把 `!` 移入括号时，是否把 `&&` 改成了 `||`？

* When moving `!` inside, did `||` change to `&&`?
  把 `!` 移入括号时，是否把 `||` 改成了 `&&`？

* Did you negate every smaller expression?
  你是否对每一个小表达式都进行了取反？

* Did you preserve the boundary when negating `<`, `>`, `<=`, or `>=`?
  对关系运算符取反时，是否正确处理了边界值？

* Could a truth table verify the equivalence?
  是否可以通过真值表验证等价关系？

* Are you comparing primitive values, object references, or object contents?
  你比较的是基本类型值、对象引用，还是对象内容？

* Does `==` ask whether two references point to the same object?
  `==` 是否在判断两个引用是否指向同一个对象？

* Should String contents be compared with `.equals()`?
  String 内容是否应该使用 `.equals()` 比较？

* Did an assignment create two aliases for the same object?
  某次赋值是否让两个变量成为同一个对象的别名？

* Could the reference be `null`?
  这个引用是否可能为 `null`？

* Is the non-null check placed before the method call?
  非空检查是否位于方法调用之前？

* Will short-circuit evaluation skip an unsafe expression?
  短路求值是否会跳过可能引发错误的表达式？
