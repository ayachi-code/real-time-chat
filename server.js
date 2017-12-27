//Gemaakt door Bilal el ayachi github: https://github.com/ayachi-code/real-time-chat

//Importeert de express module
const express = require('express');
const app = express();


//Luistert op poort 3000
const server = app.listen(3000);

//De maap public word gehost
app.use(express.static('public'));

//importeer socket.io
const socket = require('socket.io');
const io = socket(server)


//Lijst met gebruikers die online zijn
var gebruikers = [];

//Globalen variable de_naam_gebruiker
var de_naam_gebruiker;


//Hier komen de gebruikers in met hun gebruikers naam
var gebruikers_met_naam = [];



//Als er een connectie is word er een annoymous calback uitgevoerd en de data word opgeslagen in de variable socket
io.sockets.on('connection',(socket) => {

      //De gebruikers id van de gebruiker
      var gebruikers_id = socket.id;


      //Als ik bericht-data ontvang gaat er een anonymous calback af.
      socket.on("bericht-data",(data) => {
          //console.log(data.naam + ": " + data.bericht);
          //Verstuurt het naar de client
          io.emit("bericht-data",data);

      });
      //Als ik denaam ontvang word hier onder uit uitgevoerd
      socket.on("denaam", (data) => {
            //de Globalen variable de_naam_gebruiker is gelijk aan data
            de_naam_gebruiker = data;
            //De naam word gepusht in de lijst
            gebruikers.push(data);
            console.log(gebruikers);
            console.log(data + " is de server gejoint");
            //gejoint met de variable data word naar de client verstuurt
            io.emit("gejoint",data)

      });


      //Als ik aan ontvang
      socket.on("aan",(data) => {
            console.log(data + "is aan het typen...");
            socket.broadcast.emit("aan",data);
      });


      //Als ik niet aan ontvang
      socket.on("niet-aan",(data) => {
          io.emit("niet-aan",data);
      });

      //als ik de-online-gebruikers-lijst ontvang
      socket.on("de-online-gebruikers-lijst",(data) => {
        console.log(data);
      })


      //Als gebruiker disconnect
      socket.on("disconnect",() => {
        //console.log(gebruikers);
        console.log(de_naam_gebruiker);
        //Pakt de index van de gedisconect gebruiker
        var deindex = gebruikers.indexOf(de_naam_gebruiker);
        //Verwijderd de gebruiker
        gebruikers.splice(deindex,1);
        console.log(de_naam_gebruiker + " heeft de chat verlaten... ");
        var weg = de_naam_gebruiker + " heeft de chat verlaten";
        //word naar de client verstuurt
        io.emit("weg",weg);

      });



});
