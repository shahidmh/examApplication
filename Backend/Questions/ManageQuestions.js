var express = require('express');
var app = express();
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var bodyParser = require('body-parser')
app.use(bodyParser.json());

//Get All Questions
app.get('/GetAllQuestion', function (req, res) {

    mongo.connect(url, function (err, db) {
        var dbo = db.db("mydb");
        dbo.collection("Questions").find({}).toArray(function (err, result) {
            res.send(result);
        });

    });
})


//Getting Random Question by Technology and number of questions
app.post('/GetRandomQuestion', function (req, res) {

    mongo.connect(url, function (err, db) {
        var dbo = db.db("mydb");
        var noOfQuestion = req.body.noOfQuestion;
        var tech = req.body.technology
        dbo.collection("Questions").aggregate([
            { $match: { technology: tech } },
            { $sample: { size: noOfQuestion } }]).toArray(function (err, result) {
                res.send(result);
            });
    });
})
//Get Questions By Id
app.post('/GetQuestionById', function (req, res) {

    mongo.connect(url, function (err, db) {
        var ObjectId = require('mongodb').ObjectID;
        var query = { "_id": new ObjectId(req.body._id) }
        var dbo = db.db("mydb");
        dbo.collection("Questions").find(query).toArray(function (err, result) {
            res.send(result);
        });
    });
})

// Insering new Questions
app.post('/InserQuestions', function (req, res) {

    mongo.connect(url, function (err, db) {
        if (err)
            throw err;
        var dbo = db.db("mydb");
        dbo.collection("Questions").insertMany(req.body, function (err, dbres) {
            if (err) throw err;
            res.send("Number of Questions inserted: " + dbres.insertedCount)
            db.close();
        });
    });
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

function InserQuestions(obj, res) {

    var url = "mongodb://localhost:27017/";
    mongo.connect(url, function (err, db) {
        if (err)
            throw err;
        var dbo = db.db("mydb");
        var option = [
            {
                "id": 1055,
                "questionId": 1010,
                "name": "Exception",
                "isAnswer": false
            },
            {
                "id": 1056,
                "questionId": 1010,
                "name": "Code-behind",
                "isAnswer": true
            },
            {
                "id": 1057,
                "questionId": 1010,
                "name": "Code-front",
                "isAnswer": false
            },
            {
                "id": 1058,
                "questionId": 1010,
                "name": "None of the above",
                "isAnswer": false
            }
        ];
        var Questions = [{
            competency: "1", technology: ".net", yearOfExp: "1",
            question: "Which of the following assemblies can be stored in Global Assembly Cache?", options: option
        }]
        dbo.collection("Questions").insertMany(obj, function (err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            //  res.send("Number of documents inserted: " + res.insertedCount)
            db.close();
        });
    });

}
//InserQuestions();
var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})