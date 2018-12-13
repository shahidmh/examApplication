var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var user = require('../User/User');
module.exports = router;


var generator = require('generate-password');
 
var randomPassword = generator.generate({
    length: 8,
    numbers: true
});


//Inserting user
router.post('/InsertUser', function (req, res) {
    user.create({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        password:randomPassword
    },
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.get('/getAllUser', function (req, res) {
    user.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        res.status(200).send(users);
    });
})