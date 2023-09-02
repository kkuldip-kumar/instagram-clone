const express = require("express");
const {
  newPost,
  allPosts,
  postsFollowing,
  updatePost,
  postDetails,
  removePost,
  addNewComment,
  likeUnlikePost,
  saveUnSavePost,
} = require("../controllers/postController");
const configureMulter = require("../middlewares/fileUpload");
const upload = configureMulter("uploads");
const isAuthenticated = require("../middlewares/auth");
const router = express();

// uploadPost.single('post'),

router.post("/posts", upload.single("image"), isAuthenticated, newPost);
router.get("/posts", isAuthenticated, allPosts);
router.get("/posts/following", isAuthenticated, postsFollowing);
router.delete("/posts/:id", isAuthenticated, removePost);
router.put("/posts/:id", isAuthenticated, updatePost);
router.get("/posts/:id", isAuthenticated, postDetails);
router.get("/posts/likeUnlike/:id", isAuthenticated, likeUnlikePost);
router.get("/posts/saveUnSave/:id", isAuthenticated, saveUnSavePost);
router.post("/posts/comment/:id", isAuthenticated, addNewComment);

module.exports = router;
