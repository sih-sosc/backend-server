/*          REGISTERATION       */
const express = require('express');
const mongoose = require('mongoose');
const user = require('../models/user');
const router = express.Router();

/* POST Request for Registration    */
router.post('/', function(req, res){
    let newUser = new user(req.body);
    user.save((err, usr) => {
        if(err)
            res.status(500).send('Something Went Wrong');
        else
            res.status(200).json(usr);
    });
});

module.exports = router;