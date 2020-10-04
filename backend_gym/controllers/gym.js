//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
'use strict'

var fs = require('fs');
var path = require('path');
var Musculo = require('../models/musculo');
var Ejercicio = require('../models/ejercicio');
var User = require('../models/usuario');


var GymController = {


    uploadUserImage: function (req, res) {
        var projectId = req.params.id;
        var nickname = req.params.nickname;

        var fileName = req.file;
        var filePath = req.file.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

        if (nickname) {
            User.updateOne({ nickname: nickname }, {
                $set: { photo: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El ejercicio no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    ejercicio: imageUpdated
                });
            });
        } else if (projectId) {
            Ejercicio.findByIdAndUpdate(projectId, {
                $set: { photo: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El ejercicio no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    ejercicio: imageUpdated
                });
            });

        }

    },


    uploadEjercicioImage: function (req, res) {
        var projectId = req.params.id;
        var nombreEjercicio = req.params.nombre;

        var fileName = req.file;
        var filePath = req.file.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

        if (nombreEjercicio) {
            Ejercicio.updateOne({ name: nombreEjercicio }, {
                $push: { imagenes: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El ejercicio no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    ejercicio: imageUpdated
                });
            });
        } else if (projectId) {
            Ejercicio.findByIdAndUpdate(projectId, {
                $push: { imagenes: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El ejercicio no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    ejercicio: imageUpdated
                });
            });

        }

    },
    uploadMusculoImage: function (req, res) {
        var projectId = req.params.id;        
        var nombreMusculo = req.params.nombre;

        var fileName = req.file;
        var filePath = req.file.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

        if (nombreMusculo) {
            Musculo.updateOne({ name: nombreMusculo }, {
                $push: { imagenes: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El músculo no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    musculol: imageUpdated
                });
            });
        } else if (projectId) {
            Musculo.findByIdAndUpdate(projectId, {
                $push: { imagenes: fileName }
            }, { new: true }, (err, imageUpdated) => {
                if (err) return res.status(500).send("No se ha podido añadir la imagen");
                if (!imageUpdated) return res.status(404).send({ message: 'El músculo no existe y no se ha podido añadir la imagen' });

                return res.status(200).send({
                    musculol: imageUpdated
                });
            });

        }

    }


}

module.exports = GymController;








