/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/8
 */

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};
