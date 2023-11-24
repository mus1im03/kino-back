const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  favorites: [{type: mongoose.SchemaTypes.ObjectId,
  ref:"Film"
}],
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;
