// Робота із стилями

// site-nav

//  Зробіть із списка навігаційне меню, розмістіть список горизонтально в рядок

const elementref = document.querySelector('.site-nav');
// elementref.style.display = 'flex';
// elementref.style.justifyContent = 'center';

// const elementref2 = document.querySelector('.site-nav__item');
// elementref2.style.paddingRight = '30px';
// elementref2.style.listStyle = 'none';

const elementref2 = document.querySelectorAll('.site-nav__item');

// elementref2.forEach(item => {
//   item.style.paddingRight = '30px';
//   item.style.listStyle = 'none';
// });

// Це не зручно. Є ще один варіант.

const cssText = 'display: flex; justify-content: center; ';
elementref.style.cssText = cssText;

const cssText2 = 'padding-right: 30px; list-style: none';
elementref2.forEach(item => {
  item.style.cssText = cssText2;
});
