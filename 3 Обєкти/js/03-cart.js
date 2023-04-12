/*
 * Працюємо з колекцією товарів в корзині:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 
 { name: '🍎', price: 50 }
 { name: '🍇', price: 70 }
 { name: '🍋', price: 60 }
 { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    this.items = this.items.filter(item => item.name !== productName);
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
// cart.clear();
console.log(cart.countTotalPrice());
console.table(cart.getItems());
cart.remove('🍋');
console.table(cart.getItems());
console.table(cart.getItems());
