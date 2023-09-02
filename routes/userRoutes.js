const express = require("express");
const router = express();

const {
  signupUser,
  loginUser,
  followUser,
  getAllUsers,
  getUsersPosts,
} = require("../controllers/userController");
const isAuthenticated = require("../middlewares/auth");
router.get("/users/:userId/posts", isAuthenticated, getUsersPosts);

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/users", isAuthenticated, getAllUsers);
router.get("/users/follow/:id", isAuthenticated, followUser);

module.exports = router;
