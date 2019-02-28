const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const contact = require('../models/contact');
const user = require('../models/user');

/*      POST    add_contact     */
router.post('/', AuthController.verify_token, function(req, res) {
    let newContact = new contact(req.body);
    newContact.save((err, usr) => {    

        //Updating user DB
        user.findOneAndUpdate({email: req.decode.email}, (err, _req) => {
            if(err)
            res.status(500).send(err);
        else  
            res.status(200).json(usr);
        });
    });
});

module.exports = router;