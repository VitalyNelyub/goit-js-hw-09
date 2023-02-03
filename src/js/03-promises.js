import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btnSubmit = document.querySelector('button[type=submit]');

const inputFirstDelay = document.querySelector('input[name=delay]');
const inputStepDelay = document.querySelector('input[name=step]');
const inputAmountCreatePromise = document.querySelector('input[name=amount]');

// form.addEventListener('change', dataFotmInput);
form.addEventListener('submit', submitForm);

// let inputValues = [];

// function dataFotmInput(e) {
//   inputValues.push(e.target.value);
//   console.log(e.target.value);
// }

function submitForm(e) {
  // console.log(e);
  // console.log(inputFirstDelay.value);
  let delay = inputFirstDelay.value;
  // console.log(inputStepDelay.value);
  // console.log(inputAmountCreatePromise.value);
  e.preventDefault();
  for (let i = 1; i < inputAmountCreatePromise.value; i++) {
    let position = i;
    console.log(position);
    let delay = inputFirstDelay.value + inputStepDelay.value;
    console.log(delay);
    createPromise(position, delay);
  }
}

// console.log(inputValues);

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}

// function createPromise(position, delay) {
//   setTimeout(() => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }
//   }, delay);
// }
