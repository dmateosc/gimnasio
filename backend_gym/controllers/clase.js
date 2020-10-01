//controlador de clases para comprobar las llamadas que se realizan y obtención de datos
//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
'use strict'

var Clase = require('../models/clase');

var fs = require('fs');
var path = require('path');

var controllerClase = {

    //inicio getClase
    getClase: function (req, res) {

        var params = req.params.nombre;
        var nombreClase = params.nombre;

        Clase.find({ nombre: nombreClase }, (err, clases) => {
            if (err) return res.status(500).send({ message: 'Error al obtener la clase.' });

            if (!userStored) return res.status(404).send({ message: 'La clase no existe.' });

            return res.status(200).send({ clase: clases });
        })



    }



}

module.exports = null;