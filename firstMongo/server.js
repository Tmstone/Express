const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/animals', {
    useNewUrlParser: true

});

mongoose.connection.on('connected', () => console.log('Mongodb connected'));