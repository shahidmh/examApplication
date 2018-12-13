var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Competancies = require('../Competancy/Competancies');
module.exports = router;



//Inserting Questions
router.post('/InsertCompetancy', function (req, res) {
    Competancies.create({
        level: req.body.level,
        description: req.body.description
    },
        function (err, competancy) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(competancy);
        });
});

router.get('/getAllCompetancy', function (req, res) {
    Competancies.find({}, function (err, competancy) {
        if (err) return res.status(500).send("There was a problem finding the competancy.");
        res.status(200).send(competancy);
    });
})