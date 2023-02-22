// 1. Напишіть програму, яка виводить на екран всі числа від 1 до 10.
// while
let number = 0;

while (number < 10) {
  console.log('nuber-while:', number);
  number += 1;
}

// 2. Напишіть програму, яка виводить на екран всі парні числа від 1 до 20.
let number2 = 0;
while (number2 < 20) {
  console.log('number:', number2);
  number2 += 2;
}

// 3. Напишіть програму, яка знаходить суму всіх парних чисел від 1 до 1000.
let max = 10;
let sum = 0;
let i = 1;

while (i <= max) {
  if (i % 2 === 0) {
    sum += i;
  }
  i++;
}
console.log(sum);

// do...while
let sumDo = 0;
let j = 1;

do {
  if (i % 2 === 0) {
    // перевіряємо, чи є поточне число парним
    sumDo += j; // якщо так, то додаємо його до загальної суми
  }
  j++; // збільшуємо лічильник
} while (i <= 1000);

console.log(sumDo); // виводимо суму

// for
let sumFor = 0;

for (let i = 2; i <= 1000; i += 2) {
  sumFor += i;
}

console.log(`Сума парних чисел від 1 до 1000: ${sumFor}`);
