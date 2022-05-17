//Controller

const express = require("express");
const app = express()
const port = 3002

app.listen(port, () => {console.log(`Backend server running on port ${port}`)});

const serviceFriender = require('../Services/frienderService');

app.get("/", (req, res) => {
    serviceFriender.getLogins(email, password).then(function(data) {
        res.send(data);
    })
});

const db = mysql.createConnection({
    host:"database-1-instance-1.cdupzgygcurq.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin", //remove this later or hide it
    password:"AdoptADog",
    database:"AdoptADog"
});