//Пошук елемента. Напиши функцію findeLargestNumber(numbers), яка шукає найбільше число в масиві

const findeLargestNumber = function (numbers) {
  let largestNumber = numbers[0];
  for (const number of numbers) {
    if (number > largestNumber) {
      largestNumber = number
    }
  }
  return largestNumber
};

console.log(findeLargestNumber([12, 5, 7, 25, 3, 5, 1]));
console.log(findeLargestNumber([123, 15, 27, 25, 23, 154, 21]));
