const express = require('express');
const port = process.env.port || 8000;
const app = express();
//var num = Math.floor(Math.random() * 1000) + 1 ;
var counter = 0;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '/static'));
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

//socket function here 
io.on('connection', socket => {
    console.log('incoming socket connection');
})
app.get('/', (req, res) => {
    var num = Math.floor(Math.random() * 1000) + 1 ;
    console.log(num);
    res.render('index');
});