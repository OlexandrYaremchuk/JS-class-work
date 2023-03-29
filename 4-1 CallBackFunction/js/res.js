// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     console.log(prop);
//     const newArray = [];

//     for (let product of arr) {
//         if (product.name === undefined) break;
//         newArray.push(product[prop]);
//     }

//     return newArray;
// };

// console.log(getAllPropValues(products));

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     const result = [];
//     for (const obj of arr) {
//         if (prop in obj) {
//             result.push(obj[prop]);
//         }
//     }
//     return result;
// };

// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'quantity'));

// console.log(getAllPropValues(products, 'category'));
function transformArray(arr, callBack) {
    arr.forEach(person => {
        console.log(person);
        let names = person.name.toUpperCase();
        let ages = person.age + 5;
        let newObj = { names, ages };
        callBack(newObj);
    });
}

function callback(result) {
    console.log(`Новий обєкт з внесиними змінами:`, result);
}

const obj = [
    { name: 'Nik', age: 23 },
    { name: 'Oleg', age: 35 },
    { name: 'Olga', age: 21 },
    { name: 'Roma', age: 48 },
    { name: 'Pasha😉', age: 30 },
];

transformArray(obj, callback);
