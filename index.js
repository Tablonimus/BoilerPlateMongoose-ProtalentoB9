const { app, port } = require("./src/app");
const { connection } = require("./src/db");

// // /* -------SINCRONIZAMOS BASE DE DATOS Y SERVIDOR EXPRESS------------- */

connection().then(
  app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`);
  })
);

