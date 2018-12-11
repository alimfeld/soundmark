var http = require('http');
var fs   = require('fs');

if (process.argv.length !== 3) {
    console.log(`Usage: ${process.argv[0]} ${process.argv[1]} MAPS_API_KEY`);
    process.exit(1);
}

var MAPS_API_KEY = process.argv[2];

http.createServer(function (req, res) {
    if (req.url == '/soundmarks.json') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(fs.readFileSync('soundmarks.json'));
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(fs.readFileSync('index.html', 'utf-8').replace('MAPS_API_KEY', MAPS_API_KEY));
    }
    res.end();
}).listen(8080);
