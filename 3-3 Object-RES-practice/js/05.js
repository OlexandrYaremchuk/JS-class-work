// Напишіть функцію getObjectWithoutProperty, яка приймає обʼєкт, назву властивості та повертає копію обʼєкта без цієї властивості
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

function getObjectWithoutProperty(obj, key) {
  const newObj = { ...user };
  console.table(newObj);
  delete newObj[key];
  return newObj;
}

console.table(getObjectWithoutProperty(user, "name"));
