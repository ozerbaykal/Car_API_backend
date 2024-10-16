const fs = require("fs");
const crypto = require("crypto");
const { isError } = require("util");
const write = require("../utils/write")

//araba verilerini al

let cars = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);
//bütün arabaları alır
exports.getAllCars = (req, res) => {
    res.status(200).json({
        message: "Araç verileri alındı",
        results: cars.length,
        cars,
    });
};

// yeni araç ekle
exports.createCar = (req, res) => {
    //araç verisine id ekle
    const newCar = { ...req.body, id: crypto.randomUUID() };

    //yeni aracı diziye ekle

    cars.push(newCar);

    //json dosyasını güncelle
    write(cars)

    res.status(201).json({
        message: "Yeni Araç oluşturuldu",
    });
};

//bir aracı al

exports.getCar = (req, res) => {



    res.status(200).json({
        message: "Araç bulundu",
        car: req.car,
    })
};
//bir aracı güncelle
exports.updateCar = (req, res) => {
    //isteğin body kısmındaki güncellenicek değerleri al
    const updatedData = req.body;

    //aracın güncel değerine sahip yeni bir nesne oluştur
    const updatedCar = { ...req.car, ...updatedData }
    //güncellencek elamanın sırasını bul
    const index = cars.findIndex((car) => car.id === updatedCar.id)
    //dizideki eski aracın yerine yeni aracı koy
    cars.splice(index, 1, updatedCar)
    //json dosyasını güncelle
    write(cars)
    //client'a cevap gönder
    res.status(200).json({
        message: "Araç güncellendi",
        car: updatedCar,
    });
};

//bir aracı sil

exports.deleteCar = (req, res) => {



    //İd si gelen aracı diziden kaldır
    cars = cars.filter((car) => car.id !== req.params.id)

    //json dosyasını güncelle
    write(cars)

    //client' a cevap gönder
    res.status(204).json({
        message: "Araç silindi",
    });
};
