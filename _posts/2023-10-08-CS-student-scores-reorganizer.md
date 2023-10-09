---
title:  "一键成绩排序自动录入系统"
mathjax: true
layout: post
categories: media
---

<style>
    /* Define styles for the textareas */
    textarea {
        width: 90%;       /* Take up 90% of the containing element's width */
        min-width: 300px; /* Set a minimum width */
        max-width: 800px; /* Set a maximum width */
        height: 150px;    /* Set a default height */
        resize: both;     /* Allow resizing both horizontally and vertically */
        margin: 10px 0;   /* Add some margin on the top and bottom */
    }
</style>

<!-- Input area for the class list -->
<textarea id="classList" placeholder="Enter student names separated by a newline"></textarea>

<!-- Input area for the student scores -->
<textarea id="scoreList" placeholder="Enter students and scores in format: Name\tScore separated by a newline"></textarea>

<!-- Button that triggers the reordering function -->
<button id="reorderButton">Reorder Scores</button>

<!-- Area to display the reordered results -->
<ul id="resultList"></ul>

<script>
function reorderScores() {
    // Get the student names list from the textarea
    const classList = document.getElementById("classList").value.split("\n");

    // Get the student scores list from the textarea
    const scoreListRaw = document.getElementById("scoreList").value.split("\n");

    // Convert the scoreListRaw into a map for easy lookup
    let scoreMap = new Map();
    for (let entry of scoreListRaw) {
        let parts = entry.split("\t");
        if (parts.length < 2) {
            continue; // Skip this entry since it's not in the expected format
        }

        let [name, score] = parts;

        // Handle 'Missing 已补考' and 'Missing' cases
        if (score.includes("Missing")) {
            continue; // skip adding this to the scoreMap
        } else {
            // Extract only the numeric portion (percentage) of the score
            let scoreNumeric = parseInt(score, 10);
            if (!isNaN(scoreNumeric)) { // Only store it if it's a valid number
                scoreMap.set(name.trim(), scoreNumeric);
            }
        }
    }

    // Clear any previous results from the result list
    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    // Initialize studentScores with the desired starting string
    const studentScores = ["This is ordered studentScores"];

    // Go through the class list and map each student's score using the scoreMap
        for (let student of classList) {
        let score = scoreMap.get(student.trim());
        if (score !== undefined) { // Check if the student's score is available
            studentScores.push(score);
        }
    }

    // Create a single li element with the text representation of the studentScores array
    let li = document.createElement("li");
    li.textContent = `const studentScores = ["${studentScores[0]}", ${studentScores.slice(1).join(', ')}];`;
    resultList.appendChild(li);

    // Display studentScores as a list on the console
    console.log(studentScores);
}




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('reorderButton').addEventListener('click', reorderScores);
});
</script>




{% include codeHeader.html %}
```javascript
// put const studentScores = ["This is ordered studentScores"] here. 

// Get all input fields with the class "input-small" and type "text".
const inputFields = document.querySelectorAll('input.input-small[type="text"]');

// Loop through each input field and populate the corresponding score.
for (let i = 1; i < inputFields.length; i++) {
  const inputField = inputFields[i];
  if (inputField && studentScores[i] !== undefined) {
    inputField.value = studentScores[i];
    inputField.dispatchEvent(new Event('input', { 'bubbles': true }));
  }
}

true

```

```
// ESL Lion
Eileen
Paul
Taylor
Yuna
Luca
Ashlyn
Jerry
Jessie
Ivy
Jay
Shawn

// ESL Dragon
Zoe
Daniel
Tony
Minato
Cameron
Nancy
Yvonne
Shelia
Elson

// ESL Rosefinch
Sword
Joe
Zao
Claire
August
Richard
Isaiah
Jenny
Kevin
Meredith
Seanna
Lauren
Martin
Jason
George
Selina
Camilia
Michael
Raymond
Joyce
Alice
Vicky
Andy
Victoria
Flora
Mason

// ESL Kylin
Eric
Karl
Fielder
Evelyn
Leon
Mike
Cicily
Keven
Lynne
Regina
Tom
Steven
Wesley
Tina
Evan
Howard
Carol
Wendy
Bobby
```