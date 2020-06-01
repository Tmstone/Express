const mongoose = require('mongoose');

//const { Schema } = mongoose;

/*
mongoose.connect('mongodb://localhost/animals', {
    useNewUrlParser: true

});

mongoose.connection.on('connected', () => console.log('Mongodb connected'));
*/
// destructuring mongoose
const m = {
    Schema: function () {},
    models: {}
};

const { Schema, models } = m;

console.log('Schema', Schema, models);