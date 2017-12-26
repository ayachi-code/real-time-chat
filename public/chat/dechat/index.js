var socket = io();

var naam = localStorage.getItem("naam");


var atypenb;


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


//Als aan het typen is
var bericht_input = document.getElementById("bericht").addEventListener('focus',() => {
  var aan = naam + "is aan het typen";
  socket.emit("aan",aan);
});


//Als gene los laat
var bericht_input_los = document.getElementById('bericht').addEventListener('blur',() => {
  
});


//Als aan ontvangt log aan het typen en print het op het scherm als p
socket.on("aan",(data) => {
  var goedemorgen = createP(data);
  console.log(data);
  goedemorgen.show();

});
