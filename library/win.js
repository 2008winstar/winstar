/**
 * @desc HTML实体转义
 * @param {string} str
 * @return {string}
 */
export function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {boolean}
 */
export function isArrayEqual(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @desc 求数组最大值
 * @param {Array} arr
 * @return {number}
 */
export function arrayMax(arr) {
    return Math.max(...arr);
}

/**
 * @desc 求数组最小值
 * @param {Array} arr
 * @return {number}
 */
export function arrayMin(arr) {
    return Math.min(...arr);
}

/**
 * @desc 求数组中某个值出现的次数
 * @param {Array} arr
 * @param {*} val
 */
export function arrayCountOccurrences(arr, val) {
    return arr.reduce((a, v) => v === val ? a + 1 : a + 0, 0);
}

/**
 *
 * @desc 判断元素是否有某个class
 * @param {HTMLElement} ele
 * @param {String} cls
 * @return {Boolean}
 */
export function hasClass(ele, cls) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className);
}

/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */
export function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

/**
 *
 * @desc 为元素移除class
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}

/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}
