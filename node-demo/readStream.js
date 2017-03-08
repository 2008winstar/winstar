/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/2
 */

const fs = require('fs');
let stream = fs.createReadStream(__filename);

stream.on('readable', function () {
    let chunk;
    while(chunk = stream.read()) {
        console.log(chunk.toString('utf8'));
        console.log('got NPM data chunk of %d bytes', chunk.length);
    }
});

stream.once('end', function () {
    console.log('stream ended');
});
