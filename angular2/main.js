/**
 * @file file description here
 * @author wendegang (wendegang@baidu.com)
 */
function AppComponent() {}

AppComponent.annotations = [
    new angular.Component({
        selector: 'my-app'
    }),
    new angular.View({
        template: '<h1>My first Angular 2 App</h1>'
    })
];

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(AppComponent);
});