function hello() {
    console.log('heloo', this);
}
window.hello;

hello();
const person0 = {
    name: 'John',
    age: 25,
};

// Уявімо систуацію, що нам потрібно додати в обєкт person функцію hello. Який контекст вона нам покаже. Який this;
const person = {
    name: 'John',
    age: 25,
    sayHello: hello,
    //a якщо хочемо щоб був переданий інший контекст допустимо window
    sayHelloWindow: hello.bind(window),
    showInfo() {
        console.log(`Hello, my name ${this.name}, i'm ${this.age}`);
    },
};
person.sayHello();
person.sayHelloWindow();
person.showInfo();

// Зверніть увагу, коли ми в першому випадку викликали нашу функцію hello через  window, ми отримувати андефіне; тому що window це глобальний контекст і hello ми викликали саем в глобальному контексті.По нових правилах такий виклик повертає андефіне.Раніше повертав обʼєкт window(напиши як він виглядає)

// В другому випадку ми викликали нашу вункцію hello в контексті person  і при цьому його this становить вміст обʼєкта person
// Тобто, своїми словами контекстом або this є те що стоїть зліва від крапки під час викликові метода.if (condition) {
//      Саме те що стоїть зліва від крапки і буде this і вивівши його в консоль ми побачимо його зміст

// Як ми це можемо використовувати.Допустимо маємо ще один обʼєкт
const Riki = {
    name: 'Riki',
    age: 32,
};
// І ми хочемо, щоб ми могли метод, який є в обєкті person застосувати в обєкті Riki
person.showInfo.bind(Riki)();

const person2 = {
    name: 'John',
    age: 25,
    sayHello: hello,
    showInfo(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`My name is ${this.name}, i'm ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd();
    },
};

const Pueblo = {
    name: 'Pueblo',
    age: 32,
};
//як нам передати і контекст і параметри
// #1
const fnPuebloInfoLog = person2.showInfo.bind(Pueblo);
fnPuebloInfoLog('Frontend', '0432-23-44-55');

// person2.showInfo.call(Pueblo, 'FronEnd', '0682223344')();
// метод кол може отримувати параметри та викликає сам себе.Метод бінд повертає нам нову функцію і ми можемо її викликати тоді коли нам це потріно.

// і ще один метод apply
person2.showInfo.apply(Pueblo, ['Fron-End', '068-344-43-22']);
//різниця між apply та call в формі передачі аргументів. еплай завжди можна передати лише два аргумента, другим може бути лише масив. call необмежене
