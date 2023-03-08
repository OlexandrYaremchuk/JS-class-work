/*
 * Знайомство з масивами
 * - Оголошення
 * - Індексація
 * - Довжина
 * - Індекс останього елемента
 * - Перевизначення
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// console.table(friends);
// friends[1] = 'dfjhadf'
// console.table(friends);

// const lastIndex = friends.length
// console.log(lastIndex);
/*
 * Передача по посиланню та по значенню
 * - Примітиви та складні типи
 * - Посилкова рівність (referential equality)
 */
// const a = [1, 2, 3];
// const b = a
// a[0] = 5
// console.log(a);
// console.log(b);

// let x = 10;
// let y = x
// x = 12
// console.log('x', x);
// console.log('y', y);

/*
 * Перебір (ітерація) масива
 * - for - якщо потрібен індекс або потрібно змінити елемент масива
 * - for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends)

for (let i = 0; i < friends.length; i += 1) {
  console.log(i);
  console.log(friends[i]);

  friends[i] += `-${i}`
}
console.table(friends);
