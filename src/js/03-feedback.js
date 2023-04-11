import { throttle } from "lodash";
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;
reloadPage();

function onInput(evt) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function reloadPage() {
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (!email.value === '' || !message.value === '') {
    localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
  data = {};
  }

}
