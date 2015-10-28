var express = require("express");
var bodyParser = require("body-parser");
var jade = require("jade");
var path = require("path")
var cookieParser = require('cookie-parser');
var session = require('express-session');
var connection = require("./dbConnect");
var conn = require("./dbUsers");

var app = express();

app.set("port", process.env.PORT || "3000");
app.set("views", path.join(__dirname, "views") );
app.set("view engine", "jade");
app.use(bodyParser());
app.use(session({secret: 'secret strategic xxzzz code'}));

app.get("/", connection.listTable);

/*app.get("/login", function(req, res){
	res.sendfile("./views/index.html");
});*/



app.get("/login", function(req, res){
	
	res.render("index");
	//res.sendfile("./index.html");
})

app.get("/signup", function(req, res){
	res.render('signup');
})

/*app.post("/signin", function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	res.send("Username: " + username + " password: " + password);
})*/

app.post("/search", function(req, res){
	var search1 = req.body.search1;
	var search2 = req.body.search2;
	console.log("checking...");
	connection.listSchTbl(search1, search2, res);
	//es.render("tblTemplate", {rows: searchTable(search1, search2)});
	//res.send("1: " + searchTable(search1) + " 2: " + searchTable(search2));
});

/*app.post("/signin", function(req, res){
	var username = req.body.username;
	res.send("Welcome " + username);
});*/

app.post("/signin", function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	console.log("Checking AUTH");
	conn.chkUsr(username, password, res)
});

app.post("/signup", function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	console.log("Signing UP...");
	conn.insrtUsr(username, password, res);
});

/*var searchTable = function(search1, search2){
	connection.query("select * from items where Rep = " + search1, function(err, rows){
		if(err) throw err;
		return rows;
	});	
}*/

var server = app.listen(app.get("port"), function(err){
	if(err)throw err;
	console.log("Server running at http://loccalhost:" + server.address().port);
})