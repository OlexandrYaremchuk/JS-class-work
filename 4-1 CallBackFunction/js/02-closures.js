/*
 * Функція результаттом своєї роботи може повертати іншу функцію.
 *
 * Повернута функція під час виклику буде мати доступ до всіх локальних змін (області видимості)
 * батьківської функциі (тої з якої її повернули),
 * це називається "замикання".
 */

const fnA = function (parameter) {
    const innerVariable = 'значення внутрішньої зміної функції fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Це виклик  innerFunction');
    };

    return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
 * Повар
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готує ${dish}`);
// };

// makeDish('Mango', 'пиріг');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлети');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'каву');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готує ${dish}`);
    };

    return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлети');
// mango('пиріг');

// const poly = makeSheff('Poly');

// console.dir(poly); //можем подивитись на чому замкнулась функція

// poly('чай');
// poly('омлет');

// console.dir(mango); //можем подивитись на чому замкнулась функція

//*! Це концепція. Щодня юзати ви її не будете але розуміти потрібно. Саме головне, якщо з якоїсь функції ви повертаєте іншу функцію, то при викликові ця функція буде мати доступ до всіх змінних своєї батьківської функції

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватні дані та функції - приховані реалізації, інтерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ти з дуба впав?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Фактична зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());
