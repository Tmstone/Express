const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + '/static'));

app.get('/', (request, response) => {
    response.send('Counter');
});
app.listen(8000, () => console.log('listening on port 8000'));