//Controlador de ejercicios, aqui se realizan todas las acciones que permitiran, obtener
//borrar, modificar y crear elementos
"use strict";
const Ejercicio = require("../models/ejercicio");

var EjercicioController = {
  //permite crear un ejercicio por su nombre
  getEjercicio: function (req, res) {
    var params = req.params;
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
  //Crea un ejercicio
  createEjercicio: function (req, res) {
    var body = req.body;
    var ejercicio = new Ejercicio();
    ejercicio.nombre = body.nombre;
    ejercicio.musculo = body.musculo;
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
};
module.exports = EjercicioController;
