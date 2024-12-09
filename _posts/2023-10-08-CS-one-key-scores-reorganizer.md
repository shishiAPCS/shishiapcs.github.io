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
    'class2027Dragon':"Melody\nAmanda\nHarry\nSky\nEmily\nIsabella\nAlexander\nJimmy\nBetty\nTrinity\nYukiWu\nHanbo\nStanley\nGloria",
    'class2027Lion':"KevinCai\nAngela\nClara\nJarvis\nRachel\nDorcas\nBianca\nJerryTu\nNina\nBill\nSelina\nYukiYu\nTracy\nCordelia",
    '2026Kylin': "Fielder\nLeon\nCicily\nSeanna\nRegina\nTom\nSteven\nMartin\nJason\nSelina\nCarol\nRaymond\nVicky\nBobby\nVictoria",
    '2026Rosefinch': "Eric\nJoe\nZao\nClaire\nIsaiah\nKevin\nLauren\nWesley\nTina\nCamilia\nMichael\nJoyce\nAlice\nTomZhang\nAndy",
    '2026Phoenix': "Sword\nKarl\nAugust\nRichard\nMike\nJenny\nMeredith\nKeven\nGeorge\nMason",
    'S2':                      
    "Karl\nZao\nMartin\nJoyce\nFielder\nSword\nKeven\nJenny\nLauren\nMike\nKevin\nJoe\nEric\nAndy\nTom\nMeredith\nAugust\nRichard\nCamilia\nWesley\nRaymond\nJason\nSteven\nGeorge\nIsaiah\nLeon\nSeanna\nBobby\nMichael\nRegina\nCarol\nVicky\nVictoria\nAlice\nSelina\nTina\nCicily\nMason\nClaire\nTomZhang",
    'S1': 
    "Melody\nAmanda\nHarry\nSky\nEmily\nIsabella\nAlexander\nJimmy\nBetty\nTrinity\nYukiWu\nHanbo\nStanley\nGloria\nKevinCai\nAngela\nClara\nJarvis\nRachel\nDorcas\nBianca\nJerryTu\nNina\nBill\nSelina\nYukiYu\nTracy\nCordelia"
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
