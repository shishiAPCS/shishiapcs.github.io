---
title: "一键填成绩"
mathjax: true
layout: post
categories: media
---

<div id="wrapper">
    <!-- Collapsible Tutorial Section -->
    <div id="tutorial-section">
        <div id="tutorial-header" onclick="toggleTutorial()">
            <h1>Tutorial <span id="triangle">&#9660;</span></h1>
        </div>
        <div id="tutorial-content" style="display: none;">
            <!-- Tutorial content goes here -->
            <!-- Your existing tutorial content -->
                        <h1>Using the Automated Score Entry System</h1>

            <h2>Purpose:</h2>
            <p>This system allows you to generate a list of student names along with their respective scores. You can then use this generated list, along with a piece of provided code, to automatically enter these scores into our ThinkWave.</p>

            <h2>Step-by-step Guide:</h2>

            <h3>Entering Data:</h3>
            <ol>
                <li>In the "Class List" textbox, enter the names of students, one per line.</li>
                <li>In the "Score List" textbox, input the student names followed by their scores, separated by a space. Each student and their score should be on a new line.</li>
            </ol>
            <div class="tip">
                <strong>Tip:</strong> Ensure the format is as follows:
                <pre><code>
            John 85
            Jane 90
                </code></pre>
            </div>

            <h3>Generating the Student Scores List:</h3>
            <ol>
                <li>Based on what you want to do, click one of the three buttons:
                    <ul>
                        <li><strong>Extract Scores:</strong> This will generate scores as they are entered, without any changes.</li>
                        <li><strong>Reorder Scores:</strong> This will reorder scores based on the provided class list.</li>
                        <li><strong>Convert TOEFL to GPA:</strong> If you've entered TOEFL scores, this button will convert them to GPA scores and list them.</li>
                    </ul>
                </li>
                <li>After clicking any of the buttons, you will see a list generated in the format: <code>const studentScores = [...];</code></li>
            </ol>

            <h3>Accessing Google Chrome's Console:</h3>
            <p>If you're unfamiliar with the Chrome Developer Console, it's a tool built right into Chrome that developers use to debug their websites. Here's how to open it:</p>
            <ol>
                <li>Right-click on any part of a webpage.</li>
                <li>From the context menu, select "Inspect" or "Inspect Element".</li>
                <li>A window will pop up at the bottom or side of your screen. From the top menu of this window, select "Console".</li>
            </ol>
            <p><strong>Congratulations!</strong> You've accessed the console.</p>

            <h3>Pasting the Data into the ThinkWave:</h3>
            <ol>
                <li>Copy the generated list from our system.</li>
                <li>Below that list, there's a piece of code provided. Copy that code as well.</li>
                <li>Go to the console in Google Chrome.</li>
                <li>Paste both the list and the code into the console.</li>
                <li>Press Enter.</li>
            </ol>
            <p>The scores will be automatically filled into our ThinkWave!</p>

            <div class="note">
                <strong>Note:</strong> Ensure that you're on the ThinkWave's webpage when you're pasting the data and the code into the console.
            </div>
            ---
        </div>
    </div>

    <!-- Preset Class Names Section -->
    <div id="class-presets">
        <!-- Buttons to load preset class names into the class list textarea -->
        <button onclick="loadClassList('ESLLion')">ESL Lion</button>
        <button onclick="loadClassList('ESLDragon')">ESL Dragon</button>
        <button onclick="loadClassList('ESLRosefinch')">ESL Rosefinch</button>
        <button onclick="loadClassList('ESLKylin')">ESL Kylin</button>
        <button onclick="loadClassList('S1')">TOEFL S1</button>
    </div>

    <textarea id="class-list" placeholder="If you want to reorder the scores, enter student names separated by a newline"></textarea>
    <textarea id="score-list" placeholder="Paste students and scores here"></textarea>

    <!-- Function Buttons -->
    <div id="function-buttons">
        <button id="extractButton" onclick="extractScores()">Extract Scores</button>
        <button id="reorderButton" onclick="reorderScores()">Reorder Scores</button>
        <button id="convertButton" onclick="convertAndOrderScores()">Convert TOEFL to GPA</button>
    </div>

    <!-- Output Area -->
    <div id="output-area">
        <!-- Placeholder for output -->
    </div>

    <!-- Include your existing script here -->
    <!-- Make sure to add the new functions for the tutorial section and presets -->
</div>

<script>

//Extracts the numeric part from a string. If the string does not contain a numeric value, it returns the original string. Useful for parsing mixed-type data.
function getNumericValueOrOriginal(str) {
    if (typeof str !== "string") return str;  // Safety check

    const numericValue = str.match(/\d+(\.\d+)?/);
    if (numericValue) {
        return numericValue[0];
    }
    return str;
}

function reorderScores() {
    const classList = document.getElementById("class-list").value.split("\n");
    
    // Check if the classList is empty or contains only whitespace characters
    if (classList.length === 0 || (classList.length === 1 && classList[0].trim() === "")) {
        alert("Please enter the student names in the class list to reorder the scores properly.");
        return;  // Exit the function early
    }

    const scoresWithName = extractRawScoresWithName();
    let scoreMap = new Map(scoresWithName);

    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";

    const studentScores = ["This is reordered studentScores"];
    for (let student of classList) {
        let score = scoreMap.get(student.trim());
        if (score !== undefined) {
            studentScores.push(score); // push the score of the student
        } else {
            studentScores.push("M"); // or whatever placeholder you want to use for missing scores
        }
    }

    let wrappedScores = wrapStrings(studentScores);
    let li = document.createElement("li");
    li.textContent = `const studentScores = [${wrappedScores.join(', ')}];`;
    resultList.appendChild(li);
    
    console.log(studentScores);
}

function extractScores() {
    const scoresWithName = extractRawScoresWithName(); 
    const studentScores = ["This is extracted studentScores"];
    for (let [name, score] of scoresWithName) {
        studentScores.push(score);
    }

    let wrappedScores = wrapStrings(studentScores);
    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `const studentScores = [${wrappedScores.join(', ')}];`;
    resultList.appendChild(li);

    console.log(studentScores);
}

function convertAndOrderScores() {
    const scoresWithName = extractRawScoresWithName();
    const convertedScoresWithName = scoresWithName.map(([name, score]) => [name, toeflToGPA(score)]);
    
    const classList = document.getElementById("class-list").value.split("\n");
    let result;
    if (classList.length > 1 || (classList.length === 1 && classList[0].trim() !== "")) {
        result = reorderScoresByClassList(convertedScoresWithName);
    } else {
        result = convertedScoresWithName;
    }
    
    const studentScores = ["This is TOEFL converted to GPA"];
    for (let [name, score] of result) {
        studentScores.push(score);
    }

    let wrappedScores = wrapStrings(studentScores);
    let resultList = document.getElementById("resultList");
    resultList.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `const studentScores = [${wrappedScores.join(', ')}];`;
    resultList.appendChild(li);

    console.log(studentScores);
}

function extractRawScoresWithName() {
    const scoreListRaw = document.getElementById("score-list").value.split("\n");
    const scores = [];
    for (let entry of scoreListRaw) {
        let parts;
        if (entry.includes("\t")) {
            parts = entry.split("\t");
        } else {
            // Split at the last space
            const lastSpaceIndex = entry.lastIndexOf(" ");
            parts = [entry.substring(0, lastSpaceIndex), entry.substring(lastSpaceIndex + 1)];
        }

        if (parts.length < 2) continue;
        let [name, score] = parts;

        score = getNumericValueOrOriginal(score);
        scores.push([name, score]);
    }
    return scores;
}

function reorderScoresByClassList(scoresWithName) {
    const classList = document.getElementById("class-list").value.split("\n");
    if (classList.length <= 1 && !classList[0]) return scoresWithName; 

    const reorderedScores = [];
    const scoreMap = new Map(scoresWithName);

    for (let student of classList) {
        let score = scoreMap.get(student.trim());
        if (score !== undefined) {
            reorderedScores.push([student, score]);
        }
    }
    return reorderedScores;
}

function toeflToGPA(scoreInput) {
    const score = parseFloat(scoreInput);
    
    if (isNaN(score)) return scoreInput;

    if (score < 7) return 55;
    else if (score == 7) return 60;
    else if (score == 8) return 62.5;
    else if (score == 9) return 65;
    else if (score == 10) return 67.5;
    else if (score == 11) return 70;
    else if (score == 12) return 72.5;
    else if (score == 13) return 75;
    else if (score == 14) return 77.5;
    else if (score == 15) return 80;
    else if (score == 16) return 82.14;
    else if (score == 17) return 84.28;
    else if (score == 18) return 86.42;
    else if (score == 19) return 88.56;
    else if (score == 20) return 90.7;
    else if (score == 21) return 92.84;
    else if (score == 22) return 94.98;
    else if (score >= 23) return 95;
}

function wrapStrings(arr) {
    return arr.map(item => {
        if (isNaN(item) && typeof item === 'string' && !item.startsWith('"')) {
            return `"${item}"`;
        }
        return item;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('extractButton').addEventListener('click', extractScores);
    document.getElementById('reorderButton').addEventListener('click', reorderScores);
    document.getElementById('convertButton').addEventListener('click', convertAndOrderScores);
});

// New functions for the updated interface
function toggleTutorial() {
    var content = document.getElementById('tutorial-content');
    var triangle = document.getElementById('triangle');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        triangle.innerHTML = '&#9650;';
    } else {
        content.style.display = 'none';
        triangle.innerHTML = '&#9660;';
    }
}

function loadClassList(preset) {
    var classListTextArea = document.getElementById('class-list');
    // Define presets
    var presets = {
    'ESLLion': "Eileen\nPaul\nTaylor\nYuna\nLuca\nAshlyn\nJerry\nJessie\nIvy\nJay\nShawn",
    'ESLDragon': "Zoe\nDaniel\nTony\nMinato\nCameron\nNancy\nYvonne\nShelia\nElson",
    'ESLRosefinch': "Sword\nJoe\nZao\nClaire\nAugust\nRichard\nIsaiah\nJenny\nKevin\nMeredith\nSeanna\nLauren\nMartin\nJason\nGeorge\nSelina\nCamilia\nMichael\nRaymond\nJoyce\nAlice\nVicky\nAndy\nVictoria\nFlora\nMason",
    'ESLKylin': "Eric\nKarl\nFielder\nEvelyn\nLeon\nMike\nCicily\nKeven\nLynne\nRegina\nTom\nSteven\nWesley\nTina\nEvan\nHoward\nCarol\nWendy\nBobby"
    };

    // Load the preset class list into the textarea
    classListTextArea.value = presets[preset] || "Preset not found";
}

</script>

<style>
    #class-list, #score-list {
        box-sizing: border-box; /* Include padding and borders in the element's total width and height */
        width: 48%; /* Adjust width to allow for two side by side with some space in between */
        height: 450px;
        margin-bottom: 10px;
        resize: vertical;
        display: inline-block; /* Display side-by-side */
        vertical-align: top; /* Align to top if they are different heights */
    }

    #class-presets {
        display: flex;
        justify-content: space-around; /* Spreads items evenly with space around them */
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    #class-presets button {
        flex: 1; /* Each button will grow to fill the space */
        margin: 0 10px; /* Give some space between buttons */
        text-align: center; /* Center button text */
    }

    #function-buttons {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    #wrapper {
        max-width: 800px; /* Maximum width of the wrapper */
        margin: auto; /* Center the wrapper */
    }

    @media (max-width: 768px) {
        #class-list, #score-list {
            width: 100%; /* Full width on smaller screens */
        }

        #class-presets {
            justify-content: center;
        }

        #class-presets button {
            margin: 5px; /* Smaller margin on smaller screens */
        }
    }
</style>

---

<!-- Area to display the reordered results -->
<ul id="resultList"></ul>

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