/**
 * @file file description here.
 * @author winstar
 * @date 2017/1/5
 */

const http = require('http');

function app() {
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Process ' + process.pid + ' answered the request.\n');
    }).listen(8000);
};

module.exports = app;