const usage = require('cpu-percentage');
const WebSocket = require('ws');
const os = require('os')

const wss = new WebSocket.Server({port: 9999});

console.log('server starting');
// us = usage();

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  setInterval(function(){
    //   perc = JSON.stringify(usage());
      perc = JSON.stringify(usage()["percent"]); 
      console.log(perc)
      ws.send(perc);
  }, 1000)
});