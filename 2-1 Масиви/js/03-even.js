/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

// 1 змінна  тотал

// 2 перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//*! 3 на кожній ітерації перевірити елемент на парність
// if (number % 2 === 0) {
//   console.log('Четное!!!!');

//*! 4 если четный плюсуем к тотал
//   total += number;
// }
// }

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное!!!!`);
//     total += number;
//   }
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log('Цю ітерацію потрібно пропустити', number);
    continue;
  }

  console.log(`${number} - парне!!!!`);
  total += number;
}

console.log('Total: ', total);
