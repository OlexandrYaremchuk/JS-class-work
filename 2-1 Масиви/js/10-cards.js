/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];

console.table(cards);

/*
 * Видалення (по індексу), метод indexOf()
 */

// const cardToRemove = 'Картка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

/*
 * Додавання (по індексу)
 */
// const cardToInsert = 'Картка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

/*
 * Оновлення (по індексу)
 */
const cardToUpdate = 'Картка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Оновлена картка-4');

console.table(cards);
