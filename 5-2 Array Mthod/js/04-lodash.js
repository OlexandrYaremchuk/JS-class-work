/* Пустий обʼєкт
 * isEmpty()
 */

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/* Обʼєднує масиви, але не просто обєднує, а в новий масив поміщає лише унікальні значення з тих що обʼєднуються
 * union()
 */

// console.log(_.union([1, 2, 3], [3, 4, 5]));

/* Ранжування
 * range([start], and, [step])
 */

// console.log(_.range(10, 51));

/* Сортування по зростаню. Можна сортувати одразу по кількох елементах
 * sortBy()
 */
const users = [
    { user: 'fred', age: 48 },
    { user: 'jon', age: 23 },
    { user: 'ann', age: 31 },
    { user: 'fred', age: 18 },
];
//сортування по одному параметрі
console.log(_.sortBy, user => user.age);
//сортування по кількох параметрах
console.log(_.sortBy, (users, ['user', 'age']));

/*
 * sum() и sumBy()
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// console.log(_.sumBy(players, player => player.timePlayed));

/*

/*
 * min() и max()
 * minBy() и maxBy()
 *
 */

// Допустимо знайдемо найгіршого гравця, який саме менше часу провів в грі.
// console.log(_.minBy(players, player => player.timePlayed));
//До речі find або filter зараз цього не зроблять. Треба робити допустимо сорт, потім фором перебирти масив і забрати самого першого
// А раніше як це робили через Math.min([1,2,3,4,5])

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */
console.log(_.camelCase('java script'));
console.log(_.capitalize('java script'));
console.log(_.kebabCase(' a b c '));
