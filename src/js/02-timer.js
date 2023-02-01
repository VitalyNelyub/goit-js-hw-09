import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const calendar = document.getElementById('datetime-picker');
const timer = document.querySelector('.timer');
const startBtn = document.querySelector('button[data-start]');

let refs = {
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

startBtn.disabled = true;
// let intervalId = setInterval(startTimer, 1000);

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

function startTimer() {
  console.log('НАЖАЛИ');
  const ms = selectDate - now.getTime();
  console.log(convertMs(ms));
  refs.dataDays.innerHTML = convertMs(ms).days;
  refs.dataHours.innerHTML = convertMs(ms).hours;
  refs.dataMinutes.innerHTML = convertMs(ms).minutes;
  refs.dataSeconds.innerHTML = convertMs(ms).seconds;
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
