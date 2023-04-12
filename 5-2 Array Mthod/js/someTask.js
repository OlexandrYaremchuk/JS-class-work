//*1 У вас є масив, який містить числа. Необхідно знайти всі числа, які є парними і більшими за 10, і повернути їх у зворотньому порядку.

// Наприклад, масив: [5, 14, 8, 20, 3, 11, 17, 4]

// Відповідь: [20, 14]

// Для вирішення цієї задачі можна використовувати методи filter() та reverse(). Спочатку відфільтруємо парні числа, більші за 10, а потім повернемо результат у зворотньому порядку:
const numbers = [5, 14, 8, 20, 3, 11, 17, 4];

const filteredNumbers = numbers.filter(
    number => number > 10 && number % 2 === 0,
);
const reversedNumbers = filteredNumbers.reverse();

console.log(reversedNumbers); // [20, 14]

// В першому рядку ми створили масив чисел numbers. Далі ми використали метод filter() для того, щоб відфільтрувати тільки ті числа, які більші за 10 і парні. В результаті, змінна filteredNumbers містить масив [14, 20].

// Потім ми використали метод reverse() для зміни порядку елементів у масиві. У змінній reversedNumbers ми маємо результат в зворотньому порядку, тобто [20, 14].

//*2
// Дано масив чисел. Потрібно знайти суму всіх додатних чисел у масиві, які є кратними числу 3.

// Вхідні дані: масив чисел

// Вихідні дані: сума всіх додатних чисел у масиві, які є кратними числу 3.

// Приклад вхідних даних: [3, 5, -9, 7, 2, 8, 10, -6]

// Приклад вихідних даних: 9
let arr = [3, 5, -9, 7, 2, 8, 10, -6];

let sum = arr
    .filter(item => item > 0 && item % 3 === 0)
    .reduce((acc, item) => acc + item, 0);

console.log(sum);

// У цьому розв'язку ми використовуємо метод filter(), щоб отримати підмасив всіх додатних чисел, які кратні числу 3. Потім ми використовуємо метод reduce(), щоб просумувати ці числа і повернути суму.

//* 3
// Дано масив чисел. Потрібно визначити, чи є у ньому хоча б одне від'ємне число. Якщо є, то повернути масив, в якому кожен елемент масиву буде додатнім числом.

// Вхідні дані: масив чисел.

// Вихідні дані: масив додатніх чисел або повідомлення "No negative numbers found".

// Приклад вхідних даних:
// let arr = [3, -2, 5, 6, -8, 2];

let arr2 = [3, -2, 5, 6, -8, 2];

let positiveArr = arr2.filter(num => num >= 0);

if (positiveArr.length > 0) {
    console.log(positiveArr);
} else {
    console.log('No negative numbers found');
}
// У цьому розв'язку ми використовуємо метод filter(), який створює новий масив з елементів, які задовольняють певну умову. Тут ми створюємо новий масив з усіх додатніх чисел вхідного масиву. Якщо такі числа є, ми повертаємо новий масив з додатніми числами, в іншому випадку повертаємо повідомлення.