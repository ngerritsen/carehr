'use strict';

const webpack = require('webpack');

const config = {
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  delete config.devtool;
  config.plugins = [new webpack.optimize.UglifyJsPlugin()];
}

module.exports = config;
