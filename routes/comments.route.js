const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get('/comments', commentsController.getComments);
router.post('/category', authMiddleware, commentsController.postComment);

module.exports = router;