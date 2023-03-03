/*
 * Напиши функцію findLogin(allLogins, login) для пошуку логіна ʼ
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Користувач ${loginToFind} знайдений.`;
//     }
//   }

//   return `Користувач ${loginToFind} не знайдений.`;
// };

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдений.`
    : `Користувач ${loginToFind} не знайдений.`;
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));
