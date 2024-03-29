/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки :)';
// console.log(titleEl);

// document.body.appendChild(titleEl);// додає елемент в кінець

/*
 * Створюємо зображенння
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);// додає елемент в кінець

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
navEl.insertBefore(navItemEl, navEl.lastElementChild);
navEl.insertBefore(navItemEl, navEl.children[2]); // перед третім елементом
navEl.insertBefore(navItemEl, navEl.children[1]); // перед другим елементом

//Для чого нам створювати динамічно елементи верстки через джс. Як правило через джс створюються елементи які нам приходять з бек-енда, а не статично відображені в html
