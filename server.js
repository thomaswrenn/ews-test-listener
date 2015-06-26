var app = require('http').createServer(handler);
var statusCode = 200;

app.listen(9021);

function handler (req, res) {
	var data = '';

	console.log(req.method);

	if (req.method == "POST") {
		req.on('data', function(chunk) {
			data += chunk;
		});

		req.on('end', function() {
			console.log('Received POST body data:');
			console.log(data.toString());
		});
	}
	if (req.method == "GET") {
		req.on('data', function(chunk) {
			data += chunk;
		});

		req.on('end', function() {
			console.log('Received GET body data:');
			console.log(data.toString());
		});
	}

	res.writeHead(statusCode, {'Content-Type': 'text/plain'});
	res.write(req.method);
	res.end();
}

console.log("Listening to port 9021");
console.log("Returning status code " + statusCode.toString());