// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create a server
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Create a socket
io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('disconnect', function(){
        console.log('A user disconnected');
    });

    socket.on('comment', function(data){
        console.log('Comment: ' + data);
        io.emit('comment', data);
    });
});

// Listen on port 3000
server.listen(3000, function(){
    console.log('Server is running on port 3000');
});
