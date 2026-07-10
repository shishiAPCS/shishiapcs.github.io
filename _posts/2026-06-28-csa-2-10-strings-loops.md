---
title: "AP CSA 2.10：实现字符串算法"
layout: post
categories: media
render_with_liquid: false
---

Loops can traverse a String one character or substring at a time. In this lesson, you will use `length()`, `substring()`, and `indexOf()` to count matching substrings, reverse a String, and replace repeated text.

循环可以逐个访问 String 中的字符或子字符串。本节课将使用 `length()`、`substring()` 和 `indexOf()` 来统计符合条件的子字符串、反转字符串，以及替换重复出现的文本。

> **A String loop visits valid indexes, extracts a substring, and uses that substring to update a result.**
> **字符串循环会访问合法索引、提取子字符串，再用它更新最终结果。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 2.10 实现字符串算法<br>Implementing String Algorithms

## String 索引<br>String Indexes

* 第一个字符的索引是 `0`<br>The first character is at index `0`
* 最后一个字符的索引是 `length() - 1`<br>The last character is at `length() - 1`
* 合法索引范围是 `0` 到 `length() - 1`<br>Valid indexes run from `0` through `length() - 1`

## 常用方法<br>Essential Methods

* `length()`：返回字符数量<br>Returns the number of characters
* `indexOf(str)`：返回第一次出现的位置，找不到时返回 `-1`<br>Returns the first index or `-1`
* `substring(i, i + 1)`：取得索引 `i` 处的单个字符<br>Gets the character at index `i`
* `substring(i)`：取得从 `i` 到结尾的内容<br>Gets the text from `i` to the end

## 遍历字符串<br>String Traversal

* 使用 `for` 循环访问每个索引<br>Use a `for` loop to visit every index
* 常见条件：`i < text.length()`<br>Common condition: `i < text.length()`
* 每次处理一个字符或固定长度的子字符串<br>Process one character or substring at a time

## 统计符合条件的子字符串<br>Counting Matching Substrings

* 循环前初始化 `count = 0`<br>Initialize the counter before the loop
* 当前子字符串符合条件时执行 `count++`<br>Increment when the substring matches
* 起始索引必须保证结束索引合法<br>The starting index must keep the ending index valid

## 反转字符串<br>Reversing a String

* 从空字符串开始<br>Start with an empty String
* 逐个取得原字符串中的字符<br>Extract one character at a time
* 把当前字符放到结果前面<br>Place the current character before the result

## 查找与替换<br>Finding and Replacing

* `indexOf()` 找到下一次出现的位置<br>Find the next occurrence
* `substring()` 保留目标前后的内容<br>Keep the text before and after the target
* 每次替换后更新原字符串<br>Update the String after each replacement

## AP 考试陷阱<br>Common AP Traps

* 从索引 `1` 开始，漏掉第一个字符<br>Starting at `1` skips the first character
* 使用 `i <= text.length()` 导致越界<br>Using `<=` causes an invalid index
* 混淆 `substring` 的结束索引规则<br>Forgetting that the ending index is excluded
* 查找循环中没有改变字符串，导致无限循环<br>Not changing the String can cause an infinite loop

</script>
</div>
</div>

# 1. Trace How the Result Is Built<br>追踪结果如何形成

What is printed?

下面的代码会输出什么？

```java
String word = "CODE";
String result = "";

for (int i = 0; i < word.length(); i++)
{
    String letter = word.substring(i, i + 1);
    result = letter + result;
}

System.out.println(result);
```

**Answer:**

```text
EDOC
```

Trace the value of `result` after each iteration:

逐次追踪 `result` 的值：

| `i` | `letter` | `result` after the iteration |
| --: | -------- | ---------------------------- |
| `0` | `"C"`    | `"C"`                        |
| `1` | `"O"`    | `"OC"`                       |
| `2` | `"D"`    | `"DOC"`                      |
| `3` | `"E"`    | `"EDOC"`                     |

The current letter is placed **before** the existing result:

当前字符被放在已有结果的**前面**：

```java
result = letter + result;
```

That causes the String to be built in reverse order.

因此，新的 String 会按照相反顺序形成。

# 2. String Indexes and Essential Methods<br>String 索引与常用方法

Consider:

观察下面的 String：

```java
String text = "Java";
```

Its indexes are:

索引如下：

```text
Character:  J  a  v  a
Index:      0  1  2  3
```

The String contains four characters:

这个 String 包含四个字符：

```java
text.length()
```

```text
4
```

The final valid index is:

最后一个合法索引是：

```java
text.length() - 1
```

```text
3
```

The main String methods used in this lesson are:

本节课使用的主要 String 方法如下：

| Method call            | Result | AP meaning                                                            |
| ---------------------- | ------ | --------------------------------------------------------------------- |
| `text.length()`        | `4`    | Number of characters.<br>字符数量。                                        |
| `text.indexOf("a")`    | `1`    | Index of the first occurrence.<br>第一次出现的位置。                           |
| `text.indexOf("x")`    | `-1`   | The target was not found.<br>没有找到目标。                                  |
| `text.substring(1, 3)` | `"av"` | Includes index `1` but stops before index `3`.<br>包含索引 `1`，不包含索引 `3`。 |
| `text.substring(2)`    | `"va"` | From index `2` to the end.<br>从索引 `2` 到结尾。                            |
| `text.substring(0, 1)` | `"J"`  | One-character String at index `0`.<br>索引 `0` 处的单字符 String。            |

Remember:

记住：

```java
text.substring(i, i + 1)
```

returns the one-character String at index `i`.

会返回索引 `i` 处的单字符 String。

# 3. Traverse Every Character with a `for` Loop<br>使用 `for` 循环遍历每个字符

What is printed?

下面的代码会输出什么？

```java
String word = "loop";

for (int i = 0; i < word.length(); i++)
{
    System.out.print(word.substring(i, i + 1) + " ");
}
```

**Answer:**

```text
l o o p
```

The loop variable takes these values:

循环变量依次为：

```text
0 1 2 3
```

These are exactly the valid indexes of `"loop"`.

这些正好是 `"loop"` 的全部合法索引。

The standard traversal pattern is:

标准遍历写法是：

```java
for (int i = 0; i < text.length(); i++)
{
    String current = text.substring(i, i + 1);
    // Process current
}
```

The loop starts at `0` because the first character is at index `0`.

循环从 `0` 开始，因为第一个字符的索引是 `0`。

The condition uses `<`, not `<=`, because `text.length()` is not a valid character index.

条件使用 `<`，而不是 `<=`，因为 `text.length()` 不是合法字符索引。

# 4. Count Substrings That Meet a Criterion<br>统计符合条件的子字符串

The following code counts how many times `"th"` appears in `"that thing"`.

下面的代码统计 `"th"` 在 `"that thing"` 中出现了多少次。

```java
String text = "that thing";
int count = 0;

for (int i = 0; i < text.length() - 1; i++)
{
    String pair = text.substring(i, i + 2);

    if (pair.equals("th"))
    {
        count++;
    }
}

System.out.println(count);
```

**Output:**

```text
2
```

The matches begin at indexes `0` and `5`.

两个匹配项分别从索引 `0` 和 `5` 开始。

Because the code extracts two characters:

因为代码每次提取两个字符：

```java
text.substring(i, i + 2)
```

the loop must stop before `i + 2` becomes greater than `text.length()`.

所以循环必须在 `i + 2` 超过 `text.length()` 之前停止。

For a substring of length `2`, a safe loop condition is:

对于长度为 `2` 的子字符串，安全的循环条件是：

```java
i < text.length() - 1
```

The general idea is:

一般规律是：

```text
last valid starting index = text.length() - substring length
```

# 5. Build a Reversed String<br>构建反转后的字符串

A String cannot be changed character by character. Instead, the algorithm builds a new String.

String 不能直接逐个字符修改。因此，算法需要构建一个新的 String。

```java
String original = "Hello";
String reversed = "";

for (int i = 0; i < original.length(); i++)
{
    String letter = original.substring(i, i + 1);
    reversed = letter + reversed;
}

System.out.println(reversed);
```

```text
olleH
```

The order of concatenation matters.

拼接顺序非常重要。

## Add the letter before the result<br>把字符放在结果前面

```java
reversed = letter + reversed;
```

This reverses the String.

这样会反转 String。

## Add the letter after the result<br>把字符放在结果后面

```java
reversed = reversed + letter;
```

This copies the characters in their original order.

这样只会按照原顺序复制字符。

| Update statement            | Result for `"cat"` |
| --------------------------- | ------------------ |
| `result = letter + result;` | `"tac"`            |
| `result = result + letter;` | `"cat"`            |

# 6. Find and Replace with `while` and `indexOf()`<br>使用 `while` 和 `indexOf()` 查找替换

A `while` loop is useful when you do not know how many times the target appears.

当我们不知道目标会出现多少次时，可以使用 `while` 循环。

The following code replaces every `"1"` with `"l"`:

下面的代码会把所有 `"1"` 替换成 `"l"`：

```java
String message = "1ife is 1ong";

while (message.indexOf("1") >= 0)
{
    int index = message.indexOf("1");

    String firstPart = message.substring(0, index);
    String lastPart = message.substring(index + 1);

    message = firstPart + "l" + lastPart;
}

System.out.println(message);
```

```text
life is long
```

Each iteration follows the same steps:

每次迭代都遵循相同过程：

1. Find the next target with `indexOf()`.
   使用 `indexOf()` 找到下一个目标。

2. Keep the part before the target.
   保留目标前面的内容。

3. Keep the part after the target.
   保留目标后面的内容。

4. Build and save a new String.
   构建并保存一个新的 String。

The condition:

条件：

```java
message.indexOf("1") >= 0
```

means that at least one `"1"` still exists.

表示 String 中仍然存在至少一个 `"1"`。

The loop stops when:

当下面的结果出现时，循环停止：

```java
message.indexOf("1")
```

returns `-1`.

返回 `-1`。

# 7. Choosing Between `for` and `while`<br>选择 `for` 还是 `while`

Both loop types can process Strings, but they are commonly used for different situations.

两种循环都可以处理 String，但通常适用于不同情况。

| Goal                                                           | Useful loop | Reason                                                                |
| -------------------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| Visit every character.<br>访问每一个字符。                             | `for`       | The indexes are known: `0` through `length() - 1`.<br>索引范围明确。         |
| Count characters or fixed-length substrings.<br>统计字符或固定长度子字符串。 | `for`       | The algorithm checks each possible starting index.<br>算法检查每一个可能的起始位置。 |
| Reverse a String.<br>反转字符串。                                    | `for`       | Every character is visited once.<br>每个字符访问一次。                         |
| Replace all occurrences of a target.<br>替换所有目标。                | `while`     | The number of occurrences may be unknown.<br>目标出现次数可能未知。              |
| Continue while a substring still exists.<br>只要子字符串存在就继续。       | `while`     | `indexOf()` controls when the loop stops.<br>由 `indexOf()` 决定何时停止。    |

The AP exam focuses on whether the loop correctly processes the required indexes and produces the correct result.

AP 考试重点关注循环是否正确处理所需索引，以及是否产生正确结果。

# 8. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                  | Why it is wrong                                                                           | Correct understanding                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Starting at `i = 1`.<br>从 `i = 1` 开始。                                    | The character at index `0` is skipped.<br>索引 `0` 处的字符被漏掉。                                 | Start at `0` when visiting every character.<br>遍历所有字符时从 `0` 开始。         |
| Using `i <= text.length()`.<br>使用 `i <= text.length()`。                  | `text.length()` is outside the valid index range.<br>`text.length()` 不在合法索引范围内。           | Use `i < text.length()`.<br>使用 `i < text.length()`。                     |
| Using `substring(i, i)` for one character.<br>使用 `substring(i, i)` 取得字符。 | The starting and ending indexes are the same, so the result is empty.<br>起点和终点相同，结果为空字符串。 | Use `substring(i, i + 1)`.<br>使用 `substring(i, i + 1)`。                 |
| Using `.equals()` on individual indexes.<br>试图直接对索引使用 `.equals()`。       | An index is an `int`, not a String.<br>索引是 `int`，不是 String。                               | Extract a substring first, then compare it.<br>先提取子字符串，再进行比较。           |
| Appending instead of prepending when reversing.<br>反转时把字符加在结果后面。         | The original character order is preserved.<br>字符仍保持原顺序。                                   | Use `letter + reversed`.<br>把当前字符放在结果前面。                                |
| Finding a target without changing the String.<br>找到目标后没有修改 String。       | `indexOf()` may keep finding the same occurrence forever.<br>`indexOf()` 可能不断找到同一个位置。     | Replace, remove, or otherwise move past the target.<br>替换、删除或跳过已经找到的目标。 |

# 9. Debugging String Loops<br>调试字符串循环

The following code is intended to print every character in `"AP"`:

下面的代码原本应该输出 `"AP"` 中的每个字符：

```java
String text = "AP";

for (int i = 0; i <= text.length(); i++)
{
    System.out.println(text.substring(i, i + 1));
}
```

The code prints:

代码会先输出：

```text
A
P
```

It then stops with a `StringIndexOutOfBoundsException`.

之后会因为 `StringIndexOutOfBoundsException` 而停止。

When `i` becomes `2`:

当 `i` 变成 `2` 时：

```java
text.substring(2, 3)
```

is invalid because the String contains only indexes `0` and `1`.

这个调用不合法，因为 String 只有索引 `0` 和 `1`。

### Fixed code

```java
String text = "AP";

for (int i = 0; i < text.length(); i++)
{
    System.out.println(text.substring(i, i + 1));
}
```

| Problem                                               | Error type                          | Fix                                                                |
| ----------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------ |
| Using `i <= text.length()`                            | Runtime error<br>运行时错误              | Use `i < text.length()`.<br>使用严格小于。                                |
| Using `substring(i, i + 1)` when `i == text.length()` | Invalid substring range<br>非法子字符串范围 | Stop at index `text.length() - 1`.<br>最后处理到索引 `text.length() - 1`。 |

The code compiles because the syntax and types are valid. The error appears only when Java tries to use an invalid substring range.

这段代码能够编译，因为语法和类型都正确。只有当 Java 实际使用非法范围提取子字符串时，错误才会出现。

# 10. Mini Practice<br>小练习

## Practice 1: Output Tracing<br>练习一：输出追踪

What is printed?

下面的代码会输出什么？

```java
String text = "ABC";

for (int i = 0; i < text.length(); i++)
{
    System.out.print(text.substring(i, i + 1) + i);
}
```

**Answer:**

```text
A0B1C2
```

Each character is followed by its index.

每个字符后面都会输出它的索引。

---

## Practice 2: Count Matching Characters<br>练习二：统计符合条件的字符

What is the final value of `count`?

`count` 的最终值是多少？

```java
String word = "banana";
int count = 0;

for (int i = 0; i < word.length(); i++)
{
    if (word.substring(i, i + 1).equals("a"))
    {
        count++;
    }
}
```

**Answer: `3`**

The letter `"a"` appears at indexes `1`, `3`, and `5`.

字母 `"a"` 出现在索引 `1`、`3` 和 `5`。

---

## Practice 3: Choose the Valid Loop Condition<br>练习三：选择合法的循环条件

Which loop header safely visits every character in `text`?

下面哪个循环头可以安全地访问 `text` 中的所有字符？

A.

```java
for (int i = 0; i <= text.length(); i++)
```

B.

```java
for (int i = 1; i < text.length(); i++)
```

C.

```java
for (int i = 0; i < text.length(); i++)
```

D.

```java
for (int i = 0; i < text.length() - 1; i++)
```

**Answer: C**

It begins at the first valid index and stops after the final valid index.

它从第一个合法索引开始，并在处理完最后一个合法索引后停止。

---

## Practice 4: Reverse a String<br>练习四：反转字符串

What is printed?

下面的代码会输出什么？

```java
String text = "dog";
String result = "";

for (int i = 0; i < text.length(); i++)
{
    String current = text.substring(i, i + 1);
    result = current + result;
}

System.out.println(result);
```

**Answer:**

```text
god
```

Each new character is placed before the characters already stored in `result`.

每个新字符都被放在 `result` 已有内容的前面。

---

## Practice 5: Fix the Replacement Loop<br>练习五：修复替换循环

Why does this loop never stop?

为什么下面的循环不会停止？

```java
String text = "banana";

while (text.indexOf("a") >= 0)
{
    int index = text.indexOf("a");
    System.out.println(index);
}
```

**Answer:** The loop finds `"a"`, but it never changes `text`.

**答案：**循环找到了 `"a"`，但从未修改 `text`。

`indexOf("a")` keeps returning the same index.

`indexOf("a")` 会不断返回同一个索引。

One possible fix is to remove the occurrence:

一种修复方式是删除找到的字符：

```java
String text = "banana";

while (text.indexOf("a") >= 0)
{
    int index = text.indexOf("a");
    text = text.substring(0, index) + text.substring(index + 1);
}

System.out.println(text);
```

```text
bnn
```

# Quick Checklist<br>快速检查清单

Before answering a Topic 2.10 question, check:

做 2.10 的题目之前，检查：

* What is the String’s `length()`?
  String 的 `length()` 是多少？

* What are the valid indexes?
  合法索引有哪些？

* Does the loop start at index `0`?
  循环是否从索引 `0` 开始？

* Does the loop stop before `text.length()`?
  循环是否在 `text.length()` 之前停止？

* What substring does each iteration extract?
  每次迭代会提取哪个子字符串？

* Is the ending index excluded from `substring()`?
  `substring()` 是否不包含结束索引？

* For one character, are you using `substring(i, i + 1)`?
  取得一个字符时，是否使用了 `substring(i, i + 1)`？

* For a longer substring, is the ending index still valid?
  提取较长子字符串时，结束索引是否合法？

* Is `indexOf()` returning an index or `-1`?
  `indexOf()` 返回的是索引还是 `-1`？

* Is a counter updated only when the substring matches?
  是否只在子字符串符合条件时更新计数器？

* When reversing, is the current character placed before the result?
  反转时，当前字符是否被放在结果前面？

* In a find-and-replace loop, does each iteration change the String?
  在查找替换循环中，每次迭代是否都会修改 String？

* Could the loop skip the first character?
  循环是否会漏掉第一个字符？

* Could a substring call go beyond `text.length()`?
  `substring()` 是否可能超过 `text.length()`？

* Could the loop become infinite because the target never changes?
  目标没有改变时，循环是否可能成为无限循环？
