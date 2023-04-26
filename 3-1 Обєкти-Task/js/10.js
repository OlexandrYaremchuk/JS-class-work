// Ви програмуєте онлайн магазин і потрібно створити функцію, яка приймає на вхід об'єкт з інформацією про товар, включаючи назву товару, його ціну та кількість на складі. Функція повинна повертати рядок з описом товару та його ціни з подальшим застосуванням знижки, якщо така є. Якщо товару немає на складі, функція повинна повернути повідомлення про це.

const product1 = {
  name: 'Сорочка',
  price: 100,
  stock: 10,
  discount: 20,
};

const product2 = {
  name: 'Кроси',
  price: 500,
  stock: 80,
  discount: 10,
};

function getProductDescription(product) {
  let description = `${product.name} - ${product.price} грн.`;
  if (product.stock > 0) {
    if (product.discount) {
      const discountedPrice = product.price * (1 - product.discount / 100);
      description += `(зі знижкою ) - ${product.discount}%, ціна сьогодні ${discountedPrice} грн.`;
    }
    return description;
  } else {
    return `${product.name} недоступний на складі`;
  }
}

console.log(getProductDescription(product1));
console.log(getProductDescription(product2));
