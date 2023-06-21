//  валідація полів - зразок
// const Joi = require("joi");

// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate("asdsssd@"));

// генерація ID зразок
// const ShortId = require("shortid");
// console.log(ShortId.generate());

// express

const express = require("express");
const app = express();

app.use("*", (req, res) => {
  console.log("Був запит від браузера");
  res.send("<h1>Це мій HTML тобі у відповідь</h1>");
});

const listener = app.listen(4444, () => {
  //   console.log(listener);
  console.log(`Сервер запущений на порті ${listener.address().port}`);
});
