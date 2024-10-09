const express = require("express");
const {
    getAllCars,
    deleteCar,
    getCar,
    updateCar,
    createCar,
} = require("../controllers");
const idControl = require("../middleware/idControl");

//Router> server.js dosyası dışarısında route tanımı yapmamızı sağlar
const router = express.Router();

// router'a endpointler ve istek geldiğinde çalışcak fonk. belirliyoruz
router
    .route("/api/v1/cars")
    .get(getAllCars)
    .post(createCar);

router
    .route("/api/v1/cars/:id")
    .get(idControl, getCar)
    .patch(idControl, updateCar)
    .delete(idControl, deleteCar);
//server.js'e router'ı tanımlamak için export ettik
module.exports = router;