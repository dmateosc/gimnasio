'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TablaSchema = new Schema({
    usuario :{
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    ejercicios: [{
        ejercicio:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Ejercicio'
        },
        dias:[Date],
        series:[
            {
                peso: Number,
                repeticiones: Number
            }

        ]
    }]


})


module.exports = mongoose.model('Tabla',TablaSchema);