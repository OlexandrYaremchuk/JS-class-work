//*? Задача 2
//*? Напишіть код  для додавання всіх зарплат та збережіть результат і зміннну sum.
//*? У нас є обʼєкт, в якому зберігаються зарплати нашої команди.
//*? Повино вийти 390. Якщо обʼєкт salaries пустий, то результат має бути 0

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumsalaries(salaryValue) {
  let sum = 0;
  for (const salary of salaryValue) {
    sum += salary;
  }
  return sum;
}

console.log(sumsalaries(Object.values(salaries)));
