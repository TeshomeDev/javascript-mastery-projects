
const input = document.querySelector(".hideshow-container__input");
const btn = document.querySelector(".hideshow-container__btn");


let passwordVisibility = "hidden";

function updateUI() {

  const isVisibile = passwordVisibility === "visible";

  if(isVisibile) {
    input.type = "text";
    btn.textContent = "Hide";
    
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
  
  btn.setAttribute("aria-pressed", passwordVisibility === "visible");

  btn.style.transform = "scale(0.98)";

  setTimeout(() => {
    btn.style.transform = "scale(1)";
  }, 100);
}

updateUI();

btn.addEventListener("click", (e) => {
  const action = e.target.dataset.action;

  if(action === "toggle-visibility") {
    passwordVisibility = passwordVisibility === "hidden" ? "visible" : "hidden";
  }  

    updateUI();
  
});