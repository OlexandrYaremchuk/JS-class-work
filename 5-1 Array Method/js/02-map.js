/*
 * Array.prototype.map()
 * - Поелементно перебирає оригінальний масив
 * - Не не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
 */

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(number => {
  return number * 3;
});
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Отримуємо масив імен всіх гравців
 */

const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Збільшуємо кількість очків кожного гравця на 10%
 */

const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Збільшеємо к-ть годин гравця по id
 */

//1
const playerIdToUpdate1 = 'player-3';
const updatedPlayers1 = players.map(player => {
  console.log(player.id);
  if (playerIdToUpdate1 === player.id) {
    console.log('Ми його знайшли');

    return 'це буде оновлений обʼєкт';
  }
  //якщо умова не виконується ми повертаємо старий обʼєкт
  return 'це буде старий обʼєкт';
});

//2
const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;
});

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);
