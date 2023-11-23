const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get('/comments', commentsController.getComments);
router.post('/comments', authMiddleware, commentsController.postComment);

module.exports = router;