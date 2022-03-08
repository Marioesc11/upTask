const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//helpers con algunas funciones
const helpers = require('./helpers');

//crear conexion a la bd

const db = require('./config/db');
//importar modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('conectado al sv'))
    .catch(error => console.log(error));

const app = express();
app.use(express.static('public'));

//habilitar pug
app.set('view engine', 'pug');

//añadir carpeta de vistas
app.set('views', path.join(__dirname, './views'));

//pasar vardump
app.use((req,res,next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

//habilitar bodyParser para leer datos del formualario
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes());

app.listen(3000);