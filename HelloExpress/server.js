const express = require("express");
const app = express();
app.get('/', (request, response) => {
    response.send("Hello Express");
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname + '/static'));
});

app.listen(8000, () => console.log("Listening on port 8000"));