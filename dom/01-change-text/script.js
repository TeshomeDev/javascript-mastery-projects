

const h1 = document.querySelector(".heading");
const btn = document.querySelector(".btn-toggle");

let isUpdated = false;

function toggleText() {

  if(isUpdated) {
    h1.textContent = "Hello, World!";
    h1.classList.remove("active");
    btn.textContent = "Update greeting";
    isUpdated = false;
  } else {
      h1.textContent = "I have started the journey of mastering DOM.";
      h1.classList.add("active");
      btn.textContent = "Reset";
      isUpdated = true;
  }
 
}

btn.addEventListener("click", toggleText);