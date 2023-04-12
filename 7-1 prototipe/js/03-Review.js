// Створити функцію-конструктор для створення об'єктів, які будуть містити інформацію про відгук на продукт. Кожен об'єкт повинен містити поля: назва продукту, ім'я користувача, текст відгуку, дата відгуку, рейтинг продукту (від 1 до 5).

// Рішення:

// Для реалізації даної задачі можна використовувати прототипи та прототипне наслідування в JavaScript. Для цього створимо функцію-конструктор Review, яка буде мати методи для створення та редагування відгуків:

function Review(productName, userName, text, rating) {
  this.productName = productName;
  this.userName = userName;
  this.text = text;
  this.rating = rating;
  this.date = new Date();
}

Review.prototype.editText = function (newText) {
  this.text = newText;
};

Review.prototype.editRating = function (newRating) {
  this.rating = newRating;
};

Review.prototype.getDetails = function () {
  return `${this.userName} написав(ла) відгук на ${this.productName} з рейтингом ${this.rating} та текстом: "${this.text}". Дата відгуку: ${this.date}`;
};

// Дана функція-конструктор створює об'єкти типу Review, які містять інформацію про відгук на продукт. Вона має чотири параметри: назву продукту, ім'я користувача, текст відгуку та рейтинг. Крім того, вона має методи для редагування тексту та рейтингу відгуку, а також для отримання детальної інформації про відгук.

// Тепер ми можемо створити об'єкти Review та працювати з ними:

const review1 = new Review(
  'iPhone 12',
  'John',
  'Дуже задоволений покупкою!',
  5,
);
console.log(review1.getDetails()); // John написав(ла) відгук на iPhone 12 з рейтингом 5 та текстом: "Дуже задоволений покупкою!". Дата відгуку: Sat Apr 09 2023 23:03:20 GMT+0300 (Eastern European Summer Time)

review1.editText('Задоволений покупкою!');
console.log(review1.getDetails()); // John написав(ла) відгук на iPhone 12 з рейтингом 5 та
