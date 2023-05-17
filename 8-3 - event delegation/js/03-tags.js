/*
 * Делегування
 * - один з багатьох
 * - декілька з багатьох та Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }

const tagsContainer = document.querySelector('.js-tags');
const selectedTags = [];
// const selectedTags = new Set();  // набір унікальних елементів. Допустимо, якщо ми туди передамо дві пятірки то він залишить лиш одну. Дубляжів там немає
// selectedTags.add(5);
// selectedTags.add(5);
// selectedTags.add(5);

// selectedTags.add(4);
// selectedTags.add(4);

// selectedTags.add({ a: 1 });
// selectedTags.add({ a: 1 }); //у випадку з обʼєктами додасть бива, тому що це не дублі у них окремі посилання на місце в памяті

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  evt.target.classList.toggle('tags__btn--active');
  selectedTags.push(evt.target.dataset.value);
  console.log(selectedTags);

  // const btn = evt.target;
  // const tag = btn.dataset.value;
  // const isActive = btn.classList.contains('tags__btn--active'); //повертає будь, показує чи клас чи немає
  // if (isActive) {
  //   selectedTags.delete(tag);
  // } else {
  //   selectedTags.add(tag);
  // }

  // btn.classList.toggle('tags__btn--active');
  // console.log(selectedTags);
}
