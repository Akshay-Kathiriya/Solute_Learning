const http = require('http');
const url = require('url');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.write(txt);
    res.end('Hello world!');
}).listen(9898);