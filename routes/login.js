/*      LOGIN VALIDATIONS       */
const express = require('express');
const mongoose = require('mongoose');
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

/* POST Login page. */
router.post('/', AuthController._sign_in_checks, function(req, res) {
    
    //Find given Email in Database
    user.find({email: req.body.email}).then( user => {
        
        // Check if Document is Empty
        if(!user) throw new Error('No Accounts Found');

        //Compare user entered Password with Hash
        user.comparePassword(req.body.password).then(isMatch => {
            if(!isMatch){
                throw new Error('No Users Found');
            }

            //Sign Token and Return it
            let token = jwt.sign({ email: user.email}, 'secret', {
                expiresIn: 80000
            });
            return res.status(200).json({
                message: 'Successfully Signed In',
                token
            });
        }).catch(err => {
            return res.status(403).send('Invalid Username or Password');
        });
    }).catch(err => {
        res.status(200).send('Invalid Email');
    });
});

module.exports = router;