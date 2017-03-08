/**
 * @file file description here.
 * @author winstar
 * @date 2017/1/5
 */

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app = require('./app');

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    console.log('pid ' + cluster.worker.process.pid + ' started');
    app();
}
