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

//Het bericht
socket.on("bericht-data", (data) => {
      var uiteindelijke_bericht = data.naam + ": " + data.bericht;
      //console.log(data.naam + ": " + data.bericht);
      //Het uiteindelijke_bericht word ook groen
      var p = createP(uiteindelijke_bericht);
      p.style('color: green');


});


//De p tag word gemaakt en word begroet tot de server
socket.on("gejoint",(data) => {
    var p = createP(data + ": " + " heeft de chat gejoint ")
    p.style('color: blue');
});



socket.on("weg",(weg) => {
  var p = createP(weg);
  p.style('color: red');

});
