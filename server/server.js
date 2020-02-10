'use strict';

// buil-n lin in NodeJS 
const net = require('net');
// regular port 
const PORT = process.env.PORT || 3000 ;
// create server with .net 
const server = net.createServer();


// server listen 
server.listen(PORT , () =>{
    console.log(' Server is Listening On Port No.', PORT);
});



