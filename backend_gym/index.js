//Se encarga de la carga inicial de la aplicación, cargara la conexión a la base de datos y tendrá el servidor a la escucha 
//de los diferentes servicios de fondo
'use strict'

var mongoose = require('mongoose');

var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/gym',{ useNewUrlParser: true,useUnifiedTopology: true })
        .then(() => {
			
        	console.log("Conexión a la base de datos establecida satisfactoriamente...");

        	// Creacion del servidor
        	app.listen(port, () => {
        		console.log("Servidor corriendo correctamente en la url: localhost:3700");
        	});

        })
        .catch(err => console.log(err));