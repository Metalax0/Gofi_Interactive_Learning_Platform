const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");
const userDataController = require("../Controllers/userDataController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/userdata", userDataController.userData);

module.exports = router;
