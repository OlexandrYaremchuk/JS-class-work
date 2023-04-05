/*
 * Напиши функцію calculateTotalPrice(items)
 * яка повертає масив цін (чисел) та повертає їх суму
 */
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

let total = 0;

// for (const value of cart) {
//   total += value;
// }
// console.log('Total:', total);

const calculateTotalPrice = function (items) {
  console.log('items  в середині функції:', items);
  for (const value of items) {
    total += value;
  }
  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]);
const r2 = calculateTotalPrice(cart);

console.log(calculateTotalPrice(cart));

console.log(calculateTotalPrice([1, 2, 3]));
