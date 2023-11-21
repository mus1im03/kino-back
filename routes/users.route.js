const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const authMiddleware = require("../models/middlewares/auth.middleware");

const router = Router();

router.get("/users", authMiddleware, usersController.getUsers);
router.post("/auth", usersController.postUser);
router.post("/login", usersController.login);

module.exports = router;
