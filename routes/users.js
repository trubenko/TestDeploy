var express = require('express');
var router = express.Router();
const Kitty = require('../models/kitty');

let transactionHelper  = require('../scripts/transactionHelpers');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Transaction.wrap(function() {
// 
// });

router.get('/test', async function(req, res) {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/test');

  const Cat = mongoose.model('Cat', { name: String });

  let data = await Cat.find({ name: /Zildjiann/});

  let names = data.map(el => el.name);

  // const kitty = new Cat({ name: 'Zildjiann1' });
  // let result = await kitty.save();
  // let result = await kitty.save();

  // res.setHeader('Test', 12);
  // res.setHeader('Content-Type', 'text/html');
  res.render('index', { 
    title: 'test',
    data: names
  });
  // next();
});
module.exports = router;
