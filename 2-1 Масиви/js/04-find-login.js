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
const loginToFind = 'k1widab3st1';
// let message = '`Користувач ${loginToFind} не існує.`'

// for (let i = 0; i < logins.length; i += 1) {
//   // console.log(logins[i]);
//   // const login = logins[i];
//   if (logins[i] === loginToFind) {
//     // console.log(`Користувач ${logins[i]} знайдено`);
//     message = `Користувач ${logins[i]} знайдено`
//   }

// }
// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${login} знайдено`
//   }
// }

const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено` : `Користувач ${loginToFind} не існує.`

console.log(message);
