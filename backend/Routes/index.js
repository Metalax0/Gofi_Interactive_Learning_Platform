const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");
const userDataController = require("../Controllers/userDataController");
const forumController = require("../Controllers/fourmController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post("/createpost", forumController.createPost);
router.post("/addcomment", forumController.addCommentToPost);
router.get("/getallpost", forumController.getAllPosts);
router.get("/userdata", userDataController.userData);

module.exports = router;
