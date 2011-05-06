
/**
 * Module dependencies.
 */
var sys = require('sys');
var express = require('express');
var io = require('socket.io');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Cloud Orchestra'
  });
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(808);
  console.log("Express server listening on port %d", app.address().port);
}

//app.listen(8080);

var io = io.listen(app)
  , buffer = []
  , cBuffer = [];;
  
io.on('connection', function(client){
  client.send({ buffer: buffer });
  client.send({ clientsBuffer: cBuffer });
  client.broadcast({ connected: [client.sessionId, 'connected'] });
  
  client.on('message', function(message){
    var msg = { message: [client.sessionId, message] };
    buffer.push(msg);
    if (buffer.length > 15) buffer.shift();
    client.broadcast(msg);
  });

  client.on('disconnect', function(){
    client.broadcast({ disconnected: [client.sessionId, 'disconnected'] });
    cBuffer.splice(cBuffer.indexOf(client.sessionId),1);
  });
  
  cBuffer.push(client.sessionId);
  
  
});
