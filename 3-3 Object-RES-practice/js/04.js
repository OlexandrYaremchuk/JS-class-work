// Використовуючи Object.entries()  та деструктуризацію напиши скрипт, який виводить вміст обʼєкта user в форматі ключ:властивість

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

const arrs = Object.entries(user);
for (const arr of arrs) {
  const [key, value] = arr;
  console.log(`${key}: ${value}`);
}

// Можна трохи коротше

const arrs1 = Object.entries(user);
for (const [key, value] of arrs) {
  console.log(`${key}: ${value}`);
}
