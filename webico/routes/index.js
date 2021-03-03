var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FES Aragon!! La mejor!' });
});

router.get('/hola', function(req, res, next) {
  res.send("<h1>Hola UuU</h1>")
});

module.exports = router;
