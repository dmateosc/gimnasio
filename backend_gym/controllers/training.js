"use strict";

var Tabla = require("../models/tabla");

var TrainingController = {
  getTrainingDay: function (req, res) {
    var params = req.params;
    var nickname = params.nickname;
    var day = params.day;

    if (day.length == 0) {
      day = Date.now();
    }
    Tabla.find(
      { nickname: nickname },
      { dias: { $exists: day } },
      (err, trainingTable) => {
        return res.status(200).send({
          training: trainingTable,
        });
      }
    );
  },
};
