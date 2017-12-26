const express = require('express');
const app = express();

const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server)


//Lijst met gebruikers die online zijn
var gebruikers = [];


var de_naam_gebruiker;


//Als er een connectie is
io.sockets.on('connection',(socket) => {

      //De gebruikers id van de gebruiker
      var gebruikers_id = socket.id;


      //Als ik bericht-data ontvang gaat er een anonymous calback af.
      socket.on("bericht-data",(data) => {
          //console.log(data.naam + ": " + data.bericht);
          //Verstuurt het naar de client
          io.emit("bericht-data",data);

      });
      socket.on("denaam", (data) => {
            //pusht de naam van de gebruiker die online is
            de_naam_gebruiker = data;
            gebruikers.push(data);
            console.log(gebruikers);
            console.log(data + " is de server gejoint");
            io.emit("gejoint",data)

      });


      //Als gebruiker disconnect
      socket.on("disconnect",() => {
        //console.log(gebruikers);
        console.log(de_naam_gebruiker);
        var deindex = gebruikers.indexOf(de_naam_gebruiker);
        gebruikers.splice(deindex,1);
        console.log(de_naam_gebruiker + " heeft de chat verlaten... ");
        var weg = de_naam_gebruiker + " heeft de chat verlaten";
        io.emit("weg",weg);

      });





});
