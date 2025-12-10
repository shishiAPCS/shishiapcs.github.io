---
title:  "CSA File & Scanner"
mathjax: true
layout: post
categories: media
---



{% include codeHeader.html %}

## File & Scanner 复习表

> 说明：
>
> * ⏎ 表示“换行符” `\n`
> * ␣ 表示“空格”
> * “token” 可以理解为：一个“单词/数字/布尔值”这样的**一块内容**

---

### 1. File 和 Scanner 基本用法

| 构造器 / 方法                | 用来做什么（简单理解）                          | 返回值类型     | 示例代码                                                               | 空白 / 换行的行为                                                                                                                                    | 常见错误 & 记忆小贴士                                                                                                                                                    |
| ----------------------- | ------------------------------------ | --------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `File(String pathname)` | 表示一个**文件的位置**（只是地址，不是文件本身）           | `File`    | `java File f = new File("data.txt");`                              | 和空格、换行**无关**，只是一个“文件地址卡片”。                                                                                                                    | ❌ 以为它会真的创建文件。<br>❌ 文件名/路径写错，后面 `Scanner` 会报错。<br>🧠：**File = 文件地址，不是文件本体。**                                                                                     |
| `Scanner(File f)`       | 根据文件创建一个 `Scanner`，用来**读取文件内容**      | `Scanner` | `java File f = new File("data.txt"); Scanner in = new Scanner(f);` | 和空白无关，只是“连上”这个文件。                                                                                                                             | ❌ 忘记处理 `FileNotFoundException`。<br>❌ 读完忘记 `in.close()`。<br>🧠：**Scanner 像“读卡器”，File 是卡。**                                                                       |
| `int nextInt()`         | 读下一个**整数**，例如 `42`                   | `int`     | `java int n = in.nextInt();`                                       | ✅ 会跳过前面的空格、换行。<br>❌ 读完数字后，行尾的 ⏎ **还在**，光标停在数字后面。                                                                                              | ❌ 下一个不是整数会抛异常。<br>❌ 紧接着用 `nextLine()` 会读到空串。<br>🧠：**会跳前面空白，不会吃后面换行。**                                                                                          |
| `double nextDouble()`   | 读下一个**小数**，例如 `3.14`                 | `double`  | `java double d = in.nextDouble();`                                 | 行为和 `nextInt()` 一样：跳过前面空白，不吃后面换行。                                                                                                             | ❌ 格式不对（如 `3,14`）会抛异常。<br>❌ 紧接 `nextLine()` 也是空串。<br>🧠：**记成“nextInt 的小数版”。**                                                                                    |
| `boolean nextBoolean()` | 读下一个**布尔值**：`true` 或 `false`         | `boolean` | `java boolean ok = in.nextBoolean();`                              | 也是 token 读取：跳过前面空白，不吃后面换行。                                                                                                                    | ❌ 读到 `yes/no` 这种会异常。<br>❌ 后面直接 `nextLine()` 一样会先读到空串。<br>🧠：**三兄弟：int / double / boolean 行为一致。**                                                                |
| `String next()`         | 读下一个**“单词”**（以空格、换行分隔）               | `String`  | `java String word = in.next();`                                    | ✅ 会跳过前面的空格、换行。<br>⛔ 遇到空格或换行就停，比如 `"AP CSA"` → 先读 `"AP"`。<br>❌ 不吃后面的换行。                                                                        | ❌ 想读整行用 `next()`，结果只拿到第一个单词。<br>🧠：**next = 下一个单词，不是下一行。**                                                                                                      |
| `String nextLine()`     | 读**从当前位置到这一行结尾的所有字符**（可以有空格，不包括换行本身） | `String`  | `java String line = in.nextLine();`                                | ✅ 读整行：`Hello␣world⏎` → `"Hello world"`。<br>⚠️ 如果前面刚用过 `nextInt / nextDouble / nextBoolean / next`，它们留下了行尾的 ⏎，这时的 `nextLine()` 会先得到 **空串 ""**。 | ❌ 不理解“为什么是空串”。<br>✅ 正确做法常见套路：<br>`java int n = in.nextInt(); in.nextLine();       // 清掉本行剩下的 ⏎ String s = in.nextLine(); // 真正下一行`<br>🧠：**token 之后先清行，再读下一行。** |
| `boolean hasNext()`     | 问：**后面还有没有 token？**（单词/数字/布尔）        | `boolean` | `java while (in.hasNext()) { System.out.println(in.next()); }`     | ✅ 会自动跳过空格、换行，然后看还有没有“真正内容”。<br>⛔ 空格、换行本身**不算 token**。<br>👉 如果后面只有空格/换行，`hasNext()` 就是 false。                                                 | ❌ 以为它会检查“是不是下一个整数”。<br>（想要那种效果要用 `hasNextInt()`，AP 不一定考）<br>🧠：**hasNext 看“单词/内容”，空格换行不算。**                                                                     |
| `boolean hasNextLine()` | 问：**后面还有没有一行？**（有没有没读完的文本）           | `boolean` | `java while (in.hasNextLine()) { String line = in.nextLine(); }`   | ✅ 只要文件**没到结尾**，通常就算“还有一行”，哪怕这一行是空行或只有空格。<br>✅ 空格算这一行的内容。<br>✅ 换行符把行和行分开。                                                                      | ❌ 和 `hasNext()` 搞混。<br>🧠：**hasNextLine 看“行”，hasNext 看“单词/token”。**                                                                                             |
| `void close()`          | 关闭 Scanner，释放资源（好习惯）                 | `void`    | `java in.close();`                                                 | 和空白无关。                                                                                                                                        | ❌ 关了之后又继续用这个 Scanner 会出错。<br>🧠：**读完记得关门（close）。**                                                                                                              |

---

### 2. 重点易错：`nextInt()` + `nextLine()` 为什么会读到空串？

**文件内容（可视化）：**

```text
42⏎
Hello␣world⏎
```

**代码：**

```java
int x = in.nextInt();
String s = in.nextLine();
```

**光标变化：**

1. 开始时：在 `4` 前
2. `nextInt()` 读走 `42`，光标停在 2 后面：`42⏵⏎Hello...`
3. 此时行尾的 ⏎ 还在
4. `nextLine()` 从“当前光标位置到本行行尾”读取 → 只读到 `""`（因为中间只有一个 ⏎）
5. 光标跳到下一行开头

✅ 正确做法（套路）：

```java
int x = in.nextInt();
in.nextLine();          // 清掉这一行剩余的 ⏎
String s = in.nextLine();   // 现在才是下一行真正内容
```

---

### 3. 重点对比：`hasNext()` VS `hasNextLine()`

| 方法              | 它在问什么？                             | 空格算不算“有东西”？ | 换行算不算“有东西”？                       | 怎么用来记？                         |
| --------------- | ---------------------------------- | ----------- | --------------------------------- | ------------------------------ |
| `hasNext()`     | 后面还有没有**下一个 token（单词 / 数字 / 布尔）**？ | ❌ 不算，是分隔符   | ❌ 不算，是分隔符                         | **看“单词/内容”**，不是看符号；空格、换行都会被跳过。 |
| `hasNextLine()` | 后面还有没有**下一行**？（有没有没读完的文本）          | ✅ 算，是这一行的内容 | ✅ 换行符用来分隔一行一行，只要没到文件结尾，通常就还有“下一行” | **按“行”来想：只要文件没读完，就有下一行。**      |


