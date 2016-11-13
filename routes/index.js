
/*
 * GET home page.
 */

exports.index = function(req, res){
	console.log("Here")
	var server = require('websocket').server;
	var http = require('http');
	var socket = new server({
	    httpServer: http.createServer().listen(1337)
	});

	socket.on('req', function(request) {
	    var connection = request.accept(null, request.origin);

	    connection.on('message', function(message) {
	        console.log(message.utf8Data);
	        connection.sendUTF('hello');
	        setTimeout(function() {
	            connection.sendUTF('this is a websocket example');
	        }, 1000);
	    });

	    connection.on('close', function(connection) {
	        console.log('connection closed');
	    });
	}); 
	res.render('index', { title: 'Express' });
};