var mysql = require("mysql");
var config = require('./config');


// First you need to create a connection to the db
var con = mysql.createConnection( config.db );



con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

 exports.list
 = function(req, res)
 {
        res.render('graphs');
    };



