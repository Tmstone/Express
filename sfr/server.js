const express = require('express');
const port = process.env.port || 8000;
//const io = require(socket.io)(server);
const app = express();
var num = Math.floor(Math.random() * 1000) + 1 ;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    console.log(num);
    res.render('index');
});

//socket function here 

app.listen(port, () => console.log(`Listening on port ${port}`));