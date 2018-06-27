const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    cache: false,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],  
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: 'style-loader'
            }
        ]
    },
    devServer: {
        port: 9000,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: false,
            assets: true,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: false,
            errorDetails: true,
            warnings: true,
            publicPath: false
        }
    },
});