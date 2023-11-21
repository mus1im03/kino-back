const { Router } = require("express");
const { filmsController } = require("../controllers/film.controller");

const router = Router();

router.get("/film", filmsController.getFilms);
router.post("/film", filmsController.postFilm);

module.exports = router;
