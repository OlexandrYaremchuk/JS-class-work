/*
 * Напиши скрипт вибору вартості готелю по кількості зірок.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Такої кількості зірок немає'
 */

// const stars = 1;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }

// console.log(price);

/*
 * Напиши скрипт вибору вартості готелю по кількості зірок.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такої кількості зірок немає');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такої кількості зірок немає');
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в зміній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * В зміну message записати повідомлення в залежності від поції.
 * - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кр'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде надіслана сьогодні'
 * - 'Вам зателефонує наш менеджер'
 */

//  1. створити змінні
const option = 1526;
let message = '';

// 2. зробити switch 1 2 3
// 3. В кожному кейсі записати в message рядок
switch (option) {
  case 1:
    message = 'Ви зможете забрати товар завтра з 12:00 в нашому офісі';
    break;

  case 2:
    message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
    break;

  case 3:
    message = 'Посилка буде відправлена сьогодні';
    break;

  default:
    message = 'Вам зателефонує наш менеджер';
}

// 4. зробити лог message
console.log(message);
