$(document).ready(function(){
    //create socketConnection to the server
    var socket = io.connect('http://localhost:1337');

    $("#enter-button").click(function(){
      var userName = $("#user-name").val();
      if (userName) {
        window.sessionStorage.setItem("userName", userName);
        socket.emit('joined', {
          user: userName
        });
        location.reload();
      }
    });
});
