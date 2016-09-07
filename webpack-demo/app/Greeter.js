/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/6
 */

const React = require('react');
const style = require('./Greeter.css');

module.exports = React.createClass({
    render() {
        return (
            <div className={style.root}>Hello there!</div>
        )
    }
});
/*
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = 'Hi there and greetings!';
    return greet;
};
*/
