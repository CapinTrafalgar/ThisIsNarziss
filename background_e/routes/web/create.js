var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'create' });
});

module.exports = router;
