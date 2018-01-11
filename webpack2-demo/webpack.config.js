const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'/*,
        another: './src/another-module.js'*/
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })/*,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })*/
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};