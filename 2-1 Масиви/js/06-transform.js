/*
 * Напиши скрипт, який обєднує всі елементи масиву в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи масива в рядку будуть розділені комами.
 * - Спочатку через for
 * - Потім через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// for
let string = '';
for (const friend of friends) {
  string += friend + ',';
}

console.log(string);

// join()
const string1 = friends.join(',');
console.log(friends);
console.log(string1);
