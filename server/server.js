'use strict';

// buil-n lin in NodeJS 
const net = require('net');
// regular port 
const PORT = process.env.PORT || 3001 ;
// create server with .net 
const server = net.createServer();


// server listen 
server.listen(PORT , () =>{
    console.log(' Server is Listening On Port No.', PORT);
});

let socketPool = {};

server.on('connection', (socket) => {
    const id = `Socket-${Math.random}`;
    socketPool[id] = socket;
    socket.on('data',(buffer) => dispatchEvent(buffer));
    socket.on('close', () =>{
        delete socketPool[id];
    }); // end of socket close event 
}); // end of connection event 

let dispatchEvent = (buffer) => {
    let text = buffer.toString().trim();
    broadcast(text);
}

let broadcast = (message) => {
    let payload = JSON.stringify(message);
    for (let socket in socketPool) {
      socketPool[socket].write(payload);
    }
  }