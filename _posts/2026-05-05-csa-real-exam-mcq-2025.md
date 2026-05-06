---
title:  "CSA 2025年真考 MCQ 重点题型和解析"
mathjax: true
layout: post
categories: media
---

# Section 1 — 2025 AP CSA MCQ Questions

---

## Q1

Consider the following method, which is intended to return a copy of `phrase` with `word` moved to the end of `phrase`.

For example:

```text
phrase = "uncomfortable"
word = "comfort"
```

The method should return:

```text
"unablecomfort"
```

Assume that `word` is found exactly once in `phrase`.

```java
public static String moveIt(String phrase, String word)
{
    int index = phrase.indexOf(word);
    int len = word.length();
    return /* missing expression */;
}
```

Which expression can replace `/* missing expression */` so that the method works as intended?

(A)

```java
phrase.substring(0, index)
+ phrase.substring(index + len) + word
```

(B)

```java
phrase.substring(0, index)
+ phrase.substring(index + len - 1) + word
```

(C)

```java
phrase.substring(0, index - 1)
+ phrase.substring(index + len) + word
```

(D)

```java
phrase.substring(0, index - 1)
+ phrase.substring(index + len - 1) + word
```

(E)

```java
phrase.substring(0, index + 1)
+ phrase.substring(index + len) + word
```

---

## Q2

The code segment is intended to print the **double average** of the `int` variables `a` and `b`.

Example:

```java
a = 3;
b = 4;
```

The code should print:

```text
3.5
```

Code:

```java
int a = /* initial value not shown */;
int b = /* initial value not shown */;
double avg = /* missing expression */;
System.out.println(avg);
```

Which expression works?

(A)

```java
(a + b) / 2
```

(B)

```java
(double) a + b / 2
```

(C)

```java
(double) (a + b) / 2
```

(D)

```java
(double) (a + b / 2)
```

(E)

```java
(double) ((a + b) / 2)
```

---

## Q3

The following method is intended to reverse the digits of an integer.

Example:

```text
reverse(1234) → 4321
```

Given code:

```java
public static int reverse(int num)
{
    int retVal = 0;     // Line 7
    int digit = 0;

    while (num > 0)     // Line 10
    {
        digit = num % 10;                  // Line 12
        retVal += (retVal * 10) + digit;   // Line 13
        num = num / 10;                    // Line 14
    }

    return retVal;
}
```

Which line contains the error?

---

## Q4

Consider the following method, which is intended to return the median of three integer values. The median is the middle value when the three integers are sorted.

For example:

```java
findMedian(1, 2, 3)
```

should return:

```text
2
```

and:

```java
findMedian(3, 4, 3)
```

should return:

```text
3
```

The method does not always work as intended.

```java
public static int findMedian(int firstVal, int secVal, int thirdVal)
{
    int largestSoFar;

    if (secVal > firstVal)
    {
        largestSoFar = secVal;
    }
    else
    {
        largestSoFar = firstVal;
    }

    if (thirdVal > largestSoFar)
    {
        return largestSoFar;
    }
    else
    {
        return thirdVal;
    }
}
```

Which of the following method calls can be used to show that `findMedian` does not always work as intended?

(A)

```java
findMedian(3, 2, 1)
```

(B)

```java
findMedian(3, 8, 7)
```

(C)

```java
findMedian(5, 10, 16)
```

(D)

```java
findMedian(8, 3, 3)
```

(E)

```java
findMedian(10, 5, 10)
```

---

## Q5

Consider the following method.

```java
public static String enigma(String first, String second)
{
    int len;

    if (first.length() <= second.length())
    {
        len = first.length();
    }
    else
    {
        len = second.length();
    }

    String result = "";

    for (int i = 0; i < len; i++)
    {
        result += first.substring(i, i + 1)
               + second.substring(i, i + 1);
    }

    return result;
}
```

What is returned as a result of the call?

```java
enigma("abcde", "WXYZ")
```

(A) `"abcdWXYZ"`
(B) `"aWbXcYdZ"`
(C) `"aWbXcYdZe"`
(D) `"WaXbYcZd"`
(E) `"WXYZabcd"`

---

## Q6

Consider the following code segment.

```java
int count = 0;

for (int first = 10; first < 25; first++)
{
    for (int second = 25; second > 10; second--)   // Line 4
    {
        count++;
    }
}
```

The condition in line 4 is changed from:

```java
second > 10
```

to:

```java
second > first
```

What is the effect of this modification?

(A) Infinite loop
(B) Final value of `count = 0`
(C) Smaller final value of `count`
(D) Larger final value of `count`
(E) No change

---

## Q7

Consider the following class declaration.

```java
public class Road
{
    private String name;

    public Road()
    {
        name = "First";
    }

    public Road(String n)
    {
        name = n;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String n)
    {
        name = n;
    }
}
```

Code segment:

```java
Road a = new Road();
a.setName("Pine");

Road b = new Road("Pine");

Road c = a;
Road d = c;

d.setName("Maple");
```

Which Boolean expression evaluates to `false` after the code segment has been executed?

(A)

```java
a.getName().equals("Maple")
```

(B)

```java
a.getName().equals(c.getName())
```

(C)

```java
a == b
```

(D)

```java
a == c
```

(E)

```java
a == d
```

---

## Q8

Consider the following recursive method.

```java
public static int mystery(int n)
{
    if (n < 2)
    {
        return 2 * n;
    }
    else
    {
        return mystery(n - 1) + mystery(n - 2);
    }
}
```

What value is returned as a result of the call?

```java
mystery(4)
```

(A) 0
(B) 2
(C) 4
(D) 6
(E) 10

---

## Q9

Consider the following class declaration.

```java
public class Arithmetic
{
    private int value;

    public Arithmetic(int v)
    {
        value = v;
    }

    public void update()
    {
        value = value * value;
    }

    public void update(int num)
    {
        value = value + num;
    }

    public void update(int num1, int num2)
    {
        value = value * num1 + num2;
    }

    public int getValue()
    {
        return value;
    }
}
```

Code segment:

```java
Arithmetic alpha = new Arithmetic(3);
Arithmetic beta = new Arithmetic(2);

alpha.update(1);
alpha.update(2, 3);
beta.update();

System.out.println(alpha.getValue() + beta.getValue());
```

What is printed when the code segment is executed?

(A) 5
(B) 11
(C) 15
(D) 18
(E) 81

---

## Q10

Consider the following code segment.

```java
for (int j = 0; j < 3; j++)
{
    arr[j][j] = j;

    for (int k = 0; k < j; k++)
    {
        arr[j][k] = j - k;
        arr[k][j] = k - j;
    }
}
```

`arr` is a 3×3 integer array.

What are the contents of `arr` after execution?

(A)

```java
{ { 0, -1, -2 },
  { 1,  0, -1 },
  { 2,  1,  0 } }
```

(B)

```java
{ { 0, -1, -2 },
  { 1,  1, -1 },
  { 2,  1,  2 } }
```

(C)

```java
{ {  0,  1,  2 },
  { -1,  0,  1 },
  { -2, -1,  0 } }
```

(D)

```java
{ {  0,  1,  2 },
  { -1,  1,  1 },
  { -2,  2,  2 } }
```

(E)

```java
{ { 0, 1, 2 },
  { 1, 1, 1 },
  { 2, 1, 2 } }
```

---

## Q11

Questions Q11 and Q12 refer to the following method.

Consider the `reorder` method, which rearranges the elements of its `ArrayList<Integer>` parameter so that elements with odd values appear before all other elements.

For example, if `reorder` is called with an `ArrayList` containing:

```java
[2, 3, 5, 8, 4, 1]
```

then the `ArrayList` would contain:

```java
[3, 5, 1, 8, 4, 2]
```

after the method has been executed.

```java
/** Precondition: data contains at least two elements and all elements
 *                are greater than or equal to 0.
 */
public static void reorder(ArrayList<Integer> data)
{
    for (int i = 0; i < data.size(); i++)
    {
        if (data.get(i) % 2 == 0)          // Line 8
        {
            int index = i + 1;

            while (index < data.size() &&
                   data.get(index) % 2 == 0)   // Line 12
            {
                index++;
            }

            if (index < data.size())
            {
                int temp = data.get(i);    // Line 19
                data.set(i, data.get(index));
                data.set(index, temp);
            }
        }
    }
}
```

Consider a call to `reorder` with an `ArrayList` containing the values:

```java
[2, 6, 7, 4, 1, 8]
```

How many times will the statement in line 19 be executed as a result of the method call?

(A) 1 time
(B) 2 times
(C) 3 times
(D) 4 times
(E) 5 times

---

## Q12

Consider the following modifications to the `reorder` method from Q11.

In line 8, the expression:

```java
data.get(i) % 2 == 0
```

is changed to:

```java
data.get(i) / 2 == 0
```

In line 12, the expression:

```java
data.get(index) % 2 == 0
```

is changed to:

```java
data.get(index) / 2 == 0
```

The original `reorder` method moved elements with odd values to appear before all other elements.

Which of the following best explains how making the given changes will affect the behavior of the `reorder` method?

(A) The modified method will rearrange the elements of `data` from largest to smallest.

(B) The modified method will rearrange the elements of `data` from smallest to largest.

(C) The modified method will rearrange the elements of `data` so that elements with a value equal to `0` or `1` appear after all other elements.

(D) The modified method will rearrange the elements of `data` so that elements with a value equal to `0` or `1` appear before all other elements.

(E) The modified method will rearrange the elements of `data` so that elements with even values appear before all other elements.

---

## Q13

Consider the following class declaration. The variable `count` is intended to store the total number of social media posts made by all `SocialMediaAccount` objects. The declaration of `count` is missing.

```java
public class SocialMediaAccount
{
    /* The total number of posts made by all SocialMediaAccount objects */
    /* missing declaration */

    public void post()
    {
        count++;
    }

    /* There may be instance variables, constructors,
       and methods that are not shown. */
}
```

Consider the following code segment, which appears in a class other than `SocialMediaAccount`. Assume that no other `SocialMediaAccount` objects have been created.

```java
SocialMediaAccount kevin = new SocialMediaAccount();
SocialMediaAccount briana = new SocialMediaAccount();

kevin.post();
briana.post();
briana.post();
```

The value of `count` should be `3` after the code segment was executed because there were a total of three posts.

Which of the following can replace `/* missing declaration */` so that the `SocialMediaAccount` class works as intended?

(A)

```java
private final int count = 0;
```

(B)

```java
private int count = 0;
```

(C)

```java
private static count = 0;
```

(D)

```java
private static final int count = 0;
```

(E)

```java
private static int count = 0;
```

---

## Q14

Consider the following recursive method, which is intended to compute the product of the positive integers from `1` to `n`.

For example, `factorial(4)` should return the result of the computation:

```text
4 * 3 * 2 * 1
```

which is `24`.

The method does not work as intended.

```java
/** Precondition: n >= 1 */
public static int factorial(int n)
{
    if (n == 1)
    {
        return 1;
    }

    return n * factorial(n);
}
```

Which of the following best describes the error in the method?

(A) The method does not contain an appropriate base case.

(B) The recursive call to the method does not allow progress toward the base case.

(C) The recursive call should appear in an `else` statement.

(D) The method returns an incorrect value when `n` has the value `1`.

(E) The result of the recursive call must be assigned to a variable before being used.

---

## Q15

Consider the following code segment.

```java
boolean a = true;
boolean b = false;
boolean c = false;

boolean b1 = a && !(b || c);
boolean b2 = !a || b && c;
boolean b3 = a && !b || !c;
```

Which of the following Boolean expressions evaluates to `true` after the execution of the code segment?

(A)

```java
b1 == b2
```

(B)

```java
b1 && b2
```

(C)

```java
b1 && b3
```

(D)

```java
b2 && b3
```

(E)

```java
(b1 != b2) && (b1 != b3)
```

---

## Q16

Consider the following code segment.

```java
for (int j = 1; j < 7; j += 2)
{
    for (int k = j; k > 0; k--)
    {
        System.out.println("A");    // Line 5
    }
}
```

How many times does the code segment execute line 5?

(A) 4 times
(B) 9 times
(C) 16 times
(D) 21 times
(E) 28 times

---

## Q17

Consider the following code segment.

```java
double[] values = {6.5, 2.0, 3.0, 2.5, 5.0, 3.0, 7.0};
int limit = values.length / 2;

for (int k = 0; k < limit; k++)
{
    int temp1 = values.length - k - 1;
    double scratch = values[k];
    values[k] = values[temp1];
    values[temp1] = scratch;
}

for (double v : values)
{
    System.out.print(v + " ");
}
```

What is printed as a result of executing the code segment?

(A) `3.0 2.0 6.5 2.5 7.0 3.0 5.0`

(B) `5.0 3.0 7.0 2.5 6.5 2.0 3.0`

(C) `6.5 2.0 3.0 2.5 5.0 3.0 7.0`

(D) `7.0 3.0 3.0 2.5 5.0 2.0 6.5`

(E) `7.0 3.0 5.0 2.5 3.0 2.0 6.5`

---

## Q18

Consider the `Room` class, which contains two constructors.

```java
public class Room
{
    public Room(String description)
    {
        /* implementation not shown */
    }

    public Room(String description, int numDoors)
    {
        /* implementation not shown */
    }

    // There are no other constructors.
}
```

Which, if any, of the following statements, appearing in a class other than `Room`, correctly declares and creates a `Room` object?

(A)

```java
Room r1 = new Room(2);
```

(B)

```java
Room r2 = new Room("kitchen", 2);
```

(C)

```java
Room r3 = new Room(1, "bedroom");
```

(D)

```java
Room r4 = new Room();
```

(E) A `Room` object cannot be created. The `Room` class will not compile because it has two constructors with the same name.

---

## Q19

Consider the following class definitions.

```java
public class Program
{
    private String name;

    public Program()
    {
        /* implementation not shown */
    }

    public Program(String n)
    {
        name = n;
    }

    public void setName(String n)
    {
        name = n;
    }
}
```

```java
public class Computer
{
    public Computer()
    {
        /* implementation not shown */
    }

    public void run(Program p)
    {
        /* implementation not shown */
    }
}
```

Which of the following code segments, appearing in a class other than `Program` or `Computer`, will compile without error?

(A)

```java
Program p = new Program("blocks");
Computer.run();
```

(B)

```java
Program p = new Program("blocks");
Computer.run(p);
```

(C)

```java
Computer c = new Computer();
Program p = new Program("blocks");
p.run();
```

(D)

```java
Computer c = new Computer();
Program p = new Program("blocks");
c.run(p);
```

(E)

```java
Computer c = new Computer();
Program p = new Program();
p.setName("blocks");
c.run();
```

---

## Q20

Consider the following code segment, which is intended to print `"Not the same"` when the value of `entered` is not the same as the value of `computed`.

```java
int computed = /* initial value not shown */;
int entered = /* initial value not shown */;

if ( /* missing condition */ )
{
    System.out.println("Not the same");
}
```

Which of the following can replace `/* missing condition */` so that the code segment works as intended?

Proposed conditions:

```java
I.   computed != entered
```

```java
II.  !(computed == entered)
```

```java
III. !(computed.equals(entered))
```

(A) I only
(B) II only
(C) III only
(D) I and II only
(E) I, II, and III

---

## Q21

Consider the following method, which is intended to compute and return the average, arithmetic mean, of the elements of `theList`. The method does not work as intended.

```java
/** Precondition: theList contains at least one element. */
public static double findAverage(ArrayList<Integer> theList)
{
    double sum = theList.get(0);        // Line 4

    for (int item : theList)
    {
        sum += item;                    // Line 7
    }

    return sum / theList.size();        // Line 9
}
```

Which of the following changes should be made so that the `findAverage` method always works as intended?

(A) In line 4, `sum` should be declared as an `int`.

(B) In line 4, `sum` should be initialized to `0.0`.

(C) In line 7, `item` should be replaced with `theList.get(item)`.

(D) In line 7, `sum += item` should be replaced with `item += sum`.

(E) In line 9, `theList.size()` should be cast to `double`.

---

## Q22

Consider the following method.

```java
public static int aMystery(String str)
{
    int n = str.indexOf("a");

    if (n < 0)
    {
        return 0;
    }
    else
    {
        return 1 + aMystery(str.substring(n + 1));
    }
}
```

What, if anything, is returned by the call?

```java
aMystery("aardvark")
```

(A) 0

(B) 3

(C) 5

(D) Nothing is returned because of infinite recursion.

(E) Nothing is returned because a `StringIndexOutOfBoundsException` occurs.

---

## Q23

The main diagonal of a square two-dimensional array goes from the top-left corner to the bottom-right corner of the array. The main diagonal in the figure is shaded.

Consider the following method, which is intended to return the sum of the values in a square two-dimensional array of integers, **excluding those values along the main diagonal**.

```java
/** Precondition: mat is a square two-dimensional array. */
public int noDiagSum(int[][] mat)
{
    int len = mat.length;
    int sum = 0;

    /* missing code */

    return sum;
}
```

Which missing code correctly computes the sum of all values **not on the main diagonal**?

(B) 

```java
for (int j = 0; j < len; j++)
{
    for (int k = 0; k < len; k++)
    {
        sum += mat[j][k];
    }
}

for (int d = 0; d < len; d++)
{
    sum -= mat[d][d];
}
```

(C) 

```java
for (int j = 0; j < len; j++)
{
    for (int k = 0; k < len; k++)
    {
        if (j != k)
        {
            sum += mat[j][k];
        }
        else
        {
            sum -= mat[j][k];
        }
    }
}
```

---

## Q24

Consider the following code segment.

```java
String[] arr = {"arch", "brain", "circle", "dash",
                "energy", "frame", "guess", "hike"};

for (int i = 1; i < arr.length - 1; i += 2)
{
    System.out.print(arr[i] + "-");
}
```

What is printed when the code segment is executed?

(A) `arch-circle-energy-`

(B) `arch-circle-energy-guess-`

(C) `brain-dash-frame-`

(D) `brain-dash-frame-hike-`

(E) `brain-circle-dash-energy-frame-guess-hike-`

---

## Q25

Consider the following class definitions.

```java
public class Alpha
{
    public int findValue(int a, int b)
    {
        return (2 * a) + b;
    }
}
```

```java
public class Omega extends Alpha
{
    public int findValue(int a, int b)
    {
        return a + b;
    }

    public int findValue(int a)
    {
        int val = super.findValue(a, a);
        return findValue(val, a);
    }
}
```

Consider the following code segment, which appears in a class other than `Alpha` or `Omega`.

```java
Omega om = new Omega();

System.out.print(om.findValue(2, 3) + " ");
System.out.print(om.findValue(4));
```

What is printed as a result of executing the code segment?

(A) `5 8`
(B) `5 12`
(C) `5 16`
(D) `7 12`
(E) `7 16`

---

## Q26

Consider the following code segment, which is intended to create a one-dimensional array `result` containing the values from the two-dimensional square array `letters` in **column-major order**.

After the code segment has been executed, `result` should contain:

```text
{"A", "D", "G", "B", "E", "H", "C", "F", "I"}
```

Code:

```java
String[][] letters = { {"A", "B", "C"},
                       {"D", "E", "F"},
                       {"G", "H", "I"} };

String[] result = new String[9];

int k = 0;

for (int x = 0; x < letters.length; x++)
{
    for (int y = 0; y < letters.length; y++)
    {
        /* missing assignment statement */
        k++;
    }
}
```

Which of the following could be used as a replacement for `/* missing assignment statement */` so that the code segment works as intended?

(A)

```java
result[x] = letters[y][k];
```

(B)

```java
result[x] = letters[k][y];
```

(C)

```java
result[y] = letters[x][k];
```

(D)

```java
result[k] = letters[x][y];
```

(E)

```java
result[k] = letters[y][x];
```

---

## Q27

Consider the following method.

```java
public static int checkString(String word, String target)
{
    int num = 0;

    for (int k = 0; k < word.length(); k++)
    {
        String letter = word.substring(k, k + 1);

        if (target.indexOf(letter) != -1)
        {
            num += k;
        }
    }

    return num;
}
```

Which of the following best describes the value returned by the `checkString` method?

(A) The number of substrings of `word` that occur in `target`

(B) The number of characters of `target` that occur in `word`

(C) The number of characters of `word` that occur in `target`

(D) The sum of the indices of the characters of `target` that occur in `word`

(E) The sum of the indices of the characters of `word` that occur in `target`

---

## Q28

Consider the following code segment.

```java
int[] nums = {2, 5, 1, 8, 0, 6};

int a = nums[nums.length / 2];
int b = nums[nums[0]];
int c = nums[nums[2] + 2];

int[] result = {a, b, c};
```

Which of the following represents the contents of `result` after the code segment is executed?

(A) `{3, 1, 8}`

(B) `{3, 2, 3}`

(C) `{8, 1, 3}`

(D) `{8, 1, 8}`

(E) `{8, 2, 8}`

---

## Q29

Consider the method `countSpecial`, which calls the helper method `sumSeven`. The `sumSeven` method returns `true` if the digits of its `String` parameter have a sum of `7` and returns `false` otherwise.

For example:

```java
sumSeven("412")   // true, because 4 + 1 + 2 = 7
sumSeven("43")    // true, because 4 + 3 = 7
sumSeven("111")   // false
sumSeven("74")    // false
```

Code:

```java
public static int countSpecial(String str)
{
    int count = 0;
    int i = 0;

    for (i = 0; i < str.length() - 1; i++)
    {
        String temp = str.substring(i, i + 2);

        if (sumSeven(temp))
        {
            count += 7;
        }
    }

    return count;
}
```

Consider the method call:

```java
countSpecial("24341243")
```

What will the value of `i` be when `count` is assigned the value `14`?

(A) 1
(B) 2
(C) 3
(D) 4
(E) 6

---
---

# Section 2 — 中文解析

---

## Q1 — `moveIt` 字符串移动

### 答案

**A**

```java
phrase.substring(0, index)
+ phrase.substring(index + len) + word
```

### 考点

* `indexOf`
* `substring(start, end)`
* `substring(start)`
* 字符串拼接
* 删除中间一段并移动到末尾

### 解题思路

题目要把 `word` 从 `phrase` 中间移到末尾。

可以把原字符串想成：

```text
phrase = BEFORE + word + AFTER
```

目标是：

```text
BEFORE + AFTER + word
```

所以：

```java
phrase.substring(0, index)
```

表示 `word` 前面的部分。

```java
phrase.substring(index + len)
```

表示 `word` 后面的部分。

最后再加上：

```java
word
```

所以答案是 A。

### 关键追踪

例子：

```text
phrase = "uncomfortable"
word = "comfort"
```

结构是：

```text
"un" + "comfort" + "able"
```

目标：

```text
"un" + "able" + "comfort"
```

也就是：

```text
"unablecomfort"
```

### 易错点

最常见错误是写：

```java
index + len - 1
```

但 `substring` 的结束位置本来就是 **exclusive**，所以不需要 `-1`。聊天记录中也强调，这类题要立刻想到“删除一段”：`substring(0, start) + substring(end)`。

---

## Q2 — `int` 平均值转 `double`

### 答案

**C**

```java
(double) (a + b) / 2
```

### 考点

* integer division
* double division
* casting
* operator precedence
* type promotion

### 解题思路

题目要得到：

```text
(3 + 4) / 2 = 3.5
```

如果写：

```java
(a + b) / 2
```

因为 `a` 和 `b` 都是 `int`，所以：

```text
7 / 2 = 3
```

这会发生整数除法，`.5` 会丢掉。

正确做法是让除法发生前，至少一个操作数变成 `double`。

选项 C：

```java
(double) (a + b) / 2
```

先把 `(a + b)` 转成 `double`，所以：

```text
(double) 7 / 2
= 7.0 / 2
= 3.5
```

### 选项追踪

A:

```java
(a + b) / 2
```

```text
7 / 2 = 3
```

错误。

B:

```java
(double) a + b / 2
```

先算 `b / 2`：

```text
3.0 + 4 / 2
= 3.0 + 2
= 5.0
```

错误。

C:

```java
(double) (a + b) / 2
= 7.0 / 2
= 3.5
```

正确。

D:

```java
(double) (a + b / 2)
```

先算 `b / 2`：

```text
4 / 2 = 2
3 + 2 = 5
(double) 5 = 5.0
```

错误。

E:

```java
(double) ((a + b) / 2)
```

先发生整数除法：

```text
7 / 2 = 3
(double) 3 = 3.0
```

错误。

### 易错点

`double` 不是“优先级更高”，而是类型提升。真正关键是：**cast 必须在整数除法发生前完成**。聊天记录中明确区分了 precedence 和 type promotion。

---

## Q3 — 反转整数 digit 的错误

### 答案

**D：Line 13 中的 `+=` 应该改成 `=`**

正确写法：

```java
retVal = (retVal * 10) + digit;
```

### 考点

* `%`
* `/`
* 数字反转算法
* accumulator 更新
* `+=` 与 `=` 的区别

### 解题思路

反转数字的标准模式是：

```java
digit = num % 10;
retVal = retVal * 10 + digit;
num = num / 10;
```

题目中写成：

```java
retVal += (retVal * 10) + digit;
```

这等价于：

```java
retVal = retVal + (retVal * 10 + digit);
```

也就是把旧的 `retVal` 多加了一次。

### 代码追踪

用 `num = 12` 快速测试。

初始：

```text
retVal = 0
num = 12
```

第一次循环：

```text
digit = 12 % 10 = 2
retVal = 0 + (0 * 10 + 2) = 2
num = 1
```

第二次循环：

```text
digit = 1 % 10 = 1
retVal = 2 + (2 * 10 + 1)
       = 2 + 21
       = 23
```

但正确结果应该是：

```text
21
```

### 易错点

学生看到：

```java
retVal += ...
```

容易以为是“累加结果”，但这个算法不是普通累加，而是“旧结果左移一位再加新 digit”。所以必须用：

```java
retVal = retVal * 10 + digit;
```

聊天记录里也把这个当成标准 pattern recognition 题：看到反转数字，马上检查 `retVal = retVal * 10 + digit`。

---

## Q4 — `findMedian` 找反例

### 答案

**A**

```java
findMedian(3, 2, 1)
```

### 考点

* method logic bug
* median
* counterexample
* conditional tracing

### 解题思路

这个方法先找出 `firstVal` 和 `secVal` 中较大的那个：

```java
largestSoFar
```

然后比较 `thirdVal` 和 `largestSoFar`。

如果：

```java
thirdVal > largestSoFar
```

返回 `largestSoFar`。

否则返回 `thirdVal`。

所以这个方法本质上是：

```text
返回 thirdVal 和 max(firstVal, secVal) 中较小的那个
```

它没有真正判断三个数的中位数。

### 代码追踪

选项 A：

```java
findMedian(3, 2, 1)
```

第一步：

```text
firstVal = 3
secVal = 2
thirdVal = 1
```

比较前两个：

```text
largestSoFar = 3
```

然后：

```java
if (thirdVal > largestSoFar)
```

也就是：

```text
1 > 3
```

结果为 false。

所以执行：

```java
return thirdVal;
```

返回：

```text
1
```

但 `3, 2, 1` 排序后是：

```text
1, 2, 3
```

中位数应该是：

```text
2
```

所以 A 可以证明方法不总是正确。

### 易错点

不要把五个选项都完整 trace。更快的方法是先找失败模式：

```text
thirdVal 是最小值时，代码可能直接返回最小值
```

聊天记录中也明确指出：找到 bug pattern，再匹配选项，比盲测五个选项快。

---

## Q5 — `enigma` 字符串交替拼接

### 答案

**B**

```text
"aWbXcYdZ"
```

### 考点

* `String.length()`
* `substring(i, i + 1)`
* 字符串交替拼接
* 循环到较短字符串长度

### 解题思路

方法先找两个字符串中较短的长度：

```java
len = min(first.length(), second.length())
```

然后每次取：

```java
first.substring(i, i + 1)
second.substring(i, i + 1)
```

所以它是在交替拼接两个字符串的字符。

### 代码追踪

调用：

```java
enigma("abcde", "WXYZ")
```

长度：

```text
first = "abcde"  长度 5
second = "WXYZ"  长度 4
```

所以：

```text
len = 4
```

循环：

| i | first 字符 | second 字符 | result   |
| - | -------- | --------- | -------- |
| 0 | a        | W         | aW       |
| 1 | b        | X         | aWbX     |
| 2 | c        | Y         | aWbXcY   |
| 3 | d        | Z         | aWbXcYdZ |

最终返回：

```text
"aWbXcYdZ"
```

### 易错点

学生容易选 C：

```text
"aWbXcYdZe"
```

但代码只循环到较短字符串长度，不会自动补上 `first` 多出来的 `"e"`。

---

## Q6 — 修改内层循环条件后的 `count`

### 答案

**C：Smaller final value of `count`**

### 考点

* nested loops
* loop condition
* counting iterations
* 固定矩形循环 vs 递减三角循环

### 解题思路

原代码：

```java
for (int first = 10; first < 25; first++)
{
    for (int second = 25; second > 10; second--)
    {
        count++;
    }
}
```

外层：

```text
first = 10 到 24
一共 15 次
```

内层原来：

```text
second = 25 到 11
一共 15 次
```

原来总次数：

```text
15 × 15 = 225
```

修改后：

```java
second > first
```

内层循环长度会随着 `first` 变大而变短。

### 代码追踪

当 `first = 10`：

```text
second = 25, 24, ..., 11
15 次
```

当 `first = 20`：

```text
second = 25, 24, 23, 22, 21
5 次
```

当 `first = 24`：

```text
second = 25
1 次
```

所以总次数小于原来的 225。

### 易错点

学生容易看到条件变复杂就以为次数变多，但这里新条件限制更强，内层循环会越来越短。

---

## Q7 — 对象引用与 `==`

### 答案

**C**

```java
a == b
```

### 考点

* object reference
* aliasing
* `==` 比较引用
* `.equals()` 比较字符串内容
* mutator method

### 解题思路

要画对象引用图。

代码：

```java
Road a = new Road();
a.setName("Pine");

Road b = new Road("Pine");

Road c = a;
Road d = c;

d.setName("Maple");
```

`a` 和 `b` 是两个不同对象。

`c = a`，所以 `c` 和 `a` 指向同一个对象。

`d = c`，所以 `d`、`c`、`a` 都指向同一个对象。

### 状态追踪

一开始：

```text
a → Road object #1, name = "Pine"
b → Road object #2, name = "Pine"
```

然后：

```java
Road c = a;
Road d = c;
```

所以：

```text
a, c, d → object #1
b       → object #2
```

执行：

```java
d.setName("Maple");
```

因为 `d` 指向 object #1，所以 object #1 的名字变成 `"Maple"`。

最终：

```text
a, c, d → same object, name = "Maple"
b       → different object, name = "Pine"
```

检查选项：

```java
a.getName().equals("Maple")      // true
a.getName().equals(c.getName())  // true
a == b                           // false
a == c                           // true
a == d                           // true
```

所以答案是 C。

### 易错点

`a` 和 `b` 的 `name` 一开始都可能是 `"Pine"`，但它们不是同一个对象。`==` 比较的是引用是否指向同一对象，不是内容是否相同。

---

## Q8 — 递归 `mystery(4)`

### 答案

**D：6**

### 考点

* recursion
* base case
* Fibonacci-like recursion
* bottom-up evaluation

### 解题思路

方法：

```java
public static int mystery(int n)
{
    if (n < 2)
    {
        return 2 * n;
    }
    else
    {
        return mystery(n - 1) + mystery(n - 2);
    }
}
```

它像 Fibonacci，但 base case 不一样：

```text
mystery(0) = 0
mystery(1) = 2
```

### 代码追踪

从小往上算最快：

```text
mystery(0) = 2 * 0 = 0
mystery(1) = 2 * 1 = 2
```

然后：

```text
mystery(2) = mystery(1) + mystery(0)
           = 2 + 0
           = 2
```

```text
mystery(3) = mystery(2) + mystery(1)
           = 2 + 2
           = 4
```

```text
mystery(4) = mystery(3) + mystery(2)
           = 4 + 2
           = 6
```

### 易错点

不要一看到：

```java
mystery(n - 1) + mystery(n - 2)
```

就自动当成标准 Fibonacci。递归关系像 Fibonacci，但 base case 不同，结果也不同。

---

## Q9 — Method Overloading 与对象状态

### 答案

**C：15**

### 考点

* method overloading
* instance variables
* object state tracing
* 方法根据参数个数选择

### 解题思路

`Arithmetic` 有三个 `update` 方法：

```java
update()
update(int num)
update(int num1, int num2)
```

Java 根据参数个数选择调用哪个方法。

根据后来更清楚的截图确认，两个参数版本是：

```java
value = value * num1 + num2;
```

聊天记录里也特别修正了这一点。

### 代码追踪

初始：

```java
Arithmetic alpha = new Arithmetic(3);
Arithmetic beta = new Arithmetic(2);
```

所以：

```text
alpha.value = 3
beta.value = 2
```

执行：

```java
alpha.update(1);
```

调用：

```java
update(int num)
```

所以：

```text
alpha.value = 3 + 1 = 4
```

执行：

```java
alpha.update(2, 3);
```

调用：

```java
update(int num1, int num2)
```

所以：

```text
alpha.value = 4 * 2 + 3 = 11
```

执行：

```java
beta.update();
```

调用：

```java
update()
```

所以：

```text
beta.value = 2 * 2 = 4
```

最后：

```java
System.out.println(alpha.getValue() + beta.getValue());
```

输出：

```text
11 + 4 = 15
```

### 易错点

1. 看错 overloaded method 的公式。
2. 把 `alpha` 和 `beta` 的状态混在一起。
3. 不根据参数个数选择方法。

---

## Q10 — 3×3 二维数组对角线填充

### 答案

**B**

```java
{ { 0, -1, -2 },
  { 1,  1, -1 },
  { 2,  1,  2 } }
```

### 考点

* 2D array
* nested loops
* diagonal
* symmetric assignment
* `arr[j][k]` 与 `arr[k][j]`

### 解题思路

代码：

```java
for (int j = 0; j < 3; j++)
{
    arr[j][j] = j;

    for (int k = 0; k < j; k++)
    {
        arr[j][k] = j - k;
        arr[k][j] = k - j;
    }
}
```

核心是：

```java
arr[j][j] = j
```

填主对角线。

而：

```java
arr[j][k]
arr[k][j]
```

是一组对称位置。

### 代码追踪

`j = 0`：

```text
arr[0][0] = 0
```

---

`j = 1`：

```text
arr[1][1] = 1
```

内层 `k = 0`：

```text
arr[1][0] = 1 - 0 = 1
arr[0][1] = 0 - 1 = -1
```

---

`j = 2`：

```text
arr[2][2] = 2
```

内层 `k = 0`：

```text
arr[2][0] = 2 - 0 = 2
arr[0][2] = 0 - 2 = -2
```

内层 `k = 1`：

```text
arr[2][1] = 2 - 1 = 1
arr[1][2] = 1 - 2 = -1
```

最终：

```java
{ { 0, -1, -2 },
  { 1,  1, -1 },
  { 2,  1,  2 } }
```

聊天记录中也总结：看到 `arr[j][k]` 和 `arr[k][j]`，要想到“沿对角线对称填充”。

### 易错点

1. 只填一边，忘记对称位置。
2. 符号反了：`j - k` 是正数，`k - j` 是负数。
3. 忘记对角线位置是 `arr[j][j] = j`，所以对角线是 `0, 1, 2`。

---

## Q11 — `reorder` 中 line 19 执行次数

### 答案

**B：2 times**

### 考点

* `ArrayList`
* even / odd 判断
* while loop
* swap
* line execution count

### 解题思路

方法逻辑：

> 从左到右扫描。遇到偶数，就往右找下一个奇数。如果找到，就交换。

Line 19：

```java
int temp = data.get(i);
```

只有发生 swap 时才执行。

### 代码追踪

初始：

```text
[2, 6, 7, 4, 1, 8]
```

#### i = 0

`data.get(0) = 2`，偶数。

往右找：

```text
index = 1 → 6 偶数，跳过
index = 2 → 7 奇数，停止
```

交换 `2` 和 `7`：

```text
[7, 6, 2, 4, 1, 8]
```

Line 19 执行第 1 次。

#### i = 1

`data.get(1) = 6`，偶数。

往右找：

```text
index = 2 → 2 偶数，跳过
index = 3 → 4 偶数，跳过
index = 4 → 1 奇数，停止
```

交换 `6` 和 `1`：

```text
[7, 1, 2, 4, 6, 8]
```

Line 19 执行第 2 次。

#### i = 2, 3, 4, 5

后面只剩偶数，没有奇数可以换，所以不再执行 line 19。

最终 line 19 执行：

```text
2 次
```

聊天记录中也指出，截图里选 C 很有诱惑性，但会 overcount；最后那一组偶数后面没有奇数，不能 swap。

### 易错点

不要把“遇到偶数”次数当成 line 19 执行次数。Line 19 只有在找到右边的奇数并进入 swap block 时才执行。

---

## Q12 — 把 `% 2 == 0` 改成 `/ 2 == 0`

### 答案

**C**

> The modified method will rearrange the elements of `data` so that elements with a value equal to `0` or `1` appear after all other elements.

### 考点

* `%` vs `/`
* integer division
* nonnegative integer
* 条件逻辑替换后的行为变化

### 解题思路

原条件：

```java
data.get(i) % 2 == 0
```

表示“这个数是偶数”。

修改后：

```java
data.get(i) / 2 == 0
```

这不是判断偶数，而是整数除法。

因为题目说所有元素都是非负整数，所以：

```text
0 / 2 = 0
1 / 2 = 0
2 / 2 = 1
3 / 2 = 1
4 / 2 = 2
```

所以条件只对：

```text
0 和 1
```

为 true。

### 行为分析

修改后的方法变成：

> 如果当前位置是 0 或 1，就往右找第一个不是 0 或 1 的值，然后交换。

所以 `0` 和 `1` 会被往后推。

因此最终效果是：

```text
0 或 1 会出现在其他元素之后
```

### 易错点

`x % 2 == 0` 和 `x / 2 == 0` 完全不是一回事。

* `%` 是看余数，用于判断奇偶。
* `/` 是整数除法，这里只会筛出 0 和 1。

---

## Q13 — `static` 统计所有对象的总 posts

### 答案

**E**

```java
private static int count = 0;
```

### 考点

* `static`
* instance variable vs class variable
* `final`
* shared state
* declaration syntax

### 解题思路

题目关键词是：

```text
total number of posts made by all SocialMediaAccount objects
```

也就是所有对象共用一个总数。

Java 中“属于整个 class，而不是属于某个对象”的变量要用：

```java
static
```

所以需要：

```java
private static int count = 0;
```

### 选项分析

A:

```java
private final int count = 0;
```

错误。不是 static，而且 final 不能 `count++`。

B:

```java
private int count = 0;
```

可以编译，但每个对象有自己的 `count`，不是总数。

如果：

```text
kevin.count = 1
briana.count = 2
```

不会得到共享总数 3。

C:

```java
private static count = 0;
```

错误。缺少类型 `int`。

D:

```java
private static final int count = 0;
```

错误。`final` 不能修改，`count++` 不合法。

E:

```java
private static int count = 0;
```

正确。

聊天记录中也明确总结：`private int count` 是每个对象一份，`private static int count` 是所有对象共享一份。

### 易错点

看到“所有对象总共”就应该立刻想到 `static`。看到 `count++` 就不能用 `final`。

---

## Q14 — 错误的 factorial 递归

### 答案

**B**

> The recursive call to the method does not allow progress toward the base case.

### 考点

* recursion
* base case
* progress toward base case
* infinite recursion

### 解题思路

递归题先检查两件事：

```text
1. 有没有 base case？
2. 每次递归有没有靠近 base case？
```

代码中 base case 是有的：

```java
if (n == 1)
{
    return 1;
}
```

所以 A 错。

问题在：

```java
return n * factorial(n);
```

它再次调用：

```java
factorial(n)
```

参数没有变化。

如果调用：

```java
factorial(4)
```

会变成：

```text
4 * factorial(4)
```

又进入：

```text
4 * factorial(4)
```

永远不会变成：

```text
factorial(3)
factorial(2)
factorial(1)
```

所以无法靠近 base case。

### 正确版本

```java
public static int factorial(int n)
{
    if (n == 1)
    {
        return 1;
    }

    return n * factorial(n - 1);
}
```

### 易错点

学生可能认为“有 base case 就安全”，但递归必须每一步都朝 base case 前进。聊天记录中也强调：`factorial(n)` 是坏的，`factorial(n - 1)` 才能前进。

---

## Q15 — Boolean 表达式追踪

### 答案

**OCR 有不确定。按 Section 1 当前 OCR，C 和 D 都会是 true，因此原选项 D 很可能识别有误。**

如果只选一个最稳定的答案，**C：`b1 && b3`** 是 true。

### 考点

* Boolean operators
* `!`
* `&&`
* `||`
* operator precedence
* truth table tracing

### 解题思路

已知：

```java
boolean a = true;
boolean b = false;
boolean c = false;
```

计算：

```java
boolean b1 = a && !(b || c);
boolean b2 = !a || b && c;
boolean b3 = a && !b || !c;
```

### 代码追踪

#### b1

```java
b1 = a && !(b || c)
```

代入：

```text
= true && !(false || false)
= true && !false
= true && true
= true
```

所以：

```text
b1 = true
```

#### b2

```java
b2 = !a || b && c
```

`&&` 优先级高于 `||`，所以：

```text
= !true || (false && false)
= false || false
= false
```

所以：

```text
b2 = false
```

#### b3

```java
b3 = a && !b || !c
```

先算 `!`，再算 `&&`，再算 `||`：

```text
= true && true || true
= true || true
= true
```

所以：

```text
b3 = true
```

现在：

```text
b1 = true
b2 = false
b3 = true
```

检查选项：

A:

```java
b1 == b2
```

```text
true == false → false
```

B:

```java
b1 && b2
```

```text
true && false → false
```

C:

```java
b1 && b3
```

```text
true && true → true
```

D 如果是：

```java
!b2 && b3
```

则：

```text
!false && true = true && true = true
```

这也会是 true。

E:

```java
(b1 != b2) && (b1 != b3)
```

```text
(true != false) && (true != true)
= true && false
= false
```

---

## Q16 — 嵌套循环打印次数

### 答案

**B：9 times**

### 考点

* nested loops
* counting iterations
* outer loop values
* inner loop dependent on outer variable

### 解题思路

外层循环：

```java
for (int j = 1; j < 7; j += 2)
```

所以：

```text
j = 1, 3, 5
```

内层循环：

```java
for (int k = j; k > 0; k--)
```

每次内层执行次数就是当前的 `j`。

### 代码追踪

| j | k values      | Line 5 执行次数 |
| - | ------------- | ----------- |
| 1 | 1             | 1           |
| 3 | 3, 2, 1       | 3           |
| 5 | 5, 4, 3, 2, 1 | 5           |

总次数：

```text
1 + 3 + 5 = 9
```

聊天记录中也建议：不要一行一行数 print，直接列外层 `j` 值，再加内层次数。

### 易错点

外层不是 `1, 2, 3, 4, 5, 6`，而是每次加 2，所以只有：

```text
1, 3, 5
```

---

## Q17 — 反转 `double[] values`

### 答案

**E**

```text
7.0 3.0 5.0 2.5 3.0 2.0 6.5
```

### 考点

* array reversal
* swap
* mirror index
* integer division
* enhanced for loop output

### 解题思路

数组长度是 7：

```java
int limit = values.length / 2;
```

所以：

```text
7 / 2 = 3
```

循环：

```text
k = 0, 1, 2
```

每次交换：

```java
values[k]
```

和：

```java
values[values.length - k - 1]
```

这就是反转数组的前半部分与后半部分。

### 代码追踪

初始：

```text
[6.5, 2.0, 3.0, 2.5, 5.0, 3.0, 7.0]
```

#### k = 0

```text
temp1 = 7 - 0 - 1 = 6
```

交换 index 0 和 6：

```text
[7.0, 2.0, 3.0, 2.5, 5.0, 3.0, 6.5]
```

#### k = 1

```text
temp1 = 7 - 1 - 1 = 5
```

交换 index 1 和 5：

```text
[7.0, 3.0, 3.0, 2.5, 5.0, 2.0, 6.5]
```

#### k = 2

```text
temp1 = 7 - 2 - 1 = 4
```

交换 index 2 和 4：

```text
[7.0, 3.0, 5.0, 2.5, 3.0, 2.0, 6.5]
```

输出：

```text
7.0 3.0 5.0 2.5 3.0 2.0 6.5
```

聊天记录里也直接总结：`values[k] ↔ values[values.length - k - 1]` 就是 reverse pattern。

### 易错点

中间元素 `2.5` 不会动，因为数组长度是奇数，反转时中间 index 保持原位。

---

## Q18 — Constructor Overloading

### 答案

**B**

```java
Room r2 = new Room("kitchen", 2);
```

### 考点

* constructor
* constructor overloading
* 参数个数
* 参数类型
* 参数顺序
* default constructor

### 解题思路

`Room` 类只有两个 constructor：

```java
Room(String description)
```

和：

```java
Room(String description, int numDoors)
```

所以创建对象时，参数列表必须完全匹配其中一个。

### 选项分析

A:

```java
Room r1 = new Room(2);
```

参数是一个 `int`，没有 `Room(int)`，错误。

B:

```java
Room r2 = new Room("kitchen", 2);
```

参数是：

```text
String, int
```

匹配：

```java
Room(String description, int numDoors)
```

正确。

C:

```java
Room r3 = new Room(1, "bedroom");
```

参数是：

```text
int, String
```

顺序不匹配，错误。

D:

```java
Room r4 = new Room();
```

没有 no-argument constructor。注意：一旦 class 中写了 constructor，Java 不会再自动提供默认无参 constructor。

E 错，因为 constructor 可以 overload，只要参数列表不同即可。

聊天记录中也总结：constructor 题检查三件事：参数个数、类型、顺序。

### 易错点

学生容易以为“所有 class 都有默认 constructor”。如果你已经写了 constructor，默认无参 constructor 就不会自动生成。

---

## Q19 — `Program` 和 `Computer` 方法调用是否编译

### 答案

**D**

```java
Computer c = new Computer();
Program p = new Program("blocks");
c.run(p);
```

### 考点

* class vs object
* instance method
* method parameter
* constructor
* compile-time checking

### 解题思路

`Computer` 中的方法是：

```java
public void run(Program p)
```

这说明：

1. `run` 是 instance method，要用 `Computer` 对象调用。
2. `run` 需要一个 `Program` 参数。

所以必须先创建：

```java
Computer c = new Computer();
Program p = new Program("blocks");
```

再调用：

```java
c.run(p);
```

### 选项分析

A:

```java
Program p = new Program("blocks");
Computer.run();
```

错误。`run` 不是 static，不能用 class name 调用；而且缺少参数。

B:

```java
Program p = new Program("blocks");
Computer.run(p);
```

错误。还是用 class name 调用了 instance method。

C:

```java
Computer c = new Computer();
Program p = new Program("blocks");
p.run();
```

错误。`Program` 类没有 `run` 方法。

D:

```java
Computer c = new Computer();
Program p = new Program("blocks");
c.run(p);
```

正确。

E:

```java
Computer c = new Computer();
Program p = new Program();
p.setName("blocks");
c.run();
```

错误。`c.run()` 缺少 `Program` 参数。

### 易错点

看到 `Computer.run(p)` 要警觉：除非方法是 static，否则不能用类名直接调用。

---

## Q20 — `int` 不相等判断

### 答案

**D：I and II only**

### 考点

* primitive type
* `!=`
* `==`
* logical negation
* `.equals()` 不适用于 primitive int

### 解题思路

题目要判断两个 `int` 值不相同。

I:

```java
computed != entered
```

正确，直接表示不等于。

II:

```java
!(computed == entered)
```

也正确，意思是“不是相等”。

III:

```java
!(computed.equals(entered))
```

错误。`computed` 是 `int`，primitive type 不能调用 `.equals()`。

### 易错点

`.equals()` 用于对象，比如 `String`。对于 `int`、`double`、`boolean` 这类 primitive type，不能写：

```java
computed.equals(...)
```

---

## Q21 — `findAverage` 第一项被加了两次

### 答案

**B**

> In line 4, `sum` should be initialized to `0.0`.

### 考点

* enhanced for loop
* accumulator
* average
* double division
* duplicate counting

### 解题思路

原代码：

```java
double sum = theList.get(0);
```

然后：

```java
for (int item : theList)
{
    sum += item;
}
```

enhanced for loop 会遍历 list 中的每一个元素，包括第一个元素。

所以第一个元素被算了两次。

### 代码追踪

假设：

```text
theList = [2, 4, 6]
```

正确平均值：

```text
(2 + 4 + 6) / 3 = 4.0
```

原代码：

```text
sum starts as 2
```

循环：

```text
add 2 → sum = 4
add 4 → sum = 8
add 6 → sum = 14
```

返回：

```text
14 / 3 = 4.666...
```

错误。

正确做法：

```java
double sum = 0.0;
```

然后让 loop 把每个元素加一次。

### 为什么 E 不需要

E 说把 `theList.size()` cast 成 double，但 `sum` 已经是 `double`，所以：

```java
sum / theList.size()
```

已经是 double division。

聊天记录中也指出：真正问题不是除法，而是第一个元素被重复计入。

### 易错点

学生容易一看到 average 就怀疑 integer division，但这里 `sum` 是 `double`，除法没问题。真正问题在 accumulator 初始值。

---

## Q22 — `aMystery("aardvark")`

### 答案

**B：3**

### 考点

* recursion
* `indexOf`
* `substring`
* counting pattern
* base case

### 解题思路

方法：

```java
int n = str.indexOf("a");
```

找到第一个 `"a"` 的位置。

如果没有 `"a"`：

```java
return 0;
```

如果有 `"a"`：

```java
return 1 + aMystery(str.substring(n + 1));
```

意思是：

> 先数到一个 `"a"`，然后递归检查它后面的字符串。

所以这个方法是在数字符串中 `"a"` 出现的次数。

### 代码追踪

调用：

```java
aMystery("aardvark")
```

`"aardvark"` 第一个 `"a"` 在 index 0：

```text
1 + aMystery("ardvark")
```

`"ardvark"` 第一个 `"a"` 在 index 0：

```text
1 + 1 + aMystery("rdvark")
```

`"rdvark"` 有一个 `"a"`，在 index 3：

```text
1 + 1 + 1 + aMystery("rk")
```

`"rk"` 没有 `"a"`：

```text
return 0
```

所以总数：

```text
1 + 1 + 1 + 0 = 3
```

聊天记录中也总结：`return 1 + method(remainingString)` 通常是在“数某个东西”。

### 易错点

`substring(n + 1)` 会跳过当前找到的 `"a"`，所以会继续找后面剩下的部分，不会无限递归。

---

## Q23 — `noDiagSum` 排除主对角线求和

### 答案

**根据聊天记录中可见选项，正确是 B。**

### 考点

* 2D array
* square matrix
* main diagonal
* `row == col`
* total sum minus diagonal sum

### 解题思路

主对角线位置是：

```text
mat[0][0]
mat[1][1]
mat[2][2]
...
mat[d][d]
```

也就是：

```text
row index == column index
```

题目要加总所有 **不在主对角线** 上的元素。

可见选项 B 的策略是：

1. 先把所有元素都加起来。
2. 再把主对角线元素减掉。

这样剩下的就是非对角线元素的和。

### 为什么 B 对

B 的结构：

```java
for (int j = 0; j < len; j++)
{
    for (int k = 0; k < len; k++)
    {
        sum += mat[j][k];
    }
}

for (int d = 0; d < len; d++)
{
    sum -= mat[d][d];
}
```

第一段：

```text
sum = 所有元素之和
```

第二段：

```text
减去 mat[0][0], mat[1][1], ...
```

所以最终：

```text
sum = 非主对角线元素之和
```

### 为什么 C 错

聊天记录中可见 C 是：

```java
if (j != k)
{
    sum += mat[j][k];
}
else
{
    sum -= mat[j][k];
}
```

对于非对角线元素，它加进去，这部分是对的。

但对于对角线元素，它不是忽略，而是减掉。

最后结果会变成：

```text
非对角线元素之和 - 对角线元素之和
```

但题目只要：

```text
非对角线元素之和
```

所以 C 错。

聊天记录中明确说：如果截图显示 C，不应信任；基于可见代码，B 正确，C 不正确。

### 易错点

“排除主对角线”不是“遇到主对角线就减掉”。如果一开始 `sum = 0`，那主对角线应该 **不处理**，不是扣成负数。

---

## Q24 — 数组隔项输出

### 答案

**C**

```text
brain-dash-frame-
```

### 考点

* array indexing
* loop bounds
* `i += 2`
* `arr.length - 1`

### 解题思路

数组：

```text
index: 0      1       2       3     4       5      6      7
value: arch   brain   circle  dash  energy  frame  guess  hike
```

循环：

```java
for (int i = 1; i < arr.length - 1; i += 2)
```

`arr.length = 8`，所以：

```text
i < 7
```

从 `i = 1` 开始，每次加 2：

```text
i = 1, 3, 5
```

输出：

```text
arr[1] = brain
arr[3] = dash
arr[5] = frame
```

每次后面加 `"-"`。

所以结果：

```text
brain-dash-frame-
```

聊天记录中也按 index 表追踪出答案 C。

### 易错点

`i < arr.length - 1` 意味着 `i < 7`，所以 index 7 的 `"hike"` 不会被打印。

---

## Q25 — `Alpha` / `Omega` 继承与 `super`

### 答案

**C**

```text
5 16
```

### 考点

* inheritance
* method overriding
* method overloading
* `super`
* dynamic method selection

### 解题思路

`Omega` 继承 `Alpha`。

`Alpha` 中：

```java
findValue(int a, int b)
{
    return (2 * a) + b;
}
```

`Omega` 中重写了两个参数版本：

```java
findValue(int a, int b)
{
    return a + b;
}
```

并新增了一个参数版本：

```java
findValue(int a)
{
    int val = super.findValue(a, a);
    return findValue(val, a);
}
```

### 代码追踪

第一句：

```java
om.findValue(2, 3)
```

`om` 是 `Omega` 对象，调用 `Omega` 的两个参数版本：

```text
2 + 3 = 5
```

所以先打印：

```text
5
```

第二句：

```java
om.findValue(4)
```

调用 `Omega` 的一个参数版本。

进入方法：

```java
int val = super.findValue(a, a);
```

此时：

```text
a = 4
```

`super.findValue(4, 4)` 调用父类 `Alpha` 的版本：

```text
(2 * 4) + 4 = 12
```

所以：

```text
val = 12
```

然后：

```java
return findValue(val, a);
```

注意这里没有 `super`，所以调用 `Omega` 的两个参数版本：

```text
findValue(12, 4)
= 12 + 4
= 16
```

最终输出：

```text
5 16
```

聊天记录中也强调：`super.method(...)` 用父类版本；普通 `findValue(...)` 仍然会匹配子类版本。

### 易错点

`super.findValue(a, a)` 只影响那一次调用。后面的：

```java
findValue(val, a)
```

没有 `super`，所以用的是 `Omega` 自己的 two-parameter method。

---

## Q26 — Column-major order

### 答案

**E**

```java
result[k] = letters[y][x];
```

### 考点

* 2D array
* row-major vs column-major
* nested loop variable roles
* 2D array flattening

### 解题思路

目标顺序：

```text
A, D, G, B, E, H, C, F, I
```

这是 column-major order。

也就是：

```text
letters[0][0], letters[1][0], letters[2][0],
letters[0][1], letters[1][1], letters[2][1],
letters[0][2], letters[1][2], letters[2][2]
```

列先固定，行不断变化。

代码：

```java
for (int x = 0; x < letters.length; x++)
{
    for (int y = 0; y < letters.length; y++)
    {
        /* missing assignment statement */
        k++;
    }
}
```

外层 `x` 变得慢，适合作为 column。

内层 `y` 变得快，适合作为 row。

所以访问：

```java
letters[y][x]
```

一维数组位置由 `k` 控制：

```java
result[k] = letters[y][x];
```

### 代码追踪

当 `x = 0`：

```text
y = 0 → letters[0][0] = A → result[0]
y = 1 → letters[1][0] = D → result[1]
y = 2 → letters[2][0] = G → result[2]
```

当 `x = 1`：

```text
y = 0 → letters[0][1] = B → result[3]
y = 1 → letters[1][1] = E → result[4]
y = 2 → letters[2][1] = H → result[5]
```

当 `x = 2`：

```text
y = 0 → letters[0][2] = C → result[6]
y = 1 → letters[1][2] = F → result[7]
y = 2 → letters[2][2] = I → result[8]
```

得到目标数组。

聊天记录中也明确给出：column-major 需要 `letters[y][x]`，并放入 `result[k]`。

### 易错点

如果写：

```java
letters[x][y]
```

就是 row-major order，会得到：

```text
A, B, C, D, E, F, G, H, I
```

不是题目要的顺序。

---

## Q27 — `checkString` 返回值描述

### 答案

**E**

> The sum of the indices of the characters of `word` that occur in `target`.

### 考点

* `substring(k, k + 1)`
* `indexOf`
* loop over characters
* count vs sum
* index accumulation

### 解题思路

代码遍历 `word` 的每一个位置：

```java
for (int k = 0; k < word.length(); k++)
```

每次取 `word` 中 index 为 `k` 的一个字符：

```java
String letter = word.substring(k, k + 1);
```

然后判断这个字符是否出现在 `target` 中：

```java
if (target.indexOf(letter) != -1)
```

如果出现，就执行：

```java
num += k;
```

注意不是：

```java
num++;
```

而是加上 index `k`。

所以返回值不是匹配字符的数量，而是这些匹配字符在 `word` 中的 index 之和。

聊天记录中也强调关键线索是 `num += k`，不是 `num++`。

### 易错点

很多学生会选“characters 的数量”，但代码加的是位置：

```java
num += k;
```

不是计数。

---

## Q28 — 数组索引套索引

### 答案

**D：`{8, 1, 8}`**

> 注：你后来补充过 D 是 `8 1 8`；早先 OCR 中 D 曾可能被识别错。

### 考点

* array indexing
* nested indexing
* `nums.length / 2`
* expression inside brackets

### 解题思路

数组：

```java
int[] nums = {2, 5, 1, 8, 0, 6};
```

写出 index 表：

```text
index: 0  1  2  3  4  5
nums:  2  5  1  8  0  6
```

### 代码追踪

#### a

```java
int a = nums[nums.length / 2];
```

`nums.length = 6`：

```text
6 / 2 = 3
```

所以：

```text
a = nums[3] = 8
```

#### b

```java
int b = nums[nums[0]];
```

先算：

```text
nums[0] = 2
```

所以：

```text
b = nums[2] = 1
```

#### c

```java
int c = nums[nums[2] + 2];
```

先算：

```text
nums[2] = 1
```

所以：

```text
nums[2] + 2 = 3
```

因此：

```text
c = nums[3] = 8
```

最终：

```java
int[] result = {a, b, c};
```

是：

```text
{8, 1, 8}
```

### 易错点

这类题要从最里面的 brackets 算起：

```java
nums[nums[2] + 2]
```

不是直接看 `nums[2]`，而是先算出完整 index。

---

## Q29 — `countSpecial` 与 `sumSeven`

### 答案

**B：2**

### 考点

* substring
* loop index
* helper method
* tracking variable assignment
* count update timing

### 解题思路

方法每次取长度为 2 的 substring：

```java
String temp = str.substring(i, i + 2);
```

如果这两个 digit 的和为 7，则：

```java
count += 7;
```

题目问：

> 当 `count` 被赋值为 14 时，`i` 的值是多少？

注意问的是 **count 变成 14 的那一次**，不是最后返回值。

### 代码追踪

调用：

```java
countSpecial("24341243")
```

字符串：

```text
index: 0 1 2 3 4 5 6 7
char:  2 4 3 4 1 2 4 3
```

循环：

```java
for (i = 0; i < str.length() - 1; i++)
```

逐步取两位：

#### i = 0

```text
temp = "24"
2 + 4 = 6
```

不是 7，`count` 不变：

```text
count = 0
```

#### i = 1

```text
temp = "43"
4 + 3 = 7
```

所以：

```text
count += 7
count = 7
```

#### i = 2

```text
temp = "34"
3 + 4 = 7
```

所以：

```text
count += 7
count = 14
```

此时 `i = 2`。

所以答案是 B。

### 易错点

不要问最终有几个 pair，也不要跳到最后。题目问的是：

```text
count 被赋值为 14 的那一刻，i 是多少？
```

所以要在每次 `count += 7` 的时刻记录 `i`。
