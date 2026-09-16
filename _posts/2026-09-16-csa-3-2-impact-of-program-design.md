---
title: "AP CSA 3.2：程序设计的影响"
layout: post
categories: media
render_with_liquid: false
---

Programs do more than produce correct output. A program should work reliably under different conditions, and its design can affect people, society, the economy, and culture.

程序不仅仅需要“算出正确答案”。一个程序还应该在不同条件下可靠运行，而程序的设计也可能对个人、社会、经济和文化产生影响。

> **A successful program should work reliably and solve its intended problem without creating unnecessary harmful effects.**
> **一个成功的程序不仅要可靠地完成任务，还要解决原本的问题，同时尽量避免带来不必要的负面影响。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 3.2 程序设计的影响<br>Impact of Program Design

## 系统可靠性<br>System Reliability

* 在规定条件下完成预期任务而不失败<br>Perform expected tasks under stated conditions without failure
* 不能只测试最正常的情况<br>Do not test only the easiest normal case
* 使用多种条件进行测试<br>Test under a variety of conditions

## 程序的影响<br>Program Impacts

* 可能影响社会、经济和文化<br>Programs can affect society, the economy, and culture
* 影响可能是有益的<br>Effects can be beneficial
* 影响也可能是有害的<br>Effects can be harmful

## 非预期后果<br>Unintended Consequences

* 程序可能成功完成原目标<br>A program may accomplish its intended purpose
* 同时也可能产生没有预料到的负面影响<br>It may also create unexpected harmful effects
* 判断时要考虑目标之外的结果<br>Consider effects beyond the intended use

## 法律与知识产权<br>Legal and Intellectual Property

* 程序员经常复用别人写的代码<br>Programmers often reuse code written by others
* 开源代码可按其开放方式进行使用<br>Open-source code is made available for reuse
* 非开源代码通常需要获得许可<br>Non-open-source code generally requires permission

## AP 考试重点<br>AP Exam Focus

* 根据情境判断系统是否可靠<br>Evaluate reliability from a scenario
* 区分有益影响与有害影响<br>Identify beneficial and harmful effects
* 找出非预期的负面后果<br>Recognize unintended harmful consequences
* 判断代码复用是否涉及授权问题<br>Recognize permission and intellectual-property concerns

</script>
</div>
</div>

# 1. Reliability Means More Than “It Worked Once”<br>可靠性不等于“成功运行过一次”

A school creates an online course-registration program.

学校开发了一个在线选课程序。

The programmers test it with one student registering for one course, and it works correctly.

程序员测试了一个学生选择一门课程的情况，程序运行正常。

Can they conclude that the system is reliable?

可以因此认为系统具有良好的可靠性吗？

**Answer: No.**

System reliability means that a program performs its expected tasks **under stated conditions without failure**.

**System reliability（系统可靠性）**是指程序能够在规定条件下完成预期任务，并且不会失败。

One successful test is not enough.

一次成功测试并不足以证明程序可靠。

The developers should test different situations, such as:

开发者还应该测试不同情况，例如：

* many students registering at the same time;

* a course becoming full;

* invalid input;

* different valid course choices.

* 很多学生同时选课；

* 课程已经满员；

* 输入不合法；

* 不同的正常选课情况。

The AP idea is simple:

AP 中的核心理解是：

> **More varied testing helps increase confidence in system reliability.**

> **使用更多不同情况进行测试，可以提高对系统可靠性的信心。**

# 2. System Reliability<br>系统可靠性

A reliable program should continue to perform its intended task correctly under the conditions it is designed to handle.

一个可靠的程序应该能够在设计要求的各种条件下，持续正确完成预期任务。

Consider two testing plans.

比较下面两种测试方案。

### Testing Plan A

```text
Test one normal input.
It works.
Stop testing.
```

### Testing Plan B

```text
Test normal inputs.
Test boundary cases.
Test unusual but valid situations.
Test different operating conditions.
```

**Plan B gives stronger evidence of reliability.**

**方案 B 更能说明程序具有可靠性。**

Testing cannot guarantee that software will never fail, but testing a variety of conditions can reveal problems that one simple test may miss.

测试不能保证软件永远不会出错，但使用多种条件进行测试，可以发现单一测试无法发现的问题。

# 3. Test More Than the “Happy Path”<br>不要只测试最顺利的情况

Suppose a program processes student scores from `0` through `100`.

假设一个程序处理 `0` 到 `100` 的学生成绩。

Testing only:

只测试：

```text
75
```

does not tell us much about how the program behaves in other situations.

并不能充分说明程序在其他情况下是否可靠。

Useful tests might include:

更有价值的测试还包括：

```text
0
100
50
1
99
```

and situations the program may need to reject or handle appropriately.

以及程序可能需要拒绝或正确处理的其他情况。

For AP questions, look for phrases such as:

做 AP 题时，可以特别注意：

* **variety of conditions**
* **different cases**
* **boundary conditions**
* **expected behavior under stated conditions**

These usually point toward **system reliability**.

这些表达通常都与 **system reliability（系统可靠性）**有关。

# 4. Programs Can Have Beneficial and Harmful Effects<br>程序可能同时产生正面与负面影响

Software can affect:

软件可能影响：

* **society**
* **the economy**
* **culture**

也就是：

* **社会**
* **经济**
* **文化**

The effect is not automatically positive just because the program solves a problem.

程序解决了一个问题，并不代表它带来的所有影响都是正面的。

Consider a delivery app.

例如一个外卖配送应用。

| Possible effect                                                                                 | Type                                 |
| ----------------------------------------------------------------------------------------------- | ------------------------------------ |
| Customers can order food more easily.<br>顾客点餐更加方便。                                              | Beneficial<br>有益                     |
| Restaurants may reach more customers.<br>餐厅能够接触更多顾客。                                            | Beneficial<br>有益                     |
| Some workers may become dependent on unpredictable platform-based work.<br>部分劳动者可能依赖收入不稳定的平台工作。 | Potentially harmful<br>可能有害          |
| Local shopping and eating habits may change.<br>当地消费和饮食习惯可能发生变化。                                | Cultural or social impact<br>文化或社会影响 |

An AP question may ask you to identify **an effect of the program**, not whether the entire program is “good” or “bad.”

AP 题目通常会让你判断**某一种具体影响**，而不是简单判断整个程序“好”还是“坏”。

# 5. Intended Purpose vs. Unintended Consequences<br>预期用途与非预期后果

A program may successfully solve its original problem and still create another problem.

一个程序可能成功解决原本的问题，同时又产生新的问题。

Suppose a school introduces an automatic notification system.

假设学校使用自动通知系统：

```text
Goal:
Notify parents immediately when a student is absent.
```

This may successfully improve communication.

它可能确实提升了家校沟通效率。

But imagine that inaccurate attendance data causes incorrect notifications to be sent.

但如果考勤数据出现错误，就可能向家长发送错误通知。

That is an **unintended harmful effect**.

这就是 **unintended harmful effect（非预期的负面影响）**。

The key distinction is:

关键区别是：

| Idea                       | Question to ask                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| Intended effect<br>预期影响    | What problem was the program designed to solve?<br>程序原本要解决什么问题？                            |
| Unintended effect<br>非预期影响 | What additional result occurred that was not part of the original goal?<br>出现了什么原本没有计划的结果？ |

For AP questions, do not assume:

做 AP 题时，不要认为：

> “The program achieved its intended goal, so it has no harmful effects.”

> “程序完成了目标，所以不会产生负面影响。”

Both can exist at the same time.

两者完全可能同时存在。

# 6. Social, Economic, and Cultural Effects<br>社会、经济与文化影响

You do not need to memorize a long list of examples.

不需要背大量例子。

Instead, understand what each category is asking you to think about.

| Type of impact          | Focus                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| Social impact<br>社会影响   | How people communicate, interact, access services, or live their daily lives.<br>人们如何交流、互动、获得服务或生活。 |
| Economic impact<br>经济影响 | Jobs, businesses, costs, productivity, or access to economic opportunities.<br>就业、企业、成本、效率或经济机会。    |
| Cultural impact<br>文化影响 | Habits, values, entertainment, language, or shared practices.<br>习惯、价值观、娱乐、语言或共同文化实践。               |

One program may affect more than one category.

同一个程序完全可能同时产生多种类型的影响。

The categories help you analyze the effect; they do not need to be perfectly separated in every real-world situation.

这些分类主要用于帮助分析，不需要强行把现实中的每一种影响只归入一个类别。

# 7. Legal Issues and Intellectual Property<br>法律问题与知识产权

Programmers often use code written by other programmers.

程序员经常会使用别人编写的代码。

That does **not** mean every piece of code can automatically be copied into a program.

但这并不意味着任何代码都可以直接复制使用。

For AP CSA, know this basic distinction:

对于 AP CSA，需要掌握下面这个基本区别：

| Code                                  | AP understanding                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------- |
| Open-source code<br>开源代码              | Published so that others can reuse it according to its allowed terms.<br>发布后允许他人按照相应规则进行复用。 |
| Code that is not open source<br>非开源代码 | Permission is required before incorporating it into another program.<br>在加入自己的程序之前需要获得许可。   |

The important AP idea is **permission**.

AP 中最重要的理解是**授权**。

If code is not made available for reuse, a programmer cannot simply assume that finding it online gives permission to use it.

如果代码并没有被开放供他人复用，程序员不能因为“网上能找到”就默认自己拥有使用权。

# 8. AP-Style Scenario Analysis<br>AP 风格情境分析

Consider this scenario:

观察下面的情境：

> A navigation application is designed to find the fastest driving route. It successfully reduces travel time for many users, but directing many drivers through a quiet residential neighborhood creates heavy local traffic.

Which statement best describes the situation?

哪一种描述最准确？

A. The program is unreliable because it found a route.
B. The program has a beneficial intended effect and an unintended harmful effect.
C. The program cannot have a harmful effect because users arrive faster.
D. The program has a compile-time error.

**Answer: B**

The intended benefit is reduced travel time.

预期的正面效果是减少出行时间。

The increased neighborhood traffic is an additional harmful consequence that was not the original goal.

住宅区交通量增加则属于原目标之外产生的负面后果。

This is exactly the kind of distinction Topic 3.2 expects students to recognize.

# 9. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                                                    | Why it is wrong                                                                       | Correct understanding                                                |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| “It worked once, so it is reliable.”<br>“成功运行一次，所以程序很可靠。”                  | One case does not represent all stated conditions.<br>一个测试情况不能代表所有情况。                 | Test with a variety of conditions.<br>使用多种条件测试。                      |
| Testing only normal inputs.<br>只测试最普通的输入。                                  | Problems may appear under other valid or boundary conditions.<br>问题可能只会在其他情况或边界条件下出现。 | Include varied test cases.<br>使用不同类型的测试。                             |
| Assuming a useful program has only beneficial effects.<br>认为有用的程序只会产生正面影响。 | Programs can have both beneficial and harmful effects.<br>程序可以同时带来正面和负面影响。            | Analyze individual consequences separately.<br>分别分析不同影响。             |
| Ignoring effects outside the original goal.<br>忽略程序目标之外的影响。                | Unintended consequences are an important part of program impact.<br>非预期后果也是程序影响的一部分。  | Ask what else happens because the program exists.<br>考虑程序还会带来哪些额外结果。 |
| Assuming all code found online is free to use.<br>认为网上找到的代码都可以自由使用。        | Code that is not open source requires permission.<br>非开源代码需要获得许可。                     | Check whether reuse is allowed.<br>确认是否获得复用授权。                       |

# 10. Mini Practice<br>小练习

## Practice 1: System Reliability<br>练习一：系统可靠性

A program has been tested only with one normal input.

一个程序只测试了一个正常输入。

What is the best next step to improve confidence in its reliability?

怎样做最能提高对程序可靠性的信心？

A. Run exactly the same test again.
B. Test the program with a variety of conditions.
C. Rename the variables.
D. Make the program longer.

**Answer: B**

Reliability should be tested under different conditions the program may need to handle.

可靠性应该通过不同的使用条件进行测试。

---

## Practice 2: Beneficial and Harmful Effects<br>练习二：正面与负面影响

A video-conferencing program allows people in different cities to work together without traveling.

视频会议程序让不同城市的人可以不出差就一起工作。

Which is a possible beneficial effect?

哪一个可能属于正面影响？

**Answer:** Reduced travel time and easier long-distance collaboration.

**答案：**减少出行时间，并让远距离合作更加方便。

A program can have this benefit while still having other negative effects.

即使存在这种正面影响，程序仍然可能同时产生其他负面影响。

---

## Practice 3: Unintended Consequence<br>练习三：非预期后果

A shopping application recommends products that users are likely to buy. The recommendations increase sales, but some users spend much more money than they originally intended.

一个购物应用推荐用户可能购买的商品。推荐功能提高了销售额，但部分用户因此花费了远超原计划的钱。

Which part is an unintended harmful effect?

哪一部分属于非预期的负面影响？

**Answer:** Users spending substantially more than intended.

**答案：**用户的消费金额远超原计划。

The program may achieve its intended business goal while still creating another consequence.

程序可能实现原本的商业目标，同时产生其他后果。

---

## Practice 4: Intellectual Property<br>练习四：知识产权

A programmer finds useful code that is **not** published as open source.

程序员找到了一段有用的代码，但这段代码**并不是开源代码**。

What should the programmer do before incorporating it into the program?

在把它加入自己的程序之前，应该怎么做？

**Answer:** Obtain permission to use the code.

**答案：**获得使用这段代码的许可。

Being able to view code does not automatically provide permission to reuse it.

能够看到代码，并不自动代表拥有复用代码的授权。

---

## Practice 5: Identify the AP Concept<br>练习五：判断 AP 概念

A banking program works correctly for most transactions but fails whenever two particular operations happen at nearly the same time.

一个银行程序在大部分交易中运行正常，但当两种特定操作几乎同时发生时就会失败。

Which Topic 3.2 concept is most directly involved?

A. String immutability
B. System reliability
C. Integer division
D. Method overloading

**Answer: B**

The program fails to perform its expected task under one of the conditions it must handle.

程序在需要处理的某种条件下无法正常完成任务，因此这是系统可靠性问题。

# Quick Checklist<br>快速检查清单

Before answering a Topic 3.2 question, check:

做 3.2 的题目之前，检查：

* Does the program perform its expected task under the stated conditions?
  程序是否能在规定条件下完成预期任务？

* Was the program tested with a **variety of conditions**?
  程序是否使用了**多种不同条件**进行测试？

* Is the question describing **system reliability**?
  题目是否在描述**系统可靠性**？

* What problem was the program intended to solve?
  程序原本想解决什么问题？

* What is the intended beneficial effect?
  预期的正面影响是什么？

* Are there harmful effects as well?
  是否同时存在负面影响？

* Is a harmful result **unintended**?
  某个负面结果是否属于**非预期后果**？

* Does the program affect society, the economy, or culture?
  程序是否对社会、经济或文化产生影响？

* Could one effect fit more than one category?
  同一种影响是否可能涉及多个类别？

* Is reused code open source?
  被复用的代码是否属于开源代码？

* If it is not open source, was permission obtained?
  如果不是开源代码，是否获得了使用许可？

[1]: https://runestone.academy/ns/books/published/csawesome2ptxbeta/topic-3-2-impacts.html?utm_source=chatgpt.com "Impact of Program Design"
