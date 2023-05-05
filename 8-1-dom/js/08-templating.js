/*
 * Властивість innerHTML
 * - читання
 * - запис
 */

const titleEl = document.querySelector('.title');

console.log(titleEl.textContent); //поверне весть текстовий контент без вкладених тегів
console.log(titleEl.innerHTML); //поверне текстовий контент з вкладеними тегами

titleEl.innerHTML = 'adasdasd'; // коли пишемо текст він вносить як тест коли пишесо теги то кампілятор бачить що то тег і ставить туди куди треба.

titleEl.innerHTML = '<a href="">Це посилання )</a>';

// Плюс в тому що за допомогою innerHTML легко очистити контент тега
titleEl.innerHTML = ''; //очистака значення елемента
//*! Рекомендація. Використовуйте innerHTML лише в тому випадку, коли вам потрібно або очистити значення елемента або щось записати не змінюючи старе.
// titleEl.innerHTML += '<a href="">Це посилання )</a>';
// Це погана практика і так робити не можна. Чому? ТОму що в такому випадку innerHTML стирає старий код і перезаписує новий. Якщо у вас багато такого коду то це дуже сильно впливає на оптимізацію сторінки
/*
 * Вставка розмітки з insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Це посилання)</a>',
);
