$(document).ready(function(){
    //create socketConnection to the server
    var socket = io.connect('http://localhost:1337');

    $("#enter-button").click(function(){
      var userName = $("#user-name").val();
      if (userName) {
        window.sessionStorage.setItem("userName", userName);
        window.sessionStorage.setItem("userColor", randomColor());
        socket.emit('joined', {
          user: userName
        });
        location.reload();
      }
    });

    $("#user-name").on("keyup", function(data){
      if(data.keyCode == 13){
        $("#enter-button").click();
      }
    });

    function randomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
});
