/**
 * @file file description here.
 * @author winstar
 * @date 2016/10/6
 */

const http = require('http');
let body = '';

const req = http.request({
    host: '10.14.87.100',
    port: 8080,
    method: 'POST',
    path: 'http://quan5.sparta.html5.qq.com/node/api/getHotPostList',
    headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': 153,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': 'pgv_pvi=1529716736; 3g_guest_id=-8832808668161372160; RK=YKfejhZ6to; qb_guid=6146897c8339018ad5747caf122788cb; Q-H5-GUID=6146897c8339018ad5747caf122788cb; c_sk=703f801ede348757d95137909fcf12ee; c_sa=90671aedd7bf2dcc4272c8d49ec06d6dcdac32f16e5da5d648e84d9b8f42e3e6; tag_nickname=winstar; tag_faceIcon=http%3A%2F%2Fq%2Eqlogo%2Ecn%2Fg%3Fb%3Dqq%26s%3D100%26nk%3D2583349920; c_user=1:2583349920; quan_login_context_type=4; quan_token_type=2; pgv_pvid=1194358494; o_cookie=2583349920; g_ut=3; _qpsvr_localtk=0.10736759844944443; pgv_si=s7084647424; uin=o2583349920; skey=@9w2INtcPL; pt2gguin=o2583349920; ptisp=ctc; luin=o2583349920; lskey=00010000e7a7f5a08c99fdce68eaad0fb5cc03ae7393f265e3e4b07856e2e0846539388173ab7c8257edb4b0; ptcz=d7d6e70d045cdf3d9f60822f06b6b519b6c8d25aeba53ffb3967f4175caf2443; qqopenid=2583349920; qqopenkey=@9w2INtcPL; wxopenid=; wxopenkey=',
        'Host': 'quan5.sparta.html5.qq.com',
        'Origin': 'http://quan5.sparta.html5.qq.com',
        'Pragma': 'no-cache',
        'Referer': 'http://quan5.sparta.html5.qq.com/node/',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
        'X-Requested-With': 'XMLHttpRequest'
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