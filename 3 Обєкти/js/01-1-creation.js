/*
 * Об'єкти (робимо плейлист музики: ім'я, рейтинг, треки, кількість треків)
 * - Літерал об'єкта
 * - Властивості, ключі (ім'я) та значення
 * - Як відрізнити об'єкт від області видимості
 */

// const obj = {
//   key: 'value',
// };

// const playlist = {
//   name: 'Мій плейлист',
//   rating: 5,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   album: {
//     name: 'Мфй плейлист',
//     year: 2019,
//     artist: 'Мфй плейлист',
//   },
// };

// console.log(playlist.tracks);

// const fn = function (...args) {
//   console.log(args);
// };

// fn(playlist);

/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутні властивості
 */
// const playlist = {
//   name: 'Мій плейлист',
//   rating: 5,
//   tracks: ['Трек-1', 'Трек-2', 'Трек-3'],
//   album: {
//     name: 'Мфй плейлист',
//     year: 2019,
//     artist: 'Мфй плейлист',
//   },
// };

// const propertyNames = 'tracks';

// playlist.rating = 10;
// playlist.url = 'https://play.google.com';

// console.log(playlist.tracks);
// console.log(playlist.rating);
// console.log(playlist['url']);
// console.log(playlist.propertyNames);
// playlist.propertyNames;
// console.log(playlist);

/*
 * Короткий запис властивостей
 */
// const userName = 'Rita';
// const email = 'rita@gmail.com';

// const signupData = {
//   userName,
//   email,
// };
// console.log(signupData);
/*
 * Обчислювані властивості
 */

// const inputName = 'color';
// const inputValue = 'red';

// const colorData = {
//   [inputName]: inputValue,
// };
// console.log(colorData);
// /*
//  * Посилальний тип {} === {}
//  */
// const a = 2;
// const b = a;
// console.log(a === b);

// const obj1 = { a: 5, b: 4 };

// const obj2 = obj1;

// console.log(obj1 === obj2);

// console.log({ a: 1 } === { a: 1 });
// console.log(obj1);
// console.log(obj2);
/*
 * Масиви та функції це об'єкти
 */

const a = [1, 2, 3];

a.hello = ':)';

console.log(a);

const fn = function () {
  console.log('hello');
};

fn.hello = ';)';

console.dir(fn.hello);
