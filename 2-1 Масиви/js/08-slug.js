/*
 * Робимо slug в URL з назви статті (наприклад на dev.to)
 * Заголовок статті складається лише з букв та пробілів
 *
 * - Нормалізуємо рядок
 * - Розбиваємо по словам
 * - Зшиваємо в рядок із роздільниками
 */

// Має вийти  top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework';

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
// console.log(words);

const slug = words.join('-');
// console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);
