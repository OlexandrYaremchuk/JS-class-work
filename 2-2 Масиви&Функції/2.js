// 1. Створіть масив style з двома елементами "Джаз" та "Блюз"

let style = ["Джаз", "Блюз"];

// 2. Додайте Рок-н-ролл в кінець масиву

style.push("Рок-н-ролл");

// 3. Замініть значення в середині на "Класика". Код має працювати для масиву будь-якої довжини
const midleElementIndex = Math.ceil(style.length / 2 - 1); //ділимо масив пополам. ceil заукруглює в більшу сторону
console.log(midleElementIndex);
// style[midleElementIndex] = "Класика"; // самий простий спосіб

style.splice(midleElementIndex, 1, "Класика"); //приміняємо splice,
// 4. Видаліть перший елемент та виведіть його в консоль
const deletedItem = style.shift();
console.log(deletedItem);

// 5. Вставте "Реп" та "Рок" на початок масиву
style.unshift("Реп", "Рок");

//
console.table(style);
