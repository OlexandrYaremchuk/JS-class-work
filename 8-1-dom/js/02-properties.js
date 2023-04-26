const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Властивості елемента (hero)
 * - Зображеня
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
console.log(imageEl.src);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'Це новий кіт';

// magicBtn.addEventListener('click', () => {
//   const imageEl = document.querySelector('.hero__image');
//   // console.log('imageEl', imageEl);
//   console.log(imageEl.src);
//   imageEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
//   imageEl.alt = 'Це новий кіт';
// });

const heroTitleEl = document.querySelector('.hero__title');
// console.log('heroTitleEl', heroTitleEl);
// console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'Я мала котяра!';

/*
 * Атрибуты
 * - get(імя-атрибута)
 * console.log(imageEl.getAttribute('src'))
 * - set(імя-атрибута)
 * - remove(імя-атрибута)
 * imageEl.removeAttribute('src')
 * - has(імя-атрибута)
 * console.log(mageEl.hasAttribute('src')) // поверне тру або фолс, перевіряє є такий атрибут в елементі чи ні
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[2].dataset.action); //чому 2 тому що це масив
console.log(actions[2].getAttribute('data-action')); //це те ж саме але довший синтаксис

// що саме важливо зрозуміти що все в джс є обєкти. кожен img має властивість src ітд

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  // inputEl.value = 'qdqweqw';
});
