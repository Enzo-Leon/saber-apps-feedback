/**
 * Created by Rat on 7/27/2016.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var PASSWORD;
var USERNAME;
/* GET users listing. */
router.post('/', function(req, res, next) {
    var connection = mysql.createConnection({port: 3306, database: "FeedbackSystem",user: USERNAME, password:PASSWORD});
    connection.connect();
    var userName = req.body.username;
    var Comment = req.body.feedback;
    var Ranking = 1;
    console.log(userName + ' : '+ Comment +'RATING: '+  Ranking);

    connection.query('INSERT INTO Submitted (Username,Comment,Ranking) VALUES ("' + userName + '","' + Comment + '","' + Ranking +'");' );
    connection.end();


    res.send();
    res.render('form');
});

module.exports = router;
