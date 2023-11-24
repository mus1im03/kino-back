const { Router } = require('express');
const { commentsController } = require('../controllers/comments.controller');
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get('/comments/:filmId', commentsController.getComments);
router.post('/comments/:filmId', commentsController.postComment);

module.exports = router;