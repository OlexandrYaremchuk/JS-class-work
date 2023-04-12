/*
 * Работа с коллекцией (масивом обʼєктів)
 */

/*
 * Отримуємо імена всіх друзів
 */

/*
 * Отримуємо імена лише друзів, які онлайн
 */

const findFriend = 'Diana';
const friends = [
  { name: 'John', online: true },
  { name: 'Jane', online: true },
  { name: 'Mary', online: false },
  { name: 'Mike', online: true },
  { name: 'Adam', online: false },
  { name: 'Lisa', online: true },
];

console.table(friends);

// Шукаємо друга за іменем
const findFriendByName = function (allFriend, friendName) {
  for (const friend of allFriend) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'Знайшли';
    }
  }
  return 'Не знайшли';
};

console.log(findFriendByName(friends, findFriend));
