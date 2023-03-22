const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");
const userDataController = require("../Controllers/userDataController");
const forumController = require("../Controllers/fourmController");
const htmlTutorialController = require("../Controllers/htmlTutorialController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);

router.post("/addhtmlchapter", htmlTutorialController.addChapter);
router.get("/gethtmlchapter", htmlTutorialController.getAllData);

router.post("/createpost", forumController.createPost);
router.post("/addcomment", forumController.addCommentToPost);
router.post("/likepost", forumController.likePost);
router.get("/getallpost", forumController.getAllPosts);

router.get("/userdata", userDataController.userData);

module.exports = router;
