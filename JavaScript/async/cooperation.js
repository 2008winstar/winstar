/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/4
 */

let res = [];

function response(data) {
    let chunk = data.splice(0, 1000);
    res = res.concat(
        chunk.map(val => val * 2)
    );

    if (data.length) {
        setTimeout(() => response(data), 0);
    }
}

ajax('http://exp.url.1', response);
ajax('http://exp.url.2', response);



