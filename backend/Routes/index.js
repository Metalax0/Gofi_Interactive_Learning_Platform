const express = require("express");
const router = express.Router();

// Import controllers here
const userController = require("../Controllers/userController");
const userDataController = require("../Controllers/userDataController");
const forumController = require("../Controllers/fourmController");

// Define routes here
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.post(
    "/updatetutorialprogress",
    userController.updateUserTutorialProgress
);
router.post("/updateTestProgress", userController.updateUserTestProgress);

router.post("/createpost", forumController.createPost);
router.post("/addcomment", forumController.addCommentToPost);
router.post("/likepost", forumController.likePost);
router.post("/deletepost", forumController.deletePostById);
router.post("/deletecomment", forumController.deleteCommentByIndex);
router.get("/getallpost", forumController.getAllPosts);
router.get("/getallauthorpost", forumController.getAllAuthorPost);

router.get("/alluserdata", userDataController.getUsers);
router.post("/deleteuser", userDataController.deleteUserById);

router.get("/userdata", userDataController.userData);
router.get("/getUserStatistics", userDataController.getUserStatistics);

module.exports = router;
