/**
 * Created by Rat on 7/27/2016.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var PASSWORD;
var USERNAME;
/* GET home page. */
router.get('/', function(req, res, next) {
    var connection = mysql.createConnection({port: 3306, database: "FeedbackSystem",user: USERNAME, password:PASSWORD});
    connection.connect();

    connection.query('SELECT * from Submitted ORDER BY Ranking DESC', function(err, results, fields) {
        if (err) {
            throw err;
        }
        res.render('index', { title: 'Express', data: results ,err:null});
    });
    connection.end();
});

module.exports = router;