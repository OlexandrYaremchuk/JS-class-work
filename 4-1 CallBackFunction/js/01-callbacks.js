/*
 * Функція зворотного виклику (callback)
 * - Функція може прийматиінші функції, як параметри
 * - Функція, яка передається іншій функції, як аргумент називається
 *   «функцією зворотного (відкладеного) виклику» (callback-функція)
 * - Функція, яка приймає іншу функцію, як параметр або повертаєфункцію, як результат своєї роботи
 * називається  «функцією вищого порядку»
 */
//*? Колбек функції (callback functions) є важливою концепцією в JavaScript, оскільки дозволяють передавати функції як параметри іншим функціям і викликати їх у певному контексті. Ось деякі приклади, де колбек функції можуть бути корисними на практиці:

//*? Обробка подій: колбек функції можуть бути використані для обробки подій, таких як кліки, наведення миші, введення тексту та інших дій користувачів на веб-сторінці.

//стандартна реалізація. для прикладу.
const fnA = function (message) {
    console.log(message);
};
fnA('sdsds');

// const fnA = function (message, callback) {//*функція вищого порядку
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Це лог під час виклику fnB', number);//*collBack
// };

// fnA('qweqwe', fnB);

//*! Це все концепція. Для себе ви маєте зрозуміти головне. Це те що можна одну функцію передати в іншу, посилання на неї записується в параметр. ЇЇ можна викликати передаючи їй якісь аргументи. Оригінальна функція буде викликана з цими аргументами
//*! Ваша задача, розібрати та запамятати синтаксис, та навчитись передавати функцію в іншу функцію, поки вас не має цікавити, а якщо один аргумент, а якщо два і тд.

/*
 * функція doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

const add = function (x, y) {
    return x + y;
};

doMath(2, 3, add);

//колбек функції можуть бути анонімними. В даному випадку ми маємо функцію, яка записана в змінну add. А можемо її записати і передати наступним чином. В змінні ми пишемо функції лише тоді, коли ми хочемо використовувати їх багато раз.
doMath(2, 3, function (x, y) {
    // Що це? Це літерал функції. Це інлайн функція. Ми її використовуємо в тих випадках, коли цб функцію ми не плануємо використовувати далі в коді.
    return x + y;
});

// doMath(2, 3, function (x, y  ) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

/*
 * Відкладений виклик : реєстрація подій
 */

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log('Клік по кнопці' + Date.now());
};

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Відкладений виклик: геолокація
 */

const onGetPositionSuccess = function (position) {
    console.log('Це виклик onGetPositionSuccess');
    console.log(position);
};

const onGetPositionError = function (error) {
    console.log('Це виклик onGetPositionError');
    console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

/*
 * Відкладений виклик: інтервали
 */

const callback = function () {
    console.log('Через 2 секунди всередині колбека в таймауті');
};

// console.log('В коді перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коді після таймаута');

/*
 * Відкладений виклик : http-запит
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
    console.log(
        'Виклик функції onRequestSuccess після успішної відповіді  бекенда',
    );
    console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фільтр
 */

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);
        //тепер перевіряємо пройшов чи ні тест кожен елемент масиву відповідно до ітерацій
        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. потрібно передати функцію
// 2. функція отримує елемент масива
// 3. якщо елемент масива задовільняє умову то функція поверне true
// 3. якщо елемент масива НЕ задовільнить умову то функція поверне false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

// Задача.Нам маємо масив з фруктами, який включає обʼєкт з наступними властивостями, назва, к - ть, свіжість.Нам потрібно відфільтрувати масив та вивести лише ті фрукти, кількість яких є > 120
// Маємо отримати результат:
// [
//     { name: '🍎', quantity: 200, isFresh: true },
//     { name: '🍇', quantity: 150, isFresh: false },
// ];

const fruits = [
    { name: '🍎', quantity: 200, isFresh: true },
    { name: '🍇', quantity: 150, isFresh: false },
    { name: '🍌', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);
