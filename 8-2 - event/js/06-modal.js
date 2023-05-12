/*
 * 1. Відкрити та закрити по кнопці
 * 2. Закрити по кліку в бекдроп: onBackDropClick
 * 3. Закрити по ESC: onEscapeKeypress
 *
 * В CSS є клас show-modal, який необхідно додати на body при відкриті модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
<<<<<<< HEAD
    console.log('Клікнули по бекдропу!!!!');
=======
    console.log('Кликнули именно в бекдроп!!!!');
>>>>>>> 2aaccafa104a5c1ee2a1333319c7ebff924329f6
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
