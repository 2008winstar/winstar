/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/5
 */

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9, 'a', 'a', '1'];
arr = [...new Set(arr)];
console.log(arr);