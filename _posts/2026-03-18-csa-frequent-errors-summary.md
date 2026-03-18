---
title: "AP CSA FRQ 常见错误汇总"
mathjax: true
layout: post
categories: media
render_with_liquid: false
---


## `isWordChain` 

| 常犯错误                                                | 典型错误写法                                                                                                   | 为什么会丢分                                                                                             | 正确思路                                                                                   | 哪些同学犯过   |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------- |
| **1. `indexOf` 调用不完整或比较位置写错**                       | `if (current.indexOf == -1)` ； `indexOf(wordList.get(i - 1) < 0)`                                        | `indexOf` 是方法，必须有括号和参数；另外，`< 0` 应该是拿 `indexOf(...)` 的返回值来比较，不能写进参数里。评分说明也明确提到，**`indexOf` 调错会失分**。 | 先把前一个字符串传进去，再判断返回值是否为 `-1`。核心结构：`if (current.indexOf(previous) == -1)`                 | KC, M, J |
| **2. 判断方向写反了**                                      | `if (current.indexOf(previous) != -1) { return false; }`                                                 | 题目要求是：**找不到前一个字符串时返回 `false`**。如果写成 `!= -1` 就把逻辑反了，本来找到时应该继续，结果却提前判错。                              | 想清楚：`indexOf(...) == -1` 才表示“没找到”。                                                     | Kv       |
| **3. `return` 太早，算法提前结束**                           | 在循环里很早就 `return true;` 或者某次局部比较失败就立刻 `return false;`                                                     | 评分说明明确说了：**因为 early return 导致结果错误，就拿不到算法分**。这种错误会让程序只检查第一组，或者只检查局部字符，而不是检查完整列表/完整字符串。              | `isWordChain` 应该是：只要发现一组不满足，就 `return false`；循环全部检查完后，最后再 `return true`。               | H, E, D  |
| **4. 把方法名、列表名、元素名混了**                               | `isWordChain.size()`；`createList.size()`；`if (wordList != prev.value)`                                   | 这是 Java 基础对象概念没分清：方法不能 `.size()`，整个 `wordList` 也不能直接拿来和某个字符串比较；`.value` 也不是这里的合法写法。                | 记住三层对象：`wordList` 是列表，`wordList.get(i)` 才是某个字符串，字符串再去调 `indexOf` / `substring`。        | H, Se    |
| **5. `ArrayList` 的 `.size()` 和字符串的 `.length()` 混用** | `for(int i =0; i < wordList.length; i++)`；`wordList.get(i).size()`                                       | `ArrayList` 用 `.size()`，`String` 用 `.length()`。这类错误一旦出现，遍历或字符串处理都会出问题。                             | 背熟：**list → size()；String → length()**。                                                | Kv, E    |
| **6. 下标越界：从 0 开始却去取 `i-1`**                         | `for(int i = 0; i < wordList.size(); i++) { String pre = wordList.get(i-1); }`                           | 当 `i = 0` 时会访问 `wordList.get(-1)`，直接越界。                                                            | 这题检查“当前和前一个”，循环应从 `i = 1` 开始。                                                          | I        |
| **7. `substring` 截取位置错，没真正删掉前缀**                    | `substring(j)`（而前面其实已经确定 `j == 0`）                                                                       | 评分说明对 Part (b) 很看重这点：必须构造出“**去掉 target 开头之后**”的新字符串。如果写成 `substring(0)`，等于原串照搬，拿不到这部分分。            | 如果已经确定单词以 `target` 开头，通常应从 `target.length()` 开始截：`current.substring(target.length())`。 | M        |
| **8. 用 `substring(0, target.length())` 时没做长度保护**    | `String occur = a.substring(0, target.length());`                                                        | 评分说明明确写了：如果用 `substring` 判断前缀，**必须防止字符串长度不够**，否则不给这一点。                                             | 先判断 `current.length() >= target.length()`，再去截。                                         | N        |
| **9. `add` / 取元素的调用方式错了**                           | `New.add(worldList.size(i).substring(target.legth()));`                                                  | 这里把 `size` 当成取元素方法用了；而且 `length` 也拼错了。Part (b) 的评分点里，`add` 调用错误会影响得分。                              | 正确顺序通常是：先 `get(i)` 取出字符串，再 `substring(...)`，最后 `add(...)` 到新列表。                        | Sk       |
| **10. 手写子串匹配过于复杂，结果语法和逻辑一起崩**                       | `boolean continue = true;`、`int static long = 0;`、`int same = current.substring(...)`、`if (same == old)` | 批改记录里有学生试图手写匹配，这说明有思路，但问题是：关键字不能当变量名，`substring` 返回 `String` 不能放进 `int`，字符串也不能用 `==` 比内容。          | 这道题别硬写手动匹配。AP CSA 更稳的做法是直接用 `indexOf` / `substring` 这类内置方法。                            | E        |
| **11. Part (b) 只搭了框架，没有真正完成“识别 + 截取 + 添加”**         | 只有 `for` 循环或空的 `if`，没有实际处理代码                                                                             | 这类写法有时能拿到“声明列表”或“遍历”的基础分，但拿不到真正的功能分，因为没有完成识别开头、去掉前缀、加入新列表这些核心动作。                                   | Part (b) 至少要完整做到三步：**找出以 target 开头的字符串 → 去掉前缀 → add 到结果列表**。                           | Z, G, Kv |

## 本题总结：

1. **看到“contains previous as a substring”**，优先想到 `indexOf(previous) == -1`
2. **看到“starts with target and remove it”**，优先想到
   `current.indexOf(target) == 0`
   或先判长度再用 `substring(0, target.length()).equals(target)`
3. **列表遍历分清楚**：`ArrayList -> size()`，`String -> length()`
4. **算法分最怕 early return 和方向写反**。程序结构一错，前面小分拿到了，后面大分还是会掉。

