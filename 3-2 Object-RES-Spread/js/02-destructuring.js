/*
 * Деструктуризація обєкта
 * - Значения по дефолту
 * - Імʼя змінної, яке відрізняється від імені властивості
//  */
// const playlist = {
//   name: 'Мій пейлист',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// const {
//   name,
//   rating,
//   tracks,
//   author = 'user',
//   trackCount: numberOfTracks = 0,
// } = playlist;

// console.log(numberOfTracks);
/*
 * Глибока деструктуризація
 */

// const profile = {
//   name: 'Pueblo Master',
//   tag: 'sdsd',
//   location: 'Jamaica',
//   avatar: 'http://sdsdsdsdsd',
//   stats: {
//     followers: 5603,
//     views: 2345,
//     likes: 1235,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(avatar, name, tag, location, followers, views, likes);

/*
 * Деструктуризація масивів
 */
// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

// const students = {
//   diana: 4,
//   luda: 5,
//   olexandr: 9,
//   artem: 10,
// };

// const entries = Object.entries(students);
// console.log(entries);

// // const [name, rating] = entries;

// // console.log(name, rating);
// for (const [name, rating] of entries) {
//   console.log(name, rating);
// }

//  Операція rest (збір)
// const profile = {
//   name: 'Pueblo Master',
//   tag: 'sdsd',
//   location: 'Jamaica',
//   avatar: 'http://sdsdsdsdsd',
//   stats: {
//     followers: 5603,
//     views: 2345,
//     likes: 1235,
//   },
// };

// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

//  * Патерн «Обєкт налаштувань»
//  * - деструктуризація параметра-обєкта в підписі функції
//  * - rest при деструктуризації в підписі

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;
  // const {
  //   name,
  //   tag,
  //   location,
  //   avatar,
  //   stats: { followers, views, likes },
  // } = userProfile;

  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(name, tag, location, restProps);
};

const profile = {
  name: 'Pueblo Master',
  tag: 'sdsd',
  location: 'Jamaica',
  avatar: 'http://sdsdsdsdsd',
  stats: {
    followers: 5603,
    views: 2345,
    likes: 1235,
  },
};

showProfileInfo(profile);
