const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');

/* GET home page. */
router.post('/', AuthController.verify_token, function(req, res, next) {
 user.find({email: req.decoded.email}, (err, _req) => {
    if(err)
      res.status(500).send(err);
    else
      res.status(200).json(_req);
 });
});

module.exports = router;
