var socket = io();

var naam = localStorage.getItem("naam");


function setup() {
      //p tags worden hier geladen


}


var verzenden = document.getElementById('verzenden').addEventListener('click', () => {
  var data = {
    bericht: document.getElementById('bericht').value,
    naam: localStorage.getItem("naam")
  }

  socket.emit("bericht-data",data);

});


socket.on("bericht-data", (data) => {
      console.log(data.naam + ": " + data.bericht);
});
