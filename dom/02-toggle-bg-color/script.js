
const body = document.querySelector(".container");
const btn = document.querySelector(".container__btn");

const colors = ["#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50"];

function getRandomIndex() {
  const index = Math.floor(Math.random() * colors.length);

  return index;
}


function changeBackgroundColor() {
  const color = colors[getRandomIndex()];

  body.style.backgroundColor = color;
}

btn.addEventListener("click", changeBackgroundColor);