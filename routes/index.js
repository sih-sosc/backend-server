var express = require('express');
var router = express.Router();
var AuthController = require('../controllers/AuthController');

/* GET home page. */
router.get('/', AuthController.verify_token,function(req, res, next) {
  res.json({ title: 'Express' });
});

module.exports = router;
