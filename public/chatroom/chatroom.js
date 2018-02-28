$(document).ready(function(){
  var socket = io.connect('http://localhost:1337');
  var userName = window.sessionStorage.getItem("userName");
  var typing = false;

  $("#send-button").click(function(){
    var message = $("#message").val();

    var currentdate = new Date();
    var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();

    socket.emit('chat', {
      sendTime: datetime,
      sendBy: userName,
      message: message
    })
    $("#message").val("");
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
    console.log($("#message").val().length + "" + typing);
  });

  socket.on('chat', function(data){
    socket.emit('stopTyping', {
      user: userName
    })
    $("#text-messages").append("<div class='message'><div class='send-by'>[" + data.sendTime + "] " + data.sendBy + "</div><div class='text'>" + data.message +" </div></div> ");
  })

  socket.on('joined', function(data){
    $("#text-messages").append("<div class='notification'>" + data.user + " joined!</div>");
  })

  socket.on('startTyping', function(data){
    console.log("start");
    $("#notifications").append("<div class='notification'>" + data.user + " is typing ...</div>");
  })

  socket.on('stopTyping', function(data){
    console.log("stop");
    $(".notification").each(function(index){
      console.log($(this));
      if($(this).text().indexOf(data.user) != -1){
        $(this).remove();
      }
    });
  })
});
