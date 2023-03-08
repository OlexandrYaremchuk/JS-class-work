/*
 * Об'єкти (робимо плейлист музики: ім'я, рейтинг, треки, кількість треків)
 * - Літерал об'єкта
 * - Властивості, ключі (ім'я) та значення
 * - Як відрізнити об'єкт від області видимості
 */

// const playlist = {
//   name: 'Мій топ плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ до властивості
 * - obj.key
 * - obj['key']
 * - Відсутні властивості
 */

const playlist = {
  name: 'Мій топ плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// playlist.qwe = 5;

// playlist.rating = 10;

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

/*
 * Короткий запис властивостей
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

// console.log(signupData);

/*
 * Обчислювані властивості
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

/*
 * Посилальний тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Масиви та функції це об'єкти
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);
