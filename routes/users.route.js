const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");
const { route } = require("./comments.route");

const router = Router();

router.get("/users", usersController.getUsers);
router.post("/auth", usersController.postUser);
router.post("/login", usersController.login);
router.patch("/favorite", usersController.createFavorite)
router.patch("/favorite/:id")

module.exports = router;
