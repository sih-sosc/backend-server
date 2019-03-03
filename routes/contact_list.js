const express = require('express');
const router = express.Router();
const _contactList = require('../models/contactList');
const user = require('../models/user');
const AuthController = require('../controllers/AuthController');
const contact = require('../models/contact');
const axios = require('axios');


router.post('/new', AuthController.verify_token, function (req, res) {
    let Obj = [];
    let failed = [];
    let emails = [];
    req.body.data.created_by = req.decoded.email;
    /*
        for (let i = 0; i < req.body.data.length; i++){
            if(req.body.data[i][2].length < 10 || req.body.data[i][2] > 13)
                failed.push(req.body.data[i][2]);
            else if(req.body.data[i][2] == 10 )
                req.body.data[i][2] = '+91' + req.body.data[i][2];
        }
        console.log("Failed : " + failed);*/
    for (let i = 0; i < req.body.data.length; i++) {
        Obj[i] = { name: req.body.data[i][0], email: req.body.data[i][1], phone: req.body.data[i][2].toString(), created_by: req.decoded.email };
        let newContact = contact(Obj[i]);
        newContact.save();
        //emails[i] = req.body.data[i][1];
    }
    //console.log(emails);
    /*
        aaxios.post('http://microservices-txcxphifk.now.sh', {
            Obj
        })
            .then((res) => {
                console.log(`statusCode: ${res.statusCode}`)
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
            });
            */
    console.log(req.body.data);
    let list_obj = { name: req.body.name, created_by: req.decoded.email };
    let newContactList = new _contactList(req.body.data);
    newContactList.save();
});

router.post('/all', function (req, res) {
    _contactList.find({}, (err, _names) => {
        if (err)
            res.status(500).json("Error Fetching Contact List");
        else
            res.status(200).json(_names);
    });
});

router.post('/', AuthController.verify_token, function (req, res) {
    user.find({ email: req.decoded.email }, (err, _usr) => {
        if (err)
            res.status(500).json("Error");
        else {
            contactList.find({ name: { $in: _usr[0].contactLists } }, (err, _data) => {
                if (err)
                    res.status(500).json("Error");
                else
                    res.status(200).json(_data);
            });
        }

    });
});

router.delete('/', AuthController.verify_token, function (req, res) {
    if (req.decoded.role == 'admin') {
        _contactList.remove({}, (err, _req) => {
            if (err)
                res.status(500).send(err);
            else
                res.status(200).json(_req);
        });
    }
})
module.exports = router;