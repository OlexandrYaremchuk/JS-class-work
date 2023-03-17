// Напишіть функцію calculateAverage(), яка приймає довільну кількість аргументів та повертає їх середнє значення. Всі аргументи числа.

// Приклад, якщо нам приходить масив
// const arr = [1, 2, 4, 65, 342, 56, 78, 334, 66, 22];

// function calculateAverage(args) {
//   let sum = 0;
//   for (const value of args) {
//     sum += value;
//   }
//   console.log(sum);
//   const average = sum / args.length;
//   return average;
// }

// console.log(calculateAverage(arr));

// Приклад, якщо нам приходить набір чисел Нам в даному випаку його потріно збирати. Збираємо за допомогою rest

function calculateAverage(...args) {
  let sum = 0;
  for (const value of args) {
    sum += value;
  }
  console.log(sum);
  const average = sum / args.length;
  return average;
}

console.log(calculateAverage(1, 2, 4, 65, 342, 56, 78, 334, 66, 22));

// Метод reduce()
const arr = [1, 2, 4, 65, 342, 56, 78, 334, 66, 22];
const sum = arr.reduce(function (total, amount) {
  return total + amount;
});
const average = sum / arr.length;
console.log(average);

// Яка технологія використання: reduce використовується в тих випадках коли нам потрібно додати всі числа масиву.
// Як використовувати:

//*! Как использовать:
// В этом примере reduce() принимает два параметра, total и число с которым сейчас идёт работа.
// Метод проходится по каждому числу в массиве, как бы это было с циклом for.
// Когда цикл только начинается, total имеет значение первого числа с начала массива (29.76), а числом в обработке становится следующее по этому же массиву число (41.85).
// Конкретно в этом примере, нам надо прибавить настоящее число к total.
// Такое вычисление повторяется для каждого числа в массиве и каждый раз настоящее число меняется на следующее число в массиве справа.
// Когда уже нет чисел в массиве, метод отдаёт значение total.
