/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементно перебирає оригінальний масив
 * - Нічого не повертає
 * - Заміняє класичний for, якщо не потрібно переривати цикл
 */

const numbers = [5, 10, 15, 20, 25];
// Для совбеза. в метод по синтаксису передають 2 аргументи. Перший це колбек, другий це обєкт в контексті, якого цей колбек буде викликатись. Для роботи не потрібно. Для совбеза можливо

numbers.forEach(
  function (number, index, array) {
    console.log('number', number);
    console.log(this);
  },
  { a: 5, b: 10 },
);

//як правило по шаблону в аргументах колбека лежить три параметри number, index. array. Як правило ваша функція буде виглядати без index та array. Вони практично ніколи не використовуються
numbers.forEach(function (number) {
  console.log('number', number);
});

console.log(numbers);
