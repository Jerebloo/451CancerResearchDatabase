var mysql = require("mysql");
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1111"
});

connection.connect(function(err){
	if(err) throw err;
	else console.log("database connected");
});

connection.query("use sampledata");

//module.exports = function(db){
	exports.listTable=function(req, res){
		connection.query("SELECT * FROM items ", function(err, rows){	
			if(err) throw err
			else res.render("tblTemplate", {rows: rows});
	    });
	};	
	
	exports.listSchTbl=function(search1, search2, res){
		//var inputData = JSON.stringify(search1);
		var inputData = search1.trim().replace(/ /g, '').split(',');
		console.log(inputData);
		var querry = "";
		for(var item in inputData){
			if(inputData.length-1!=item) querry+="Rep= '"+inputData[item]+"' or ";
			else querry+="Rep= '"+inputData[item]+"'";
		}
		console.log(querry);
		connection.query("select * from items where " + querry, function(err, rows){
			if(err) throw err;
			res.render("tblTemplate", {rows: rows});
		})
		/*connection.query("select * from items where Rep IN (" + inputData+")", function(err, rows){
			if(err) throw err;
			res.render("tblTemplate", {rows: rows});
		});*/	
	};
	
//};


