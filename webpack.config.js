const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './dev/index.js',
    output: {
        path: path.resolve(__dirname, 'prod'),
        filename: 'bundle.js'
    },
    watch: NODE_ENV === 'development',
    devtool: NODE_ENV === 'development' && 'eval-source-map',
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.js/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                     'babel-loader',
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { modules: true } }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
    ],
};
