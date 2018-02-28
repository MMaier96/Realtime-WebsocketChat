$(document).ready(function(){
    var userName = window.sessionStorage.getItem("userName");

    //load the page
    if (!userName) {
      $("body").load( "login/login.html" );
    }else {
      $("body").load( "chatroom/chatroom.html" );
    }
});
