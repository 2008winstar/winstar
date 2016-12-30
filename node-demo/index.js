/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/5
 */

const express = require('express');
const logger = require('morgan');
const compress = require('compression');
const app = express();

app.use(logger('dev'));
app.use(compress());

app.get('/', function (req, res) {
    res.send('dldllafkajglajg  fakgjalgjlajgla  fakgjlajga g \n');
    res.end('done');
});

app.get('/page/home', function (req, res) {
    res.end('home');
});

app.listen(8000);

