const express = require('express');
const port = process.env.port || 5000;
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'berlinstation',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));

const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = require('socket.io')(server);


app.get('/', (req, res) => {
    console.log('Value of name in session: ', req.session);
    res.render('index');
});

//socket function here
io.on('connection', socket => {
    console.log('incoming socket connection');
    socket.on('getName', function(data){
        console.log(data);
         
    })

})
/*
app.post('/chat', (req, res) => {
 req.session.name = req.body.name;
 res.render('chat');
});
*/