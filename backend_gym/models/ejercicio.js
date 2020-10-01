'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Ejercicio = Schema({


    nombre: String,
    musculos: [{
        type: mongoose.Schema.Types.ObjectId, ref : 'Musculo'
    }
    ],
    imagenes : [String]
    
})
module.exports = mongoose.model('Ejercicio', Ejercicio);