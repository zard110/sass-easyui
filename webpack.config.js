const webpack = require('webpack');
const path = require('path');

const config = {

};

module.exports = {
  devtool: "source-map",

  entry: './main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
};
