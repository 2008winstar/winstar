/**
 * @file file description here.
 * @author winstar
 * @date 2017/12/20
 */
self.addEventListener('install', function (e) {
    console.log('install event: ', e);
});

self.addEventListener('activate', function (e) {
    console.log('activate event: ', e);
})