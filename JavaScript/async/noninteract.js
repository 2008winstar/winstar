/**
 * Created by winstar on 2016/9/4.
 */

let res = {};

function foo(results) {
    res.foo = results;
}

function bar(results) {
    res.bar = results;
}

ajax('http://exp.url.1', foo);
ajax('http://exp.url.2', bar);
