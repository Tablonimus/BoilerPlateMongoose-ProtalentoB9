// /*-------------------------EXPRESS-------------- */
// /* Conexión y configuración de express */
const express = require("express"); //importo el modulo de express
const cors = require("cors"); //importo el modulo de cors
const app = express(); // lo ejecutamos y guardamos en una variable (guardamos una INSTANCIA de express)
const port = 3000; // constante del puerto que levantare en el servidor
//conectamos a mongo---
require("./db.js"); /* ESTA LINEA ME CONECTA CON MONGO DB */

// /* ------MIDDLEWARES (configuraciones express)---------------------------------------------------------- */
app.use(express.json()); /*--Para aceptar json(body) en mis peticiones http-- */
app.use(cors()); /* Para aceptar peticiones del front o postman*/

/* -------------------------- */
// /* Vinculo mis modelos para usar rutas */
const Gatito = require("./Models/Gatitos"); /* Conectamos el model correspondiente */
const User = require("./Models/Users");
// /* RUTAS */

app.get("/", (req, res) => {
  res.send(
    "Hello World!, Ruta inicial de ejemplo, Bienvenido a la api de marketplace de protalento y mongoose"
  );
});

app.get("/user", async (req, res) => {
  try {
    const { email, password } = req.body;

    //buscar si el mail o usuario existe
    const userFound = await User.findOne({ email: email })

    if (!userFound) {
      res.status(400).send("El email ingresado no es correcto");
    }
    //comparar la contraseña
    const matchedPassword = await User.comparePassword(
      password,
      userFound.password
    );
    if (!matchedPassword) {
      res.status(400).send("La contraseña ingresada no es correcta");
    }

    //aca es donde se crea y devuelve el token-----

    res.status(200).json(userFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/gatito", (req, res) => {
  const name = req.query.name;
  const nuevoGatito = Gatito.create({ name: name });
  res.json("Gato creado correctamente");
});

app.post("/user", async (req, res) => {
  const {
    username,
    email,
    identification_number,
    password,
    phone_number,
    cats, // ["Roberto", "Esteban"]
  } = req.body;

  const catsFound = await Gatito.find({ name: { $in: cats } });

  /* crear la instancia del usuario */
  const user = new User({
    username: username,
    email: email,
    identification_number: identification_number,
    password: password, //123456 =>cambia por el hash de encryptPassword()
    phone_number: phone_number,
    cats: catsFound.map((cat) => cat._id), //=> [new ObjectId("651cb3a8f62c611047c7be57"),new ObjectId("651cb3b5f62c611047c7be59"),]
  });
  /* Debemos encriptar la contraseña */
  user.password = await User.encryptPassword(password);

  /* Guardo en la base de datos */
  const newUser = user.save();

  res.status(200).json({
    _id: newUser._id,
    username: newUser.username,
    mail: newUser.email,
  });
});

/* -------------------------------- */
module.exports = { app, port };
