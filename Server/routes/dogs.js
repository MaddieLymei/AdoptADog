const express = require('express');
const router = express.Router();
const {db} = require('../DataAccess/config');

router
.route("/breed")
//get breed options
.get((req, res)=>{
    db.query(`SELECT * FROM Breed`, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})

router
.route("/display")
.get((req, res)=>{
    db.query("SELECT * FROM Dog", (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})

router
.route("/profilePics")
//get profile pics
.get((req, res)=>{
    db.query(`SELECT * From Picture WHERE Profile_Picture = 1`, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})


router
.route("/size")
//get size options
.get((req, res)=>{
    db.query("SELECT * From Size", (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})


router
.route("/:breed")
//display dogs per breed
.get((req, res)=>{
    let breed = req.params.breed;
    db.query(`SELECT d.Microchip_ID, Dog_Name, Sex, Age, b.Breed_Name FROM Dog d INNER JOIN Dog_Breed ON d.Microchip_ID = Dog_Breed.Microchip_ID INNER JOIN Breed b ON Dog_Breed.Breed_ID = b.Breed_ID Where b.Breed_Name = ?`, breed, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})



module.exports = router;