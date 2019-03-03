const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const user = require('../models/user');
const contact_list = require('../models/contactList');
const serviceModel = require('../models/service');
const contact = require('../models/contact');
const axios = require('axios');

function sendData(req) {
    serviceModel.find({ name: req.body.serviceName }, (err, server) => {
        if (err)
            res.status(500).json("ERROR");
        else {
            console.log(server[0].url);
            // axios.post(server[0].url, headers: { 'AUTH_KEY': server[0].auth_key,
            //  data: { body: req.body } } })
            //     .then(resp => {
            //         console.log(resp.data);
            //     });
            axios.request({
                method: 'POST',
                url: server[0].url,
                headers: { AUTH_KEY: server[0].auth_key },
                data: req.body
            }).then(resp => {
                console.log(resp);
             });
        }
    });
}

/*          POST REQUEST FOR SENDING MAILS      */
router.post('/', AuthController.verify_token, function (req, res) {
    req.body.user_details = [];
    user.find({ email: req.decoded.email }, (err, _usr) => {

        if (_usr[0].serviceEmail == 'None' || _usr[0].servicePassword == 'None')
            res.status(500).json("Oops looks like you haven't configured Email Service yet");
        else {
            req.body.senderEmail = _usr[0].serviceEmail;
            req.body.senderPassword = _usr[0].servicePassword;
            contact_list.find({ name: req.body.listname }, (err, _list) => {
                if (err)
                    res.status(500).json(err);
                else {
                    for(let i=0;i<_list.length;i++){
                    //_list[0].contactIDs.forEach(element => {
                        contact.find({ email: _list[i].contactIDs}, (err, _usr) => {
                            if (err)
                                res.status(500).json("Error");
                            else {
                                console.log("USR : " + _usr);
                                req.body.user_details.push(_usr);
                                console.log(req.body.user_details);
                            }
                        });
                    }
                   // });
                }
            });
            sendData(req);
        }
    });
});


module.exports = router;