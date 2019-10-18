const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//setup controller
const movieController = require('./controllers/movies');
app.use('/movies', movieController);


//server is up
app.listen(3000, () => {
    console.log('we in this');
});
