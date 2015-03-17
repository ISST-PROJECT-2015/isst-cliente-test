var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* POST payment page. */
router.post('/payment', function(req, res) {
	var price = req.body.price;
  res.redirect('payment');
});

/* GET payment page. */
router.get('/payment', function(req, res) {
  res.render('payment', {price: req.price});
});

module.exports = router;
