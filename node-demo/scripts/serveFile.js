/**
 * Created by gdnew on 2016/9/11.
 */

var http = require('http');
var path = require('path');
var fs = require('fs');
var extensions = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg'
};

function readFile(path, mimeType, res) {
    fs.readFile(path, function (err, data) {
        if (!err) {
            res.writeHead(200, {
                'Content-Type': mimeType,
                'Content-Length': data.length
            });
            res.end(data);
        } else {
            res.writeHead(404);
            res.end(JSON.stringify(err));
        }
    });
}

http.createServer(function (req, res) {
    var filename = path.basename(req.url) || 'index.html';
    var ext = path.extname(filename);
    var dir = path.dirname(req.url).substring(1);
    var filePath = __dirname + '/albums/';
    if (extensions[ext]) {
        filePath += (dir ? dir + '/' : '') + filename;
        fs.stat(filePath, function (err, stat) {
            if (stat.isFile()) {
                readFile(filePath, extensions[ext], res);
            } else {
                res.writeHead(404);
                res.end(err);
            }
        });
    }
    console.log(filename);
}).listen(8000);