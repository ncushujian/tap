const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolve = function (str) {
  return path.resolve(__dirname, str);
};

module.exports = {
  mode: 'production',
  entry: {
    index: resolve('./index.js')
  },
  output: {
    path: resolve('./dist'),
    filename: 'index.[contenthash:8].js',
    publicPath: './'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('./index.html'),
      filename: 'test.html',
      inject: true
    })
  ]
};
