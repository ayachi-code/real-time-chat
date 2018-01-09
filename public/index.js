var socket = io();

var geregistreerd = document.getElementById('register').addEventListener('click',() => {
    window.open("register/index.html");
});


var inloggen = document.getElementById('inloggen').addEventListener('click',() => {
  var data = {
    naam: document.getElementById('gebruikersnaam').value,
    wachtwoord: document.getElementById('wachtwoord').value
}


socket.emit("inloggen",data);

});



socket.on("account_bestaat_niet",() => {
  document.getElementById('bestaat').innerHTML = "Fout gebruikersnaam of wachtwoord";
});


socket.on("account_bestaat",() => {
  window.location.href = "/chat/index.html"
});
