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
app.get('/people', (req,res) => {
    var data = "This is Star Wars people data";
    console.log(data);
    res.send(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));