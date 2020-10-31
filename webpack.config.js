const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    output: {
        filename: '[name].js'
    },
    module: { 
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            base: '/'
        })
    ]      
}