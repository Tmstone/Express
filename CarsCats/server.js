const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.send('Cars and Cats');
});
app.get('/cars', (request, response) => {
    //response.send(cars.html);
})

app.listen(8000, () => console.log('listening on port 8000'));