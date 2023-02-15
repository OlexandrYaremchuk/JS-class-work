/*Логічні оператори або ||, та - &&, не - !

Логічне І (оператор &&)
Зупиняється на брехні false
Повертає те на чому зупинилось, тобто останій операнд

 * Напиши скрипт, який перевіряє входження числа
 * в відрізок позначений x1 и x2.
 *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */

const x1 = 10;
const x2 = 30;
const number = 45;

console.log(`Число ${number} попадає в проміжок до ${x1}? `, number < x1);

console.log(`Число ${number} попадає в проміжок ${x2}? `, number > x2);

const res1 = number > x1 && number < x2;

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true
console.log(`Число ${number} попадає в проміжок від ${x1} до ${x2}? `, res1);

const res2 = number < x1 || number > x2;

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false
console.log(
  `Число ${number} попадає в проміжок до ${x1} або після ${x2}? `,
  res2,
);

//*! Логічне НЕ(оператор!)
//*! - Робить інверсію (тобто дає оберенене значення) true > false i false > true

const a = 3;
const b = -2;

// console.log(!(a > 0 || b > 0));
