// Напишіть функцію, яка приймає об'єкт користувача з його даними та повертає рядок з привітанням. Якщо ім'я та прізвище користувача не задані, то використовується значення за замовчуванням.

function greetUser(user) {
  const { firstName = "Микола", lastName = "Сірко" } = user;
  return `Hello , ${firstName} ${lastName}!`;
}

const user1 = {
  firstName: "Анна",
  lastName: "Сірко",
  age: 25,
  gender: "female",
};

const user2 = {
  age: 40,
  gender: "male",
};

console.log(greetUser(user1));
console.log(greetUser(user2));
