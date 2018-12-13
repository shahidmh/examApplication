var express = require('express');
var app = express();
var db = require('./db');
module.exports = app;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var QuestionController = require('./Questions/QuestionController');
app.use('/questions', QuestionController);

var CompetancyController = require('./Competancy/CompetanciesController');
app.use('/competancies', CompetancyController);

var TechnologyController = require('./Technologies/TechnologyController');
app.use('/technology', TechnologyController);

var userController = require('./User/UserController');
app.use('/user', userController);