// Напиши функцію getMinNumber(), яка приймає масив чисел [22,56,23,87,21,10] та повертає найменше

const arr = [22, 56, 23, 87, 21, 10];
function getMinNumber(arr) {
  const minNumber = Math.min(...arr);
  return minNumber;
}

console.log(getMinNumber(arr));
