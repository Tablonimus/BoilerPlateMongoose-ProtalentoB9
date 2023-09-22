# boilerPlate-ProtalentoB9-MONGOOSE
Mongo + Express + Node

# pasos a seguir en la creacion luego de clonar un proyecto vacio
1- `npm init -y` para iniciar nuestro proyecto.
2- crear scripts en el package.json.
3- instalar dependencias
  a- `npm i nodemon -D`
  b- `npm install --save express cors mongodb mongoose`
4- Crear un archivo index.js para conectar al iniciar scripts de npm, ej: `npm start` ó `npm run dev`
5- Crear estructura de carpetas del proeyecto (src y su contenido )
6- Crear app.js y db.js dentro de carpeta /src
7- Crear un archivo .gitignore en carpeta raiz y agregar node_modules
8- `git add .`
9- `git commit -m "un comentario"`
10-`git push`

# Pasos para iniciar el proyecto clonado
1- Copiar en enlace de git-hub
2- `git clone https://...............`
3- Abrirlo con visual y `npm install`
4- Cambiar credenciales de PG/Sequelize
5- Crean un modelo
6- lo vinculan en db.js
7- lo importan en una ruta(app.js)
8- levantan el servidor `npm run dev`