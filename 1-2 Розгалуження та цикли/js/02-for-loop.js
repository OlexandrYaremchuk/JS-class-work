/*
 * Цикл for
 */
// const a = 'Heloo'
// for (let i = 0; i < a.length; i += 1) {
//     console.log(i);
// }

// console.log('qweqwe');

/*
 * Pre-increment та Post-increment
 */

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let a = 10;
// const b = a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт, як рахує загальну суму зарплат працівників.
 * К-ть працівників зберігається в змінній employees.
 * Зарплата кожного співробітника це випадкове число від 500 до 5000
 * Записати суму в зміну totalSalary та вивести в консоль
 */
// const minSalary = 500
// const maxSalary = 5000

// const employees = 12
// let totalSalary = 0

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );
//     console.log(`ЗП праціника номер ${i} - ${salary}`);
//     totalSalary += salary
// }
// console.log(totalSalary);




/*
 * Напиши скрипт, який рахує суму всіх парних чисел,
 * які входять в діапазон числ в змінних від min до max.
 * Наприклад, якщо min=0 та max=5, то діапазон 0-5, і в ньому два парних числа - 2 и 4, їх сума 6.
 */
const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        console.log('Не парне:', i);
        continue
    }

    // console.log('парне', i);
    total += i
}

console.log('total', total);