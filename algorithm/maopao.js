/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/17
 */

let arr = [5, 3, 5, 2, 8];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
console.log(arr);