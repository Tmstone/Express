const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

//const data = [];

app.get('/', (request, response) => {
    response.render('index');
});

app.post('/results', (request, response) => {
    const data = request.body;
    response.render('results', {data});
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 