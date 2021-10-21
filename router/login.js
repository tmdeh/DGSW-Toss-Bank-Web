var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login.html');
})

router.get('/main', (req, res) => {
    res.render('main.html');
})

module.exports = router;