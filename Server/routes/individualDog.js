const express = require('express');
const router = express.Router();
const {db} = require('../DataAccess/config');

router
.route("/:id")
//get dog information based on microchip
.get((req, res)=>{
    let microchip_ID = req.params.id;
    db.query("SELECT d.Microchip_ID, d.Dog_Name, d.sex, d.Age, size.Size_Name, d.Dog_Description, d.Favourite_Activity, d.Favourite_Treat, d.Special_Needs, b.Dog_Friendly, b.Cat_Friendly, b.Child_Friendly, b.Adult_Friendly, b.Shed, s.Shelter_Name, s.Contact_Person, s.Cellphone, s.Email, s.Location FROM Dog d INNER JOIN Size size ON d.Size_ID = size.Size_ID INNER JOIN Behaviour b ON d.Microchip_ID = b.Microchip_ID INNER JOIN Shelter s ON d.Shelter_ID = s.Shelter_ID WHERE d.Microchip_ID = ?", microchip_ID, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})

router
.route("/breed/:id")
//get dog breed
.get((req, res)=>{
    let microchip_ID = req.params.id;
    db.query("SELECT d.Microchip_ID, d.Dog_Name, b.Breed_Name FROM Dog d INNER JOIN Dog_Breed db ON d.Microchip_ID = db.Microchip_ID INNER JOIN Breed b On db.Breed_ID = b.Breed_ID WHERE d.Microchip_ID = ?", microchip_ID, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})

router
.route("/picture/:id")
//Get dog images for carousel
.get((req, res)=>{
    let microchip_ID = req.params.id;
    db.query("SELECT d.Microchip_ID, d.Dog_Name, p.Picture_Path FROM Dog d INNER JOIN Picture p ON d.Microchip_ID = p.Microchip_ID WHERE d.Microchip_ID = ?", microchip_ID, (error, result) => {
        if (error) throw error;
        res.send(result);
    })
})

module.exports = router;