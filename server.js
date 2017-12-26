const express = require('express');
const app = express();

const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server)



var gebruikers = [];


io.sockets.on('connection',(socket) => {

      var gebruikers_id = socket.id;

      socket.on("bericht-data",(data) => {
          //console.log(data.naam + ": " + data.bericht);
          io.emit("bericht-data",data);

      });
      socket.on("denaam", (data) => {
            gebruikers.push(data);
            console.log(gebruikers);
            console.log(data + " is de server gejoint");
            io.emit("gejoint",data)

      });

});
