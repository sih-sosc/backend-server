const express = require('express');
var schedule = require('node-schedule');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const scheduleModel = require('../models/_schedule');

// Schedule a New Job
router.post('/', AuthController.verify_token, function (req, res) {
    var year = req.body.year;
    var month = req.body.month - 1;
    var date = req.body.date;
    var hours = req.body.hours;
    var minutes = req.body.minutes;
    var seconds = req.body.seconds;

    var jobName = req.body.jobName;

    var sendingDate = new Date(year, month, date, hours, minutes, seconds);

    var job = schedule.scheduleJob(jobName, sendingDate, function () {
        //Send Mail
        console.log("Sent Mail");
    });
    console.log(job);
    if (job != null) {
        sch = {}
        sch.name = jobName;
        sch.created_by = req.decoded.email;
        sch.date = sendingDate;

        //Update DB
        let newSchedule = new scheduleModel(sch);
        newSchedule.save((err, _sc) => {
            if (err)
                res.status(500).json(err);
            else
                res.status(200).send(_sc);
        });
    }
    else {
        res.status(500).send("Please Validate Date and Time of Schedule");
    }
});

//Listing Scheduled Jobs of current user
router.get('/', AuthController.verify_token, function (req, res) {
    scheduleModel.find({ created_by: req.decoded.email }, (err, _req) => {
        if (err)
            res.status(500).json("");
        else
            res.status(200).json(_req);
    });
});

//Listing All Scheduled Jobs
router.get('/all', function (req, res) {
    if (req.decoded.role == 'admin') {
        scheduleModel.find({}, (err, _req) => {
            if (err)
                res.status(500).json("Error");
            else
                res.status(200).json(_req);
        });
    }
    else
        res.status(403).json("FORBIDDEN");
});

module.exports = router;