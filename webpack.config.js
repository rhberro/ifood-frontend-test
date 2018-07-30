const path = require('path')

const DotenvWebpack = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'source'),
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'source/index.html'),
        favicon: path.resolve(__dirname, 'source/favicon.ico')
      }
    ),
    new DotenvWebpack()
  ],
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build')
  }
}
