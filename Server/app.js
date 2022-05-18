//Imports
const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const morgan = require('morgan');

const connection = mysql.createConnection({
    host: 'adoptdog-instance-1.cmawnh3futge.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'germandog',
    database: 'AdoptAdogDB'
});

connection.connect((error) => {
        if(error){
            console.log('Error connecting to db');
            return;
        }
        console.log('DB Connection success');
});
connection.end((error) => {
});

//Routes to other pages
const individualDogRouter = require('./routes/individualDog');
const breed = require('./routes/breed');


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

// Where the routing to the other pages will happen.
// app.use('/dog', individualDogRouter);

//Incase something can not be found
app.all('*', (req, res) => {
    res.status(404).send('<h1> Page not found </h1>')
})

app.listen(3000);


