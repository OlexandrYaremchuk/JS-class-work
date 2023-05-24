const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендеримо розмітку елементів списку
 * 2. Слухаємо зміни фільтра
 * 3. Фільтруємо дані та рендиримо нові елементи
 * 4. Fuse.js - https://fusejs.io (пухнастий пошук) - бібліотека
 */

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

refs.input.addEventListener('input', onFilterChange);
// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));
// refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
refs.list.innerHTML = listItemsMarkup;
// populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
  console.log('INPUT');
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter(t =>
    t.label.toLowerCase().includes(filter),
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  console.log(listItemsMarkup);
  // populateList(listItemsMarkup);
  refs.list.innerHTML = listItemsMarkup;
}

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }
