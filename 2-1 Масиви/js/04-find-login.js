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

// let message = `Користувач ${loginToFind} не існує`;
//*! for
// for (let i = 0; i < logins.length; i++) {
//   const login = logins[i];
//   //   console.log('Login:', login);
//   if (login === loginToFind) {
//     // console.log('Ура, рівні, знайшли!!!');
//     message = `Кoристувача ${loginToFind} знайдено`;
//     break;
//   }
// }

// console.log(message);
//*! for of
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Кoристувача ${loginToFind} знайдено`;
//     break;
//   }
// }
// console.log(message);

const message = logins.includes(loginToFind)
  ? `Кoристувача ${loginToFind} знайдено`
  : `Користувач ${loginToFind} не існує`;

console.log(message);
