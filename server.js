const express = require('express');
const app = express();

const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server)


//Lijst met gebruikers die online zijn
var gebruikers = [];


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
            gebruikers.push(data);
            console.log(gebruikers);
            console.log(data + " is de server gejoint");
            io.emit("gejoint",data)

      });

});
