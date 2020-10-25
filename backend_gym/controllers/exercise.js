//Controlador de ejercicios, aqui se realizan todas las acciones que permitiran, obtener
//borrar, modificar y crear elementos
"use strict";
const Ejercicio = require("../models/ejercicio");

var EjercicioController = {
  //permite obtener un ejercicio por su nombre
  getEjercicio: function (req, res) {
    var params = req.body;
    var nombreEjercicio = params.ejercicio;

    Ejercicio.findOne({ nombre: nombreEjercicio }, (err, ejercicios) => {
      if (err)
        return res.status(500).send({
          messageError: "Ha ocurrido un error al obtener el ejercicio",
        });

      if (!ejercicios)
        return res
          .status(404)
          .send({ messageError: "No ha encontrado el registro" });

      return res.status(200).send({
        ejercicios: ejercicios,
      });
    });
  },
  //permite obtener un ejercicio por nombre de musculo
  getEjercicioByMuscle: function (req, res) {
    var params = req.params;
    var musculos = params.musculos;

    Ejercicio.find(
      {
        musculo: {
          musculos,
        },
      },
      (err, ejercicios) => {
        if (err)
          return res.status(500).send({
            messageError: "Ha ocurrido un error al obtener el ejercicio",
          });

        if (!ejercicios)
          return res
            .status(404)
            .send({ messageError: "No ha encontrado el registro" });

        return res.status(200).send({
          ejercicios: ejercicios,
        });
      }
    );
  },
  //Crea un ejercicio
  createEjercicio: function (req, res) {
    var body = req.body;
    var ejercicio = new Ejercicio();
    ejercicio.nombre = body.nombre;
    ejercicio.musculos = body.musculos;
    ejercicio.imagen = [];

    ejercicio.save((err, createdExercise) => {
      if (err)
        return res.status(500).send({
          messageError: "Ha ocurrido un error al crear el ejercicio",
        });
      if (!createdExercise)
        return res.status(400).send({
          message: "No se ha registrado el ejercicio",
        });

      return res.status(200).send({
        ejercicio: createdExercise,
      });
    });
  },
  //Crea varios ejercicios
  createEjercicios: function (req, res) {
    var body = req.body;
    var ejerciciosCreados = new Array();
    for( var element in body){
      var ejercicio = new Ejercicio();
      ejercicio.nombre = element.nombre;
      ejercicio.musculos = element.musculos;
      ejercicio.imagen = element.imagen;
      console.debug("El ejercicio a crear es " + ejercicio);
      ejercicio.save((err, createdExercise) => {
        if (err)
          return res.status(500).send({
            messageError: "Ha ocurrido un error al crear el ejercicio",
          });
        if (!createdExercise)
          return res.status(400).send({
            message: "No se ha registrado el ejercicio",
          });
        ejerciciosCreados.push(createdExercise.toString);
        console.debug("Los ejercicios creados son " + ejerciciosCreados);
      });
    };


    return res.status(200).send({
      ejercicio: ejerciciosCreados
    });
  },
};
module.exports = EjercicioController;
