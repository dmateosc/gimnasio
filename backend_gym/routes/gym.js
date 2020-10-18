//Se encarga de redireccionar el path asociado a cada uno de los controladores

"use strict";

var express = require("express");
var GymController = require("../controllers/gym");
var UserController = require("../controllers/user");
var TrainingController = require("../controllers/training");
var EjercicioController = require("../controllers/exercise");
const MusculoController = require("../controllers/muscle");

var router = express.Router();
var multer = require("multer");


var userStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/user");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var muscleStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/muscles");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var exerciseStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/exercise");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var multiMiddlewareMuscle = multer({ storage: muscleStore });
var multiMiddlewareExercise = multer({ storage: userStore });
var multiMiddlewareUser = multer({ storage: exerciseStore });

//Usuario
router.get(
  ["/user/:nickname", "/user/:id", "/user/:email"],
  UserController.getUser
);
router.put("/user-status/:nickname", UserController.updateStatusUser);
router.put("/user-class/:nickname", UserController.updateClaseUser);
router.post("/create-user", UserController.createUser);
router.post("/login", UserController.login);

//Subida de imagenes
router.post(
  ["/image-muscle-id/:id", "/image-muscle-name/:nombre"],
  multiMiddlewareMuscle.single("image"),
  GymController.uploadMusculoImage
);
router.post(
  ["/image-user/:id", "/image-user/:nombre"],
  multiMiddlewareUser.single("image"),
  GymController.uploadUserImage
);
router.post(
  ["/image-exercise/:id", "/image-exercise/:nombre"],
  multiMiddlewareExercise.single("image"),
  GymController.uploadEjercicioImage
);
//obtener imagenes
router.get('/image/:image/:type',GymController.getImage);
//Entrenamientos
router.get('/training/:nickname/:day',TrainingController.getTrainingDay);
router.post('/training',TrainingController.createTraining);
//Ejercicios
router.get('/exercise/:nombre', EjercicioController.getEjercicio);
router.post('/create-exercise', EjercicioController.createEjercicio);
//Musculo
router.get('/muscle/:nombre', MusculoController.getMusculo);
router.post('/create-muscle', MusculoController.createMusculo);



module.exports = router;
