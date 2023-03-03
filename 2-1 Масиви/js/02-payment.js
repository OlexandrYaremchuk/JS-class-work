/*
 * Підрахувати загальну суму покупок в корзині
 */

//*! */ 1. Помножити кожен елемент масиву на 2
//*! 2. Знайти суму всіх чисел масиву
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;


// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);
//   total += cart[i]
// total = total + cart[i]
// }
// console.log('Total', total);

// for (const value of cart) {
//   total += value
// }
// console.log('Total&For', total);

for (let value of cart) {
  value = value * 2
  total += value
}
console.log(total);