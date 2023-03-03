/*
 * Довжина  рядка, властивість length
 */
const message = 'В цьому рядку 25 символів.';
// console.log(message.length);

/*
 * Конкатенація рядків
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;

// console.log(fullName);

/*
 * Напиши скрипт який виведе рядок в форматі:
 * Гість x y заселяється в номер q» категорії b,
 * підставляємо замість  x y q b значення зміних
 */

const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гість ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяється в ' +
//   type +
//   ' номер ' +
//   room;

const welcomeMsg = `Гість ${firstName} ${lastName} поселяється в ${type} номер ${room}`;
// console.log(welcomeMsg);

/*
 *  Шаблоні рядки  (template strings)
 * Повертаємось до формування рядка заселення в готель
 */

const quantity = 15;
const orderMsg = `Ви замовляєте ${quantity} холодильників.`;

// console.log(orderMsg);

/*
 * Нормалізація з методом toLowerCase()
 */

// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);

let brand = 'SamSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);

/*
 * Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, даю тобі мільйон!';
const string2 = 'Найбільш великий РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

//*! Особливості

// Апостроф
const backticks = "Це it's з інформацією про клієнта";
// const backticks = "Це it's з інформацією про клієнта";
// console.log(backticks);

// Перенос на наступний рядок
const list = 'Mark:\n * John\n * Pele\n * Mary\n';
// console.log(list);

// Склад рядка  в JS змінити неможливою Неможливо взяти символ посередині рядка та замінити його.
// Як тільки рядок створенно, він такий назавжди.Проте можна створити новий рядок та записати його в туж саму зміну
// замість старого рядку
let str = 'Hi';
str = 'P' + str[1]; //1 - символ, який залишаємо (додаємо в новий рядок)
// console.log(str);

// *? Задача;
// *? Маємо наступні зміні. При необхідності можете створювати додаткові

// *? const school = 'ItStep'
// *? const groupNumber = "Pront-end22"

// *? Необхідно в консоль вивести наступну фразу:
// *? Мене звати Віктор.
// *? Я навчаюсь в академії ItStep, групі "Pront-end22". Зверніть увагу
// *? В назві групи помилка, її потрібно виправити шляхлм створення новго рядка
// Assign variables
const studentName = 'Viktor';
const school = 'ItStep';
let groupNumber = 'Pront-end22';

// Replace the first letter of groupNumber with 'F'
groupNumber = groupNumber.replace('P', 'F');

// Format and print the result
const result = `Мене звати ${studentName}.Я навчаюсь в академії ${school}, в групі ${groupNumber}`;
console.log(result);
