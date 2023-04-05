/*
 * Функція це приватний випадок обʼєкта -> ТИП ПОСИЛАННЯ
 */

console.log('[] === []: ', [] === []);
console.log('{} === {}: ', {} === {});
console.log(
    'function() {} === function() {}: ',
    function () {} === function () {},
);

const fnA = function () {
    console.log('hello');
};

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Де і як була оголошення функція НЕ МАЄ ЖОДНОГО ВПЛИВУ на контекст.
 *    - Контекст визначається В МОМЕНТ ВИКЛИКУ ФУНКЦІЇ, якщо він не привʼязаний явно.
 */

/*
 * Як метод обʼєкта. В контексті обʼєкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Виклик без контекста
 * - В строгому режимі  = undefined
 * - Не в строгому режимі = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Як метод обʼєкта, але оголошена як зовнішня функція.
 * В контексті обʼєкта.
 */

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag();

// const user = {
//     tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

/*
 * Виклик без контекста, але оголошена як метод обʼєкта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функціях
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action();
// };

// invokeAction(user.showTag);

/*
 * Тренуємось 1
 */

// const fn = function () {
//     console.log('fn -> this', this);
// };

// fn(); // Який this ???

/*
 * Тренуємось 2
 */

// const book = {
//     title: 'React for beginners',
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); // Який this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Який this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Який this ???

//* Завдання: Створіть об'єкт "продукт" з такими властивостями: назва продукту, ціна та кількість. Напишіть функцію "calculateTotalPrice()", яка розрахує загальну вартість продукту (ціна * кількість) та виведе результат в консоль. Далі створіть новий об'єкт "кошик" та додайте до нього два об'єкти "продукт" з різною ціною та кількістю. Використовуючи метод "calculateTotalPrice()" для об'єкта "кошик", розрахуйте загальну вартість всіх продуктів у кошику та виведіть її в консоль.
const product1 = {
    name: 'Футболка',
    price: 300,
    quantity: 2,
};

const product2 = {
    name: 'Джинси',
    price: 700,
    quantity: 1,
};

function calculateTotalPrice() {
    console.log(this.price * this.quantity);
}

const cart = {
    products: [product1, product2],
    calculateTotalPrice: function () {
        let totalPrice = 0;
        this.products.forEach(function (product) {
            totalPrice += product.price * product.quantity;
        });
        console.log(totalPrice);
    },
};

cart.calculateTotalPrice();

//* Задача. Напишіть функцію, яка містить у собі метод, що виводить в консоль значення поточного контексту (this). Викличте цю функцію з контекстом об'єкта, а потім з контекстом глобального об'єкта window.
function myFunction() {
    console.log(this);
}

let myObject = {
    name: 'John',
    sayHello: function () {
        console.log('Hello, my name is ' + this.name);
    },
};

myFunction(); // виведе контекст глобального об'єкту window
myObject.sayHello(); // виведе контекст об'єкту myObject

//* Задача. (Самі)
//* Створіть об'єкт car, який містить наступні властивості:

//* make: рядок, що містить назву виробника автомобіля.
//* model: рядок, що містить назву моделі автомобіля.
//* year: число, що містить рік випуску автомобіля.
//* drive: метод, який виводить рядок в консоль, що містить назву виробника та моделі автомобіля, а також повідомлення "Driving forward!".
//* У методі drive, замість того, щоб просто виводити назву виробника та моделі автомобіля, використайте ключове слово this. Виберіть правильний контекст this, щоб можна було отримати доступ до властивостей make та model об'єкта car.

let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    drive: function () {
        console.log(this.make + ' ' + this.model + ' Driving forward!');
    },
};

car.drive(); // Виведе "Toyota Camry Driving forward!"

// Задача.
// Напишіть функцію, яка повертає об'єкт з методами для виконання арифметичних операцій з двома числами. Кожен метод повинен виконувати відповідну операцію та повертати результат.

// Використовуйте ключове слово this для доступу до властивостей об'єкту.

// Опис рішення:

// Створіть функцію, яка приймає два параметри: num1 та num2, і створює об'єкт з методами для арифметичних операцій.
// Встановіть властивості num1 та num2 об'єкту з параметрів функції.
// Створіть метод add(), який додає num1 та num2.
// Створіть метод subtract(), який віднімає num2 від num1.
// Створіть метод multiply(), який множить num1 на num2.
// Створіть метод divide(), який ділить num1 на num2.
// Поверніть створений об'єкт з методами.
function ArithmeticOperations(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.add = function () {
        return this.num1 + this.num2;
    };

    this.subtract = function () {
        return this.num1 - this.num2;
    };

    this.multiply = function () {
        return this.num1 * this.num2;
    };

    this.divide = function () {
        return this.num1 / this.num2;
    };
}

const calculator = new ArithmeticOperations(10, 5);
console.log(calculator.add()); // 15
console.log(calculator.subtract()); // 5
console.log(calculator.multiply()); // 50
console.log(calculator.divide()); // 2

// Задача.
// Створіть об'єкт car, який містить властивості марка, модель, рік випуску, швидкість.

// Створіть метод вивестиІнформацію, який виводить інформацію про автомобіль на екран у форматі Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; Швидкість: <швидкість>.

// Створіть метод поїхати, який приймає вхідний параметр швидкість та встановлює властивість швидкість автомобілю на задане значення.

// Використовуйте ключове слово this для доступу до властивостей об'єкту.

// Опис рішення:

// Створіть об'єкт car з властивостями марка, модель, рік випуску та швидкість.
// Створіть метод вивестиІнформацію(), який виводить інформацію про автомобіль на екран у форматі Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; Швидкість: <швидкість>.
// Створіть метод поїхати(швидкість), який приймає вхідний параметр швидкість та встановлює властивість швидкість автомобілю на задане значення.
// Використайте ключове слово this для доступу до властивостей об'єкту в методах вивестиІнформацію() та поїхати(швидкість).
const car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    speed: 0,

    showInfo: function () {
        console.log(
            `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year}; Швидкість: ${this.speed}`,
        );
    },

    go: function (speed) {
        this.speed = speed;
    },
};

car1.showInfo(); // Виведе "Марка: Toyota; Модель: Camry; Рік випуску: 2021; Швидкість: 0" на екран.
car1.go(100); // Встановить швидкість автомобілю
car1.showInfo(); // Виведе "Марка: Toyota; Модель: Camry; Рік випуску: 2021; Швидкість: 0" на екран.

Задача. 