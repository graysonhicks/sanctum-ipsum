var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
      message: "Holy moly, this is a sweet lorem ipsum generator!"
  })
});

module.exports = router;
