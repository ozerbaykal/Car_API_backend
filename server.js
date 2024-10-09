const express = require("express");
const { logger } = require("./middleware");
const carRoutes = require("./routes/carRoute")


//kurulum
const app = express();
const PORT = 3000;

//Middleware (arayazılım)
app.use(logger);


// istekleri body/header/ param bölümlerine işleyen mw
app.use(express.json())

//route/endpoint'leri tanımla
app.use(carRoutes());


//dinlencek portu belirle
app.listen(PORT, () => {
    console.log(`server ${PORT} portunu dinlemeye başladı`);
});
