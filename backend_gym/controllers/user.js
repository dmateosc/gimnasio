//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
'use strict'

const { findByIdAndUpdate } = require('../models/usuario');
var User = require('../models/usuario');
var Clase = require('../models/clase');
var controllerClase = require('./clase');
var controllerGym = require('./gym');



var UserController = {

    //obtener usuario
    getUser: function (req, res) {

        var params = req.params;
        var nickname = params.nickname;
        User.find({ nickname: nickname }, (err, user) => {
            if (user) {
                return res.status(200).send({
                    user: user
                });
            }

        }

        );
    },

    //creamos usuarios
    createUser: function (req, res) {

        var user = new User();
        //var clase = new Clase();

        var body = req.body;
        user.nickname = body.nickname;
        User.find({ "nickname": body.nickname, "email": body.email }, (err, userExist) => {
            if (userExist.length >= 1) {
                return res.status(400).send("El usuario ya existe");
            } else {
                user.nombre = body.nombre;
                user.apellidos = body.apellidos;
                user.dni = body.apellidos || "";
                user.edad = body.edad;
                user.email = body.email;

                if (body.categoria) {
                    body.categoria.forEach(element => {
                        user.categoria.push(element);
                    });
                }
                user.entrenador = null;
                user.estado = null;
                user.objetivo = body.objetivo;
                user.clases = null;
                user.pagos = null;
                user.save((err, userStored) => {

                    if (err) return res.status(500).send({ message: 'Error al guardar el usuario.' });

                    if (!userStored) return res.status(404).send({ message: 'No se ha podido guardar el usuario.' });

                    return res.status(200).send({ user: userStored });


                })
            }

        })

    }//fin createUser
    ,
    //inicio getId
    login: function (req, res) {

        var body = req.body;
        var nickname = body.nickname;
        var password = body.password;

        User.findOne({ nickname: nickname, password: password }, (err, userLoged) => {
            if (err) return res.status(500).send({ message: 'Error en el servicio.' });

            if (!userLoged) return res.status(401).send({ message: 'El usuario no existe.' });

            return res.status(200).send({ id: userLoged._id });
        })

    },
    //Actualiza los datos del usuario
    updateStatusUser: function (req, res) {
        var body = req.body;
        var nickname = body.nickname;


        User.findOne({ nickname: nickname, password: password }, (err, userLoged) => {

            var objetivo = body.objetivo;
            var categoria = body.categoria;
            if (body.estado) {
                var estado = {
                    fecha: Date.now(),
                    peso: body.estado.peso,
                    masa_coporal: body.estado.masa_coporal,
                    musculo: body.estado.musculo,
                    grasa: body.estado.grasa,
                    grasa_visceral: body.estado.grasa_visceral
                }
            }

            //Se actualizan los campos de estado
            User.updateOne({ nickname: nickname }, {
                $set:
                    { objetivo: objetivo, categoria: categoria },
                $push: {
                    estado: estado
                }
            })

        })

    },
     //Actualiza las clases del usuario
     updateClaseUser: function (req, res) {
        var body = req.body;
        var nickname = body.nickname;


        User.findOne({ nickname: nickname, password: password }, (err, userLoged) => {
            var clase = new Clase();

            clase.nombre = body.nombre;

            //Se actualizan los campos de estado
            User.updateOne({ nickname: nickname }, {
                $push: {
                    clase: clase
                }
            })

        })

    }


}


module.exports = UserController;