//Пошук елемента. Напиши функцію findeLargestNumber(numbers), яка шукає найбільше число в масиві

const findeLargestNumber = function (numbers) {
  let largestNumber = numbers[0];
  for (const number of numbers) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return largestNumber;
};

console.log(findeLargestNumber([2, 17, 94, 1, 23, 37]));
console.log(findeLargestNumber([49, 4, 83, 7, 12, 137]));
