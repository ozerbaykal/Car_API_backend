const express = require("express");

//kurulum

const app = express();
const PORT = 3000;


//route/endpoint

app.get("/api/v1/cars", (req, res) => { })
app.post("/api/v1/cars", (req, res) => { })


app.get("/api/v1/cars/:id", (req, res) => { })
app.patch("api/v1/cars/:kimlik", (req, res) => { })
app.delete("api/v1/cars/kimlik:", (req, res) => { })



//dinlencek portu belirle
app.listen((PORT, () => {

    console.log(`server ${PORT} portunu dinlemeye başladı`);

}))