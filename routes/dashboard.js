const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');

/*  GET Dashboard       */
router.get('/', AuthController.verify_token, function(req, res){
    user.find({email: req.decoded.email}, (err, _req) => {
        if(err)
            res.status(500).send(err);
        else{

            //TODO
            _req[0].set({'success_emails':204});
            _req[0].set({'total_emails':214});
            console.log(_req);
            res.status(200).json(_req);
        }
    });
});

module.exports = router;