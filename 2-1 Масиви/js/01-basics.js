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

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[1] = 'qwerqrwr';
// friends[3] = 123123;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

/*
 * Передача по посиланню та по значенню
 * - Примітиви та складні типи
 * - Посилкова рівність (referential equality)
 */

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);

/*
 * Перебір (ітерація) масива
 * - for - якщо потрібен індекс або потрібно змінити елемент масива
 * - for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

for (let i = 0; i < friends.length; i += 1) {
  friends[i] += `-${i}`;
}

// for (let friend of friends) {
//   console.log(friend);
// }

console.table(friends);
