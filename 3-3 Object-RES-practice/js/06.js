// Напишіть скрипт, який почерзі запитує імʼя, вік та зарплату та виводить в консоль обʼєкт лише з тими полями, які були вказані

const name = prompt("Input name");
const age = prompt("Input age");
const salary = prompt("Input salary");

// const user = { name, age, salary };
// console.log(user);

// все добре але якщо ми тиснемо відміну або відправляємо якийсь пустий рядок, то в обʼєкт додається клюк з властивістью або null або пустим рядком. Нам потрібно зробити, щоб вони не додавались в обʼєкт
// Можна зробити так:
const user1 = {};
if (name) user1.name = name;
if (age) user1.age = age;
if (salary) user1.salary = salary;

console.log(user1);
// Але полів може бути багато, а так перевіряти незручно

// МОжна використати новий синтаксис.
const user2 = {
  ...(name && { name }),
  ...(age && { age }),
  ...(salary && { salary }),
};

//* Об'єкт, який будується, містить три поля - name, age і salary. Однак, ці поля можуть бути присутніми або відсутніми в залежності від наявності вхідних даних.

//* Зверніть увагу на використання тернарного умовного оператора - "&&". Це оператор, який перевіряє, чи є дане значення істинним (truthy). Якщо значення істинне, то оператор поверне об'єкт, що містить ключ та відповідне значення. Інакше, якщо значення є хибним (falsy), то цей оператор поверне порожній об'єкт.

//* Таким чином, коли цей код виконується, буде створено новий об'єкт, який містить тільки ті поля, які мають істинні значення. Якщо ж жодне з цих полів не має істинного значення, то буде створено порожній об'єкт.

console.log(user2);