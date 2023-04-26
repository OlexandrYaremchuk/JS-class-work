//* Задача1: В залежності від статусу замовлення відображати відповідний текст на сторінці.
const orderStatus = "Готове";

function addMessage(message) {
  console.log(`Ваша замовлення ${message}`);
}

if (orderStatus === "Замовлення прийнято") {
  addMessage(orderStatus);
} else if (orderStatus === "В процесі приготування") {
  addMessage(orderStatus);
} else if (orderStatus === "Готове") {
  addMessage(orderStatus);
} else {
  console.log(`Ваше замовлення не знайдено`);
}

//* Задача2: В залежності від віку відвідувача відображати відповідний контент на сторінці.
//* Наприклад, якщо вік відвідувача менше 18 років, то має виводитись текст "Вхід заборонено", якщо вік від 18 до 30 років, то "Ласкаво просимо на сайт", якщо вік від 30 до 60 років, то "Сторінка для дорослих", якщо вік старше 60 років, то "Ласкаво просимо на сайт для senior citizens".

let age = 25;

if (age < 18) {
  console.log("Вхід заборонено. Малий ще)))");
} else if (age >= 18 && age <= 30) {
  console.log("Ласкаво просимо на сайт - цвіт нації");
} else if (age > 30 && age <= 60) {
  console.log("Сторінка для дорослих");
} else {
  console.log("Ласкаво просимо на сайт для senior citizens");
}

//* Задача 3:  Визначити план продажів для працівника залежно від його поточного рівня продажів.Якщо він продав менше 50 одиниць, його план буде 1000 доларів.Якщо він продав від 50 до 100 одиниць, його план буде 1500 доларів.Якщо він продав більше 100 одиниць, його план буде 2000 доларів.

let plan = 0;
const salesValue = 300;

if (salesValue < 50) {
  plan = 1000;
} else if (salesValue >= 50 && salesValue <= 100) {
  plan = 1500;
} else {
  plan = 2000;
}

console.log(`Твій план ${plan}`);

//* Задача 5: Створити програму, яка визначає знижку на товар в залежності від його ціни. Якщо ціна менше 100 доларів, знижка складає 10%, якщо ціна від 100 до 500 доларів, знижка складає 20%, а якщо ціна більше 500 доларів, знижка складає 30%.
function calcDiscount(price) {
  let discount;
  if (price < 100) {
    discount = 0.1;
  } else if (price >= 100 && price <= 500) {
    discount = 0.2;
  } else {
    discount = 0.3;
  }

  const discountedPrice = Math.round(price * (1 - discount));
  return `Price: ${price} USD \n Discount: ${
    discount * 100
  }% \n Discount Price: ${discountedPrice} USD`;
}
console.log(calcDiscount(50));
console.log(calcDiscount(150));
console.log(calcDiscount(650));

//* Задача 6: Створити програму, яка перевіряє, чи є введене слово паліндромом. Слово паліндром, якщо воно читається однаково зліва направо і зправа наліво. Наприклад, "level" є паліндромом, а "apple" - ні.

function isPalindrome(word) {
  word = word.toLowerCase();
  word = word.replace(/[^a-z]/g, "");
  console.log(word);
  return word === word.split("").reverse().join("");
}
console.log(isPalindrome("level"));
console.log(isPalindrome("apple"));
console.log(isPalindrome("Was it a car or a cat I saw"));
