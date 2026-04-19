

const title = document.querySelector(".container__title");
const button = document.querySelector(".container__btn-toggle");

let isUpdated = false;

function toggleText() {
  title.computedStyleMap.opacity = "0.5";

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

  title.computedStyleMap.opacity = "1";
  }, 250);
}

button.addEventListener("click", toggleText);