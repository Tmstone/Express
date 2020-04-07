const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const server = app.listen(port, ()=> console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

io.on('connection', socket => {
    let count = 0;
    console.log('Incomming socket connection');

    socket.on('button_clicked', function() {
        io.emit('numberUpdate', ++count)
    });
    socket.on('reset', function () {
        count = 0;
        io.emit('numberUpdate', count);
    })
});

app.get('/', (req, res) => {
    //console.log(num);
    res.render('index');
});