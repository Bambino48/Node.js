// Methode pour inclure les modules
const http = require('http');
const dt = require('./myFirstModule');

// Créer un serveur
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The date and time are currently: ' + dt.myDateTime());
    res.end();
}).listen(8080);