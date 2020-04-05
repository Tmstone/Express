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
    axios.get('https://swapi.co/api/people/1/')
    .then(data => {
        console.log(data);
        //people = data;
        res.status('people').json({response: data});
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});
app.get('/planets', (req,res) => {
    var orbData = "This is Star Wars planet data";
    console.log(orbData);
    res.send(orbData);
});
app.listen(port, () => console.log(`Listening on port ${port}`));