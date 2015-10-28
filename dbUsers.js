var mysql = require("mysql");
var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "1111"
})
conn.connect(function(err){
	if(err) throw err;
	else console.log("connected to users database");
})

conn.query("use dbUsers");



exports.chkUsr=function(username, password, res){ 
	conn.query("select 1 from tblUsers where username = '" + username + "' && password = '" + password + "'", function(err, rows, fields, res){
		if(err) throw err;
		if(rows.length > 0) res.send("./views/index.html");
		else{
			var errormessage = "Invalid Username or Password";
		    res.render("index", {errormessage: errormessage});
		} 
		console.log("I'm in chkUsr...");
	});
	
	//conn.query("insert into tblUsers (username, password) values ('" + username + "','" + password + "')", );
};

exports.insrtUsr=function(username, password, res){
	conn.query("insert into tblUsers (Username, Password) values ('" + username + "', '" + password + "')", function(err, username, password, res){
		if(err) throw err;
		res.sendfile("./views/index.html");
	});
};