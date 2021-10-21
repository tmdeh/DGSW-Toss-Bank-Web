const { io } = require("socket.io-client");
const socket = io();



socket.on('connection', (socket) => {
    console.log(socket.id);
})
