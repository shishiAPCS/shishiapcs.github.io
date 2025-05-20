---
title: "AP CSA"
---

# 离开考还有：

<div id="countdown"></div>

<script>
  (function(){
    // Target date: set month/day/year/time
    const targetDate = new Date("May 8, 2026 08:00:00").getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdownElement = document.getElementById("countdown");
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Optional: Change color if under 24 hours
      if (distance < 24 * 60 * 60 * 1000 && distance > 0) {
        countdownElement.style.color = "red";
      } else {
        countdownElement.style.color = "";
      }

      // When the countdown reaches 0
      if (distance < 0) {
        countdownElement.textContent = "Exam Started!";
        clearInterval(timerInterval);
      }
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  })();
</script>

<style>
  /* Lightweight styling for demonstration */
  #countdown {
    font-size: 2rem;
    text-align: left;
    margin-top: 20px;
    transition: color 0.5s ease;
  }
</style>

---
  - 考试时间：Wed, May 7, 2026
  - [课堂规则](https://shishiapcs.github.io/CSA-Class-Rules/)
  - [课前需注册服务](https://shishiapcs.github.io/CSA-New-Semester/)
  - [主教材 runestone.academy](https://runestone.academy/)
  - [AP 分数计算器](https://examstrategist.com/ap-computer-science-a-score-calculator/)
  - [CSA 考试详情页](https://apstudents.collegeboard.org/courses/ap-computer-science-a)
  - [CodingBat](https://codingbat.com/java) 

---
  - [Java Style Guidelines](https://langintro.com/comsc075/java_style_guide.html)
  - 必考 Array 算法

<details>
  <summary>Array Algorithms with Different Loop Versions</summary>
  
  <h3>1. Determine the Minimum or Maximum Value in an Array</h3>
  
  <h4>Find Maximum Value</h4>
  {% highlight java %}
import java.util.Arrays;

public class ArrayAlgorithms {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // Using for loop
        int max = numbers[0];
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        System.out.println("Max value (for loop): " + max);

        // Using enhanced for loop
        max = numbers[0];
        for (int num : numbers) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("Max value (enhanced for loop): " + max);
    }
}
  {% endhighlight %}
  
  <h3>2. Compute a Sum or Average of Array Elements</h3>
  
  <h4>Compute Sum</h4>
  {% highlight java %}
public class ArraySum {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // Using for loop
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        System.out.println("Sum (for loop): " + sum);

        // Using enhanced for loop
        sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        System.out.println("Sum (enhanced for loop): " + sum);
    }
}
  {% endhighlight %}
  
  <h4>Compute Average</h4>
  {% highlight java %}
public class ArrayAverage {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int sum = 0;
        
        // Using for loop to compute sum
        for (int i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        System.out.println("Sum (for loop): " + sum);

        // Compute average
        double average = (double) sum / numbers.length;
        System.out.println("Average: " + average);
    }
}
  {% endhighlight %}
  
  <h3>3. Search for a Particular Element in the Array</h3>
  
  <h4>Search for the Number 7</h4>
  {% highlight java %}
public class ArraySearch {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int target = 7;
        boolean found = false;

        // Using for loop
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                found = true;
                break;
            }
        }
        System.out.println("Found (for loop): " + found);

        // Using enhanced for loop
        found = false;
        for (int num : numbers) {
            if (num == target) {
                found = true;
                break;
            }
        }
        System.out.println("Found (enhanced for loop): " + found);
    }
}
  {% endhighlight %}
  
  <h3>4. Determine if At Least One Element Has a Particular Property</h3>
  
  <h4>Check if at Least One Element is Even</h4>
  {% highlight java %}
public class ArrayProperty {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean hasEven = false;

        // Using for loop
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 == 0) {
                hasEven = true;
                break;
            }
        }
        System.out.println("Has even (for loop): " + hasEven);

        // Using enhanced for loop
        hasEven = false;
        for (int num : numbers) {
            if (num % 2 == 0) {
                hasEven = true;
                break;
            }
        }
        System.out.println("Has even (enhanced for loop): " + hasEven);
    }
}
  {% endhighlight %}
  
  <h3>5. Determine if All Elements Have a Particular Property</h3>
  
  <h4>Check if All Elements are Positive</h4>
  {% highlight java %}
public class ArrayAllPositive {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean allPositive = true;

        // Using for loop
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] <= 0) {
                allPositive = false;
                break;
            }
        }
        System.out.println("All positive (for loop): " + allPositive);

        // Using enhanced for loop
        allPositive = true;
        for (int num : numbers) {
            if (num <= 0) {
                allPositive = false;
                break;
            }
        }
        System.out.println("All positive (enhanced for loop): " + allPositive);
    }
}
  {% endhighlight %}
  
  <h3>6. Access All Consecutive Pairs of Elements</h3>
  {% highlight java %}
public class ConsecutivePairs {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // Using for loop
        for (int i = 0; i < numbers.length - 1; i++) {
            System.out.println("Pair: " + numbers[i] + ", " + numbers[i + 1]);
        }

        // Enhanced for loop is not ideal for this task because it does not provide access to indices.
    }
}
  {% endhighlight %}
  
  <h3>7. Determine the Presence or Absence of Duplicate Elements</h3>
  {% highlight java %}
public class DuplicateCheck {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        boolean hasDuplicate = false;

        // Using for loop
        for (int i = 0; i < numbers.length; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                if (numbers[i] == numbers[j]) {
                    hasDuplicate = true;
                    break;
                }
            }
            if (hasDuplicate) break;
        }
        System.out.println("Has duplicate (for loop): " + hasDuplicate);

        // Enhanced for loop is not ideal for this task due to the need for two indices.
    }
}
  {% endhighlight %}
  
  <h3>8. Determine the Number of Elements Meeting Specific Criteria</h3>
  
  <h4>Count Odd Numbers</h4>
  {% highlight java %}
public class CountOddNumbers {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};
        int oddCount = 0;

        // Using for loop
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] % 2 != 0) {
                oddCount++;
            }
        }
        System.out.println("Odd count (for loop): " + oddCount);

        // Using enhanced for loop
        oddCount = 0;
        for (int num : numbers) {
            if (num % 2 != 0) {
                oddCount++;
            }
        }
        System.out.println("Odd count (enhanced for loop): " + oddCount);
    }
}
  {% endhighlight %}
  
  <h3>9. Shift or Rotate Elements Left or Right</h3>
  
  <h4>Shift Elements Left by One Position</h4>
  {% highlight java %}
import java.util.Arrays;

public class ShiftLeft {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // Using for loop
        int first = numbers[0];
        for (int i = 0; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers[numbers.length - 1] = first;

        System.out.println("Shifted left (for loop): " + Arrays.toString(numbers));
    }
}
  {% endhighlight %}
  
  <h4>Shift Elements Right by One Position</h4>
  {% highlight java %}
import java.util.Arrays;

public class ShiftRight {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        // Save the last element since it will wrap around to the front
        int last = numbers[numbers.length - 1];

        // Shift each element to the right by 1 position
        for (int i = numbers.length - 1; i > 0; i--) {
            numbers[i] = numbers[i - 1];
        }

        // Place the last element in the first position
        numbers[0] = last;

        System.out.println("Shifted right by 1: " + Arrays.toString(numbers));
    }
}
  {% endhighlight %}
  
  <h3>10. Reverse the Order of the Elements</h3>

   <h4>1. Using a Two-Pointer Technique </h4>
  {% highlight java %}
import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        int[] numbers = {3, 5, 1, 7, 9};

        for (int i = 0; i < numbers.length / 2; i++) {
            int temp = numbers[i];
            numbers[i] = numbers[numbers.length - 1 - i];
            numbers[numbers.length - 1 - i] = temp;
        }
        System.out.println("Reversed (for loop): " + Arrays.toString(numbers));
    }
}
  {% endhighlight %}

     <h4>2. Using an Auxiliary Array</h4>
  {% highlight java %}
import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
    
        int[] numbers2 = {3, 5, 1, 7};
        // Create a new array
        int[] reversed = new int[numbers2.length];

        for (int i = 0; i < numbers2.length; i++) {
            reversed[i] = numbers2[numbers2.length - 1 - i];
        }

        System.out.println("Reversed array: " + Arrays.toString(reversed));
    }
}
  {% endhighlight %}
  
</details>

<details>
  <summary>AP CSA Sorting Algorithms (AP CSA 排序算法)</summary>

  <h3>1. Merge Sort (归并排序)</h3>

  <h4>Merge Sort Implementation (归并排序实现)</h4>
  {% highlight java %}
import java.util.Arrays;

public class MergeSortAPCSA {
    // Public method to start the merge sort process
    // 公共方法，开始归并排序
    public static void mergeSort(int[] arr) {
        if (arr.length <= 1) {
            return; // Base case: A single-element array is already sorted
            // 基本情况：单元素数组已经是有序的
        }

        // Step 1: Create a temporary array for merging
        // 第一步：创建一个临时数组用于归并
        int[] temp = new int[arr.length];

        // Step 2: Call the recursive helper method to perform merge sort
        // 第二步：调用递归辅助方法执行归并排序
        mergeSortHelper(arr, 0, arr.length - 1, temp);
    }

    // Recursive helper method that splits the array into smaller subarrays
    // 递归辅助方法，将数组拆分成更小的子数组
    private static void mergeSortHelper(int[] arr, int left, int right, int[] temp) {
        if (left < right) { // Base case: If left == right, there's only one element, so stop.
            // 基本情况：如果 left == right，说明只有一个元素，无需继续
            int mid = (left + right) / 2; // Find the middle index
            // 找到中间索引

            // Recursively sort the left half of the array
            // 递归排序左半部分
            mergeSortHelper(arr, left, mid, temp);

            // Recursively sort the right half of the array
            // 递归排序右半部分
            mergeSortHelper(arr, mid + 1, right, temp);

            // Merge the two sorted halves
            // 归并两个已排序的部分
            merge(arr, left, mid, right, temp);
        }
    }

    // Merges two sorted halves of the array into a single sorted section
    // 归并两个已排序的部分，使其成为一个有序部分
    private static void merge(int[] arr, int left, int mid, int right, int[] temp) {
        int i = left, j = mid + 1, k = left;
        // i 指向左半部分的起始位置 (left)
        // j 指向右半部分的起始位置 (mid + 1)
        // k 指向临时数组 temp 的起始位置 (left)

        // Step 1: Compare elements from both halves and place the smaller one in temp[]
        // 第一步：比较左右两部分的元素，把较小的元素放入 temp[]
        while (i <= mid && j <= right) {
            if (arr[i] < arr[j]) {
                temp[k] = arr[i++];
            } else {
                temp[k] = arr[j++];
            }
            k++;
        }

        // Step 2: Copy remaining elements from the left half
        // 第二步：复制左半部分的剩余元素
        while (i <= mid) {
            temp[k++] = arr[i++];
        }

        // Step 3: Copy remaining elements from the right half
        // 第三步：复制右半部分的剩余元素
        while (j <= right) {
            temp[k++] = arr[j++];
        }

        // Step 4: Copy sorted elements from temp[] back into the original array
        // 第四步：将 temp[] 中的有序元素复制回原数组
        for (k = left; k <= right; k++) {
            arr[k] = temp[k];
        }
    }

    // Main method to test Merge Sort
    // 主方法，用于测试归并排序
    public static void main(String[] args) {
        int[] arr = {7, 2, 5, 3}; // Example array
        // 示例数组
        System.out.println("Before sorting: " + Arrays.toString(arr));
        mergeSort(arr);
        System.out.println("After sorting: " + Arrays.toString(arr));
    }
}
  {% endhighlight %}

  <h3>2. Selection Sort (选择排序)</h3>

  <h4>Selection Sort Implementation (选择排序实现)</h4>
  {% highlight java %}
import java.util.Arrays;

public class SortTest {
    public static void selectionSort(int[] arr) {
        // Iterate through each element of the array
        // 遍历数组中的每个元素
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i; // Assume the first unsorted element is the smallest
            // 假设第一个未排序的元素是最小的
            
            // Find the index of the smallest element in the unsorted part
            // 在未排序部分中找到最小元素的索引
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // Update minIndex if a smaller element is found
                    // 如果找到更小的元素，则更新 minIndex
                }
            }

            // Swap the smallest element found with the first unsorted element
            // 交换找到的最小元素与当前未排序部分的第一个元素
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    public static void main(String[] args) {
        int[] arr1 = {3, 86, -20, 14, 40}; // Example array
        System.out.println("Before sorting: " + Arrays.toString(arr1));
        selectionSort(arr1);
        System.out.println("After sorting: " + Arrays.toString(arr1));
    }
}
  {% endhighlight %}

  <h3>3. Insertion Sort (插入排序)</h3>

  <h4>Insertion Sort Implementation (插入排序实现)</h4>
  {% highlight java %}
import java.util.Arrays;

public class SortTest {
    public static void insertionSort(int[] arr) {
        // Start from the second element and move through the array
        // 从数组的第二个元素开始遍历
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i]; // The element to be inserted into the sorted portion
            // 要插入到已排序部分的元素
            int j = i - 1; // Start comparing with elements before the current one
            // 从当前元素之前的元素开始比较

            // Shift elements to the right to make space for insertion
            // 将元素向右移动，为插入元素腾出空间
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]; // Shift larger elements one position to the right
                // 将较大的元素右移一个位置
                j--; // Move the comparison index backward
                // 继续向前比较
            }
            arr[j + 1] = key; // Insert the key at the correct position
            // 将 key 插入到正确的位置
        }
    }

    public static void main(String[] args) {
        int[] arr1 = {3, 86, -20, 14, 40, 55}; // Example array
        System.out.println("Before sorting: " + Arrays.toString(arr1));
        insertionSort(arr1);
        System.out.println("After sorting: " + Arrays.toString(arr1));
    }
}
  {% endhighlight %}

</details>



---
<h2>加分Project</h2>
<details>
    <summary>点这里查看详情</summary>
    <p>从AP Classroom 中选一个已经做过的 FRQ，写出可执行代码，在blueJay中成功运行，具体要求和评分标准如下：</p>
    <hr>
    <h3>FRQ Coding Project Rubric / FRQ 编程项目评分标准</h3>
    <table>
        <thead>
            <tr>
                <th><strong>Grade</strong></th>
                <th><strong>Guidelines</strong></th>
                <th><strong>Criteria</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>A+</strong> (9-10)</td>
                <td>Exceptional work. Shows clear understanding and full mastery of the problem, and code is executed flawlessly. <br> <strong>出色的作品。展现了对问题的深入理解和完整掌握，代码运行无误。</strong></td>
                <td>
                    <ul>
                        <li>Code is <strong>100% correct</strong> for all test cases, including edge cases. <br> <strong>代码对所有测试用例（包括边界情况）均完全正确。</strong></li>
                        <li>Code is <strong>well-structured, clean, and highly readable</strong> with clear variable and method names. <br> <strong>代码结构清晰，整洁，且具备高度可读性，变量和方法命名合理。</strong></li>
                        <li><strong>Detailed comments</strong> explaining purpose, logic, and major steps. <br> <strong>提供详细注释，解释代码目的、逻辑和主要步骤。</strong></li>
                        <li><strong>Creative enhancements</strong> or extra features beyond the requirements (if any). <br> <strong>增加了创新性改进或额外功能（如有）。</strong></li>
                        <li><strong>No detectable AI patterns</strong> (e.g., overly generic, verbose comments). <br> <strong>无明显 AI 痕迹（如过于通用或冗长的注释）。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>A</strong> (8)</td>
                <td>Excellent work. Code is accurate and runs without errors, with some minor style or completeness issues. <br> <strong>优秀作品。代码正确，运行无误，只有些微样式或完整性问题。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>correct output for most test cases</strong>, with minor issues in one or two edge cases. <br> <strong>代码对大部分测试用例产生正确输出，少数边界情况可能有小问题。</strong></li>
                        <li><strong>Good structure and readability</strong> with mostly clear variable/method names. <br> <strong>代码结构合理且可读性高，变量/方法命名清晰。</strong></li>
                        <li>Includes <strong>appropriate comments</strong> that clarify the code. <br> <strong>包含适当的注释，能够帮助理解代码。</strong></li>
                        <li><strong>Efficiently coded</strong> with minimal redundancy. <br> <strong>代码高效，冗余最小化。</strong></li>
                        <li>Little evidence of AI assistance. <br> <strong>几乎没有 AI 协助的痕迹。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>A-</strong> (7)</td>
                <td>Strong work, but may have minor flaws in logic or structure. Code generally runs well. <br> <strong>表现良好，但在逻辑或结构上有小瑕疵。代码整体运行正常。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>mostly correct results</strong>, with issues only in a few cases. <br> <strong>代码在大部分情况下输出正确，少数情况可能有问题。</strong></li>
                        <li><strong>Readable and organized structure</strong>, though may have minor issues in clarity. <br> <strong>代码结构清晰有序，但清晰度可能略有不足。</strong></li>
                        <li>Includes <strong>some comments</strong>, but they may lack detail. <br> <strong>包含一些注释，但细节不足。</strong></li>
                        <li>Code is <strong>mostly efficient</strong>, with minor inefficiencies. <br> <strong>代码基本高效，少量低效部分。</strong></li>
                        <li>Minimal indicators of AI involvement. <br> <strong>几乎没有 AI 参与的迹象。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>B+</strong> (6)</td>
                <td>Good effort with noticeable flaws. Code runs, but may have errors or inefficiencies. <br> <strong>有明显缺陷的良好尝试。代码可以运行，但可能有错误或低效部分。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>correct output for main cases</strong>, but <strong>fails on some edge cases</strong>. <br> <strong>代码在主要情况中输出正确，但在某些边界情况中失败。</strong></li>
                        <li>Structure is mostly clear, but some parts are hard to follow. <br> <strong>代码结构大部分清晰，但部分难以理解。</strong></li>
                        <li><strong>Basic comments</strong> are provided, but <strong>lacking detail or clarity</strong>. <br> <strong>有基本注释，但缺乏细节或清晰性。</strong></li>
                        <li>Some <strong>inefficiencies or redundant code</strong> present. <br> <strong>存在部分低效或冗余代码。</strong></li>
                        <li>Some signs of AI involvement may be noticeable. <br> <strong>可能有明显的 AI 痕迹。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>B</strong> (5)</td>
                <td>Satisfactory but needs improvement. Code has a mix of correct and incorrect results. <br> <strong>基本合格，但需改进。代码结果有正确和错误混合。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>partially correct output</strong>, but fails on a significant number of cases. <br> <strong>代码输出部分正确，但在许多情况中失败。</strong></li>
                        <li>Structure is <strong>inconsistent or hard to follow</strong>. <br> <strong>结构不一致，难以理解。</strong></li>
                        <li>Few comments, and they <strong>don’t explain the logic well</strong>. <br> <strong>注释少，且不能很好地解释逻辑。</strong></li>
                        <li>Several <strong>redundancies or inefficient methods</strong> are present. <br> <strong>存在多处冗余或低效代码。</strong></li>
                        <li>Noticeable AI-generated patterns in style, structure, or comments. <br> <strong>在样式、结构或注释中有明显的 AI 痕迹。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>B-</strong> (4)</td>
                <td>Acceptable, but with significant issues in execution, structure, or clarity. <br> <strong>可接受，但在执行、结构或清晰度上有重大问题。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>partially correct output</strong>, with <strong>frequent errors</strong> or failures. <br> <strong>代码输出部分正确，但经常出错或失败。</strong></li>
                        <li><strong>Messy or unclear structure</strong>; difficult to read. <br> <strong>结构混乱或不清晰，难以阅读。</strong></li>
                        <li><strong>Lacks comments</strong>, or comments are unhelpful. <br> <strong>缺少注释，或注释无用。</strong></li>
                        <li>Code shows <strong>significant inefficiencies</strong>. <br> <strong>代码存在明显的低效部分。</strong></li>
                        <li>Code appears <strong>potentially AI-assisted</strong> with unusual language or generic comments. <br> <strong>代码可能有 AI 痕迹，例如语言不自然或使用通用注释。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>C+</strong> (3)</td>
                <td>Limited success. Code runs but with minimal correctness, clarity, or efficiency. <br> <strong>成功有限。代码运行，但正确性、清晰度或效率低。</strong></td>
                <td>
                    <ul>
                        <li>Code produces <strong>incorrect results for most cases</strong>, with only minor correct output. <br> <strong>代码在大多数情况下不正确，仅少量输出正确。</strong></li>
                        <li><strong>Poor structure and readability</strong>. <br> <strong>结构和可读性差。</strong></li>
                        <li><strong>Little to no comments</strong> explaining the code. <br> <strong>几乎没有解释代码的注释。</strong></li>
                        <li>Code is <strong>highly inefficient</strong> and appears rushed. <br> <strong>代码低效且草率。</strong></li>
                        <li>Clear indications of AI-generated code (e.g., unnatural explanations or syntax). <br> <strong>有明显的 AI 痕迹（例如不自然的解释或语法）。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>C</strong> (2)</td>
                <td>Minimal success. Code compiles, but has many issues in logic and readability. <br> <strong>成功极少。代码可以编译，但逻辑和可读性有很多问题。</strong></td>
                <td>
                    <ul>
                        <li>Code <strong>barely compiles</strong> but fails in almost all cases. <br> <strong>代码勉强编译，但几乎所有情况都失败。</strong></li>
                        <li>Structure is <strong>chaotic and unclear</strong>. <br> <strong>结构混乱且不清晰。</strong></li>
                        <li><strong>No comments or explanations</strong>. <br> <strong>没有注释或解释。</strong></li>
                        <li><strong>Severely inefficient or redundant</strong> methods. <br> <strong>存在极度低效或冗余的方法。</strong></li>
                        <li>Highly probable AI patterns; further investigation warranted. <br> <strong>明显的 AI 痕迹；需要进一步调查。</strong></li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><strong>C-</strong> (1)</td>
                <td>Very limited or incomplete. Code is far from functional and poorly constructed. <br> <strong>极其有限或不完整。代码几乎无法正常运行且结构糟糕。</strong></td>
                <td>
                    <ul>
                        <li>Code <strong>does not compile</strong> or crashes immediately. <br> <strong>代码无法编译或立即崩溃。</strong></li>
                        <li><strong>Unreadable structure</strong> and <strong>no logic</strong> in place. <br> <strong>结构无法阅读，缺乏逻辑。</strong></li>
                        <li><strong>No comments</strong>. <br> <strong>没有注释。</strong></li>
                        <li><strong>Not executable or far from correct</strong>. <br> <strong>无法运行或远非正确。</strong></li>
                        <li>Appears to be copied or heavily AI-generated without understanding. <br> <strong>疑似复制或大量 AI 生成，没有理解。</strong></li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
    <h4>Ask for Reflection / 提交时可能问你的问题:</h4>
    <ul>
        <li>Why did you choose this particular FRQ? / <strong>为什么选择这个特定的 FRQ？</strong></li>
        <li>How did you approach solving the main problem? / <strong>如何解决主要问题？</strong></li>
        <li>Describe one challenge you faced and how you overcame it. / <strong>描述遇到的一个挑战及如何克服。</strong></li>
    </ul>
</details>

<h2>End of semester project</h2>
<details>
    <summary>点这里查看详情</summary>
<h2 id="-post-ap-project-open-ended-creative-challenge-"><strong>Post-AP Project: Open-Ended Creative Challenge</strong></h2>
<p>After the AP CSA exam, you have time to design your own final project. This is your chance to reflect on your CS journey, explore your interests, and create something meaningful, fun, or challenging.</p>
<p>You will be graded on <strong>participation</strong>, <strong>weekly progress</strong>, and a <strong>final artifact</strong> of your choosing. This will culminate in a <strong>showcase presentation</strong> during the last week.</p>
<hr>
<h3 id="-timeline-milestones-"><strong>Timeline &amp; Milestones</strong></h3>
<table>
<thead>
<tr>
<th><strong>Week</strong></th>
<th><strong>Dates</strong></th>
<th><strong>Focus</strong></th>
<th><strong>Milestone / Deliverable</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Week 1</td>
<td>May 12–16</td>
<td><strong>Brainstorming &amp; Kickoff</strong></td>
<td><strong>By Wednesday (May 14):</strong> Submit your project idea and goals via 交作业 page</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td><strong>By Friday (May 16):</strong> Show initial setup or outline of your project (code, doc, sketch, etc.)</td>
</tr>
<tr>
<td>Week 2</td>
<td>May 19–23</td>
<td><strong>Development &amp; Check-In</strong></td>
<td><strong>By Friday (May 23):</strong> Submit progress checkpoint + 1-paragraph reflection</td>
</tr>
<tr>
<td>Week 3</td>
<td>May 26–30</td>
<td><strong>Wrap-Up &amp; Showcase</strong></td>
<td><strong>By Thursday (May 29):</strong> Submit final artifact + self-created rubric + reflection</td>
</tr>
<tr>
<td></td>
<td></td>
<td><strong>Exhibition Days</strong></td>
<td><strong>Friday (May 30):</strong> Final showcase/presentation in the temple</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="-project-guidelines-"><strong>Project Guidelines</strong></h3>
<ul>
<li><strong>Format:</strong> You choose (video, slide deck, program, blog, infographic, mini-game, tutorial, etc.)</li>
<li><p><strong>Must include:</strong></p>
<ul>
<li>A <strong>final product</strong> or artifact</li>
<li>A <strong>self-designed rubric</strong> (see below)</li>
<li>A <strong>brief reflection</strong> (what you learned, enjoyed, or would do differently)</li>
<li><strong>Weekly checkpoints</strong> showing steady progress</li>
</ul>
</li>
</ul>
<hr>
<h3 id="-create-your-own-rubric-required-"><strong>Create Your Own Rubric (Required)</strong></h3>
<p>You will design your own grading rubric to go along with your final project. This rubric should reflect what you think are the most important qualities of your work. You’ll submit this rubric with your final artifact, and it will help guide how your project is evaluated.</p>
<h4 id="-how-to-build-your-rubric-"><strong>How to Build Your Rubric:</strong></h4>
<ul>
<li>Choose <strong>3–5 categories</strong> that are meaningful for your project.</li>
<li>Use a consistent point scale (e.g., 1–5 or 1–10 for each category).</li>
<li><strong>Customize the descriptions</strong> to match the nature of your project.</li>
<li>You can <strong>use the example below</strong> as a guide, but feel free to add, remove, or rename categories.</li>
</ul>
<h4 id="-example-rubric-template-customize-this-"><strong>Example Rubric Template (Customize This!)</strong></h4>
<table>
<thead>
<tr>
<th><strong>Category</strong></th>
<th><strong>Description (customize for your project!)</strong></th>
<th><strong>Max Points</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Creativity &amp; Originality</td>
<td>How unique or innovative is your idea or approach?</td>
<td>10</td>
</tr>
<tr>
<td>Technical Execution</td>
<td>Is your code or product functional, well-structured, and effective?</td>
<td>10</td>
</tr>
<tr>
<td>Communication &amp; Clarity</td>
<td>Is the project well-presented or explained clearly (code, slides, video)?</td>
<td>10</td>
</tr>
<tr>
<td>Personal Challenge</td>
<td>Did this push your comfort zone? Did you explore new concepts or tools?</td>
<td>10</td>
</tr>
<tr>
<td>Completeness &amp; Effort</td>
<td>Is the project thoughtfully developed and finished with care?</td>
<td>10</td>
</tr>
</tbody>
</table>
<p><strong>Total Points: /50</strong> (You can adjust this scale if your rubric uses different weights or categories)</p>
<blockquote>
<p><strong>Reminder:</strong> Your rubric should match your project. For example, if you&#39;re making a teaching video, “Clarity” might be more important than “Technical Execution.” If you&#39;re coding something complex, you might want to focus on design and logic quality.</p>
</blockquote>
<hr>
<h3 id="-how-to-submit-"><strong>How to Submit</strong></h3>
<ul>
<li><p><strong>Weekly Updates &amp; Milestones</strong>
Submit your progress updates (written description, bullet points, or summary) on our homework collection site:
<strong><a href="https://shishiapcs.github.io/CS-Homework-Collection/">https://shishiapcs.github.io/CS-Homework-Collection/</a></strong></p>
</li>
<li><p><strong>Final Artifact &amp; Rubric</strong>
Submit your final project and scoring rubric <strong>by Wednesday (May 28)</strong> using one of the following methods:</p>
<ul>
<li><strong>Airdrop</strong> (if you use a Mac): Send directly to the teacher before class ends</li>
<li><strong>Flash Drive</strong>: Bring your files and the teacher will copy them directly</li>
</ul>
</li>
</ul>
<p>Make sure your submission includes:</p>
<ul>
<li>The <strong>project artifact</strong> (file, folder, or link)</li>
<li>Your <strong>custom rubric</strong></li>
<li>Your <strong>reflection paragraph</strong></li>
</ul>
<hr>
</details>

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

