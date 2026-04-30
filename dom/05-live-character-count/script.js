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

  const isNearLimit = remaining <= 10 && remaining > 0;

  feedback.classList.remove("feedback--warning", "feedback--limit");
  countDisplay.classList.remove("max--limit");

  if(isOverLimit) {
    countDisplay.classList.add("max--limit");
    feedback.classList.add("feedback--limit");
  } else if(isNearLimit) {
    feedback.classList.add("feedback--warning");
  }

  countDisplay.textContent = `${count} / ${MAX_LIMIT} characters`;

    feedback.textContent = isOverLimit 
    ? "Maximum reached" 
    : `${remaining} characters remaining`;

    // const color = isOverLimit 
    // ? "red" 
    // : "inherit";

    // feedback.style.color = color;
    // countDisplay.style.color = color;
}


updateUI();

textarea.addEventListener("input", updateUI);

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  const text = textarea.value;
  const count = text.length;
  const isOverLimit = count >= MAX_LIMIT;

  if(isOverLimit) {
    e.preventDefault();

    feedback.textContent = "Message exceeds allowed limit.";
    feedback.classList.add("feedback--limit");
  }

});


window.addEventListener("pageshow", () => {
  form.reset();
  updateUI();
})