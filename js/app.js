const inputArea = document.getElementById("textArea");

inputArea.addEventListener("input", () => {
  lettersCollection = {};

  const inputValue = inputArea.value;

  const letterList = inputValue.split("").forEach((letter) => {
    if (lettersCollection[letter.toLowerCase()]) {
      lettersCollection[letter.toLowerCase()] += 1;
    } else {
      lettersCollection[letter.toLowerCase()] = 1;
    }
    console.clear();
    console.log(lettersCollection);

    for (let i in lettersCollection) {
      console.log(
        i,
        lettersCollection[i],
        `${Math.round((lettersCollection[i] / inputValue.length) * 100)}%`
      );
    }
  });
});
