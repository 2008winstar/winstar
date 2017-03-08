/**
 * @file file description here.
 * @author winstar
 * @date 2017/1/16
 */

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/man';

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error: ', err);
    } else {
        console.log('Connection established to ', url);
        var people = db.collection('people');
        people.find().toArray(function (err, arr) {
            if (err) {
                console.error(err);
            } else {
                console.log(arr);
            }
        });
        db.close();
    }
});
