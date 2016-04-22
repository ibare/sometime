const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'main.js'
  },
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
