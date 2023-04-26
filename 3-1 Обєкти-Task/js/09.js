// Напишіть програму, яка зберігає дані про книги в об'єктах та дозволяє користувачеві додавати нові книги, видаляти і редагувати існуючі книги, а також виводити список всіх книг.

let books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
  },
];

function addBook(title, author, year) {
  let newBook = { title: title, author: author, year: year };
  books.push(newBook);
}

function deleteBook(index) {
  books.splice(index, 1);
}

function editBook(index, title, author, year) {
  books[index].title = title;
  books[index].author = author;
  books[index].year = year;
}

function displayBooks() {
  for (let book of books) {
    console.log(`${book.title} by ${book.author}, ${book.year}`);
  }
}

addBook('Гарі Поттер', 'Роулінг', 2012);
// deleteBook(2);
editBook(3, 'Гарі Поттер та філософський камінь', 'Джоан Роулінг', 2012);
displayBooks();

console.dir(books);
