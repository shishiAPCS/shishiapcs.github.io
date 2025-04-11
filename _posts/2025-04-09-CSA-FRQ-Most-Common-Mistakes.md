---
title:  "CSA FRQ Java Syntax Most Common Mistakes"
mathjax: true
layout: post
categories: media
---

# CSA FRQ 语法常见错误汇总 Prompt：


{% include codeHeader.html %}
````markdown
You are an AP Computer Science teacher assistant. I will give you a list of student code submissions from AP CSA Free Response Questions (FRQs).. Your task is to review all the student code carefully and extract **syntax-related mistakes** only (NOT logic mistakes or spelling typos unless they cause compile-time errors).

For each mistake, categorize it by type and output the results in the following Markdown format code block:

## ✅ 2024 FRQ Java Syntax – Most Common Mistakes  
### 2024 年 AP 计算机 FRQ 语法常见错误汇总

---

## 🔍 Summary | 总览

| **Mistake 错误类型** | **Description 描述** |
|----------------------|----------------------|
| [Mistake Type]       | [Brief Description in English] [中文解释] |
... (as many as needed)

---

### 1. 🧩 [Mistake Type]  
#### [中文标题解释]

```java
// 错误示例
[Student's incorrect code]

// 正确示例
[Fixed code]

Tip: [Brief English explanation]  
提示： [Corresponding Chinese explanation]
```

⸻

Repeat for all identified syntax-related issues (missing parentheses, method misuse, type casting, etc.). Make sure your formatting is consistent and ready to paste into a GitHub comment or Markdown file.

Now here is the student code:

````

---
---

# 2024年真题FRQ常见错误列表


## ✅ 2024 FRQ Java Syntax – Most Common Mistakes  
### 2024 年 AP 计算机 FRQ 语法常见错误汇总

---

## 🔍 Summary | 总览

| **Mistake 错误类型**              | **Description 描述** |
|-------------------------------|----------------------|
| Missing parentheses           | Parentheses are required in method calls and conditionals. 方法调用或条件判断中缺少括号。|
| Incorrect method declaration  | Syntax errors in method headers (missing return type, incorrect parameters). 方法头写法错误，例如缺少返回类型或参数不正确。|
| Misuse of type casting        | Using casting syntax incorrectly, e.g. `int(x)` instead of `(int)x`. 类型转换格式错误，错误使用 `int(x)` 而非 `(int)x`。|
| Invalid ArrayList syntax      | Confusing Array syntax with ArrayList methods like `get()` or `add()`. 错误将 Array 的语法用于 ArrayList，例如 `[]` 替代 `get()`。|
| Incorrect object instantiation | Missing `new` when creating objects or using incorrect constructor syntax. 创建对象时遗漏 `new` 或构造器语法错误。|
| Variable declaration mistakes | Undeclared variables or redeclared variables in wrong places. 变量未声明或重复声明。|
| Typo causing compile error    | Misspelled variable or method names that lead to compile errors. 拼写错误造成编译错误（例如拼错方法名或变量名）。|
| Logical conditions misuse     | Using `==` to compare booleans or incorrect logical condition placement. 错误使用 `==` 判断布尔值或条件表达式放置不当。|
| Misuse of loop structure      | Incorrect use of for/while syntax or loop conditions. for/while 循环语法或条件书写错误。|

---

### 1. 🧩 Missing Parentheses  
#### 缺少括号

```java
// 错误示例
if Math.random < 0.05

// 正确示例
if (Math.random() < 0.05)
```

Tip: Method calls and conditionals must use parentheses.  
提示：方法调用和条件表达式必须使用括号。

---

### 2. 🧩 Incorrect Type Casting  
#### 类型转换格式错误

```java
// 错误示例
int decider = int(20*Math.random());

// 正确示例
int decider = (int)(20 * Math.random());
```

Tip: Java uses `(type)` before the expression for casting.  
提示：Java 中类型转换必须写成 `(类型)(表达式)` 的形式。

---

### 3. 🧩 ArrayList Syntax Errors  
#### 错误使用 Array 语法访问 ArrayList

```java
// 错误示例
String a = wordList[i];

// 正确示例
String a = wordList.get(i);
```

Tip: Use `.get(index)` and `.add(value)` for ArrayLists.  
提示：ArrayList 需要使用 `.get(index)` 访问元素，使用 `.add(value)` 添加元素。

---

### 4. 🧩 Object Instantiation Errors  
#### 创建对象时遗漏 `new` 或语法错误

```java
// 错误示例
ArrayList<String> result = ArrayList<String>();

// 正确示例
ArrayList<String> result = new ArrayList<String>();
```

Tip: Use `new` keyword when creating objects.  
提示：创建对象时必须加上 `new` 关键字。

---

### 5. 🧩 Misspelled Variables or Methods  
#### 拼写错误导致编译错误

```java
// 错误示例
return scores[0]+""-""+socres[1]+""-""+teams[activeteam];

// 正确示例
return scores[0] + "-" + scores[1] + "-" + teams[activeteam];
```

Tip: Typos in variable/method names will prevent compilation.  
提示：变量或方法名拼写错误会导致编译失败。

---

### 6. 🧩 Incorrect Boolean Logic  
#### 逻辑表达式写法错误

```java
// 错误示例
if(turn ==1){
  reuslt += teamOne;
}

// 正确示例
if (turn) {
  result += teamOne;
}
```

Tip: Use booleans directly or compare them properly.  
提示：布尔值直接使用或正确比较，不应混用 int 和 boolean。

---

### 7. 🧩 Invalid Loop Structure  
#### 循环结构语法错误

```java
// 错误示例
for(){
    // empty for loop
}

// 正确示例
for (int i = 0; i < numDays; i++) {
    // logic here
}
```

Tip: Make sure your loop headers are valid and complete.  
提示：确保 for 循环头部包含所有三部分（初始化、条件、更新）。

---

### 8. 🧩 Return Type or Method Declaration Errors  
#### 方法返回类型错误或声明不完整

```java
// 错误示例
public boolean isWordChain {

}

// 正确示例
public boolean isWordChain() {

}
```

Tip: Method headers must have parentheses even if no parameters.  
提示：方法名后必须有括号，即使没有参数。

---


Here is the updated syntax mistake report for the **2023 FRQ Java submissions** you provided:

---
---

# 2023年真题FRQ常见错误列表
## ✅ 2023 FRQ Java Syntax – Most Common Mistakes  
### 2023 年 AP 计算机 FRQ 语法常见错误汇总

---

## 🔍 Summary | 总览

| **Mistake 错误类型** | **Description 描述** |
|----------------------|----------------------|
| **For Loop Syntax** | Incorrect separator in for loop conditions / for 循环条件中使用错误的分隔符 |
| **ArrayList Access** | Using array syntax `[]` instead of `.get()` / 用数组语法访问 ArrayList |
| **Return Type Mismatch** | Returning wrong type (e.g., `boolean` in `int` method) / 返回类型不匹配 |
| **Misspelled Method Names** | Typos in method names causing compilation errors / 方法名拼写错误导致编译失败 |
| **Missing Return Statement** | Method lacks required `return` statement / 方法缺少 return 语句 |
| **Incorrect Assignment in Conditionals** | Using `=` instead of `==` in conditionals / 条件语句中误用赋值符号 |
| **Constructor Variable Initialization** | Incorrect instance variable initialization / 构造函数中实例变量初始化错误 |
| **Class Naming Convention** | Class name not capitalized / 类名未大写 |
| **Enhanced For Loop Modification** | Modifying list during enhanced for loop / 在增强 for 循环中修改集合 |

---

### 1. 🧩 For Loop Syntax  
#### for 循环语法错误

```java
// 错误示例
for (int i = temperatures.size() -1, i >= 0, i--) 

// 正确示例
for (int i = temperatures.size() -1; i >= 0; i--)

Tip: Use semicolons `;` to separate for loop clauses.  
提示：for 循环的条件部分用分号分隔。
```

⸻

### 2. 🧩 ArrayList Access  
#### ArrayList 访问方式错误

```java
// 错误示例
if (temperatures[i] < lower) 

// 正确示例
if (temperatures.get(i) < lower)

Tip: Use `.get(index)` to access ArrayList elements.  
提示：ArrayList 必须用 `.get(index)` 访问元素。
```

⸻

### 3. 🧩 Return Type Mismatch  
#### 返回类型不匹配

```java
// 错误示例
public int findFreeBlock(...) {
    return false; // 返回 boolean 给 int 方法
}

// 正确示例
public int findFreeBlock(...) {
    return -1; 
}
```

⸻

### 4. 🧩 Misspelled Method Names  
#### 方法名拼写错误

```java
// 错误示例
public int finFreeBlock(...) // 拼写错误: fin → find

// 正确示例
public int findFreeBlock(...)
```

⸻

### 5. 🧩 Missing Return Statement  
#### 缺少 return 语句

```java
// 错误示例
public String getLines() {
    // 没有 return 语句
}

// 正确示例
public String getLines() {
    return result;
}
```

⸻

### 6. 🧩 Incorrect Assignment in Conditionals  
#### 条件语句中的赋值错误

```java
// 错误示例
if (numberLine = 1) // 误用 = 代替 ==

// 正确示例
if (numberLine == 1)
```

⸻

### 7. 🧩 Constructor Variable Initialization  
#### 构造函数变量初始化错误

```java
// 错误示例
public Sign(String w, int s) {
    String word = w; // 创建了局部变量而非初始化实例变量
}

// 正确示例
public Sign(String w, int s) {
    this.word = w; // 正确初始化实例变量
}
```

⸻

### 8. 🧩 Class Naming Convention  
#### 类名命名规范错误

```java
// 错误示例
public class sign // 类名未大写

// 正确示例
public class Sign
```

⸻

### 9. 🧩 Enhanced For Loop Modification  
#### 增强 for 循环中修改集合

```java
// 错误示例
for (double w : temperatures) {
    temperatures.remove(w); // 运行时抛出 ConcurrentModificationException
}

// 正确示例
for (int i = temperatures.size()-1; i >= 0; i--) {
    temperatures.remove(i); // 倒序遍历删除
}
```

⸻
