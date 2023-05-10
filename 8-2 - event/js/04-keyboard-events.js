/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress); //перше куди потрібно навчитись вішати слухач подій клавіатури це на вікно браузера
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  console.log(event);
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
