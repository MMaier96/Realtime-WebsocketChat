$(document).ready(function(){
  var socket = io.connect('http://localhost:1337');
  var userName = window.sessionStorage.getItem("userName");
  var userColor = window.sessionStorage.getItem("userColor");

  var typing = false;

  $("#send-button").click(function(){
    var message = $("#message").val();

    if (!message) {
      return;
    }
    var currentdate = new Date();
    var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();

    socket.emit('chat', {
      sendTime: datetime,
      sendBy: userName,
      message: message,
      userColor: userColor
    })
    $("#message").val("");
  });


$("#message").on("keyup", function(data){
  if(data.keyCode == 13){
    $("#send-button").click();
  }
});

  $("#message").on("change paste keyup", function(){
    if ($("#message").val().length > 0){
      if (!typing) {
        typing = true;
        socket.emit('startTyping', {
          user: userName
        })
      }
    }else {
      if (typing) {
        typing = false;
        socket.emit("stopTyping", {
          user: userName
        });
      }
    }
  });

  socket.on('chat', function(data){
    socket.emit('stopTyping', {
      user: userName
    })
    $("#text-messages").append("<div class='message'><div class='send-by' style='color:" + data.userColor +  "!important'>[" + data.sendTime + "] " + data.sendBy + "</div><div class='text'>" + data.message +" </div></div> ");
  })

  socket.on('joined', function(data){
    $("#text-messages").append("<div class='joined-notification'>" + data.user + " joined!</div>");
  })

  socket.on('startTyping', function(data){
    $("#notifications").append("<div class='notification'>" + data.user + " is typing ...</div>");
  })

  socket.on('stopTyping', function(data){
    $(".notification").each(function(index){
      if($(this).text().indexOf(data.user) != -1){
        $(this).remove();
      }
    });
  })
});
