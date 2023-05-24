/*
 * Сhatty events
 * Прийом throttling і debouncing з Lodash
 * Шумні події. До них можна віднести: скроли по сторінці, зміни розширення дисплея, муас мув, маус аут, введення тексту в інпут ітд. По факту браузеру всеодно скільки подій відпрацьовувати. Він може без проблем відпрацювати і мільойн подій і абсолютно нормально з цим справиться. А от що стосується js то тут ситуація трохи інша. Нам же для кожної події потрібно повішати слухач, а слухач це відповідно якась функція, яка відпрацьовується при настані події. А це вже навантажує систему, тому що js однопоточний, він пропарцьовує все підряд одним потоком, він не має можливості в один момент виконувати різні завдання. Тому проблема не в браузері, а проблема в нас, в тому, як ми організували структуру коду
 */
// Що таке виклик функції - це стек. Точніше постановка функції в стек. Під час виклику вони всі стають в чергу. Якщо в нас дуже велика кількість функцій, що відбувається, в нас забивається стек задач, і замість того, щоб виконувати інші необхідні нам функції, ми чекаємо поки він очиститься і в чергу стануть функції, які нам потрібні.
/*
 * Mousemove и throttle
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 250));

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
