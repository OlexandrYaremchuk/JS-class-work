/*
 * Знайомство з масивами
 * - Оголошення
 
 

 * - Індексація
 * - Довжина
 * - Індекс останього елемента
 * - Перевизначення
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'

* Передача по посиланню та по значенню
 * - Примітиви та складні типи
 * - Посилкова рівність (referential equality)
 */

/*
 * Перебір (ітерація) масива
 * - for - якщо потрібен індекс або потрібно змінити елемент масива
 * - for...of - якщо індекс не потрібен і в масиві нічого міняти не потрібно
 */

// const a = [1, 2, 3, 4, 5, 6];
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// friends[0] = 'Jack';
// console.table(friends);

// console.log(friends[0]);
// // console.log(a);

// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// let a1 = 500;
// let b1 = a1;
// console.log('a1', a1);
// console.log('b1', b1);
// a1 = 600;
// console.log('a1', a1);
// console.log('b1', b1);

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);

for (let i = 0; i < friends.length; i++) {
  // console.log(i);
  // console.log(friends[i]);
  friends[i] += `-${i}`;
}

console.table(friends);

for (const friend of friends) {
  console.log(friend);
}
