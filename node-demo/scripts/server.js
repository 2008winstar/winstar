/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/11
 */
var http = require('http');
var fs = require('fs');

function loadAlbumList(callback) {
    fs.readdir('albums', function (err, files) {
        if (err) {
            callback(makeError('fileError', JSON.stringify(err)));
            return;
        }

        var onlyDirs = [];
        (function iterator(index) {
            if (index === files.length) {
                callback(null, onlyDirs);
                return;
            }
            fs.stat('albums/' + files[index], function (err, stats) {
                if (err) {
                    callback(makeError('fileError', JSON.stringify(err)));
                    return;
                }
                if (stats.isDirectory()) {
                    onlyDirs.push({
                        name: files[index]
                    });
                }
                iterator(index + 1);
            })
        })(0);
    });
}

function loadAlbum(albumName, callback) {
    fs.readdir('albums/' + albumName, function (err, files) {
        if (err) {
            if (err.code === 'ENOENT') {
                callback(noSuchAlbum());
            } else {
                callback(makeError('fileError', JSON.stringify(err)));
            }
            return;
        }

        var onlyFiles = [];
        var path = 'albums/' + albumName + '/';
        (function iterator(index) {
            if (index === files.length) {
                callback(null, {
                    short_name: albumName,
                    photos: onlyFiles
                });
                return;
            }
            fs.stat(path + files[index], function (err, stats) {
                if (err) {
                    callback(makeError('fileError', JSON.stringify(err)));
                    return;
                }
                if (stats.isFile()) {
                    onlyFiles.push({
                        filename: files[index],
                        desc: files[index]
                    });
                }
                iterator(index + 1);
            })
        })(0);
    });
}

function handleListAlbums(req, res) {
    loadAlbumList(function (err, albums) {
        if (err) {
            sendFailure(res, 500, err);
            return;
        }
        sendSuccess(res, {
            albums: albums
        });
    });
}

function handleGetAlbum(req, res) {
    var albumName = req.url.substr(7, req.url.length - 12);
    loadAlbum(albumName, function (err, albumContents) {
        if (err && err.error == 'noSuchAlbum') {
            sendFailure(res, 404, err);
        } else if (err) {
            sendFailure(res, 500, err);
        } else {
            sendSuccess(res, {albumData: albumContents});
        }
    });
}

function makeError(err, msg) {
    var e = new Error(msg);
    e.code = err;
    return e;
}

function sendSuccess(res, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var output = {error: null, data: data};
    res.end(JSON.stringify(output) + '\n');
}

function sendFailure(res, code, err) {
    code = code || ((err.code) ? err.code : err.name);
    res.writeHead(code, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: code, message: err.message}) + '\n');
}

function invalidResource() {
    return makeError('invalidResource', 'the requested resource does not exist.');
}

function noSuchAlbum() {
    return makeError('noSuchAlbum', 'the specified album does not exist.');
}


http.createServer(function (req, res) {
    console.log('INCOMING REQUEST: ' + req.method + ' ' + req.url);
    if (req.url === '/albums.json') {
        handleListAlbums(req, res);
    } else if (req.url.substr(0, 7) === '/albums' && req.url.substr(req.url.length - 5) === '.json') {
        handleGetAlbum(req, res);
    } else {
        sendFailure(res, 404, invalidResource());
    }
}).listen(8080);
