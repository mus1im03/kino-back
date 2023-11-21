const { Router } = require('express');
const { genresController } = require('../controllers/genres.controller');

const router = Router();

router.get('/genre', genresController.getGenres);
router.post('/genre', genresController.postGenre);

module.exports = router;