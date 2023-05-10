/*
 * - Подія submit
 * - Дії Браузера по замовчуванню
 * - Властивість elements
 * - Клас FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  console.log(event);
  event.preventDefault();

  // const formElements = event.currentTarget.elements;
  // console.dir(formElements);
  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;
  // console.log(mail, password, subscription);
  // const formData = { mail, password, subscription }; //  типу створюємо обʼєкт і відправляємо дані на сервер.
  // А уявіть, що у вас 50 полів з даними, і ви будете окремо збирати всі, це не зручно. Отде такий метод можна використовувати тоді коли вам потрібно отримати певне значення полі і попрацювати з ним але не для масового опрацювання.

  // Для масової роботи є класна штука, як FormData - клас.
  const formData = new FormData(event.currentTarget); //створює новий екземпляр на основі класа FormData

  console.log(formData); //В консолі ми баимо пустий обʼєкт. Новачки через це і збивають на нього. А інструмент класний. Нам всього лиш потрібно зайти в прото та побачити що там є forEach, проте це не той що метод, це одноіменна назва. Він збирає в себе всі дані з нашої форми. В такому вигляді ми можемо відправляти наші дані на сервер. ЩОб переконатись що там, виведемо в консоль

  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
