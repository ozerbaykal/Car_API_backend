const express = require("express");

const {
    getAllCars,
    deleteCar,
    getCar,
    updateCar,
    createCar,
} = require("./controllers");

//kurulum

const app = express();
const PORT = 3000;

//route/endpoint 'leri tanımlama

// app.get("/api/v1/cars", getAllCars);
// app.post("/api/v1/cars", createCar);

// app.get("/api/v1/cars/:id", getCar);
// app.patch("api/v1/cars/:kimlik", updateCar);
// app.delete("api/v1/cars/:id", deleteCar);

//end pointleri tanımlamada 2. yöntem
app.route("/api/v1/cars").get(getAllCars).post(createCar);
app.route("/api/v1/cars/:kimlik").get(getCar).patch(updateCar).delete(deleteCar);

//dinlencek portu belirle
app.listen(PORT, () => {
    console.log(`server ${PORT} portunu dinlemeye başladı`);
});
