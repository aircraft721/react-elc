const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: ['whatwg-fetch', 'babel-polyfill', './src/App.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.webpack.js', '.web.js']
    },
    stats: {
        maxModules: Infinity,
        optimizationBailout: true
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                type: 'javascript/auto',
                loader: 'json-loader'
            },
            {
                test: /\.svg(\?.*)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}