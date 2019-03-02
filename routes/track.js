const express = require('express');
const router = express.Router();
const log = require('../models/log');

/*      GET Request         */
router.get('/:campaign_id/:contact_id', function(req, res){
    req.logger.campaign_id = req.params.campaign_id;
    req.logger.contact_id =  req.params.contact_id;
    req.logger.success = true;

    let newLog = new log(req.logger);
    newLog.save((err, _req) => {
        if(err)
            res.status(500)
        else   
            res.status(200)
    });
});

module.exports = router;