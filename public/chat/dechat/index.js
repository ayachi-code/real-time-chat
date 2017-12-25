var socket = io();

var naam = localStorage.getItem("naam");

socket.emit("naam",naam);


socket.on("naam", (naam) => {
      console.log(naam);
});

function setup() {
      //p tags worden hier geladen


}
