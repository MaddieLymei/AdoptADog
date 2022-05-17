//Services

const mysql = require("mysql");

db.connect(err=>{
    console.log("connected")
    if (err) {
        console.log(err.message);
        return
    }
});
let SQL = `CREATE * FROM loginInDetails WHERE email = '${email}' && password = '${password}'`
        dbConnection.query(SQL, function (err, result) {
            if (err) throw err;
            if (result.length >= 1)
            resolve(result);
            else{
                resolve("sorry champ")
            }}
module.exports = db;