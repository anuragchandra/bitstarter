var express = require('express');

//var express = require('../..');

var app = express.createServer(express.logger());
var fs = require('fs');

//app.use(express.static('/home/saasbook/startupeng/bitstarter'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  var buffer= fs.readFileSync('index.html');
  response.send(buffer.toString());
 // response.send('Hello World 2!');
});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
