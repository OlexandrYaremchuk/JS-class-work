/*
 * Події.
 * - Створення та видалення слухачів
 * - Найменування колбеків для слухачів
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ідентичність посиланб колбеків
 * - Обʼєкт події
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вішаю слухача подій на цільову кнопку');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Знімаю слухача подій з цільової кнопки');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клік по цільовій кнопці');
}
