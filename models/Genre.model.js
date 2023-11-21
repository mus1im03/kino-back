const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  title: String,
  filmId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Film",
  }
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;