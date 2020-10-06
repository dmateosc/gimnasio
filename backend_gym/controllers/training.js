"use strict";

var Tabla = require("../models/tabla");
const usuario = require("../models/usuario");
var User = require("../models/usuario");
var TrainingController = {
  getTrainingDay: function (req, res) {
    var params = req.params;
    var nickname = params.nickname;
    var day = params.day;

    if (day.length == 0) {
      day = Date.now();
    }
    Tabla.find(
      { nickname: nickname },
      { dias: { $exists: day } },
      (err, trainingTable) => {
        if(err) return res.status(500).send("Ha ocurrido un error al buscar el entrenamiento");
        return res.status(200).send({
          training: trainingTable,
        });
      }
    );
  },
  createTraining: function(req,res){

    var body = req.body;
    var nickname = body.usuario.nickname;
    var tabla = new Tabla();

    tabla.usuario = {
      nombre : body.usuario.nombre,
    };
    tabla.dias = body.dias;
    tabla.ejercicios = {
      ejercicio = body.ejercicios,
      series = body.series
    }

    tabla.save((err,trainingInsert) => {

      if(err) return res.status(500).send("No se ha podido almacenar el entrenamiento");

      if (!trainingInsert) return res.status(400).send("Entramiento no almacenado");

      User.findOneAndUpdate({nickname: nickname}, {$push: {
        entrenamientos: trainingInsert._id
      }});
      return res.status(200).send({
        message: "Se ha insertado correctamente"
      });
    })
  }
};
