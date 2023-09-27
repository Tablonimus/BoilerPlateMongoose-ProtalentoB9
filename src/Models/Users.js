const mongoose = require("mongoose");

const UserSchemma = new mongoose.Schema({
  name: String,
});

const User = mongoose.model("User", UserSchemma);

module.exports = User;