const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const contact = require('../models/contact');

/*      GET Contacts        */
router.post('/', AuthController.verify_token, function(req, res){
   // below or Array in User Schema containing all the contacts created by user
    contact.find({createdBy: req.decoded.email}, (err, _req) => {
        if(err)
            res.status(500).send(err);
        else
            res.status(200).json(_req);
    });
});

router.post('/all', AuthController.verify_token, function(req, res){
    if(req.decoded.role == 'admin'){
        contact.find({},(err, _req) => {
            if(err)
                res.status(500).json(err);
            else
                res.status(200).json(_req);
        });
    }
});

router.delete('/', AuthController.verify_token, function(req, res){
    if(req.decoded.role == 'admin'){
        contact.remove({}, (err, _req) => {
            if(err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
});

module.exports = router;