---
title: "键盘侠大赛报名"
mathjax: true
layout: post
categories: media
---

<style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }

  table {
    width: 80%; /* Same width as iframe */
    margin: 20px auto;
    border-collapse: collapse;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */
  }

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-size: 14px;
  }

  th {
    background-color: var(--table-header-bg, #f4f4f4); /* Default for light theme */
    color: var(--table-header-text, #333);
  }

  td {
    background-color: var(--table-cell-bg, #fff); /* Default for light theme */
    color: var(--table-cell-text, #333);
  }

  .example-row {
    color: #666;
    font-style: italic;
  }

  /* Dark theme compatibility */
  @media (prefers-color-scheme: dark) {
    :root {
      --table-header-bg: #333;
      --table-header-text: #fff;
      --table-cell-bg: #444;
      --table-cell-text: #fff;
    }
  }
</style>

<p class="instructions">
  Please fill in your details in the table below. Ensure that:
  <ul>
    <li><strong>First Name</strong>: Your English name (e.g., Alice, John).</li>
    <li><strong>Last Name</strong>: Your Chinese family name (e.g., Wang, Li).</li>
    <li><strong>Email Address</strong>: A valid email address.</li>
  </ul>
</p>

<table>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email Address</th>
    </tr>
  </thead>
  <tbody>
    <!-- Example Row -->
    <tr class="example-row">
      <td>Alice</td>
      <td>Wang</td>
      <td>alice.wang@example.com</td>
    </tr>
    <!-- Empty Rows for Students -->
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

<style>
  /* Make the iframe match the table width */
  iframe {
    width: 80%;
    height: 600px; /* You can adjust this as needed */
    display: block;
    margin: 20px auto;
    border: none;
  }
</style>

<iframe src="https://docs.google.com/spreadsheets/d/1W9_qkcIMun32ZWmewj8yRBrO1Fpe2tjYgU_JLNNKU30/edit?usp=sharing"></iframe>
