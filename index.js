console.log('webchat is starting ...')
var express = require('express');

//App Setup
var app = express();
var server = app.listen(1337, function(){
  console.log('listening to requests on port 1337!');
});


//Static Files
app.use(express.static('public'));
