/*
 * Основи ООП: клас, екземпляр (обʼєкт), інтерфейст
 */

/*
 * Функції-конструктори
 * - Назва
 * - Оператор new
 * - Властивість Function.prototype //*!властивість prototype є лише у функцій констуркторів, у обʼєктів є __proto__
 */

const Car = function ({ brand, model, price } = {}) {
  // const { brand, model, price } = config;
  // 2. Функція викликається в контексті створеного обʼєкта,
  //    тобто в this записується посилання на нього
  this.brand = brand;
  this.model = model;
  this.price = price;

  // 3. В властивість this.__proto__ записується посилання на обʼєкт Car.prototype
  //    тобто Car.prototype це ПРОТОТИП майбутнього обʼєкта  (екземпляра)

  // 4. Посилання на обʼєкт повертається зімасть виклику new Car
};
Car.prototype.sayHi = function () {
  console.log('Car.prototype.sayHi -> this', this);
  console.log('Hello :)');
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// console.log(Car.prototype);

// 1. Якщо функція викликається через new, створюється постий обʼєкт
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// myCar.changePrice(10000);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// console.log(myCar2);

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// console.log(myCar3);


////////////////////////////////////////////////////////////////
1 const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

console.log(User.prototype);

4 User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
};

2 const mango = new User({ email: 'mango@mail.com', password: 1111111 });

5 mango.changeEmail('my-new-mail@mail.com');
3 // console.log(mango);

/*

// 1. У кожного обʼєкта є властивість  __proto__
// 2. В цій властивості лежить посилання на його ПРОТОТИП, тобто інший обʼєкт
// 3. При створенні літерала обʼєкта, в властивість __proto__ записується посилання на функцію .prototype
// 4. Фнкція-конструктор це просто функція :)
// 5. Всю магію робить оператор new
// 6. Якщо функція викликається через new, створюється пустий обʼєкт
// 7. Функція викликається в контексті створеного обʼєкта
// 8. В властивість this.__proto__ записується посилання на обʼєкт Функція.prototype
// 9. Посилання на лбʼєкт повертається в місце виклику new Функція()
