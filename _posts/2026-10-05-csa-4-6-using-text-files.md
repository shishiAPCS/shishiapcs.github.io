---
title: "AP CSA 4.6：读取文本文件"
layout: post
categories: media
render_with_liquid: false
---

前几课，我们把数据放在数组中，再用循环处理它们。但数组中的数据通常是在程序运行时使用的：**如果程序结束了，下次要怎样重新取得这些数据？**

例如，游戏进度可以保存在文件里，下次启动游戏时再读取；学生成绩也可以存成文本文件，让程序自动计算总分或筛选数据。

> **4.6 的核心流程：找到文件 → 创建 `Scanner` → 逐项读取并处理 → 关闭 `Scanner`。**
> 
> 这一课重点学习**从文件读取数据（read）**，不是编写向文件保存数据的程序。

# 核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 4.6 读取文本文件<br>Using Text Files

## 1. 文件与程序
* 文件（file）：程序结束后数据仍可保存
* `File`：提供文件路径或名称
* `Scanner`：连接输入源并读取数据

## 2. 完整读取流程
* `import java.io.*;`：`File`、`IOException`
* `import java.util.Scanner;`：读取工具
* `new File("scores.txt")` → `new Scanner(file)`
* 方法头：`throws IOException`
* 读完：`scan.close()`

## 3. Scanner 读取方法
* `next()`：下一个词（空白符分隔）
* `nextLine()`：下一整行
* `nextInt()` / `nextDouble()` / `nextBoolean()`
* `hasNext()`：是否还有下一项

## 4. 循环读取文件
* `while (scan.hasNext())`
* 每次循环调用读取方法，向前推进
* 可以累计、计数、筛选或存入数组
* 数组长度要符合预期数据量

## 5. CSV 与 split
* CSV：逗号分隔的数据文件
* `line.split(",")` → `String[]`
* `data[0]`、`data[1]` 读取不同字段
* 首行可能是标题（header），需要跳过
* 读取到的数字文本仍是 String

## 6. AP 考试边界
* 4.6.A.1–A.10：文件、读取、循环、拆分、关闭
* 不考键盘输入 `System.in`
* 不考同源混用 `nextLine()` 和其他读取方法的代码
* 不考正则表达式特殊语法

</script>
</div>
</div>

# 1. 第一道 AP 核心题：程序会输出什么？

假设名为 `scores.txt` 的文件**存在，且内容正好是**：

```text
80
90
100
```

阅读下面的代码片段（假设必要的 `import` 和异常声明已经写好）：

```java
File file = new File("scores.txt");
Scanner scan = new Scanner(file);

int a = scan.nextInt();
int b = scan.nextInt();

System.out.println(a + b);
scan.close();
```

程序输出什么？

A. `170`  
B. `270`  
C. `80 90 100`

**答案：A（170）**

`nextInt()` 每执行一次，就读取文件中的**下一个整数**。这里读取了 80 和 90，第三个整数 100 尚未读取。所以输出 `80 + 90 = 170`。

这道题已经包含了本课最重要的概念：**文件中的数据不会自动全部进入程序；每次读取方法只获取相应的一项数据。**

# 2. 文件与数组：为什么需要 File？

**文件（file）**可以把数据保存下来，即使程序没有运行，文件里的数据仍然存在。这叫作持久保存（persistent storage）。

我们已经熟悉数组：

```java
int[] scores = {80, 90, 100};
```

但是，如果成绩来自学校保存的 `scores.txt`，就可以让程序去读取这个文件，而不必每次把所有成绩硬编码到 Java 源代码里。

| 对比 | 数组（array） | 文本文件（text file） |
|---|---|---|
| 主要作用 | 在程序运行过程中组织、处理一组数据 | 在程序运行前后保存数据 |
| 如何取值 | `scores[0]` 等 | `Scanner` 的读取方法 |
| 本课中的关系 | 可以接收从文件读入的数据 | 可以成为数组数据的来源 |

**本课只要求读取文件。** 创建或修改文件内容的 Java 文件写入 API 不是这节课的重点。

# 3. 第一次写完整程序：File + Scanner + IOException

假设 `scores.txt` 与程序使用的工作目录相对应，并且包含：

```text
80
90
100
```

下面是一段完整、可运行的 Java 示例：

```java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class ScoreReader
{
    public static void main(String[] args) throws IOException
    {
        File file = new File("scores.txt");
        Scanner scan = new Scanner(file);

        int total = 0;
        int count = 0;

        while (scan.hasNext())
        {
            int score = scan.nextInt();
            total += score;
            count++;
        }

        System.out.println("Total: " + total);
        System.out.println("Count: " + count);

        scan.close();
    }
}
```

输出：

```text
Total: 270
Count: 3
```

暂时不用记住每一行。先看整个流程：

| 代码 | 作用 |
|---|---|
| `import java.io.File;` | 使用 `File` 类 |
| `import java.io.IOException;` | 使用 `IOException` 类 |
| `import java.util.Scanner;` | 使用 `Scanner` 类 |
| `throws IOException` | 声明方法可能向调用者抛出文件读取异常 |
| `new File("scores.txt")` | 用文件名称构建 `File` 对象 |
| `new Scanner(file)` | 创建用于读取该文件的 `Scanner` |
| `scan.hasNext()` | 判断是否还有下一项数据 |
| `scan.nextInt()` | 读取下一个整数 |
| `scan.close()` | 读取结束后关闭 `Scanner` |

## 3.1 三个类来自不同的 package

| Class | 所属 package | 作用 |
|---|---|---|
| `File` | `java.io` | 表示文件路径或名称 |
| `IOException` | `java.io` | 表示可能发生的输入／输出异常 |
| `Scanner` | `java.util` | 从文件读取数据 |

也可以把前两行的 import 简写为：

```java
import java.io.*;
import java.util.Scanner;
```

`*` 代表导入 `java.io` 包中的类，**不代表自动导入 `java.util.Scanner`**。

## 3.2 `new File(...)` 与 `new Scanner(...)` 不一样

```java
File file = new File("scores.txt");
Scanner scan = new Scanner(file);
```

第一行把文件的名称／路径交给 `File` 对象；第二行才创建实际从该文件读取数据的 `Scanner`。

因此，**`new File("scores.txt")` 不是创建一个新文本文件，也不是把文件内容读进程序。**

如果 `scores.txt` 不存在，或者路径写错，创建用于读取文件的 `Scanner` 时可能抛出 `FileNotFoundException`。

## 3.3 为什么需要 `throws IOException`？

从文件读取数据时，文件可能不存在，也可能无法打开。Java 要求程序明确处理或声明这种受检查的异常（checked exception）。

本课采用最简单的写法：在**使用文件的 method header 末尾**加上：

```java
throws IOException
```

例如：

```java
public static void main(String[] args) throws IOException
```

它表示：**这个方法可能抛出输入／输出异常，由调用方继续处理。**

`throws IOException` 并不会自动修复错误的文件路径。如果异常一直没有得到处理，程序仍然可能终止。

Runestone 也提到 Java 可以使用 `try/catch` 处理异常，但本课的 AP 核心写法是 `throws IOException`，不需要额外学习 `try/catch` 的完整语法。

# 4. Scanner：应该使用哪个读取方法？

`Scanner` 不只有一种读取方式。它可以根据需要获取词、整行文本、整数、小数或布尔值。

| 方法 | 读取什么？ | 返回类型 |
|---|---|---|
| `next()` | 下一个以空白符分隔的词／文本项 | `String` |
| `nextLine()` | 下一整行文本（不包含行结束符） | `String` |
| `nextInt()` | 下一个整数 | `int` |
| `nextDouble()` | 下一个小数／数值 | `double` |
| `nextBoolean()` | 下一个布尔值 | `boolean` |
| `hasNext()` | 是否还有下一项可读取 | `boolean` |
| `close()` | 关闭该 `Scanner` | `void` |

另外，`Scanner(File f)` 是从 `File` 对象建立读取器的 constructor。

## 4.1 `next()` 与 `nextLine()` 的区别

假设文件 `names.txt` 是：

```text
Mia Chen
Leo Wang
```

如果用 `next()` 连续读取两次：

```java
String a = scan.next();
String b = scan.next();
```

得到：

```text
a = "Mia"
b = "Chen"
```

如果**重新创建一个新的 `Scanner`，从文件开头读取**，改用 `nextLine()` 连续读取两次：

```java
String a = scan.nextLine();
String b = scan.nextLine();
```

得到：

```text
a = "Mia Chen"
b = "Leo Wang"
```

**`next()` 以空白符分隔；`nextLine()` 一次读取一整行。**

这里是两段独立示例，不是要求把这两种方法混在同一个读取流程里。

## 4.2 `nextInt()`、`nextDouble()`、`nextBoolean()`

假设文件内容：

```text
12 2.5 true
```

```java
int count = scan.nextInt();
double price = scan.nextDouble();
boolean active = scan.nextBoolean();
```

分别得到：

```text
count = 12
price = 2.5
active = true
```

如果下一项文本是 `2.5`，却使用 `nextInt()` 把它当作整数读取，就会出现 `InputMismatchException`。

**选择读取方法时，要先看文件中数据的实际格式，而不是只看变量名称。**

# 5. 读取未知数量的数据：`while` + `hasNext()`

文件里有多少个值，不一定事先知道。此时最典型的模式是：

```java
while (scan.hasNext())
{
    String word = scan.next();
    System.out.println(word);
}
scan.close();
```

理解这段代码：

1. `hasNext()` 只**检查**是否还有下一项；它不会把这一项读取出来。
2. `next()` 才真正**读取**下一项，并使读取位置向后移动。
3. 下一轮循环再判断是否还有数据。
4. 当没有下一项时，循环结束，最后关闭 `Scanner`。

这与 4.4–4.5 的数组遍历非常相似：

| 数组遍历 | 文件读取 |
|---|---|
| `i < array.length` | `scan.hasNext()` |
| `array[i]` | `scan.next()` / `nextInt()` 等 |
| `i++` 移到下一位置 | 读取方法会推进读取位置 |

**注意：** `hasNext()` 判断的是下一项（token），不是数组长度；在同一文件中选择 `nextLine()` 按行读取时，教材也常配合使用它。这里的示例数据假设没有需要特殊处理的纯空白行。

不要写成：

```java
while (scan.hasNext())
{
    // 没有调用 next() 等读取方法
}
```

这样的循环没有消耗数据，条件可能一直为 `true`，导致无法正常结束。

# 6. CSV 文件与 `String.split()`

Runestone 用 Pokémon 的 CSV 数据集练习这一部分。我们先用更短的学生社团数据，掌握同样的 AP 核心技能。

**CSV（Comma-Separated Values）** 是使用逗号分隔字段的文本文件。

例如 `clubs.csv`：

```text
Name,Club
Mia,Robotics
Leo,Music
Eva,Robotics
```

第一行是表头（header），说明每一列代表什么；后面每行是一条记录。

## 6.1 `split(",")` 会得到一个 String 数组

```java
String line = "Mia,Robotics";
String[] data = line.split(",");
```

结果：

| Index | 0 | 1 |
|---|---|---|
| `data` | `"Mia"` | `"Robotics"` |

因此：

```java
String name = data[0];  // "Mia"
String club = data[1];  // "Robotics"
```

**三个关键点：**

- `split(String del)` 返回的是 `String[]`，不是一个 String。
- 方括号的 index 从 0 开始。
- 即使某一列看起来是数字，`split()` 得到的仍然是 String。把数字文本转换成数值类型，留到下一课 4.7 再学习。

## 6.2 如何跳过 CSV 第一行标题？

```java
scan.nextLine(); // 读取并跳过标题行
```

如果不跳过，`Name,Club` 也会被当作一条普通学生记录处理。

## 6.3 AP 风格综合题：统计 Robotics 社团人数

假设 `clubs.csv` 正好包含上面展示的四行，且不存在空行。下面的方法使用已经学过的 `while`、`split()`、数组和 `if`：

```java
public static int countRobotics() throws IOException
{
    Scanner scan = new Scanner(new File("clubs.csv"));
    scan.nextLine(); // 跳过标题行

    int count = 0;

    while (scan.hasNext())
    {
        String line = scan.nextLine();
        String[] data = line.split(",");

        if (data[1].equals("Robotics"))
        {
            count++;
        }
    }

    scan.close();
    return count;
}
```

（假设类顶部已经导入了 `File`、`IOException` 和 `Scanner`。）

返回值：`2`

逐步分析：

| 读到的行 | `data[0]` | `data[1]` | `count` |
|---|---|---|---:|
| `Mia,Robotics` | Mia | Robotics | 1 |
| `Leo,Music` | Leo | Music | 1 |
| `Eva,Robotics` | Eva | Robotics | 2 |

这个例子不是新的 Java 语法，而是把过去学习的概念组合在一起：

**文件读取 → String 拆分 → 数组索引 → 条件判断 → 计数器。**

# 7. 文件中的数据也可以保存到数组里

4.3–4.5 学过数组的创建和遍历。现在可以把从文本文件中读取的每一行，存进一个数组，之后再用数组算法处理。

例如，假设 `names.txt` 包含**恰好 3 行**姓名：

```text
Mia
Leo
Eva
```

```java
String[] names = new String[3];
int i = 0;

while (scan.hasNext() && i < names.length)
{
    names[i] = scan.nextLine();
    i++;
}
```

最终：

```text
names = {"Mia", "Leo", "Eva"}
```

这段代码的前提是 `scan` 已经连接到 `names.txt`，且文件是按上述方式组织的纯文本；读取完成后还应调用 `scan.close()`。

**为什么要事先知道长度？** 因为数组创建之后长度固定。Runestone 的 SpellChecker 示例同样需要提前知道单词数量，才能创建合适长度的数组。

## Runestone 进阶应用：从 CSV 创建对象数组

教材还进一步把 CSV 行拆分成字段，再用 constructor 创建对象，例如：

```java
String[] data = line.split(",");
Student s = new Student(data[0], data[1]);
students[i] = s;
```

这段代码假设已经存在一个接收两个 String 参数的 `Student` constructor，以及一个预先创建好的 `Student[] students` 数组。

它串起了三个旧知识点：

- 3.4：通过 constructor 创建对象。
- 4.3：对象数组中保存对象引用。
- 4.6：从文本文件读取一行，再使用 `split()` 取得字段。

**这里是在整合旧知识，不是要求学生额外学习一套新的文件 API。**

# 8. AP 考点与明确不考的内容

College Board 的 Learning Objective **4.6.A** 是：*Develop code to read data from a text file*（编写从文本文件读取数据的程序代码）。

本课共有 **10 项 Essential Knowledge**：

| AP 编号 | 必须掌握什么？ |
|---|---|
| **4.6.A.1** | 文件保存的数据可以在程序停止后继续存在，运行时能够取回。 |
| **4.6.A.2** | 使用 `File` 和 `Scanner` 将文件与程序连接起来。 |
| **4.6.A.3** | 理解 `File(String str)`：参数是文件名称／路径。 |
| **4.6.A.4** | 文件可能无法打开；可以在方法头使用 `throws IOException` 声明异常。 |
| **4.6.A.5** | `File` 和 `IOException` 属于 `java.io`，必须正确导入。 |
| **4.6.A.6** | 掌握 `Scanner(File)`、`next()`、`nextLine()`、`nextInt()`、`nextDouble()`、`nextBoolean()`、`hasNext()`、`close()` 的用途。 |
| **4.6.A.7** | 知道不同读取方法处理空白符的方式可能不同；但下面的混用代码明确不考。 |
| **4.6.A.8** | 掌握 `String[] split(String del)`，能够把一行文本拆成 String 数组。 |
| **4.6.A.9** | 使用 `while (scan.hasNext())` 判断是否还有数据。 |
| **4.6.A.10** | 读完文件后调用 `scan.close()`。 |

## 官方 Exclusion Statements（不考范围）

1. **键盘输入不考**：`Scanner(System.in)` 读取用户键盘输入不是本课考试要求。
2. **混用读取方法不考**：不要求编写或分析在同一个输入源中混合使用 `nextLine()` 和其他 `Scanner` 读取方法的代码。只需要理解它们处理空白符的方式不同。
3. **正则表达式特殊语法不考**：`split()` 的参数底层属于正则表达式，但不要求编写或分析特殊正则表达式语法。例如 `split(",")` 这种简单分隔符就够了。

本课官方 Suggested Skills 是：**2.C（编写过程抽象代码）、3.C（判断含方法调用的代码输出）、4.B（解释代码正常工作的前置条件）**。练习时不仅要会写 `Scanner` 代码，还要会根据**给定文件内容**追踪结果、判断是否满足文件存在及数据格式等前提。

# 9. Common Mistakes：常见错误

| 错误理解或写法 | 正确理解 |
|---|---|
| `new File("scores.txt")` 会自动新建文件 | 它建立表示文件路径的 `File` 对象，不会自动新建文本文件或读取内容。 |
| 只导入 `java.io.*` 就可以使用 `Scanner` | `Scanner` 在 `java.util`，仍需导入。 |
| 忘记 `throws IOException`，仍尝试读取文件 | 本课代码需要声明或处理可能无法打开文件的异常。 |
| 以为 `throws IOException` 会修复错误路径 | 它只是异常声明；文件不存在时仍可能终止。 |
| `hasNext()` 会读取下一项 | 它只检查；`next()`、`nextInt()` 等才真正读取。 |
| 以为 `next()` 会读完整的一行姓名 | 它读到空白符为止；整行文本使用 `nextLine()`。 |
| 对 `2.5` 调用 `nextInt()` | 输入不符合预期整数格式，会出现 `InputMismatchException`。 |
| 以为 `line.split(",")` 返回一个 String | 它返回 `String[]`，需要使用 index 取得字段。 |
| CSV 第一行标题直接当作记录处理 | 如果首行是 header，通常应先读取并跳过。 |
| 以为文件数据数量一定等于数组长度 | 将数据存进固定长度数组前，需了解数量或检查边界。 |
| 读完文件忘记 `close()` | 完成读取后调用 `Scanner.close()`。 |

# 10. Mini Practice：AP 风格练习

## Practice 1：文件与持久保存

游戏存档写入文本文件。程序完全关闭后，该文件中的数据会怎样？

A. 文件中的数据会自动消失。  
B. 文件中的数据仍可以保留，下一次运行程序时可以再读取。  
C. 只有把文件内容复制到数组中，数据才能保存。

**答案：B。** 文件用于持久存储，不需要程序一直运行才能保存数据。

## Practice 2：正确打开文件

假设 `grades.txt` 存在，下面哪一段最适合从该文件读取数据？（必要的 import 和异常声明已经完成。）

A. `Scanner scan = new Scanner("grades.txt");`  
B. `Scanner scan = new Scanner(new File("grades.txt"));`  
C. `File scan = new Scanner("grades.txt");`

**答案：B。** `Scanner(File)` 接收 `File` 对象。A 会扫描字符串文本本身，而不是打开指定的文件；C 的声明类型也不匹配。

## Practice 3：代码追踪

`numbers.txt` 的全部内容：

```text
4
7
10
```

```java
Scanner scan = new Scanner(new File("numbers.txt"));
int sum = 0;

while (scan.hasNext())
{
    sum += scan.nextInt();
}

System.out.println(sum);
scan.close();
```

输出是什么？

A. `4`　 B. `11`　 C. `21`

**答案：C。** 三轮分别读到 4、7、10，累加得到 21。

## Practice 4：`next()` 还是 `nextLine()`？

假设文件内容：

```text
Mia Chen
Leo Wang
```

从文件开头使用同一个 `Scanner` 连续调用两次 `next()`，得到的两个 String 是什么？

A. `"Mia Chen"`、`"Leo Wang"`  
B. `"Mia"`、`"Chen"`  
C. `"Mia"`、`"Leo"`

**答案：B。** `next()` 读取以空白符分隔的下一项，空格也会分隔。这里不涉及混用 `nextLine()`。

## Practice 5：CSV 和 split()

```java
String line = "Leo,Music,10";
String[] fields = line.split(",");
System.out.println(fields[1]);
```

输出是什么？

A. `Leo`　 B. `Music`　 C. `10`

**答案：B。** 拆分后的数组索引分别是 0、1、2。

## Practice 6：错误原因与前置条件

`prices.txt` 的第一个值是 `2.5`，程序执行：

```java
int price = scan.nextInt();
```

哪一项最准确？

A. 读到 `2`，小数部分被截断。  
B. 发生 `InputMismatchException`。  
C. 自动把 `price` 改成 `double`。

**答案：B。** `nextInt()` 要求读入可作为 `int` 的文本项，`2.5` 不符合这个格式。可以根据文件数据格式改用 `nextDouble()` 和 `double` 变量。

## Practice 7：填补关键代码

下面的方法要统计文件 `names.txt` 中以空白符分隔的文本项数量：

```java
public static int countWords() throws IOException
{
    Scanner scan = new Scanner(new File("names.txt"));
    int count = 0;

    while (__________)
    {
        scan.next();
        count++;
    }

    scan.close();
    return count;
}
```

横线应该填写什么？

A. `scan.next()`  
B. `scan.hasNext()`  
C. `count < scan.length`

**答案：B。** `hasNext()` 检查是否还有下一项；循环体中的 `next()` 才负责消耗这一项。

# Unit 4.6 核心词汇（Vocabulary）

| Vocabulary | 中文理解 |
|---|---|
| file | 文件；程序不运行时也可以继续保存数据 |
| persistent storage | 持久存储；数据在程序结束后仍然保留 |
| text file | 文本文件；可以由程序读取的文字数据文件 |
| file path / pathname | 文件路径；用来指定文件的位置 |
| `File` | Java 类；表示文件或路径 |
| `Scanner` | Java 类；从文件等输入源读取数据 |
| `import` | 导入；使程序可以使用其他包中的类 |
| `IOException` | 输入／输出异常 |
| `throws` | 方法头中的异常声明关键字 |
| `next()` | 读取下一个以空白符分隔的文本项 |
| `nextLine()` | 读取下一整行文本 |
| `hasNext()` | 判断是否还有下一项可读取 |
| `close()` | 关闭读取器 |
| CSV | 逗号分隔值文本文件（Comma-Separated Values） |
| header | 表头；说明每列表示什么 |
| delimiter | 分隔符；分开字段的字符或文本 |
| `split()` | 将 String 按指定分隔符拆成 String 数组 |
| `InputMismatchException` | 读取数据的类型／格式不符合预期时可能出现的异常 |

---

**下一课预告：** 4.7 会学习 `Integer` 与 `Double` 包装类，以及如何把文件中读出的数字文本转换成数值。比如 `split(",")` 得到的 `"85"` 仍然是 String，不能直接当作 `int` 计算。
