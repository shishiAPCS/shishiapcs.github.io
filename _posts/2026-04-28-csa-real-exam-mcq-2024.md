---
title:  "CSA 2024年真考 MCQ 重点题型和解析"
mathjax: true
layout: post
categories: media
---


## **Q1**

```java
public class SomeMethods
{
    public static String testMethod(int first, int second)
    {
        return "1";
    }

    public static String testMethod(int first, String second)
    {
        return "2";
    }

    public static String testMethod(int first)
    {
        return "3";
    }

    public static int testMethod(int value)
    {
        return 4;
    }
}
```

```java
System.out.println(SomeMethods.testMethod(1234));
```

**What is printed?**

(A) 1
(B) 2
(C) 3
(D) 4
(E) Nothing is printed because the class does not compile.

---

## **Q2**

```java
int[] arr = {4, 2, 2, 3, 1};
int num = 0;

for (int k = 0; k < arr.length; k++)
{
    num = arr[num];
}
```

**After execution, what is the value of `num`?**

(A) 0
(B) 1
(C) 2
(D) 3
(E) 4

---

## **Q3**

```java
for (int j = 0; j <= 3; j++)
{
    for (int k = 0; k < 3; k++)
    {
        System.out.print(j * k + " ");
    }
    System.out.println();
}
```

**What is printed?**



---

## **Q4**

```java
public class Container
{
    private static int maxInitialOrder = 0;
    private int numOfItems;

    public Container(int n)
    {
        numOfItems = n;
        if (n > maxInitialOrder)
        {
            maxInitialOrder = n;
        }
    }

    public void addItems(int more)
    {
        numOfItems += more;
    }

    public double calcShippingCost()
    {
        if (numOfItems == maxInitialOrder)
        {
            return 0.0;
        }
        else
        {
            return numOfItems * 0.5;
        }
    }
}
```

```java
Container c1 = new Container(10);
Container c2 = new Container(6);
c1.addItems(2);
c2.addItems(4);
double cost = c2.calcShippingCost();
```

**What is the value of `cost`?**

(A) 0.0
(B) 2.0
(C) 3.0
(D) 5.0
(E) 6.0

---

## **Q5**

```java
public static int alpha(int x)
{
    x = x * 2;
    System.out.print(x);
    return x + 1;
}

public static int beta(int y)
{
    System.out.print(y);
    return y + 6;
}
```

```java
int w = 1;

if (alpha(w) > 0 || beta(w) < 0)
{
    System.out.print(alpha(w));
}
else
{
    System.out.print(beta(w));
}
```

**What is printed?**



---

## **Q6**

```java
/** Precondition: a.length() == 1; b.length() == 1 */
public static String replaceStr(String orig, String a, String b)
{
    int position = orig.indexOf(a);

    while (position != -1)
    {
        orig = orig.substring(0, position) + b +
               orig.substring(position + 1);

        position = orig.indexOf(a);
    }

    return orig;
}
```

**Which statement can show that `replaceStr` does not always work as intended?**

(A) `replaceStr("", "C", "D")`
(B) `replaceStr("AB", "C", "D")`
(C) `replaceStr("C", "C", "D")`
(D) `replaceStr("CCC", "C", "D")`
(E) `replaceStr("CCD", "C", "C")`

---

## **Q7**

**Which of the following Boolean expressions is equivalent to:**

> number is positive OR is between -10 and -5 (inclusive)

(A) `(-10 <= number <= -5) || number > 0`
(B) `(-10 <= number || number <= -5) || number > 0`
(C) `(-10 <= number || number <= -5) && number > 0`
(D) `(-10 <= number && number <= -5) || number > 0`
(E) `(-10 <= number && number <= -5) && number > 0`

---

## **Q8**

```java
public static void print2DArray(int[][] table)
{
    for (int a = 0; a < table.length; a++)
    {
        for (int b = 0; b < table[0].length; b++)
        {
            System.out.print(table[b][a] + " ");
        }
        System.out.println();
    }
}
```

**The method does not always work as intended. In some cases it throws an `ArrayIndexOutOfBoundsException`. Which of the following identifies the error?**

(A) Variables `a` and `b` are incorrectly initialized.
(B) The loop conditions use the incorrect relational operator.
(C) The outer and inner loops contain different Boolean expressions.
(D) The loop control variable increments are incorrect.
(E) The row and column indices in the print statement are reversed.

---

## **Q9**

```java
public static String doSomething(int current)
{
    if (current <= 0)
    {
        return "";
    }
    else
    {
        return doSomething(current - 2) + current;
    }
}
```

**What is returned by `doSomething(10)`?**

(A) "108642"
(B) "246810"
(C) "0246810"
(D) "1086420"
(E) "12345678910"

---

## **Q10**

```java
public static String spin()
{
    double randNum = Math.random();
    /* missing code */
}
```

**Goal:** return `"red"`, `"blue"`, or `"green"` with equal probability.

Which implementations are correct?

(A) I only
(B) I and II only
(C) I and III only
(D) II and III only
(E) I, II, and III

---

## **Q11**

```java
public static void selectionSort(ArrayList<Integer> elements)
{
    for (int j = 0; j < elements.size() - 1; j++)
    {
        int index = j;

        for (int k = j + 1; k < elements.size(); k++)
        {
            if (elements.get(k) < elements.get(index))
            {
                index = k;
            }
        }

        int temp = elements.get(j);
        elements.set(j, elements.get(index));
        elements.set(index, temp);
    }
}
```

Initial list:

```
[2, 3, 1, 5, 6, 1]
```

**What will the list be after three passes of the outer loop (j == 2)?**

(A) `[1, 1, 2, 3, 5, 6]`
(B) `[1, 1, 2, 3, 6, 5]`
(C) `[1, 1, 2, 5, 6, 3]`
(D) `[1, 2, 3, 5, 6, 1]`
(E) `[1, 3, 2, 5, 6, 1]`

---

## **Q12**

Same method as Q11.

**Which lines should change `<` to `>` to sort in descending order?**

(A) Lines 1 and 2 only
(B) Lines 1 and 3 only
(C) Lines 1, 2, and 3
(D) Lines 2 and 3 only
(E) Line 3 only

---

## **Q13**

```java
for (int j = 0; j < 4; j++)
{
    for (/* missing code */)
    {
        System.out.print("(" + j + "," + k + ") ");
    }
    System.out.println();
}
```

Output:

```
(0,1) (0,2) (0,3)
(1,2) (1,3)
(2,3)
```

(A) `int k = 0; k < j; k++`
(B) `int k = j; k < j; k++`
(C) `int k = j; k < 4; k++`
(D) `int k = j + 1; k < j; k++`
(E) `int k = j + 1; k < 4; k++`

---

## **Q14**

```java
/** Precondition: str.length() >= 2 */
public static String switchLetters(String str)
{
    int len = str.length();
    String result;
    /* missing code */
    return result;
}
```

**Goal:** swap first and last characters

Which implementations work?

(A) I only
(B) II only
(C) I and III only
(D) II and III only
(E) I, II, and III

---

## **Q15**

```java
public static void reverse(int[] values)
{
    for (int k = 0; /* condition */; k++)
    {
        int temp = values[k];
        int swapIndex = /* expression */;
        values[k] = values[swapIndex];
        values[swapIndex] = temp;
    }
}
```

**Which choice correctly reverses the array?**

(A) `k < values.length`, `values.length - k - 1`
(B) `k < values.length`, `values.length - k`
(C) `k < values.length / 2`, `values.length - k - 1`
(D) `k < values.length / 2`, `values.length - k`
(E) `k < values.length / 2`, `values.length - k + 1`

---

## **Q16**

```java
public static void check(int[][] data)
{
    boolean result1 = false;
    boolean result2 = true;

    for (int[] d : data)
    {
        if (isSpecial(d))
        {
            result1 = true;
        }

        for (int n : d)
        {
            result2 = result2 && isIncredible(n);
        }
    }

    System.out.println(result1 + " " + result2);
}
```

**When does this print `true true`?**

(A) No special rows, at least one incredible value
(B) All rows special, at least one incredible value
(C) All rows special, all values incredible
(D) At least one special row, at least one incredible value
(E) At least one special row, all values incredible

---

## **Q17**

```java
for (int row = 0; row < board.length; row++)
{
    for (int col = /* expr */; col < board[0].length; col = col + 2)
    {
        board[row][col] = "x";
    }
}
```

**Which expression works?**

(A) `row / 2`
(B) `(row / 2) + 1`
(C) `row % 2`
(D) `(row % 2) + 1`
(E) `(row + 1) % 2`

---

## **Q18**

```java
public static String processWords(String[] words, int index)
{
    String result;

    if (index >= words.length)
    {
        result = "";
    }
    else
    {
        result = processWords(words, index + 1) + words[index];
    }

    return result;
}
```

```java
String[] things = {"Bear", "Apple", "Gorilla", "House", "Car"};
System.out.println(processWords(things, 2));
```

(A) GorillaAppleBear
(B) GorillaHouseCar
(C) CarHouseGorilla
(D) BearAppleGorilla
(E) AppleGorillaHouseCar

---

---

# 解析

---

## Q1 — Method Overloading 编译错误

### 选项与答案

(A) 1
(B) 2
(C) 3
(D) 4
(E) Nothing is printed because the class does not compile.

**答案：E**

### 考点

* 方法重载 Method Overloading
* 方法签名 Method Signature
* 返回值类型不能作为重载依据
* 编译错误 vs 运行结果

### 解题思路

这道题表面上像是在问：

> `SomeMethods.testMethod(1234)` 会调用哪一个方法？

但真正第一步不是匹配方法，而是先判断：

> 这个 class 能不能通过编译？

Java 判断方法是否重复时，只看：

```java
methodName(parameter list)
```

不看返回值类型。

### 详细分析

题目中有两个方法：

```java
public static String testMethod(int first)
{
    return "3";
}

public static int testMethod(int value)
{
    return 4;
}
```

它们的共同点：

```text
方法名：testMethod
参数列表：(int)
```

虽然返回值不同：

```text
一个返回 String
一个返回 int
```

但是 Java 不允许只靠返回值类型来区分两个方法。

所以这两个方法在 Java 看来是重复定义。

因此：

```java
System.out.println(SomeMethods.testMethod(1234));
```

根本不会执行，因为 class 本身无法编译。

### 易错点

学生最容易直接看：

```java
testMethod(1234)
```

然后想：

> 1234 是 int，所以应该调用 `testMethod(int first)`，返回 `"3"`。

这是错误的。

正确思维顺序应该是：

```text
第一步：检查是否能编译
第二步：如果能编译，再判断调用哪个方法
```

---

## Q2 — 数组中的重复索引跳转

### 选项与答案

(A) 0
(B) 1
(C) 2
(D) 3
(E) 4

**答案：C**

### 考点

* 一维数组
* 数组索引
* 循环追踪
* `num = arr[num]` 这种“索引跳转”模式

### 解题思路

这不是普通的数组遍历题。

关键代码是：

```java
num = arr[num];
```

意思是：

> 用当前 `num` 的值作为下一个数组索引。

所以不是看 `arr[k]`，而是不断沿着 `num` 这个索引跳下去。

### 代码追踪

初始：

```text
arr = {4, 2, 2, 3, 1}
num = 0
```

循环一共执行 5 次，因为：

```java
k < arr.length
```

而 `arr.length == 5`。

---

第一次循环：

```java
num = arr[0] = 4
```

现在：

```text
num = 4
```

---

第二次循环：

```java
num = arr[4] = 1
```

现在：

```text
num = 1
```

---

第三次循环：

```java
num = arr[1] = 2
```

现在：

```text
num = 2
```

---

第四次循环：

```java
num = arr[2] = 2
```

现在：

```text
num = 2
```

---

第五次循环：

```java
num = arr[2] = 2
```

最终：

```text
num = 2
```

所以答案是：

```text
2
```

### 易错点

学生常犯三个错误：

1. 以为 `k` 是核心变量
   实际上 `k` 只控制循环次数。

2. 只算第一步
   有些学生看到：

   ```java
   num = arr[0] = 4
   ```

   就选 4，但循环没有结束。

3. 没有意识到这是“跳索引”
   可以把它看成：

   ```text
   0 → 4 → 1 → 2 → 2 → 2
   ```

一旦到了 2，就固定住了，因为：

```java
arr[2] == 2
```

---

## Q3 — Nested Loop 输出格式

### 选项与答案

原聊天记录没有保留完整 A–E 选项。

**答案：输出为**

```text
0 0 0
0 1 2
0 2 4
0 3 6
```

原聊天记录中提到对应选项为 **B**，但没有列出完整选项内容。

### 考点

* 嵌套循环 Nested Loops
* 外层循环控制行
* 内层循环控制列
* `print` 和 `println` 的区别
* 循环边界：`<=` 和 `<`

### 解题思路

代码：

```java
for (int j = 0; j <= 3; j++)
{
    for (int k = 0; k < 3; k++)
    {
        System.out.print(j * k + " ");
    }
    System.out.println();
}
```

外层循环：

```java
j = 0, 1, 2, 3
```

因为条件是：

```java
j <= 3
```

所以有 4 行。

内层循环：

```java
k = 0, 1, 2
```

因为条件是：

```java
k < 3
```

所以每行有 3 个数字。

### 代码追踪

当 `j = 0`：

```text
0 * 0 = 0
0 * 1 = 0
0 * 2 = 0
```

输出：

```text
0 0 0
```

---

当 `j = 1`：

```text
1 * 0 = 0
1 * 1 = 1
1 * 2 = 2
```

输出：

```text
0 1 2
```

---

当 `j = 2`：

```text
2 * 0 = 0
2 * 1 = 2
2 * 2 = 4
```

输出：

```text
0 2 4
```

---

当 `j = 3`：

```text
3 * 0 = 0
3 * 1 = 3
3 * 2 = 6
```

输出：

```text
0 3 6
```

最终输出：

```text
0 0 0
0 1 2
0 2 4
0 3 6
```

### 易错点

1. 把 `j <= 3` 看成 `j < 3`
   实际上 `j <= 3` 包含 3，所以是 4 行。

2. 把 `k < 3` 看成包含 3
   实际上 `k` 只到 2。

3. 忽略 `System.out.println()`
   内层循环打印完一行后，`println()` 会换行。

---

## Q4 — static 变量与实例变量

### 选项与答案

(A) 0.0
(B) 2.0
(C) 3.0
(D) 5.0
(E) 6.0

**答案：A**

### 考点

* `static` class variable
* instance variable
* constructor
* object state tracing
* 方法调用对象是谁

### 解题思路

关键是区分：

```java
private static int maxInitialOrder = 0;
private int numOfItems;
```

`maxInitialOrder` 是 `static`，所以所有 `Container` 对象共用一份。

`numOfItems` 不是 static，所以每个对象都有自己的一份。

### 代码追踪

初始：

```text
maxInitialOrder = 0
```

---

执行：

```java
Container c1 = new Container(10);
```

构造方法中：

```java
numOfItems = 10;
```

所以：

```text
c1.numOfItems = 10
```

因为：

```java
10 > maxInitialOrder
```

所以：

```text
maxInitialOrder = 10
```

---

执行：

```java
Container c2 = new Container(6);
```

所以：

```text
c2.numOfItems = 6
```

但是：

```java
6 > 10
```

不成立，所以：

```text
maxInitialOrder 仍然是 10
```

---

执行：

```java
c1.addItems(2);
```

只改变 `c1.numOfItems`：

```text
c1.numOfItems = 12
```

`maxInitialOrder` 不变：

```text
maxInitialOrder = 10
```

---

执行：

```java
c2.addItems(4);
```

只改变 `c2.numOfItems`：

```text
c2.numOfItems = 10
```

现在状态是：

```text
maxInitialOrder = 10

c1.numOfItems = 12
c2.numOfItems = 10
```

---

执行：

```java
double cost = c2.calcShippingCost();
```

在 `c2` 里面判断：

```java
if (numOfItems == maxInitialOrder)
```

也就是：

```text
if (10 == 10)
```

成立，所以返回：

```java
0.0
```

### 易错点

1. 以为每个对象都有自己的 `maxInitialOrder`
   错。`static` 表示全班共用一份。

2. 以为 `addItems` 会更新 `maxInitialOrder`
   错。`maxInitialOrder` 只在 constructor 里面更新。

3. 看错调用对象
   最后调用的是：

   ```java
   c2.calcShippingCost()
   ```

   不是 `c1`。

---

## Q5 — 方法调用、返回值、副作用与短路运算

### 选项与答案

原聊天记录没有保留完整 A–E 选项。

**答案：输出为**

```text
223
```

原聊天记录中提到对应选项为 **A**，但没有列出完整选项内容。

### 考点

* method call
* return value
* side effect：方法内部打印
* short-circuit evaluation
* `||` 短路逻辑

### 解题思路

这道题不能只看返回值，因为两个方法都会在内部执行：

```java
System.out.print(...)
```

所以每次调用方法时，要同时记录两件事：

```text
1. 方法打印了什么
2. 方法返回了什么
```

另外，`||` 有短路特性：

```java
A || B
```

如果 A 已经是 `true`，B 不会执行。

### 代码追踪

初始：

```java
int w = 1;
```

判断条件：

```java
if (alpha(w) > 0 || beta(w) < 0)
```

先执行：

```java
alpha(w)
```

也就是：

```java
alpha(1)
```

进入 `alpha`：

```java
x = x * 2;
```

所以：

```text
x = 1 * 2 = 2
```

然后打印：

```java
System.out.print(x);
```

输出：

```text
2
```

接着返回：

```java
return x + 1;
```

所以返回：

```text
3
```

因此：

```java
alpha(w) > 0
```

就是：

```text
3 > 0
```

结果为：

```text
true
```

因为 `||` 左边已经是 true，所以：

```java
beta(w)
```

不会执行。

---

进入 if block：

```java
System.out.print(alpha(w));
```

这里又调用了一次：

```java
alpha(1)
```

注意：`w` 没有改变，还是 1。

第二次进入 `alpha`：

```text
x = 1 * 2 = 2
```

内部打印：

```text
2
```

返回：

```text
3
```

外层：

```java
System.out.print(alpha(w));
```

会打印这个返回值：

```text
3
```

所以完整输出顺序：

```text
第一次 alpha 内部打印：2
第二次 alpha 内部打印：2
外层 print 打印返回值：3
```

最终：

```text
223
```

### 易错点

1. 忽略方法内部的 `print`
   方法不仅返回值，还会打印东西。

2. 忘记 `||` 短路
   `beta(w)` 根本不会被调用。

3. 以为 `alpha(w)` 只执行一次
   实际执行了两次。

4. 以为 `x = x * 2` 会改变 `w`
   不会。`x` 是形参，`w` 仍然是 1。

---

## Q6 — String 替换与 infinite loop

### 选项与答案

(A) `replaceStr("", "C", "D")`
(B) `replaceStr("AB", "C", "D")`
(C) `replaceStr("C", "C", "D")`
(D) `replaceStr("CCC", "C", "D")`
(E) `replaceStr("CCD", "C", "C")`

**答案：E**

### 考点

* `String`
* `indexOf`
* `substring`
* while loop termination
* infinite loop
* replacement logic

### 解题思路

方法的目标是：

```text
找到 orig 中的 a
把它替换成 b
然后继续找下一个 a
```

关键循环是：

```java
while (position != -1)
```

循环能停止的前提是：

```java
orig.indexOf(a)
```

最终找不到 `a`，也就是返回 `-1`。

但是如果 `a` 和 `b` 一样，替换后字符串不会改变。

### 详细过程

方法核心代码：

```java
orig = orig.substring(0, position) + b +
       orig.substring(position + 1);
```

这一行本身没有问题。

因为题目给了 precondition：

```java
a.length() == 1
b.length() == 1
```

所以每次只替换一个字符。

例如：

```text
orig = "ABC"
a = "B"
b = "D"
position = 1
```

那么：

```java
orig.substring(0, position)
```

得到：

```text
"A"
```

```java
orig.substring(position + 1)
```

得到：

```text
"C"
```

最后：

```text
"A" + "D" + "C" = "ADC"
```

所以 substring 这一行逻辑是正确的。

真正的问题是：

```java
position = orig.indexOf(a);
```

每次都从头重新找。

---

选项 E：

```java
replaceStr("CCD", "C", "C")
```

追踪：

初始：

```text
orig = "CCD"
a = "C"
b = "C"
```

第一次找：

```java
position = orig.indexOf("C")
```

得到：

```text
position = 0
```

替换：

```text
"CCD" 中的 C 替换成 C
```

结果还是：

```text
"CCD"
```

再次找：

```java
position = orig.indexOf("C")
```

仍然是：

```text
position = 0
```

字符串没有变化，所以循环永远停不下来。

### 易错点

1. 误以为问题出在 substring
   这道题的 bug 不在：

   ```java
   orig.substring(position + 1)
   ```

   因为 `a.length()` 是 1。

2. 没有检查循环是否会“前进”
   如果替换前后字符串不变，循环就没有进展。

3. 忽略 `a.equals(b)` 的特殊情况
   替换 `"C"` 为 `"C"`，等于什么都没做。

---

## Q7 — Boolean 表达式翻译

### 选项与答案

(A) `(-10 <= number <= -5) || number > 0`
(B) `(-10 <= number || number <= -5) || number > 0`
(C) `(-10 <= number || number <= -5) && number > 0`
(D) `(-10 <= number && number <= -5) || number > 0`
(E) `(-10 <= number && number <= -5) && number > 0`

**答案：D**

### 考点

* Boolean expression
* `&&`
* `||`
* Java 不能写连续不等式
* 区间判断

### 解题思路

英文条件是：

```text
number is positive OR is between -10 and -5 inclusive
```

翻译成数学意思：

```text
number > 0
或者
-10 <= number <= -5
```

但是 Java 里不能写：

```java
-10 <= number <= -5
```

必须拆成两个条件：

```java
-10 <= number && number <= -5
```

然后和 positive 条件用 `||` 连接：

```java
(-10 <= number && number <= -5) || number > 0
```

### 详细分析

选项 A：

```java
(-10 <= number <= -5) || number > 0
```

错误，因为 Java 不支持连续比较。

---

选项 B：

```java
(-10 <= number || number <= -5) || number > 0
```

错误。

区间判断不能用 `||`。

如果写：

```java
number >= -10 || number <= -5
```

几乎所有数字都会满足。

---

选项 C：

```java
(-10 <= number || number <= -5) && number > 0
```

错误。

它要求 number 同时满足前半部分和 positive，逻辑结构不对。

---

选项 D：

```java
(-10 <= number && number <= -5) || number > 0
```

正确。

---

选项 E：

```java
(-10 <= number && number <= -5) && number > 0
```

错误。

它要求 number 同时在 -10 到 -5 之间，并且大于 0，不可能。

### 易错点

1. 把数学写法直接搬到 Java：

   ```java
   -10 <= number <= -5
   ```

   Java 不允许这样写。

2. 判断区间时用错 `||`
   “between A and B” 一般要用：

   ```java
   lower <= x && x <= upper
   ```

3. 混淆“或者”和“区间内部”
   整体条件是 OR，但区间内部是 AND。

---

## Q8 — 2D Array 行列索引反了

### 选项与答案

(A) Variables `a` and `b` are incorrectly initialized.
(B) The loop conditions use the incorrect relational operator.
(C) The outer and inner loops contain different Boolean expressions.
(D) The loop control variable increments are incorrect.
(E) The row and column indices in the print statement are reversed.

**答案：E**

### 考点

* 二维数组
* row-major order
* `array[row][col]`
* nested loop
* `ArrayIndexOutOfBoundsException`

### 解题思路

二维数组访问格式是：

```java
table[row][column]
```

外层循环一般控制 row，内层循环控制 column。

代码中：

```java
for (int a = 0; a < table.length; a++)
{
    for (int b = 0; b < table[0].length; b++)
    {
        System.out.print(table[b][a] + " ");
    }
}
```

这里 `a` 是 row，`b` 是 column。

所以正确访问应该是：

```java
table[a][b]
```

但代码写成了：

```java
table[b][a]
```

行列反了。

### 代码追踪

假设数组是：

```java
int[][] table = {
    {1, 2, 3},
    {4, 5, 6}
};
```

这个数组有：

```text
2 rows
3 columns
```

也就是：

```text
table.length = 2
table[0].length = 3
```

外层：

```text
a = 0, 1
```

内层：

```text
b = 0, 1, 2
```

但访问的是：

```java
table[b][a]
```

当：

```text
b = 2
```

就会访问：

```java
table[2][a]
```

但是数组只有 row 0 和 row 1，没有 row 2。

所以会出现：

```text
ArrayIndexOutOfBoundsException
```

### 易错点

1. 忘记二维数组是：

   ```java
   array[row][column]
   ```

2. 看到两个循环就机械地认为没问题。

3. 没有检查外层变量和内层变量分别代表什么。

---

## Q9 — Recursion 字符串拼接顺序

### 选项与答案

(A) `"108642"`
(B) `"246810"`
(C) `"0246810"`
(D) `"1086420"`
(E) `"12345678910"`

**答案：B**

### 考点

* recursion
* base case
* recursive call
* 字符串拼接顺序
* 递归回溯

### 解题思路

关键代码是：

```java
return doSomething(current - 2) + current;
```

递归调用在左边，`current` 在右边。

这意味着：

```text
先一路递归到最小值
再从最小值开始往回拼接
```

所以不是从 10 到 2，而是从 2 到 10。

### 代码追踪

调用：

```java
doSomething(10)
```

展开：

```text
doSomething(10)
= doSomething(8) + 10

doSomething(8)
= doSomething(6) + 8

doSomething(6)
= doSomething(4) + 6

doSomething(4)
= doSomething(2) + 4

doSomething(2)
= doSomething(0) + 2
```

到达 base case：

```java
if (current <= 0)
{
    return "";
}
```

所以：

```text
doSomething(0) = ""
```

开始回溯：

```text
doSomething(2) = "" + 2 = "2"
doSomething(4) = "2" + 4 = "24"
doSomething(6) = "24" + 6 = "246"
doSomething(8) = "246" + 8 = "2468"
doSomething(10) = "2468" + 10 = "246810"
```

最终返回：

```text
"246810"
```

### 易错点

1. 以为输出是 `"108642"`
   这只有在代码写成下面这样时才对：

   ```java
   return current + doSomething(current - 2);
   ```

2. 忽略拼接位置
   递归调用在前，当前值在后，所以是回来的时候拼接。

3. 把数字相加和字符串拼接混淆
   因为返回类型是 `String`，最终是字符串拼接。

---

## Q10 — Math.random 与概率区间

### 选项与答案

(A) I only
(B) I and II only
(C) I and III only
(D) II and III only
(E) I, II, and III

**答案：B**

### 考点

* `Math.random()`
* 随机数范围
* type casting
* 概率区间划分
* `if` vs `else if`
* variable overwrite

### 解题思路

目标是：

```text
red, blue, green 三种颜色等概率返回
```

也就是每种概率都是：

```text
1/3
```

`Math.random()` 返回范围是：

```text
0 <= randNum < 1
```

所以要把 `[0, 1)` 平均分成三段。

### 详细分析

#### Implementation I

```java
int num = (int)(randNum * 3);
```

因为：

```text
0 <= randNum < 1
```

所以：

```text
0 <= randNum * 3 < 3
```

转换成 int 后，只可能是：

```text
0, 1, 2
```

每个区间长度相同：

```text
[0, 1) → 0
[1, 2) → 1
[2, 3) → 2
```

所以 red, blue, green 概率相同。

I 正确。

---

#### Implementation II

```java
if (randNum < 1 / 3.0)
{
    return "red";
}
else if (randNum < 2 / 3.0)
{
    return "blue";
}
else
{
    return "green";
}
```

区间是：

```text
[0, 1/3)       → red
[1/3, 2/3)     → blue
[2/3, 1)       → green
```

三段长度一样。

II 正确。

---

#### Implementation III

关键问题是它用了两个独立的 `if`：

```java
if (randNum < 1 / 3.0)
{
    result = "red";
}

if (randNum < 2 / 3.0)
{
    result = "blue";
}
else
{
    result = "green";
}
```

第一个 `if` 和第二个 `if` 不是一组。

如果：

```text
randNum = 0.2
```

第一次判断：

```java
randNum < 1 / 3.0
```

成立，所以：

```text
result = "red"
```

但是接着还会判断第二个 `if`：

```java
randNum < 2 / 3.0
```

也成立，所以：

```text
result = "blue"
```

原来的 `"red"` 被覆盖了。

所以 red 永远不会成为最终结果。

实际概率大约是：

```text
blue  → 2/3
green → 1/3
red   → 0
```

III 错误。

### 易错点

1. 没看清楚 `if` 和 `else if` 的区别
   多个独立 `if` 可能重复执行。

2. 忽略变量覆盖
   `result` 先变成 red，后面又被改成 blue。

3. 不知道 `Math.random()` 的范围
   是：

   ```text
   0 <= Math.random() < 1
   ```

   不包括 1。

---

## Q11 — Selection Sort 三轮之后的结果

### 选项与答案

(A) `[1, 1, 2, 3, 5, 6]`
(B) `[1, 1, 2, 3, 6, 5]`
(C) `[1, 1, 2, 5, 6, 3]`
(D) `[1, 2, 3, 5, 6, 1]`
(E) `[1, 3, 2, 5, 6, 1]`

**答案：C**

### 考点

* `ArrayList`
* `get`
* `set`
* selection sort
* outer loop pass
* swap

### 解题思路

Selection sort 的核心逻辑：

> 每一轮从未排序部分找最小值，放到当前 `j` 的位置。

初始 list：

```text
[2, 3, 1, 5, 6, 1]
```

题目问：

> 外层循环三轮之后，也就是 `j == 2` 那轮结束时，list 是什么？

所以要追踪：

```text
j = 0
j = 1
j = 2
```

### 代码追踪

初始：

```text
[2, 3, 1, 5, 6, 1]
```

---

#### Pass 1：`j = 0`

未排序部分：

```text
[2, 3, 1, 5, 6, 1]
```

最小值是：

```text
1
```

第一次遇到的最小值在 index 2。

交换 index 0 和 index 2：

```text
[1, 3, 2, 5, 6, 1]
```

---

#### Pass 2：`j = 1`

未排序部分：

```text
[3, 2, 5, 6, 1]
```

最小值是：

```text
1
```

在 index 5。

交换 index 1 和 index 5：

```text
[1, 1, 2, 5, 6, 3]
```

---

#### Pass 3：`j = 2`

未排序部分：

```text
[2, 5, 6, 3]
```

最小值是：

```text
2
```

它已经在 index 2。

所以自己和自己交换，list 不变：

```text
[1, 1, 2, 5, 6, 3]
```

所以答案是 C。

### 易错点

1. 以为三轮后一定完全排序
   不一定。Selection sort 每轮只确定一个位置。

2. 忽略重复的 1
   第二个 1 会在第二轮被换到 index 1。

3. 把“第 3 轮”误解成 `j == 3`
   这里三轮分别是：

   ```text
   j = 0, 1, 2
   ```

---

## Q12 — Selection Sort 改成降序

### 选项与答案

(A) Lines 1 and 2 only
(B) Lines 1 and 3 only
(C) Lines 1, 2, and 3
(D) Lines 2 and 3 only
(E) Line 3 only

**答案：E**

### 考点

* selection sort
* loop condition
* comparison condition
* ascending vs descending
* 修改排序方向

### 解题思路

Selection sort 升序时，每轮找最小值：

```java
if (elements.get(k) < elements.get(index))
{
    index = k;
}
```

如果要改成降序，每轮应该找最大值。

所以只需要把比较逻辑改成：

```java
if (elements.get(k) > elements.get(index))
{
    index = k;
}
```

也就是只改 Line 3。

### 详细分析

Line 1：

```java
for (int j = 0; j < elements.size() - 1; j++)
```

这是外层循环控制 pass 数量。

不能改成 `>`，否则循环逻辑会坏掉。

---

Line 2：

```java
for (int k = j + 1; k < elements.size(); k++)
```

这是内层循环从后面找候选值。

不能改成 `>`，否则循环逻辑也会坏掉。

---

Line 3：

```java
if (elements.get(k) < elements.get(index))
```

这是唯一决定“找最小”还是“找最大”的地方。

升序：

```java
<
```

降序：

```java
>
```

所以只改 Line 3。

### 易错点

1. 看到题目说把 `<` 改成 `>`，就把所有 `<` 都改掉
   这是陷阱。

2. 没分清 loop condition 和 comparison condition
   循环边界的 `<` 是为了正常遍历，不是排序方向。

3. 不理解 selection sort 的本质
   升序找最小，降序找最大。

---

## Q13 — Nested Loop 生成 pair pattern

### 选项与答案

(A) `int k = 0; k < j; k++`
(B) `int k = j; k < j; k++`
(C) `int k = j; k < 4; k++`
(D) `int k = j + 1; k < j; k++`
(E) `int k = j + 1; k < 4; k++`

**答案：E**

### 考点

* nested loop
* missing loop header
* pattern matching
* `j < k`
* 输出规律

### 解题思路

目标输出：

```text
(0,1) (0,2) (0,3)
(1,2) (1,3)
(2,3)
```

观察每一行：

```text
j = 0 → k = 1, 2, 3
j = 1 → k = 2, 3
j = 2 → k = 3
j = 3 → no output
```

所以规律是：

```text
k 从 j + 1 开始
k 小于 4
```

对应代码：

```java
int k = j + 1; k < 4; k++
```

### 代码追踪

外层循环：

```java
for (int j = 0; j < 4; j++)
```

所以：

```text
j = 0, 1, 2, 3
```

如果选 E：

```java
for (int k = j + 1; k < 4; k++)
```

当 `j = 0`：

```text
k = 1, 2, 3
```

输出：

```text
(0,1) (0,2) (0,3)
```

---

当 `j = 1`：

```text
k = 2, 3
```

输出：

```text
(1,2) (1,3)
```

---

当 `j = 2`：

```text
k = 3
```

输出：

```text
(2,3)
```

---

当 `j = 3`：

```text
k = 4
```

条件：

```java
k < 4
```

不成立，所以不输出。

完全符合题目。

### 易错点

1. 选择 `k = j`
   会输出 `(0,0)`、`(1,1)` 这种不该出现的 pair。

2. 选择 `k < j`
   会产生下三角，而题目是上三角。

3. 没看出核心规律是：

   ```text
   j < k
   ```

---

## Q14 — substring 交换首尾字符

### 选项与答案

(A) I only
(B) II only
(C) I and III only
(D) II and III only
(E) I, II, and III

**答案：C**

### 考点

* `String`
* `substring(start, end)`
* `substring(start)`
* 字符串拼接
* 首尾字符交换

### 解题思路

目标是交换字符串的第一个字符和最后一个字符。

例如：

```text
"wagon" → "nagow"
```

结构是：

```text
last + middle + first
```

对于字符串 `str`：

```java
int len = str.length();
```

最后一个字符：

```java
str.substring(len - 1)
```

中间部分：

```java
str.substring(1, len - 1)
```

第一个字符：

```java
str.substring(0, 1)
```

所以标准做法是：

```java
last + middle + first
```

### 详细分析

#### Implementation I

```java
result = str.substring(len - 1);
result += str.substring(1, len - 1);
result += str.substring(0, 1);
```

以 `"wagon"` 为例：

```text
str.substring(len - 1) = "n"
str.substring(1, len - 1) = "ago"
str.substring(0, 1) = "w"
```

拼起来：

```text
"n" + "ago" + "w" = "nagow"
```

I 正确。

---

#### Implementation II

```java
result = str.substring(len - 1);
result += str.substring(1);
result += str.substring(0, 1);
```

以 `"wagon"` 为例：

```text
str.substring(len - 1) = "n"
str.substring(1) = "agon"
str.substring(0, 1) = "w"
```

拼起来：

```text
"n" + "agon" + "w" = "nagonw"
```

最后一个字符 `n` 出现了两次。

所以 II 错误。

---

#### Implementation III

```java
result = str.substring(0, len - 1);
result += str.substring(0, 1);
result = str.substring(len - 1) + result.substring(1);
```

以 `"wagon"` 为例：

第一步：

```java
result = str.substring(0, len - 1);
```

得到：

```text
"wago"
```

第二步：

```java
result += str.substring(0, 1);
```

得到：

```text
"wago" + "w" = "wagow"
```

第三步：

```java
result = str.substring(len - 1) + result.substring(1);
```

```text
str.substring(len - 1) = "n"
result.substring(1) = "agow"
```

所以：

```text
"n" + "agow" = "nagow"
```

III 正确。

所以答案是：

```text
I and III only
```

### 易错点

1. 不熟悉 `substring(start, end)`
   包含 start，不包含 end。

2. 忘记 `substring(1)` 会一直取到字符串末尾。

3. 觉得 III 写法绕，就直接判错
   III 虽然绕，但结果是正确的。

---

## Q15 — Reverse Array 镜像索引

### 选项与答案

(A) `k < values.length`, `values.length - k - 1`
(B) `k < values.length`, `values.length - k`
(C) `k < values.length / 2`, `values.length - k - 1`
(D) `k < values.length / 2`, `values.length - k`
(E) `k < values.length / 2`, `values.length - k + 1`

**答案：C**

### 考点

* array reversal
* swap
* mirror index
* loop boundary
* integer division

### 解题思路

反转数组的核心是：

```text
第 0 个和最后一个交换
第 1 个和倒数第二个交换
第 2 个和倒数第三个交换
```

镜像索引公式：

```java
values.length - k - 1
```

循环只需要走一半：

```java
k < values.length / 2
```

否则交换完之后又会交换回来。

### 代码追踪

例子：

```text
[5, 8, 3, 7, 4, 6, 2]
```

index：

```text
0  1  2  3  4  5  6
```

镜像交换：

```text
0 ↔ 6
1 ↔ 5
2 ↔ 4
```

中间 index 3 不需要动。

数组长度是 7：

```java
values.length / 2
```

结果是：

```text
3
```

所以循环：

```java
k < 3
```

即：

```text
k = 0, 1, 2
```

刚好交换三组。

---

当 `k = 0`：

```java
swapIndex = 7 - 0 - 1 = 6
```

交换 index 0 和 index 6。

---

当 `k = 1`：

```java
swapIndex = 7 - 1 - 1 = 5
```

交换 index 1 和 index 5。

---

当 `k = 2`：

```java
swapIndex = 7 - 2 - 1 = 4
```

交换 index 2 和 index 4。

完成反转。

### 易错点

1. 循环到整个数组长度
   如果 `k < values.length`，后半段会把前面交换好的内容换回来。

2. 忘记数组最后一个 index 是：

   ```java
   values.length - 1
   ```

3. 写成：

   ```java
   values.length - k
   ```

   当 `k = 0` 时就是 `values.length`，直接越界。

---

## Q16 — Boolean Pattern：at least one vs all

### 选项与答案

(A) No special rows, at least one incredible value
(B) All rows special, at least one incredible value
(C) All rows special, all values incredible
(D) At least one special row, at least one incredible value
(E) At least one special row, all values incredible

**答案：E**

### 考点

* enhanced for loop
* 2D array traversal
* Boolean accumulation
* exists / at least one
* all / every

### 解题思路

这道题有两个 boolean 变量：

```java
boolean result1 = false;
boolean result2 = true;
```

它们代表两种不同的逻辑模式。

### 详细分析

#### result1

```java
boolean result1 = false;

for (int[] d : data)
{
    if (isSpecial(d))
    {
        result1 = true;
    }
}
```

`result1` 一开始是 false。

只要有任何一行满足：

```java
isSpecial(d)
```

就会变成 true。

所以：

```text
result1 == true
```

表示：

```text
至少有一行是 special
```

也就是：

```text
at least one row is special
```

---

#### result2

```java
boolean result2 = true;

for (int n : d)
{
    result2 = result2 && isIncredible(n);
}
```

`result2` 一开始是 true。

每次都和：

```java
isIncredible(n)
```

做 AND。

只要有一个值不是 incredible：

```text
true && false = false
```

之后 `result2` 就会一直是 false。

所以：

```text
result2 == true
```

表示：

```text
所有值都是 incredible
```

也就是：

```text
all values are incredible
```

---

如果最终输出：

```text
true true
```

就表示：

```text
result1 == true
result2 == true
```

也就是：

```text
至少有一行是 special
并且所有 value 都是 incredible
```

答案 E。

### 易错点

1. 把 `result1` 理解成 all rows special
   不是。因为只要有一行 special，它就变 true。

2. 把 `result2` 理解成 at least one incredible
   不是。因为它从 true 开始，不断 AND，要求全部都 true。

3. 不熟悉两个经典 boolean 模式：

```java
boolean found = false;
// 只要找到一个，就变 true
```

表示：

```text
at least one
```

```java
boolean allGood = true;
// 只要发现一个 false，就变 false
```

表示：

```text
all / every
```

---

## Q17 — 棋盘交错 pattern 与 `%`

### 选项与答案

(A) `row / 2`
(B) `(row / 2) + 1`
(C) `row % 2`
(D) `(row % 2) + 1`
(E) `(row + 1) % 2`

**答案：E**

### 考点

* 2D array
* nested loop
* modulus `%`
* alternating pattern
* row parity

### 解题思路

题目中的列循环是：

```java
for (int col = /* expr */; col < board[0].length; col = col + 2)
```

说明每一行从某个起点开始，然后每隔一列填一个 `"x"`。

目标规律是：

```text
even row → odd columns
odd row  → even columns
```

也就是说：

```text
row = 0 → col 从 1 开始
row = 1 → col 从 0 开始
row = 2 → col 从 1 开始
row = 3 → col 从 0 开始
```

需要表达式产生：

```text
row:   0  1  2  3
expr:  1  0  1  0
```

### 代码追踪

测试选项 E：

```java
(row + 1) % 2
```

当 `row = 0`：

```text
(0 + 1) % 2 = 1
```

当 `row = 1`：

```text
(1 + 1) % 2 = 0
```

当 `row = 2`：

```text
(2 + 1) % 2 = 1
```

当 `row = 3`：

```text
(3 + 1) % 2 = 0
```

得到：

```text
1, 0, 1, 0
```

完全符合需求。

### 易错点

1. 选 `row % 2`
   它产生的是：

   ```text
   0, 1, 0, 1
   ```

   正好和题目需要的相反。

2. 不理解 `col = col + 2`
   这表示每隔一列处理一次。

3. 把 `/` 和 `%` 混淆
   `/` 是除法，`%` 是取余，处理奇偶规律通常用 `%`。

---

## Q18 — Recursion 反向拼接数组元素

### 选项与答案

(A) GorillaAppleBear
(B) GorillaHouseCar
(C) CarHouseGorilla
(D) BearAppleGorilla
(E) AppleGorillaHouseCar

**答案：C**

### 考点

* recursion
* array indexing
* base case
* string concatenation
* 从指定 index 开始处理
* 递归回溯顺序

### 解题思路

关键代码：

```java
result = processWords(words, index + 1) + words[index];
```

递归调用在前：

```java
processWords(words, index + 1)
```

当前元素在后：

```java
words[index]
```

所以会先走到数组末尾，再反向拼接回来。

### 代码追踪

数组：

```java
String[] things = {"Bear", "Apple", "Gorilla", "House", "Car"};
```

索引对应：

```text
index 0 → Bear
index 1 → Apple
index 2 → Gorilla
index 3 → House
index 4 → Car
```

调用：

```java
processWords(things, 2)
```

所以从 index 2 开始，不会处理 Bear 和 Apple。

---

展开递归：

```text
processWords(2)
= processWords(3) + "Gorilla"

processWords(3)
= processWords(4) + "House"

processWords(4)
= processWords(5) + "Car"
```

到达 base case：

```java
if (index >= words.length)
{
    result = "";
}
```

因为：

```text
index = 5
words.length = 5
```

所以：

```text
processWords(5) = ""
```

开始回溯：

```text
processWords(4)
= "" + "Car"
= "Car"
```

```text
processWords(3)
= "Car" + "House"
= "CarHouse"
```

```text
processWords(2)
= "CarHouse" + "Gorilla"
= "CarHouseGorilla"
```

所以答案是 C。

### 易错点

1. 选 `"GorillaHouseCar"`
   这是最常见错误。这个结果对应的代码应该是：

   ```java
   words[index] + processWords(words, index + 1)
   ```

   但题目是递归调用在前。

2. 忘记从 index 2 开始
   所以 Bear 和 Apple 不参与结果。

3. 不理解递归回溯
   代码先递归到最后，再从最后一个元素开始拼回来。

---

