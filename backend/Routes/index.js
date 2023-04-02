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
router.post(
    "/updatetutorialprogress",
    userController.updateUserTutorialProgress
);
router.post("/updateTestProgress", userController.updateUserTestProgress);

router.post("/addhtmlchapter", htmlTutorialController.addChapter);
router.get("/gethtmlchapter", htmlTutorialController.getAllData);

router.post("/createpost", forumController.createPost);
router.post("/addcomment", forumController.addCommentToPost);
router.post("/likepost", forumController.likePost);
router.post("/deletepost", forumController.deletePostById);
router.get("/getallpost", forumController.getAllPosts);
router.get("/getallauthorpost", forumController.getAllAuthorPost);

router.get("/userdata", userDataController.userData);
router.get("/getUserStatistics", userDataController.getUserStatistics);

module.exports = router;
