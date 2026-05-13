
const alarmTimeContainer = document.querySelector(".alarm-time__container");
const alarmLabel = document.querySelector(".alarm-time__label");
const alarmTimeSet = document.querySelector(".alarm-time__time");


const timeInput = document.querySelector(".alarm-form__input");
const setAlarmBtn = document.querySelector(".alarm-form__btn");


const currentTime = document.querySelector(".current-time__display");


const alarmFeedbackContainer = document.querySelector(".alarm-feedback__container");
const alarmFeedback = document.querySelector(".alarm-feedback");




let isAlarmSet = false;
let alarmTriggered = false;
let alarmTime = null;

function setAlarm(time) {

  if(time === "") return;

  const alarmDeleteBtn = document.querySelector(".alarm__delete-btn");
  if(alarmDeleteBtn) alarmDeleteBtn.remove();

  const alarm = time.split(":");
  const hour = Number(alarm[0]);
  const minute = Number(alarm[1]);

  alarmTime = {
    hour,
    minute 
  }

  isAlarmSet = true;
  alarmLabel.textContent = `Alarm is set for: `;
  alarmTimeSet.textContent = time;
  timeInput.value = "";

  createDeleteBtn();
}


function checkAlarm() {
  if(!isAlarmSet || alarmTriggered) return;

  const timeNow = new Date();

  const currentHour = timeNow.getHours();
  const currentMinute = timeNow.getMinutes();

  return currentHour === alarmTime.hour && currentMinute === alarmTime.minute;
}

function displayCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  currentTime.textContent = timeString;
}

setInterval(displayCurrentTime, 1000);


setInterval(() => {
  triggerAlarm();

}, 1000);

const ringtone = new Audio("alarm-clock-01.mp3");

ringtone.loop = true;

function triggerAlarm() {
  let isAlarmTime = checkAlarm();

   if(isAlarmTime) {
    alarmTriggered = true;
    alarmFeedback.textContent = `⏰ Wake up and build developers!`;
    alarmFeedback.classList.add("active");
    alarmTimeSet.textContent = "";
    alarmLabel.textContent = "";

    const activeDeleteBtn = document.querySelector(".alarm__delete-btn");

    if(activeDeleteBtn) activeDeleteBtn.remove();

    isAlarmSet = false;
    createStopBtn();

    ringtone.play();
   }
}

setAlarmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setAlarm(timeInput.value);
});

function deleteTriggeredAlarm() {
  alarmFeedback.textContent = "";
  const deleteBtn = document.querySelector(".delete-btn");

  if(deleteBtn) {
    ringtone.pause();
    ringtone.currentTime = 0;

    deleteBtn.remove();
  }

  alarmTriggered = false;
}

function createStopBtn() {

    const stopBtn = document.createElement("button");
    stopBtn.className = "delete-btn";
    stopBtn.textContent = "Stop";

    alarmFeedbackContainer.appendChild(stopBtn);

    stopBtn.addEventListener("click", deleteTriggeredAlarm);
}

function createDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "alarm__delete-btn";
  deleteBtn.textContent = "Delete";

  alarmTimeContainer.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    alarmLabel.textContent = "";
    alarmTimeSet.textContent = "";
    deleteBtn.remove();

    isAlarmSet = false;
  })
}

