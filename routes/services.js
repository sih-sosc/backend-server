const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const service = require('../models/service');

/*      Get All Services        */
router.post('/all', AuthController.verify_token, function (req, res) {
    if (req.decoded.role == 'admin') {
        service.find({}, (err, _req) => {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
    else
        res.status(403).json("Forbidden");
});

/*      POST Request to Create New Service      */
router.post('/', AuthController.verify_token, function (req, res) {
    if (req.decoded.role == 'admin') {
        let newService = service(req.body);
        newService.save((err, _req) => {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
    else
        res.status(403).json("FORBIDDEN");
});

//Delete All Services
router.delete('/all', AuthController.verify_token, function (req, res) {
    if (req.decoded.role == 'admin') {
        service.remove({}, (err, _req) => {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
    else
        res.status(403).json("FORBIDDEN");
});

//Delete Single Service
router.delete('/', AuthController.verify_token, function(req, res) {
    if(req.decoded.role == 'admin'){
        service.remove({name: req.body.name}, (err, _svr) => {
                if(err)
                    res.status(500).json("Something Went Wrong");
                else
                    res.status(200).json(_svr);
        });
    }
    else
        res.status(403).json("FORBIDDEN");
});

module.exports = router;