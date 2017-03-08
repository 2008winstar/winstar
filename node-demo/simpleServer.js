/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/11
 */

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(url.parse(req.url, true)));
}).listen(3000);