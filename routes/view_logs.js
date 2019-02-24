const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');

router.get('/', AuthController.verify_token, function(req, res, next){
    user.find({email: req.decoded.email}, (err, _req) => {
        if(err)
            res.status(500).send(err);
        else{
            user.find({email: req.decoded.email, permission:{view_logs: true }},(err, _req) => {
                if(err)
                    res.status(500).send("403 - Forbidden");
                else
                    res.status(200).json(_req);
            });
        }
    });
});

module.exports = router;