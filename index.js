let http = require("http");

http.createServer(function(request, response) {
	if(request.url == "/items" && request.method == "GET"){
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end('Data retrieved from database');
	}
}).listen(4000);

console.log("Server is running localhost:4000")