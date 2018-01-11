const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        color: './src/Color.js',
        star: './src/StarRating.js',
        colorApp: './src/ColorApp.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: '#sourcemap',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    }
};