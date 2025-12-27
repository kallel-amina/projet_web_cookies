const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

// Example: get user profile
router.get("/profile", protect, (req, res) => {
  res.status(200).json({ message: "Welcome to your profile!", userId: req.userId });
});

module.exports = router;
