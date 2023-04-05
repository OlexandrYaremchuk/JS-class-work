/*
 * Напиши функцію changeCase(string) яка міняє регістр
 * кожного слова в рядку на протилежний.
 * Наприклад, якщо рядок  «JavaScript», то на виході має бути «jAVAsCRIPT».
 */
const changeCase = function (string) {
  const letters = string.split('');
  console.log(letters);
  let invertedString = '';
  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }
  return invertedString;
};

console.log(changeCase('JavaScript'));
