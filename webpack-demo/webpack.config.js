/**
 * @file file description here.
 * @author winstar
 * @date 2016/9/6
 */

module.exports = {
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },
    postcss: [
        require('autoprefixer')
    ],
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
};
