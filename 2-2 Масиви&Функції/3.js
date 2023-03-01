//  Використовуючи методи split() та join(), напишіть скрипт, який в масиві [java script, pyton, java, c++, react], та змнює всі слова в масиві на слова з першим символом в верхньому регістрі

const arr = ["java script", "pyton", "java", "c++", "react"];

console.table(arr);
for (let i = 0; i < arr.length - 1; i += 1) {
  let letters = arr[i].split("");
  letters[0] = letters[0].toUpperCase();
  arr[i] = letters.join("");
  console.log(letters);
}

// const letters = text.split("");
// letters[0] = letters[0].toUpperCase();
// text = letters.join("");

console.log(arr);
