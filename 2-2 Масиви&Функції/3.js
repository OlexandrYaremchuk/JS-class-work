//  Використовуючи методи split() та join(), напишіть скрипт, який в масиві [java script, pyton, java, c++, react], змнює всі слова в масиві на слова з першим символом в верхньому регістрі
const arr = ["java script", "pyton", "java", "c++", "react"];
const arr2 = ["java", "pyton33", "java22", "c+2123+", "react22"]

// console.table(arr)

const changeWord = function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let letters = arr[i].split('')
    // console.log(letters);
    letters[0] = letters[0].toLocaleUpperCase();
    arr[i] = letters.join('');
    // console.log(letters);
  }
  return arr
}

console.log(changeWord(arr));
console.log(changeWord(arr2));




