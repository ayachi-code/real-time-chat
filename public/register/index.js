var socket = io();

var inloggen = document.getElementById('inloggen').addEventListener('click',() => {
  window.open("/")
});


var registereren = document.getElementById('klas2vh3').addEventListener('click',() => {

  var data = {
    email: document.getElementById('inyp').value,
    gebruikersnaam: document.getElementById('inyp2').value,
    wachtwoord: document.getElementById('inyp3').value,
    wachtwoord2: document.getElementById('inyp4').value
  }

  socket.emit('register-gegevens',data);
});
