const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const PATHS = {
    app: path.join(__dirname, 'src/js'),
    build: path.join(__dirname, 'public')
}
module.exports = {
    entry: ['babel-polyfill', PATHS.app],
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loaders: ['style','css']
        }]
    },
    plugins:[new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    watch:true
}