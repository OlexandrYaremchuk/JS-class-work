/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення  'Користувач [логін] не існує.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() з тернарним оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';
// let message = `Користувач ${loginToFind} не існує.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, рівні!!!');
//     message = `Користувача ${loginToFind} знайдено.`;
//     break;
//   }
// }

// console.log(message);

// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, рівні!!!');
//     message = `Користувача ${loginToFind} знайдено.`;
//     break;
//   }
// }

// console.log(message);

const message = logins.includes(loginToFind)
  ? `Користувача ${loginToFind} знайдено.`
  : `Користувач ${loginToFind} не існує.`;

console.log(message);
