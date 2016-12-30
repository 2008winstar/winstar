/**
 * @file file description here.
 * @author winstar
 * @date 2016/12/8
 */
const cluster = require('cluster');
const express = require('express');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const app = express();
    app.get('/', (req, res) => {
        res.send('testing');
    });
    app.listen(8080);
}
