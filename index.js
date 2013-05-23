var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
  res.send('hello world');
});

server.listen(8000);

app.configure( function() {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
