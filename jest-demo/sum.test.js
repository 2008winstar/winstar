/**
 * @file file description here.
 * @author winstar
 * @date 2018/1/31
 */

let sum = require('./sum');

test('test 1 + 2 equal to 3', () => {
    expect(sum(1, 2)).toBe(3);
});