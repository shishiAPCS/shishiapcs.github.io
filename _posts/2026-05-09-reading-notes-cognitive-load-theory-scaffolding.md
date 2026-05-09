---
title:  "Cognitive Load Theory in the Classroom"
mathjax: true
layout: post
categories: reading-notes
---

<div class="lang-switcher">
  <button id="show-en" class="active" type="button">English</button>
  <button id="show-zh" type="button">中文</button>
</div>

<div class="lang-content" data-lang="en" markdown="1">

# Using Cognitive Load Theory to Differentiate Instruction

## Building Ladders, Not Lowering Standards

We often assume that when students fail to learn, the problem is effort.

They are not focused enough.
They are not disciplined enough.
They did not practice enough.

Sometimes that is true. Motivation matters. Habits matter. But in day-to-day teaching, there is often a quieter problem underneath: the student’s mind is overloaded.

A teacher may explain clearly. The student may sit there, listen, nod, and even seem to understand. Yet when it is time to solve the problem, write the code, or speak in English, nothing comes out.

That does not always mean the student has “nothing in their head.” It may mean too much is trying to pass through a very narrow gate at the same time.

That gate is **working memory（工作记忆）**.

Long-term memory is like a hard drive. It can store a huge amount of knowledge over time. Working memory is more like RAM: small, fragile, and easily overwhelmed. When students learn something new, the bottleneck is often not storage. The bottleneck is real-time processing.

This is the central concern of **Cognitive Load Theory（认知负荷理论, CLT）**, first developed by John Sweller in the 1980s. CLT argues that instruction should be designed around the limits of working memory and the need to build usable knowledge structures in long-term memory. ([ScienceDirect][1])

---

## 1. Why Cognitive Load Theory Matters for Teachers

Cognitive Load Theory matters because it gives us a better explanation for a familiar classroom problem:

> A student who cannot do the task may not be lazy or careless.
> The task may be overloading the student’s working memory.

The same lesson, the same worksheet, or the same exam question can look completely different to the teacher and to the student.

The teacher sees structure.
The student sees fragments.

The teacher sees a method.
The student sees a pile of disconnected steps.

The teacher thinks, “I’m just showing the next step.”
The student may still be trying to find the first step.

This gap exists because teachers already have well-developed knowledge structures. Students often do not.

That is why teaching is not simply about “covering the material.” Teaching means designing a path that the student’s mind can actually travel.

A good lesson does not merely present information clearly. It helps students process that information without overload and gradually turn it into usable knowledge.

That usable knowledge structure is called a **schema（图式）**.

---

## 2. What Is a Schema（图式）?

A schema is a mental structure that packages many small pieces of information into one meaningful unit.

In plain English, it is a “knowledge chunk” or a “mental shortcut.” In Chinese, 图式 is a useful translation because it suggests a pattern, structure, or organized mental model.

A beginner sees pieces.
An expert sees patterns.

For example, a child who is just learning Chinese may see these characters as seven separate items:

> 中、华、人、民、共、和、国

But an adult sees one concept:

> 中华人民共和国

The seven characters have been compressed into one familiar schema.

The same thing happens in AP Computer Science A. A confident student sees this line:

```java
for (int i = 0; i < arr.length; i++)
```

and immediately thinks:

> Loop through the array.

That is one schema.

But for a beginning student, this one line may contain five or six separate problems:

What does `int i = 0` do?
Why is it `< arr.length`?
When does `i++` happen?
What is the relationship between `i` and `arr[i]`?
Why is the last index not `arr.length`?

What looks like “one basic line of code” to the teacher may be a traffic jam inside the student’s working memory.

So the difficulty of a task is not determined only by the task itself. It also depends on what schemas the student already has.

To a student with the right schema, the task is one organized whole.
To a student without that schema, the task is a pile of loose parts.

When we say a student “doesn’t have the basics,” we often mean this:

> The student has not yet built stable schemas that can be called up automatically.

Sweller’s early work on cognitive load emphasized exactly this point: domain-specific schemas are a major difference between experts and novices, and conventional problem solving can consume so much processing capacity that little is left for schema acquisition. ([ScienceDirect][1])

---

## 3. Types of Cognitive Load: Not All Mental Effort Is Useful

Cognitive Load Theory usually distinguishes between different kinds of load.

The first is **intrinsic load（内在负荷）**: the complexity built into the learning task itself.

For example, an AP CSA free-response question has high intrinsic load because students may need to read the prompt, understand the class structure, identify method requirements, write loops, manage conditions, update variables, and return the correct result.

The second is **extraneous load（外在负荷）**: mental effort caused by things that do not directly support learning.

This can come from unclear instructions, messy formatting, unnecessary decoration, poor sequencing, confusing slides, distracting examples, or a teacher’s explanation that jumps too quickly between steps.

A third term, **germane load（增益负荷）**, has traditionally referred to the mental effort involved in building schemas. However, more recent discussions of CLT, including Sweller’s own work, have questioned whether germane load should be treated as a separate independent category. The practical point for teachers is still clear: reduce unnecessary load so students can spend their limited mental resources on the learning that actually matters. ([Springer][2])

In short:

> Good teaching is not about making the classroom busier.
> Good teaching is about making thinking clearer.

---

## 4. AP CSA: Giving an FRQ Skeleton Is Not “Making It Easy”

In AP Computer Science A, this problem appears all the time.

Stronger students can look at an FRQ and quickly infer the structure: use a loop, check a condition, call a method, update a variable, return a value.

Weaker students may stare at the same page and go blank.

They may have learned the relevant content before, but they do not know how to begin. Their problem is not always the final answer. Often, their problem is the starting point.

At that moment, saying the following does not help much:

“Read the question again.”
“Think about it.”
“You just need more practice.”

The student is not refusing to climb. The student cannot find the first foothold.

That is why I have started giving weaker students a simplified FRQ skeleton or a set of guiding comments. Instead of asking them to write an entire method from a blank page, I may give them a structure like this:

```java
// loop through the needed values

// get or update the current item

// check the required condition

// update the result
```

The student’s job is not to copy an answer. The student’s job is to use the prompt to fill in the key code.

This is not lowering standards. It is reducing unproductive search load.

A full FRQ can overwhelm a novice because the student must process the prompt, syntax, logic, method calls, variable updates, and scoring requirements all at once. A skeleton removes part of the unnecessary search burden so that the student’s working memory can focus on the real learning:

Why do we need a loop here?
What condition are we checking?
Which variable changes?
What should be returned?

This is the purpose of **scaffolding（支架）**.

A scaffold does not carry the student up the mountain. It gives the student a place to put their foot. Once the student can stand, we gradually remove the scaffold. This gradual removal is often called **guidance fading（指导淡出）**.

Research on worked examples supports this logic. A 2023 meta-analysis found that worked examples can improve mathematics performance across levels by reducing unnecessary problem-solving demands and helping learners focus on underlying structure. ([Springer][3])

---

## 5. ESL Speaking: A Vocabulary Quiz Should Build Language Schemas

The same principle applies to ESL Speaking.

A traditional vocabulary quiz often tests translation:

English to Chinese.
Chinese to English.

That is not useless. But it can easily turn vocabulary into isolated memory work.

A student may know the Chinese meaning of a phrase but not know how to use it in a sentence. Another student may recognize the English phrase on paper but fail to retrieve it during speaking.

So I redesigned the quiz structure. Instead of testing vocabulary in one flat way, I now ask students to process the same core phrases through several layers.

### Step 1: Function Sorting

**Function sorting（功能分类）**

Students first sort phrases by communicative purpose or speaking function.

For example:

Which phrases help explain reasons?
Which phrases express emotions?
Which phrases describe results?
Which phrases are useful for telling a personal story?

The goal is not spelling. The goal is to help students understand what the phrase does in speech.

### Step 2: Meaning-to-Form Retrieval

**Meaning-to-form retrieval（意义到形式的提取）**

Students are given the Chinese meaning and asked to retrieve the English phrase. To reduce unnecessary spelling anxiety, the target phrases are already provided in a word bank.

This allows students to focus on the key mental move:

> When I want to express this meaning, can I retrieve the right English form?

### Step 3: Contextual Use

**Contextual use（语境使用）**

Students then choose the correct phrase to complete sentences.

Now the phrase is no longer floating by itself. It is connected to sentence structure, tone, logic, and context.

### Step 4: Speaking Output

**Speaking output（口语输出）**

Finally, students answer one or two short speaking questions using the target phrases.

At this stage, they are no longer simply recognizing the phrase. They are beginning to turn it into a resource they can use.

The point is that the same phrase is processed multiple times:

> recognize its function → retrieve its form → use it in context → produce it in speech

That is how language schemas form.

A word or phrase that can be used in speaking is rarely stored as a lonely dictionary item. It is usually connected to situations, functions, sentence frames, emotions, and personal experience.

This is why vocabulary teaching should not stop at “Do you know what it means?” A better question is:

> Can the student retrieve it, place it, and use it when speaking?

---

## 6. Differentiation: Different Students Need Different Scaffolds

Cognitive Load Theory also helps explain why one-size-fits-all instruction often fails.

Students with low prior knowledge need more explicit support. They benefit from clearer models, more worked examples, smaller steps, and more visible guidance.

Students with higher prior knowledge may not need the same level of support. Too much repetition or too many prompts can actually slow them down or bore them. They need faster fading, greater variation, and more transfer tasks.

This is related to the **expertise reversal effect（专业知识反转效应）**: instructional supports that help novices may become less helpful, or even unhelpful, for more advanced learners. A 2025 meta-analysis describes this as a core issue in adaptive instruction: different learners benefit from different levels of instructional assistance depending on their expertise. ([ScienceDirect][4])

So differentiation is not labeling students.

It is recognizing a simple reality:

> Students have different schema reserves, so they need different cognitive support.

In AP CSA, a weaker student may need a code skeleton, step-by-step comments, and repeated practice with similar structures. A stronger student may be ready for a complete FRQ, variation problems, or independent debugging.

In ESL Speaking, a weaker student may need sorting, matching, guided retrieval, and sentence-level use before speaking freely. A stronger student may move more quickly into extended answers, topic transfer, and spontaneous production.

That is not unfair. In fact, that is closer to fairness.

Fairness does not always mean giving every student the same ladder.
Fairness means helping every student reach the next step.

---

## Conclusion: Teaching Is Schema Building

Cognitive Load Theory gives teachers a simple but powerful reminder:

Students’ minds are not empty containers that we can fill as quickly as we like. They are limited-bandwidth systems.

If we give too much information at once, students jam.
If our explanations are messy, students jam.
If we ask beginners to explore too freely before they have enough schemas, students jam.

Good teaching clears the road.

It breaks complex tasks into manageable steps.
It reduces unnecessary noise.
It helps knowledge pass through the narrow gate of working memory and settle into long-term memory as usable schemas.

Our job is not just to finish the content.

Our job is to design a path students can actually walk.

When the scaffold is well built, students can climb higher.

---


Baddeley, A. D., & Hitch, G. J. (1974). *Working Memory*. This classic work helped shape the modern understanding of working memory as a limited-capacity system. ([Nova Southeastern University][5])

Barbieri, C. A., Miller-Cotto, D., Clerjuste, S. N., & Chawla, K. (2023). *A Meta-analysis of the Worked Examples Effect on Mathematics Performance*. *Educational Psychology Review, 35*, Article 11. ([Springer][3])

Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). *Why Minimal Guidance During Instruction Does Not Work: An Analysis of the Failure of Constructivist, Discovery, Problem-Based, Experiential, and Inquiry-Based Teaching*. *Educational Psychologist, 41*(2), 75–86. ([Taylor & Francis Online][6])

Mayer, R. E. (2002). *Multimedia Learning*. Research on multimedia learning helps explain why poor slide design, split attention, and unnecessary decoration can increase cognitive load. ([JSU][7])

Sweller, J. (1988). *Cognitive Load During Problem Solving: Effects on Learning*. *Cognitive Science, 12*(2), 257–285. ([ScienceDirect][1])

Sweller, J. (2023). *The Development of Cognitive Load Theory: Replication Crises and Incorporation of Other Theories Can Lead to Theory Expansion*. *Educational Psychology Review, 35*, Article 95. ([Springer][2])

Tetzlaff, L., Simonsmeier, B. A., Peters, T., & Brod, G. (2025). *A Cornerstone of Adaptivity: A Meta-analysis of the Expertise Reversal Effect*. *Learning and Instruction, 98*, 102142. ([ScienceDirect][4])

[1]: https://www.sciencedirect.com/science/article/pii/0364021388900237?utm_source=chatgpt.com "Cognitive load during problem solving: Effects on learning"
[2]: https://link.springer.com/article/10.1007/s10648-023-09817-2?utm_source=chatgpt.com "The Development of Cognitive Load Theory - Springer Nature"
[3]: https://link.springer.com/article/10.1007/s10648-023-09745-1?utm_source=chatgpt.com "A Meta-analysis of the Worked Examples Effect on ..."
[4]: https://www.sciencedirect.com/science/article/pii/S0959475225000660?utm_source=chatgpt.com "A meta-analysis of the expertise reversal effect"
[5]: https://app.nova.edu/toolbox/instructionalproducts/edd8124/fall11/1974-Baddeley-and-Hitch.pdf?utm_source=chatgpt.com "WORKING MEMORY"
[6]: https://www.tandfonline.com/doi/abs/10.1207/s15326985ep4102_1?utm_source=chatgpt.com "Why Minimal Guidance During Instruction Does Not Work"
[7]: https://www.jsu.edu/online/faculty/MULTIMEDIA%20LEARNING%20by%20Richard%20E.%20Mayer.pdf?utm_source=chatgpt.com "MULTIMEDIA LEARNING by Richard E. Mayer"


</div>

<div class="lang-content" data-lang="zh" markdown="1">

# 用认知负荷理论来分层教学

很多时候，我们以为学生学不会，是因为他们不够认真、不够努力、不够自律。

当然，态度会影响学习。但在真实课堂里，还有一个更隐蔽、更基础的问题：学生的大脑可能已经“堵车”了。

老师讲得很努力，学生也坐在那里听，可是知识就是进不去。不是因为学生脑子里没有空间，而是因为新知识进入大脑的时候，必须先经过一个非常狭窄的入口：**工作记忆（working memory）**。

长期记忆像硬盘，容量很大；工作记忆像内存，容量很小。学生学习新知识时，真正的瓶颈往往不在“记不住”，而在“当下处理不过来”。

这就是**认知负荷理论（Cognitive Load Theory, CLT）**想解决的问题。

---

## 一、为什么认知负荷理论对老师特别重要？

认知负荷理论对老师重要，是因为它提醒我们：

> 学生不会，不一定是态度问题；很多时候是教学设计让学生的工作记忆超载了。

同样一节课，同样一道题，同样一份讲义，老师眼里可能很清楚，学生眼里却可能是一团乱麻。

原因很简单：老师脑子里已经有很多成熟的知识结构，学生还没有。

老师看到的是结构，学生看到的是碎片。
老师看到的是方法，学生看到的是一堆互相打架的信息点。
老师以为自己在讲“下一步”，学生可能连“第一步”在哪里都没找到。

所以，教学不是把内容讲完，而是要设计一条学生的大脑能够走得通的路。

认知负荷理论给老师一个非常实用的视角：

> 好的教学，不只是讲得清楚，而是让学生的大脑能够承受、加工，并最终形成可调用的知识结构。

这个知识结构，就是**图式（schema）**。

---

## 二、什么是图式 Schema？

图式，可以理解成大脑里的“知识压缩包”。

一个初学者看到的世界，是零散的；一个熟练者看到的世界，是打包好的。

比如，一个刚开始学中文的小孩看到“中、华、人、民、共、和、国”这七个字，可能会把它们当成七个独立的信息点。但对成年人来说，“中华人民共和国”早就是一个整体。它不是七个字，而是一个概念。

这就是图式。

在 AP Computer Science A 里也是一样。一个熟练学生看到：

```java
for (int i = 0; i < arr.length; i++)
```

他看到的不是一堆零散符号，而是一个整体：**遍历数组**。

但对刚学编程的学生来说，这一行代码里可能同时塞进了太多东西：

`int i = 0` 是什么？
为什么是 `< arr.length`？
`i++` 什么时候执行？
`arr[i]` 和 `i` 有什么关系？
为什么最后一个位置不是 `arr.length`？

老师眼中的“一行基础代码”，在学生脑中可能是五六个互相打架的信息点。

所以，一个题目到底难不难，不只取决于题目本身，也取决于学生脑子里有没有相关图式。

对有图式的学生来说，这是一个整体。
对没有图式的学生来说，这是一堆碎片。

所谓“基础不牢”，很多时候说的就是：学生还没有形成稳定可调用的图式。

---

## 三、认知负荷有几种：不是所有“累”都有价值

认知负荷理论通常把学习中的负荷分成几类。

第一类是**内在负荷（intrinsic load）**，也就是学习内容本身的复杂度。比如 AP CSA 的 FRQ 本身就复杂，因为学生要同时理解题意、类结构、方法要求、循环逻辑、条件判断和返回结果。

第二类是**外在负荷（extraneous load）**，也就是那些和学习目标无关，却消耗学生脑力的东西。比如题目排版混乱、说明跳步、例题和练习距离太远、PPT 上信息太花、老师讲法绕来绕去，都会增加外在负荷。

第三类常被称为**增益负荷（germane load）**，指学生真正用来建构图式的有效努力。不过在较新的讨论中，很多学者不再把它单独作为一类负荷，而是更强调：教学应该尽量减少外在负荷，把学生有限的认知资源留给真正重要的内容。

一句话说：

> 好的教学，不是把课堂变得更热闹，而是让学生的大脑更清楚地工作。

---

## 四、AP CSA：给 FRQ 骨架，不是“放水”，而是降低无效搜索负荷

在 AP Computer Science A 的 FRQ 训练中，一个很常见的现象是：强一点的学生看到题目，能马上判断应该写循环、判断、调用方法，或者更新变量；但弱一点的学生看到一整页 FRQ，第一反应往往是空白。

他们不是完全没有学过相关知识，而是不知道从哪里开始。

这时，如果我们只是说：

“你再读一遍题。”
“你先想一想。”
“你要多练。”

其实帮助很有限。因为学生卡住的地方不一定是最终答案，而是**起点**。

所以，在最近几个月的 FRQ 训练中，我会给基础较弱的学生提供一个简化的代码骨架，或者用注释把关键步骤提示出来。

比如，不直接让学生从空白处写完整方法，而是先给出结构：

```java
// loop through the needed values

// get or update the current item

// check the required condition

// update the result
```

学生要做的不是抄答案，而是根据题意把关键代码补进去。

这件事的本质，不是降低标准，而是减少无效搜索。

完整 FRQ 对新手来说，认知负荷太高。学生要同时处理题意、语法、逻辑、方法调用和评分点。给出骨架以后，老师其实是帮学生先拿掉一部分外在负荷，让他们把脑力集中在真正重要的地方：这一步为什么要循环？条件是什么？变量怎么更新？结果如何返回？

这就是**支架（scaffolding）**的意义。

支架不是替学生爬山，而是让学生先知道脚可以踩在哪里。等学生能站稳，再逐渐撤掉支架，这就是**指导淡出（guidance fading）**。

---

## 五、ESL Speaking：词汇 quiz 不只是考记忆，而是帮助学生形成语言图式

同样的道理，也适用于 ESL Speaking。

以前设计词汇 quiz，最直接的方式可能是：

看英文写中文，或者看中文写英文。

这种方式不是完全没用，但它很容易把词汇学习变成孤立记忆。学生可能知道一个词的中文意思，却不知道它在句子里怎么用；也可能背得出英文，却在口语表达时想不起来。

所以我后来调整了 quiz 的结构，不再只考单一维度的翻译，而是让学生从多个层次加工同一组核心词汇和词组。

第一步是**功能分类（function sorting）**。
学生先根据使用场景和表达目的，把词组分类。比如哪些词用于描述原因，哪些用于表达情绪，哪些用于说明结果，哪些适合讲经历。这个步骤的重点不是拼写，而是让学生知道：这个表达到底在口语里“干什么”。

第二步是**意义到形式的提取（meaning-to-form retrieval）**。
给出中文意思，让学生写出对应英文。为了避免学生把脑力过多消耗在拼写焦虑上，核心词汇已经提前给出。这样学生真正练的是：看到一个意思时，能不能从脑中提取对应表达。

第三步是**语境使用（contextual use）**。
学生从词库中选择合适表达，填入句子。这一步开始把词汇放回真实语境里，让学生看到一个表达如何和句子结构、语气、逻辑关系结合。

第四步是**口语输出（speaking output）**。
给学生一两个简短问题，要求他们使用指定词汇写出或说出自己的回答。到了这一步，学生不只是“认识”这个词，而是开始把它变成自己能调用的表达资源。

这套练习的重点是：同一个词汇，不是只见一次，而是从“功能识别 → 形式提取 → 句中使用 → 个人输出”不断加工。

这其实就是在帮助学生形成语言图式。

词汇不是孤零零地存在于脑子里的。真正能在口语里用出来的词汇，往往已经和场景、功能、句型、情绪、个人经验绑在了一起。

---

## 六、分层教学的核心：不同学生需要不同支架

认知负荷理论还提醒我们：同样的教学设计，对不同学生的效果可能完全不同。

对低先验知识的学生来说，开放性太强的任务会带来过高认知负荷。他们需要更多明确指导、更多例题、更小步的练习、更清楚的提示。

对高先验知识的学生来说，过多重复和过细提示反而会让他们无聊，甚至降低学习效率。他们需要更快撤掉支架，给更多变式、迁移和挑战。

所以，分层教学不是给学生贴标签，而是承认一个事实：

> 学生脑子里的图式储备不同，他们需要的认知支持也不同。

在 AP CSA 里，弱一点的学生可能需要代码骨架、步骤提示和类似题型反复练习；强一点的学生则可以更快进入完整 FRQ、变式题和独立 debug。

在 ESL Speaking 里，弱一点的学生需要先做分类、匹配和句中使用；强一点的学生则可以更快进入自由表达、扩展回答和话题迁移。

这不是不公平。恰恰相反，这才是真正公平。

公平不是给所有学生同一张梯子，而是让每个学生都够得到下一步。

---

## 结语：教学不是灌输，而是帮学生建立图式

认知负荷理论给老师一个很朴素但重要的提醒：

学生的大脑不是一个可以无限装东西的容器。
它更像一个带宽有限的系统。

如果我们一次给太多信息，学生会堵住。
如果我们讲法太乱，学生会堵住。
如果我们让新手过早独立探索，学生也会堵住。

好的教学，是帮学生清理道路，搭好台阶，让知识能通过工作记忆这道窄门，慢慢进入长期记忆，变成可以调用的图式。

所以，教师真正的工作不是把内容讲完，而是设计一条学生能走得上去的路。

支架搭得好，学生就能爬得更高。


</div>

<style>
.lang-switcher {
  display: flex;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.lang-switcher button {
  padding: 0.45rem 0.9rem;
  border: 1px solid #ccc;
  border-radius: 999px;
  background: #f8f8f8;
  cursor: pointer;
  font-size: 0.95rem;
}

.lang-switcher button.active {
  background: #222;
  color: white;
  border-color: #222;
}

.lang-content[hidden] {
  display: none;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("show-en");
  const zhBtn = document.getElementById("show-zh");
  const blocks = document.querySelectorAll(".lang-content");

  function showLanguage(lang) {
    blocks.forEach(block => {
      block.hidden = block.dataset.lang !== lang;
    });

    enBtn.classList.toggle("active", lang === "en");
    zhBtn.classList.toggle("active", lang === "zh");

    localStorage.setItem("preferredLanguage", lang);
  }

  enBtn.addEventListener("click", () => showLanguage("en"));
  zhBtn.addEventListener("click", () => showLanguage("zh"));

  showLanguage(localStorage.getItem("preferredLanguage") || "en");
});
</script>








