/*      LOGIN VALIDATIONS       */
const express = require('express');
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

/* POST Login page. */
router.post('/', AuthController._sign_in_checks, function(req, res) {
    
    //Find given Email in Database
    user.find({email: req.body.email, password: req.body.password}).then( user => {

        // Check if Document is Empty
        if(!user || user.length == 0) {
            res.status(200).send('No Account Found');
            console.log("NO accounts");
        }
        
        /*
        //Compare user entered Password with Hash
        user.comparePassword(req.body.password).then(isMatch => {
            if(!isMatch){
                throw new Error('No Users Found');
            }
            */
        else {
            //Sign Token and Return it
            let token = jwt.sign({ email: req.body.email}, "secret", {
                expiresIn: 80000
            });
            console.log(token);
            return res.status(200).json({
                role: user.role,
                token
            });
        }
            /*
        }).catch(err => {
            return res.status(403).send('Invalid Username or Password');
        });
*/
    }).catch(err => {
        res.status(200).send('Something Went Wrong');
    });
});

module.exports = router;
