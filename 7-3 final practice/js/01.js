// Створіть програму для обрахунку середнього балу студента. Програма має приймати на вхід масив оцінок з п'яти предметів та повертати середнє арифметичне значення оцінок.

// Потрібно реалізувати наступні функції:

// Функція calculateAverage, яка приймає масив оцінок та повертає середнє арифметичне значення оцінок.
// Функція displayGrade, яка приймає середнє арифметичне значення оцінок та повертає оцінку відповідно до наступного ключа:
// 90-100 - A
// 80-89 - B
// 70-79 - C
// 60-69 - D
// 0-59 - F
// Приклад вхідних даних:
let grades = [80, 85, 90, 75, 70];

function Student(grades) {
  this.grades = grades;
}

Object.defineProperty(Student.prototype, "average", {
  get: function () {
    let total = 0;
    for (let i = 0; i < this.grades.length; i++) {
      total += this.grades[i];
    }
    // console.log(total);
    return Math.round(total / this.grades.length);
  },
});

Object.defineProperty(Student.prototype, "grade", {
  get: function () {
    let average = this.average;
    if (average >= 90 && average <= 100) {
      return "A";
    } else if (average >= 80 && average <= 89) {
      return "B";
    } else if (average >= 70 && average <= 79) {
      return "C";
    } else if (average >= 60 && average <= 69) {
      return "D";
    } else {
      return "F";
    }
  },
});

let student = new Student(grades);
console.log(`Студент має середній бал ${student.average}`);
console.log(`Студент має оцінку ${student.grade}`);
