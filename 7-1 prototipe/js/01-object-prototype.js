/*
 * Прототип обʼєкта
 *
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Приватні властивості та Object.prototype.hasOwnProperty()
 * - Ланцюг прототипів
 */

// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));

// const dummyObj = Object.create({ message: 'Це властивість обʼєкта протортипа' });
// dummyObj.message = 'Це приватна властивість обʼєкта';
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);

//  'Це приватна властивість обʼєкта'
//  'Це властивість обʼєкта протортипа'

/*
 * Алгоритм пошуку властивості в ланцюгу прототипів:
 * 1. Пошук починається в приватних властивостей
 * 2. Якщо властивості немає в приватних, пошук переходе до ланцюга прототипів
 * 3. Пошук припиняється при першому співпадінні (є така властивість)
 * 4. Повертається значення властивості
 */

// const objA = Object.create({ z: 5 });
// objA.y = 100;
// console.log('objA', objA);

// console.log(objA.x);
