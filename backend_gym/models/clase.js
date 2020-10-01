'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Clase = Schema({


    nombre: String,
    instructor: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
        //Objeto del tipo usuario
    }],
    horarios: [
        {
            hora : String,
            dia : Date,
            duracion: Number

        }

    ]
    
})
module.exports = mongoose.model('Clase', Clase);