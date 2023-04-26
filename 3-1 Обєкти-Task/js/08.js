// Створіть програму, яка виводить список студентів та їх оцінок з різних предметів.

// Для цього створіть об'єкти для кожного студента, які містять інформацію про його ім'я та список оцінок з предметів.

const student1 = {
  name: 'Артем',
  grades: {
    математика: 95,
    англійська: 85,
    історія: 90,
  },
};

const student2 = {
  name: 'Олександр',
  grades: {
    математика: 80,
    англійська: 90,
    історія: 75,
  },
};

const student3 = {
  name: 'Діана',
  grades: {
    математика: 100,
    англійська: 85,
    історія: 70,
  },
};

let students = [student1, student2, student3];
console.dir(students);

function displayStudentGrade(student) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    console.log(`${student.name} :`);
    for (let subject in student.grades) {
      console.log(`- ${subject}: ${student.grades[subject]}`);
    }
  }
}
displayStudentGrade(students);
