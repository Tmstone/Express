const express = require('express');
const port = process.env.port || 8000;
const app = express();
//const io = require(socket.io)(server);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index');
});

//socket function here 

app.listen(port, () => console.log(`Listening on port ${port}`));