

const title = document.querySelector(".container__title");
const button = document.querySelector(".container__btn-toggle");

let isUpdated = false;

function toggleText() {
  isUpdated = !isUpdated;

  if(isUpdated) {
    title.textContent = "Hello, World!";
    title.classList.remove("active");
    button.textContent = "Update greeting";
  } else {
      title.textContent = "I have started the journey of mastering JavaScript.";
      title.classList.add("active");
      button.textContent = "Reset";
  }
}

button.addEventListener("click", toggleText);