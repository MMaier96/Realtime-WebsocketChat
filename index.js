console.log('webchat is starting ...')
var express = require('express');
var socket = require('socket.io');

var $;
$ = require('jquery');
$('.tag').click(function() {
  return console.log('clicked');
});

//App Setup
var app = express();
var server = app.listen(1337, function(){
  console.log('listening to requests on port 1337!');
});


//Static Files
app.use(express.static('public'));

//Socket Setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('A new client conected: ' + socket.id);
});
