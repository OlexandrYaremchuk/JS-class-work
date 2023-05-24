/*
 * Ліниве завантаження зображення (концепція)
 * - нативна підтримка
 * -https://caniuse.com/?search=loading - перевірка підтримуваності технологій
 * loading = "lazu"
 * - подія завантаженя зображення
 */

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded);

  // image.addEventListener('load', onImageLoaded, { once: true }); once служить для того, щоб наші зареєстровані слухачі подій не весіли постійно. Якщо у нас їх 1000 - 5000 це не добре. Тому є такий атрибут, третій параметр до ліснера, який каже що завантажся один раз, а потім самовидались. Тобто нам не потрібні вже remuve і тд. Тобто дослівно, ми кажемо що цю подію ми хочемо прослухити лише один раз
});

function onImageLoaded(evt) {
  console.log('Зображення завантажилось');
  evt.target.classList.add('appear');
}
