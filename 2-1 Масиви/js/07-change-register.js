/*
 * Напиши скрипт який заміняє регістр кожного слова в рядку на протилежний.
 * Наприклад, якщо рядок «JavaScript», то на виході має бути рядок «jAVAsCRIPT».
 */

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';
// console.table(letters);

// for (const letter of letters) {
//   // console.log(letter);
//   if (letter === letter.toLowerCase()) {
//     // console.log('Ця буква в нижньому регістрі!!!-', letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     // console.log('Ця буква в верхньому регістрі-', letter);
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);

for (const letter of letters) {
  const isEqual = letter === letter.toLowerCase();
  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString);
