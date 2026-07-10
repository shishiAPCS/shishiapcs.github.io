---
title: "AP CSA 2.2：布尔表达式"
layout: post
categories: media
render_with_liquid: false
---

Topic 2.1 introduced algorithms that make decisions. Before Java can choose a path, it needs an expression that evaluates to either `true` or `false`.

在 2.1 中，我们学习了算法可以根据条件做出选择。在 Java 能够选择执行路径之前，它需要先计算出一个结果为 `true` 或 `false` 的表达式。

> **Java calculates each comparison and produces exactly one Boolean value: `true` or `false`.**
> **Java 会计算每一个比较表达式，并得到一个明确的布尔值：`true` 或 `false`。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.2 布尔表达式<br>Boolean Expressions

## 布尔值<br>Boolean Values

* 布尔表达式的结果只能是 `true` 或 `false`<br>A Boolean expression evaluates to `true` or `false`
* 结果可以保存在 `boolean` 变量中<br>The result can be stored in a `boolean` variable

## 相等运算符<br>Equality Operators

* `==`：判断是否相等<br>Tests whether two values are equal
* `!=`：判断是否不相等<br>Tests whether two values are different
* `=`：赋值，不是比较<br>Assignment, not comparison

## 基本类型比较<br>Primitive Comparison

* `==` 比较实际保存的值<br>`==` compares the actual primitive values
* `15 == 15` 的结果是 `true`<br>`15 == 15` evaluates to `true`

## 引用类型比较<br>Reference Comparison

* `==` 判断两个变量是否指向同一个对象<br>`==` checks whether two variables refer to the same object
* 内容相同不一定是同一个对象<br>Equal contents do not necessarily mean the same object
* 比较 String 内容使用 `.equals()`<br>Use `.equals()` to compare String contents

## 关系运算符<br>Relational Operators

* `<`、`>`、`<=`、`>=` 比较数值<br>Compare numeric values
* 算术表达式会先计算，再进行比较<br>Arithmetic expressions are evaluated before comparison
* `<=` 表示小于或等于<br>`<=` means less than or equal to

## 余数运算符<br>Remainder Operator

* `num % 2 == 0`：判断偶数<br>Tests whether `num` is even
* `num % 2 != 0`：判断奇数<br>Tests whether `num` is odd
* `num % x == 0`：判断能否被 `x` 整除<br>Tests whether `num` is divisible by `x`

## AP 常见陷阱<br>Common AP Traps

* 把 `=` 写成 `==`，或把 `==` 写成 `=`<br>Confusing assignment with comparison
* 使用 `=>` 或 `=<`<br>Writing invalid operators such as `=>` or `=<`
* 用 `==` 比较 String 内容<br>Using `==` to compare String contents
* 用 `num % 2 == 1` 判断所有奇数<br>Using `num % 2 == 1` for every odd integer

</script>
</div>
</div>

# 1. Evaluate Each Side First<br>先分别计算两边

Consider the following AP-style statement:

观察下面这条 AP 风格的语句：

```java
boolean result = (5 % 3 == 0) == (3 > 5);
```

What is the value of `result`?

`result` 的值是什么？

**Answer: `true`**

Break the expression into smaller parts:

把表达式拆开计算：

```text
5 % 3 → 2
2 == 0 → false

3 > 5 → false
```

The final comparison is:

最后进行的比较是：

```java
false == false
```

Two equal Boolean values produce `true`.

两个相同的布尔值进行相等比较，结果是 `true`。

```text
result → true
```

For a longer Boolean expression, do not try to understand everything at once. Evaluate each smaller comparison first.

遇到较长的布尔表达式时，不要一次性判断整个表达式。先分别计算每一个较小的比较表达式。

# 2. Boolean Expressions Produce `true` or `false`<br>布尔表达式产生 `true` 或 `false`

A **Boolean expression** is an expression whose final value is either `true` or `false`.

**布尔表达式**是最终结果为 `true` 或 `false` 的表达式。

```java
int score = 87;

boolean passed = score >= 60;
boolean perfect = score == 100;

System.out.println(passed);
System.out.println(perfect);
```

```text
true
false
```

The comparison `score >= 60` is calculated first. Its result, `true`, is then stored in the variable `passed`.

Java 先计算 `score >= 60`，得到 `true`，再把这个布尔值保存在变量 `passed` 中。

The following operators produce Boolean values:

下面这些运算符都会产生布尔值：

| Operator | Meaning                           | Example  | Result  |
| -------- | --------------------------------- | -------- | ------- |
| `==`     | equal to<br>等于                    | `7 == 7` | `true`  |
| `!=`     | not equal to<br>不等于               | `7 != 7` | `false` |
| `<`      | less than<br>小于                   | `4 < 9`  | `true`  |
| `>`      | greater than<br>大于                | `4 > 9`  | `false` |
| `<=`     | less than or equal to<br>小于或等于    | `4 <= 4` | `true`  |
| `>=`     | greater than or equal to<br>大于或等于 | `4 >= 5` | `false` |

# 3. `=` Assigns; `==` Compares<br>`=` 用于赋值，`==` 用于比较

What is printed?

下面的代码会输出什么？

```java
int age = 15;
int year = 14;

System.out.println(age == year);
System.out.println(age != year);
```

**Answer:**

```text
false
true
```

`age == year` asks whether the two values are equal. It does not change either variable.

`age == year` 判断两个值是否相等，不会改变任何变量。

There is an important difference between `=` and `==`:

`=` 和 `==` 有一个非常重要的区别：

```java
year = 15;
```

This is **assignment**. It changes the value of `year`.

这是**赋值**，会把 `year` 的值改成 `15`。

```java
age == year
```

This is **comparison**. It asks a question and produces `true` or `false`.

这是**比较**。它会判断两个值是否相等，并产生 `true` 或 `false`。

After the assignment:

完成赋值后：

```java
year = 15;
boolean sameAge = age == year;

System.out.println(sameAge);
```

```text
true
```

# 4. Primitive Values and Object References<br>基本类型值与对象引用

For primitive types such as `int`, `double`, and `boolean`, `==` compares the actual stored values.

对于 `int`、`double` 和 `boolean` 等基本类型，`==` 比较的是变量中实际保存的值。

```java
int a = 20;
int b = 20;

System.out.println(a == b);
```

```text
true
```

Both variables contain the value `20`.

两个变量中都保存着数值 `20`。

For reference types, `==` asks a different question:

对于引用类型，`==` 判断的是另一个问题：

> Do these two variables point to the exact same object?

> 这两个变量是否指向同一个对象？

Consider this example:

观察下面的例子：

```java
String first = new String("Java");
String second = new String("Java");
String alias = first;

System.out.println(first == second);
System.out.println(first == alias);
System.out.println(first.equals(second));
```

```text
false
true
true
```

`first` and `second` contain the same text, but they refer to two different objects.

`first` 和 `second` 的文字内容相同，但它们指向两个不同的对象。

`alias` was assigned the reference stored in `first`, so both variables point to the same object.

`alias` 得到了 `first` 中保存的引用，因此两个变量指向同一个对象。

| Expression             | Question being asked                    | Result  |
| ---------------------- | --------------------------------------- | ------- |
| `first == second`      | Same object?<br>是否为同一个对象？               | `false` |
| `first == alias`       | Same object?<br>是否为同一个对象？               | `true`  |
| `first.equals(second)` | Same String contents?<br>String 内容是否相同？ | `true`  |

For String contents, use `.equals()`, not `==`.

比较 String 内容时，应该使用 `.equals()`，而不是 `==`。

# 5. Relational Operators Compare Numeric Values<br>关系运算符比较数值

The relational operators `<`, `>`, `<=`, and `>=` compare numeric values or numeric expressions.

关系运算符 `<`、`>`、`<=` 和 `>=` 用于比较数值或数值表达式。

```java
int x = 8;
int y = 5;

System.out.println(x > y);
System.out.println(x <= y);
System.out.println(x - 3 == y);
```

```text
true
false
true
```

For the final expression, Java calculates the arithmetic first:

对于最后一个表达式，Java 会先进行算术运算：

```text
x - 3
8 - 3
5
```

It then performs the comparison:

然后再进行比较：

```text
5 == 5 → true
```

The operator symbols must appear in the correct order:

运算符的符号顺序必须正确：

| Valid | Meaning                           | Invalid                           |
| ----- | --------------------------------- | --------------------------------- |
| `<=`  | less than or equal to<br>小于或等于    | `=<`                              |
| `>=`  | greater than or equal to<br>大于或等于 | `=>`                              |
| `==`  | equal to<br>等于                    | `=` when a comparison is required |

Java does not use `<`, `>`, `<=`, or `>=` to compare String contents.

Java 不使用 `<`、`>`、`<=` 或 `>=` 比较 String 内容。

Use `.equals()` to test whether two Strings have the same contents. Use `compareTo()` when their alphabetical or character order must be compared.

判断两个 String 的内容是否相同，应使用 `.equals()`；需要比较字符顺序时，应使用 `compareTo()`。

# 6. Use `%` to Test Divisibility<br>使用 `%` 判断整除关系

The remainder operator `%` gives the remainder after integer division.

余数运算符 `%` 会得到整数除法后的余数。

```java
System.out.println(17 % 5);
```

```text
2
```

Because:

因为：

```text
17 = 5 × 3 + 2
```

This makes `%` useful in Boolean expressions.

因此，`%` 经常用于构造布尔表达式。

## Testing whether a number is even<br>判断偶数

```java
num % 2 == 0
```

An even number has no remainder when divided by `2`.

偶数除以 `2` 后，余数为 `0`。

```java
int num = 18;
boolean isEven = num % 2 == 0;

System.out.println(isEven);
```

```text
true
```

## Testing whether a number is odd<br>判断奇数

```java
num % 2 != 0
```

An odd number has a nonzero remainder when divided by `2`.

奇数除以 `2` 后，余数不为 `0`。

Use `!= 0`, not `== 1`.

应该使用 `!= 0`，不要使用 `== 1`。

```java
int num = -7;

System.out.println(num % 2);
System.out.println(num % 2 != 0);
```

```text
-1
true
```

In Java, the remainder of `-7 / 2` is `-1`, not `1`. Therefore, this test does not work for every odd integer:

在 Java 中，`-7 / 2` 的余数是 `-1`，而不是 `1`。因此，下面的写法不能正确判断所有奇数：

```java
num % 2 == 1
```

The reliable test is:

可靠的写法是：

```java
num % 2 != 0
```

## Testing divisibility<br>判断能否整除

```java
num % divisor == 0
```

For example:

例如：

```java
int num = 21;

System.out.println(num % 3 == 0);
System.out.println(num % 4 == 0);
```

```text
true
false
```

`21` is divisible by `3`, but it is not divisible by `4`.

`21` 能被 `3` 整除，但不能被 `4` 整除。

# 7. Common Mistakes and Debugging<br>常见错误与调试

## Bug 1: Incorrect operator order<br>错误一：运算符顺序错误

```java
int score = 85;
boolean passed = score => 60;
```

This code does not compile because `=>` is not a Java operator.

这段代码无法通过编译，因为 `=>` 不是合法的 Java 运算符。

### Fixed code

```java
int score = 85;
boolean passed = score >= 60;
```

The correct operator follows the spoken order: “greater than or equal to.”

正确的运算符顺序与英文表达一致：greater than or equal to。

---

## Bug 2: Assignment instead of comparison<br>错误二：把赋值当成比较

```java
int score = 85;
boolean perfect = (score = 100);
```

This code does not compile. `score = 100` performs an assignment and produces an `int` value, not a Boolean value.

这段代码无法通过编译。`score = 100` 执行的是赋值，产生的是一个 `int` 值，而不是布尔值。

### Fixed code

```java
int score = 85;
boolean perfect = (score == 100);
```

---

## Bug 3: Incorrect odd-number test<br>错误三：奇数判断不完整

```java
int num = -9;
boolean isOdd = num % 2 == 1;

System.out.println(isOdd);
```

```text
false
```

The code compiles and runs, but the answer is wrong. This is a **logic error**.

代码可以编译并运行，但结果错误。这属于**逻辑错误**。

### Fixed code

```java
int num = -9;
boolean isOdd = num % 2 != 0;

System.out.println(isOdd);
```

```text
true
```

| Mistake                     | Error type                                           | Correction                                                    |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------- |
| `score => 60`               | Compile-time error<br>编译错误                           | `score >= 60`                                                 |
| `boolean same = (x = 5);`   | Compile-time error<br>编译错误                           | `boolean same = (x == 5);`                                    |
| `"cat" < "dog"`             | Compile-time error<br>编译错误                           | Use `compareTo()` for String order.<br>使用 `compareTo()` 比较顺序。 |
| `num % 2 == 1`              | Logic error for negative odd numbers<br>判断负奇数时产生逻辑错误 | `num % 2 != 0`                                                |
| `str1 == str2` for contents | Tests references, not contents<br>比较的是引用，不是内容        | `str1.equals(str2)`                                           |

# 8. Mini Practice<br>小练习

## Practice 1: Output Tracing<br>练习一：输出追踪

What is printed?

下面的代码会输出什么？

```java
int a = 8;
int b = 3;

System.out.println(a % b == 2);
System.out.println(a <= b);
```

**Answer:**

```text
true
false
```

`8 % 3` is `2`, so the first comparison is true. `8 <= 3` is false.

`8 % 3` 的结果是 `2`，因此第一个比较为真；`8 <= 3` 为假。

---

## Practice 2: Compare Boolean Results<br>练习二：比较布尔结果

What is the value of `result`?

`result` 的值是什么？

```java
boolean result = (12 % 4 == 0) == (7 < 2);
```

**Answer: `false`**

```text
12 % 4 == 0 → true
7 < 2 → false
true == false → false
```

The two Boolean results are different.

两个布尔结果不同，因此最终结果为 `false`。

---

## Practice 3: Choose the Valid Comparison<br>练习三：选择合法的比较

Assume `x` is an `int`. Which expression correctly tests whether `x` equals `5`?

假设 `x` 是一个 `int`。下面哪个表达式能正确判断 `x` 是否等于 `5`？

A. `x = 5`
B. `x == 5`
C. `x => 5`
D. `x =< 5`

**Answer: B**

`==` tests equality. `=` performs assignment.

`==` 用于判断相等，`=` 用于赋值。

---

## Practice 4: Reference Equality<br>练习四：引用比较

Consider the following code:

观察下面的代码：

```java
String p = new String("cat");
String q = p;
String r = new String("cat");
```

Which expressions evaluate to `true`?

哪些表达式的结果为 `true`？

A. `p == q`
B. `p == r`
C. `p.equals(r)`

**Answer: A and C**

`p` and `q` point to the same object. `p` and `r` are different objects with equal contents.

`p` 和 `q` 指向同一个对象；`p` 和 `r` 指向不同对象，但它们的内容相同。

---

## Practice 5: Fix the Code<br>练习五：修改代码

The following code is supposed to test whether `number` is odd:

下面的代码原本应该判断 `number` 是否为奇数：

```java
boolean odd = number % 2 == 1;
```

Why should it be changed?

为什么应该修改这段代码？

**Answer:**

```java
boolean odd = number % 2 != 0;
```

Negative odd integers have a remainder of `-1` when divided by `2`, so testing for a nonzero remainder works for both positive and negative odd integers.

负奇数除以 `2` 后的余数是 `-1`。因此，判断余数是否不为 `0`，才能同时适用于正奇数和负奇数。

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.2 question, check:

做 2.2 的题目之前，检查：

* Does the complete expression evaluate to `true` or `false`?
  整个表达式的最终结果是否为 `true` 或 `false`？

* Did you calculate the arithmetic expressions before comparing them?
  你是否先完成了算术运算，再进行比较？

* Are you using `==` for comparison instead of `=`?
  你是否使用 `==` 进行比较，而不是使用 `=`？

* Are `<=` and `>=` written in the correct order?
  `<=` 和 `>=` 的符号顺序是否正确？

* Are you comparing primitive values or object references?
  你比较的是基本类型的实际值，还是对象引用？

* For reference types, do the variables point to the same object?
  对于引用类型，两个变量是否指向同一个对象？

* For String contents, should you use `.equals()` instead of `==`?
  比较 String 内容时，是否应该使用 `.equals()` 而不是 `==`？

* For even numbers, are you checking `num % 2 == 0`?
  判断偶数时，是否使用了 `num % 2 == 0`？

* For odd numbers, are you checking `num % 2 != 0`?
  判断奇数时，是否使用了 `num % 2 != 0`？

* For divisibility, does the remainder need to be `0`?
  判断整除时，余数是否应该为 `0`？
