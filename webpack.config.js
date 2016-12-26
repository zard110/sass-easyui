const path = require('path');

const config = {
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
  },

  resolve: {
    alias: {
      'easyui.plugins': path.resolve(__dirname, './easyui/1.5.1/plugins'),
      'easyui.css': path.resolve(__dirname, './easyui/1.5.1/themes/default'),
      'easyui.icon': path.resolve(__dirname, './easyui/1.5.1/themes/icon.css'),
      'easyui.locale': path.resolve(__dirname, './easyui/1.5.1/locale')
    }
  }
};

module.exports = config;
