/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/5
 */

class MyArray extends Array {

}

var obj = {
    a: 'aef',
    foo: 'dd',
    night: 'cc'
};

if (obj.a === 'aef') {
    console.log('test');
} else {
    console.log('failed');
}

let myArr = new MyArray();
myArr.push(3);
console.log(myArr);
myArr.length = 0;
console.log(myArr);
