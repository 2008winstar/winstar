/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/3
 */

let mixArgs = (first, second = 'b') => {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);

    first = 'c';
    second = 'd';
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
};

console.log(mixArgs.length);
mixArgs('a');