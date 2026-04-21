
const body = document.body;
const btn = document.querySelector(".container__btn");

let savedTheme = localStorage.getItem("theme");

let currentTheme = savedTheme ? savedTheme : "light";

function applyTheme() {
  if(currentTheme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
    btn.textContent = "Light Theme";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    btn.textContent = "Dark Theme";
  }
}

applyTheme();


btn.addEventListener("click", () => {
   currentTheme = currentTheme === "light" ? "dark" : "light"; 

   localStorage.setItem("theme", currentTheme);

    applyTheme();
});