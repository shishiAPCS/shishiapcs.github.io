title: "AP CSA ArrayList 必考算法"
mathjax: true
layout: post
categories: media
---

<p>这篇是 <strong>AP CSA ArrayList</strong> 最常考的“算法模板”合集。每一题基本都能套其中一种（或两种组合）。</p>
<hr>

<h3>0. 基础提醒：ArrayList 常用 API（考试必背）</h3>
<ul>
  <li><code>list.size()</code>：元素个数</li>
  <li><code>list.get(i)</code>：读取第 i 个元素</li>
  <li><code>list.set(i, value)</code>：修改第 i 个元素</li>
  <li><code>list.add(value)</code>：末尾添加</li>
  <li><code>list.add(i, value)</code>：在 i 位置插入（原 i 及后面整体右移）</li>
  <li><code>list.remove(i)</code>：删除 i 位置元素（后面整体左移）</li>
</ul>

<hr>

<h3>1. 插入元素 (Insert Elements)</h3>
<p>常见场景：按位置插入、按规则插入到有序列表。</p>

<h4>A) 在指定位置插入</h4>
{% highlight java %}
import java.util.ArrayList;

public class InsertAtIndex {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(10);
        list.add(30);
        list.add(40);

        int index = 1;
        int value = 20;

        // 在 index 位置插入 value：原 index 及后面元素整体右移
        list.add(index, value);

        System.out.println(list); // [10, 20, 30, 40]
    }
}
{% endhighlight %}

<h4>B) 插入到有序列表（保持升序）</h4>
{% highlight java %}
import java.util.ArrayList;

public class InsertSorted {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(3);
        list.add(5);
        list.add(9);
        list.add(12);

        int x = 8;

        // 找到第一个 >= x 的位置
        int i = 0;
        while (i < list.size() && list.get(i) < x) {
            i++;
        }
        // 在 i 插入：保持升序
        list.add(i, x);

        System.out.println(list); // [3, 5, 8, 9, 12]
    }
}
{% endhighlight %}

<hr>

<h3>2. 删除元素 (Delete Elements)</h3>
<p>ArrayList 删除最容易出错：删除会导致索引“塌陷”，所以通常用 <strong>倒序 for</strong> 或 <strong>while</strong> 控制。</p>

<h4>A) 删除所有满足条件的元素（推荐：倒序 for）</h4>
{% highlight java %}
import java.util.ArrayList;

public class RemoveAllEvens {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(2);
        list.add(4);
        list.add(5);
        list.add(6);

        // 倒序：remove(i) 后不会影响“尚未访问”的索引
        for (int i = list.size() - 1; i >= 0; i--) {
            if (list.get(i) % 2 == 0) {
                list.remove(i);
            }
        }

        System.out.println(list); // [1, 5]
    }
}
{% endhighlight %}

<h4>B) 只删除第一个满足条件的元素（用布尔控制，不用 break）</h4>
{% highlight java %}
import java.util.ArrayList;

public class RemoveFirstMatch {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        list.add("cat");
        list.add("dog");
        list.add("duck");
        list.add("dolphin");

        boolean removed = false;
        for (int i = 0; i < list.size() && !removed; i++) {
            if (list.get(i).startsWith("do")) {
                list.remove(i);
                removed = true;
            }
        }

        System.out.println(list); // [cat, duck, dolphin]
    }
}
{% endhighlight %}

<hr>

<h3>3. 寻找最小值或最大值 (Min/Max)</h3>
<p>模板：假设第一个是 min/max，再逐个比较更新。</p>

{% highlight java %}
import java.util.ArrayList;

public class MinMaxArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(7);
        nums.add(2);
        nums.add(9);
        nums.add(4);

        int min = nums.get(0);
        int max = nums.get(0);

        for (int i = 1; i < nums.size(); i++) {
            int cur = nums.get(i);
            if (cur < min) {
                min = cur;
            }
            if (cur > max) {
                max = cur;
            }
        }

        System.out.println("min = " + min); // 2
        System.out.println("max = " + max); // 9
    }
}
{% endhighlight %}

<hr>

<h3>4. 计算总和或平均值 (Sum/Average)</h3>
<p>平均值注意：<strong>强转 double</strong>，避免整数除法丢小数。</p>

{% highlight java %}
import java.util.ArrayList;

public class SumAndAverage {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(3);
        nums.add(5);
        nums.add(1);
        nums.add(7);

        int sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += nums.get(i);
        }

        double avg = 0.0;
        if (nums.size() > 0) {
            avg = (double) sum / nums.size();
        }

        System.out.println("sum = " + sum);
        System.out.println("avg = " + avg);
    }
}
{% endhighlight %}

<hr>

<h3>5. 判断是否“至少有一个”元素满足条件 (At Least One)</h3>
<p>模板：<strong>found=false</strong>，循环条件里加 <code>&& !found</code> 来提前停止（避免 break）。</p>

{% highlight java %}
import java.util.ArrayList;

public class AtLeastOne {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(1);
        nums.add(3);
        nums.add(7);
        nums.add(10);

        boolean hasEven = false;

        for (int i = 0; i < nums.size() && !hasEven; i++) {
            if (nums.get(i) % 2 == 0) {
                hasEven = true;
            }
        }

        System.out.println("Has even? " + hasEven); // true
    }
}
{% endhighlight %}

<hr>

<h3>6. 判断是否“所有”元素满足条件 (All)</h3>
<p>模板：<strong>all=true</strong>，一旦发现反例就变 false，并提前停止。</p>

{% highlight java %}
import java.util.ArrayList;

public class AllProperty {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(2);
        nums.add(4);
        nums.add(6);

        boolean allEven = true;
        int i = 0;

        while (i < nums.size() && allEven) {
            if (nums.get(i) % 2 != 0) {
                allEven = false;
            }
            i++;
        }

        System.out.println("All even? " + allEven); // true
    }
}
{% endhighlight %}

<hr>

<h3>7. 统计满足条件的元素数量 (Count)</h3>
<p>模板：<strong>counter++</strong>。</p>

{% highlight java %}
import java.util.ArrayList;

public class CountProperty {
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<String>();
        words.add("apple");
        words.add("ant");
        words.add("banana");
        words.add("axe");

        int countA = 0;
        for (int i = 0; i < words.size(); i++) {
            if (words.get(i).startsWith("a")) {
                countA++;
            }
        }

        System.out.println("Count startsWith a: " + countA); // 3
    }
}
{% endhighlight %}

<hr>

<h3>8. 访问所有相邻元素对 (Consecutive Pairs)</h3>
<p>最关键：循环到 <code>size - 1</code>，否则 <code>i+1</code> 越界。</p>

{% highlight java %}
import java.util.ArrayList;

public class ConsecutivePairs {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(3);
        nums.add(5);
        nums.add(1);
        nums.add(7);

        for (int i = 0; i < nums.size() - 1; i++) {
            int a = nums.get(i);
            int b = nums.get(i + 1);
            System.out.println("Pair: " + a + ", " + b);
        }
    }
}
{% endhighlight %}

<hr>

<h3>9. 判断是否存在重复元素 (Duplicates)</h3>
<p>经典嵌套循环：用 <code>j = i + 1</code> 避免重复比较和自比。</p>

{% highlight java %}
import java.util.ArrayList;

public class HasDuplicates {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(2);
        nums.add(5);
        nums.add(2);
        nums.add(9);

        boolean hasDup = false;

        for (int i = 0; i < nums.size() && !hasDup; i++) {
            for (int j = i + 1; j < nums.size() && !hasDup; j++) {
                if (nums.get(i).equals(nums.get(j))) {
                    hasDup = true;
                }
            }
        }

        System.out.println("Has duplicate? " + hasDup); // true
    }
}
{% endhighlight %}

<hr>

<h3>10. 左移 / 右移 / 旋转 (Shift / Rotate)</h3>
<p>注意：这里演示的是 <strong>旋转 rotate</strong>（首/尾会“绕回去”）。</p>

<h4>A) 向左旋转一位（第 0 个去末尾）</h4>
{% highlight java %}
import java.util.ArrayList;

public class RotateLeftByOne {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(3);
        nums.add(5);
        nums.add(1);
        nums.add(7);

        int first = nums.get(0);
        for (int i = 0; i < nums.size() - 1; i++) {
            nums.set(i, nums.get(i + 1));
        }
        nums.set(nums.size() - 1, first);

        System.out.println(nums); // [5, 1, 7, 3]
    }
}
{% endhighlight %}

<h4>B) 向右旋转一位（最后一个去开头）</h4>
{% highlight java %}
import java.util.ArrayList;

public class RotateRightByOne {
    public static void main(String[] args) {
        ArrayList<Integer> nums = new ArrayList<Integer>();
        nums.add(3);
        nums.add(5);
        nums.add(1);
        nums.add(7);

        int last = nums.get(nums.size() - 1);
        for (int i = nums.size() - 1; i >= 1; i--) {
            nums.set(i, nums.get(i - 1));
        }
        nums.set(0, last);

        System.out.println(nums); // [7, 3, 5, 1]
    }
}
{% endhighlight %}

<hr>

<h3>11. 反转列表顺序 (Reverse)</h3>
<p>原地交换：只循环到一半，左右对称交换。</p>

{% highlight java %}
import java.util.ArrayList;

public class ReverseArrayList {
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<String>();
        words.add("A");
        words.add("B");
        words.add("C");
        words.add("D");

        for (int i = 0; i < words.size() / 2; i++) {
            int j = words.size() - 1 - i;

            String temp = words.get(i);
            words.set(i, words.get(j));
            words.set(j, temp);
        }

        System.out.println(words); // [D, C, B, A]
    }
}
{% endhighlight %}

<hr>

<h3>✅ 小结：考试怎么套模板？</h3>
<ul>
  <li><strong>需要“找一个”</strong> → At Least One（布尔 found）</li>
  <li><strong>需要“全都”</strong> → All（布尔 all）</li>
  <li><strong>需要“数多少个”</strong> → Count（counter++）</li>
  <li><strong>需要“删一堆”</strong> → 倒序 for 删除</li>
  <li><strong>需要“相邻关系”</strong> → 循环到 <code>size-1</code></li>
  <li><strong>需要“旋转/移动”</strong> → 先暂存 first/last，再用 set 覆盖</li>
</ul>

<hr>

