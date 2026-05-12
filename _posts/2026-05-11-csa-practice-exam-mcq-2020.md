
---
title:  "CSA 2020年CB模拟题 MCQ 解析"
mathjax: true
layout: post
categories: media
---


# MCQ 原题

## 3. 

Consider the method `getHours`, which is intended to calculate the number of hours that a vehicle takes to travel between two mile markers on a highway if the vehicle travels at a constant speed of 60 miles per hour. A mile marker is a sign showing the number of miles along a road between some fixed location (for example, the beginning of a highway) and the current location.

The following table shows two examples of the intended behavior of `getHours`, based on the `int` parameters `marker1` and `marker2`.

| marker1 | marker2 | Return Value |
|---|---|---|
| 100 | 220 | 2.0 |
| 100 | 70 | 0.5 |

Consider the following implementation of `getHours`.

```java
public static double getHours(int marker1, int marker2)
{
    /* missing statement */
    return hours;
}
```

Which of the following statements can replace `/* missing statement */` so `getHours` works as intended?

(A) `double hours = (Math.abs(marker1) - Math.abs(marker2)) / 60.0;`

(B) `double hours = Math.abs(marker1 - marker2 / 60.0);`

(C) `double hours = Math.abs(marker1 - marker2) / 60.0;`

(D) `double hours = Math.abs((marker1 - marker2) / 60);`

(E) `double hours = (double) (Math.abs(marker1 - marker2) / 60);`

## 5.

Consider the following class definition.

```java
public class Bird
{
    private String species;
    private String color;
    private boolean canFly;

    public Bird(String str, String col, boolean cf)
    {
        species = str;
        color = col;
        canFly = cf;
    }
}
```

Which of the following constructors, if added to the `Bird` class, will cause a compilation error?

(A)

```java
public Bird()
{
    species = "unknown";
    color = "unknown";
    canFly = false;
}
```

(B)

```java
public Bird(boolean cf)
{
    species = "unknown";
    color = "unknown";
    canFly = cf;
}
```

(C)

```java
public Bird(String col, String str)
{
    species = str;
    color = col;
    canFly = false;
}
```

(D)

```java
public Bird(boolean cf, String str, String col)
{
    species = str;
    color = col;
    canFly = cf;
}
```

(E)

```java
public Bird(String col, String str, boolean cf)
{
    species = str;
    color = col;
    canFly = cf;
}
```

## 6.

Which of the following expressions evaluate to `3.5`?

I. `(double)2/4+3`

II. `(double) (2 / 4) + 3`

III. `(double) (2 / 4 + 3)`

(A) I only

(B) III only

(C) I and II only

(D) II and III only

(E) I, II, and III

## 7.

Consider the following code segment.

```java
int num = /* initial value not shown */;
boolean b1 = true;

if (num > 0)
{
    if (num >= 100)
    {
        b1 = false;
    }
}
else
{
    if (num >= -100)
    {
        b1 = false;
    }
}
```

Which of the following statements assigns the same value to `b2` as the code segment assigns to `b1` for all values of `num`?

(A) `boolean b2 = (num > -100) && (num < 100);`

(B) `boolean b2 = (num > -100) || (num < 100);`

(C) `boolean b2 = (num < -100) || (num > 100);`

(D) `boolean b2 = (num < -100) && (num > 0 || num < 100);`

(E) `boolean b2 = (num < -100) || (num > 0 && num < 100);`

## 10.

Consider the following method.

```java
public static void printSome(int num1, int num2)
{
    for (int i = 0; i < num1; i++)
    {
        if (i % num2 == 0 && i % 2 == 0)
        {
            System.out.print(i + " ");
        }
    }
}
```

Which of the following method calls will cause `"0 10 "` to be printed?

(A) `printSome(0, 20)`

(B) `printSome(5, 10)`

(C) `printSome(10, 5)`

(D) `printSome(20, 5)`

(E) `printSome(25, 5)`

## 11.

Which of the following code segments produces the output `"987654321"`?

(A)

```java
int num = 10;
while (num > 0)
{
    System.out.print(num);
    num--;
}
```

(B)

```java
int num = 10;
while (num >= 0)
{
    System.out.print(num);
    num--;
}
```

(C)

```java
int num = 10;
while (num > 1)
{
    num--;
    System.out.print(num);
}
```

(D)

```java
int num = 10;
while (num >= 1)
{
    num--;
    System.out.print(num);
}
```

(E)

```java
int num = 0;
while (num <= 9)
{
    System.out.print(10 - num);
    num++;
}
```

## 12.

Consider the following class definitions.

```java
public class Person
{
    private String name;

    public String getName()
    { return name; }
}

public class Book
{
    private String author;
    private String title;
    private Person borrower;

    public Book(String a, String t)
    {
        author = a;
        title = t;
        borrower = null;
    }

    public void printDetails()
    {
        System.out.print("Author: " + author + " Title: " + title);

        if ( /* missing condition */ )
        {
            System.out.println(" Borrower: " + borrower.getName());
        }
    }

    public void setBorrower(Person b)
    { borrower = b; }
}
```

Which of the following can replace `/* missing condition */` so that the `printDetails` method CANNOT cause a run-time error?

I. `!borrower.equals(null)`

II. `borrower != null`

III. `borrower.getName() != null`

(A) I only

(B) II only

(C) III only

(D) I and II

(E) II and III

## 15.

Consider the following code segment. Assume that `a` is greater than zero.

```java
int a = /* value not shown */;
int b = a + (int) (Math.random() * a);
```

Which of the following best describes the value assigned to `b` when the code segment is executed?

(A) `a`

(B) `2*a`

(C) A random integer between `0` and `a-1`, inclusive

(D) A random integer between `a` and `2*a`, inclusive

(E) A random integer between `a` and `2*a-1`, inclusive

## 18.

Consider the following method, which is intended to return the number of local maximum values in an array. Local maximum values are array elements that are greater than both adjacent array elements. The first and last elements of an array have only a single adjacent element, so neither the first nor the last array element is counted by this method. For example, an array containing the values `{3, 9, 7, 4, 10, 12, 3, 8}` has two local maximum values: `9` and `12`.

```java
public static int countPeaks(int[] data)
{
    int numPeaks = 0;

    for ( /* missing loop header */ )
    {
        if (data[p - 1] < data[p] && data[p] > data[p + 1])
        {
            numPeaks++;
        }
    }

    return numPeaks;
}
```

Which of the following can replace `/* missing loop header */` so the method `countPeaks` works as intended?

(A) `int p = data.length - 1; p > 0; p--`

(B) `int p = 0; p < data.length; p++`

(C) `int p = 0; p < data.length - 1; p++`

(D) `int p = 1; p < data.length; p++`

(E) `int p = 1; p < data.length - 1; p++`

## 19.

Consider the following code segment.

```java
int[][] values = {{1, 2, 3}, {4, 5, 6}};
int x = 0;

for (int j = 0; j < values.length; j++)
{
    for (int k = 0; k < values[0].length; k++)
    {
        if (k == 0)
        {
            values[j][k] *= 2;
        }

        x += values[j][k];
    }
}
```

What is the value of `x` after the code segment is executed?

(A) 7

(B) 17

(C) 21

(D) 26

(E) 27

## 20.

Consider the following class definition.

```java
public class Book
{
    private int pages;

    public int getPages()
    {
        return pages;
    }

    // There may be instance variables, constructors, and methods not shown.
}
```

The following code segment is intended to store in `maxPages` the greatest number of pages found in any `Book` object in the array `bookArr`.

```java
Book[] bookArr = { /* initial values not shown */ };
int maxPages = bookArr[0].getPages();

for (Book b : bookArr)
{
    /* missing code */
}
```

Which of the following can replace `/* missing code */` so the code segment works as intended?

(A)

```java
if (b.pages > maxPages)
{
    maxPages = b.pages;
}
```

(B)

```java
if (b.getPages() > maxPages)
{
    maxPages = b.getPages();
}
```

(C)

```java
if (Book[b].pages > maxPages)
{
    maxPages = Book[b].pages;
}
```

(D)

```java
if (bookArr[b].pages > maxPages)
{
    maxPages = bookArr[b].pages;
}
```

(E)

```java
if (bookArr[b].getPages() > maxPages)
{
    maxPages = bookArr[b].getPages();
}
```

## Questions 21 - 22 refer to the information below.

Consider the following method.

```java
public static String[] strArrMethod(String[] arr)
{
    String[] result = new String[arr.length];

    for (int j = 0; j < arr.length; j++)
    {
        String sm = arr[j];

        for (int k = j + 1; k < arr.length; k++)
        {
            if (arr[k].length() < sm.length())
            {
                sm = arr[k]; // Line 12
            }
        }

        result[j] = sm;
    }

    return result;
}
```

## 21.

Consider the following code segment.

```java
String[] testOne = {"first", "day", "of", "spring"};
String[] resultOne = strArrMethod(testOne);
```

What are the contents of `resultOne` when the code segment has been executed?

(A) `{"day", "first", "of", "spring"}`

(B) `{"of", "day", "first", "spring"}`

(C) `{"of", "day", "of", "spring"}`

(D) `{"of", "of", "of", "spring"}`

(E) `{"spring", "first", "day", "of"}`

## 22.

Consider the following code segment.

```java
String[] testTwo = {"last", "day", "of", "the", "school", "year"};
String[] resultTwo = strArrMethod(testTwo);
```

How many times is the line labeled `// Line 12` in the `strArrMethod` executed as a result of executing the code segment?

(A) 4 times

(B) 5 times

(C) 6 times

(D) 15 times

(E) 30 times

## 23.

Consider the following method, which is intended to print the values in its two-dimensional integer array parameter in row-major order.

```java
public static void rowMajor(int[][] arr)
{
    /* missing code */
}
```

As an example, consider the following code segment.

```java
int[][] theArray = {{1, 2}, {3, 4}, {5, 6}, {7, 8}};
rowMajor(theArray);
```

When executed, the code segment should produce the following output.

```text
12345678
```

Which of the following code segments can replace `/* missing code */` so that the `rowMajor` method works as intended?

(A)

```java
for (int j : arr)
{
    for (int k : j)
    {
        System.out.print(j + " ");
    }
}
```

(B)

```java
for (int j : arr)
{
    for (int k : j)
    {
        System.out.print(k + " ");
    }
}
```

(C)

```java
for (int[] j : arr)
{
    for (int k : j)
    {
        System.out.print(j + " ");
    }
}
```

(D)

```java
for (int[] j : arr)
{
    for (int k : j)
    {
        System.out.print(k + " ");
    }
}
```

(E)

```java
for (int[] j : arr)
{
    for (int k : j)
    {
        System.out.print(arr[k] + " ");
    }
}
```

## 24.

Consider the following class definition.

```java
public class SomeClass
{
    private int x = 0;
    private static int y = 0;

    public SomeClass(int pX)
    {
        x = pX;
        y++;
    }

    public void incrementY()
    { y++; }

    public void incrementY(int inc)
    { y += inc; }

    public int getY()
    { return y; }
}
```

The following code segment appears in a class other than `SomeClass`.

```java
SomeClass first = new SomeClass(10);
SomeClass second = new SomeClass(20);
SomeClass third = new SomeClass(30);

first.incrementY();
second.incrementY(10);

System.out.println(third.getY());
```

What is printed as a result of executing the code segment if the code segment is the first use of a `SomeClass` object?

(A) 0

(B) 1

(C) 11

(D) 14

(E) 30

## 25.

Consider the following method.

```java
public static String rearrange(String str)
{
    String temp = "";

    for (int i = str.length() - 1; i > 0; i--)
    {
        temp += str.substring(i - 1, i);
    }

    return temp;
}
```

What, if anything, is returned by the method call `rearrange("apple")`?

(A) `"appl"`

(B) `"apple"`

(C) `"elppa"`

(D) `"lppa"`

(E) Nothing is returned due to a run-time error.

## 26.

Consider the following two code segments. Assume that the `int` variables `m` and `n` have been properly declared and initialized and are both greater than `0`.

I.

```java
for (int i = 0; i < m * n; i++)
{
    System.out.print("A");
}
```

II.

```java
for (int j = 1; j <= m; j++)
{
    for (int k = 1; k < n; k++)
    {
        System.out.print("B");
    }
}
```

Assume that the initial values of `m` and `n` are the same in code segment I as they are in code segment II. Which of the following correctly compares the number of times that `"A"` and `"B"` are printed when each code segment is executed?

(A) `"A"` is printed `m` fewer times than `"B"`.

(B) `"A"` is printed `n` fewer times than `"B"`.

(C) `"A"` is printed `m` more times than `"B"`.

(D) `"A"` is printed `n` more times than `"B"`.

(E) `"A"` and `"B"` are printed the same number of times.

## 27.

Consider the following statement. Assume that `a` and `b` are properly declared and initialized `boolean` variables.

```java
boolean c = (a && b) || (!a && b);
```

Under which of the following conditions will `c` be assigned the value `false`?

(A) Always

(B) Never

(C) When `a` and `b` have the same value

(D) When `a` has the value `false`

(E) When `b` has the value `false`

## 28.

Consider the following method.

```java
public static String abMethod(String a, String b)
{
    int x = a.indexOf(b);

    while (x >= 0)
    {
        a = a.substring(0, x) + a.substring(x + b.length());
        x = a.indexOf(b);
    }

    return a;
}
```

What, if anything, is returned by the method call `abMethod("sing the song", "ng")`?

(A) `"si"`

(B) `"si the so"`

(C) `"si the song"`

(D) `"sig the sog"`

(E) Nothing is returned because a `StringIndexOutOfBoundsException` is thrown.

## 29.

Consider the following method.

```java
public static int calcMethod(int num)
{
    if (num == 0)
    {
        return 10;
    }

    return num + calcMethod(num / 2);
}
```

What value is returned by the method call `calcMethod(16)`?

(A) 10

(B) 26

(C) 31

(D) 38

(E) 41

## 31.

Consider an integer array `nums`, which has been properly declared and initialized with one or more values. Which of the following code segments counts the number of negative values found in `nums` and stores the count in `counter`?

I.

```java
int counter = 0;
int i = -1;

while (i <= nums.length - 2)
{
    i++;

    if (nums[i] < 0)
    {
        counter++;
    }
}
```

II.

```java
int counter = 0;

for (int i = 1; i < nums.length; i++)
{
    if (nums[i] < 0)
    {
        counter++;
    }
}
```

III.

```java
int counter = 0;

for (int i : nums)
{
    if (nums[i] < 0)
    {
        counter++;
    }
}
```

(A) I only

(B) II only

(C) I and II only

(D) I and III only

(E) I, II, and III


## 33.

Consider the following code segment.

```java
String[][] letters = {{"A", "B", "C", "D"},
                      {"E", "F", "G", "H"},
                      {"I", "J", "K", "L"}};

for (int col = 1; col < letters[0].length; col++)
{
    for (int row = 1; row < letters.length; row++)
    {
        System.out.print(letters[row][col] + " ");
    }

    System.out.println();
}
```

What is printed as a result of executing this code segment?

(A)

```text
A E I
F J
K
```

(B)

```text
B F J
C G K
D H L
```

(C)

```text
E I
F J
G K
H L
```

(D)

```text
F G H
J K L
```

(E)

```text
F J
G K
H L
```

## 34.

The following method is intended to remove all elements of an `ArrayList` of integers that are divisible by `key` and add the removed elements to a new `ArrayList`, which the method returns.

```java
public static ArrayList<Integer> match(ArrayList<Integer> numList, int key)
{
    ArrayList<Integer> returnList = new ArrayList<Integer>();

    int i = 0;
    while (i < numList.size())
    {
        int num = numList.get(i);

        if (num % key == 0)
        {
            numList.remove(i);
            returnList.add(num);
        }

        i++;
    }

    return returnList;
}
```

As an example, if the method is called with an `ArrayList` containing the values `[5, 2, 10, 20, 16]` and the parameter `key` has the value `5`, then `numList` should contain `[2, 16]` at the end of the method and an `ArrayList` containing `[5, 10, 20]` should be returned.

Which of the following best explains why the method does not always work as intended?

(A) The method attempts to add an element to `returnList` after that element has already been removed from `numList`.

(B) The method causes a `NullPointerException` to be thrown when no matches are found.

(C) The method causes an `IndexOutOfBoundsException` to be thrown.

(D) The method fails to correctly determine whether an element of `numList` is divisible by `key`.

(E) The method skips some elements of `numList` during the traversal.

## 35.

Consider the `mode` method, which is intended to return the most frequently occurring value (mode) in its `int[]` parameter `arr`. For example, if the parameter of the `mode` method has the contents `{6, 5, 1, 5, 2, 6, 5}`, then the method is intended to return `5`.

```java
/** Precondition: arr.length >= 1 */
public static int mode(int[] arr)
{
    int modeCount = 1;
    int mode = arr[0];

    for (int j = 0; j < arr.length; j++)
    {
        int valCount = 0;

        for (int k = 0; k < arr.length; k++)
        {
            if ( /* missing condition 1 */ )
            {
                valCount++;
            }
        }

        if ( /* missing condition 2 */ )
        {
            modeCount = valCount;
            mode = arr[j];
        }
    }

    return mode;
}
```

Which of the following can replace `/* missing condition 1 */` and `/* missing condition 2 */` so the code segment works as intended?

|  | `/* missing condition 1 */` | `/* missing condition 2 */` |
|---|---|---|
| (A) | `arr[j] == arr[k]` | `valCount > modeCount` |
| (B) | `arr[j] == arr[k]` | `modeCount > valCount` |
| (C) | `arr[j] != arr[k]` | `valCount > modeCount` |
| (D) | `arr[j] != arr[k]` | `modeCount > valCount` |
| (E) | `arr[j] != arr[k]` | `modeCount != valCount` |

## 36.

Consider the following methods.

```java
/** Precondition: a > 0 and b > 0 */
public static int methodOne(int a, int b)
{
    int loopCount = 0;

    for (int i = 0; i < a / b; i++)
    {
        loopCount++;
    }

    return loopCount;
}

/** Precondition: a > 0 and b > 0 */
public static int methodTwo(int a, int b)
{
    int loopCount = 0;
    int i = 0;

    while (i < a)
    {
        loopCount++;
        i += b;
    }

    return loopCount;
}
```

Which of the following best describes the conditions under which `methodOne` and `methodTwo` return the same value?

(A) When `a` and `b` are both even

(B) When `a` and `b` are both odd

(C) When `a` is even and `b` is odd

(D) When `a % b` is equal to zero

(E) When `a % b` is equal to one

## 37.

Consider the following code segment. Assume that `num3 > num2 > 0`.

```java
int num1 = 0;
int num2 = /* initial value not shown */;
int num3 = /* initial value not shown */;

while (num2 < num3)
{
    num1 += num2;
    num2++;
}
```

Which of the following best describes the contents of `num1` as a result of executing the code segment?

(A) The product of `num2` and `num3`

(B) The product of `num2` and `num3 - 1`

(C) The sum of `num2` and `num3`

(D) The sum of all integers from `num2` to `num3`, inclusive

(E) The sum of all integers from `num2` to `num3 - 1`, inclusive

## 38.

Consider the following class definition.

```java
public class Value
{
    private int num;

    public int getNum()
    {
        return num;
    }

    // There may be instance variables, constructors, and methods not shown.
}
```

The following method appears in a class other than `Value`. It is intended to sum all the `num` instance variables of the `Value` objects in its `ArrayList` parameter.

```java
/** Precondition: valueList is not null */
public static int getTotal(ArrayList<Value> valueList)
{
    int total = 0;

    /* missing code */

    return total;
}
```

Which of the following code segments can replace `/* missing code */` so the `getTotal` method works as intended?

I.

```java
for (int x = 0; x < valueList.size(); x++)
{
    total += valueList.get(x).getNum();
}
```

II.

```java
for (Value v : valueList)
{
    total += v.getNum();
}
```

III.

```java
for (Value v : valueList)
{
    total += getNum(v);
}
```

(A) I only

(B) II only

(C) III only

(D) I and II

(E) I and III

## 39.

Consider the following recursive method.

```java
public static boolean recurMethod(String str)
{
    if (str.length() <= 1)
    {
        return true;
    }
    else if (str.substring(0, 1).compareTo(str.substring(1, 2)) > 0)
    {
        return recurMethod(str.substring(1));
    }
    else
    {
        return false;
    }
}
```

Which of the following method calls will return `true`?

(A) `recurMethod("abcba")`

(B) `recurMethod("abcde")`

(C) `recurMethod("bcdab")`

(D) `recurMethod("edcba")`

(E) `recurMethod("edcde")`


---

---
# 解析

# Q3 - `getHours` 计算两点之间行驶时间

## 答案

**C：**

```java
double hours = Math.abs(marker1 - marker2) / 60.0;
```

## 考点

- `Math.abs`
- arithmetic expressions
- integer vs. floating-point division
- casting / `double`
- 根据题目规格补全代码

## 解题思路

题目要算两个 mile markers 之间的距离，然后除以速度 `60 miles per hour`。

所以核心公式是：

```java
distance = Math.abs(marker1 - marker2)
hours = distance / 60.0
```

为什么要用 `Math.abs`？

因为车可能从小 marker 到大 marker，也可能从大 marker 到小 marker：

```java
marker1 = 100, marker2 = 220
distance = |100 - 220| = 120
hours = 120 / 60.0 = 2.0
```

```java
marker1 = 100, marker2 = 70
distance = |100 - 70| = 30
hours = 30 / 60.0 = 0.5
```

## 代码追踪

以 `getHours(100, 70)` 为例：

```java
Math.abs(marker1 - marker2)
= Math.abs(100 - 70)
= Math.abs(30)
= 30

30 / 60.0 = 0.5
```

以 `getHours(100, 220)` 为例：

```java
Math.abs(100 - 220)
= Math.abs(-120)
= 120

120 / 60.0 = 2.0
```

## 易错点

1. **只对两个 marker 分别取绝对值是不够的。**

   错误写法：

   ```java
   Math.abs(marker1) - Math.abs(marker2)
   ```

   如果是 `100` 和 `220`，结果是：

   ```java
   100 - 220 = -120
   ```

   时间不能是负数。

2. **括号位置很关键。**

   错误写法：

   ```java
   Math.abs(marker1 - marker2 / 60.0)
   ```

   这里是先算：

   ```java
   marker2 / 60.0
   ```

   而不是先算距离。

3. **`60.0` 比 `60` 安全。**

   如果写：

   ```java
   Math.abs((marker1 - marker2) / 60)
   ```

   因为两个都是 `int`，会先做整数除法。

   例如：

   ```java
   30 / 60 = 0
   ```

   而不是 `0.5`。

---

# Q5 - Constructor overloading 签名冲突

## 答案

**E**

```java
public Bird(String col, String str, boolean cf)
```

## 考点

- constructor
- method / constructor signature
- overloading
- 参数类型顺序，而不是参数名

## 解题思路

原来的 constructor 是：

```java
public Bird(String str, String col, boolean cf)
```

它的 signature 是：

```java
Bird(String, String, boolean)
```

Java 判断 constructor 是否重复，看的是：

```text
constructor name + parameter types + parameter order
```

**不看参数名字。**

所以：

```java
public Bird(String col, String str, boolean cf)
```

虽然参数名换了，但类型顺序还是：

```text
String, String, boolean
```

这和原 constructor 完全一样，所以会 compilation error。

## 代码追踪 / 判断过程

原 constructor：

```java
Bird(String, String, boolean)
```

逐项检查：

| Choice | Signature | 是否冲突 |
|---|---|---|
| A | `Bird()` | 不冲突 |
| B | `Bird(boolean)` | 不冲突 |
| C | `Bird(String, String)` | 不冲突 |
| D | `Bird(boolean, String, String)` | 不冲突 |
| E | `Bird(String, String, boolean)` | 冲突 |

## 易错点

学生最容易犯的错是看参数名字：

```java
String str, String col
```

和

```java
String col, String str
```

他们会以为名字不同，所以是不同 constructor。

但 Java 不在乎参数名，只在乎类型和顺序。

---

# Q6 - Cast 影响整数除法还是浮点除法

## 答案

**A：I only**

## 考点

- casting
- integer division
- operator precedence
- `(double)` 放在哪里很关键

## 解题思路

要判断哪些表达式等于 `3.5`。

### I

```java
(double)2 / 4 + 3
```

`2` 先被转成 `double`：

```java
2.0 / 4 + 3
= 0.5 + 3
= 3.5
```

所以 I 正确。

### II

```java
(double) (2 / 4) + 3
```

括号里先算：

```java
2 / 4
```

因为两个都是 `int`，所以是整数除法：

```java
2 / 4 = 0
```

然后再 cast：

```java
(double) 0 + 3
= 0.0 + 3
= 3.0
```

所以 II 错。

### III

```java
(double) (2 / 4 + 3)
```

括号里还是先算整数除法：

```java
2 / 4 + 3
= 0 + 3
= 3
```

再 cast：

```java
(double) 3 = 3.0
```

所以 III 错。

## 代码追踪

```text
I:   (double)2 / 4 + 3
     2.0 / 4 + 3
     0.5 + 3
     3.5

II:  (double)(2 / 4) + 3
     (double)(0) + 3
     0.0 + 3
     3.0

III: (double)(2 / 4 + 3)
     (double)(0 + 3)
     (double)(3)
     3.0
```

## 易错点

1. **cast 太晚没有用。**

   如果整数除法已经发生了：

   ```java
   2 / 4 = 0
   ```

   后面再转成 `double` 也只能得到：

   ```java
   0.0
   ```

2. **学生容易以为只要有 `(double)` 就一定会有小数。**

   不对。要看 cast 在整数除法之前还是之后。

3. **`(double)(2 / 4)` 和 `(double)2 / 4` 完全不同。**

---

# Q7 - Nested if 转 Boolean expression

## 答案

**E**

```java
boolean b2 = (num < -100) || (num > 0 && num < 100);
```

## 考点

- nested `if`
- `if-else`
- compound boolean expression
- 代码等价转换
- 区间判断

## 解题思路

先看原代码什么时候 `b1` 保持 `true`。

初始：

```java
boolean b1 = true;
```

只有某些情况下会变成 `false`。

### 情况 1：`num > 0`

进入第一个分支：

```java
if (num >= 100)
{
    b1 = false;
}
```

所以：

```text
num > 0 且 num >= 100  → false
num > 0 且 num < 100   → true
```

也就是：

```java
num > 0 && num < 100
```

### 情况 2：`num <= 0`

进入 `else`：

```java
if (num >= -100)
{
    b1 = false;
}
```

所以：

```text
-100 <= num <= 0 → false
num < -100       → true
```

也就是：

```java
num < -100
```

合起来：

```java
num < -100 || (num > 0 && num < 100)
```

## 区间图

```text
< -100        -100        0        100        > 100
 true   |    false    | false |   true   |   false
```

更清楚地写：

```text
num < -100              → true
-100 <= num <= 0        → false
0 < num < 100           → true
num >= 100              → false
```

## 易错点

1. **边界值容易错。**

   - `num == -100` 时：进入 `else`，`num >= -100` true，所以 `b1 = false`
   - `num == 0` 时：进入 `else`，`num >= -100` true，所以 `b1 = false`
   - `num == 100` 时：进入 `num > 0` 分支，`num >= 100` true，所以 `b1 = false`

   所以答案里必须是：

   ```java
   num < -100
   ```

   和

   ```java
   num > 0 && num < 100
   ```

2. **不要把 `num > -100 && num < 100` 当答案。**

   这会让 `-50` 和 `0` 变成 true，但原代码里它们是 false。

3. **注意 `else` 对应的是 `num <= 0`，不是只对应负数。**

---

# Q10 - 找出打印 `"0 10 "` 的 method call

## 答案

**D**

```java
printSome(20, 5)
```

## 考点

- `for` loop
- `%` remainder
- compound boolean expression
- loop range
- 用 test cases 验证输出

## 解题思路

方法如下：

```java
for (int i = 0; i < num1; i++)
{
    if (i % num2 == 0 && i % 2 == 0)
    {
        System.out.print(i + " ");
    }
}
```

会打印满足两个条件的 `i`：

```java
i % num2 == 0
```

说明 `i` 是 `num2` 的倍数。

```java
i % 2 == 0
```

说明 `i` 是偶数。

要打印：

```text
0 10
```

说明循环范围必须包括 `0` 和 `10`，但不能包括满足条件的下一个数，比如 `20`。

选 D：

```java
printSome(20, 5)
```

循环范围：

```java
i = 0, 1, 2, ..., 19
```

同时满足：

```text
5 的倍数：0, 5, 10, 15
偶数：0, 2, 4, 6, 8, 10, ...
共同满足：0, 10
```

所以输出：

```text
0 10 
```

## 代码追踪

```text
num1 = 20, num2 = 5

i = 0   → 0 % 5 == 0, 0 % 2 == 0 → print 0
i = 5   → 5 % 5 == 0, 5 % 2 != 0 → no
i = 10  → 10 % 5 == 0, 10 % 2 == 0 → print 10
i = 15  → 15 % 5 == 0, 15 % 2 != 0 → no
i = 20  → 不进入循环，因为 i < 20
```

## 易错点

1. **不要忘记循环条件是 `i < num1`。**

   `printSome(20, 5)` 不会检查 `i = 20`。

2. **`i % num2 == 0` 不是说 `num2` 是 `i` 的倍数，而是 `i` 是 `num2` 的倍数。**

3. **选 E 会多打印 20。**

   ```java
   printSome(25, 5)
   ```

   范围是 `0` 到 `24`，所以会打印：

   ```text
   0 10 20
   ```

---

# Q11 - while loop 输出 `"987654321"`

## 答案

**C**

```java
int num = 10;
while (num > 1)
{
    num--;
    System.out.print(num);
}
```

## 考点

- `while` loop
- decrement
- print before decrement vs. decrement before print
- loop boundary

## 解题思路

目标输出：

```text
987654321
```

说明第一位应该是 `9`，最后一位应该是 `1`。

选 C 的逻辑是：

```java
num = 10
while (num > 1)
{
    num--;
    print(num);
}
```

它先减，再打印。

所以第一次：

```java
num = 10
num-- → 9
print 9
```

最后一次：

```java
num = 2
num-- → 1
print 1
```

下一次：

```java
num = 1
num > 1 false
```

结束。

## 代码追踪

```text
start: num = 10

check 10 > 1 → true
num-- → 9
print 9

check 9 > 1 → true
num-- → 8
print 8

...

check 2 > 1 → true
num-- → 1
print 1

check 1 > 1 → false
stop
```

输出：

```text
987654321
```

## 易错点

1. **A 会打印 `10`。**

   因为它是先 print 再减：

   ```text
   10987654321
   ```

2. **D 会多打印 `0`。**

   因为条件是：

   ```java
   num >= 1
   ```

   当 `num = 1` 时还会进入循环，然后先减成 `0`，再打印。

3. **判断 while loop 时要问两个问题：**

   - 先打印还是先修改？
   - 最后一次进入循环时变量是多少？

---

# Q12 - `null` checking：用 `!= null`，不要先调用方法

## 答案

**B：II only**

```java
borrower != null
```

## 考点

- `null`
- object reference
- `NullPointerException`
- comparing object references
- safe condition before method call

## 解题思路

题目问：哪个条件可以保证不会 runtime error？

核心风险在这里：

```java
borrower.getName()
```

如果 `borrower` 是 `null`，调用：

```java
borrower.getName()
```

会直接抛出：

```text
NullPointerException
```

所以在调用 `borrower.getName()` 之前，必须先确认：

```java
borrower != null
```

## 三个条件逐个判断

### I

```java
!borrower.equals(null)
```

错误。

如果 `borrower` 本身就是 `null`，那么：

```java
borrower.equals(null)
```

已经是在对 `null` 调用方法，会造成 `NullPointerException`。

### II

```java
borrower != null
```

正确。

这是最安全、最标准的 null check。

### III

```java
borrower.getName() != null
```

错误。

如果 `borrower` 是 `null`，还没检查到 `getName()` 是否为 null，就已经因为：

```java
borrower.getName()
```

崩了。

## 代码追踪

假设：

```java
borrower = null;
```

### I

```java
borrower.equals(null)
```

等于：

```text
null.equals(null)
```

直接 runtime error。

### II

```java
borrower != null
```

结果：

```java
false
```

不会进入 `if`，安全。

### III

```java
borrower.getName() != null
```

等于：

```text
null.getName()
```

直接 runtime error。

## 易错点

1. **检查 null 时不能用 `.equals`。**

   标准写法是：

   ```java
   borrower != null
   ```

2. **不要先调用方法再判断。**

   这类写法很危险：

   ```java
   borrower.getName() != null
   ```

3. **这题不是问 name 是否为 null，而是问 printDetails 会不会 runtime error。**

   先保证 `borrower` 不是 null，才有资格谈 `borrower.getName()`。

---

# Q15 - `Math.random()` 的范围

## 答案

**E：A random integer between `a` and `2*a - 1`, inclusive**

## 考点

- `Math.random()`
- casting to `int`
- range analysis
- inclusive vs. exclusive

## 解题思路

代码：

```java
int b = a + (int) (Math.random() * a);
```

已知：

```java
Math.random()
```

返回范围是：

```text
0.0 <= Math.random() < 1.0
```

乘以 `a`：

```text
0.0 <= Math.random() * a < a
```

cast 成 `int`：

```text
0 到 a - 1
```

所以：

```java
a + (0 到 a - 1)
```

范围是：

```text
a 到 2a - 1
```

## 举例

假设：

```java
a = 5
```

那么：

```java
Math.random() * 5
```

范围：

```text
0.0 <= value < 5.0
```

cast 成 `int` 后可能是：

```text
0, 1, 2, 3, 4
```

所以：

```java
b = 5 + 0 到 5 + 4
```

也就是：

```text
5, 6, 7, 8, 9
```

这就是：

```text
a 到 2a - 1
```

## 易错点

1. **`Math.random()` 不会返回 1.0。**

   所以最大不会到：

   ```java
   2 * a
   ```

2. **cast 的位置很重要。**

   ```java
   (int)(Math.random() * a)
   ```

   是先乘，再截断。

3. **`(int)Math.random()` 永远是 0。**

   因为 `Math.random()` 小于 1，转成 int 后就是 0。

   但本题不是这样写的。

---

# Q18 - `countPeaks` 中避免数组越界

## 答案

**E**

```java
int p = 1; p < data.length - 1; p++
```

## 考点

- array traversal
- index bounds
- local maximum
- `ArrayIndexOutOfBoundsException`
- loop header

## 解题思路

题目要找 local maximum：

```java
data[p - 1] < data[p] && data[p] > data[p + 1]
```

这说明每次检查 `data[p]` 时，需要访问：

```java
data[p - 1]
data[p]
data[p + 1]
```

所以 `p` 不能是第一个 index：

```java
p != 0
```

也不能是最后一个 index：

```java
p != data.length - 1
```

因此合法的 `p` 范围是：

```text
1 到 data.length - 2
```

对应 loop header：

```java
for (int p = 1; p < data.length - 1; p++)
```

## 数组位置图

假设：

```java
data.length = 8
```

index 是：

```text
0   1   2   3   4   5   6   7
```

第一个和最后一个不能算 peak，因为它们没有左右两个邻居。

能检查的是：

```text
1, 2, 3, 4, 5, 6
```

也就是：

```java
p = 1; p < 7; p++
```

因为：

```java
data.length - 1 = 7
```

## 易错点

1. **`p = 0` 会导致 `data[p - 1]` 越界。**

   ```java
   data[-1]
   ```

2. **`p = data.length - 1` 会导致 `data[p + 1]` 越界。**

   ```java
   data[data.length]
   ```

3. **这题不是遍历所有元素，而是遍历所有“有两个邻居”的元素。**

---

# Q19 - 2D array 遍历并修改第一列

## 答案

**D：26**

## 考点

- 2D array
- nested loops
- row / column index
- 修改数组元素后再累加
- `values.length` vs. `values[0].length`

## 解题思路

原数组：

```java
int[][] values = {{1, 2, 3}, {4, 5, 6}};
```

可以画成：

```text
row 0: 1  2  3
row 1: 4  5  6
```

代码：

```java
if (k == 0)
{
    values[j][k] *= 2;
}
x += values[j][k];
```

当 `k == 0` 时，也就是每一行的第一列，会被乘以 2。

所以：

```text
row 0, col 0: 1 → 2
row 1, col 0: 4 → 8
```

最终加的是：

```text
2 + 2 + 3 + 8 + 5 + 6 = 26
```

## 代码追踪

| j | k | 原值 | 是否 `k == 0` | 加到 x 的值 | x |
|---|---|---:|---|---:|---:|
| 0 | 0 | 1 | 是，变 2 | 2 | 2 |
| 0 | 1 | 2 | 否 | 2 | 4 |
| 0 | 2 | 3 | 否 | 3 | 7 |
| 1 | 0 | 4 | 是，变 8 | 8 | 15 |
| 1 | 1 | 5 | 否 | 5 | 20 |
| 1 | 2 | 6 | 否 | 6 | 26 |

## 易错点

1. **`k == 0` 是第一列，不是第一行。**

   `j` 是 row，`k` 是 column。

2. **先修改，再累加。**

   当 `k == 0` 时，代码先执行：

   ```java
   values[j][k] *= 2;
   ```

   然后才：

   ```java
   x += values[j][k];
   ```

3. **原数组总和是 21，但答案不是 21。**

   因为第一列被修改了。

---

# Q20 - Enhanced for loop 中访问 private instance variable

## 答案

**B**

```java
if (b.getPages() > maxPages)
{
    maxPages = b.getPages();
}
```

## 考点

- enhanced for loop
- array traversal
- private instance variable
- accessor method
- finding maximum

## 解题思路

代码：

```java
for (Book b : bookArr)
```

这里的 `b` 是什么？

它不是 index，而是当前遍历到的 `Book` object。

所以要得到页数，应该写：

```java
b.getPages()
```

不能写：

```java
b.pages
```

因为 `pages` 是 private。

也不能写：

```java
bookArr[b]
```

因为 `b` 不是 int index。

## 标准 maximum pattern

```java
int maxPages = bookArr[0].getPages();

for (Book b : bookArr)
{
    if (b.getPages() > maxPages)
    {
        maxPages = b.getPages();
    }
}
```

逻辑：

```text
如果当前书的页数 > 目前最大页数
就更新最大页数
```

## 易错点

1. **Enhanced for loop 里的变量不是 index。**

   ```java
   for (Book b : bookArr)
   ```

   `b` 是 `Book` object，不是 `0, 1, 2...`

2. **private 变量不能在类外直接访问。**

   错误：

   ```java
   b.pages
   ```

   正确：

   ```java
   b.getPages()
   ```

3. **`Book[b]` 完全不是合法写法。**

   `Book` 是 class name，不是 array。

---

# Q21 - 从当前位置到末尾找 shortest String

## 答案

**D**

```java
{"of", "of", "of", "spring"}
```

## 考点

- array traversal
- nested loops
- String `.length()`
- algorithm tracing
- “从当前位置往后找最短值”

## 解题思路

方法核心：

```java
for (int j = 0; j < arr.length; j++)
{
    String sm = arr[j];

    for (int k = j + 1; k < arr.length; k++)
    {
        if (arr[k].length() < sm.length())
        {
            sm = arr[k];
        }
    }

    result[j] = sm;
}
```

对于每个 `j`，它从 `arr[j]` 到数组末尾找最短字符串，然后放到 `result[j]`。

输入：

```java
{"first", "day", "of", "spring"}
```

长度：

```text
first  → 5
day    → 3
of     → 2
spring → 6
```

## 代码追踪

### j = 0

从：

```text
first, day, of, spring
```

里面找最短。

最短是：

```text
of
```

所以：

```java
result[0] = "of"
```

### j = 1

从：

```text
day, of, spring
```

里面找最短。

最短还是：

```text
of
```

所以：

```java
result[1] = "of"
```

### j = 2

从：

```text
of, spring
```

里面找最短。

最短还是：

```text
of
```

所以：

```java
result[2] = "of"
```

### j = 3

从：

```text
spring
```

里面找最短。

只有一个，所以：

```java
result[3] = "spring"
```

最终：

```java
{"of", "of", "of", "spring"}
```

## 易错点

1. **这不是排序。**

   很多学生会以为它把数组按长度排序。

   但它没有交换元素，也没有改变原数组，只是在每个位置记录“从这里到末尾的最短字符串”。

2. **`k` 从 `j + 1` 开始，不是从 0 开始。**

3. **最后一个元素一定等于原数组最后一个元素。**

   因为最后一次外层循环时，内层循环不会执行。

---

# Q22 - 计算 `Line 12` 执行次数

## 答案

**A：4 times**

## 考点

- nested loops
- statement execution count
- String length comparison
- tracing variable updates
- 不是数循环次数，而是数特定语句执行次数

## 解题思路

`Line 12` 是：

```java
sm = arr[k];
```

它只在这个条件成立时执行：

```java
arr[k].length() < sm.length()
```

也就是说，只有找到一个“新的更短字符串”时，才执行一次。

输入：

```java
{"last", "day", "of", "the", "school", "year"}
```

长度：

```text
last   4
day    3
of     2
the    3
school 6
year   4
```

## 代码追踪

### j = 0

```java
sm = "last"  // length 4
```

往后看：

```text
day    length 3 < 4 → update sm = "day"     Line 12 执行 1 次
of     length 2 < 3 → update sm = "of"      Line 12 执行 1 次
the    length 3 < 2 → no
school length 6 < 2 → no
year   length 4 < 2 → no
```

目前共 2 次。

### j = 1

```java
sm = "day"  // length 3
```

往后看：

```text
of     length 2 < 3 → update sm = "of"      Line 12 执行 1 次
the    length 3 < 2 → no
school length 6 < 2 → no
year   length 4 < 2 → no
```

目前共 3 次。

### j = 2

```java
sm = "of"  // length 2
```

后面没有更短的。

共 3 次。

### j = 3

```java
sm = "the"  // length 3
```

后面：

```text
school length 6 < 3 → no
year   length 4 < 3 → no
```

共 3 次。

### j = 4

```java
sm = "school"  // length 6
```

后面：

```text
year length 4 < 6 → update sm = "year"      Line 12 执行 1 次
```

共 4 次。

### j = 5

没有内层循环。

最终：

```text
Line 12 执行 4 次
```

## 易错点

1. **不要数 inner loop 总次数。**

   inner loop 总共会比较很多次，但 `Line 12` 只在 if 条件 true 时执行。

2. **不要只和 `arr[j]` 比。**

   它是和当前的 `sm` 比。`sm` 会被更新。

3. **`school` 后面还有 `year`，所以 j = 4 时会再更新一次。**

---

# Q23 - 用 enhanced for loop 进行 row-major traversal

## 答案

**D**

```java
for (int[] j : arr)
{
    for (int k : j)
    {
        System.out.print(k + " ");
    }
}
```

## 考点

- 2D array
- enhanced for loop
- row-major traversal
- `int[][]` 中一行是 `int[]`

## 解题思路

对于二维数组：

```java
int[][] arr
```

它的每一行是一个一维数组：

```java
int[]
```

所以 enhanced for loop 遍历二维数组时，外层变量类型应该是：

```java
int[] j
```

不是：

```java
int j
```

然后内层遍历这一行：

```java
for (int k : j)
```

这里的 `k` 是这一行里的每一个 int 值。

所以打印：

```java
System.out.print(k + " ");
```

## 代码追踪

数组：

```java
{{1, 2}, {3, 4}, {5, 6}, {7, 8}}
```

外层每次拿到一行：

```text
j = {1, 2}
j = {3, 4}
j = {5, 6}
j = {7, 8}
```

内层打印每一行里的元素：

```text
1 2 3 4 5 6 7 8
```

## 易错点

1. **外层变量必须是 `int[]`。**

   错误：

   ```java
   for (int j : arr)
   ```

   因为 `arr` 的元素不是 `int`，而是 `int[]`。

2. **打印的是 `k`，不是 `j`。**

   `j` 是整行数组，`k` 才是当前元素。

3. **不要用元素当 index。**

   选项 E 里：

   ```java
   arr[k]
   ```

   `k` 是数组中的值，不一定是合法 index。

---

# Q24 - static variable 所有对象共享

## 答案

**D：14**

## 考点

- static variable
- instance variable vs. class variable
- constructor
- method overloading
- object sharing class-level data

## 解题思路

类中：

```java
private static int y = 0;
```

`y` 是 static，说明它属于 class，不属于某一个 object。

所有 `SomeClass` objects 共享同一个 `y`。

每次 constructor 执行：

```java
y++;
```

代码：

```java
SomeClass first = new SomeClass(10);
SomeClass second = new SomeClass(20);
SomeClass third = new SomeClass(30);
```

创建 3 个对象，所以：

```text
y: 0 → 1 → 2 → 3
```

然后：

```java
first.incrementY();
```

让 `y++`：

```text
3 → 4
```

再：

```java
second.incrementY(10);
```

让：

```java
y += 10
```

所以：

```text
4 → 14
```

最后：

```java
third.getY()
```

虽然通过 `third` 调用，但它读的是同一个 static `y`。

所以输出：

```text
14
```

## 代码追踪

| 语句 | y 的变化 |
|---|---:|
| 初始 | 0 |
| `new SomeClass(10)` | 1 |
| `new SomeClass(20)` | 2 |
| `new SomeClass(30)` | 3 |
| `first.incrementY()` | 4 |
| `second.incrementY(10)` | 14 |
| `third.getY()` | 返回 14 |

## 易错点

1. **`x` 是每个对象自己的，`y` 是所有对象共享的。**

2. **不要被 `third.getY()` 迷惑。**

   它不是返回 `third` 自己的 `y`，因为 `y` 是 static。

3. **constructor 里也会修改 `y`。**

   很多学生只数后面两个 method call，得到 11，这是常见错误。

---

# Q25 - String substring 反向拼接

## 答案

**D：`"lppa"`**

## 考点

- String methods
- `substring(start, end)`
- loop boundary
- reverse traversal
- off-by-one

## 解题思路

代码：

```java
for (int i = str.length() - 1; i > 0; i--)
{
    temp += str.substring(i - 1, i);
}
```

输入：

```java
"apple"
```

index：

```text
a  p  p  l  e
0  1  2  3  4
```

`str.length() = 5`

所以：

```java
i = str.length() - 1 = 4
```

循环条件：

```java
i > 0
```

所以 `i` 会是：

```text
4, 3, 2, 1
```

注意不会有 `i = 0`。

每次取：

```java
substring(i - 1, i)
```

## 代码追踪

| i | substring | 取到的字符 | temp |
|---|---|---|---|
| 4 | `substring(3, 4)` | `"l"` | `"l"` |
| 3 | `substring(2, 3)` | `"p"` | `"lp"` |
| 2 | `substring(1, 2)` | `"p"` | `"lpp"` |
| 1 | `substring(0, 1)` | `"a"` | `"lppa"` |

返回：

```java
"lppa"
```

## 易错点

1. **不会取到最后一个字符 `"e"`。**

   因为第一次是：

   ```java
   substring(3, 4)
   ```

   取的是 index 3，也就是 `"l"`。

2. **`substring(start, end)` 包含 start，不包含 end。**

3. **这不是完整 reverse。**

   完整反转 `"apple"` 应该是 `"elppa"`，但这段代码跳过了最后一个字符 `"e"`。

---

# Q26 - 比较两个 loop 打印次数

## 答案

**C：`"A"` is printed `m` more times than `"B"`**

## 考点

- loop count
- nested loops
- informal runtime analysis
- `m * n`
- off-by-one

## 解题思路

### Code Segment I

```java
for (int i = 0; i < m * n; i++)
{
    System.out.print("A");
}
```

`i` 从 `0` 到 `m*n - 1`。

所以 `"A"` 打印：

```text
m * n 次
```

### Code Segment II

```java
for (int j = 1; j <= m; j++)
{
    for (int k = 1; k < n; k++)
    {
        System.out.print("B");
    }
}
```

外层：

```java
j = 1 到 m
```

执行：

```text
m 次
```

内层：

```java
k = 1 到 n - 1
```

执行：

```text
n - 1 次
```

总次数：

```text
m * (n - 1)
= m*n - m
```

比较：

```text
A: m*n
B: m*n - m
```

所以：

```text
A 比 B 多 m 次
```

## 举例验证

假设：

```java
m = 3, n = 4
```

Code I：

```text
A 打印 3 * 4 = 12 次
```

Code II：

```text
外层 3 次
内层每次 k = 1, 2, 3，共 3 次
B 打印 3 * 3 = 9 次
```

差：

```text
12 - 9 = 3 = m
```

## 易错点

1. **内层不是执行 n 次，而是 n - 1 次。**

   因为：

   ```java
   k = 1; k < n
   ```

2. **外层是 m 次。**

   因为：

   ```java
   j = 1; j <= m
   ```

3. **看到 nested loop 不要直接想 `m*n`，要分别数每层。**

---

# Q27 - Boolean expression 简化

## 答案

**E：When `b` has the value `false`**

## 考点

- Boolean expression
- logical operators
- simplification
- truth table

## 解题思路

表达式：

```java
boolean c = (a && b) || (!a && b);
```

两个部分都有 `b`：

```java
(a && b) || (!a && b)
```

可以提取共同部分：

```java
b && (a || !a)
```

而：

```java
a || !a
```

永远是 true。

所以整个表达式等价于：

```java
b && true
```

也就是：

```java
b
```

所以：

```text
c 的值其实就等于 b 的值
```

因此，`c` 为 false 的条件就是：

```java
b == false
```

## Truth table

| a | b | `a && b` | `!a && b` | c |
|---|---|---|---|---|
| true | true | true | false | true |
| true | false | false | false | false |
| false | true | false | true | true |
| false | false | false | false | false |

只要 `b` 是 false，`c` 就是 false。

## 易错点

1. **不要只看 `a`。**

   `a` 为 true 或 false 都可能让 c 为 true，只要 `b` 是 true。

2. **`a && b` 和 `!a && b` 是互补情况。**

   一个处理 `a == true`，一个处理 `a == false`。

3. **这题最快方法是提取共同因子 `b`。**

---

# Q28 - 循环删除 String 中所有 `"ng"`

## 答案

**B：`"si the so"`**

## 考点

- String `indexOf`
- `substring`
- while loop
- removing substrings
- String reassignment

## 解题思路

方法：

```java
int x = a.indexOf(b);

while (x >= 0)
{
    a = a.substring(0, x) + a.substring(x + b.length());
    x = a.indexOf(b);
}

return a;
```

它的作用是：

```text
反复找到 b 在 a 中的位置，然后把这一段 b 删除。
```

调用：

```java
abMethod("sing the song", "ng")
```

要删除所有 `"ng"`。

## 代码追踪

初始：

```text
a = "sing the song"
b = "ng"
```

第一次找：

```java
a.indexOf("ng")
```

`"sing"` 里的 `"ng"` 起始 index 是 2。

```text
s i n g   t h e   s o n g
0 1 2 3 4 5 6 7 8 9 10 11
```

删除 index 2 到 3 的 `"ng"`：

```java
a.substring(0, 2)      → "si"
a.substring(2 + 2)     → a.substring(4) → " the song"
```

拼起来：

```text
"si the song"
```

第二次找 `"ng"`：

```text
"si the song"
```

最后 `"song"` 里还有 `"ng"`。

删除后得到：

```text
"si the so"
```

第三次找 `"ng"`：

```java
indexOf("ng") = -1
```

循环结束。

返回：

```java
"si the so"
```

## 易错点

1. **只删一次会得到 `"si the song"`，但 while 会继续删。**

2. **`indexOf` 找不到时返回 `-1`。**

   所以循环条件是：

   ```java
   x >= 0
   ```

3. **`substring(x + b.length())` 是从被删除字符串后面开始。**

   这里 `b.length()` 是 2，因为 `"ng"` 长度为 2。

---

# Q29 - Recursive method 累加 `num / 2`

## 答案

**E：41**

## 考点

- recursion
- base case
- integer division
- recursive return value
- call stack

## 解题思路

方法：

```java
public static int calcMethod(int num)
{
    if (num == 0)
    {
        return 10;
    }

    return num + calcMethod(num / 2);
}
```

调用：

```java
calcMethod(16)
```

因为 `num / 2` 是整数除法：

```text
16 → 8 → 4 → 2 → 1 → 0
```

当 `num == 0` 时返回 10。

所以：

```text
calcMethod(16)
= 16 + calcMethod(8)
= 16 + 8 + calcMethod(4)
= 16 + 8 + 4 + calcMethod(2)
= 16 + 8 + 4 + 2 + calcMethod(1)
= 16 + 8 + 4 + 2 + 1 + calcMethod(0)
= 16 + 8 + 4 + 2 + 1 + 10
= 41
```

## 递归展开图

```text
calcMethod(16)
  = 16 + calcMethod(8)
         = 8 + calcMethod(4)
               = 4 + calcMethod(2)
                     = 2 + calcMethod(1)
                           = 1 + calcMethod(0)
                                 = 10
```

回收：

```text
1 + 10 = 11
2 + 11 = 13
4 + 13 = 17
8 + 17 = 25
16 + 25 = 41
```

## 易错点

1. **base case 返回的是 10，不是 0。**

   如果学生忘了加 10，会得到：

   ```text
   16 + 8 + 4 + 2 + 1 = 31
   ```

   这是常见错误。

2. **`1 / 2` 是 0。**

   因为 integer division。

3. **递归不是只执行一次。**

   每次都要继续调用，直到 `num == 0`。

---

# Q31 - 统计数组中的负数

## 答案

**A：I only**

## 考点

- array traversal
- while loop
- for loop
- enhanced for loop
- index vs. element
- off-by-one

## 解题思路

题目问哪些 code segments 能正确统计 `nums` 里的负数数量。

### Segment I

```java
int counter = 0;
int i = -1;

while (i <= nums.length - 2)
{
    i++;

    if (nums[i] < 0)
    {
        counter++;
    }
}
```

看起来奇怪，但它是正确的。

`i` 初始为 `-1`，进入循环后马上：

```java
i++;
```

所以第一次检查的是：

```java
nums[0]
```

最后一次呢？

当：

```java
i = nums.length - 2
```

还能进入循环，进入后：

```java
i++;
```

变成：

```java
nums.length - 1
```

刚好检查最后一个元素。

所以 Segment I 检查了：

```text
nums[0] 到 nums[nums.length - 1]
```

正确。

### Segment II

```java
for (int i = 1; i < nums.length; i++)
```

从 `i = 1` 开始，所以漏掉：

```java
nums[0]
```

错误。

### Segment III

```java
for (int i : nums)
{
    if (nums[i] < 0)
```

这里 enhanced for loop 中的 `i` 是数组里的元素值，不是 index。

如果 `nums` 是：

```java
{-3, 5, -1}
```

第一次 `i = -3`，代码会尝试访问：

```java
nums[-3]
```

可能直接越界。

错误。

## Segment I 代码追踪

假设：

```java
nums.length = 4
```

初始：

```java
i = -1
```

| while 检查时 i | 条件 `i <= nums.length - 2` | i++ 后 | 检查 |
|---:|---|---:|---|
| -1 | true | 0 | `nums[0]` |
| 0 | true | 1 | `nums[1]` |
| 1 | true | 2 | `nums[2]` |
| 2 | true | 3 | `nums[3]` |
| 3 | false | stop | stop |

## 易错点

1. **Enhanced for loop 变量是 element，不是 index。**

   ```java
   for (int i : nums)
   ```

   这里 `i` 是值。

2. **Segment I 虽然怪，但没错。**

   因为它先 `i++`，再访问数组。

3. **Segment II 漏掉 index 0。**

   如果第一个元素是负数，就会少算。

---

# Q33 - 2D array column-major traversal

## 答案

**E**

输出：

```text
F J
G K
H L
```

## 考点

- 2D array
- nested loops
- row vs. column
- column-major traversal
- loop start index

## 解题思路

数组：

```java
String[][] letters = {
    {"A", "B", "C", "D"},
    {"E", "F", "G", "H"},
    {"I", "J", "K", "L"}
};
```

画成表格：

```text
        col0 col1 col2 col3
row0     A    B    C    D
row1     E    F    G    H
row2     I    J    K    L
```

循环：

```java
for (int col = 1; col < letters[0].length; col++)
{
    for (int row = 1; row < letters.length; row++)
    {
        System.out.print(letters[row][col] + " ");
    }

    System.out.println();
}
```

外层是 `col`，内层是 `row`。

所以它是按列走，而且从：

```text
col = 1
row = 1
```

开始。

也就是说，它跳过第 0 行和第 0 列。

## 代码追踪

### col = 1

row 从 1 到 2：

```java
letters[1][1] = "F"
letters[2][1] = "J"
```

打印：

```text
F J
```

换行。

### col = 2

```java
letters[1][2] = "G"
letters[2][2] = "K"
```

打印：

```text
G K
```

换行。

### col = 3

```java
letters[1][3] = "H"
letters[2][3] = "L"
```

打印：

```text
H L
```

最终：

```text
F J
G K
H L
```

## 易错点

1. **外层是 col，不是 row。**

   所以这是 column-major，不是 row-major。

2. **两个 loop 都从 1 开始。**

   所以不会打印 A、B、C、D、E、I。

3. **`println()` 在外层循环里面、内层循环后面。**

   所以每一列打印完后换行。

---

# Q34 - remove ArrayList 元素时跳过元素

## 答案

**E：The method skips some elements of `numList` during the traversal.**

## 考点

- `ArrayList.remove(index)`
- while loop
- index shifting
- traversal while removing
- common bug pattern

## 解题思路

关键代码：

```java
if (num % key == 0)
{
    numList.remove(i);
    returnList.add(num);
}

i++;
```

问题在于：

```java
numList.remove(i)
```

会把后面的元素全部向左移动。

但是代码无论有没有删除，最后都会：

```java
i++;
```

这就会跳过刚刚移到当前位置的新元素。

## 代码追踪

题目例子：

```java
numList = [5, 2, 10, 20, 16]
key = 5
```

目标是删除：

```text
5, 10, 20
```

### i = 0

```java
num = 5
5 % 5 == 0
```

删除 index 0：

```text
[5, 2, 10, 20, 16]
 ↓ remove
[2, 10, 20, 16]
```

然后：

```java
i++;
```

所以 `i = 1`。

### i = 1

现在 index 1 是：

```java
10
```

删除：

```text
[2, 10, 20, 16]
    ↓ remove
[2, 20, 16]
```

然后：

```java
i++;
```

所以 `i = 2`。

### i = 2

现在 index 2 是：

```java
16
```

注意：`20` 已经移动到了 index 1，但是被跳过了。

所以最后 `20` 没有被删除。

错误结果可能是：

```text
numList = [2, 20, 16]
returnList = [5, 10]
```

而不是题目想要的：

```text
numList = [2, 16]
returnList = [5, 10, 20]
```

## 易错点

1. **删除后不要立刻无脑 `i++`。**

   如果删除了当前元素，下一个元素已经自动移到当前 index。

2. **这不会因为 `remove` 后再 `add` 而出错。**

   `num` 已经提前保存了：

   ```java
   int num = numList.get(i);
   ```

3. **这通常不会导致 `IndexOutOfBoundsException`，而是逻辑上跳过元素。**

---

# Q35 - 找 mode：统计每个值出现次数

## 答案

**A**

| missing condition 1 | missing condition 2 |
|---|---|
| `arr[j] == arr[k]` | `valCount > modeCount` |

## 考点

- array traversal
- nested loops
- frequency counting
- finding mode
- updating maximum count

## 解题思路

外层 `j` 固定一个候选值：

```java
arr[j]
```

内层 `k` 遍历整个数组，统计这个值出现了多少次。

所以 condition 1 应该是：

```java
arr[j] == arr[k]
```

如果相等，说明找到一次出现：

```java
valCount++;
```

内层结束后，如果当前值出现次数比目前最多次数还多，就更新 mode：

```java
if (valCount > modeCount)
```

## 代码追踪

数组：

```java
{6, 5, 1, 5, 2, 6, 5}
```

初始：

```java
modeCount = 1
mode = 6
```

### j = 0

```java
arr[j] = 6
```

6 出现 2 次。

```java
valCount = 2
```

因为：

```java
2 > 1
```

更新：

```java
modeCount = 2
mode = 6
```

### j = 1

```java
arr[j] = 5
```

5 出现 3 次。

```java
valCount = 3
```

因为：

```java
3 > 2
```

更新：

```java
modeCount = 3
mode = 5
```

后面其他值出现次数不会超过 3，所以最终返回：

```java
5
```

## 易错点

1. **condition 1 不是 `arr[j] != arr[k]`。**

   那是在数“不同的值有多少个”，不是数当前值出现几次。

2. **condition 2 应该是 `valCount > modeCount`。**

   因为我们要找出现最多的值。

3. **`modeCount` 是历史最大次数，`valCount` 是当前候选值的次数。**

   学生容易把这两个变量角色搞反。

---

# Q36 - `floor(a / b)` vs. `ceil(a / b)`

## 答案

**D：When `a % b` is equal to zero**

## 考点

- for loop count
- while loop count
- integer division
- `a % b`
- floor vs. ceiling

## 解题思路

### methodOne

```java
for (int i = 0; i < a / b; i++)
{
    loopCount++;
}
```

因为 `a` 和 `b` 都是 int：

```java
a / b
```

是整数除法，也就是：

```text
floor(a / b)
```

所以 `methodOne` 返回：

```text
floor(a / b)
```

### methodTwo

```java
int i = 0;

while (i < a)
{
    loopCount++;
    i += b;
}
```

它每次加 `b`，直到 `i >= a` 停止。

这相当于问：

```text
需要加多少次 b，才能达到或超过 a？
```

所以它返回：

```text
ceil(a / b)
```

两个结果什么时候相同？

```text
floor(a / b) == ceil(a / b)
```

只有当 `a` 能被 `b` 整除时成立。

也就是：

```java
a % b == 0
```

## 代码追踪 1：可以整除

假设：

```java
a = 12, b = 3
```

### methodOne

```java
a / b = 12 / 3 = 4
```

loop 4 次。

### methodTwo

```text
i = 0  → count 1 → i = 3
i = 3  → count 2 → i = 6
i = 6  → count 3 → i = 9
i = 9  → count 4 → i = 12
i = 12 → i < 12 false
```

也是 4 次。

### 结果相同。

## 代码追踪 2：不能整除

假设：

```java
a = 11, b = 5
```

### methodOne

```java
a / b = 11 / 5 = 2
```

返回 2。

### methodTwo

```text
0----5----10----15
^
start

i = 0  → count 1 → i = 5
i = 5  → count 2 → i = 10
i = 10 → count 3 → i = 15
i = 15 → stop
```

返回 3。

所以不相同。

## 易错点

1. **`methodTwo` 在不能整除时会多一轮。**

   因为只要 `i < a`，就还要继续跑。

2. **`a / b` 是整数除法。**

   `11 / 5` 是 `2`，不是 `2.2`。

3. **这题不是看 a、b 奇偶。**

   关键是能不能整除，也就是：

   ```java
   a % b == 0
   ```

---

# Q37 - while loop 累加从 `num2` 到 `num3 - 1`

## 答案

**E：The sum of all integers from `num2` to `num3 - 1`, inclusive**

## 考点

- while loop
- accumulator
- loop boundary
- variable changes inside loop
- inclusive / exclusive endpoint

## 解题思路

代码：

```java
while (num2 < num3)
{
    num1 += num2;
    num2++;
}
```

每轮做两件事：

1. 把当前 `num2` 加到 `num1`
2. `num2++`

循环条件是：

```java
num2 < num3
```

所以当 `num2 == num3` 时，循环停止。

因此最后一次被加进去的是：

```java
num3 - 1
```

所以 `num1` 最后是：

```text
num2 + (num2 + 1) + ... + (num3 - 1)
```

## 代码追踪

假设：

```java
num2 = 3
num3 = 7
```

初始：

```java
num1 = 0
```

| 循环前 num2 | 条件 `num2 < num3` | 加到 num1 | num1 | num2++ 后 |
|---:|---|---:|---:|---:|
| 3 | true | 3 | 3 | 4 |
| 4 | true | 4 | 7 | 5 |
| 5 | true | 5 | 12 | 6 |
| 6 | true | 6 | 18 | 7 |
| 7 | false | stop | 18 | stop |

加的是：

```text
3 + 4 + 5 + 6
```

也就是从：

```text
num2 到 num3 - 1
```

## 易错点

1. **不包括 `num3`。**

   因为条件是：

   ```java
   num2 < num3
   ```

2. **题目里的 `num2` 会被修改。**

   但选项描述的是原始 `num2` 到 `num3 - 1` 的范围。

3. **这不是乘法。**

   虽然是 repeated addition，但每次加的数都在变，不是反复加同一个数。

---

# Q38 - 遍历 `ArrayList<Value>` 并调用 accessor

## 答案

**D：I and II**

## 考点

- `ArrayList`
- regular for loop
- enhanced for loop
- accessor method
- instance method call
- object traversal

## 解题思路

目标：sum all `num` instance variables of `Value` objects.

`num` 是 private，所以类外不能直接访问：

```java
v.num
```

要用：

```java
v.getNum()
```

### Segment I

```java
for (int x = 0; x < valueList.size(); x++)
{
    total += valueList.get(x).getNum();
}
```

正确。

这是 regular for loop，通过 index 拿 object：

```java
valueList.get(x)
```

再调用：

```java
.getNum()
```

### Segment II

```java
for (Value v : valueList)
{
    total += v.getNum();
}
```

正确。

Enhanced for loop 直接拿到每个 `Value` object，调用：

```java
v.getNum()
```

### Segment III

```java
for (Value v : valueList)
{
    total += getNum(v);
}
```

错误。

`getNum` 是 `Value` object 的 instance method，不是一个接收 `Value` 参数的普通方法。

正确写法应该是：

```java
v.getNum()
```

不是：

```java
getNum(v)
```

## 代码追踪

假设 `valueList` 里三个对象的 `num` 分别是：

```text
4, 7, 2
```

Segment I：

```text
x = 0 → valueList.get(0).getNum() = 4 → total = 4
x = 1 → valueList.get(1).getNum() = 7 → total = 11
x = 2 → valueList.get(2).getNum() = 2 → total = 13
```

Segment II：

```text
v → object with num 4 → total = 4
v → object with num 7 → total = 11
v → object with num 2 → total = 13
```

都正确。

## 易错点

1. **`getNum()` 必须通过 object 调用。**

   正确：

   ```java
   v.getNum()
   ```

   错误：

   ```java
   getNum(v)
   ```

2. **`valueList.get(x)` 返回的是一个 `Value` object。**

   所以可以继续：

   ```java
   valueList.get(x).getNum()
   ```

3. **private variable 要用 accessor。**

---

# Q39 - Recursive method 判断字符串是否严格递减

## 答案

**D**

```java
recurMethod("edcba")
```

## 考点

- recursion
- String `substring`
- `compareTo`
- lexicographic order
- base case
- test cases

## 解题思路

方法：

```java
if (str.length() <= 1)
{
    return true;
}
else if (str.substring(0, 1).compareTo(str.substring(1, 2)) > 0)
{
    return recurMethod(str.substring(1));
}
else
{
    return false;
}
```

关键条件：

```java
str.substring(0, 1).compareTo(str.substring(1, 2)) > 0
```

意思是：

```text
第 1 个字符 > 第 2 个字符
```

按字母顺序比较：

```text
e > d > c > b > a
```

所以这个方法检查的是：

```text
字符串中的字符是否严格递减
```

如果每一对相邻字符都是前一个大于后一个，就递归检查去掉第一个字符后的字符串。

如果字符串长度小于等于 1，说明检查完了，返回 true。

## 代码追踪：`"edcba"`

```text
"edcba": e > d → true → recurMethod("dcba")
"dcba":  d > c → true → recurMethod("cba")
"cba":   c > b → true → recurMethod("ba")
"ba":    b > a → true → recurMethod("a")
"a":     length <= 1 → true
```

所以：

```java
recurMethod("edcba")
```

返回 true。

## 其他选项快速判断

### A: `"abcba"`

开头：

```text
a > b ?
```

false。

所以返回 false。

### B: `"abcde"`

开头：

```text
a > b ?
```

false。

### C: `"bcdab"`

开头：

```text
b > c ?
```

false。

### E: `"edcde"`

前面一开始没问题：

```text
e > d
d > c
```

但到：

```text
c > d ?
```

false。

所以返回 false。

## 易错点

1. **`compareTo` 大于 0 表示左边字母排在右边后面。**

   例如：

   ```java
   "e".compareTo("d") > 0
   ```

   是 true。

2. **这题要检查每一对相邻字符，不是只看第一个和最后一个。**

3. **只要有一处不是严格递减，就返回 false。**

