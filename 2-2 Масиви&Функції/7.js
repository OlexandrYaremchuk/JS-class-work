//Сортування масиву з циклом без Arrey.prototype.sort()
//Повернути відсортовану по алфавіту копію не змінючи початковий масив

//*? Booble sort
//*? Сортування бульбашкою або сортування простими обмінами - один з найпростіших алгоритмів сортування.Він застосовується для упорядкування масивів не великих розмірів.
//*? Суть алгоритма в тому, що відбувається кілька проходів по масиву.
//*? При кожному проході попарно порівнюються два сусідніх елемента.
//*? Якщо вони знаходяться в вірному порядку, то нічого не відбувається, в іншому випадку вони міняються місцями.
//*? В резульаті першого проходу максимальний елемент стане в кінець масиву, тобто вспливай як бульбашка.
//*? Потім все повторюється до того моменту поки весь масив не буде відсортований
const arr = ["HTML", "JavaScript", "Phyton", "CSS", "Basic"];

// const sortArray = function (array) {
//   const sortedArrey = array.slice(0);
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (sortedArrey[j] > sortedArrey[j + 1]) {
//         const temp = sortedArrey[j];
//         sortedArrey[j] = sortedArrey[j + 1];
//         sortedArrey[j + 1] = temp;
//       }
//     }
//   }
//   return sortedArrey;
// };

const sortArray = function (array) {
  const sortedArrey = array.sort();

  return sortedArrey;
};

console.log(arr);
console.log(sortArray(arr));
