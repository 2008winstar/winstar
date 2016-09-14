/**
 * Created by gdnew on 2016/9/12.
 */

var http = require('http');
var querystring = require('querystring');
var redis = require('redis');
var db = redis.createClient(6379, '127.0.0.1');

http.createServer(function (req, res) {
    var qs = querystring.parse(req.url.split('?')[1]);
    var firstName = qs.firstName;

    db.get(firstName, function (err, lastName) {
        var userName = firstName + ' ' + lastName;
        var html = '<!doctype html>'
            + '<html><head><title>Hello ' + userName + '</title></head>'
            + '<body><h1>Hello, ' + userName + '!</h1></body></html';
        res.end(html);
    });
}).listen(8000);














