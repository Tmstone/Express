const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const session = require('express-session');
const counter = 0;

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    console.log("Value of counter in session ", request.session.counter)
    response.render('index', {title: "Counter"});
});
app.listen(8000, () => console.log('listening on port 8000'));