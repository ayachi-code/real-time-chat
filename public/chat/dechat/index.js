var socket = io();

var naam = localStorage.getItem("naam");
var bericht = document.getElementById('bericht').value;

socket.emit("naam",naam);


socket.on("naam", (naam) => {
      console.log(naam);
});

function setup() {
      //p tags worden hier geladen


}
