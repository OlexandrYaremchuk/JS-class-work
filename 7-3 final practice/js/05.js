// Напишіть функцію-конструктор для створення об'єкту "Книга". Об'єкт книга повинен мати властивості: назва, автор, кількість сторінок та ціну. Також потрібно створити метод для виведення всіх властивостей книги у вигляді рядка.

function Book(title, author, pageCount, price) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.price = price;

  this.toString = function () {
    return `Назва книги: ${this.title} Автор: ${this.author} Кількість сторінок: ${this.pageCount} Ціна книги: ${this.price}`;
  };
}

const book1 = new Book(
  "Гаррі Поттер і філософський камінь",
  "Джоан Ролінг",
  360,
  950
);

const book2 = new Book("Чистий код", "Роберт Мартін", 360, 690);

console.log(book1.toString());
console.log(book2.toString());
