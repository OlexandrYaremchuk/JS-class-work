/*
 * Функції
 * - Функціональні вирази
 * - Аргументи та параметри
 * - Повернення значень
 */

// const add = function (x, y) {
//   // console.log(x);
//   // console.log(y);
//   // console.log('Виконується функція add');
//   const res = x + y;
//   return res;
// };

// add(2, 3);
// console.log(add(5, 3));

// // function add1(x, y) {
// //   console.log(x);
// //   console.log(y);
// //   return;
// // }

// const r1 = add(2, 10);
// console.log('r1:', r1);

// const r2 = add(30, 50);
// console.log('r2:', r2);

// const r3 = add(10, 15);
// console.log('r3:', r3);

// const fn = function (qwe) {
//   console.log(qwe);
//   // console.log(1);
//   // console.log(2);
//   if (qwe < 50) {
//     return 'менше ніж 50';
//   }
//   return 'Більше ніж 50';
// };

// console.log('Результат функії:', fn(10));
// console.log('Результат функії:', fn(1000));

const fnA = function () {
  console.log('Виконується функція А');
};
const fnB = function () {
  console.log('Виконується функція B');
};
const fnC = function () {
  console.log('Виконується функція C');
};

console.log('лог перед виконанням функції А');
fnA();
console.log('лог після виконання функції А');
console.log('лог перед викликом функції В');
fnC();
console.log('лог після виконання функції В');
console.log('лог перед виконанням функції С');
fnB();
console.log('лог після виконання функції С');
