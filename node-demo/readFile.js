/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/2
 */

const fs = require('fs');
fs.readFile(__filename, 'utf8', function (err, fileContent) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log(fileContent);
});
