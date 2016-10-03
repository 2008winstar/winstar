/**
 * Created by gdnew on 2016/9/16.
 */

'use strict';
function getMaxZi(m, n) {
    let r = m % n;
    if (r === 0) {
        return n;
    } else {
        return getMaxZi(n, r);
    }
}

console.log(getMaxZi(21, 14));

