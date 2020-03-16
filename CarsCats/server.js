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
    var catsOne = [
    {name: "bubble Plum", age: "3" , food: "Spaghetti"}
    ];
    response.render('details', {cats: catsOne});
})
app.get('/cattwo', (request, response) => {
    var catsTwo = [
        {name: "Bethany", age: "4" , food: "Tuna"}
        ];//Bethany
    response.render('details', {cats: catsTwo});
})
app.get('/catthree', (request, response) => {
    var catsThree = [
        {name: "Minnie", age: "1" , food: "Zitti"}
        ];   ///Minnie
    response.render('details', {cats: catsThree});
})

app.listen(8000, () => console.log('listening on port 8000'));