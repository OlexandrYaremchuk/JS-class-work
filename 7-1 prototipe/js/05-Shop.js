// Задача: Створити клас "Покупець" з методом "Купити товар", який дозволяє покупцю здійснювати покупки тільки в тих магазинах, які вказані у списку його улюблених магазинів. Використовуйте прототипне наслідування для створення цього класу.

// Рішення:

// Створимо батьківський клас "Покупець" зі списком улюблених магазинів та методом, який перевіряє, чи є даний магазин у списку улюблених:

function Buyer(favoriteShop) {
  this.favoriteShop = favoriteShop;
}

Buyer.prototype.doeTheShopHaveFavorites = function (shop) {
  return this.favoriteShop.includes(shop);
};

// Тепер ми можемо створити  "Купівля", який наслідується від класу "Покупець" та має метод "Купити товар", який перевіряє, чи може покупець купувати товар у заданому магазині:
function Purchase(favoriteShop, shop) {
  Buyer.call(this, favoriteShop);
  this.shop = shop;
}

Purchase.prototype = Object.create(Buyer.prototype);

Purchase.prototype.buyGoods = function () {
  if (this.doeTheShopHaveFavorites(this.shop)) {
    console.log('Товар куплено!');
  } else {
    console.log('Ви не можете купувати товар у цьому магазині!');
  }
};
// Тепер ми можемо створити об'єкт "Купівля" та викликати метод "Купити товар" для покупки товару у заданому магазині:
let buyer = new Purchase(['Магазин 1', 'Магазин 2'], 'Магазин 2');
buyer.buyGoods(); // "Товар куплено!"
