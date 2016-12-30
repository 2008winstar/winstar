/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/7
 */

const win = require('../../../util/win');

describe('done', function () {
    it('ok', function () {
        expect(win.uniqueArray([1, 2, 3, 4, 5, 5, 4])).toEqual([1, 2, 3, 4, 5]);
    });
});