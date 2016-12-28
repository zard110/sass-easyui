const webpack = require('webpack');
const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
  devtool: "source-map",

  context: path.resolve(__dirname, "src"),

  entry: {
    main: './main.js',
    jquery: 'jquery',
    angular: 'angular',
    'angular-resource': 'angular-resource',
    'angular-ui-router': 'angular-ui-router'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
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
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
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
      'easyui.locale': path.resolve(__dirname, 'easyui/1.5.1/locale/easyui-lang-zh_CN.js'),

      'iconfont': path.resolve(__dirname, 'src/iconfont/common-line/iconfont.css')
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['angular-resource', 'angular-ui-router', 'angular', 'jquery', 'manifest']
    })

    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 3000,
    //   files: '',
    //   server: {
    //     baseDir: './'
    //   }
    // })
  ]
};

module.exports = config;
