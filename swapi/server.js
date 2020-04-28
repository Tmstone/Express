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
    //var peoleData = "This is Star Wars people data";
    //console.log(peoleData);
    //res.send(peoleData);
   axios.get('https://swapi.dev/api/people/')
    .then(data => {
        //console.log(data);
        people = data;
        console.log(people.data);
        //console.log('People data', people.data.name)
        res.json(people.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});
app.get('/planets', (req,res) => {
    /*var orbData = "This is Star Wars planet data";
    console.log(orbData);
    res.send(orbData);*/
    axios.get('https://swapi.dev/api/planets/')
    .then(data => {
    planets = data;
    console.log(plnates.data)

    })
    .catch(error => {

    })
});
app.listen(port, () => console.log(`Listening on port ${port}`));