/**
 * @file file description here.
 * @author winstar
 * @date 2017/9/1
 */

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
}
