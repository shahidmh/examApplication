var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Question = require('../Questions/Question');
module.exports = router;


//Inserting Questions
router.post('/insertQuestion', function (req, res) {
    Question.create({
        competancy: req.body.competancy,
        technology: req.body.technology,
        yearOfExp: req.body.yearOfExp,
        question: req.body.question,
        options: req.body.options
    },
        function (err, question) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(question);
        });
});

//inserting multiple questions
router.post('/insertQuestions', function (req, res) {
    Question.insertMany(req.body, function (err, question) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(question);
    })
})

//get all questions
router.get('/getAllQuestion', function (req, res) {
    Question.find({}, function (err, questions) {
        if (err) return res.status(500).send("There was a problem finding the questions.");
        res.status(200).send(questions);
    });
});

//get random Questions by technology and count
router.post('/getRandomQuestion', function (req, res) {
    var noOfQuestion = req.body.noOfQuestion;
    var tech = req.body.technology
    var filter = { technology: { $in: [tech] } };
    //  var fields = { name: 1, description: 0 };
    var options = { skip: 10, limit: noOfQuestion };
    Question.findRandom(filter, {}, options, function (err, songs) {
        if (err) return res.status(500).send("There was a problem finding the questions." + err + req.body.noOfQuestion);
        res.status(200).send(songs);
    });
});

//get question by id
router.post('/getQuestionById', function (req, res) {
    var id = req.body._id
    var filter = { _id: { $in: [id] } };
    Question.findRandom(filter, {}, {}, function (err, songs) {
        if (err) return res.status(500).send("There was a problem finding the questions." + err + req.body.noOfQuestion);
        res.status(200).send(songs);
    });
})

//updating question by id
router.post('/updateQuestion', function (req, res) {
    var _id = req.body.id;
    Question.findById(_id, function (err, quest) {
        if (err) return handleError(err);

            quest.competancy = req.body.competancy,
            quest.technology = req.body.technology,
            quest.yearOfExp = req.body.yearOfExp,
            quest.question = req.body.question,
            quest.options = req.body.options
        quest.save(function (err, updatedQuestion) {
            if (err) return handleError(err);
            res.status(200).send(updatedQuestion);
        });
    });
})
