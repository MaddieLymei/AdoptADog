//Imports
const express = require('express');
const app = express();
const path = require('path');
//Routes to other pages
const individualDogRouter = require('./routes/individualDog');


//Static Files
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')))
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

//Home page static file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homePage.html');
    console.log('Here');
})

app.get('/adopt', (req, res)=>{
    console.log("Here");
    res.sendFile(path.join(__dirname, '/views/adoptForm.html'));
})

// Where the routing to the other pages will happen.
app.use('/dog', individualDogRouter);

//Incase something can not be found
app.all('*', (req, res) => {
    res.status(404).send('<h1> Page not found </h1>')
})

app.listen(3000);


