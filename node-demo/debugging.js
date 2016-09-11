/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/11
 */
var http = require('http');

http.createServer(function (req, res) {
    var body = 'Thanks for calling!\n';
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}).listen(8080);