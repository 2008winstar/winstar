/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/4
 */

let res = [];

function response(data) {
    if (data.type === '1') {
        res[0] = data;
    } else if (data.type === '2') {
        res[1] = data;
    }
}

ajax('http://exp.url.1', response);
ajax('http://exp.url.2', response);
