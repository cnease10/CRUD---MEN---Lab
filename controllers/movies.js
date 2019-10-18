const express = require('express');
const router = express.Router();
const db = ('./db/db.js')


//routes
router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

router.post('/', (req, res) =>{
    res.redirect('/movies')
});



module.exports = router;