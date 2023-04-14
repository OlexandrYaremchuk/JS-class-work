// Звичайно, ви маєте рацію. Ось ще одна задача на тему class, get, set та constructor для студентів початкового рівня:

// Задача: Створіть клас "Rectangle", який має дві властивості "width" та "height" та два методи "getArea" та "getPerimeter". Використайте гетери та сетери для доступу до властивостей.

// Рішення:
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            console.log('Width must be a positive number.');
            return;
        }
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        if (value <= 0) {
            console.log('Height must be a positive number.');
            return;
        }
        this._height = value;
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return 2 * (this._width + this._height);
    }
}

const myRectangle = new Rectangle(5, 7);
console.log(myRectangle.getArea()); // Output: 35
console.log(myRectangle.getPerimeter()); // Output: 24
console.log(myRectangle.width); // Output: 5
console.log(myRectangle.height); // Output: 7
myRectangle.width = 10;
myRectangle.height = 12;
console.log(myRectangle.width); // Output: 10
console.log(myRectangle.height); // Output: 12

// У цій задачі ми створюємо клас "Rectangle", який має дві властивості "width" та "height", що використовують гетери та сетери для доступу до значень. Метод "getArea" розраховує площу прямокутника, а метод "getPerimeter" розраховує периметр. Використовуючи створений клас, ми можемо створити новий об'єкт "myRectangle" з властивостями "width" та "height" рівними 5 та 7 відповідно. Далі ми можемо викликати методи "getArea" та "getPerimeter" та отримати їх значення, а також змінювати значення властивостей "width" та "height" за допомогою сетерів.
