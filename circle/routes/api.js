const express = require('express');
const router = express.Router();
const config = require('../config/config');
const fs = require('fs');
const path = require('path');

if (config.mock) {
    config.path.forEach((item) => {
        router.post('/' + item, (req, res) => {
            fs.readFile(path.join(__dirname, '../test/mock/data/', item + '.json'), (err, data) =>  {
                if (err) {
                    return console.log(err);
                }
                res.json(JSON.parse(data.toString()));
            });
        });
    });
} else {
    router.post('/getCircleList', () => {

    });
}

module.exports = router;
