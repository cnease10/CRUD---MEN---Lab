const express = require('express');
const router = express.Router();


//routes
router.get('/', (req, res)=>{
    res.render('index.ejs');
});

router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// router.post('/', (req, res) =>{

// });


module.exports = router;