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
                console.log(_req);
                if(err)
                    res.status(500).send("Error Accessing Logs");
                else{
                    console.log("id" + _req[0].campaign_id);
                    campaign.find({id: _req[0].campaign_id},(err, _camp) =>{
                        
                    });
                    res.status(200).send("Done");

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