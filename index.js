require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const path = require('path')
console.log(path.resolve(__dirname, 'public', 'img'))
app.use('/public/img', express.static(path.resolve(__dirname, 'public', 'img')))

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(require("./routes/users.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/films.route"));

const { PORT, MONGO_SERVER } = process.env;

connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () => {
      console.log(`Сервер запущен: ${PORT}`);
    });
  } catch (error) {
    console.log(`Ошибка при подключении: ${error.toString()}`);
  }
};

connectAndStartServer();
