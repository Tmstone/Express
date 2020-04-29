//set requires
const express = require('express');
const axios = require('axios');
const port = process.env.port || 8000;
const app = express();

//add middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));

//get data
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/people', function(req,res){
    //get data from API with promises
   axios.get('https://swapi.dev/api/people/')
    .then(data => {
        //console.log(data);
        people = data;
        console.log('People data received');
        res.json(people.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});
app.get('/planets', (req,res) => {
    //get data from API with promises
    axios.get('https://swapi.dev/api/planets/')
    .then(data => {
        planets = data;
        console.log('Planets data received');
        res.json(planets.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});
app.listen(port, () => console.log(`Listening on port ${port}`));