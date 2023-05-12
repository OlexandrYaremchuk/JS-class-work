const imgContainer = document.querySelector('.img-container');
const img = document.querySelector('img');

imgContainer.addEventListener('mousemove', event => {
  const containerWidth = imgContainer.clientWidth;
  const containerHeight = imgContainer.clientHeight;

  // Визначення позиції курсора миші в контейнері
  const mouseX = event.clientX - imgContainer.offsetLeft;
  const mouseY = event.clientY - imgContainer.offsetTop;

  // Обчислення повороту зображення в залежності від позиції курсора миші
  const rotateY = 40 * (mouseX / containerWidth - 0.5);
  const rotateX = -40 * (mouseY / containerHeight - 0.5);

  // Зміна CSS-властивості "transform" для зображення
  img.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

imgContainer.addEventListener('mouseleave', () => {
  // Повернення зображення до початкового положення
  img.style.transform = 'rotateY(0) rotateX(0)';
});
