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
    width: 100%; /* Set width to match the iframe */
    max-width: 800px; /* Optional: Restrict maximum width for readability */
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

  iframe {
    width: 100%; /* Match the width of the HTML table */
    max-width: 800px; /* Optional: Restrict maximum width */
    height: 600px; /* Set a fixed height */
    margin: 20px auto;
    display: block; /* Center the iframe */
    border: none;
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

<iframe src="https://docs.google.com/spreadsheets/d/1W9_qkcIMun32ZWmewj8yRBrO1Fpe2tjYgU_JLNNKU30/edit?usp=sharing"></iframe>
