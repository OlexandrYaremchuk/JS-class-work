#1 Створіть об'єкт person, який містить властивості name, age, gender та метод
introduce(), який повертає рядок зі словами "Мене звати {ім'я}, мені {вік} років
і я {стать}".

Додайте до об'єкту person метод changeName(newName), який змінює властивість
name на нове ім'я.

Використайте ключове слово this для доступу до властивостей об'єкту.

#2 Створити об'єкт person, який містить властивості firstName та lastName, а
також метод getFullName(), який повертає повне ім'я людини (комбінація firstName
та lastName).

Створити другий об'єкт employee, який містить властивість position та метод
getPosition(), який повертає посаду працівника.

Створити третій об'єкт user, який наслідується від об'єкту person та містить
властивість email, а також метод getEmail(), який повертає електронну пошту
користувача.

Використовуйте ключове слово this для доступу до властивостей об'єктів та їх
методів.

``js const person = { firstName: "John", lastName: "Doe", getFullName() { return `${this.firstName}
${this.lastName}`;
}, };

const employee = { position: "Manager", getPosition() { return this.position; },
};

const user = Object.create(person); user.email = "johndoe@example.com";
user.getEmail = function() { return this.email; };

console.log(person.getFullName()); console.log(employee.getPosition());
console.log(user.getFullName()); console.log(user.getEmail()); ``
