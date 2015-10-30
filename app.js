var express = require('express');

var http = require('http');

var path = require('path');
var jade= require('jade');

var db = require('./db');

var app = express();

//app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

var parsedJSON = require('graph.json');

//app.engine('handlebars', require('express-handlebars')({
//  defaultLayout: 'layout'
//}));

//app.set('view engine', 'handlebars');

//var obj = require("/views/graph.json");

fs = require('fs');


fs.readFile('./views/force.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(3000);
});

http.createServer(app)

.listen(

app.get('port'),

function(){

console.log(

'Express.js server listening on port ' +

app.get('port')

);

}

);