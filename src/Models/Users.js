const mongoose = require("mongoose");

const UserSchemma = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  identification_number: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  cats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gatito" }],
});

const User = mongoose.model("User", UserSchemma);

module.exports = User;
