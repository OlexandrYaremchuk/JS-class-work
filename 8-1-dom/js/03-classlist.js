const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новмйКлас)
 * - contains(клас)
 */

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
navEl.classList.add('super-nav');

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log(navEl.classList);
  navEl.classList.add('super-nav', 'asdsad');
  navEl.classList.remove('asdsad');
});

magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('asdsad'); // він перемикає класи. Якщо його немає то додає, якщо є то видаляє. Це замість того, щоб не писати окремо add та окремо remove
});

magicBtn.addEventListener('click', () => {
  navEl.classList.replace('super-cool', 'ddfdfdd'); //бере старий клас та на його місце ставить новий
});

magicBtn.addEventListener('click', () => {
  navEl.classList.contains('super-cool'); //перевіряє що включає в собі елемент цей клас повертає тру або фолс
});

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
//згадуємо цсс. Правила роботи із селекторами
// допустимо в сцц у вас є a[href='/about']
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
