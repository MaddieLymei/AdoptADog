const express = require("express");
const app = express()
const port = 3002

app.listen(port, () => {console.log(`Backend server running on port ${port}`)});

const serviceFriender = require('../Services/frienderService');

app.get("/Login", (req, res) => {
    const email = req.email
    const password = req.password
    serviceFriender.getLogins(email, password).then(function(data) {
        res.send(data);
    })
});

const mysql = require("mysql");
const db = mysql.createConnection({
    host:"frienderdb.cluster-clu6icw3etai.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin", //remove this later or hide it
    password:"frienderdb123",
    database:"frienderDB"
});

db.connect(err=>{
    console.log("connected")
    if (err) {
        console.log(err.message);
        return
    }
});
let SQL = `SELECT * FROM loginInDetails WHERE email = '${email}' && password = '${password}'`
        dbConnection.query(SQL, function (err, result) {
            if (err) throw err;
            if (result.length >= 1)
            resolve(result);
            else{
                resolve("sorry champ")
            }}
module.exports = db;