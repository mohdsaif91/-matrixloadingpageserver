const express = require("express");

const emojis = require("./emojis");
const auth = require("./auth");
const customerOrder = require("./customerOrder");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/auth", auth);
router.use("/order", customerOrder);

module.exports = router;
