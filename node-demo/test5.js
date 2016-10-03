/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/3
 */

const events = require('events');
const EventEmitter = events.EventEmitter;

let em = new EventEmitter();
let count = 0;

setInterval(function () {
    em.emit('timeout', count++);
}, 3000);

em.on('timeout', function (data) {
    console.log('log: ' + data);
    if (data === 5) {
        process.exit();
    }
});