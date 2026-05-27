/* Pronunciation feature for GitHub Pages posts
   Put this file at: /assets/js/pronunciation.js

   Usage in a post:
   <button type="button" class="speak-word" data-word="business">business 🔊</button>
*/

(function () {
  let accent = "us";
  let currentAudio = null;
  let currentButton = null;

  function getYoudaoUrl(text) {
    // type=1 is commonly used for British English.
    // type=0 is commonly used for American English.
    const type = accent === "uk" ? "1" : "0";
    return "https://dict.youdao.com/dictvoice?type=" + type + "&audio=" + encodeURIComponent(text);
  }

  function clearPlayingState() {
    if (currentButton) {
      currentButton.classList.remove("is-playing");
      currentButton = null;
    }
  }

  function fallbackSpeak(text) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = accent === "uk" ? "en-GB" : "en-US";
    utterance.rate = 0.85;

    utterance.onend = clearPlayingState;
    utterance.onerror = clearPlayingState;

    window.speechSynthesis.speak(utterance);
  }

  function speak(text, button) {
    if (!text) return;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    clearPlayingState();

    currentButton = button || null;
    if (currentButton) {
      currentButton.classList.add("is-playing");
    }

    currentAudio = new Audio(getYoudaoUrl(text));

    currentAudio.addEventListener("ended", clearPlayingState);
    currentAudio.addEventListener("error", function () {
      fallbackSpeak(text);
    });

    currentAudio.play().catch(function () {
      fallbackSpeak(text);
    });
  }

  function setAccent(newAccent) {
    accent = newAccent === "uk" ? "uk" : "us";

    document.querySelectorAll(".accent-button").forEach(function (button) {
      button.classList.toggle("active", button.dataset.accent === accent);
    });
  }

  document.addEventListener("click", function (event) {
    const accentButton = event.target.closest(".accent-button");
    if (accentButton) {
      setAccent(accentButton.dataset.accent);
      return;
    }

    const wordButton = event.target.closest(".speak-word");
    if (wordButton) {
      const text = wordButton.dataset.word || wordButton.textContent.replace("🔊", "").trim();
      speak(text, wordButton);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    setAccent(accent);
  });
})();
