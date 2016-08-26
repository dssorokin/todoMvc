/**
 * Created by projs on 11.07.16.
 */

var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
    watch: true,
    entry: {
        app: './src/app/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: [/node_modules/], loader: 'babel?presets[]=es2015'},
            { test: /\.scss$/, loader: 'style!css!sass'},
            { test: /\.html$/, loader: 'raw' },
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader'}
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
    }
    
};