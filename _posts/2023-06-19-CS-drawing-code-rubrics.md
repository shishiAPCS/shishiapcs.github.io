---
title:  "Pixel drawing challenge rubrics"
mathjax: true
layout: post
categories: media
---

## Rubrics:

|Catagories:     |A working program|Creativity|Function|Loop|
|-----------|------------|----------|--------|----|
|Percentage: |60%         |20%       |10%     |10% | 


## Deadline: Friday, 30th June

## Put your code at **_2.19.3 Block Pyramid_**

## Example:

```python
speed(0)  # 设置画笔速度为最快

# 定义像素马里奥
color_map = {0: "white", 1: "red", 2: "brown", 3: "yellow", 4: "yellow"}  # 定义颜色映射关系

# 定义马里奥的像素矩阵
marioMatrix = [ # 2DArray
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 2, 2, 2, 3, 3, 2, 3, 0, 0, 0],
    [0, 2, 3, 2, 3, 3, 3, 2, 3, 3, 3, 0],
    [0, 2, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3],
    [0, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 0],
    [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0],
    [0, 0, 2, 2, 1, 2, 2, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 0],
    [2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2],
    [3, 3, 2, 1, 4, 1, 1, 4, 1, 2, 3, 3],
    [3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3],
    [3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0],
    [2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2]
]
    


pixelSize = 25  # 定义每个像素的大小
originX = -180  # 定义原点的X坐标
originY = 200  # 定义原点的Y坐标

def draw_pixel(color_name):  # 定义一个函数用来绘制像素
    color(color_name)  # 设置画笔颜色
    begin_fill()  # 开始填充颜色
    for _ in range(4):  # 循环4次
        forward(pixelSize)  # 向前移动pixelSize个单位
        right(90)  # 向右转90度
    end_fill()  # 结束填充颜色

def move_to(x, y):  # 定义一个函数用来移动画笔位置
    penup()  # 抬起画笔
    goto(x, y)  # 移动到指定位置
    pendown()  # 放下画笔

# 使用像素矩阵来绘制马里奥
for rowIndex, row in enumerate(marioMatrix):  # 遍历矩阵的每一行
    for colIndex, pixel in enumerate(row):  # 遍历行的每一列
        x = originX + colIndex * pixelSize  # 计算像素的X坐标
        y = originY - rowIndex * pixelSize  # 计算像素的Y坐标
        move_to(x, y)  # 移动画笔到指定位置
        draw_pixel(color_map[pixel])  # 绘制像素
```