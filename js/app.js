const textArea = document.getElementById("textArea");

textArea.addEventListener("input", () => {
  const letterCollection = {};

  const inputValue = textArea.value;
  const letterList = inputValue
    .split("")
    .filter((letter) => letter.trim() !== "");

  letterList.forEach((letter) => {
    const lowerLetter = letter.toLowerCase();

    if (letterCollection[lowerLetter]) {
      letterCollection[lowerLetter] += 1;
    } else {
      letterCollection[lowerLetter] = 1;
    }
  });
  console.clear();
  console.log(letterCollection);

  for (let i in letterCollection) {
    console.log(
      i,
      letterCollection[i],
      `${Math.round((letterCollection[i] / letterList.length) * 100)}%`
    );
  }
});
