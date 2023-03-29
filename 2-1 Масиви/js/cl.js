// const a = 'Hello';

// for (let i = 0; i < a.length; i += 1) {
//   console.log(i);
// }

//* Напиши скрипт, як рахує загальну суму зарплат працівників.
//  * К-ть працівників зберігається в змінній employees.
//  * Зарплата кожного співробітника це випадкове число від 500 до 5000
//  * Записати суму в зміну totalSalary та вивести в консоль

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;

// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`ЗП працівника номер ${i} - ${salary}`);
//   totalSalary += salary;
// }

// console.log(totalSalary);

//  * Напиши скрипт, який рахує суму всіх парних чисел,
//  * які входять в діапазон числ в змінних від min до max.
//  * Наприклад, якщо min=0 та max=5, то діапазон 0-5, і в ньому два парних числа - 2 и 4, їх сума 6.

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Парне', i);
//     total += i;

//     continue;
//   }
//   console.log('Не парне', i);
// }

// console.log(total);
