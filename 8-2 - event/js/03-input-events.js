/*
 * Патерн «Обʼєкт посилань»
 *
 * Події
 * - focus и blur
 * - input и change
 * - Чекбокси та властивість checked
 */

const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const licenseCheckbox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');

// можна оформити як обєкт. просто так зручно і працювати з кодом і читати його. Це не обовязково

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange); //1

refs.licenseCheckbox.addEventListener('change', onLicenseChange); //3

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус - подія blur');
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value; //2
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked); // повертає тру або волс. така ж сама властивість, як і value
  console.dir(refs.btn.disabled);

  refs.btn.disabled = !event.currentTarget.checked; //4
}
