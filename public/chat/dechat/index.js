var socket = io();

var naam = localStorage.getItem("naam");


var atypenb;

//Het verschijnen van aan het typen
var goedemorgen;


//Hoort bij de div van wie is online
var de_wie_is_online;

//Hoort bij het kijken van wanneer de div moet Verwijderen
var waar = 0;

//Hoort bij de bericht
var pas;

//Hoort bij gejoint
var plat;


function setup() {
      //p tags worden hier geladen
      socket.emit("denaam",naam);
      socket.emit("ik_gejoint");


}


//Als iemand een bericht verzend
var verzenden = document.getElementById('verzenden').addEventListener('click', () => {
  var data = {
    bericht: document.getElementById('bericht').value,
    naam: localStorage.getItem("naam")
  }
  data.bericht = data.bericht.replace('<',"''");

  socket.emit("bericht-data",data);
  socket.emit("ik",data);
  //De input word geclear
  document.getElementById("bericht").value = "";

});

//Het bericht
socket.on("bericht-data", (data) => {
      var uiteindelijke_bericht = data.naam + ": " + data.bericht;
      //console.log(data.naam + ": " + data.bericht);
      //Het uiteindelijke_bericht word ook groen
      pas = createP(uiteindelijke_bericht);
      pas.style('color: green');


});


//De p tag word gemaakt en word begroet tot de server
socket.on("gejoint",(data) => {
    plat = createP(data + ": " + " heeft de chat gejoint ")
    plat.style('color: blue');
});



socket.on("weg",(weg) => {
  var p = createP(weg);
  p.style('color: red');

});


//Als aan het typen is
var bericht_input = document.getElementById("bericht").addEventListener('focus',() => {
  var aan = naam + " is aan het typen";
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


socket.on("ik",(data) => {
  var ik_zien = "Ik: " + data.bericht;
  pas.style("color","red");
  pas.html(ik_zien)


});

socket.on("ik_gejoint",() => {
  var ik_gejointe = "Ik heb de chat gejoint";
  plat.html(ik_gejointe);
});




//De input event keypess
var input_berichte = document.getElementById("bericht").addEventListener("keypress",(e) => {
  //Als iemand op enter klikt event
  if (e.keyCode == "13") {
    //Data van de input en die verzonden moet worden
    var data = {
      bericht: document.getElementById('bericht').value,
      naam: localStorage.getItem("naam")
    }
    //Prepare xxs aanval
    data.bericht = data.bericht.replace('<',"''");
  
    //Naar server verzonden
    socket.emit("bericht-data",data);
    socket.emit("ik",data);
    //De input word gecleard
    document.getElementById("bericht").value = "";
  }
});