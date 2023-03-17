// У JavaSсript терміни "spread" і "rest" використовуються з оператором "..." і мають різні застосування.

// Оператор "spread" використовується для розгортання (розпакування) значень масивів і об'єктів. Наприклад:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
console.log(combined);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}
console.log(merged);

// Оператор "rest" використовується для збору аргументів в функції в масив. Наприклад:
function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}

const result = sum(1, 2, 3, 4);
console.log(result); // 10
// Таким чином, розрізнити "spread" і "rest" досить просто: якщо оператор "..." використовується при оголошенні функції, то це "rest", якщо ж він використовується для розгортання значень масивів і об'єктів, то це "spread".
