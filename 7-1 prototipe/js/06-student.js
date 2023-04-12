// Задача: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

// Рішення:

// Створіть клас "Оцінка", який буде містити методи для додавання та виведення оцінок.
// Створіть клас "Студент", який буде містити властивості для імені та прізвища студента та метод для додавання оцінок. Також в класі "Студент" створіть властивість "середній бал", яку можна буде обчислити за допомогою методу "обчислитиСереднійБал".
// Створіть клас "Група", який буде містити масив студентів та методи для додавання нових студентів та виведення середнього балу всієї групи.
// Використайте прототипне наслідування для того, щоб студенти могли успадковувати методи класу "Оцінка".
// Додайте можливість вводити дані про студентів та їх оцінки з клавіатури та виводити результати на екран.
// Код рішення:

// Клас для оцінок
function Mark() {
  this.marks = [];
}

Mark.prototype.addMark = function (mark) {
  this.marks.push(mark);
};

Mark.prototype.printMarks = function () {
  console.log('Оцінки: ' + this.marks.join(', '));
};

// Клас для студентів
function Student(name, surname) {
  this.name = name;
  this.surname = surname;
  this.mark = new Mark();
  this.averageMark = 0;
}

Student.prototype.addMark = function (mark) {
  this.mark.addMark(mark);
};

Student.prototype.calculateAverageMark = function () {
  const sum = 0;
  for (var i = 0; i < this.mark.marks.length; i++) {
    sum += this.mark.marks[i];
  }
  this.averageMark = sum / this.mark.marks.length;
};

// Клас для групи
function Group() {
  this.students = [];
}

Group.prototype.addStudent = function (name, surname, mark) {
  const student = new Student(name, surname);
  student.addMark(mark);
  student.calculateAverageMark();
  this.students.push(student);
};
const group = new Group();
group.addStudent('Іван', 'Іванов', 80);
group.addStudent('Петро', 'Петров', 90);
group.addStudent('Марія', 'Іванова', 75);

console.log(group.students); // [Student, Student, Student]

console.log(group.students[0].name); // "Іван"
console.log(group.students[0].averageMark); // 80

console.log(group.students[1].name); // "Петро"
console.log(group.students[1].averageMark); // 90

console.log(group.students[2].name); // "Марія"
console.log(group.students[2].averageMark); // 75
