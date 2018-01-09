var geregistreerd = document.getElementById('register').addEventListener('click',() => {
    window.open("register/index.html");
});


var inloggen = document.getElementById('inloggen').addEventListener('click',() => {
  var data = {
    naam: document.getElementById('gebruikersnaam').value,
    wachtwoord: ocument.getElementById('wachtwoord').value
}


socket.emit("inloggen",data);

});
