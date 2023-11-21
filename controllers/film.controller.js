const Film = require("../models/Film.model");

module.exports.filmsController = {
  getFilms: async (req, res) => {
    const film = await Film.find();

    res.json(film);
  },

  postFilm: async (req, res) => {
    const {
      years,
      country,
      duration,
      director,
      cast,
      image,
      name,
      description,
      url,
      grade,
      likes,
      dislikes,
      categoryId,
      genreId,
    } = req.body;

    try {
      const film = await Film.create({
        years,
        country,
        duration,
        director,
        cast,
        image,
        name,
        description,
        url,
        grade,
        likes,
        dislikes,
        genreId,
      });
      await res.json(film);
    } catch (e) {
      return res.status(401).json(e.toString());
    }
  },
};
