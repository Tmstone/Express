const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const server = app.listen(port, ()=> console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    //console.log(num);
    res.render('index');
});