const {db} = require('./config');

db.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    db.query("SELECT * FROM breed", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  

  
