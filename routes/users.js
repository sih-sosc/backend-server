var express = require('express');
var router = express.Router();
const user = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  user.find({}, function(err, usr){
    if(err)
      res.status(500).send('Something Went Wrong');
    else
      res.status(200).json(usr);
  })
});

module.exports = router;
