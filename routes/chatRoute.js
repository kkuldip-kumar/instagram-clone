const express = require("express");
const { newChat, getAllChats } = require("../controllers/chatController");

const isAuthenticated = require("../middlewares/auth");

const router = express.Router();

router.get("/chats", isAuthenticated, getAllChats);
router.post("/chats", isAuthenticated, newChat);

module.exports = router;
