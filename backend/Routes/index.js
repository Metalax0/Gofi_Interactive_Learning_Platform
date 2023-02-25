const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");
const userDataController = require("../Controllers/userDataController");
const forumPostController = require("../Controllers/fourmPostController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/createpost", forumPostController.createPost);
router.get("/getallpost", forumPostController.getAllPosts);
router.get("/userdata", userDataController.userData);

module.exports = router;
