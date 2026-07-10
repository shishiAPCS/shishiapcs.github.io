---
title: "AP CSA 1.14：调用实例方法"
layout: post
categories: media
render_with_liquid: false
---

In the previous lessons, we created objects with constructors. In this lesson, we use **instance methods** to make a specific object perform an action or return information about itself.

前几课我们使用构造器创建了对象。这一课，我们学习调用**实例方法**，让某个具体对象执行动作，或者返回与自身有关的信息。

> **A class method is called on a class; an instance method is called on a specific object.**
> **类方法通过类调用；实例方法通过具体对象调用。**

# Core Concepts:<br>核心知识点

<div class="markmap-container">
<div class="markmap">
<script type="text/template">

# AP CSA 1.14 调用实例方法<br>Calling Instance Methods

## 实例方法<br>Instance Methods

* 定义对象能够执行的行为<br>Define an object's behaviors
* 通过具体对象调用<br>Called on a specific object
* 通常可以访问或改变对象属性<br>Can access or change object attributes
* `yertle.forward();`<br>Call `forward` on `yertle`

## 类方法与实例方法<br>Class vs. Instance Methods

* 类方法：`ClassName.methodName()`<br>Class method
* 实例方法：`objectName.methodName()`<br>Instance method
* `Math.sqrt(25)`：类方法<br>Class method
* `yertle.forward()`：实例方法<br>Instance method

## 方法签名与实参<br>Signatures and Arguments

* 方法签名：方法名 + 参数类型列表<br>Name + ordered parameter types
* 实参放在调用的括号中<br>Arguments appear in the call
* 数量、顺序、类型必须匹配<br>Number, order, and types must match
* 方法可以被重载<br>Methods can be overloaded

## void 与非 void<br>Void and Non-void

* `void`：执行动作，不返回值<br>Performs an action, returns no value
* 非 `void`：返回一个值<br>Returns a value
* 返回值可保存、打印或用于表达式<br>Store, print, or use the returned value
* `getWidth()`：常见访问器方法<br>Common accessor method

## 对象状态<br>Object State

* 实例方法可能改变对象的属性<br>May change object attributes
* `resize(5)` 可以改变宽度<br>Can change an object's width
* 后续方法调用使用更新后的状态<br>Later calls use the updated state
* 追踪时逐行更新属性值<br>Trace attributes line by line

## null 引用<br>Null References

* `null` 表示没有指向对象<br>Refers to no object
* 不能通过 `null` 调用实例方法<br>Cannot call a method on `null`
* 会产生 `NullPointerException`<br>Causes a runtime error
* 必须先创建并初始化对象<br>Create the object first

## AP 考点<br>AP Exam Focus

* 判断该用类名还是对象名调用<br>Choose class name or object name
* 判断调用是否合法<br>Check whether a call is valid
* 追踪对象状态和返回值<br>Trace object state and return values
* 区分编译错误、运行时错误和逻辑错误<br>Distinguish common error types

</script>
</div>
</div>

# 1. Class Methods vs. Instance Methods<br>类方法与实例方法

A **class method** belongs to a class and includes `static` in its method header.

**类方法（class method）** 属于类，并且方法头中包含 `static`。

```java
double root = Math.sqrt(25);
```

An **instance method** belongs to objects of a class and does not use `static`.

**实例方法（instance method）** 属于类创建出来的对象，并且不使用 `static`。

```java
yertle.forward();
```

| Method Type     | Call Pattern                       | Example              |
| --------------- | ---------------------------------- | -------------------- |
| Class method    | `ClassName.methodName(arguments)`  | `Math.sqrt(25)`      |
| Instance method | `objectName.methodName(arguments)` | `yertle.forward(50)` |

A quick AP clue: class names usually begin with an uppercase letter, while object variable names usually begin with a lowercase letter.

一个实用判断方法：类名通常以大写字母开头，对象变量名通常以小写字母开头。

# 2. Calling an Instance Method<br>调用实例方法

To call an instance method from `main` or another class, first create the object and then use the dot operator.

要在 `main` 或另一个类中调用实例方法，必须先创建对象，再使用点运算符。

```java
World world = new World(300, 300);
Turtle yertle = new Turtle(world);

yertle.forward();
yertle.turnRight();
```

The general pattern is:

一般格式是：

```java
objectName.methodName(arguments);
```

Read this call:

```java
yertle.forward(50);
```

as:

```text
Ask the object yertle to run forward using the argument 50.
```

可以理解为：

```text
让对象 yertle 执行 forward 方法，并传入实参 50。
```

Inside an instance method of the same class, another instance method can usually be called using only its name:

在同一个类的实例方法内部，通常可以直接使用方法名调用另一个实例方法：

```java
printSlices(slicesPerPerson);
```

# 3. Method Signatures and Arguments<br>方法签名与实参

A method signature consists of the method name and the ordered list of parameter types.

方法签名由**方法名和按顺序排列的参数类型列表**组成。

Example method header:

```java
public void forward(int pixels)
```

Method signature:

```text
forward(int)
```

Method call:

```java
yertle.forward(200);
```

Here:

| Item           | Role             |
| -------------- | ---------------- |
| `pixels`       | parameter        |
| `200`          | argument         |
| `forward(int)` | method signature |

The arguments must match the parameters in:

实参必须在以下方面匹配参数：

* number

* order

* compatible types

* 数量

* 顺序

* 兼容的数据类型

For example, if the signature is:

```text
moveTo(int, int)
```

this is valid:

```java
yertle.moveTo(50, 100);
```

but this is not:

```java
yertle.moveTo(50);
```

# 4. Overloaded Instance Methods<br>重载的实例方法

A class may contain multiple methods with the same name but different signatures.

一个类可以包含多个同名但签名不同的方法，这叫**方法重载**。

For example, a Turtle class may provide:

```text
forward()
forward(int)
```

These calls use different versions:

```java
yertle.forward();
yertle.forward(75);
```

Java selects the matching method based on the number and types of arguments.

Java 会根据实参的数量和类型选择匹配的方法。

# 5. Void and Non-void Instance Methods<br>void 与非 void 实例方法

A `void` instance method performs an action but does not return a value.

`void` 实例方法会执行动作，但不返回值。

```java
yertle.forward();
yertle.turnLeft();
```

These calls may change the object's state, such as its position or direction.

这些调用可能会改变对象的状态，例如位置或方向。

A non-void instance method returns a value.

非 `void` 实例方法会返回一个值。

```java
int width = yertle.getWidth();
System.out.println(yertle.getXPos());
```

The returned value should normally be:

返回值通常应该被：

* stored in a variable

* printed

* used in an expression

* 存入变量

* 打印

* 用在表达式中

Calling a getter without using its result is legal but usually useless:

调用访问器却不使用返回值，虽然可能合法，但通常没有意义：

```java
yertle.getWidth();
```

# 6. Tracing Changes to Object State<br>追踪对象状态的变化

Instance methods may change the attributes of the object on which they are called.

实例方法可能会改变被调用对象的属性。

Consider this class:

```java
public class Rectangle
{
    private int width;
    private int height;

    public Rectangle(int w, int h)
    {
        width = w;
        height = h;
    }

    public void resize(int amount)
    {
        width += amount;
    }

    public int getArea()
    {
        return width * height;
    }
}
```

Now trace this code:

```java
Rectangle r = new Rectangle(10, 15);
r.resize(5);
System.out.println(r.getArea());
```

| Step                |       `width` | `height` |
| ------------------- | ------------: | -------: |
| after construction  |            10 |       15 |
| after `r.resize(5)` |            15 |       15 |
| `r.getArea()`       | returns `225` |          |

Output:

```text
225
```

The important AP habit is to update the object's attributes immediately after every method that changes its state.

AP 题中要养成一个习惯：每执行一个会改变对象状态的方法，就马上更新对象的属性值。

# 7. `null` and `NullPointerException`<br>`null` 与空指针异常

A reference variable can contain `null`, meaning that it does not currently refer to an object.

引用变量可以保存 `null`，表示它目前没有指向任何对象。

```java
Turtle yertle = null;
```

This compiles, but the following call causes a runtime error:

下面的声明可以编译，但继续调用方法会产生运行时错误：

```java
yertle.forward();
```

The error is a:

```text
NullPointerException
```

Fix:

```java
World world = new World(300, 300);
Turtle yertle = new Turtle(world);

yertle.forward();
```

Remember:

```text
declaring a reference variable ≠ creating an object
```

也就是：

```text
声明引用变量 ≠ 创建对象
```

# 8. Common Beginner Mistakes<br>常见初学者错误

| Mistake                                   | Wrong Code                              | Why Wrong                                   | Correct Code                    | 中文解释             |
| ----------------------------------------- | --------------------------------------- | ------------------------------------------- | ------------------------------- | ---------------- |
| Using a class name for an instance method | `Turtle.forward();`                     | `forward` must be called on a Turtle object | `yertle.forward();`             | 实例方法通过对象调用       |
| Forgetting the object name                | `forward();` in `main`                  | `main` has no current Turtle object         | `yertle.forward();`             | 在 `main` 中要写对象名  |
| Calling a method on `null`                | `Turtle t = null; t.forward();`         | no object exists                            | create with `new Turtle(world)` | `null` 没有指向对象    |
| Wrong argument count                      | `yertle.forward(50, 20);`               | no matching signature                       | `yertle.forward(50);`           | 实参数量必须匹配         |
| Ignoring a returned value                 | `yertle.getWidth();`                    | result is unused                            | `int w = yertle.getWidth();`    | 返回值应被使用          |
| Printing a `void` method                  | `System.out.println(yertle.forward());` | `forward` returns nothing                   | call `yertle.forward();` alone  | `void` 方法不能作为值打印 |

# 9. Debugging Example<br>调试例子

Buggy code:

```java
public class TurtleArea
{
    public static void main(String[] args)
    {
        World world = new World(300, 300);
        Turtle yertle = new Turtle(world);

        int area;
        yertle.getWidth() * getHeight;

        System.out.println("Yertle's area is: " + area);
    }
}
```

Problems:

* `getHeight` is missing the object name and parentheses.
* The multiplication result is not assigned to `area`.
* `area` is used before receiving a value.

问题：

* `getHeight` 缺少对象名和括号。
* 乘法结果没有赋给 `area`。
* `area` 在得到值之前就被使用。

Fixed code:

```java
public class TurtleArea
{
    public static void main(String[] args)
    {
        World world = new World(300, 300);
        Turtle yertle = new Turtle(world);

        int area = yertle.getWidth() * yertle.getHeight();

        System.out.println("Yertle's area is: " + area);
    }
}
```

| Bug                      | Type                       | Fix                         |
| ------------------------ | -------------------------- | --------------------------- |
| `getHeight` without `()` | compile-time error         | use `getHeight()`           |
| missing object name      | compile-time error         | use `yertle.getHeight()`    |
| result not assigned      | compile-time / logic issue | assign expression to `area` |
| calling on `null`        | runtime error              | create an object first      |

# 10. Mini Practice<br>小练习

## Practice 1: Choose the Valid Call<br>练习 1：选择合法调用

Consider:

```java
public class Party
{
    public void inviteFriend()
    {
    }

    public void cancelParty()
    {
    }
}
```

Assume `myParty` is a properly initialized `Party` object. Which call is valid?

A. `myParty.cancelParty();`
B. `myParty.inviteFriend(2);`
C. `Party.cancelParty();`
D. `System.out.println(myParty.cancelParty());`

Answer:

```text
A. myParty.cancelParty();
```

Explanation: `cancelParty()` is a no-argument `void` instance method.

解释：`cancelParty()` 是无参数的 `void` 实例方法，应该通过对象调用。

## Practice 2: Predict the Result<br>练习 2：预测结果

```java
public class Liquid
{
    private double currentTemp;

    public Liquid()
    {
        currentTemp = 50;
    }

    public void lowerTemp()
    {
        currentTemp -= 10;
    }

    public double getTemp()
    {
        return currentTemp;
    }
}
```

What is printed?

```java
Liquid water = new Liquid();
water.lowerTemp();
System.out.println(water.getTemp());
```

Answer:

```text
40.0
```

Explanation: the constructor sets the temperature to `50`, and `lowerTemp()` changes it to `40`.

解释：构造器把温度设为 `50`，然后 `lowerTemp()` 将它改为 `40`。

## Practice 3: Trace Returned Values<br>练习 3：追踪返回值

```java
public class MethodTrace
{
    public int square(int x)
    {
        return x * x;
    }

    public int divide(int x, int y)
    {
        return x / y;
    }
}
```

What is printed?

```java
MethodTrace traceObj = new MethodTrace();
System.out.println(traceObj.square(2) + traceObj.divide(6, 2));
```

Answer:

```text
7
```

Explanation: `square(2)` returns `4`, and `divide(6, 2)` returns `3`.

解释：`square(2)` 返回 `4`，`divide(6, 2)` 返回 `3`，所以结果是 `7`。

## Practice 4: Fix the Code<br>练习 4：修复代码

```java
World world = new World(300, 300);
Turtle yertle = null;

yertle.forward();
```

Fixed code:

```java
World world = new World(300, 300);
Turtle yertle = new Turtle(world);

yertle.forward();
```

Explanation: an instance method cannot be called through a `null` reference.

解释：不能通过 `null` 引用调用实例方法。

# Quick Checklist<br>快速检查清单

Before answering an instance-method question, check:

做实例方法题前，检查：

* Is this a class method or an instance method?
* Should the call use a class name or an object name?
* Has the object been properly created and initialized?
* Could the object reference be `null`?
* Does the method name exactly match the class definition?
* Do the argument number, order, and types match the signature?
* Is the method `void` or non-void?
* If it returns a value, is that value stored, printed, or used?
* Does the method change the object's attributes?
* Did you update the object's state after each method call?
* After a method returns, which statement runs next?
* Is the error a compile-time error, runtime error, or logic error?
