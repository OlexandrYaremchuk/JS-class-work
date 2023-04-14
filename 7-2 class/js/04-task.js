// Завдання: Створіть клас "Клієнт" з властивостями "ім'я", "прізвище", "баланс" та методом "повна назва", який повертає повне ім'я клієнта (ім'я та прізвище). Також, створіть геттер та сеттер для властивості "баланс", який забезпечує можливість читання та зміни значення балансу.

// Рішення:

class Client {
    constructor(firstName, lastName, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        this._balance = amount;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const client1 = new Client('Karl', 'Gauss', 1000);

console.log(client1.fullName()); // виведе "John Doe"
console.log(client1.balance); // виведе 1000

client1.balance = 500;

console.log(client1.balance); // виведе 500

// У цій задачі потрібно створити клас "Клієнт" з властивостями та методом, а також геттером та сеттером для властивості "баланс". Вона надає можливість дослідити основні концепції класів, геттерів та сеттерів в Java Script. Приклад використовує конструктор класу, методи, геттери та сеттери, щоб створити об'єкт клієнта та змінити його баланс.
