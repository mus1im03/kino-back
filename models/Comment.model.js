const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  film: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Film'
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
