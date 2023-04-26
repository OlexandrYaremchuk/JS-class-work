// Напишіть програму, яка дозволить користувачу створити список контактів. Кожен контакт містить ім'я, прізвище, номер телефону та електронну адресу. Користувач повинен мати можливість додавати нові контакти, видаляти існуючі, а також переглядати всі контакти в списку.

let contactsManager = {
  contacts: [],
  addContacts(newContact) {
    this.contacts.push(newContact);
  },
  deleteContact(index) {
    this.contacts.splice(index, 1);
  },
  viewContacts() {
    console.dir(this.contacts);
  },
};

contactsManager.addContacts({
  firstName: 'Olha',
  lastName: 'Doe',
  phone: '123-456-78',
  email: 'olha@example.com',
});
contactsManager.addContacts({
  firstName: 'Liza',
  lastName: 'Dir',
  phone: '123-456-234',
  email: 'liza@example.com',
});
contactsManager.addContacts({
  firstName: 'Liza',
  lastName: 'Dir',
  phone: '123-456-234',
  email: 'liza@example.com',
});
console.dir(contactsManager.contacts);
contactsManager.viewContacts();
