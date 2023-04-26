// Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.

const movies = {
  action: ['Die Hard', 'John Wick', 'The Matrix'],
  comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
  drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
  horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],

  listMoviesByGenres(genre) {
    if (this[genre]) {
      console.log(`Фільми в жанрі ${genre}: ${this[genre].join(',')}`);
    } else {
      console.log(`Жанр ${genre} відсутній у списку фільмів`);
    }
  },
};

movies.listMoviesByGenres('comedy');

movies.listMoviesByGenres('horror');
