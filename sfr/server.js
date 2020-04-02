const express = require('express');
const port = process.env.port || 3000;
const io = require('socket.io')();
const app = express();
//var num = Math.floor(Math.random() * 1000) + 1 ;
var counter = 0;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    var num = Math.floor(Math.random() * 1000) + 1 ;
    console.log(num);
    res.render('index');
});

//socket function here 
io.on('connection', function(socket) {
    socket.emit('greeting', {msg: 'Greetings, from server Node, brought to you by Sockets! - Server'});
    socket.on('thankyou', function (data) {
        console.log(data.msg);
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));