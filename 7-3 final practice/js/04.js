// Напишіть функцію, яка приймає масив чисел та повертає масив з числами, які більші за середнє арифметичне значення всіх чисел в масиві.

const numbers = [4, 7, 1, 9, 2, 5, 8];

function isNumber(numbers) {
  // const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  const average = Math.round(
    numbers.reduce((acc, curr) => acc + curr) / numbers.length
  );
  console.log(average);
  return numbers.filter((number) => number > average);
}

console.log(isNumber(numbers));
