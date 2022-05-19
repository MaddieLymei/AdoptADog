const mysql = require('mysql');

const db = mysql.createConnection({
    host: "database-1.cluster-cdupzgygcurq.us-east-1.rds.amazonaws.com",
    port:"3306",
    user: 'admin',
    password: 'AdoptADog',
    database: 'adoptADog'
});

db.connect(err=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected.");
});

module.exports.db = db;