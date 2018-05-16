

var http = require('http');
var static = require('node-static');
var file = new static.Server('./public');


function handler (request, response) {

	request.addListener('end', function (){

		file.serve(request, response); 

	}).resume();

}


var server = http.createServer(handler);

server.listen(57387);
