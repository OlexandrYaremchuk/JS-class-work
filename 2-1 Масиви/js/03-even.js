/*
 * Напиши скрипт який підраховує суму всіх парних чисел в масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
let total1 = 0;

// for
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
  if (number % 2 === 0) {
    console.log('парне');
    total += number;
  }
}
console.log(total);

// for of
for (const number of numbers) {
  if (number % 2 === 0) {
    // console.log('парне');
    total1 += number;
  }
}
console.log(total1);
