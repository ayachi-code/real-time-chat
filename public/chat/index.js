
//Gaat naar de chat
var chat_knop = document.getElementById('chat_nu').addEventListener('click',() => {
  window.open("/chat/dechat/index.html");
});


//Verstuut hoe heet ik
socket.emit("hoe-heet-ik");

//ontvang hoe-heet-ik
socket.on("hoe-heet-ik",(data) => {

})
