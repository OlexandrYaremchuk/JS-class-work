/*
 * Напиши скрипт пошуку найменшого числа в масиві,
 * при умові, що числа унікальні (не повторяюються).
 */


const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallNumber = numbers[0]

for (const number of numbers) {
  if (number < smallNumber) {
    smallNumber = number
  }
}
console.log(smallNumber);

