var socket = io();

var naam = localStorage.getItem("naam");


function setup() {
      //p tags worden hier geladen
      socket.emit("denaam",naam)


}



var verzenden = document.getElementById('verzenden').addEventListener('click', () => {
  var data = {
    bericht: document.getElementById('bericht').value,
    naam: localStorage.getItem("naam")
  }

  socket.emit("bericht-data",data);

});


socket.on("bericht-data", (data) => {
      var uiteindelijke_bericht = data.naam + ": " + data.bericht;
      //console.log(data.naam + ": " + data.bericht);
      createP(uiteindelijke_bericht);


});


//De p tag word gemaakt en word begroet tot de server
socket.on("gejoint",(data) => {
    createP(data + ": " + " heeft de chat gejoint ")
});



socket.on("weg",(weg) => {
  createP(weg);

});
