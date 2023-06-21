import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

populateTextarea();

/*
 * - Зупиняємо поведінку за замовчуванням
 * - Прибираємо повідомлення з сховища
 * - Лчищаємо форму
 */
function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

/*
 * - Отримуємо занчення поля
 * - Зберігаємо його в сховище
 * - Можна додати  throttle
 */
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

/*
 * - Отримуємо значення з сховища
 * - Якщо там щось було, оновлюємо DOM
 */
function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

// Додому
// Зробити так, щоб збурігало не лише повідомлення, а й імʼя. І все в одному обʼєкті

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
