/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/14
 */

let arr = [5, 2, 4, 6, 1, 3];
let sort = [arr[0]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < sort.length; j++) {
        let outerItem = arr[i];
        let innerItem = sort[j];
        if (outerItem >= innerItem) {
            sort.push(outerItem);
        }
    }
}
console.log(sort);
