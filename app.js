var express = require('express');

var http = require('http');

var path = require('path');
var jade= require('jade');

var connection= require('./dbConnect');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', require('express-handlebars')({
  defaultLayout: 'layout'
}));

app.set('view engine', 'handlebars');


//app.use(cookeParser());

app.get('/', function( req, res ){
  res.render('menu')
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