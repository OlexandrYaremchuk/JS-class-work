/*
 * Напиши скрипт, який обєднує всі елементи масиву в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи масива в рядку будуть розділені комами.
 * - Спочатку через for
 * - Потім через join()
 */

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// string = string.slice(0, string.length - 1);

const string = friends.join(',');
console.log(friends);
console.log(string);

// Має вийти 'Mango,Poly,Kiwi,Ajax'
