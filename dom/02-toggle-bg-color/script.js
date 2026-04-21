
const body = document.body;
const btn = document.querySelector(".container__btn");

const themes = {
  light: {
    classToAdd: "light",
    classToRemove: "dark",
    buttonText: "Dark Mode"
  },
  dark: {
    classToAdd: "dark",
    classToRemove: "light",
    buttonText: "Light Mode"
  }
}


let currentTheme = "light";

function applyTheme() {
  const theme = themes[currentTheme];

  body.classList.add(theme.classToAdd);
  body.classList.remove(theme.classToRemove);

  btn.textContent = theme.buttonText;

}

applyTheme();


btn.addEventListener("click", () => {
   currentTheme = currentTheme === "light" ? "dark" : "light"; 

    applyTheme();
});