// Напиши функцію logItems(array), яка отримує масив та використовує цикл for, який для кожного елемету масива буде виводи в консоль повідомлення в форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатись з одиниці
const items = ["java script", "pyton", "java", "c++", "react"];

const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    const message = `${i + 1} - ${array[i]}`;
    console.log(message);
  }
};

logItems(["java script", "pyton", "java", "c++", "react"]);
logItems(items);
