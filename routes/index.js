/**
 * Created by Rat on 7/27/2016.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({port: 3306, database: "FeedbackSystem",user: "EnzoLeon", password:"Dins1004341"});
var result;
connection.connect();
connection.query('SELECT * from Submitted ORDER BY Ranking DESC', function(err, rows, fields) {
    if (!err) {
        result = rows;
    } else {
        result = rows;
        console.log('Error while performing Query.');
    }
});


/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('DataCheck \n');
    console.log(result[1].username);
    res.render('index', { title: 'Express', data: result});
});

module.exports = router;
connection.end();