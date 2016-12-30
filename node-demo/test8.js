/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/6
 */

const http = require('http');
let body = '';

const req = http.request({
    host: '101.226.76.179',
    post: 80,
    method: 'POST',
    path: 'http://circletest.html5.qq.com/api/getHotPostList',
    headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': 61,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'RK=zVF3Ar2COd; pac_uid=1_67501688; pgv_pvi=6379761664; o_cookie=67501688; pgv_pvid=5657852300; _ga=GA1.2.1909295550.1474541837; pt2gguin=o0067501688; uin=o0067501688; skey=@LG3ZZNL2O; ptisp=ctc; luin=o0067501688; lskey=00010000968096434a33433b716cbfaca358c0181f09ab8f19d509b7e07a9de2b0e8d2e62c961a1ab542aea5; ptcz=adba2d6ca28de1e989cbdf9b9b671d2037a35b39d910b2262ce78740f8cbe377; c_sk=be6f21fe1def0d258ba8611e8f52b343; c_sa=1043cd908a73289744e4216555ff48d3214d43cbbbb5f1e4; tag_nickname=%E2%98%86%E2%98%85%E5%B0%8F%E5%88%9A%E2%98%85%E2%98%86; tag_faceIcon=http%3A%2F%2Fq%2Eqlogo%2Ecn%2Fg%3Fb%3Dqq%26s%3D100%26nk%3D67501688; c_user=1:67501688',
        'Host': 'circletest.html5.qq.com',
        'Origin': 'http://circletest.html5.qq.com',
        'Pragma': 'no-cache',
        'Referer': 'http://circletest.html5.qq.com/node/'/*,
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        'X-Requested-With': 'XMLHttpRequest'*/
    }
}, function (res) {
    console.log('Got response: ' + res.statusCode);
    res.on('data', function (data) {
        body += data;
    }).on('end', function () {
        console.log(res.headers);
        console.log(body)
    });
}).on('error', function (e) {
    console.log('Got error: ' + e.message);
});

req.end();