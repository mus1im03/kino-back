const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  getUsers: async (req, res) => {
    try {
      const user = await User.find();
      await res.json(user);
    } catch (error) {
      res.json(error);
    }
  },

  createFavorite: async (req, res) => {
    const { film, id } = req.body;
    try {
      const user = await User.findById(id);

      if (user.favorites.includes(film)) {
        const favorite = await User.findByIdAndUpdate(
          id,
          { $pull: { favorites: film } },
          { new: true }
        );
        return res.json(favorite);
      }
      const favorite = await User.findByIdAndUpdate(
        id,
        { $push: { favorites: film } },
        { new: true }
      );
      res.status(201).json(favorite);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

 

  postUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDES)
      );

      const user = await User.create({ email: email, password: hash });

      await res.json(user);
    } catch (error) {
      res.json(error);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const candidate = await User.findOne({ login });

    if (!candidate) {
      return res.status(401).json("Неверный логин");
    }


    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json("Неверный пароль");
    }

    const payload = {

        id: candidate._id,
        email: candidate.email
    }


    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h",
    });

    res.json(token);
  },
};
