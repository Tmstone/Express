const express = require('express');
const port = process.env.port || 5000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

const users = [];
const messages = [];



const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);


app.get('/', (req, res) => {
    console.log('page rendered');
    res.render('index');
});


//socket function here
io.on('connection', socket => {
    console.log('incoming socket connection');
    socket.on('newPage', function(data){
        console.log(data);
    users.push(data);     
    })
    /*socket.on('currentUser', function(data){
        for (let x = 0; x < users.length; x++) {
            console.log(users[x]);
        }*/
        io.emit('postUsers', {user: users.data});
        console.log(users)
    //})
});

