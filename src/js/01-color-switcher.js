import throttle from 'lodash.throttle';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener('click', startGenerateColor);
stopBtn.addEventListener('click', stopGenerateColor);

function startGenerateColor(event) {
  if (event.target == startBtn) {
    console.log('Я кнопка старта генерации фона');
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }
}


function stopGenerateColor(event) {
  if (event.target == stopBtn) {
    console.log('Я кнопка остановки генерации фона');
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
