// 1. Класи
// site-nav__item
// Додати йому клас.
const elementref = document.querySelector('.site-nav__item');

elementref.classList.add('listPosition');
// Видалити клас
// elementref.classList.remove('listPosition');
// Перевірити наявність в нього певного класа

const hasClass = elementref.classList.contains('.listPosition');
console.log(hasClass);

// Додати йому клас, якщо його немає та видалити якщо є.
setInterval(() => {
  elementref.classList.toggle('listPosition');
}, 1978);
// Дізнатись кількість класів
const classesCount = elementref.classList.value.split(' ').length;
console.log(classesCount);
// ВИведіть послідосно в консоль його класи.
elementref.classList.value.split(' ').forEach(cl => console.log(cl));
