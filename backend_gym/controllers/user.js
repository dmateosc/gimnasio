//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
'use strict'

var User = require('../models/usuario');
var controllerClase = require('./clase');
var fs = require('fs');
var path = require('path');
const { map } = require('../app');



var controllerUser = {

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
    login: function(req,res){

        var body = req.body;
        var user = body.user;
        var password = body.password;

        User.findOne({user: user, password: password}, (err,userLoged)=>{
            if (err) return res.status(500).send({ message: 'Error en el servicio.' });

            if (!userLoged) return res.status(401).send({ message: 'El usuario no existe.' });

            return res.status(200).send({ id: userLoged._id });
        })




    }


}


module.exports = controllerUser;