// Пошук найдовшого слова.
// Напиши функцію findLongestWord(string), яка приймає довільний рядок лише з слів розділених пробілом та повертає найдовше слово.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord('Привіт як справи Я з України'));
console.log(findLongestWord('При виконанні цього коду спочатку викликається'));
console.log(
  findLongestWord(
    'Коли скрипт викликає функцію, інтерпретатор додає їх у стек викликів і починає виконання.',
  ),
);
