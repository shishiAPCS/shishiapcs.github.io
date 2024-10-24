---
title: "AP CSA"
---

---
  - 考试时间：Wed, May 7, 2025
  - [课堂规则](https://shishiapcs.github.io/CSA-Class-Rules/)
  - [课前需注册服务](https://shishiapcs.github.io/CSA-New-Semester/)
  - [主教材 runestone.academy](https://runestone.academy/)
  - [AP 分数计算器](https://examstrategist.com/ap-computer-science-a-score-calculator/)
  - [CSA 考试详情页](https://apstudents.collegeboard.org/courses/ap-computer-science-a)
  - [CodingBat](https://codingbat.com/java) 

---
  - [Java Style Guidelines](https://langintro.com/comsc075/java_style_guide.html)


---
## Java Class Sample:
```java
//This is a Cat class. It is like a blueprint for making Cat objects.
// A class defines the characteristics(color and breed) and actions(meowing) of the objects.
public class Cat{
    //Characteristics of the Cat class
    //instance variables 
    private String color;
    private String breed;
    private int age;
    private boolean isHungry;
    private String name;
    private double weight;
    private double height;
    
    // Default Constructor
    public Cat(){
        //This is a constructor. It is used to create a Cat object
        //with some default values.
        color = "unkown";
        breed = "unkown";
        age = 0;
        isHungry = true;
    }
    
    // Constructor with parameters
    public Cat(int a){
        age = a;
        
    }
    
    public Cat(int a, String c){
        age = a;
        color = c;
    }
    
    public Cat(String c, int a){
        color = c;
        age = a;
    }
    
    // Methods
    public void showAge(){
        System.out.println("Age: " + age);
    }
    
    
    public void meow(){
        System.out.println("Meow!!!");
        
    } 
    
    public void eat(int foodAmount){
        System.out.println("I eat " + foodAmount + " a day");
        
    }
    
    // Main method
    public static void main(String[] args){
        //int num = 2;
        //System.out.println("num: " + num);
        //int num2 = num;
        //System.out.println("num2: " + num2);
        //num = 9; //changing num later does not affect num2
        //System.out.println("num2 after num change: " + num2);
        //System.out.println("num after num change: " + num);
        Cat littleCat = new Cat(20, "black");
        //System.out.println("littleCat's color: " + littleCat.color);
        Cat bigCat = littleCat;
        //System.out.println("bigCat's color: " + bigCat.color);
        littleCat.color = "pink";
        //bigCat.showAge();
        bigCat.eat(50);
        //System.out.println("littleCat's color after change: " + littleCat.color);
        //System.out.println("bigCat's color after change littleCat: " + bigCat.color);
    }
    
    
}

```


---
## Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP Computer Science A

## Unit 1 Primitive Types 2.5%-5% <br> 1. 原始类型 2.5%-5%
### 1.1 Why Programming? Why Java?<br>为什么编程？为什么是Java？
### 1.2 Variables and Data Types<br>变量和数据类型
### 1.3 Expressions and Assignment Statements<br>表达式和赋值语句
### 1.4 Compound Assignment Operators<br>复合赋值运算符
### 1.5 Casting and Ranges of Variables<br>类型转换和变量范围

## Unit 2 Using Objects 5%-7.5% <br> 2. 使用对象 5%-7.5%
### 2.1 Objects - Instances of Classes<br>对象 - 类的实例
### 2.2 Creating and Storing Objects (Instantiation)<br>创建和存储对象（实例化）
### 2.3 Calling a Void Method<br>调用无返回值的方法
### 2.4 Calling a Void Method with Parameters<br>带参数调用无返回值的方法
### 2.5 Calling a Non-void Method<br>调用有返回值的方法
### 2.6 String Objects, Concatenation, Literals, and More<br>字符串对象，串联，字面量等
### 2.7 String Methods<br>字符串方法
### 2.8 Wrapper Classes - Integer and Double<br>包装类 - 整数和双精度浮点值
### 2.9 Using the Math Class<br>使用Math类

## Unit 3 Boolean Expressions and if Statements 15%-17.5%<br>3. 布尔表达式和if语句 15%-17.5%
### 3.1 Boolean Expressions<br>布尔表达式
### 3.2 if Statements and Control Flow<br>if语句和控制流
### 3.3 if-else Statements<br>if-else语句
### 3.4 else if Statements<br>else if语句
### 3.5 Compound Boolean Expressions<br>复合布尔表达式
### 3.6 Equivalent Boolean Expressions<br>等价布尔表达式
### 3.7 Comparing Objects<br>比较对象

## Unit 4 Iteration 17.5%-22.5%<br>4. 迭代 17.5%-22.5%
### 4.1 while Loops<br>while循环
### 4.2 for Loops<br>for循环
### 4.3 Developing Algorithms Using Strings<br>使用字符串开发算法
### 4.4 Nested Iteration<br>嵌套迭代
### 4.5 Informal Code Analysis<br>非正式代码分析

## Unit 5 Writing classes 5%-7.5%<br>5. 编写类 5%-7.5%
### 5.1 Anatomy of a Class<br>类的构成
### 5.2 Constructors<br>构造器
### 5.3 Documentation with Comments<br>使用注释进行文档化
### 5.4 Accessor Methods<br>访问器方法
### 5.5 Mutator Methods<br>改变器方法
### 5.6 Writing Methods<br>编写方法
### 5.7 Static Variables and Methods<br>静态变量和方法
### 5.8 Scope and Access<br>范围和访问
### 5.9 this Keyword<br>this关键字
### 5.10 Ethical and Social Implications of Computing Systems<br>计算系统的伦理和社会影响

## Unit 6 Array 10%-15%<br>6. 数组 10%-15%
### 6.1 Array Creation and Access<br>创建和访问数组
### 6.2 Traversing Arrays<br>遍历数组
### 6.3 Enhanced for Loop for Arrays<br>增强的数组for循环
### 6.4 Developing Algorithms Using Arrays<br>使用数组开发算法

## Unit 7 ArrayList 2.5%-7.5%<br>7. 数组列表 2.5%-7.5%
### 7.1 Introduction to ArrayList<br>介绍ArrayList
### 7.2 ArrayList Methods<br>ArrayList方法
### 7.3 Traversing ArrayLists<br>遍历ArrayLists
### 7.4 Developing Algorithms Using ArrayLists<br>使用ArrayLists开发算法
### 7.5 Searching<br>搜索
### 7.6 Sorting<br>排序
### 7.7 Ethical Issues Around Data Collection<br>数据收集的伦理问题

## Unit 8 2d Array 7.5%-10%<br>8. 二维数组 7.5%-10%
### 8.1 2D Arrays<br>2D数组
### 8.2 Traversing 2D Arrays<br>遍历2D数组

## Unit 9 Inheritance 5%-10%<br>9. 继承 5%-10%
### 9.1 Creating Superclasses and Subclasses<br>创建超类和子类
### 9.2 Writing Constructors for Subclasses<br>为子类编写构造器
### 9.3 Overriding Methods<br>覆盖方法
### 9.4 super Keyword<br>super关键字
### 9.5 Creating References Using Inheritance Hierarchies<br>使用继承层次创建引用
### 9.6 Polymorphism<br>多态
### 9.7 Object Superclass<br>对象超类

## Unit 10 Recursion 5%-7.5%<br>10. 递归 5%-7.5%
### 10.1 Recursion<br>递归
### 10.2 Recursive Searching and Sorting<br>递归搜索和排序

</script>
</div>
</div>

---

