var logPrefix = "[WebChat] ";
console.log(logPrefix + 'WebChat is starting ...');

//imports
var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();
var server = app.listen(1337, function(){
  console.log(logPrefix + 'listening to requests on port 1337!');
});
var io = socket(server);


//Static Files
app.use(express.static('public'));


//handle data
io.on('connection', function(socket){
  console.log(logPrefix + 'new client conected: ' + socket.id);

  //handle chat messages
  socket.on('chat', function(data){
    console.log(data);
    io.sockets.emit('chat', data);
  });

  //handle connections
  socket.on('joined', function(data){
    socket.broadcast.emit('joined', data);
  });

  //handle typing
  socket.on('startTyping', function(data){
    socket.broadcast.emit('startTyping', data);
  });

  socket.on('stopTyping', function(data){
    socket.broadcast.emit('stopTyping', data);
  });
});
