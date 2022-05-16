//Imports
const express = require('express');
const app = express();
const path = require('path');

//Routes to other pages
const adoptionRouter = require('./routes/adopt');
const individualDogRouter = require('./routes/individualDog');

console.log(__dirname);

//Static Files for home page
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

//Home page static file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homePage.html');
    console.log('Here');
})

// Where the routing to the other pages will happen.

// app.use('/adopt', adoptionRouter);
// app.use('/dog', individualDogRouter);

app.listen(3000);