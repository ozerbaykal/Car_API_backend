const fs = require("fs")

//araba verilerini al

let cars = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);


module.exports = (req, res, next) => {

    //isteğe parametre oalrak gelen id'li elemanı diziden al
    const found = cars.find((car) => car.id === req.params.id)

    //eğer eleamn bulunamadıysa hata gönder
    if (!found)
        return res.status(404).json({ message: "Gönderilen id' ye sahip araç bulunamadı" })

    //sonraki adımda founda erişebilmek için
    req.car = found


    //id geçerliyse bir sonraki çalışcak olan controller fonkisyonuna geç
    next();

}