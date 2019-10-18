const mongoose = require('mongoose');

//what is a schema?
//blueprint for what our model (construction crew) will follow
const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    year: Number
});
 
//what is a model?
//the model creates the collection
//when we use the model, we create documents inside of the collection
//based on the model & Schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

