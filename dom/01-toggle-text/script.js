

const title = document.querySelector(".container__title");
const button = document.querySelector(".container__btn-toggle");

let isUpdated = false;

function toggleText() {
  title.style.opacity = "0";

  setTimeout(() => {
    if(isUpdated) {
    title.textContent = "Hello, World!";
    title.classList.remove("active");
    button.textContent = "Update greeting";

    isUpdated = false;
  } else {
      title.textContent = "I have started the journey of mastering JavaScript.";
      title.classList.add("active");
      button.textContent = "Reset";

      isUpdated = true;
  }

  title.style.opacity = "1";
  }, 300);
}

button.addEventListener("click", toggleText);