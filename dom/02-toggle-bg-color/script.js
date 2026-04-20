
const body = document.body;
const btn = document.querySelector(".container__btn");

let isDarkMoke = false;

function applyTheme() {
  if(isDarkMoke) {
    body.classList.add("dark");
    body.classList.remove("light")
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }

  updateBtn();
}

applyTheme();

function updateBtn() {
  btn.textContent = isDarkMoke ? "Light Mode" : "Dark Mode";
}

btn.addEventListener("click", () => {
  isDarkMoke = !isDarkMoke;
applyTheme();
});