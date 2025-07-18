const textAreaEl = document.getElementById("textArea");
const totalCharEl = document.getElementById("total-character");
const wordsCountEl = document.getElementById("words-count");

function textAnalyze() {
  // total character
  const totalChar = textAreaEl.value;
  totalCharEl.textContent = totalChar.length;

  // word count
  const wordCount = totalChar.split(" ").length;
  if (totalChar === 0) {
    wordCount = 0;
  }
  wordsCountEl.textContent = wordCount;
}

textAreaEl.addEventListener("input", textAnalyze);
