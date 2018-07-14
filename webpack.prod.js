const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    cache: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(true),
                NODE_ENV: JSON.stringify('dev')
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            cache: false
        })
    ],  
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
});