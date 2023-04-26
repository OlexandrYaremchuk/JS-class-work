const fnA = function (value1, value2) {
  let result = value1 + value2;
  console.log(result);
};

fnA(10, 12);
fnA(22, 40);
fnA(1, 34);

function fnB(value1, value2) {
  let result = value1 + value2;
  console.log(result);
}

fnB(12, 55);

const arr = [
  {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  },
  { a: 6, b: 7, c: 8, d: 9 },
];
const fnC = (arr) => {
  let result = arr.map((value) => value.a + 2);
  console.log(result);
};
fnC(arr);
//Функції, як аргументи
function numbers(num1, num2, operation) {
  let result = operation(num1, num2);
  console.log(`Result: ${result}`);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

numbers(12, 12, addNumbers);

//* Задача 1: Перетворення температури з Цельсія в Фаренгейти:
let temperateruInCelsius = 20;

function celsiusToFarengate(celsius) {
  return (celsius * 9) / 5 + 32;
}

let temperateruToFarengate = celsiusToFarengate(temperateruInCelsius);
console.log(`${temperateruInCelsius} "C": ${temperateruToFarengate}`);

//*Задача 2: Напиши приклад задачі для підрахунку суми товарів в кошику покупця. Створи функцію, яка отримує список товарів та їх цін, а потім обчислює загальну вартість товарів в кошику покупця. Функція повинна приймати масив з об'єктами, де кожен об'єкт містить назву товару та його ціну, а повертати загальну суму всіх товарів.

//* Також додай можливість додавання та видалення товарів з кошика, щоб зробити програму більш функціональною.

let cartItems = [];

function addToCart(itemName, itemPrice) {
  let item = {
    name: itemName,
    price: itemPrice,
  };
  cartItems.push(item);
}

function calculateTotalPrice(items) {
  return items.reduce((totalPrice, item) => totalPrice + item.price, 0);
}

function removeFromCart(itemName) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === itemName) {
      cartItems.splice(i, 1);
      break;
    }
  }
}

addToCart("🍔", 50);
addToCart("🍟", 30);
addToCart("🌮", 80);
addToCart(" 🫕", 30);
removeFromCart("🌮");
console.table(cartItems);
console.log(calculateTotalPrice(cartItems));
