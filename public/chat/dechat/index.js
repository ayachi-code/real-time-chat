var socket = io();

var naam = localStorage.getItem("naam");

socket.emit("naam",naam);
