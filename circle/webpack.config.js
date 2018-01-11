const path = require('path');
const projectRoot = path.resolve(__dirname, '.');

module.exports = {
    entry: projectRoot + '/src/index.js',
    output: {
        path: projectRoot + '/public/dist',
        filename: 'bundle.client.js',
        publicPath: '/dist/'
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                loader: 'sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    }
};