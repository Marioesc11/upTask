const { Router } = require('express');
const express = require('express');
const router = express.Router();

const { body } = require('express-validator');
const proyectosController = require ('../controllers/proyectosController');

module.exports = function(){

//ruta para el home
    router.get('/', proyectosController.proyectosHome );
    router.get('/nuevo-proyecto',proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto);


    //lsitar proyecto

    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);
    return router;
}
