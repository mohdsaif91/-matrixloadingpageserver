const express = require("express");
const router = express.Router();

const AuthController = require("../Controller/loginController");

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signUp);

module.exports = router;
