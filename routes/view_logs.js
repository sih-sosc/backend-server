const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');

/*   GET REQUEST TO VIEW LOGS    */
router.get('/', AuthController.verify_token, function(req, res, next){

    //Find Email in Database
    user.find({email: req.decoded.email}, (err, _req) => {
        if(err)
            res.status(500).send(err);
        else{

            //Check if the User has Permission to view Logs
            user.find({email: req.decoded.email, 'permissions.manage_logs': true },(err, _req) => {
                if(err)
                    res.status(500).send(err);
                else if (_req.length == 0)
                    res.status(403).send('403 - FORBIDDEN');
                else
                    res.status(200).json(_req);
            });
        }
    });
});

module.exports = router;