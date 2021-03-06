const path = require('path');
var webpack = require('webpack');



module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),
  entry:
    {
      'index': './loadIndex.js'
    }
  ,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  }
};
