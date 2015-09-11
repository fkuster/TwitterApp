var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource'+req.params.id);
});
router.get('/user', function(req, res, next) {
  res.send('respond with a user');
});

module.exports = router;
