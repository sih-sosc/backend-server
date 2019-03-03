const express = require('express');
const router = express.Router();
const log = require('../models/log');
const AuthController = require('../controllers/AuthController');

/*      GET Request         */
router.get('/:campaign_id/:contact_id', function(req, res){
    logger = {};
    logger.campaign_id = req.params.campaign_id;
    logger.contact_id =  req.params.contact_id;
    logger.success = true;

    let newLog = new log(logger);
    newLog.save((err, _req) => {
        if(err)
            res.status(500).send(err);
        else  {
            var fs = require('fs');
            fs.readFile('weird.png',function(err,data){
              res.writeHead('200', {'Content-Type': 'image/png'});
              res.end(data,'binary');
            });
        } 
            
    });
});

module.exports = router;