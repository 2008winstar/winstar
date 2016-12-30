/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/20
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const appRouter = new Router();
const PORT = 3000;

appRouter.get('/', ctx => {
    console.log('success!');
    ctx.body = {
        success: true
    };
});

app.use(appRouter.routes());

app.listen(PORT);




















