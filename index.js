var app = require('http').createServer(handler);
var statusCode = 200;

app.listen(80);

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
	res.end();
}

console.log("Listening to port 80");
console.log("Returning status code " + statusCode.toString());