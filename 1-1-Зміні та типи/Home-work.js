let mySalary = Number(prompt(`Вирахуй мою заробінтну плату:`));
console.log(mySalary);
const bonus = mySalary * 0.15;
console.log(bonus);
const total = mySalary++ + bonus;
console.log(total);
const taxes = total * 0.1;
console.log(taxes);
const shop = 190;
const result = total - taxes - shop;
console.log(result);
alert(`Ваш залишок: ${result} грн`);

// let x = 3;

// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"
