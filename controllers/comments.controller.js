const Comment = require("../models/Comment.model");

module.exports.commentsController = {

  getComments: async (req, res) => {
    const comment = await Comment.find();

    res.json(comment);
  },
  
  postComment: async (req, res) => {
    const { text } = req.body;

    try {
      const comment = await Comment.create({ text });
      await res.json(comment);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },

  // deleteComment: async (req, res) => {
  //   const { id } = req.params;

  //   try {
  //     const comment = await Comment.findById(id);

  //     if (comment.user.toString() === req.user.id) {
  //       await Item.findByIdAndRemove(id);
        
  //        return res.json("deleted");
  //     }

  //     return res.status(401).json("Ошибка нет доступа");
  //   } catch (e) {
  //     return res.json("Ошибка: " + e.toString());
  //   }
  // },
};