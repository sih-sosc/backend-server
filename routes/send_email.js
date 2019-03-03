const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');
const contact = require('../models/contact');
const serviceModel = require('../models/service');

/*          POST REQUEST FOR SENDING MAILS      */
router.post('/', AuthController.verify_token, function (req, res) {

    user.find({ email: req.decoded.email }, (err, _usr) => {

        if (_usr[0].serviceEmail == 'None' || _usr[0].servicePassword == 'None')
            res.status(500).json("Oops looks like you haven't configured Email Service yet");
        else {
            req.body.senderEmail = _usr[0].serviceEmail;
            req.body.senderPassword = _usr[0].servicePassword;
        }
    });
});

router.post('/callback', function(req, res){
    //TODO 

});


module.exports = router;