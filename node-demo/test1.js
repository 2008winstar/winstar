var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function () {
    console.log('success');
    eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function () {
    console.log('done');
});

eventEmitter.emit('connection');
console.log('ok');