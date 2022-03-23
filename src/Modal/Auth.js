const mongoose = require("mongoose");

const authModal = mongoose.Schema({
  userName: String,
  password: String,
});

const authSchema = mongoose.model("Auth", authModal);

module.exports = authSchema;
