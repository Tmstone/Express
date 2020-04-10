const express = require('express');
const port = process.env.port || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

var users = {};
var message = {};



const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);


app.get('/', (req, res) => {
    console.log('page rendered');
    res.render('index');
});


//socket function here
io.on('connection', socket => {
    console.log('incoming socket connection');
    socket.on('getName', function(data){
        console.log(data);
         
    })

});