//Imports
const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');

//Routes to other pages
const individualDogRouter = require('./routes/individualDog');
const allDogs = require('./routes/dogs');
const mysql = require("mysql");

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

//Home page static file
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/homePage.html');
})

//Adoption form page
app.get('/adopt', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/adoptForm.html'));
})

app.get('/dogs', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/adoptPage.html'))
})

app.get('/dog/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/individualDog.html'));
})
app.get("/filter", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/adoptPage.html'))
})
app.get('/filter', ((req, res) => {
    var mysql = require('mysql');

    var db = mysql.createConnection({
        host: "database-1.cluster-cdupzgygcurq.us-east-1.rds.amazonaws.com",
        port:"3306",
        user: 'admin',
        password: 'AdoptADog',
        database: 'adoptADog'
    });
    db.connect();
    db.query('SELECT * from Breed', function(err, rows, fields) {
        if (err) throw err;
        var data=[];
        for(i=0;i<rows.length;i++){
            data.push(rows[i].name);
        }
     res.render('./',{data:data});
    });

}))
'/views/adoptPage.html'
// Where the routing to the other pages will happen.
app.use('/dog', individualDogRouter);
app.use('/dogs', allDogs);

//Incase something can not be found
app.all('*', (req, res) => {
    res.status(404).send('<h1> Page not found </h1>')
})

app.listen(3000);


