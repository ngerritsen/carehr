'use strict'

const webpack = require('webpack')

const config = {
  entry: './scripts/main.js',
  output: {
    path: './',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = [new webpack.optimize.UglifyJsPlugin()]
}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-maps'
  config.watch = true
}

module.exports = config
