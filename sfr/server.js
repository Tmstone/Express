const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

//app.use(express.static(__dirname + '/static'));
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);

//socket function here 
io.on('connection', socket => {
    console.log('incoming socket connection');
    //getting the data
    socket.on('posting_form', function(data){
        console.log(data);
        //get random number
        var num = Math.floor(Math.random() * 1000) + 1 ;
        //send data back
        socket.emit('send_message', {response: data});
            socket.emit('random_num', {response: num});
    });
})
app.get('/', (req, res) => {
    //console.log(num);
    res.render('index');
});