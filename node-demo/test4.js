/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/3
 */

const http = require('http');
const fs = require('fs');
const url = require('url');
const EventEmitter = require('events').EventEmitter;

let server = http.createServer(function (req, res) {
    let name = url.parse(req.url, true).query.name;
    if (name === 'penguins') {
        fs.readFile('penguins.jpg', function (err, data) {
            if (err) {
                return console.error(err.message);
            }
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(data);
        });
    }

});
server.listen(8000);
console.log('node started!');
