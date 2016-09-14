/**
 * @file 插入排序算法示例
 * @author winstar
 * @date 2016/9/14
 */
'use strict';
let arr = [5, 2, 4, 6, 1, 3];
let sort = [arr[0]];

for (let i = 1; i < arr.length; i++) {
    let outerItem = arr[i];
    let j = sort.length  - 1;
    while (sort[j] && sort[j] > outerItem) {
        sort[j + 1] = sort[j];
        j--
    }
    sort[j + 1] = outerItem;
}

console.log(sort);