const express = require('express');
const router = express.Router();
const campaign = require('../models/campaign');
const AuthController = require('../controllers/AuthController');

/*      CREATE NEW CAMPAIGN     */
router.post('/new', AuthController.verify_token, function (req, res) {
    req.body.created_by = req.decoded.email;
    let newCampaign = campaign(req.body);
    newCampaign.save((err, _camp) => {
        if (err)
            res.status(500).json(err);
        else
            res.status(200).json(_camp);
    });
});

module.exports = router;