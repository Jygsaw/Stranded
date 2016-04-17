// initialize variables
var express = require('express');
var app = express();

// specify port
app.set('port', (process.env.PORT || 5000));

// declare static assets
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/node_modules'));

// declare routes
app.get('/', function(request, response) {
  response.render('app/index');
});

// start web server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
