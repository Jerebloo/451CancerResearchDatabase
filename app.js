var express = require('express');

var http = require('http');

var path = require('path');
var jade= require('jade');

var db = require('./db');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', require('express-handlebars')({
  defaultLayout: 'layout'
}));

app.set('view engine', 'handlebars');

app.get('/', function( req, res ){
  if ( !req.query.name || !req.query.district ){
    return res.render('menu', {
      error: {
        message: 'Name and District are required'
      }
    });
  }

  db.getCity( req.query.name, req.query.district, function( error, city ){
    if ( error ){
      return res.render('menu', {
        error: error
      });
    }

    res.render('menu', { city: city } );
  });
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