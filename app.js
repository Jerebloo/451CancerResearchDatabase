/*var express = require('express');

var http = require('http');

var path = require('path');
var jade= require('jade');

var db = require('./db');
 d3 = require('d3')

 */
var
    jsdom = require('jsdom');

//    , fs = require('fs')
  //  , htmlStub = '<html><head></head><body><div id="dataviz-container"></div><script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script></body></html>'

jsdom.env(
    "<html><body></body></html>",
    [ 'http://d3js.org/d3.v3.min.js' ],
    function (err, window) {
      var svg = window.d3.select("body")
          .append("svg")
          .attr("width", 100).attr("height", 100);

      svg.append("rect")
          .attr("x", 10)
          .attr("y", 10)
          .attr("width", 80)
          .attr("height", 80)
          .style("fill", "orange");
// PRINT OUT:
      console.log(window.d3.select("body").html());
//  fs.writeFileSync('out.svg', window.d3.select("body").html()); // or this
    }
);

/*

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));

//var parsedJSON = require('graph.json');

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
 */
