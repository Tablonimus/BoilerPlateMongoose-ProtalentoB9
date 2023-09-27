const mongoose = require("mongoose");

const gatitoSchemma = new mongoose.Schema({
  name: String,
});

const Gatito = mongoose.model("Gatito", gatitoSchemma);

module.exports = Gatito;
