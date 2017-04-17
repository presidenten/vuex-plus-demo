// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var webpackConfig = merge(baseConfig, {
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  devtool: 'eval',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new FriendlyErrorsPlugin()
  ]
})

module.exports = webpackConfig
