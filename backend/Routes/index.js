const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);

module.exports = router;
