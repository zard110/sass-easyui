const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: "source-map",

  context: path.resolve(__dirname, "src"),

  entry: {
    main: './main.js',
    vendor: 'jquery'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
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
      'easyui': path.resolve(__dirname, 'easyui/index.js'),
      'easyui.plugins': path.resolve(__dirname, 'easyui/1.5.1/plugins'),
      'easyui.css': path.resolve(__dirname, 'easyui/1.5.1/themes/default'),
      'easyui.icon': path.resolve(__dirname, 'easyui/1.5.1/themes/icon.css'),
      'easyui.locale': path.resolve(__dirname, 'easyui/1.5.1/locale/easyui-lang-zh_CN.js')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    })
  ]
};

module.exports = config;
