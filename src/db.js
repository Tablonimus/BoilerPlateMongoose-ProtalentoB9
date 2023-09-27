const mongoose = require("mongoose"); /* importo el módulo de mongoose */

async function connection() {
  await mongoose
    .connect(
      "mongodb+srv://tablonimus:1234@loginprotalentob9.27qa4ty.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log("Base de datos Mongo conectada"))
    .catch((err) => console.log(err));
}

module.exports = { connection };
