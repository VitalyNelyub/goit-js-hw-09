import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const inputFirstDelay = document.querySelector('input[name=delay]');
const inputStepDelay = document.querySelector('input[name=step]');
const inputAmountCreatePromise = document.querySelector('input[name=amount]');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  let delay = inputFirstDelay.value;

  e.preventDefault();

  for (let i = 1; i <= inputAmountCreatePromise.value; i++) {
    let position = i;

    createPromise(position, delay);
    delay = Number(delay) + Number(inputStepDelay.value);
  }
}

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}
