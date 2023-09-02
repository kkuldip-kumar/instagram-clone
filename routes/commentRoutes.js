const express = require("express");
const {
  removeComment,
  likeUnlikeComment,
  addNewReply,
  likeUnlikeReply,
  removeReply,
} = require("../controllers/commentController");

const isAuthenticated = require("../middlewares/auth");
const router = express();

router.delete("/comment/:id", isAuthenticated, removeComment);
router.get("/comment/likeUnlike/:id", isAuthenticated, likeUnlikeComment);
router.delete("/reply/:id", isAuthenticated, removeReply);
router.get("/reply/likeUnlike/:id", isAuthenticated, likeUnlikeReply);
router.post("/reply/:id", isAuthenticated, addNewReply);

module.exports = router;
