/*
 * Операція spread (розпилення)
 * - Array.prototype.concat() та аналог через spread
 */
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const a = [4, 5, 6, 7];
// const b = 'some text';
// const numbers = [1000, ...[1, 2, 3], 2000, ...b, 3000, 4000, ...a, 5000];

// console.log(numbers);

/*
 * Пошук найменшої або найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { w: 4 }];
// const b = [...a];
// console.log('a:', a);
// console.log('b:', b);

// console.log(a[0] === b[0]);
// console.log(a === b);
/*
 * Зшиваємо кілька масивів в один через concat() та spread
 */
// const lastWeekTemps = [1, 2, 3, 4];
// const currentTemps = [5, 6, 7, 8];
// const nextWeekTemps = [9, 10, 11, 12];

// const allTemps = [
//   ...lastWeekTemps,
//   ...currentTemps,
//   ...nextWeekTemps,
//   23,
//   45,
//   23,
// ];
// console.log(allTemps);

//  * Розпилення  обєктів
//  * - Object.prototype.assign() та spread
//  *
const a = { x: 1, y: 2 };
const b = { x: 0, p: 3 };
const c = Object.assign({ name: 'Mango' }, a, b);

const m = { ...a, x: 'hello', ...b };

console.log(a);
console.log(b);
console.log(c);
console.log(m);

const defaultSettings = {
  theme: 'light',
  showMessage: true,
  hideSidebar: false,
};
const userSettings = {
  showMessage: false,
  hideSidebar: true,
};
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log(finalSettings);
