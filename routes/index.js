var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' , data: 'test1' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('footer');
  next();
});

module.exports = router;
