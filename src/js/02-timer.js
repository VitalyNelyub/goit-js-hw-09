import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const calendar = document.getElementById('datetime-picker');
const timer = document.querySelector('.timer');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

const date = new Date();

// let ms = date - selectedDates[0].getTime();
// console.log(ms);

console.log(date.getTime());

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date().getTime();
    const currentData = selectedDates[0].getTime();
    if (currentData <= now) {
      window.alert('Please choose a date in the future');
      console.log('ХЕРА ТЕБЕ');
    } else if (currentData > now) {
      startBtn.disabled = false;
      console.log('ЗАЕБИСЬ');
      // calendar.addEventListener('change', valueTime);
      // valueTime();
    }
  },
});

function valueTime() {
  calendar.addEventListener('change', value); 
  value()
  // console.log('ГДЕ ЗНАЧЕНИЕ?');
}

function value() {
  console.log(currentData);
}





// let intervalId = setInterval(counterToTime, 1000);

// startBtn.addEventListener('click', startTimer);

// function startTimer() {
//   startBtn.disabled = true;
//   // intervalId = setInterval(countDownTimeToNY, 1000);
// }

function counterToTime() {
  const now = Date.now();
  // const now = new Date().getTime();
  const diff = countDownDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timer.textContent = `${days} d. ${addZero(hours)} h. ${addZero(
    minutes
  )} m. ${addZero(seconds)} s.`;
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

console.log(convertMs(1675286220000 - 1675200136272));

//  onClose: function(selectedDates, dateStr, instance)
