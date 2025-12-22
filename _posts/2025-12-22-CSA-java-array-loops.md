---
title: "CSA Array 必考算法"
mathjax: true
layout: post
categories: media
---
  
  <h3>1. 寻找数组中的最大值或最小值 (Min/Max)</h3>
  
  <h4>查找最大值 (Maximum)</h4>
  {% highlight java %}
import java.util.Arrays;

public class ArrayAlgorithms {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // 使用 for 循环 (索引访问)
        int max = numbers[0]; // 假设第一个数是最大的
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i]; // 更新最大值
            }
        }
        System.out.println("最大值 (for loop): " + max);

        // 使用增强型 for 循环 (遍历元素)
        max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("最大值 (enhanced for loop): " + max);
    }
}
  {% endhighlight %}
  
  <h3>2. 计算总和与平均数 (Sum/Average)</h3>
  
  <h4>计算平均数 (需注意精度转换)</h4>
  {% highlight java %}
public class ArrayAverage {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int sum = 0;
        
        // 计算总和
        for (int num : numbers) {
            sum += num;
        }

        // 计算平均值 - 注意：必须强转为 double 避免整数除法丢失小数
        double average = (double) sum / numbers.length;
        System.out.println("平均值: " + average);
    }
}
  {% endhighlight %}
  
  <h3>3. 线性搜索 (Search)</h3>
  
  <h4>查找特定数字</h4>
  {% highlight java %}
public class ArraySearch {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int target = 7;
        boolean found = false;

        // AP CSA Subset 不建议使用 break，我们使用布尔标志位控制循环
        for (int i = 0; i < numbers.length && !found; i++) {
            if (numbers[i] == target) {
                found = true;
            }
        }
        System.out.println("是否找到: " + found);
    }
}
  {% endhighlight %}
  
  <h3>4. 判断是否“至少有一个”元素符合条件 (At Least One)</h3>
  
  <h4>检查是否存在偶数</h4>
  {% highlight java %}
public class ArrayProperty {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean hasEven = false;

        // 一旦找到符合条件的元素，!hasEven 变为 false，循环停止
        for (int i = 0; i < numbers.length && !hasEven; i++) {
            if (numbers[i] % 2 == 0) {
                hasEven = true;
            }
        }
        System.out.println("包含偶数: " + hasEven);
    }
}
  {% endhighlight %}
  
  <h3>5. 判断是否“所有”元素符合条件 (All)</h3>
  
  <h4>检查是否全为正数</h4>
  {% highlight java %}
public class ArrayAllPositive {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean allPositive = true;

        // 使用 while 循环演示：一旦发现不符合条件的，立即停止
        int i = 0;
        while (i < numbers.length && allPositive) {
            if (numbers[i] <= 0) {
                allPositive = false; // 发现反例
            }
            i++;
        }
        System.out.println("全为正数: " + allPositive);
    }
}
  {% endhighlight %}
  
  <h3>6. 访问所有相邻元素对 (Consecutive Pairs)</h3>
  {% highlight java %}
public class ConsecutivePairs {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // 注意：循环终点是 length - 1，否则 i+1 会导致索引越界
        for (int i = 0; i < numbers.length - 1; i++) {
            System.out.println("相邻对: " + numbers[i] + ", " + numbers[i + 1]);
        }
    }
}
  {% endhighlight %}
  
  <h3>7. 检查是否存在重复元素 (Duplicates)</h3>
  {% highlight java %}
public class DuplicateCheck {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean hasDuplicate = false;

        // 使用嵌套循环比较每一对元素
        for (int i = 0; i < numbers.length && !hasDuplicate; i++) {
            for (int j = i + 1; j < numbers.length && !hasDuplicate; j++) {
                if (numbers[i] == numbers[j]) {
                    hasDuplicate = true;
                }
            }
        }
        System.out.println("存在重复: " + hasDuplicate);
    }
}
  {% endhighlight %}
  
  <h3>8. 统计符合条件的元素数量 (Count)</h3>
  {% highlight java %}
public class CountOddNumbers {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int oddCount = 0;

        for (int num : numbers) {
            if (num % 2 != 0) {
                oddCount++;
            }
        }
        System.out.println("奇数个数: " + oddCount);
    }
}
  {% endhighlight %}
  
  <h3>9. 元素移动/旋转 (Shift/Rotate)</h3>
  
  <h4>数组向左移动一位 (首位变末位)</h4>
  {% highlight java %}
public class ShiftLeft {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        int first = numbers[0]; // 暂存第一位
        for (int i = 0; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1]; // 后一位覆盖前一位
        }
        numbers[numbers.length - 1] = first; // 将暂存的首位放到末尾
    }
}
  {% endhighlight %}
  
  <h3>10. 反转数组 (Reverse)</h3>

  <h4>原地反转 (In-Place Swap)</h4>
  {% highlight java %}
public class ReverseArray {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // 只需循环到数组的一半
        for (int i = 0; i < numbers.length / 2; i++) {
            int temp = numbers[i]; // 经典三步交换
            int otherIndex = numbers.length - 1 - i;
            numbers[i] = numbers[otherIndex];
            numbers[otherIndex] = temp;
        }
    }
}
  {% endhighlight %}

  <hr>


