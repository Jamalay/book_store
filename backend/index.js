const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.use(require("./routes/book.route"));

mongoose
  .connect()
  .then(() => console.log("Подключение к MongoDB выполнена успешно!"))
  .catch(() => console.log("Ошибка при подключении к MongoDB!"));

app.listen(3001, () => {
  console.log("Server was started");
});
