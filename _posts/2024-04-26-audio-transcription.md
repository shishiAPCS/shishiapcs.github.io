---
title:  "Audio Transcription with WebAssembly"
mathjax: true
layout: post
categories: tools
---

---



# Audio Transcription with WebAssembly

This page allows you to transcribe audio files using the Whisper WebAssembly module. You can choose a model, upload an audio file, and then transcribe it to text.

## Select a Whisper Model

Select a model to load:

<button onclick="loadWhisper('tiny')">Load Tiny Model</button>
<button onclick="loadWhisper('base')">Load Base Model</button>
<button onclick="loadWhisper('small')">Load Small Model</button>

<div id="model-status"></div>

## Upload Audio File

<input type="file" id="audioFile" accept="audio/*">
<button onclick="transcribeAudio()">Transcribe Audio</button>

<div id="transcriptionOutput" style="white-space: pre-wrap; background: #f4f4f4; border: 1px solid #ccc; padding: 10px; margin-top: 10px;"></div>

<script>
var modelLoaded = false;

function loadWhisper(model) {
    // Placeholder for loading model
    document.getElementById('model-status').innerHTML = 'Loading ' + model + ' model...';
    setTimeout(function() {
        modelLoaded = true;
        document.getElementById('model-status').innerHTML = model + ' model loaded successfully!';
    }, 2000); // Simulate a loading delay
}

function transcribeAudio() {
    if (!modelLoaded) {
        alert('Please load a model first.');
        return;
    }

    const fileInput = document.getElementById('audioFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an audio file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const audioData = event.target.result;
        // Simulate transcription
        document.getElementById('transcriptionOutput').textContent = 'Transcribing...';
        setTimeout(function() {
            document.getElementById('transcriptionOutput').textContent = 'Transcription complete: \n\n' + generateDummyTranscription();
        }, 3000);
    };
    reader.readAsArrayBuffer(file);
}

function generateDummyTranscription() {
    return "This is a dummy transcription of the uploaded audio file. Replace this function with actual transcription logic.";
}
</script>




<!-- # Audio Transcription with WebAssembly

This tool allows you to upload an audio file, and it will transcribe the audio to text using the whisper WebAssembly module.

## Upload Audio File
<input type="file" id="audioFile" accept="audio/*">
<button onclick="transcribeAudio()">Transcribe Audio</button>
<textarea id="transcriptionOutput" placeholder="Transcription will appear here..." readonly style="width:100%; height:200px;"></textarea>

<script src="/assets/wasm/libwhisper.js"></script>
<script>
function transcribeAudio() {
    const fileInput = document.getElementById('audioFile');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select an audio file first.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(event) {
        const audioData = event.target.result;
        // Assume there's a function in libwhisper.js that starts the transcription
        const transcription = await transcribeFromWASM(audioData);
        document.getElementById('transcriptionOutput').value = transcription;
    };
    reader.readAsArrayBuffer(file);
}

async function transcribeFromWASM(audioData) {
    // This function would call into the WASM module to process the audioData
    console.log("Transcription process would go here.", audioData);
    return "Transcribed text goes here.";
}
</script> -->
