var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig ,{
  entry: resolve('examples/main.js'),
  output: {
    filename: '[name]-[chunkhash].js',
    path: resolve('examples/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('examples/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    })
  ]
});
