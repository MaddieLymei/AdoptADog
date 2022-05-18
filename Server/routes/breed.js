const express = require('express');
const router = express.Router();
const db = require('../app');

router.get('/breeds', function(req, res, next){
    var sql = 'SELECT * FROM Breed';
    db.query(sql, function (err, data, fields) {
        if(err) throw err;
        res.render('breeds',{
            title: 'Breeds', userData: data
        });
    });
});

/*router
    .route("/:id")
    .get((req, res)=>{
        dogID = req.params.id;
        res.send(`individual dog GET ${dogID}`);
    })
    .put((req, res)=>{
        dogID = req.params.id;
        res.send(`individual dog UPDATE ${dogID}`);
    })
    .delete((req, res)=>{
        dogID = req.params.id;
        res.send(`individual dog DELETE ${dogID}`);
    })*/

module.exports = router;