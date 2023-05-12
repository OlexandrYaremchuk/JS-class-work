const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  sendDataBtn: document.querySelector('[data-action="send-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  login: document.querySelector('[type="text"]'),
  mail: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
  checkbox: document.querySelector('[type="checkbox"]'),
  form: document.querySelector('.formBox'),
};

// open and close modal
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
    console.log('Клікнули по бекдропу!!!!');
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

// anable onSendBtnClick

refs.checkbox.addEventListener('change', onLicenseChange);
function onLicenseChange(event) {
  console.log(event.currentTarget.checked); // повертає тру або волс. така ж сама властивість, як і value

  refs.sendDataBtn.disabled = !event.currentTarget.checked; //4
}

// input
refs.sendDataBtn.addEventListener('click', onFormSubmit);
function onFormSubmit(event) {
  console.log(event);
  event.preventDefault();
  const formData = new FormData(refs.form);
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
  //   refs.login.value = '';
  //   refs.mail.value = '';
  //   refs.password.value = '';
  clearInput();
  refs.checkbox.checked = false;
}

function clearInput(event) {
  refs.login.value = '';
  refs.mail.value = '';
  refs.password.value = '';
}
