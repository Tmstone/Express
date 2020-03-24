const session = require('express-session');
const express = require('express');
const app = express();

app.use (session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

const counter = 0;
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    console.log("Value of counter in session ", request.session.counter);
    response.render('index', {counter: count(request) });
});

/*
app.post('/', (request, response) => {
  request.session.count = counter;
  request.redirect('/');
});
*/
function count (request) {
  return request.session.counter = request.session.counter ? request.session.counter + 1: 1;
}

app.listen(8000, () => console.log('listening on port 8000'));