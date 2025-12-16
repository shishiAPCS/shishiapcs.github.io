---
title:  "CSA Java 三种循环对比（for、while、增强 for）"
mathjax: true
layout: post
categories: media
---

<style>
.post-title {
  color: #f1f5f9 !important;
  opacity: 1 !important;
  font-weight: 700;
}
</style>


<table style="border-collapse:collapse; width:100%; font-family:system-ui,-apple-system,'Segoe UI','Noto Sans SC','Microsoft YaHei',Arial,sans-serif; font-size:16px;">
  <thead>
    <tr>
      <th style="border:1px solid #ccc; padding:10px; background:#f5f5f5; text-align:left;">比较项目</th>
      <th style="border:1px solid #ccc; padding:10px; background:#f5f5f5; text-align:left;">for 循环（索引）</th>
      <th style="border:1px solid #ccc; padding:10px; background:#f5f5f5; text-align:left;">while 循环</th>
      <th style="border:1px solid #ccc; padding:10px; background:#f5f5f5; text-align:left;">增强 for（for-each）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">是否使用索引（index）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 是（i）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 通常是（手动 i++）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 否</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">程序员能否直接控制索引</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 不可以</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">适用于 Array / ArrayList</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 都适用</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 都适用</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 都适用（只读最常见）</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">是否自动从头到尾遍历所有元素</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 不一定（取决于 i 的写法）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 不一定（取决于条件和更新）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 是（固定从头到尾）</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">能否跳着访问元素（例如每次跳 2 个）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（i += 2）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（自行控制）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 不可以</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">能否反向遍历（从后往前）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（i--）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（自行控制）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 不可以</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">能否修改 Array / ArrayList 中的元素（考试重点）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（arr[i] / list.set(i, ...)）</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 可以（使用索引修改）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 一般不可以（for-each 变量是拷贝）</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">是否容易产生无限循环</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 风险低</td>
      <td style="border:1px solid #ccc; padding:10px;">⚠️ 风险较高（容易忘记更新）</td>
      <td style="border:1px solid #ccc; padding:10px;">❌ 几乎没有</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">语法简洁程度</td>
      <td style="border:1px solid #ccc; padding:10px;">中</td>
      <td style="border:1px solid #ccc; padding:10px;">中</td>
      <td style="border:1px solid #ccc; padding:10px;">✅ 最简洁</td>
    </tr>
    <tr>
      <td style="border:1px solid #ccc; padding:10px;">AP CSA 常见使用场景（一句话）</td>
      <td style="border:1px solid #ccc; padding:10px;">需要索引、要修改元素、要跳着或反向遍历</td>
      <td style="border:1px solid #ccc; padding:10px;">循环次数不确定，以条件为主（如找到就停止）</td>
      <td style="border:1px solid #ccc; padding:10px;">只读遍历：打印、求和、统计（不修改元素）</td>
    </tr>
  </tbody>
</table>
