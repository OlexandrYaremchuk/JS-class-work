/*
 * Напиши функцію findLogin(allLogins, login) для пошуку логіна ʼ
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдений.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const findLog = 'm4ngoDoge12';

const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `Користувач ${loginToFind} знайдений`;
    }
  }
  return `Користувач ${loginToFind} не знайдений`;
};

// console.log(findLogin(logins, findLog));

const findLogin2 = function (allLogins, login) {
  return allLogins.includes(login)
    ? `Користувач ${findLog} знайдений`
    : `Користувач ${findLog} не знайдений`;
};

console.log(findLogin(logins, findLog));
console.log(findLogin2(logins, findLog));
