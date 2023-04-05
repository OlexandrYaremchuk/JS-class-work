/*
 * Напиши функцію findSmallesNumber(numbers) для пошуку найменшого числа масиву,
 * при умові, що числа унікальні (не повторюються).
 */

const findSmallesNumber = function (numbers = []) {
  // console.log(numbers);
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};

console.log(findSmallesNumber([4, 8, 12, -2, 15]));
console.log(findSmallesNumber([14, 8, 32, 12, 45]));
