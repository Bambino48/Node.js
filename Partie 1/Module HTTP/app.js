const http = require('http');

// Create an HTTP server
http.createServer((req, res) => {
    // Ajouter le code de l'en-tête de la réponse
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // La requête est un objet qui contient des informations sur la requête HTT
    res.write(req.url);
    // Set the response HTTP header with HTTP status and Content type
    res.write('Hello World !');
    // Send the response body "Hello World"
    res.end();
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});