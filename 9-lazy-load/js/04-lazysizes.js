/*
* Бібліотека lazysizes - https://cdnjs.com
* Цікава інфа для прочитання, про те як працює браузер з зображеннями. 
https://web.dev/browser-level-image-lazy-loading/
* - feature detection
*
*/
// Але є одна проблема. Яка? Завжди якась нативна штука буде краще працювати, якщо вона вшита в браузер ніж та яка написана в бібліотеці. Ну так, тому що розробники браузера краще знають яким чином розробити якесь рішеня щоб воно працювало добре в їх в браузері.
// Отже нам потрібно зробити, щоб коли браузер підтримує допустимо lazyload? ми в src додамо дані в датуб якщо ні то рідключимо скрипт з бібліотекою до файлу. В першу чергу нам потріно визанчити, чи підтримує браузер

if ('loading' in HTMLImageElement.prototype) {
  console.log('Браузер підтримує lazyload');
  addSrcAttrToLazyImages();
} else {
  console.log('Браузер НЕ підтримує lazyload');
  addLazySizesScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');

///
lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(evt) {
  console.log('Зображення завантажилось');
  evt.target.classList.add('appear');
}
////

function addLazySizesScript() {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
  script.integrity =
    'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
  script.crossOrigin = 'anonymous';

  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}
