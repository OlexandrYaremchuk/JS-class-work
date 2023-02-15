let data = prompt('Дай ЗП');
const salary = Number(data);
console.log(salary);

const premium = (salary * 15) / 100;
console.log(premium);

const taxes = ((salary + premium) * 10) / 100;
console.log(taxes);

const shoping = 190;

const balance = salary + premium - taxes - shoping;
console.log(balance);

alert(`Your balance: ${balance}`);
