/*
 * Підрахувати загальну суму покупок в корзині
 */
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

let total = 0;
let total1 = 0;

// for
for (let i = 0; i < cart.length; i++) {
  total += cart[i];
}
console.log(total);

// for of
for (const value of cart) {
  total1 += value;
}
console.log(total1);
