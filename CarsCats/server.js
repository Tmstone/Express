const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.send('Cars and Cats');
});
app.get('/cars', (request, response) => {
    response.render('cars');
})
app.get('/cats', (request, response) => {
    response.render('cats');
})
app.get('/cars/new', (request, response) => {
    response.render('form');
})
app.get('/catone', (request, response) => {
    response.render('details');
    //bubble Plum
    //Bethany
    ///Minnie
})
app.get('/catone', (request, response) => {
    var name = "bubble Plum";

    response.render('details', name);
})
app.get('/cattwo', (request, response) => {
     //Bethany
    response.render('details');
})
app.get('/catthree', (request, response) => {
        ///Minnie
    response.render('details');
})

app.listen(8000, () => console.log('listening on port 8000'));