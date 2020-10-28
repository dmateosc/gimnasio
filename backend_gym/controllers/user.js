//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
"use strict";


//No existe un actualizar usuario ya que el usuario no puede modificar algunos parametros
var User = require("../models/usuario");
var Clase = require("../models/clase");

var UserController = {
  //obtener usuario
  getUserById: function (req, res) {
    var params = req.params;
    var id = params.id;
    User.findById(id, (err, user) => {
      if (user) {
        return res.status(200).send({
          user: user,
        });
      }
    });
  },

  //creamos usuarios
  createUser: function (req, res) {
    var user = new User();
    //var clase = new Clase();

    var body = req.body;
    user.nickname = body._nickname;
    User.find(
      { nickname: body._nickname, email: body._email },
      (err, userExist) => {
        if (userExist.length >= 1) {
          return res.status(400).send("El usuario ya existe");
        } else {
          user.nombre = body._nombre;
          user.password = body._password;
          user.apellidos = body._apellidos;
          user.dni = body._apellidos || "";
          user.edad = body._edad;
          user.email = body._email;

          if (body._categoria) {
            body._categoria.forEach((element) => {
              user.categoria.push(element);
            });
          }
          user.entrenador = "";
          user.estado = [];
          user.objetivo = body._objetivo;
          user.clases = [];
          user.pagos = [];
          user.active = true;
          user.entrenamientos = [];
          user.save((err, userStored) => {
            if (err)
              return res
                .status(500)
                .send({ message: "Error al guardar el usuario." });

            if (!userStored)
              return res
                .status(404)
                .send({ message: "No se ha podido guardar el usuario." });

            return res.status(200).send({ user: userStored });
          });
        }
      }
    );
  }, //fin createUser
  //inicio getId
  login: function (req, res) {
    var body = req.body;
    var nickname = body.nickname;
    var password = body.password;

    User.findOne(
      { nickname: nickname, password: password },
      (err, userLoged) => {
        if (err)
          return res.status(500).send({ message: "Error en el servicio." });

        if (!userLoged)
          return res.status(401).send({ message: "El usuario no existe." });

        return res.status(200).send({ id: userLoged._id });
      }
    );
  },
  //Actualiza los datos del usuario
  updateStatusUser: function (req, res) {
    var body = req.body;
    var nickname = body._nickname;
    var objetivo = body._objetivo;
    var categoria = body._categoria;
    if (body._estado) {
      var estado = {
        fecha: Date.now(),
        peso: body._estado.peso,
        masa_coporal: body._estado.masa_coporal,
        musculo: body._estado.musculo,
        grasa: body._estado.grasa,
        grasa_visceral: body._estado.grasa_visceral,
      };
    }

    //Se actualizan los campos de estado
    User.updateOne(
      { nickname: nickname },
      {
        $set: { objetivo: objetivo, categoria: categoria },
        $push: {
          estado: estado,
        },
      }
    );
  },
  //Actualiza las clases del usuario
  updateClaseUser: function (req, res) {
    var body = req.body;
    var nickname = body._nickname;

    var clase = new Clase();
    clase.nombre = body._nombre;

    //Se actualizan los campos de estado
    User.updateOne(
      { nickname: nickname },
      {
        $push: {
          clase: clase,
        },
      }
    );
  },
};

module.exports = UserController;
