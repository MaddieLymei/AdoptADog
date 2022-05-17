const mysql = require("mysql");

const db = mysql.createConnection({
    host:"database-1-instance-1.cdupzgygcurq.us-east-1.rds.amazonaws.com",
    port:"3306",
    user:"admin", //remove this later or hide it
    password:"AdoptADog",
    database:"AdoptADog"
});

db.connect(err=>{
    console.log("connected")
    if (err) {
        console.log(err.message);
        return
    }
});
module.exports = db;