/*          REGISTERATION       */
const express = require('express');
const mongoose = require('mongoose');
const user = require('../models/user');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

/* POST Request for Registration    */

router.post('/', AuthController.verify_token, AuthController._register_checks, function (req, res) {
    if (req.decoded.role != 'admin') {
        res.status(403).send("FORBIDDEN");
    }
    else {
        let newUser = new user(req.body);
        newUser.save((err, usr) => {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(usr);
        });
    }

});

module.exports = router;