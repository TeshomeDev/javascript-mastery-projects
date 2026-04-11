

const counterBtnContainer = document.querySelector(".container__counter-btn");
const valueContainer = document.querySelector(".container__current-value");
const decreaseBtn = document.querySelector(".container__btn-dec");

let currentValue = 0;


function updateUI() {
  valueContainer.textContent = currentValue;
  decreaseBtn.disabled = currentValue === 0;

}

updateUI();


counterBtnContainer.addEventListener("click", (e) => {
  const clickedBtn = e.target;

  if(clickedBtn.classList.contains("container__btn-inc")) {
    currentValue++;

  } else if(clickedBtn.classList.contains("container__btn-dec") && currentValue > 0){
    currentValue--;
   
  }

   updateUI();

});