/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/20
 */
const Koa = require('koa');
const app = new Koa();

app.use(function *() {
    this.body = 'testing';
});

app.listen(3000);
