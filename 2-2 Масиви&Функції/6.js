// Напиши функцію logItems(array), яка отримує масив та використовує цикл for, який для кожного елемету масива буде виводити в консоль повідомлення в форматі <номер елемента> - <значення елемента>. Нумерація елементів має починатись з одиниці
const items = ["java script", "pyton", "java", "c++", "react"];

const logItems = function (items) {
  for (let i = 0; i < items.length; i += 1) {
    const message = `${i + 1}-${items[i]}`
    console.log(message);
  }
}

logItems(items)
