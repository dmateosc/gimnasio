'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TablaSchema = new Schema({
    usuario :{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    dias:[Date],
    ejercicios: [{
        ejercicio:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Ejercicio'
        },
        series:[
            {
                peso: Number,
                repeticiones: Number
            }

        ]
    }]


})


module.exports = mongoose.model('Tabla',TablaSchema);