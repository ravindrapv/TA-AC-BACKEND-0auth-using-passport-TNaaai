var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  console.log(req.user)
  res.send('respond with a resource');
});

module.exports = router;
