---
title: "CSA 2DArray 必考算法"
mathjax: true
layout: post
categories: media
---

<h3>2D 数组核心算法详解 (AP CSA 范围)</h3>



<h3>Setup: 基础 2D 数组准备</h3>
{% highlight java %}
public class TwoDArrayAlgorithms {
    public static void main(String[] args) {
        // 初始化一个 3行 4列 的二维数组
        int[][] grid = {
            {3,  5,  1,  7},
            {9,  2,  6,  4},
            {8, 10, 12, 11}
        };

        // AP CSA 标准打印方法：嵌套 for 循环
        for (int r = 0; r < grid.length; r++) { // 遍历每一行
            for (int c = 0; c < grid[r].length; c++) { // 遍历当前行的每一列
                System.out.print(grid[r][c] + " ");
            }
            System.out.println(); // 换行
        }
    }
}
{% endhighlight %}

<h3>1. 确定最大值或最小值 (Min/Max)</h3>

<h4>查找整个 2D 数组的最大值</h4>
{% highlight java %}
public class MaxIn2D {
    public static void main(String[] args) {
        int[][] grid = {{3, 5, 1}, {9, 2, 6}, {8, 10, 12}};

        int max = grid[0][0]; // 初始化最大值为第一个元素
        
        // 方法 A: 使用索引嵌套循环
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                if (grid[r][c] > max) {
                    max = grid[r][c];
                }
            }
        }

        // 方法 B: 使用增强型 for 循环 (更简洁)
        max = grid[0][0];
        for (int[] row : grid) {      // 每一行是一个 int[]
            for (int val : row) {     // 遍历行中的每个元素
                if (val > max) {
                    max = val;
                }
            }
        }
        System.out.println("最大值: " + max);
    }
}
{% endhighlight %}

<h4>查找指定列 (Column) 的最大值</h4>
{% highlight java %}
public class MaxInColumn {
    public static void main(String[] args) {
        int[][] grid = {{3, 5, 1}, {9, 2, 6}, {8, 10, 12}};
        int targetCol = 1; // 目标列索引

        // 查找某一列时，列索引固定，行索引变化
        int max = grid[0][targetCol];
        for (int r = 1; r < grid.length; r++) {
            if (grid[r][targetCol] > max) {
                max = grid[r][targetCol];
            }
        }
        System.out.println("第 " + targetCol + " 列的最大值: " + max);
    }
}
{% endhighlight %}

<h3>2. 计算总和与平均数 (Sum/Average)</h3>

<h4>计算子区域 (Subsection) 的平均数</h4>
{% highlight java %}
public class AverageSubsection {
    public static void main(String[] args) {
        int[][] grid = {{3, 5, 1, 7}, {9, 2, 6, 4}, {8, 10, 12, 11}};

        int r0 = 0, r1 = 1; // 行范围 [0, 1]
        int c0 = 1, c1 = 3; // 列范围 [1, 3]
        int sum = 0;
        int count = 0;

        for (int r = r0; r <= r1; r++) {
            for (int c = c0; c <= c1; c++) {
                sum += grid[r][c];
                count++;
            }
        }

        // 强转 double 确保计算精度
        double avg = (double) sum / count;
        System.out.println("子区域平均值: " + avg);
    }
}
{% endhighlight %}

<h3>3. 判断是否至少有一个元素符合条件 (At Least One)</h3>

<h4>检查是否存在偶数</h4>
{% highlight java %}
public class AnyEven2D {
    public static void main(String[] args) {
        int[][] grid = {{3, 5, 1}, {9, 2, 6}};
        boolean found = false;

        // 使用 !found 标志位控制循环，避免使用 break
        for (int r = 0; r < grid.length && !found; r++) {
            for (int c = 0; c < grid[r].length && !found; c++) {
                if (grid[r][c] % 2 == 0) {
                    found = true;
                }
            }
        }
        System.out.println("是否存在偶数: " + found);
    }
}
{% endhighlight %}

<h3>4. 统计符合条件的元素数量 (Count)</h3>

<h4>统计某一列中偶数的个数</h4>
{% highlight java %}
public class CountEvenCol {
    public static void main(String[] args) {
        int[][] grid = {{2, 5}, {4, 2}, {7, 10}};
        int targetCol = 0;
        int count = 0;

        for (int r = 0; r < grid.length; r++) {
            if (grid[r][targetCol] % 2 == 0) {
                count++;
            }
        }
        System.out.println("该列偶数数量: " + count);
    }
}
{% endhighlight %}

<h3>5. 访问所有相邻元素对 (Pairs)</h3>

<h4>垂直邻居 (同一列，相邻行)</h4>
{% highlight java %}
public class ConsecutiveVertical {
    public static void main(String[] args) {
        int[][] grid = {{3, 5}, {9, 2}, {8, 10}};

        int cols = grid[0].length;
        for (int c = 0; c < cols; c++) {
            // 注意：r 只能到 length - 1，防止 r + 1 越界
            for (int r = 0; r < grid.length - 1; r++) {
                System.out.println("垂直相邻对: " + grid[r][c] + " 和 " + grid[r + 1][c]);
            }
        }
    }
}
{% endhighlight %}

<h3>6. 检查是否存在重复元素 (Duplicates)</h3>

<h4>检查整个 2D 数组是否有重复值</h4>
{% highlight java %}
public class DuplicateCheck2D {
    public static void main(String[] args) {
        int[][] grid = {{1, 2}, {3, 1}};
        boolean hasDup = false;

        // 将每个位置 (r1, c1) 与其他所有位置 (r2, c2) 进行比较
        for (int r1 = 0; r1 < grid.length && !hasDup; r1++) {
            for (int c1 = 0; c1 < grid[r1].length && !hasDup; c1++) {
                
                for (int r2 = 0; r2 < grid.length && !hasDup; r2++) {
                    for (int c2 = 0; c2 < grid[r2].length && !hasDup; c2++) {
                        // 排除自己跟自己比较的情况
                        if (r1 != r2 || c1 != c2) {
                            if (grid[r1][c1] == grid[r2][c2]) {
                                hasDup = true;
                            }
                        }
                    }
                }
            }
        }
        System.out.println("是否存在重复: " + hasDup);
    }
}
{% endhighlight %}

<h3>7. 移动或旋转元素 (Shift/Rotate)</h3>

<h4>将某一列向下移动一位 (首尾衔接)</h4>
{% highlight java %}
public class ShiftColumnDown {
    public static void main(String[] args) {
        int[][] grid = {{1, 2}, {3, 4}, {5, 6}};
        int col = 0;

        // 1. 暂存最底部的元素
        int temp = grid[grid.length - 1][col];

        // 2. 从下往上覆盖，确保数据不会被提前覆盖
        for (int r = grid.length - 1; r > 0; r--) {
            grid[r][col] = grid[r - 1][col];
        }

        // 3. 将暂存的元素放到最顶部
        grid[0][col] = temp;
    }
}
{% endhighlight %}

<h3>8. 反转元素 (Reverse)</h3>

<h4>原地反转某一列</h4>
{% highlight java %}
public class ReverseColumn {
    public static void main(String[] args) {
        int[][] grid = {{1, 0}, {2, 0}, {3, 0}, {4, 0}};
        int col = 0;

        // 交换该列的上半部分和下半部分
        for (int r = 0; r < grid.length / 2; r++) {
            int temp = grid[r][col];
            int oppositeRow = grid.length - 1 - r;
            grid[r][col] = grid[oppositeRow][col];
            grid[oppositeRow][col] = temp;
        }
    }
}
{% endhighlight %}
