import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const calendar = document.getElementById('datetime-picker');

console.dir(calendar);


flatpickr('#datetime-picker', {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
});
