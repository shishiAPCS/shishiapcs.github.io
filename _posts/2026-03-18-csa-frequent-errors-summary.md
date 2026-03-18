---
title: "AP CSA FRQ 常见错误汇总"
mathjax: true
layout: post
categories: media
render_with_liquid: false
---

# 考前总提醒

## 看到 FRQ 时，先问自己这题属于哪一类

* **字符串判断题** → 优先想 `indexOf` / `substring`
* **列表删除题** → 优先想逆序遍历
* **连续长度题** → 优先想 `current` + `max`
* **遍历比较题** → 先想清楚循环从哪开始、检查到哪结束

---

## 比“高级写法”更重要的，是“稳”

考试里最容易得分的写法通常不是最花哨的写法，而是：

* 调用对象写对
* 循环边界写对
* 判断方向写对
* `return` 放对位置
* 用题目最直接的思路完成任务

---

## 每次交卷前，必须检查：

* **我有没有把 `ArrayList` 和数组写混？**
* **我有没有把 `size()` 和 `length()` 写混？**
* **我有没有过早 `return`？**
* **我有没有漏掉最后的 `return`？**
* **我这题是不是其实有更简单、更稳的模板？**

---

# `isWordChain`

## 这题先看这 5 个坑

- **看到“contains previous as a substring”**，优先想到 `indexOf(previous) == -1`
- **不要把判断方向写反**
- **不要在循环里过早 `return`**
- **分清 `ArrayList`、`String`、元素对象分别该怎么调用方法**
- **Part (b) 的核心是：识别开头 → 去掉前缀 → 加入新列表**

---

## 常见错误表

| 错误名 | 错误写法 | 为什么错 | 正确改法 | 速记 |
|---|---|---|---|---|
| `indexOf` 用法写错 | `current.indexOf == -1` | `indexOf` 是方法，必须写括号和参数 | 写成 `current.indexOf(previous)` 再比较结果 | **方法要有括号** |
| 判断方向写反 | `if (current.indexOf(previous) != -1) return false;` | 题目要求是“**没找到**前一个字符串时才返回 `false`” | 应判断 `== -1` | **没找到才错** |
| 提前 `return`，没有检查完整体 | 在循环中很早 `return true;` | 程序可能只检查了第一组，后面根本没检查 | 发现错误时 `return false`；全部检查完后再 `return true` | **先查完，再返回 true** |
| 把列表、元素、方法混了 | `isWordChain.size()` / `if (wordList != prev.value)` | 方法、列表、字符串不是同一个层级，调用对象错了 | `wordList` 是列表；`wordList.get(i)` 才是字符串元素 | **先分清对象是谁** |
| `ArrayList` 和 `String` 的长度写法混了 | `wordList.length` / `wordList.get(i).size()` | `ArrayList` 和 `String` 的方法不同 | `ArrayList -> size()`；`String -> length()` | **list 用 `size()`，String 用 `length()`** |
| 下标越界：从 0 开始却取 `i - 1` | `for (int i = 0; ... ) { wordList.get(i - 1); }` | 当 `i = 0` 时会访问 `-1`，直接越界 | 这题通常应从 `i = 1` 开始 | **当前和前一个比较，就从 1 开始** |
| `substring` 截取位置错，没真正去掉前缀 | `current.substring(0)` | `substring(0)` 等于原字符串，根本没删掉前缀 | 应从 `target.length()` 开始截 | **去前缀，就从前缀长度后面开始截** |
| 用 `substring` 判断前缀时没做长度保护 | `current.substring(0, target.length())` | 如果 `current` 比 `target` 短，会出问题 | 先判断 `current.length() >= target.length()` | **先判够不够长，再截** |
| `add` / `get` 调用顺序错 | `newList.add(wordList.size(i).substring(...))` | `size()` 不是取元素的方法，调用对象错了 | 先 `get(i)` 取字符串，再 `substring(...)`，最后 `add(...)` | **先取元素，再处理，再加入** |
| 把简单字符串题写得过于复杂 | 手写一大段字符逐个比较 | 这类写法容易同时出语法错和逻辑错 | 直接用 `indexOf` / `substring` 更稳 | **能用内置方法，就别硬手写** |
| Part (b) 只写了框架，没完成核心动作 | 只有 `for` 或空的 `if` | 没有真正完成“识别 + 截取 + 添加” | 至少完整写出这三步 | **框架不等于得分点** |

---

---

# `WeatherData`

## 这题先看这 5 个坑

* **看到删除 `ArrayList` 元素，优先想到：逆序遍历，或删后 `i--`**
* **`longestHeatWave` 本质是“最长连续段”题，不是找最高温度**
* **连续段题优先想：`current` + `max`**
* **不要把 `ArrayList` 当数组写**
* **写完一定检查最后有没有 `return`**

---

## 常见错误表

| 错误名                 | 错误写法                                  | 为什么错                       | 正确改法                                         | 速记                              |
| ------------------- | ------------------------------------- | -------------------------- | -------------------------------------------- | ------------------------------- |
| 正向删除却没处理索引          | `remove(i)` 后继续正常 `i++`               | 删除后后面的元素左移，下一项会被跳过         | 逆序删除，或删除后 `i--`                              | **删元素先想逆序**                     |
| 新建了列表，却没真正改对原列表     | 只往新列表里加元素，但没让 `temperatures` 变成正确结果   | 新列表写一半不算完成，原数据没改对还是失分      | 如果用新列表法，最后必须正确替换回原列表                         | **关键不是建新列表，而是改对原列表**            |
| 数据类型写错              | `ArrayList<String>` 存温度               | 温度数据本质上是 `Double`，类型一错后面全乱 | 临时列表类型也应和原数据一致                               | **温度是 `Double`**                |
| 删除条件方向写反            | 该删范围外，却写成删范围内                         | 条件一反，整题结果就错                | 直接抓题意：删掉 `< lower` 或 `> upper` 的值            | **先想清楚谁该删**                     |
| 把“最长热浪”理解成别的问题      | 去找最高温度、最大值、位置等                        | 题目要的是**最长连续天数**，不是最高温度     | 用 `current` 记录当前连续长度，用 `max` 记录历史最长          | **不是找最大温度，是找最长连续段**             |
| 写连续段时只看 `i` 和 `i+1` | `temperatures.get(i+1)`               | 最后一项会越界，而且把题写复杂            | 一次只看当前元素，更稳                                  | **连续段题尽量只看当前项**                 |
| 计数器清零位置写错           | 每轮循环末尾都 `current = 0`                 | 这样连续长度永远积累不起来              | 只有当前值不达标时才清零                                 | **`current = 0` 通常在 `else` 里**  |
| 忘了更新最大值或忘了 `return` | 没有 `return max;`                      | 前面思路可能对，最后还是白丢分            | 每次 `current++` 后及时尝试更新 `max`，最后 `return max` | **最后检查 `max` 和 `return`**       |
| 把 `ArrayList` 当数组写  | `temperature[i]` / `temperature.size` | `ArrayList` 访问方式不是数组写法     | `ArrayList` 用 `.get(i)` / `.size()`          | **list 用 `.get()` / `.size()`** |
| 只写了变量初始化，主体没写完      | 只有 `int current = 0; int max = 0;`    | 初始化只是开始，核心的遍历、判断、更新、返回都没写  | 至少把 `for`、`if`、`else`、`return` 写完整           | **骨架不完整，分数拿不全**                 |

---

