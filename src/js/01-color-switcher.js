import throttle from 'lodash.throttle';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', startGenerateColor);
stopBtn.addEventListener('click', stopGenerateColor);

let timerId = null;

function startGenerateColor(event) {
  if (event.target === startBtn) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
      document.body.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
    }, 1000);
  }
}

stopBtn.disabled = true;

function stopGenerateColor(event) {
  if (event.target === stopBtn) {
    clearInterval(timerId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
  }
}
