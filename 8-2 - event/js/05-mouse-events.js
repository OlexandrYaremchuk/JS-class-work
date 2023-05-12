/*
 * Події миши
 * - mouseenter и mouseleave (це ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - гомінка подія)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

<<<<<<< HEAD
// boxRef.addEventListener('mous seout', onMouseLeave);
boxRef.addEventListener('mousemove', onMouseMove);
=======
// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);
>>>>>>> 2aaccafa104a5c1ee2a1333319c7ebff924329f6

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}
<<<<<<< HEAD
const rotate = document.querySelector('.img-rotate');

rotate.addEventListener('mouseenter', onImageHover);
rotate.addEventListener('mouseleave', remuveClass);

function onImageHover(event) {
  rotate.classList.add('animate-rotate');
}
function remuveClass(event) {
  rotate.classList.remove('animate-rotate');
}
=======
>>>>>>> 2aaccafa104a5c1ee2a1333319c7ebff924329f6
