/*
 * Підрахувати загальну суму покупок в корзині
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 зробити зміну total до цикла
let total = 0;

// 1 перебрати масив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   // 3 кожен елемент приплюсувати до total
//   total += cart[i];
//   // total = total + cart[i];
// }

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);

// Додати такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);
