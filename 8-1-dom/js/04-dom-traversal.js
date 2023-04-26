/*
 * Властивості навігації по DOM-вузлам (взяти список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */

const navEl = document.querySelector('.site-nav');

// const firstNavItemEl = navEl.querySelector('.site-nav__item'); це все одно що .site-nav__link[href='/portfolio']
const firstNavItemEl = navEl.firstElementChild;
console.log(firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);
