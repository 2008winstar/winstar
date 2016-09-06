/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/4
 */

let a;
let b;

function foo(x) {
    a = x * 2;
    if (a && b) {
        baz();
    }
}

function bar(y) {
    b = y * 2;
    if (a && b) {
        baz();
    }
}

function baz() {
    console.log(a + b);
}

ajax('http://exp.url.1', foo);
ajax('http://exp.url.2', bar);
