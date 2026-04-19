
const input = document.querySelector(".hideshow-container__input");
const btn = document.querySelector(".hideshow-container__btn");


let isVisible = false;

function updateUI() {

  if(isVisible) {
    input.type = "text";
    btn.textContent = "Hide";
    
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
  
}

updateUI();

btn.addEventListener("click", () => {

  isVisible = !isVisible;
  
    updateUI();
  
});