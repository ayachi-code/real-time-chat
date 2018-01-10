var naam_hey = localStorage.getItem("naam");

document.getElementById('w').innerHTML = "Welkom " + naam_hey;


//Gaat naar de chat
var chat_knop = document.getElementById('chat_nu').addEventListener('click',() => {
  window.open("/chat/dechat/index.html");
});



//Gaat naar online spelers
var online_knop = document.getElementById("online").addEventListener('click',() => {
  window.location.href = "/chat/wieisonline/"
});

socket.emit("hoe-heet-ik");
