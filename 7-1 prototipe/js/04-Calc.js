// Задача: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

// Рішення:

// 1. Створюємо конструктор для калькулятора:

function Calculator() {
  this.result = 0;
}
// 2. Додаємо методи до прототипу конструктора:
Calculator.prototype.add = function (num) {
  this.result += num;
};

Calculator.prototype.subtract = function (num) {
  this.result -= num;
};

Calculator.prototype.multiply = function (num) {
  this.result *= num;
};

Calculator.prototype.divide = function (num) {
  if (num !== 0) {
    this.result /= num;
  } else {
    console.log('Cannot divide by zero.');
  }
};

// 3. Створюємо об'єкт калькулятора та використовуємо його методи:
let calculator = new Calculator();

calculator.add(5);
calculator.subtract(3);
calculator.multiply(2);
calculator.divide(0);

console.log(calculator.result); // Output: 4
