const mongoose = require('mongoose');

const { Schema } = mongoose;


mongoose.connect('mongodb://localhost/animals', {
    useNewUrlParser: true

});

mongoose.connection.on('connected', () => console.log('Mongodb connected'));

// destructuring mongoose
/*
const m = {
    Schema: function () {},
    models: {}
};

const { models, Schema: AltSchema } = m;

console.log('Schema', Schema, models, AltSchema);
*/