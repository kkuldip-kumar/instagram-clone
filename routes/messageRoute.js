const express = require("express");
const {
  newMessage,
  getAllMessages,
} = require("../controllers/messageController");

const isAuthenticated = require("../middlewares/auth");

const router = express.Router();

router.get("/messages/:id", isAuthenticated, getAllMessages);
router.post("/messages", isAuthenticated, newMessage);

module.exports = router;
