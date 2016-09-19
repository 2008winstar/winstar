/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/17
 */

var arr = [5, 3, 5, 2, 8];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);