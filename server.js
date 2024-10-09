const express = require("express");

const {
    getAllCars,
    deleteCar,
    getCar,
    updateCar,
    createCar,
} = require("./controllers");
const { logger } = require("./middleware");

//kurulum

const app = express();
const PORT = 3000;

//Middleware (arayazılım)
app.use(logger);

// istekleri body/header/ param bölümlerine işleyen mw
app.use(express.json())

//end pointleri tanımlamada 2. yöntem
app.route("/api/v1/cars").get(getAllCars).post(createCar);
app.route("/api/v1/cars/:kimlik").get(getCar).patch(updateCar).delete(deleteCar);

//dinlencek portu belirle
app.listen(PORT, () => {
    console.log(`server ${PORT} portunu dinlemeye başladı`);
});
