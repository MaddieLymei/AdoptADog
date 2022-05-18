const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'adoptdog-instance-1.cmawnh3futge.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'germandog',
    database: 'AdoptAdogDB'
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE breed (name VARCHAR(255), address VARCHAR(255))";
//     db.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });



module.exports.db = db;

