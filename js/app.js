const textAreaEl = document.getElementById("textArea");
const totalCharEl = document.getElementById("total-character");
const wordsCountEl = document.getElementById("words-count");

textAreaEl.addEventListener("input", textAnalyze);

function textAnalyze() {
  // total character
  const totalChar = textAreaEl.value; // input value
  totalCharEl.textContent = totalChar.length;

  // word count
  const wordCount = totalChar.split(" ").length;
  if (totalChar === 0) {
    wordCount = 0;
  }
  wordsCountEl.textContent = wordCount;

  const letterCollection = {}; //letter obj

  totalChar.split("").forEach((letter) => {
    const lowerLetter = letter.toLowerCase();

    if (letterCollection[lowerLetter]) {
      letterCollection[lowerLetter] += 1;
    } else {
      letterCollection[lowerLetter] = 1;
    }
  });

  for (let i in letterCollection) {
    console.log(
      i,
      letterCollection[i],
      `${Math.round((letterCollection[i] / totalChar.length) * 100)}%`
    );
  }

  console.log(letterCollection);
}
