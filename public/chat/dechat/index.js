var socket = io();

var naam = localStorage.getItem("naam");


var atypenb;


var goedemorgen;

var de_wie_is_online;

var waar = 0;

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
  var niet_aan = "";
  console.log("laat los");
  socket.emit("niet-aan",niet_aan)

});


//Als aan ontvangt log aan het typen en print het op het scherm als p
socket.on("aan",(data) => {
  goedemorgen = createP(data);
  console.log(data);
  goedemorgen.show();

});


//Als gene los laat
socket.on("niet-aan",(data) => {
  console.log("laat los");
  goedemorgen.hide();

})




//Als online knop word ingedrukt
var online_klik_ingedrukt = document.getElementById('wie-id').addEventListener('click',() => {
  waar += 1;
  console.log(waar);
  if (waar == 1) {
  //Word verstuurt naar server...
  var de_gebruikers = "Dit zijn de online gebruikers: ";
  socket.emit("de-online-gebruikers-lijst",de_gebruikers);
  //Maakt een div
  de_wie_is_online = createDiv("Dit zijn de online spelers:");
  //Dit is de div die word gemaakt :))))
  de_wie_is_online.style('width', '250px');
  de_wie_is_online.style('height', '250px');
  de_wie_is_online.style('bottom', '0');
  de_wie_is_online.style('right','0');
  de_wie_is_online.style('position','absolute');
  de_wie_is_online.style('background-color','darkgray');
  de_wie_is_online.style('margin-bottom','50px');
  de_wie_is_online.style('margin-right','100px');
} else if (waar != 1) {
  console.log("verdwijn");
  de_wie_is_online.hide();
  waar = 0;
}
});


//Als ik de-online-gebruikers-lijst
socket.on("de-online-gebruikers-lijst",(data) => {
  //print alle data 1 voor 1 in de div
  for (var i = 0; i < data.length; i++) {
    //var de_gebruikers_in_p = createP("Gebruiler: " + data[i] + " is online");
    de_wie_is_online.child(createP("Gebruiler: " + data[i] + " is online"));
    console.log(data[i])
  }

});
