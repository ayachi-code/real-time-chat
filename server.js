const express = require('express');
const app = express();

const server = app.listen(3000);

app.use(express.static('public'));

const socket = require('socket.io');
const io = socket(server)


io.sockets.on('connection',(socket) => {
      console.log("nieuwe connectie met de server");
      socket.on("naam",(naam) => {
          console.log(naam + " doet mee met de chat");
      });
});
