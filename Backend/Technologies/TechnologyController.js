var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Technology = require('../Technologies/Technology');
module.exports = router;



//Inserting Technology
router.post('/InsertTechnology', function (req, res) {
    Technology.create({
        name: req.body.name,
        description: req.body.description
    },
        function (err, competancy) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(competancy);
        });
});

router.get('/getAllTechnology', function (req, res) {
    Technology.find({}, function (err, tech) {
        if (err) return res.status(500).send("There was a problem finding the technology.");
        res.status(200).send(tech);
    });
})