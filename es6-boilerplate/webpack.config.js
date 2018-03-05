/**
 * @file file description here.
 * @author winstar
 * @date 2018/2/25
 */
let path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
