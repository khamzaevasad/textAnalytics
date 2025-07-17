const textArea = document.getElementById("textArea");
const totalCharacter = document.getElementById("total-character");

textArea.addEventListener("input", () => {
  const letterCollection = {};
  const characterList = [];

  const inputValue = textArea.value;
  const letterList = inputValue
    .split("")
    .filter((letter) => letter.trim() !== "");

  letterList.forEach((letter, index) => {
    const lowerLetter = letter.toLowerCase();
    const allLetters = index + 1;
    characterList.push(allLetters);

    if (letterCollection[lowerLetter]) {
      letterCollection[lowerLetter] += 1;
    } else {
      letterCollection[lowerLetter] = 1;
    }
  });
  console.clear();
  console.log(letterCollection);
  console.log("characterList", characterList);

  for (let i in letterCollection) {
    console.log(
      i,
      letterCollection[i],
      `${Math.round((letterCollection[i] / letterList.length) * 100)}%`
    );
  }
  console.log("Total characters", characterList.length);
  totalCharacter.textContent = characterList.length;
});
