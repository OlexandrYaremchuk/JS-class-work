// Створити об'єкт "Студент" з методами для додавання та видалення предметів, які він вивчає.

let student = {
  subjects: [],
  addSubject(subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
      console.log(`Предмет ${subject} додано`);
    } else {
      console.log(`Ви вже вивчаєте предмет ${subject}`);
    }
  },
  removeSubject(subject) {
    if (this.subjects.includes(subject)) {
      let index = this.subjects.indexOf(subject);
      this.subjects.splice(index, 1);
      console.log(`Предмет ${subject} видалено`);
    } else {
      console.log(`Ви не вивчаєте предмет ${subject}`);
    }
  },
  showSubject() {
    console.log(this.subjects);
  },
};

student.addSubject('Математика');
student.addSubject('Історія');
student.addSubject('Математика');

student.removeSubject('Математика');

student.showSubject();
