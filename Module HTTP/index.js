const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const queryObject = url.parse(req.url, true).query;
    const txt = queryObject.year + " " + queryObject.month;
    res.end(txt);
}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080/');
});