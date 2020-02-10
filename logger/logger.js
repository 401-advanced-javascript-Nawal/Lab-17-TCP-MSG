'use strict';

const net = require('net');

const client = new net.Socket();

client.connect(3000,'localhost',() => {});

client.on('data',function(data) {
    let event = JSON.parse(data);
    console.log('event.payload', event.payload);
}); // end of on DATA event

client.on('close',function() {
    console.log(' Connection Closed ');
}); // end of close event 