const textarea = document.querySelector(".text-input");
const countDisplay = document.querySelector(".char-count");
const feedback = document.querySelector(".feedback");

const MAX_LIMIT = 100;

function updateUI() {
  let text = textarea.value;

  if(text.length > MAX_LIMIT) {
    text = text.slice(0, MAX_LIMIT);
    textarea.value = text;
  }

  const count = text.length;
  const isOverLimit = count >= MAX_LIMIT;
  const remaining = MAX_LIMIT - count;

  countDisplay.textContent = `${count} / ${MAX_LIMIT} characters`;

    feedback.textContent = isOverLimit 
    ? "Limit reached" 
    : `${remaining} characters remaining`;

    const color = isOverLimit 
    ? "red" 
    : "inherit";

    feedback.style.color = color;
    countDisplay.style.color = color;
}

updateUI();

textarea.addEventListener("input", updateUI);

