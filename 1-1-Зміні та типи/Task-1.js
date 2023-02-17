// Задача 1:
// вивести в консоль ім'я, а якщо імені немає, то прізвище, в іншому випадку, відсутність обох значень виводить рядок "undefined name"
let first_name = 'Tim';
let last_name = 'Burton';
// console.log(first_name || last_name || 'undefined name'); // Виведе  в консоль "Tim"

first_name = '';
last_name = 'Pitt';
// console.log(first_name || last_name || 'undefined name'); // Виведе в консоль "Pitt"

// Задача 2
// Маємо змінні firstName, lastName та nickName, усі необов’язкові (тобто вони можуть бути невизначеними або мати хибні значення).
// В alert необхідно вивести слово "СуперКодер"

let firstName = '';
let lastName = '';
let nickName = 'СуперКодер';

// alert(firstName || lastName || nickName);

// Задача 3
// Виведіть в alert повідомлення, що значення змінної "х" більша за "y". "x" та 'y' отримуємо через prompt. Використовуючи логічні оператори

// let x = Number(prompt('Enter number 1'));
// let y = Number(prompt('Enter number 2'));

// x > y && alert(`${x} більше за ${y}`);

// Задача 4
// Напишіть код, щоб перевірити, чи age (отримуємо через prompt) знаходиться між 14 та 90 включно.
// Включно означає, що age можу досягти країв 14 або 90.
// Результат виведіть в alert

// let age = Number(prompt('Enter your age'));
// const number1 = 14;
// const number2 = 90;

// alert(age >= number1 && age <= number2);

// Задача 4
// Напишіть код, щоб перевірити, чи age (отримуємо через prompt) знаходиться поза інтервалом від 14 та 90 включно.
// Включно означає, що age можу досягти країв 14 або 90.
// Результат виведіть в alert
// let age = Number(prompt('Enter your age'));
// const number1 = 14;
// const number2 = 90;

// alert(age <= number1 || age >= number2);
