// 1. Маємо масив чисел[2, 5, 6, 3, 7, 23, 45, 66, 15].Напишіть скрипт, який буде виводити в консоль всі елементи масиву, якщо число кратне 3 і 5 - виводимо "Кратне 3 і 5", "Кратне 3" - якщо число кратне лише 3, та "Кратне 5" - якщо кратне лише 5

const arr = [15, 5, 6, 3, 12, 36];
console.table(arr);
for (let i = 0; i <= arr.length; i++) {
  // check if the number is a multiple of 3 and 5
  if (Math.round(i % 3) === 0 && Math.round(i % 5) === 0) {
    console.log("fizzbuzz");
  } // check if the number is a multiple of 3
  else if (Math.round(i % 3) === 0) {
    console.log("fizz");
  } // check if the number is a multiple of 5
  else if (Math.round(i % 5) === 0) {
    console.log("buzz");
  } else {
    console.log(arr[i]);
  }
}

// Створіть масив з елементами 1, 2 та 3.
// Збільшіть другий елемент масиву на одиницю
const numbers = [1, 2, 3];
console.table(numbers);
// є різні способи
//можемо використати інкремент
numbers[1]++;

console.table(numbers);
