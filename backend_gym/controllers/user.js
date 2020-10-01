//Controlador del gym (aqui van los metodos y todo lo que se vaya a realizar)
'use strict'

var User = require('../models/usuario');
var controllerClase = require('./clase');
var fs = require('fs');
var path = require('path');



var controllerUser = {

    //obtener usuario
    getUser: function(req,res){
        
        var params = req.body;
        var usuario = params.nickname;
        User.findById({nickname: usuario}, (err,user) =>{
            if(user){
                return res.status(200).send({
                    user: user
                });
            }

        }
        
        );




    }


}


module.exports = controllerUser;