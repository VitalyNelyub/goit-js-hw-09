import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const calendar = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');

let refs = {
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

startBtn.disabled = true;
let intervalId = null;

const now = new Date();
let selectDate = null;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentData = selectedDates[0].getTime();
    if (currentData <= now.getTime()) {
      window.alert('Please choose a date in the future');
    } else if (currentData > now.getTime()) {
      startBtn.disabled = false;
      selectDate = selectedDates[0].getTime();
    }
  },
});

startBtn.addEventListener('click', startTimer);

function countDownTime() {
  const now = new Date();
  // console.log('НАЖАЛИ');
  const ms = selectDate - now.getTime();
  // console.log(convertMs(ms));
  // console.log('ИНТЕРВАЛ');
  if (ms > 0) {
    refs.dataDays.innerHTML = addZero(convertMs(ms).days);
    refs.dataHours.innerHTML = addZero(convertMs(ms).hours);
    refs.dataMinutes.innerHTML = addZero(convertMs(ms).minutes);
    refs.dataSeconds.innerHTML = addZero(convertMs(ms).seconds);
  } else {
    clearInterval(intervalId);
    // console.log('Остановили');
  }
}

function addZero(number) {
  return String(number).padStart(2, 0);
}

function startTimer() {
  startBtn.disabled = true;
  intervalId = setInterval(countDownTime, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
