const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - будь-який валідний CSS-селектор
 *
 * Що повертають ?
 */

// const navEl = document.querySelector('ul');
// console.dir('navEl', navEl);

// const navEl = document.querySelector('li');
// console.log('navEl', navEl);

const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

// const navLinksEl = navEl.querySelectorAll('.site-nav__link');// поверне лише дочірні елементи

const navLinksEl = document.querySelectorAll('.site-nav__link'); //поверне всі елементи на сторінці
console.log('navLinksEl', navLinksEl);

/*
 * Document.querySelector* и Element.querySelector*
 */

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log('navEl', navEl);
  const navLinksEl = document.querySelectorAll('.site-nav__link'); //поверне всі елементи на сторінці
  console.log('navLinksEl', navLinksEl);
});
