

const counterBtnContainer = document.querySelector(".container__counter-btn");
const valueContainer = document.querySelector(".container__current-value");
const decreaseBtn = document.querySelector(".container__btn-dec");

const reset = document.querySelector(".container__btn-reset");

let currentValue = 0;


function updateUI() {
  valueContainer.textContent = currentValue;
  decreaseBtn.disabled = currentValue === 0;

}

updateUI();


counterBtnContainer.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  const action = clickedBtn.dataset.action;

  if(!action) return;
  

  if(action === "increment") {
    currentValue++;

  } else if(action === "decrement" && currentValue > 0){
    currentValue--;
   
  }

   updateUI();

});

reset.addEventListener("click", (e) => {
  if(e.target.dataset.action === "reset") currentValue = 0;

  updateUI();
})