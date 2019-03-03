const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');
const log = require('../models/log');
const contact = require('../models/contact');
const campaign = require('../models/campaign');

/*   GET REQUEST TO VIEW LOGS    */
router.post('/', AuthController.verify_token, function(req, res, next){

    //Find Email in Database
    user.find({email: req.decoded.email}, (err, _req) => {
        if(err)
            res.status(500).send(err);
        else if (req.decoded.role != 'admin')
            res.status(403).send("Forbidden");
        else{
            log.find({},(err, _req) => {
                if(err)
                    res.status(500).send("Error Accessing Logs");
                else{/*
                    campaign.find({id: _req.campaign_id},(err, _camp) =>{
                        if(err)
                            res.status(500).json("Eror");
                        else
                            res.status(200).json({
                                created_by: _camp.created_by,
                                total_mails: _camp.total,
                                success_mails: _camp.success,
                                to: _camp.to
                            });
                    });*/
                    res.status(200).json(_req);
                }
            });
        }
    });
});

router.delete('/', AuthController.verify_token, function(req, res){
    if(req.decoded.role == 'admin'){
        log.remove({}, (err, _req) => {
            if(err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
});

module.exports = router;