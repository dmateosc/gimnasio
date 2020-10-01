//Se encarga de redireccionar el path asociado a cada uno de los controladores

'use strict'

var express = require('express');
var GymController = require('../controllers/gym');
var UserController = require('../controllers/user');

var router = express.Router();

var multer = require('multer');


router.get(['/user/:nickname','/user/:id','/user/:email'], UserController.getUser);


module.exports = router;