const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.js')

//routes

//index route
router.get('/', (req, res)=>{
    Movie.find({}, (err, foundMovies) => {
        if (err) {
            res.send(err);
        } else {
            res.render('index.ejs', {
                movies: foundMovies
            });

        }
    })
});
//create route
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//post route
router.post('/', (req, res) =>{
    Movie.create(req.body, (err, createdMovie) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/movies');
        }
    })
});

//show route
router.get('/:id', (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            res.send(err);
        } else {
            res.render('show.ejs', {
                movie: foundMovie
            });
        }
    })
});


module.exports = router;