const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const service = require('../models/service');

/*      GET Services        */
router.get('/', AuthController.verify_token, function(req, res){
    service.find({}, (err, _req)=> {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).json(_req);
    });
});

/*      POST Request to Create New Service      */
router.post('/', AuthController.verify_token, function(req, res){
    let newService = service(req.body);
    service.save((err, _req) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).json(_req);
    });
});

module.exports = router;