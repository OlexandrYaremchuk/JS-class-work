/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортує та змінює оригінальний масив
 * - По дефолту:
 *    - сортує по зростаню
 *    - приводить елементи до строки та сортує по [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються в відповідності з значенням яке повертається
 *  - якщо compareFunction(A, B) менше 0, сортування поставить  A перед B
 *  - якщо compareFunction(A, B) більше 0, сортування поставить B перед A
 *  - якщо compareFunction(A, B) поверне 0, сортування залишить A та B на незміних позиціях по відношенню один до одного, але відсортує по відношенню до всіх інших елементів.
 */

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

/*
 * Як зробити копію масива, щоб не сортувати оригінальний
 * - Array.prototype.slice()
 * - Операція spread
 */

const descSortedNumbers = [...numbers].sort((a, b) => b - a);
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/*
 * Сортування складних типів
 */
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// По тривалості гри времени
const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
// console.table(sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
// console.table(sortedByWorstPlayers);

const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});

console.table(byName);

// Задача;
// Дано масив об'єктів, який містить інформацію про книги: назву, автора та рік видання. Потрібно знайти всі книги, які були видані після 2000 року, відсортувати їх за роком видання в порядку зростання та повернути їхні назви.

// Вхідні дані: масив об'єктів книг

// Вихідні дані: масив назв книг, які були видані після 2000 року та відсортовані за роком видання в порядку зростання.

// Маємо отримати:
// ['The Da Vinci Code', 'The Girl with the Dragon Tattoo', 'The Hunger Games']
let books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
    {
        title: 'The Girl with the Dragon Tattoo',
        author: 'Stieg Larsson',
        year: 2005,
    },
];

let titles = books
    .filter(book => book.year > 2000)
    .sort((a, b) => a.year - b.year)
    .map(book => book.title);

console.log(titles);
