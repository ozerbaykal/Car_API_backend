const fs = require("fs")

//araba verilerini al

let cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")

)
//bütün arabaları alır
exports.getAllCars = (req, res) => {
    res.status(200).json({

        message: "Araç verileri alındı",
        results: cars.length,
        cars,
    })
}

// yeni araç ekle 
exports.createCar = (req, res) => {
    res.status(201).json({

        message: "Yeni Araç oluşturuldu",
    })
}

//bir aracı al

exports.getCar = (req, res) => {
    res.status(200).json({

        message: "Araç bulundu",
    })
}
//bir aracı güncelle
exports.updateCar = (req, res) => {
    res.status(200).json({

        message: "Araç güncellendi",
    })
}

//bir aracı sil

exports.deleteCar = (req, res) => {
    res.status(203).json({

        message: "Araç silindi",
    })
}