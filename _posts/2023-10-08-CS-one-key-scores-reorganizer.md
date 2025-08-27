---
title: "一键填成绩"
mathjax: true
layout: post
categories: media
---

**更新说明（2025-08-27）** — 工具地址：**[shishiapcs.github.io/thinkwave](https://shishiapcs.github.io/thinkwave/)**

0. **自动明暗主题**：新增自动适配浅/深色主题，并提供手动切换，整体界面更干净易读。
1. **抓取脚本托管到 GitHub**：把用于获取 ThinkWave 数据的 JS 抓取脚本（bookmarklet 书签脚本）放到 GitHub，便于长期维护与更新。
2. **一键获取全校班级与学生**：用书签脚本在 ThinkWave 页面一键抓取所有班级与学生名单，形成标准 JSON 数据。
3. **一键导入到工具**：抓取到的 JSON 可一次性导入到网站；只要学期内学生名单和顺序不变，通常整个学期只需导入一次。
4. **更稳的自动填写逻辑**：不再靠“序号/行号”去对齐，而是根据**姓名关键字集合**匹配（对大小写、空格、标点、变音符不敏感），示例：

   * `Tom Z` 能匹配：`Tom Z`、`TomZ`、`Tom Zhang` 等。
     这样即使页面排序变化或夹杂其他行，仍能稳定找到对应学生并填入分数。
5. **更宽松的姓名匹配**：

   * **大小写不敏感**（`joe` = `JOE`）；
   * **去除空格/标点/引号**（支持 `“昵称”`、逗号分隔的“姓, 名”格式）；
   * **支持缩写/首字母**（如 `Tom Z`、`TomZ`）；
   * **支持多种组合**（英文名、昵称、名+姓、姓+名、名+姓首字母等多种键）。
6. **导出 CSV**：组织好的“姓名,分数”可以直接预览与**下载 CSV**，便于归档或导入到其他系统。

---

**Update Notes (2025-08-27)** — Tool: **[RosterFlow — ThinkWave Organizer](https://shishiapcs.github.io/thinkwave/)**

0. **Auto light/dark theme**: The UI now adapts to your system theme with a manual toggle for a cleaner, more readable layout.
1. **Script on GitHub**: The ThinkWave scraping JS (bookmarklet) is hosted on GitHub for easy access and maintenance.
2. **One-click data grab**: Use the bookmarklet on ThinkWave to download **all classes and students** into a standard JSON file.
3. **One-click import**: Import that JSON into the tool once; unless the roster order changes, you typically only need to import **once per semester**.
4. **More robust autofill**: Instead of relying on row positions, the tool matches by a **set of name keys** (case/space/punctuation/diacritics insensitive). Examples:

   * `Tom Z` matches `Tom Z`, `TomZ`, `Tom Zhang`, etc.
     This stays reliable even if the page order changes or extra rows appear.
5. **Flexible name matching**:

   * **Case-insensitive** (`joe` = `JOE`),
   * **Ignores spaces/punctuation/quotes** (supports nicknames in quotes and “Last, First” formats),
   * **Initials and concatenations** (`Tom Z`, `TomZ`),
   * **Multiple combinations** (English name, nickname, given+family, family+given, given+family-initial, etc.).
6. **CSV export**: Preview and **download CSV** (“Name,Score”) for records or downstream tools.


**书签脚本（Bookmarklet）简明使用说明**

1. 复制下面整段代码：

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://shishiapcs.github.io/thinkwave/tw-scraper.js?ts='+Date.now();document.body.appendChild(s);})();
```

2. 在浏览器里新建书签：

* Chrome/Edge：在书签栏空白处点右键 → **添加页面**（或“添加到书签”）。
* 名称随意（如：**TW抓取**），把上面的代码粘贴到 **URL/网址** 输入框 → **保存**。

3. 打开 **ThinkWave** 的班级/成绩页面。
4. 点击刚才的书签 **TW抓取** → 按提示保存生成的 **JSON** 文件。
5. 打开工具网站 **[https://shishiapcs.github.io/thinkwave/](https://shishiapcs.github.io/thinkwave/)** → 点击 **Import JSON** 导入即可。

小提示：若浏览器拦截下载/弹窗，请允许本页面的下载或弹窗。

---

**Bookmarklet — Super Short How-To**

1. Copy the code below:

```javascript
javascript:(function(){var s=document.createElement('script');s.src='https://shishiapcs.github.io/thinkwave/tw-scraper.js?ts='+Date.now();document.body.appendChild(s);})();
```

2. Create a new bookmark:

* Chrome/Edge: right-click the bookmarks bar → **Add page**.
* Name it (e.g., **TW Scraper**), paste the code into the **URL** field → **Save**.

3. Go to your **ThinkWave** class/gradebook page.
4. Click the **TW Scraper** bookmark → save the generated **JSON** file.
5. Open **[https://shishiapcs.github.io/thinkwave/](https://shishiapcs.github.io/thinkwave/)** → click **Import JSON** to load it.

Tip: If the browser blocks downloads/pop-ups, allow them for this page.


<div id="wrapper">
    <!-- Collapsible Tutorial Section -->
        <div id="tutorial-section">
        <div id="tutorial-header" onclick="toggleTutorial()">
            <h1>Tutorial <span id="triangle">&#9660;</span></h1>
        </div>
        <div id="tutorial-content" style="display: none;">
            <h1>Using the Automated Score Entry System</h1>

            <h2>Purpose:</h2>
            <p>This system is designed for efficient management of student scores, allowing for easy organization of names and scores, conversion of TOEFL scores to GPA, and use of preset class lists.</p>

            <h2>Step-by-Step Guide:</h2>

            <h3>Entering Data:</h3>
            <ol>
                <li>In the "Class List" textbox, enter the names of students, one per line.</li>
                <li>In the "Score List" textbox, input the student names followed by their scores, separated by a space. Each entry should be on a new line.</li>
            </ol>
            <div class="tip">
                <strong>Tip:</strong> The format should be like this:
                <pre><code>
            John 85
            Jane 90
                </code></pre>
            </div>

            <h3>Using Preset Class Lists:</h3>
            <p>Click on one of the preset buttons (e.g., ESL Lion, ESL Dragon) to load a predefined list of student names into the "Class List" textbox.</p>

            <h3>Generating the Student Scores List:</h3>
            <ol>
                <li>Select from the function buttons:
                    <ul>
                        <li><strong>Organize Names and Scores:</strong> Organizes scores according to the class list and identifies missing scores.</li>
                        <li><strong>Convert TOEFL to GPA:</strong> Converts TOEFL scores to a GPA format for each student.</li>
                    </ul>
                </li>
                <li>A list in the format <code>const studentScores = [...];</code> is generated after clicking a button.</li>
            </ol>

            <h3>Accessing Google Chrome's Console:</h3>
            <p>Instructions on how to open and use the Chrome Developer Console.</p>
            <ol>
                <!-- Existing steps to access the console -->
                           <p>If you're unfamiliar with the Chrome Developer Console, it's a tool built right into Chrome that developers use to debug their websites. Here's how to open it:</p>
            <ol>
                <li>Right-click on any part of a webpage.</li>
                <li>From the context menu, select "Inspect" or "Inspect Element".</li>
                <li>A window will pop up at the bottom or side of your screen. From the top menu of this window, select "Console".</li>
            </ol>
            <p><strong>Congratulations!</strong> You've accessed the console.</p>

            </ol>

            <h3>Pasting the Data into ThinkWave:</h3>
            <ol>
                <li>Copy the generated list and accompanying code.</li>
                <li>Paste both into the console and press Enter.</li>
                <li>The scores are automatically filled into ThinkWave.</li>
            </ol>
            <div class="note">
                <strong>Note:</strong> Ensure you are on the ThinkWave webpage when pasting the data and code.
            </div>

            <h3>Copying Data to Clipboard:</h3>
            <p>The system now automatically copies the generated data to the clipboard for easy pasting.</p>

            <h3>Error Handling:</h3>
            <p>The system includes error handling for the TOEFL to GPA conversion, ensuring data integrity.</p>
            ---
        </div>
    </div>

    <!-- Preset Class Names Section -->
    <div id="class-presets">
        <!-- Buttons to load preset class names into the class list textarea -->
        <button onclick="loadClassList('class2027Dragon')">2027 Dragon</button>
        <button onclick="loadClassList('class2027Lion')">2027 Lion</button>
        <button onclick="loadClassList('2026Kylin')">2026 Kylin</button>
        <button onclick="loadClassList('2026Rosefinch')">2026 Rosefinch</button>
        <button onclick="loadClassList('2026Phoenix')">2026 Phoenix</button>
        <button onclick="loadClassList('S1')">TOEFL S1</button>
        <button onclick="loadClassList('S2')">TOEFL S2</button>
    </div>

    <textarea id="class-list" placeholder="If you want to reorder the scores, enter student names separated by a newline"></textarea>
    <textarea id="score-list" placeholder="Paste students and scores here"></textarea>

    <!-- Function Buttons -->
    <div id="function-buttons">
        <button id="organizeButton">Organize Names and Scores</button>
        <button id="convertButton">Convert TOEFL to GPA</button>
    </div>

    <!-- New Output Text Area for CSV -->
    <textarea id="csv-output" placeholder="Copy and convert to a table at tableconvert.com/csv-to-html" readonly></textarea>
    


    <!-- Output Area -->
    <div id="output-area">
        <!-- Placeholder for success message -->
        <div id="output-message"></div>
    </div>
   
</div>

<script>

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('organizeButton').addEventListener('click', organizeNamesAndScores);
    document.getElementById('convertButton').addEventListener('click', convertTOEFLtoGPA);
});

function processScoresAndGenerateOutput(scoresWithName) {
    // Counters for present and missing scores
    let scoresPresent = 0;
    let scoresMissing = 0;

    // Generate CSV data and studentScores list
    const csvData = scoresWithName.map(([name, score]) => {
        if (score !== "M") {
            scoresPresent++;
            return `${name},${score}`;
        } else {
            scoresMissing++;
            return `${name},"M"`;
        }
    }).join('\n');
    
    // Format the studentScores list for the autofill code, including quotes around non-numerical values
    const studentScoresList = scoresWithName.map(([name, score]) => isNaN(score) ? `"${score}"` : score);
    const studentScores = `const studentScores = ["This is extracted studentScores", ${studentScoresList.join(', ')}];`;

    // Copy to clipboard
    // const codeToCopy = `${studentScores}\n${autofillCode}`;
    const codeToCopy = `const studentScores = [${studentScores.join(', ')}];\n${autofillCode}`;
    copyToClipboard(codeToCopy);

    // Update the output area
    document.getElementById('csv-output').value = csvData;
    document.getElementById('output-message').textContent = `Operation successful. ${scoresPresent} scores present, ${scoresMissing} missing. List and autofill code copied to clipboard.`;
}

function organizeNamesAndScores() {
    const scoresWithName = extractRawScoresWithName();
    let processedScores;
    const classList = document.getElementById("class-list").value.trim().split("\n").filter(Boolean);

    if (classList.length > 0) {
        // If there are names in the class list, use them to reorder and identify missing scores
        const scoresMap = new Map(scoresWithName.map(([name, score]) => [name.toLowerCase(), score]));
        processedScores = classList.map(studentName => {
            const score = scoresMap.get(studentName.toLowerCase());
            return score ? [studentName, score] : [studentName, '"M"'];
        });
    } else {
        // If class list is empty, use the scores as they are
        processedScores = scoresWithName;
    }

    // Format into CSV and generate studentScores list
    const csvData = formatToCSV(processedScores);
    document.getElementById('csv-output').value = csvData;
    generateStudentScoresList(processedScores);
    document.getElementById('output-message').textContent = 
        `Organized names and scores. Data copied to clipboard.`;
}

function extractRawScoresWithName() {
    const scoreListRaw = document.getElementById("score-list").value.split("\n");
    const scores = [];
    for (let entry of scoreListRaw) {
        let parts;
        // Remove leading/trailing whitespace from the entire entry first
        const trimmedEntry = entry.trim(); 
        if (!trimmedEntry) continue; // Skip empty or whitespace-only lines

        if (trimmedEntry.includes("\t")) {
            parts = trimmedEntry.split("\t");
        } else {
            const lastSpaceIndex = trimmedEntry.lastIndexOf(" ");
            if (lastSpaceIndex === -1) { // No space found, might be only a name or only a score
                // Decide how to handle this: skip, or try to process?
                // For now, let's assume it needs both parts and skip if not found.
                // This also handles cases where entry is just "  " and lastSpaceIndex becomes -1.
                continue; 
            }
            parts = [trimmedEntry.substring(0, lastSpaceIndex), trimmedEntry.substring(lastSpaceIndex + 1)];
        }

        if (parts.length < 2) continue;
        
        let [name, score] = parts;

        // Trim whitespace from the individually extracted name and score
        name = name.trim(); 
        score = score.trim(); // <<< THIS IS THE KEY FIX FOR YOUR ISSUE

        // Now, process the cleaned score
        score = getNumericValueOrOriginal(score); 
        scores.push([name, score]);
    }
    return scores;
}

function generateStudentScoresList(scoresWithName) {
    // Prepare the scores, adding quotes if the score is "M"
    const studentScores = scoresWithName.map(([name, score]) => score !== '"M"' ? score : '"M"');
    const formattedScores = `["This is extracted studentScores", ${studentScores.join(', ')}]`;
    
    // Generate the autofill code
    // const codeToCopy = `${formattedScores};\n${autofillCode}`;
    const codeToCopy = `const studentScores = [${studentScores.join(', ')}];\n${autofillCode}`;
    copyToClipboard(codeToCopy);
}

function formatToCSV(scoresWithName) {
    // CSV generation for display
    return scoresWithName.map(([name, score]) => `${name},${score}`).join('\n');
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            console.log('Copying to clipboard was successful!');
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    } else {
        // Clipboard API not available, provide a fallback to copy manually
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            console.log('Fallback: Copying text command was successful');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
}

// Define the autofill code to be copied to the clipboard
const autofillCode = `
(function(studentScores) {
    // Autofill code for ThinkWave
    // Select only input fields that are for grades
    const scoreInputFields = document.querySelectorAll('input[name*="-grade"][type="text"]');
    for (let i = 0; i < scoreInputFields.length; i++) {
        const inputField = scoreInputFields[i];
        if (inputField && studentScores[i] !== undefined) {
            inputField.value = studentScores[i];
            inputField.dispatchEvent(new Event('input', { 'bubbles': true }));
        }
    }
})(studentScores); // Immediately invoke the function with studentScores
true;
`;


//Extracts the numeric part from a string. If the string does not contain a numeric value, it returns the original string. Useful for parsing mixed-type data.
function getNumericValueOrOriginal(str) {
    if (typeof str !== "string") return str;  // Safety check

    const numericValue = str.match(/\d+(\.\d+)?/);
    if (numericValue) {
        return numericValue[0];
    }
    return str;
}

function convertTOEFLtoGPA() {
    const scoresWithName = extractRawScoresWithName();
    const classList = document.getElementById("class-list").value.trim().split("\n").filter(Boolean);
    let conversionErrors = [];
    let convertedScoresMap = new Map();

    // Convert each score and store in a map with lowercase name for case-insensitive matching
    scoresWithName.forEach(([name, score]) => {
        const convertedScore = toeflToGPA(score);
        if (typeof convertedScore === 'string' && convertedScore.startsWith('Error')) {
            conversionErrors.push(`${name}: ${convertedScore}`);
            convertedScoresMap.set(name.toLowerCase(), '"M"'); // Mark as missing if there's an error
        } else {
            convertedScoresMap.set(name.toLowerCase(), convertedScore);
        }
    });

    let processedScores;

    // Check if a class list is provided
    if (classList.length > 0) {
        // Use the class list to reorder and identify missing scores
        processedScores = classList.map(studentName => {
            const score = convertedScoresMap.get(studentName.toLowerCase());
            return score ? [studentName, score] : [studentName, '"M"']; // Mark as missing if not found in the map
        });
    } else {
        // If class list is empty, use the original names with converted scores
        processedScores = scoresWithName.map(([name, _]) => {
            const score = convertedScoresMap.get(name.toLowerCase());
            return [name, score];
        });
    }

    // Update the output textarea and copy to clipboard only if there are no errors
    if (conversionErrors.length === 0) {
        const csvData = formatToCSV(processedScores); 
        document.getElementById('csv-output').value = csvData;
        generateStudentScoresList(processedScores);
        document.getElementById('output-message').textContent = "Converted TOEFL to GPA. Data copied to clipboard.";
    } else {
        // Display the conversion errors
        document.getElementById('output-message').textContent = "Error: Unable to convert some TOEFL scores. " +
            "Please ensure all scores are numeric and within the valid range.";
        document.getElementById('csv-output').value = conversionErrors.join('\n');
    }
}

function toeflToGPA(scoreInput) {
    const score = parseFloat(scoreInput);

     console.log(`Converted input '${scoreInput}' to number: ${score}`); // For debugging
    
     if (isNaN(score) || score < 0 || score > 30) {
        return 'Error: TOEFL score out of range (0-30).'; // Indicate an invalid score was provided
    }

    // if (score < 7) return 55;
    // else if (score == 7) return 60;
    // else if (score == 8) return 62.5;
    // else if (score == 9) return 65;
    // else if (score == 10) return 67.5;
    // else if (score == 11) return 70;
    // else if (score == 12) return 72.5;
    // else if (score == 13) return 75;
    // else if (score == 14) return 77.5;
    // else if (score == 15) return 80;
    // else if (score == 16) return 82.14;
    // else if (score == 17) return 84.28;
    // else if (score == 18) return 86.42;
    // else if (score == 19) return 88.56;
    // else if (score == 20) return 90.7;
    // else if (score == 21) return 92.84;
    // else if (score == 22) return 94.98;
    // else if (score >= 23) return 95;

    if (score >= 28) return 100; // Exceptional listening skills (A+)
    else if (score >= 25) return 97; // Very strong listening skills (A)
    else if (score >= 22) return 94; // Strong listening skills (A-)
    else if (score >= 19) return 90; // Good listening skills, above average (B+)
    else if (score >= 17) return 89; // Slightly above average proficiency (B)
    else if (score >= 14) return 85; // Average proficiency (B-)
    else if (score >= 11) return 80; // Slightly below average proficiency (C+)
    else if (score >= 6) return 75; // Below average proficiency, needs improvement (C)
    else if (score >= 3) return 65; // Significantly below average, considerable improvement needed (C-)
    else if (score >= 1) return 60; // D
    else return 55;
    // If score does not meet any condition, return an error message
    // If score does not meet any condition, return an error message
    return 'Error: Conversion Error';
}

function wrapStrings(arr) {
    return arr.map(item => {
        if (isNaN(item) && typeof item === 'string' && !item.startsWith('"')) {
            return `"${item}"`;
        }
        return item;
    });
}

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
    'class2027Dragon':"Melody\nAmanda\nHarry\nSky\nEmily\nAlexander\nJimmy\nHanbo\nGloria\nCordelia",
    'class2027Lion':"KevinCai\nAngela\nClara\nJarvis\nRachel\nDorcas\nBianca\nJerry\nNina\nBill\nYukiWu\nSelina\nYukiYu\nTracy",
    '2026Kylin': "Leon\nCicily\nRegina\nTom\nSteven\nJason\nSelina\nCarol\nRaymond\nVicky\nBobby\nVictoria",
    '2026Rosefinch': "Eric\nJoe\nZao\nClaire\nAugust\nIsaiah\nMike\nKevin\nMeredith\nLauren\nWesley\nTina\nGeorge\nCamilia\nMichael\nJoyce\nAlice\nAndy\nMason",
    '2026Phoenix': "Sword\nKarl\nAugust\nRichard\nMike\nJenny\nMeredith\nKeven\nGeorge\nMason",
    'S2':                      
    "Karl\nZao\nJoyce\nSword\nKeven\nLauren\nMike\nKevin\nJoe\nEric\nAndy\nTom\nMeredith\nAugust\nRichard\nCamilia\nWesley\nRaymond\nJason\nSteven\nGeorge\nIsaiah\nLeon\nSeanna\nBobby\nMichael\nRegina\nCarol\nVicky\nAlice\nSelina\nTina\nCicily\nMason\nClaire\nTomZhang",
    'S1': 
    "Melody\nAmanda\nHarry\nSky\nEmily\nIsabella\nAlexander\nJimmy\nBetty\nTrinity\nYukiWu\nHanbo\nStanley\nGloria\nKevinCai\nAngela\nClara\nJarvis\nRachel\nDorcas\nBianca\nJerry\nNina\nBill\nSelina\nYukiYu\nTracy\nCordelia\nHoward"
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

    #csv-output {
    width: 96%; /* Adjust as needed */
    height: 450px; /* Adjust as needed */
    margin-top: 10px;
    margin-bottom: 20px;
    resize: none;
}

</style>

---

<!-- Area to display the reordered results -->
<ul id="resultList"></ul>
