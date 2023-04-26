// Створити клас "Тварина" (Animal) та його підклас "Кіт" (Cat) з використанням конструкторів та методів get/set.

class Animal {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }

  makeSound() {
    return "Мррррррррр ";
  }
}

class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this._color = color;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    this._color = newColor;
  }
  makeSound(param) {
    return param;
  }
}

const myCat = new Cat("Буцефал", 3, "Black");
console.log(myCat.name);
myCat.name = "Барсік";
console.log(myCat.name);

console.log(myCat.age);
myCat.age = 15;
console.log(myCat.age);

console.log(myCat.color);
myCat.color = "White";
console.log(myCat.color);

console.log(myCat.makeSound("Дззззз"));
