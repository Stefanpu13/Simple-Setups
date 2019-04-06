const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 9194,
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
          // Explicitly point the template, so that the content in html file is not overridden
          template:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
};