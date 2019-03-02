const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const contact = require('../models/contact');

/*      GET Contacts        */
router.get('/', AuthController.verify_token, function (req, res) {

    // below or Array in User Schema containing all the contacts created by user
    contact.find({ created_by: req.decoded.email }, (err, _req) => {
        if (err)
            res.status(500).send(err);
        else {
            console.log(_req);

            res.status(200).json(_req);
        }
    });
});

module.exports = router;