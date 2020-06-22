const mongoose = require('mongoose');

const { Schema } = mongoose;


mongoose.connect('mongodb://localhost/animals', { useUnifiedTopology : true , useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('Mongodb connected'));


const AnimalSchema = new Schema ({
    name: String,
    age: Number,
    legs: Number,
    isPet: Boolean,
});

const Animal = mongoose.model('Animal', AnimalSchema );

const animal = new Animal ({
    name: 'Spot',
    age: 3,
    legs: 4,
    isPet: true
})

//console.log(animal);

animal.save(function (...content) {
console.log(content)
});

// destructuring mongoose

const m = {
    Schema: function () {},
    models: {}
};

const { models, Schema: AltSchema } = m;

console.log('Schema', Schema, models, AltSchema);
