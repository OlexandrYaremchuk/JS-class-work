//*1 Напишіть функцію, яка приймає масив чисел та повертає новий масив, який містить тільки парні числа з вихідного масиву, відсортовані за зростанням.

const numbers = [3, 6, 8, 2, 1, 10, 5, 4];

function getSortedNumbers(array) {
  return numbers.filter((number) => number % 2 === 0).sort((a, b) => a - b);
}
console.log(getSortedNumbers(numbers));

//*2 Напишіть функцію, яка приймає масив об'єктів з властивістю "price" та повертає масив цін зі знижкою на 10% за допомогою методу "map()".

const obj = [
  { name: "🍏", price: 200 },
  { name: "🍊", price: 120 },
  { name: "🍉", price: 25 },
];

function getDescountedPrice(obj) {
  return obj.map((item) => item.price * 0.9);
}

console.log(getDescountedPrice(obj));

//*3 Є масив об'єктів, які представляють товари в інтернет-магазині. Кожен об'єкт містить поля name, price та quantity. Напишіть функцію, яка приймає цей масив та повертає масив із загальної вартості кожного товару в магазині, якщо всі товари були продані.

const products = [
  { name: "🍏", price: 200, quantity: 10 },
  { name: "🍊", price: 120, quantity: 5 },
  { name: "🍉", price: 25, quantity: 20 },
  { name: "🍇", price: 100, quantity: 0 },
];

function getTotalPrice(products) {
  return products.map((product) => {
    // if (product.quantity === 10) {
    //   return { name: product.name, totalPrice: 0 };
    // }
    return { name: product.name, totalPrice: product.price * product.quantity };
  });
}

console.log(getTotalPrice(products));
