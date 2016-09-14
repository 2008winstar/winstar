/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/12
 */
var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'testing';
});

app.listen(3000);