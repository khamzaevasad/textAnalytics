const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

// localStroge

const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("display-none");
  lightBtn.classList.toggle("display-none");
}

// toggle func
const toggleMode = () => {
  darkBtn.classList.toggle("display-none");
  lightBtn.classList.toggle("display-none");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleMode();
  localStorage.setItem("mode", "");
});
