// Задача: Написати програму, яка буде обчислювати площу прямокутника та квадрата, використовуючи прототипи та прототипне наслідування.

// Рішення:
// 1. Створимо функцію-конструктор Rectangle, яка приймає два аргументи - довжину та ширину прямокутника.

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

// 2. Додамо методи в прототип об'єкта Rectangle, які дозволять обчислити площу та периметр прямокутника.

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.length + this.width);
};

// 3.Створимо новий об'єкт rect1 на основі функції-конструктора Rectangle.
const rect1 = new Rectangle(10, 5);

// 4. Обчислимо площу та периметр прямокутника rect1 за допомогою методів з прототипу.

console.log(rect1.getArea()); // 50
console.log(rect1.getPerimeter()); // 30
